# starwave design

One sentence: `npx starwave` fetches every GitHub repo created in the last N days with at least M stars, plus a baseline of repos from the weeks before, and reports the *waves*: clusters of new repos that share a bursting term (a new model, harness, API, or idea), ranked by star velocity, with coordinated-looking clusters flagged.

Non-goals for v1: no LLM calls, no database, no web UI, no Chinese word segmentation (CJK runs are skipped; note the ceiling in code), no star-history per repo.

## Constraints

- Node >= 20, TypeScript compiled with `tsc` to `dist/`. **Zero runtime dependencies.** Only dev dependency: `typescript`. Global `fetch`, `node:util` `parseArgs`, `node:test`, `node:zlib`, `node:fs`.
- `package.json`: `"type": "module"`, `"bin": { "starwave": "dist/cli.js" }`, `"files": ["dist"]`, scripts `build`, `test` (`node --test`), `start`.
- Every module is a pure function except `github.ts` (network + cache) and `cli.ts` (I/O). `detectWaves` is deterministic given its inputs so the fixture test is exact.
- No comments that narrate. One `// ponytail:` comment where a known ceiling is accepted (for example the O(n²) duplicate scan).

## Data shapes (`src/types.ts`)

```ts
export type Repo = {
  fullName: string;          // "owner/name"
  stars: number;
  createdAt: string;         // "YYYY-MM-DD"
  description: string;       // may be ""
  topics: string[];
  language: string | null;
};

export type Wave = {
  id: string;                // primary term, e.g. "jev"
  aliases: string[];         // other terms merged in, e.g. ["laya", "typesafe", "system-one"]
  repos: Repo[];             // union over id + aliases, sorted by stars desc
  repoCount: number;
  ownerCount: number;        // distinct owners
  stars: number;             // sum
  velocity: number;          // sum over repos of stars / max(1, ageDays)
  firstSeen: string;         // min createdAt
  baselineCount: number;     // repos in baseline whose terms include id (max over id+aliases)
  burst: number;             // recentCount / (expected + 1), expected = baselineCount * recent.length / baseline.length
  cohesion: number;          // share of repo pairs sharing a term beyond the wave's own terms, 0..1
  score: number;             // burst * log10(stars + 10)
  anchor: Repo;              // repos[0]
  flags: Flag[];             // empty when the wave looks organic
};

export type Flag = "same-day" | "few-owners" | "flat-stars" | "near-duplicate";

export type Snapshot = {
  generatedAt: string;       // ISO datetime
  recentWindow: { from: string; to: string; minStars: number };
  baselineWindow: { from: string; to: string; minStars: number };
  recentCount: number;
  baselineCount: number;
  waves: Wave[];             // organic first (no flags), then flagged, each group by velocity desc
};
```

The test fixture `test/fixtures/2026-09-30.json.gz` is gzip JSON with `{ capturedAt, recentWindow, baselineWindow, recent: Repo[], baseline: Repo[] }`, the capture of a default run (`--days 14 --min-stars 40 --baseline-days 60 --baseline-min-stars 150`) on 2026-09-30: 1,538 recent and 2,828 baseline repos.

## Modules

`src/github.ts`
- `resolveToken()`: `GITHUB_TOKEN` env, else `gh auth token` via `child_process.execFileSync`, else throw with a one-line fix.
- `searchRepos(query, token, onProgress?)`: GET `https://api.github.com/search/repositories?q=...&sort=stars&order=desc&per_page=100&page=N`, headers `Accept: application/vnd.github+json`, `Authorization: Bearer`, `X-GitHub-Api-Version: 2022-11-28`, `User-Agent: starwave`. Pages until a page has fewer than 100 items or page 10. Maps items to `Repo` (`created_at` sliced to 10 chars, `description ?? ""`, `topics ?? []`). On 403/429 with `retry-after` or `x-ratelimit-remaining: 0`, sleep until `x-ratelimit-reset` (cap 70 s) and retry once. Search allows 30 requests/min: keep a simple pacing of >= 2.1 s between requests.
- `fetchWindow(from, to, minStars, sliceDays, token, onProgress)`: splits `[from, to]` into slices of `sliceDays` and concatenates `searchRepos` results for `created:A..B stars:>=M`, deduped by fullName. Slicing exists because search caps at 1,000 results per query.
- `loadCached(key) / saveCached(key, value)`: JSON files in `~/.cache/starwave/`, TTL 6 h, key = hash of the query parameters. `--no-cache` bypasses.

