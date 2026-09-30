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
  waves: Wave[];             // organic first (no flags), then flagged, each group by score desc
};
```

The test fixture `test/fixtures/2026-09-30.json.gz` is gzip JSON with `{ capturedAt, recentWindow, baselineWindow, recent: Repo[], baseline: Repo[] }`, captured live on 2026-09-30 (2,250 recent repos created 2026-09-09..30 with >= 40 stars; 3,318 baseline repos created 2026-06-01..09-08 with >= 150 stars).

## Modules

`src/github.ts`
- `resolveToken()`: `GITHUB_TOKEN` env, else `gh auth token` via `child_process.execFileSync`, else throw with a one-line fix.
- `searchRepos(query, token, onProgress?)`: GET `https://api.github.com/search/repositories?q=...&sort=stars&order=desc&per_page=100&page=N`, headers `Accept: application/vnd.github+json`, `Authorization: Bearer`, `X-GitHub-Api-Version: 2022-11-28`, `User-Agent: starwave`. Pages until a page has fewer than 100 items or page 10. Maps items to `Repo` (`created_at` sliced to 10 chars, `description ?? ""`, `topics ?? []`). On 403/429 with `retry-after` or `x-ratelimit-remaining: 0`, sleep until `x-ratelimit-reset` (cap 70 s) and retry once. Search allows 30 requests/min: keep a simple pacing of >= 2.1 s between requests.
- `fetchWindow(from, to, minStars, sliceDays, token, onProgress)`: splits `[from, to]` into slices of `sliceDays` and concatenates `searchRepos` results for `created:A..B stars:>=M`, deduped by fullName. Slicing exists because search caps at 1,000 results per query.
- `loadCached(key) / saveCached(key, value)`: JSON files in `~/.cache/starwave/`, TTL 6 h, key = hash of the query parameters. `--no-cache` bypasses.

`src/waves.ts` (pure)
- `terms(repo): Set<string>`: lowercase `name + " " + description`; tokens `/[a-z][a-z0-9+.\-]{1,}/g`, trimmed of leading and trailing `.-`; each hyphen- or dot-joined token also yields its parts (`hermes-jev-skills` gives `hermes`, `jev`, `skills` and the compound); plus each topic lowercased; drop length < 3, pure digits, and anything in `STOP`. `STOP` is a frozen list of generic words (articles, "ai", "llm", "agent", "tool", "app", "cli", "framework", "open", "source", "claude", "codex", "cursor", "chatgpt", "gpt", "openai", "anthropic", "model", "models", "mcp", "server", "python", "typescript", "javascript", "rust", "api", "sdk", "plugin", "plugins", "skill", "skills", "free", "fast", "simple", "local", "native", "web", "awesome", "curated", "list", "guide", "based", "using", "built", "powered", "support", "supports", "your", "with", "for", "and", "the", …). Start from the list in `/Users/chaoqi/Dev/trending-lab/proto/waves.py` and extend when the fixture output shows junk.
- `detectWaves(recent, baseline, opts): Wave[]` with `opts = { minRepos = 5, minBurst = 3, mergeOverlap = 0.5, today }`:
  1. Index recent repos by term; count baseline repos by term.
  2. For each term with >= minRepos recent repos: compute burst, stars, velocity, score. Keep burst >= minBurst.
  3. Sort terms by score desc. Greedy merge: a term joins the first existing wave where `|repos(term) ∩ repos(wave)| / min(|repos(term)|, |repos(wave)|) >= mergeOverlap` (default 0.4); otherwise it starts a new wave. A repo belongs to at most one wave: the first wave (in score order) that reaches it claims it. A repo joining an existing wave through a merged term must carry at least 2 of that wave's terms, so a spam farm's generic word ("compatible", "docs") cannot pull in unrelated repos. After merging, recompute every wave's stats on the union of repos; `baselineCount` is the max over its terms; `burst` and `score` recomputed from the union.
  3b. `cohesion` = share of repo pairs in the wave that share at least one term beyond the wave's own terms. Waves with fewer than 20 repos and cohesion < `minCohesion` (default 0.25) are dropped: they are repos that happen to share one generic word ("bit", "point", "answers"), not an ecosystem.
  4. Flags, computed on the wave's repos:
     - `same-day`: repoCount >= 10 and the most common `createdAt` holds >= 60 % of repos.
     - `few-owners`: repoCount >= 10 and ownerCount / repoCount < 0.5.
     - `flat-stars`: repoCount >= 20 and anchor.stars / stars < 0.10.
     - `near-duplicate`: repoCount >= 10 and >= 50 % of repos have Jaccard(terms) >= 0.7 with some other repo in the wave. `// ponytail: O(n²) pairwise scan, waves are < 500 repos`.
  5. Return organic waves first, then flagged, each sorted by score desc.
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

Load the gzip fixture with `node:zlib.gunzipSync`, run `detectWaves(recent, baseline, { today: "2026-09-30" })`, then assert:
- the top organic wave has `id === "jev"` and `repoCount >= 150` and its aliases include `"laya"` and `"typesafe"`.
- `anchor.fullName === "NandhaKishorM/laya"` for that wave.
- a wave with id `"apimart"` (or whose aliases include `"apimart"`) exists and carries `same-day` or `near-duplicate` or `flat-stars`, and is not in the organic group.
- no organic wave has `id` in the STOP list.
- `detectWaves` is deterministic: running twice yields identical JSON.
- `renderMarkdown` output contains a `| # |` header and the string `NandhaKishorM/laya`.
Also a small unit test for `terms()` on a hand-written repo (strips stopwords, keeps topics, drops digits).

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

## v1.1 (after v1 is committed and verified)

`GET /repos/{owner}/{repo}/stargazers/history` returns weekly buckets `{ week, total, days[7] }` (Sunday first) under the 5,000 req/h core limit. Use it for the top 8 repos of each of the top waves to compute `velocity3d` (stars in the last 3 full days) and a 14-day sparkline for the anchor. Show `velocity3d` next to lifetime velocity in the table. One request per repo, cached with the same 6 h TTL.
