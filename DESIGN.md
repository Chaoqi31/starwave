# How starwave works

starwave answers one question: which groups of new GitHub repos are growing together right now? It fetches every repo created in the last 14 days with at least 40 stars, compares their vocabulary with repos from the 60 days before, and reports the terms that burst. A group of repos that shares a bursting term is a *wave*. Waves are ranked by stars per day. Groups built from copies of one template are set aside and flagged.

## Constraints

- Node 20 or newer. TypeScript compiled with `tsc` to `dist/`.
- Zero runtime dependencies. The code uses global `fetch`, `node:util` `parseArgs`, `node:zlib`, `node:fs`, and `node:test`.
- `src/waves.ts`, `src/history.ts`, and `src/render.ts` are pure. Network access lives in `src/github.ts`, file and terminal I/O in `src/cli.ts`.
- `detectWaves` is deterministic for a given input, so the tests can assert exact results on a recorded capture.

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
  repos: Repo[];             // sorted by stars desc
  repoCount: number;
  ownerCount: number;        // distinct owners
  stars: number;             // sum over repos
  velocity: number;          // sum over repos of stars / max(1, age in days)
  velocity3d?: number;       // stars per day over the last 3 complete days, same repos (needs star history)
  daily?: number[];          // stars per day for the last 14 complete days, oldest first (needs star history)
  firstSeen: string;         // earliest createdAt
  baselineCount: number;     // baseline repos carrying the wave's terms (max over id and aliases)
  burst: number;             // repoCount / (expected + 1), expected = baselineCount * recent / baseline
  cohesion: number;          // share of repos that share a term beyond the wave's own terms with another member
  score: number;             // burst * log10(stars + 10), used to order term merging
  anchor: Repo;              // repos[0]
  flags: Flag[];             // empty for a clean wave
};

export type Flag = "same-day" | "few-owners" | "flat-stars" | "near-duplicate";

