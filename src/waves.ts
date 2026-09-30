import type { Flag, Repo, Wave } from "./types.js";

export const STOP: ReadonlySet<string> = new Set(
  `a an the and or of for to in on with by from at as is are be your you we our my this that it its into over via
   any all one new open source opensource ai llm llms agent agents tool tools app apps cli framework library lib
   based using use used built build make made simple fast free easy powerful modern lightweight local first native
   web api sdk plugin plugins skill skills claude code codex cursor gemini chatgpt gpt openai anthropic model models
   mcp server client python typescript javascript rust go swift react next nextjs node data project projects repo
   github collection list awesome curated guide tutorial learning platform system engine runtime support supports
   powered without across between more than just like get run works work version v1 v2 ultimate best top self
   hosted selfhosted self-hosted open-source english
   aim cache cached concurrent covering curl default does examples extend gateway input mini name nano
   openai-compatible output per plays pricing problem questions raw releases scored script sec settings sheet
   standalone tested tokens versions`.split(/\s+/),
);

const ASCII_TOKEN = /[a-z][a-z0-9+.\-]{1,}/g;
const DAY_MS = 86_400_000;

export type DetectOptions = {
  minRepos?: number;
  minBurst?: number;
  mergeOverlap?: number;
  minCohesion?: number;
  today: string;
};

export function terms(repo: Repo): Set<string> {
  const name = repo.fullName.slice(repo.fullName.indexOf("/") + 1);
  const text = `${name} ${repo.description}`.toLowerCase();
  const tokens = Array.from(text.matchAll(ASCII_TOKEN), (m) => m[0]).concat(
    repo.topics.map((t) => t.toLowerCase()),
  );
  const out = new Set<string>();
  for (const token of tokens) {
    const term = token.replace(/^[.-]+|[.-]+$/g, "");
    for (const part of [term, ...term.split(/[.-]/)]) {
      if (part.length < 3 || /^\d+$/.test(part) || STOP.has(part)) continue;
      out.add(part);
    }
  }
  return out;
}

export function ageDays(repo: Repo, today: string): number {
  return Math.max(1, Math.round((Date.parse(today) - Date.parse(repo.createdAt)) / DAY_MS));
}

type TermSets = Map<Repo, Set<string>>;

export function detectWaves(recent: Repo[], baseline: Repo[], opts: DetectOptions): Wave[] {
  const { minRepos = 5, minBurst = 3, mergeOverlap = 0.4, minCohesion = 0.25, today } = opts;
  const termSets: TermSets = new Map(recent.map((repo) => [repo, terms(repo)]));

  const recentByTerm = new Map<string, Repo[]>();
  for (const [repo, set] of termSets) {
    for (const term of set) {
      const list = recentByTerm.get(term);
      if (list) list.push(repo);
      else recentByTerm.set(term, [repo]);
    }
  }
  const baselineByTerm = new Map<string, number>();
  for (const repo of baseline) {
    for (const term of terms(repo)) baselineByTerm.set(term, (baselineByTerm.get(term) ?? 0) + 1);
  }

  const scale = recent.length / Math.max(1, baseline.length);
  const burstOf = (count: number, baselineCount: number) => count / (baselineCount * scale + 1);
  const scoreOf = (burst: number, stars: number) => burst * Math.log10(stars + 10);

  const candidates = Array.from(recentByTerm, ([term, repos]) => {
    const burst = burstOf(repos.length, baselineByTerm.get(term) ?? 0);
    return { term, repos, burst, score: scoreOf(burst, sumStars(repos)) };
  })
    .filter((c) => c.repos.length >= minRepos && c.burst >= minBurst)
    .sort((a, b) => b.score - a.score || (a.term < b.term ? -1 : 1));

  const groups: { terms: string[]; repos: Set<Repo> }[] = [];
  const claimed = new Set<Repo>();
  for (const candidate of candidates) {
    const repos = new Set(candidate.repos);
    const home = groups.find((g) => overlap(repos, g.repos) >= mergeOverlap);
    let free = candidate.repos.filter((r) => !claimed.has(r));
    if (home) {
      home.terms.push(candidate.term);
      free = free.filter((r) => sharedTerms(termSets.get(r), home.terms) >= 2);
      for (const repo of free) home.repos.add(repo);
    } else if (free.length >= minRepos) {
      groups.push({ terms: [candidate.term], repos: new Set(free) });
    } else {
      continue;
    }
    for (const repo of free) claimed.add(repo);
  }

  const waves = groups.map((group): Wave => {
    const repos = [...group.repos].sort((a, b) => b.stars - a.stars || (a.fullName < b.fullName ? -1 : 1));
    const anchor = repos[0] as Repo;
    const stars = sumStars(repos);
    const ownerCount = new Set(repos.map(ownerOf)).size;
    const baselineCount = Math.max(...group.terms.map((t) => baselineByTerm.get(t) ?? 0));
    const burst = burstOf(repos.length, baselineCount);
    const cohesion = cohesionOf(repos, group.terms, termSets);
    return {
      id: group.terms[0] as string,
      aliases: group.terms.slice(1),
      repos,
      repoCount: repos.length,
      ownerCount,
      stars,
      velocity: repos.reduce((sum, r) => sum + r.stars / ageDays(r, today), 0),
      firstSeen: repos.reduce((min, r) => (r.createdAt < min ? r.createdAt : min), anchor.createdAt),
      baselineCount,
      burst,
      cohesion,
      score: scoreOf(burst, stars),
      anchor,
      flags: flagsOf(repos, ownerCount, stars, termSets),
    };
  });

  const byScore = (a: Wave, b: Wave) => b.score - a.score;
  const kept = waves.filter((w) => w.repoCount >= 20 || w.cohesion >= minCohesion);
  return [
    ...kept.filter((w) => w.flags.length === 0).sort(byScore),
    ...kept.filter((w) => w.flags.length > 0).sort(byScore),
  ];
}