`src/waves.ts` (pure)
- `terms(repo): Set<string>`: lowercase `name + " " + description`; tokens `/[a-z][a-z0-9+.\-]{1,}/g`, trimmed of leading and trailing `.-`; each hyphen- or dot-joined token also yields its parts (`hermes-jev-skills` gives `hermes`, `jev`, `skills` and the compound); plus each topic lowercased; drop length < 3, pure digits, and anything in `STOP`. `STOP` is a frozen list of generic words (articles, "ai", "llm", "agent", "tool", "app", "cli", "framework", "open", "source", "claude", "codex", "cursor", "chatgpt", "gpt", "openai", "anthropic", "model", "models", "mcp", "server", "python", "typescript", "javascript", "rust", "api", "sdk", "plugin", "plugins", "skill", "skills", "free", "fast", "simple", "local", "native", "web", "awesome", "curated", "list", "guide", "based", "using", "built", "powered", "support", "supports", "your", "with", "for", "and", "the", …). Start from the list in `/Users/chaoqi/Dev/trending-lab/proto/waves.py` and extend when the fixture output shows junk.
- `detectWaves(recent, baseline, opts): Wave[]` with `opts = { minRepos = 5, minBurst = 3, mergeOverlap = 0.4, minCohesion = 0.5, today }`:
  0. Template pass over all recent repos: a repo is *templated* when another repo from a different owner has Jaccard(terms) >= 0.6 with it (both with >= 3 terms). Templated repos are grouped on their own; everything else is the organic population. Farms that spread across many small waves used to escape per-wave flags with an n >= 10 floor; this catches them before grouping. O(n²) over ~2,500 repos, about a second.
  1. Index the population's repos by term; count baseline repos by term (baseline counts are shared by both populations).
  2. For each term with >= minRepos repos: burst = count / (baselineCount × recent/baseline + 1), score = burst × log10(stars + 10). Keep burst >= minBurst.
  3. Sort terms by score desc. Greedy merge: a term joins the first existing wave where `|repos(term) ∩ repos(wave)| / min(|repos(term)|, |repos(wave)|) >= mergeOverlap`; otherwise it starts a new wave. A repo belongs to at most one wave: the first wave (in score order) that reaches it claims it. A repo joining an existing wave through a merged term must carry at least 3 of that wave's terms; two was not enough once a big wave had accumulated generic aliases ("compatible", "retry").
  4. Per wave: `cohesion` = share of repos that share at least one term beyond the wave's own terms with another repo in the wave. Organic waves need final burst >= minBurst (the candidate count shrinks once other waves claim repos) and cohesion >= minCohesion; nine unrelated repos that all say "bit" score 0.
  5. Flags on the wave's repos: `same-day` (n >= 10, the most common createdAt holds >= 60 %), `few-owners` (n >= 10, ownerCount / n < 0.5), `flat-stars` (n >= 20, anchor.stars / stars < 0.10). Every templated wave carries `near-duplicate`. A templated wave whose id matches a flagged organic wave merges into it (the two halves of one farm); one that collides with a clean organic id gets the suffix `-clones`.
  6. Return clean organic waves sorted by velocity desc, then everything flagged sorted by velocity desc.
- `ageDays(repo, today)` = max(1, days between).

`src/render.ts` (pure)
- `renderTable(snapshot, { top, color }) : string`: header line with counts and windows, then one row per wave: rank, `id (+aliases…)`, repoCount, owners, stars (k-formatted), velocity per day, firstSeen, anchor fullName. Flagged waves go under a second heading "Looks coordinated" with flags listed. ANSI bold/dim only when `color`.
- `renderMarkdown(snapshot, { top }) : string`: same content as a GitHub table, plus for each of the top 5 waves a bullet list of its top 5 repos with star counts. Used by the daily workflow to fill README between `<!-- starwave:start -->` and `<!-- starwave:end -->`.
- `renderWave(wave) : string`: every repo in a wave, one per line: stars, age in days, fullName, description truncated to 80 chars.