export type Snapshot = {
  generatedAt: string;       // ISO datetime
  recentWindow: { from: string; to: string; minStars: number };
  baselineWindow: { from: string; to: string; minStars: number };
  recentCount: number;
  baselineCount: number;
  waves: Wave[];             // clean waves first, then flagged, each group by velocity desc
};
```

A *capture* is the raw input: `{ capturedAt, recentWindow, baselineWindow, recent: Repo[], baseline: Repo[] }`. `--save` writes one, and `--from` reads a capture or a snapshot, plain or gzipped.

## Fetching (`src/github.ts`)

- The token comes from `GITHUB_TOKEN`, else from `gh auth token`.
- `fetchWindow` splits a date range into slices (3 days for the recent window, 7 for the baseline) and runs `created:A..B stars:>=M` searches, sorted by stars, 100 per page. If a query exceeds 1,000 results or GitHub marks it incomplete, the slice is split recursively into non-overlapping timestamp ranges, down to one second. An unsplittable range fails explicitly rather than returning a truncated capture.
- Search allows 30 requests per minute, so requests are paced at 2.1 s. A 403 or 429 with rate-limit headers waits for the reset (at most 70 s) and retries once.
- Results cache in `~/.cache/starwave/` for 6 hours. `--no-cache` skips the cache.

A default run makes about 60 search requests and takes 3 to 5 minutes the first time.

## Finding waves (`src/waves.ts`)

1. **Terms.** Each repo becomes a set of terms: the latin tokens of its name and description, the parts of hyphen- and dot-joined tokens (`hermes-jev-skills` also gives `hermes`, `jev`, `skills`), and its topics. Tokens shorter than 3 characters, pure numbers, and words in `STOP` ("ai", "agent", "cli", "python", ...) are dropped.
2. **Clone pass.** A repo is templated when a repo from a different owner has a term Jaccard similarity of 0.6 or more with it (both need at least 3 terms). Templated repos are grouped separately from everything else. Before this pass existed, clusters of 5 to 9 copies spread across many terms and showed up as small clean waves. The pass is a pairwise scan, about one second for 2,500 repos.
3. **Burst.** For each term carried by at least 5 repos, burst = count / (baseline count × recent/baseline + 1). Terms need a burst of 3 or more.
4. **Merge.** Terms are sorted by score and merged greedily. A term joins the first wave whose repo set overlaps its own by 40 % or more of the smaller set. Each repo belongs to one wave. A repo that joins through a merged term must carry at least 3 of the wave's terms. With 2, a large wave that had collected generic aliases pulled in unrelated repos.
5. **Cohesion.** A clean wave needs a final burst of 3 or more and a cohesion of 0.5 or more. Nine repos that all contain the word "bit" and nothing else in common have a cohesion of 0.
6. **Flags.** `same-day`: 10 or more repos and 60 % or more created on one day. `few-owners`: 10 or more repos and fewer distinct owners than half the repos. `flat-stars`: 20 or more repos and the anchor holds under 10 % of the stars. Every templated wave carries `near-duplicate`. A templated wave with the same id as a flagged wave merges into it.

## Star history (`src/history.ts`)

`GET /repos/{owner}/{repo}/stargazers/history` returns weekly buckets `{ week, total, days[7] }`, Sunday first, in UTC. After `detectWaves`, the CLI fetches the history of every repo in every wave, 6 requests at a time, under the 5,000 requests per hour core limit. `dailyStars` sums the buckets into stars per day for complete days only. `velocity3d` is the mean of the last 3 days and `daily` keeps the last 14. A repo that no longer exists counts as zero. If any other request fails, that wave gets no `velocity3d`, because a partial sum would understate it. `--no-history` skips this step. A default run makes about 500 history requests in under a minute.

`velocity` and `velocity3d` are not the same kind of number. `velocity` is a ranking score that works without history: each repo's stars divided by its age, summed. It runs above the wave's real daily total when young repos hold many stars. On 2026-09-30 jev scored 13.2k while its repos gained 10.3k a day on average over the 14 days. To judge momentum, compare `velocity3d` with the mean of `daily` since `firstSeen`, as the site does.

## Daily workflow (`.github/workflows/daily.yml`)

At 06:17 UTC GitHub Actions runs a default snapshot with the repository's `GITHUB_TOKEN`. The job then does five things:

- It writes the snapshot to `docs/latest.json`, which GitHub Pages serves to the site.
- It archives the snapshot as `data/YYYY-MM-DD.json.gz`, about 40 KB a day.
- `scripts/readme.mjs` renders the table between `<!-- starwave:start -->` and `<!-- starwave:end -->` in both READMEs.
- `scripts/svg.mjs` redraws `assets/waves.svg`.
- It commits as `github-actions[bot]` with the message `waves: YYYY-MM-DD`.

## Tests

`npm test` compiles and runs `node --test`. `test/fixtures/2026-09-30.json.gz` is the capture of a default run on 2026-09-30: 1,538 recent repos and 2,828 baseline repos. The tests pin behavior to named repos in it:

- The top clean wave is `jev`, with at least 200 repos, `laya` and `typesafe` among its aliases, and `NandhaKishorM/laya` as anchor.
- `opus`, a wave 8 days old, is clean and contains `yihui-dev/awesome-opus5-5-videos`.
- Exactly one flagged wave carries `apimart`. It has at least 150 repos and keeps `browser-use/jev-ultrafast`, `KKKKhazix/AIHOT`, and `ghuntley/underclass` out.
- Script clusters of 5 to 9 copies are not clean waves, and `timoncool/YuE2-Studio` is in no flagged wave.
- Clean waves have a cohesion of 0.5 or more, sort by velocity, and never start with a stop word. Each repo appears in one wave at most.
- `dailyStars` counts only complete days, sums across repos, and fills missing days with 0. The test uses the real history of `NandhaKishorM/laya`.

## Layout

```
src/{types,github,waves,history,render,cli,index}.ts
test/{waves,history}.test.ts, test/fixtures/2026-09-30.json.gz
skills/starwave/SKILL.md          agent skill
.claude-plugin/, .codex-plugin/   plugin manifests
scripts/svg.mjs                   README image from a snapshot
scripts/readme.mjs                README table from --md output
docs/index.html, docs/latest.json the site
data/YYYY-MM-DD.json.gz           daily archive
```