function cohesionOf(repos: Repo[], waveTerms: string[], termSets: TermSets): number {
  const own = new Set(waveTerms);
  const sets = repos.map((repo) => new Set([...(termSets.get(repo) ?? [])].filter((t) => !own.has(t))));
  let pairs = 0;
  let linked = 0;
  // ponytail: O(n²) pairwise scan, waves are < 500 repos
  for (const [i, a] of sets.entries()) {
    for (const b of sets.slice(i + 1)) {
      pairs++;
      if (sharesAny(a, b)) linked++;
    }
  }
  return pairs === 0 ? 0 : linked / pairs;
}

function sharesAny(a: Set<string>, b: Set<string>): boolean {
  for (const term of a) if (b.has(term)) return true;
  return false;
}

function flagsOf(repos: Repo[], ownerCount: number, stars: number, termSets: TermSets): Flag[] {
  const n = repos.length;
  const flags: Flag[] = [];
  if (n >= 10 && modeShare(repos.map((r) => r.createdAt)) >= 0.6) flags.push("same-day");
  if (n >= 10 && ownerCount / n < 0.5) flags.push("few-owners");
  if (n >= 20 && (repos[0] as Repo).stars / stars < 0.1) flags.push("flat-stars");
  if (n >= 10 && duplicateShare(repos, termSets) >= 0.5) flags.push("near-duplicate");
  return flags;
}

function duplicateShare(repos: Repo[], termSets: TermSets): number {
  const sets = repos.map((repo) => termSets.get(repo) ?? new Set<string>());
  let duplicates = 0;
  // ponytail: O(n²) pairwise scan, waves are < 500 repos
  for (const [i, a] of sets.entries()) {
    if (sets.some((b, j) => j !== i && jaccard(a, b) >= 0.7)) duplicates++;
  }
  return duplicates / repos.length;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  let shared = 0;
  for (const term of a) if (b.has(term)) shared++;
  const union = a.size + b.size - shared;
  return union === 0 ? 1 : shared / union;
}

function sharedTerms(set: Set<string> | undefined, terms: string[]): number {
  return set ? terms.filter((t) => set.has(t)).length : 0;
}

function overlap(a: Set<Repo>, b: Set<Repo>): number {
  let shared = 0;
  for (const repo of a) if (b.has(repo)) shared++;
  return shared / Math.min(a.size, b.size);
}

function modeShare(values: string[]): number {
  const counts = new Map<string, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  return Math.max(...counts.values()) / values.length;
}

const sumStars = (repos: Repo[]) => repos.reduce((sum, r) => sum + r.stars, 0);
const ownerOf = (repo: Repo) => repo.fullName.slice(0, repo.fullName.indexOf("/"));