`src/cli.ts`
- Flags via `parseArgs`: `--days <n>` (default 14), `--min-stars <n>` (default 40), `--baseline-days <n>` (default 60), `--baseline-min-stars <n>` (default 150), `--top <n>` (default 15), `--json`, `--md`, `--show <wave-id>`, `--from <fixture-or-snapshot.json[.gz]>` (skip network; accepts the fixture shape or a saved Snapshot), `--save <path>` (write the raw `{recent, baseline}` capture), `--no-cache`, `--no-color`, `-h/--help`, `-v/--version`.
- Progress goes to stderr (`fetched 1,300 repos (page 7/…)`), output to stdout. Exit code 1 on token failure with the fix in one line: `set GITHUB_TOKEN or run: gh auth login`.
- Default command: fetch (or load), `detectWaves`, print table.

`src/index.ts`: re-export `detectWaves`, `renderMarkdown`, `renderTable`, types, so the package is also a library.

## Tests (`test/waves.test.ts`, `node --test`)

Load the gzip fixture, run `detectWaves(recent, baseline, { today: "2026-09-30" })`, then assert against named repos in the capture:
- the fixture is a default-window capture (40 / 150 star floors, > 1,000 recent and > 2,000 baseline repos).
- top organic wave is `jev`, >= 200 repos, aliases include `laya` and `typesafe`, anchor `NandhaKishorM/laya`, contains `browser-use/jev-ultrafast`.
- `opus` is organic with >= 15 repos and contains `yihui-dev/awesome-opus5-5-videos`.
- exactly one flagged wave carries `apimart`, with `near-duplicate` and `same-day`, >= 150 repos, an `apimart*` anchor, and none of `browser-use/jev-ultrafast`, `KKKKhazix/AIHOT`, `ghuntley/underclass`.
- `updated`, `discordfix`, `executor`, `auto-raid-complete-script` are not organic; no organic wave contains an `8-Ball-Pool-Autoplay`, `DiscordFix-`, or `Bunker-Script` repo; the Roblox script farm is flagged `near-duplicate`.
- `timoncool/YuE2-Studio` and `NandhaKishorM/laya` are in no flagged wave.
- every organic wave has cohesion >= 0.5; `bit`, `answers`, `point`, `midi` are not waves.
- organic waves are sorted by velocity desc and none is led by a stopword.
- every repo is in at most one wave and ids are unique.
- `detectWaves` is deterministic; `renderMarkdown` contains `| # |` and `NandhaKishorM/laya`.
- `terms()` strips stopwords, splits compounds, keeps topics, drops digits.

## Daily workflow (`.github/workflows/daily.yml`)

Cron `17 6 * * *` UTC plus `workflow_dispatch`. Steps: checkout, setup-node 22, `npm ci`, `npm run build`, `node dist/cli.js --json > data/$(date -u +%F).json`, `node dist/cli.js --md --top 10 > /tmp/waves.md`, replace the README block between the markers with `/tmp/waves.md` (a 10-line `node -e` script, no extra deps), `git commit` as `github-actions[bot]` with message `waves: YYYY-MM-DD`, push. `GITHUB_TOKEN` is the built-in token. `data/` stores only the Snapshot (waves), never the raw repo lists.

## Repo layout

```
starwave/
  package.json  tsconfig.json  LICENSE (MIT)  .gitignore (node_modules, dist)
  README.md  README.zh-CN.md  DESIGN.md
  src/{types,github,waves,render,cli,index}.ts
  test/waves.test.ts  test/fixtures/2026-09-30.json.gz
  skills/starwave/SKILL.md # agent skill: how to run starwave and summarize the result
  .github/workflows/{ci,daily}.yml
  data/                   # daily snapshots, committed by the workflow
```

## v1.1 (shipped 2026-09-30, commit after 75d4f17)

`GET /repos/{owner}/{repo}/stargazers/history` returns weekly buckets `{ week, total, days[7] }` (Sunday first) under the 5,000 req/h core limit. `src/history.ts` flattens them to dated counts. After `detectWaves`, the CLI enriches every wave whose anchor's history is not yet known (live run, or `--from` with a token): `velocity3d` = stars in the last 3 complete days, `spark` = the last 14 days as block characters. History responses cache under the same 6 h TTL; `--no-history` skips the enrichment entirely. Failures are per-anchor and silent beyond one stderr line, so `--from` stays usable offline.
