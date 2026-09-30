---
name: starwave
description: "Use when the user asks what is trending, emerging, or blowing up on GitHub right now, which new ecosystems or waves are forming, or wants a daily or weekly GitHub breakout digest."
---

# starwave

starwave groups the GitHub repos created in the last 14 days (40+ stars) into waves: repos that share a term whose use has burst against the 60 days before. Waves are ranked by stars per day. Clusters built from copies of one template, or with other signs of coordination, are listed separately with flags. It needs `GITHUB_TOKEN` or a logged-in `gh`.

## Run

```sh
npx -y github:Chaoqi31/starwave --json          # the Snapshot as JSON
npx -y github:Chaoqi31/starwave --md --top 10   # a Markdown table, ready to paste
npx -y github:Chaoqi31/starwave --show <id>     # every repo in one wave, with its 14-day star chart
```

Without installing anything, today's snapshot is at `https://chaoqi31.github.io/starwave/latest.json`, refreshed daily at 06:17 UTC. Fetch it when the user wants today's waves with the default window. It is faster than a local run.

A local run makes about 60 search requests at 30 per minute plus about 500 star-history requests, so the first one takes 3 to 5 minutes. That is longer than a 2-minute shell timeout. Run it with a 10-minute timeout or in the background and read the output file. Results cache for 6 hours. Progress goes to stderr and output to stdout. Exit code 1 with "set GITHUB_TOKEN or run: gh auth login" means there is no token.

Variants: `--days 7 --min-stars 100` for a shorter window with a higher bar, `--top 30` for more waves, `--no-history` to skip star history.

## Read the output

`--json` prints a `Snapshot`: `generatedAt`, `recentWindow`, `baselineWindow`, `recentCount`, `baselineCount`, and `waves[]`. Clean waves (`flags` empty) come first, then flagged ones, each group by `velocity` descending.

| field | meaning |
|---|---|
| `id`, `aliases` | the primary term and the terms merged into it, for example `jev` with `laya` and `typesafe` |
| `repoCount`, `ownerCount` | repos in the wave, distinct owners |
| `stars` | total stars |
| `velocity` | stars per day since each repo was created, summed over the wave |
| `velocity3d` | stars per day over the last 3 complete days, summed over the same repos (absent with `--no-history`) |
| `daily` | stars per day for the last 14 complete days, oldest first, same repos (absent with `--no-history`) |
| `firstSeen` | creation date of the oldest repo |
| `anchor` | the most-starred repo: `fullName`, `stars`, `createdAt`, `description` |
| `repos[]` | every repo, sorted by stars. Use it to count owners or creation dates. Do not print it whole. |
| `cohesion` | share of repos that share a term beyond the wave's own terms with another member, 0 to 1 |
| `flags` | empty, or any of `same-day`, `few-owners`, `flat-stars`, `near-duplicate` |

`velocity` and `velocity3d` cover the same repos, so compare them directly. On 2026-09-30 the jev wave had a `velocity` of 13.2k and a `velocity3d` of 5.1k: it was cooling. A `velocity3d` well above `velocity` means the wave is speeding up. Say which in the summary. If `daily` has one day holding most of the 14-day total, point that out.

What each flag measures, for the "why" in your summary:

- `same-day`: 60 % or more of the repos were created on one day.
- `few-owners`: fewer distinct owners than half the repos.
- `flat-stars`: the anchor holds under 10 % of the wave's stars, so no repo stands out.
- `near-duplicate`: the wave is built from copies, repos whose terms match another owner's repo almost exactly.

## Write the summary

1. Lead with the top 3 clean waves, one sentence each, with numbers from the JSON: `**<id>**: <repoCount> repos from <ownerCount> owners, <stars> stars, <velocity> stars/day since launch, <velocity3d>/day over the last 3 days, anchor [<fullName>](https://github.com/<fullName>).` Name one or two aliases when they explain the wave.
2. Then the flagged waves under "Looks coordinated". Give the same numbers and say why from `flags`, with the count behind it ("146 of 173 repos created on 2026-09-24"). Say "looks coordinated". Never state "spam" or "bought stars" as fact. The flags are heuristics, and the user can check with `--show <id>`.
3. Link every anchor as `https://github.com/<fullName>`. Do not invent numbers. If a field is missing, leave it out.
4. For "tell me more about <wave>", run `--show <id>` and summarize its top repos by stars.
5. If `waves` is empty, say so and suggest `--min-stars 20` or a larger `--days`.
