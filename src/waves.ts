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
const TEMPLATE_JACCARD = 0.6;
const TEMPLATE_MIN_TERMS = 3;
const TEMPLATE_MIN_NEIGHBORS = 1;
const MIN_SHARED_TERMS = 3;

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
  const { minRepos = 5, minBurst = 3, mergeOverlap = 0.4, minCohesion = 0.5, today } = opts;
  const termSets: TermSets = new Map(recent.map((repo) => [repo, terms(repo)]));
  const templated = templatedRepos(recent, termSets);

  const baselineByTerm = new Map<string, number>();
  for (const repo of baseline) {
    for (const term of terms(repo)) baselineByTerm.set(term, (baselineByTerm.get(term) ?? 0) + 1);
  }
  const scale = recent.length / Math.max(1, baseline.length);
  const group = (repos: Repo[]) =>
    groupWaves(repos, termSets, baselineByTerm, scale, { minRepos, minBurst, mergeOverlap, today });

  const organic = group(recent.filter((r) => !templated.has(r))).filter(
    (w) => w.flags.length > 0 || (w.burst >= minBurst && w.cohesion >= minCohesion),
  );
  const clean = organic.filter((w) => w.flags.length === 0);
  const coordinated = organic.filter((w) => w.flags.length > 0);
  for (const copies of group(recent.filter((r) => templated.has(r)))) {
    copies.flags.unshift("near-duplicate");
    const twin = coordinated.findIndex((w) => w.id === copies.id || w.aliases.includes(copies.id));
    if (twin >= 0) {
      const w = coordinated[twin] as Wave;
      const merged = buildWave(
        [...new Set([w.id, ...w.aliases, copies.id, ...copies.aliases])],
        [...w.repos, ...copies.repos],
        termSets,
        baselineByTerm,
        scale,
        today,
      );
      merged.flags = [...new Set([...copies.flags, ...w.flags])];
      coordinated[twin] = merged;
    } else {
      if (clean.some((w) => w.id === copies.id)) copies.id = `${copies.id}-clones`;
      coordinated.push(copies);
    }
  }

  const byVelocity = (a: Wave, b: Wave) => b.velocity - a.velocity || (a.id < b.id ? -1 : 1);
  return [...clean.sort(byVelocity), ...coordinated.sort(byVelocity)];
}

type GroupOptions = { minRepos: number; minBurst: number; mergeOverlap: number; today: string };

function groupWaves(
  repos: Repo[],
  termSets: TermSets,
  baselineByTerm: Map<string, number>,
  scale: number,
  { minRepos, minBurst, mergeOverlap, today }: GroupOptions,
): Wave[] {
  const recentByTerm = new Map<string, Repo[]>();
  for (const repo of repos) {
    for (const term of termSets.get(repo) ?? []) {
      const list = recentByTerm.get(term);
      if (list) list.push(repo);
      else recentByTerm.set(term, [repo]);
    }
  }
  const candidates = Array.from(recentByTerm, ([term, members]) => {
    const burst = members.length / ((baselineByTerm.get(term) ?? 0) * scale + 1);
    return { term, repos: members, burst, score: burst * Math.log10(sumStars(members) + 10) };
  })
    .filter((c) => c.repos.length >= minRepos && c.burst >= minBurst)
    .sort((a, b) => b.score - a.score || (a.term < b.term ? -1 : 1));

  const groups: { terms: string[]; repos: Set<Repo> }[] = [];
  const claimed = new Set<Repo>();
  for (const candidate of candidates) {
    const members = new Set(candidate.repos);
    const home = groups.find((g) => overlap(members, g.repos) >= mergeOverlap);
    let free = candidate.repos.filter((r) => !claimed.has(r));
    if (home) {
      home.terms.push(candidate.term);
      free = free.filter((r) => sharedTerms(termSets.get(r), home.terms) >= MIN_SHARED_TERMS);
      for (const repo of free) home.repos.add(repo);
    } else if (free.length >= minRepos) {
      groups.push({ terms: [candidate.term], repos: new Set(free) });
    } else {
      continue;
    }
    for (const repo of free) claimed.add(repo);
  }

  return groups.map((g) => buildWave(g.terms, [...g.repos], termSets, baselineByTerm, scale, today));
}

