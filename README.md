<div align="center">

# starwave

**GitHub Trending shows you the repos that are already famous.<br>starwave shows you the waves forming right now.**

[![ci](https://github.com/Chaoqi31/starwave/actions/workflows/ci.yml/badge.svg)](https://github.com/Chaoqi31/starwave/actions/workflows/ci.yml)
[![daily snapshot](https://github.com/Chaoqi31/starwave/actions/workflows/daily.yml/badge.svg)](https://github.com/Chaoqi31/starwave/actions/workflows/daily.yml)
[![dependencies: 0](https://img.shields.io/badge/dependencies-0-2ea44f)](package.json)
[![node >= 20](https://img.shields.io/badge/node-%3E%3D20-339933)](package.json)
[![license: MIT](https://img.shields.io/badge/license-MIT-0969da)](LICENSE)

English · [简体中文](README.zh-CN.md) · [Live site](https://chaoqi31.github.io/starwave/) · [Today's JSON](https://chaoqi31.github.io/starwave/latest.json)

<img src="assets/waves.svg" alt="starwave terminal output: today's waves ranked by stars per day, and the clusters that look coordinated" width="100%">

</div>

A wave is a group of new repos that start using the same word at the same time. It forms around a model that launched last week, a harness everyone is writing plugins for, or a demo format that caught on. starwave reads every GitHub repo created in the last 14 days, finds the words whose use has burst against the 60 days before, and groups the repos around them. It ranks the groups by stars per day and sets aside the ones built from copies of one template.

```bash
npx github:Chaoqi31/starwave
```

You need Node 20 or newer and a GitHub token. A logged-in `gh` CLI works, and so does `GITHUB_TOKEN`.

## What it found on 2026-09-30

These numbers come from the 12:53 UTC capture that the tests use. The image at the top and the table below update every day.

- **jev: 249 repos and 145k stars in 15 days.** TypeSafe AI released its Jev decision model on September 15. starwave merged 40 terms into this wave (`laya`, `typesafe`, `system-one`, `decision-model`, and more), which no single keyword search would join. The wave's best day was September 21, with 24,568 new stars. It is cooling: its repos gained 10.3k stars a day on average over the 14 days, and 5.1k a day over the last 3.
- **opus: 21 repos about things people made with Claude Opus 5.5, 13 of them videos rendered in code.** The oldest is 8 days old. They gained 1.1k stars a day over the last 3 days, and none of them was on GitHub Trending's daily or weekly list that day.
- **Two clusters look coordinated.** All 173 `apimart` repos mention the same API reseller, and 146 of them were created on September 24. Four hours after the capture, 105 of the 173 returned 404. The 44 repos of the `auto-raid-complete-script` wave, all Roblox script executors, were created on September 18, and 98 % of their stars from the last 14 days arrived on one day, September 27. starwave lists both under "Looks coordinated", outside the ranking.

## Why not GitHub Trending?

| | GitHub Trending | starwave |
|---|---|---|
| What it ranks | single repos | groups of new repos that share a bursting term |
| Which repos | any age | created in the last 14 days |
| A launch with 249 satellite repos | separate entries, if any make the top 25 | one wave, with every repo |
| Near-identical repo clusters | no such view | listed apart, with the measurement behind each flag |
| Momentum | stars today, this week, or this month | stars per day over the last 3 days, and a 14-day chart |
| Output | a web page | terminal, Markdown, JSON, and an agent skill |

## Today's waves

A GitHub Action rewrites this table every day at 06:17 UTC. Earlier days are in [`data/`](data).

<!-- starwave:start -->
_recent 2,592 repos  2026-10-17..2026-10-31  stars>=40 · baseline 3,359 repos  2026-08-18..2026-10-16  stars>=150 · generated 2026-10-31 12:36 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **kingdom** (+tears, totk) | 6 | 6 | 9.5k | 1.6k/d | 888/d | ▁▇▆▇▆▄▃▂▃▃▃▃▇█ | 2026-10-17 | [ly05010419/MacNativeGames](https://github.com/ly05010419/MacNativeGames) |
| 2 | **debloat** (+smart-tv) | 14 | 14 | 9.7k | 1.2k/d | 791/d | ▁▂▄▃▂▂▂▃▆██▆▄▄ | 2026-10-18 | [rddmwmddr/android-ad-cleaner](https://github.com/rddmwmddr/android-ad-cleaner) |
| 3 | **tvs** (+lg-tv) | 13 | 13 | 10.1k | 922/d | 419/d | ▁▁▁▇█▆▅▄▆▆▅▃▃▂ | 2026-10-17 | [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) |
| 4 | **published** | 9 | 9 | 1.6k | 668/d | 246/d | ▁▁▁▁▁▁▁▁▂▇█▅▄▆ | 2026-10-26 | [yaojingang/GEOInflow](https://github.com/yaojingang/GEOInflow) |
| 5 | **activated** (+pre-activated, ready-to-run) | 8 | 8 | 896 | 434/d | 150/d | ▅▄▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-17 | [OriginOstrichSignify/Photo-Commander](https://github.com/OriginOstrichSignify/Photo-Commander) |
| 6 | **supermimic** (+reproduction) | 9 | 9 | 2.0k | 291/d | 155/d | ▁▁▁▁▄█▅▃▅▇▅▄▅▃ | 2026-10-21 | [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) |
| 7 | **ad-free** | 9 | 9 | 2.9k | 273/d | 149/d | ▁▄█▇▅▃▃▄▃▃▄▃▃▄ | 2026-10-18 | [Ansub/tv-detox](https://github.com/Ansub/tv-detox) |
| 8 | **save** | 10 | 10 | 832 | 213/d | 137/d | ▁▂▂▂▁▁▃▂▃▅▃▄▅█ | 2026-10-17 | [phishdestroy/TgWitness](https://github.com/phishdestroy/TgWitness) |
| 9 | **png** | 7 | 7 | 834 | 196/d | 151/d | ▁▁▁▁▁▁▃▁▂▇▄▆█▅ | 2026-10-19 | [heydeer/pngdeer](https://github.com/heydeer/pngdeer) |
| 10 | **restore** | 9 | 9 | 1.5k | 170/d | 116/d | ▂▃▅▆▅▆▆▆█▆▄▅▅▇ | 2026-10-17 | [QAQLeonard/a7c2-fl23-research](https://github.com/QAQLeonard/a7c2-fl23-research) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **activated-clones** (+windows-app, software-engineering, pre-activated, ready-to-run, utility, 102 more) | 314 | 314 | 37.8k | 35.0k/d | 4.8k/d | ▁▂▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-17 | [ScorpionPlan/Wise-Care](https://github.com/ScorpionPlan/Wise-Care) | near-duplicate, flat-stars |
| 2 | **activator** (+windows-10, activation, setup, kms, massgravel, 22 more) | 135 | 135 | 11.0k | 5.5k/d | 3.7k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-26 | [Jerry24655/gtweak-portable](https://github.com/Jerry24655/gtweak-portable) | near-duplicate, same-day, flat-stars |
| 3 | **utility** (+valorant) | 28 | 28 | 2.4k | 1.3k/d | 319/d | ▁▂▂▂▁▁▁▃▄▂▃▂▄█ | 2026-10-18 | [DirectorGather/Crash-Plan](https://github.com/DirectorGather/Crash-Plan) | flat-stars |
| 4 | **php2shell** (+cve-2026-109618, cve-2026-109619, cve, rce, session.upload, 3 more) | 32 | 29 | 9.7k | 991/d | 95/d | ▁▁▁▁█▆▄▂▂▂▁▁▁▁ | 2026-10-20 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 5 | **troubleshooting** (+game-guide, pc-gaming, steam-games, game-specific, graphics-settings, 26 more) | 46 | 46 | 2.2k | 984/d | 640/d | ▁▁▁▁▁▁▁▁▂▁▁▁█▁ | 2026-10-22 | [NeonToShadow/fps-boost-2026-windows-gaming-optimizer-resp](https://github.com/NeonToShadow/fps-boost-2026-windows-gaming-optimizer-resp) | same-day, flat-stars |
| 6 | **auto-scaling** (+scaling, centralized, utilizes) | 24 | 9 | 2.8k | 198/d | 1/d | ▁▁▁▁▁▁▁▁▁▁█▁▁▁ | 2026-10-17 | [bagusprts/OutlineWeld](https://github.com/bagusprts/OutlineWeld) | same-day, few-owners, flat-stars |
| 7 | **lag** (+fps-booster-no-lag, booster, rpocket, frame-rate-boost, fps-booster-software, 14 more) | 15 | 15 | 976 | 147/d | 148/d | ▁▃▁▁▁▁▃▁▁▆▁▁█▁ | 2026-10-18 | [SplendorCooper/ExitLag](https://github.com/SplendorCooper/ExitLag) | near-duplicate |
| 8 | **abliterated-models** (+uncensored-ai, uncensored-ai-model) | 5 | 5 | 896 | 143/d | 1/d | ▁▁▁▁▁▆▁▆▄█▁▁▁▁ | 2026-10-22 | [routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) | near-duplicate |
| 9 | **rpocket** | 11 | 11 | 655 | 115/d | 117/d | ▁▁▁▁▁▁▂▁▁▆▁▁█▁ | 2026-10-23 | [OnCzar/Delivery-rpocket-Job](https://github.com/OnCzar/Delivery-rpocket-Job) | same-day |
| 10 | **aion** (+aion-2, mmorpg, aion2, timers, overlay, 3 more) | 12 | 12 | 699 | 100/d | 1/d | ▁▁▁▁▁▁▁▁█▁▁▁▁▁ | 2026-10-24 | [ORICHO08/aion2-combat-overlay](https://github.com/ORICHO08/aion2-combat-overlay) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>kingdom</b>: 6 repos, 9.5k stars</summary>

- [ly05010419/MacNativeGames](https://github.com/ly05010419/MacNativeGames) 6.6k★ Play your own Tears of the Kingdom and Breath of the Wild natively on Apple sil…
- [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) 2.1k★ Static recompilation of The Legend of Zelda: Tears of the Kingdom to native Win…
- [kuraeow/ultratears](https://github.com/kuraeow/ultratears) 476★ Unofficial native Windows port of Tears of the Kingdom 1.4.3 using static recom…
- [OJZen/totk-mobile](https://github.com/OJZen/totk-mobile) 192★ Experimental native Tears of the Kingdom port for macOS and iOS.
- [Muhammad1259-sigma/totk-recomp](https://github.com/Muhammad1259-sigma/totk-recomp) 101★ Static recompilation of Zelda: Tears of the Kingdom 1.0.0 to Linux / Steam Deck…

</details>

<details><summary><b>debloat</b>: 14 repos, 9.7k stars</summary>

- [rddmwmddr/android-ad-cleaner](https://github.com/rddmwmddr/android-ad-cleaner) 5.3k★ 关掉国产安卓手机系统里的广告、热搜、资讯推荐和营销推送。不 root，可还原，支持 AI 智能体一键执行。
- [humblemuzzu/dumbtv](https://github.com/humblemuzzu/dumbtv) 1.8k★ Take the ads, tracking and clutter out of your Fire TV over ADB, no root. Every…
- [man15h/tellyscope](https://github.com/man15h/tellyscope) 965★ Debloat your Android TV, install apps, browse and transfer files on it, all fro…
- [jss8649/quiet-tizen](https://github.com/jss8649/quiet-tizen) 430★ Native Quiet Home launcher, reversible cleanup tools, and an agent-readable gui…
- [lasharor/cleanyourtv-WebOS](https://github.com/lasharor/cleanyourtv-WebOS) 353★ A clean home screen for rooted LG webOS TVs, with an optional debloat of LG's a…

</details>

<details><summary><b>tvs</b>: 13 repos, 10.1k stars</summary>

- [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) 8.2k★ 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for …
- [OmkarK97/webos-vibehack](https://github.com/OmkarK97/webos-vibehack) 338★ Apple TV-style home screen for LG webOS TVs, a port of tv-vibehack
- [rudra-avatar/Hearth](https://github.com/rudra-avatar/Hearth) 280★ Hearth: a fast, calm home screen for LG WebOS TVs
- [danielthejoker18/FreeMyTvWebOS](https://github.com/danielthejoker18/FreeMyTvWebOS) 268★ Fast, ad-free 60fps home screen for LG webOS TVs: frosted glass app shelf, live…
- [ecklf/lg-luma](https://github.com/ecklf/lg-luma) 268★ A native launcher for rooted LG webOS TVs

</details>

<details><summary><b>published</b>: 9 repos, 1.6k stars</summary>

- [yaojingang/GEOInflow](https://github.com/yaojingang/GEOInflow) 766★ Self-hosted web and AI crawler analytics for Generative Engine Optimization (GE…
- [routerhubSI/openrouter-alternative](https://github.com/routerhubSI/openrouter-alternative) 145★ OpenRouter alternative for uncensored AI LLM access — independent RouterHub giv…
- [BranchLegendWhirl71/hexa-v2.6.0](https://github.com/BranchLegendWhirl71/hexa-v2.6.0) 102★ Published: 2026-10-28
- [Centaurbinexplode/nova-v1.9.2](https://github.com/Centaurbinexplode/nova-v1.9.2) 102★ Published: 2026-10-28
- [ExitGooseEntrance/relay-v2.2.0](https://github.com/ExitGooseEntrance/relay-v2.2.0) 102★ Published: 2026-10-28

</details>

<details><summary><b>activated</b>: 8 repos, 896 stars</summary>

- [OriginOstrichSignify/Photo-Commander](https://github.com/OriginOstrichSignify/Photo-Commander) 252★ Photo Commander 1.4 released - Complete standalone setup with all tools pre-act…
- [GripEnvoyEmbody/Fortnite-Skin-Swapper](https://github.com/GripEnvoyEmbody/Fortnite-Skin-Swapper) 100★ Complete standalone setup for Fortnite Skin Swapper 2026. Pre-activated desktop…
- [HeightBoatswain/EaseUS-Partition-Master](https://github.com/HeightBoatswain/EaseUS-Partition-Master) 100★ Easeus Partition Master 2026 complete standalone setup, fully pre-activated for…
- [WildVisionRestore/Rainbow-Six-Siege-Cheat](https://github.com/WildVisionRestore/Rainbow-Six-Siege-Cheat) 100★ Rainbow Six Siege 2026 - Full working installer with all game content and pre-a…
- [ClipTerrapin48/Ableton-Live-12](https://github.com/ClipTerrapin48/Ableton-Live-12) 99★ Complete Ableton Live 12 standalone setup for professional audio production, pr…

</details>
<!-- starwave:end -->

## Usage

```bash
npx github:Chaoqi31/starwave                           # waves from the last 14 days
npx github:Chaoqi31/starwave --show jev                # every repo in one wave, with its 14-day star chart
npx github:Chaoqi31/starwave --days 7 --min-stars 100  # a shorter window with a higher bar
npx github:Chaoqi31/starwave --json                    # the full snapshot, for scripts and agents
npx github:Chaoqi31/starwave --md                      # a Markdown table, ready to paste
```

The first run takes 3 to 5 minutes, because the GitHub search API allows 30 requests a minute. starwave caches results in `~/.cache/starwave` for 6 hours, so the next run returns at once. The first `npx github:` call also downloads and builds starwave, which took 10 seconds on a fast connection and 2 minutes on a slow one. To keep a `starwave` command around, run `npm install -g github:Chaoqi31/starwave`.

| Option | Default | Meaning |
|---|---|---|
| `--days <n>` | 14 | recent window, in days |
| `--min-stars <n>` | 40 | minimum stars for a recent repo |
| `--baseline-days <n>` | 60 | baseline window before the recent one |
| `--baseline-min-stars <n>` | 150 | minimum stars for a baseline repo |
| `--top <n>` | 15 | waves to print per section |
| `--show <id>` | | list every repo in one wave |
| `--json`, `--md` | | print JSON or Markdown instead of the table |
| `--from <file>` | | read a saved capture or snapshot (`.json` or `.json.gz`) instead of calling GitHub |
| `--save <file>` | | write the raw capture |
| `--no-history` | | skip star history (about 500 requests) |
| `--no-cache`, `--no-color` | | ignore the cache, plain output |

## Use it from your agent

`skills/starwave/SKILL.md` teaches Claude Code, Codex, and other agents that read `SKILL.md` to run starwave and summarize the result. After you install it, ask "what's blowing up on GitHub this week?"

In Claude Code:

```text
/plugin marketplace add Chaoqi31/starwave
/plugin install starwave@starwave
```

With the skills CLI, for any agent:

```bash
npx skills add Chaoqi31/starwave
```

## How it works

1. Fetch every repo created in the last 14 days with at least 40 stars, and a baseline of repos from the 60 days before with at least 150 stars. The search API returns at most 1,000 results per query, so starwave splits the dates into slices.
2. Turn each repo into a set of terms: the latin tokens of its name and description, the parts of joined words (`hermes-jev-skills` also gives `jev`), and its topics, minus a stop list.
3. Set aside templated repos. A repo whose terms match a repo from another owner with a Jaccard similarity of 0.6 or more counts as a copy, and copies are grouped on their own.
4. Score each term by burst: recent repos that carry it, divided by the number the baseline predicts. Merge terms whose repo sets overlap by 40 % or more into one wave. Drop waves whose repos share nothing beyond the wave's own terms.
5. Fetch the star history of every repo in every wave, 6 requests at a time. That gives stars per day over the last 3 days and a 14-day chart on the same repos as the lifetime rate.

[DESIGN.md](DESIGN.md) has the thresholds, the reasons for them, and the tests that pin them.

## Get the data without installing anything

- [chaoqi31.github.io/starwave](https://chaoqi31.github.io/starwave/) shows today's waves.
- [`latest.json`](https://chaoqi31.github.io/starwave/latest.json) is today's snapshot. Its shape is `Snapshot` in [DESIGN.md](DESIGN.md#data-shapes-srctypests).
- [`data/YYYY-MM-DD.json.gz`](data) is one snapshot per day, about 40 KB each.

## Use it as a library

The package exports `detectWaves`, `renderMarkdown`, `renderTable`, and the types. The library makes no network calls. Give it `Repo[]` arrays, for example from `--save capture.json`.

```ts
import { readFileSync } from "node:fs";
import { detectWaves, renderMarkdown } from "starwave";

const { recentWindow, baselineWindow, recent, baseline } = JSON.parse(readFileSync("capture.json", "utf8"));
const waves = detectWaves(recent, baseline, { today: "2026-09-30" });
const snapshot = { generatedAt: new Date().toISOString(), recentWindow, baselineWindow, recentCount: recent.length, baselineCount: baseline.length, waves };
console.log(renderMarkdown(snapshot, { top: 10 }));
```

## FAQ

**Is a flagged wave spam?** starwave does not decide that. Each flag names a measurement: `same-day` means 60 % or more of the repos were created on one day, `few-owners` means fewer owners than half the repos, `flat-stars` means no repo holds 10 % of the stars, and `near-duplicate` means the repos are copies of one template. Run `--show <id>` and look at the repos.

**Why only repos from the last 14 days?** GitHub Trending already covers established repos. A wave is visible first in new repos that borrow each other's words.

**Does it read Chinese, Japanese, or Korean descriptions?** Not yet. A CJK description contributes only its latin tokens and topics. Many CJK repos still join a wave through their names and topics.

**What does a run cost?** Only API quota: about 60 search requests and 500 star-history requests on your own token.

**How were the thresholds chosen?** On one capture from 2026-09-30, which is also the test fixture. The tests name the repos each threshold has to keep in or out.

## Star history

[![Star history of Chaoqi31/starwave](https://api.star-history.com/svg?repos=Chaoqi31/starwave&type=Date)](https://star-history.com/#Chaoqi31/starwave&Date)

If starwave showed you a wave before your timeline did, a star helps the next person find it.

MIT license.
