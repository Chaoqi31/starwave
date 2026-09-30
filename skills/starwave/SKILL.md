---
name: starwave
description: "Use when the user asks what is trending, emerging, or blowing up on GitHub right now, which new ecosystems or waves are forming, or wants a daily/weekly GitHub breakout digest."
---

# starwave

starwave groups the GitHub repos created in the last 14 days (>= 40 stars) into waves: clusters that share a term whose frequency has burst against a 60-day baseline. Waves are ranked by star velocity and flagged when they look coordinated. It needs `GITHUB_TOKEN` or a logged-in `gh`.

## Run

```sh
npx starwave --json            # machine-readable Snapshot
npx starwave --md --top 10     # GitHub-flavored markdown table, ready to paste
npx starwave --show <id>       # every repo in one wave: stars, age in days, fullName, description
```

The first run fetches about 4,500 repos at 30 search requests per minute and takes 3 to 5 minutes, longer than a default 2-minute shell timeout: run it with a 10-minute timeout or in the background, then read the output file. Results are cached for 6 hours, so a second run is instant. Progress goes to stderr, output to stdout. Exit code 1 means no token: tell the user to set `GITHUB_TOKEN` or run `gh auth login`.

Variants: `--days 7 --min-stars 100` for a weekly, higher-signal window; `--top 30` for more waves.

## Read the output

`--json` prints a `Snapshot`: `generatedAt`, `recentWindow`, `baselineWindow`, `recentCount`, `baselineCount`, `waves[]`. Waves come organic first (`flags` empty), then flagged, each group by velocity descending.

| field | meaning |
|---|---|
| `id`, `aliases` | the primary term and the terms merged into it, for example `jev` + `laya`, `typesafe` |
| `repoCount`, `ownerCount` | repos in the wave, distinct owners |
| `stars` | total stars |
| `velocity` | stars per day, summed over repos (each repo: stars / age in days) |
| `firstSeen` | creation date of the oldest repo |
| `anchor` | the most-starred repo: `fullName`, `stars`, `createdAt`, `description` |
| `repos[]` | every repo, sorted by stars; use it to count owners or creation dates, do not print it |
| `cohesion` | share of repos that share a term beyond the wave's own terms with another member, 0 to 1 |
| `flags` | empty, or any of `same-day`, `few-owners`, `flat-stars`, `near-duplicate` |

What each flag means, for the "why" in your summary:

- `same-day`: at least 60 % of the repos were created on one day.
- `few-owners`: fewer than half of the repos have distinct owners.
- `flat-stars`: the anchor holds under 10 % of the wave's stars; no repo stands out.
- `near-duplicate`: the wave is built from clones, repos whose terms match another owner's repo almost exactly.

## Write the summary

1. Lead with the top 3 organic waves, one sentence each, with the numbers from the JSON:
   `**<id>** (+<aliases>): <repoCount> repos from <ownerCount> owners, <stars> stars, <velocity> stars/day, first seen <firstSeen>, anchor [<fullName>](https://github.com/<fullName>).`
2. Then the flagged waves under "Looks coordinated". Give the same numbers and say why from `flags`, with the count behind it ("172 of 190 repos created on 2026-09-22", "41 owners for 190 repos"). Say "looks coordinated", never "spam" or "bought stars" as fact; the flags are heuristics and the user can verify with `--show <id>`.
3. Link every anchor as `https://github.com/<fullName>`. Do not invent numbers; if a field is missing, leave it out.
4. For "tell me more about <wave>", run `npx starwave --show <id>` and summarize its top repos by stars.
5. If `waves` is empty, say so and suggest `--min-stars 20` or a larger `--days`.