function buildWave(
  waveTerms: string[],
  repos: Repo[],
  termSets: TermSets,
  baselineByTerm: Map<string, number>,
  scale: number,
  today: string,
): Wave {
  const members = [...repos].sort((a, b) => b.stars - a.stars || (a.fullName < b.fullName ? -1 : 1));
  const anchor = members[0] as Repo;
  const stars = sumStars(members);
  const baselineCount = Math.max(...waveTerms.map((t) => baselineByTerm.get(t) ?? 0));
  const burst = members.length / (baselineCount * scale + 1);
  const ownerCount = new Set(members.map(ownerOf)).size;
  return {
    id: waveTerms[0] as string,
    aliases: waveTerms.slice(1),
    repos: members,
    repoCount: members.length,
    ownerCount,
    stars,
    velocity: members.reduce((sum, r) => sum + r.stars / ageDays(r, today), 0),
    firstSeen: members.reduce((min, r) => (r.createdAt < min ? r.createdAt : min), anchor.createdAt),
    baselineCount,
    burst,
    cohesion: cohesionOf(members, waveTerms, termSets),
    score: burst * Math.log10(stars + 10),
    anchor,
    flags: flagsOf(members, ownerCount, stars),
  };
}

function templatedRepos(repos: Repo[], termSets: TermSets): Set<Repo> {
  const sets = repos.map((repo) => termSets.get(repo) ?? new Set<string>());
  const neighbors = repos.map(() => 0);
  // ponytail: O(n²) pairwise scan, ~2 s for 2,500 repos; index by term if the window grows past 10k
  for (let i = 0; i < repos.length; i++) {
    const a = sets[i] as Set<string>;
    if (a.size < TEMPLATE_MIN_TERMS) continue;
    for (let j = i + 1; j < repos.length; j++) {
      const b = sets[j] as Set<string>;
      if (b.size < TEMPLATE_MIN_TERMS || ownerOf(repos[i] as Repo) === ownerOf(repos[j] as Repo)) continue;
      if (jaccard(a, b) >= TEMPLATE_JACCARD) {
        (neighbors[i] as number)++;
        (neighbors[j] as number)++;
      }
    }
  }
  return new Set(repos.filter((_, i) => (neighbors[i] as number) >= TEMPLATE_MIN_NEIGHBORS));
}

function flagsOf(repos: Repo[], ownerCount: number, stars: number): Flag[] {
  const n = repos.length;
  const flags: Flag[] = [];
  if (n >= 10 && modeShare(repos.map((r) => r.createdAt)) >= 0.6) flags.push("same-day");
  if (n >= 10 && ownerCount / n < 0.5) flags.push("few-owners");
  if (n >= 20 && (repos[0] as Repo).stars / stars < 0.1) flags.push("flat-stars");
  return flags;
}

function cohesionOf(repos: Repo[], waveTerms: string[], termSets: TermSets): number {
  const own = new Set(waveTerms);
  const sets = repos.map((repo) => new Set([...(termSets.get(repo) ?? [])].filter((t) => !own.has(t))));
  const linked = sets.filter((a, i) => sets.some((b, j) => j !== i && sharesAny(a, b)));
  return repos.length === 0 ? 0 : linked.length / repos.length;
}

function sharesAny(a: Set<string>, b: Set<string>): boolean {
  for (const term of a) if (b.has(term)) return true;
  return false;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  let shared = 0;
  for (const term of a) if (b.has(term)) shared++;
  const union = a.size + b.size - shared;
  return union === 0 ? 1 : shared / union;
}

function sharedTerms(set: Set<string> | undefined, waveTerms: string[]): number {
  return set ? waveTerms.filter((t) => set.has(t)).length : 0;
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
