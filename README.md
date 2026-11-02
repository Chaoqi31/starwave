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
_recent 2,330 repos  2026-10-19..2026-11-02  stars>=40 · baseline 3,451 repos  2026-08-20..2026-10-18  stars>=150 · generated 2026-11-02 15:59 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **totk** (+kingdom, tears) | 8 | 8 | 5.0k | 1.2k/d | 1.0k/d | ▁▁▁▁▁▁▂▂▂▁▆█▇▇ | 2026-10-19 | [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) |
| 2 | **tvs** | 15 | 15 | 11.0k | 875/d | 397/d | ▁▇█▆▅▄▆▆▅▃▃▃▃▃ | 2026-10-19 | [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) |
| 3 | **regularly** | 7 | 7 | 1.4k | 647/d | 300/d | █▁▁▁▁▁▁▁▄▁▁███ | 2026-10-19 | [TinsmithConsole60/Roblox-Account-Manager-Multi-Account-Tool-2026](https://github.com/TinsmithConsole60/Roblox-Account-Manager-Multi-Account-Tool-2026) |
| 4 | **uncensored-ai** | 6 | 4 | 1.4k | 627/d | 194/d | ▁▁▁▃▁▄▃▁▁▁▃▁▁█ | 2026-10-22 | [routerhubSI/glm-5.3-abliterated](https://github.com/routerhubSI/glm-5.3-abliterated) |
| 5 | **stick** | 6 | 6 | 1.8k | 610/d | 498/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▅ | 2026-10-19 | [Arjun-Ingole/hop](https://github.com/Arjun-Ingole/hop) |
| 6 | **png** | 9 | 9 | 1.5k | 546/d | 227/d | ▁▁▁▁▂▁▁▃▂▃▄▂▂█ | 2026-10-19 | [heydeer/pngdeer](https://github.com/heydeer/pngdeer) |
| 7 | **supermimic** (+reproduction) | 9 | 9 | 2.2k | 239/d | 78/d | ▁▁▄█▅▃▆▇▅▄▅▃▂▃ | 2026-10-21 | [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) |
| 8 | **trainer** (+hotkeys) | 8 | 8 | 533 | 228/d | 5/d | ▁▁▁▁▁▁█▃▁▁▃▁▁▁ | 2026-10-24 | [CarmelTkc/phantom-blade-zero-enhancement-suite](https://github.com/CarmelTkc/phantom-blade-zero-enhancement-suite) |
| 9 | **portrait** (+pose-reference) | 7 | 7 | 546 | 215/d | 106/d | ▁▁▁▁▁▁▁▂▃▂▅▆▅█ | 2026-10-22 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 10 | **sidebar** | 6 | 6 | 1.3k | 190/d | 46/d | ▁█▅▄▁▂▂▂▂▂▁▂▁▂ | 2026-10-19 | [dominikmartn/harp](https://github.com/dominikmartn/harp) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **windows-app** (+software-engineering, activated, utility, ready-to-run, pre-activated, 30 more) | 234 | 234 | 28.6k | 27.5k/d | 576/d | ▁▁▁▁▁▁▂▂▁▁▂█▁▆ | 2026-10-20 | [marbleorbweb94/ninjatrader-bot](https://github.com/marbleorbweb94/ninjatrader-bot) | near-duplicate, flat-stars, same-day |
| 2 | **php2shell** (+cve-2026-109618, cve-2026-109619, cve, rce, php, 4 more) | 33 | 30 | 9.8k | 839/d | 87/d | ▁▁█▅▄▂▂▂▁▁▁▁▁▁ | 2026-10-20 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 3 | **troubleshooting** (+game-guide, pc-gaming, steam-games, game-specific, graphics-settings, 26 more) | 47 | 47 | 2.4k | 678/d | 35/d | ▁▁▁▁▁▁▂▁▁▁█▁▁▁ | 2026-10-23 | [ilikechocopies/sideload-jiostb](https://github.com/ilikechocopies/sideload-jiostb) | same-day, flat-stars |
| 4 | **abliterated-models** (+uncensored-ai, uncensored-ai-model, abliterated) | 6 | 5 | 1.1k | 172/d | 46/d | ▁▁▁▆▁▇▄█▁▁▁▁▁▄ | 2026-10-22 | [routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) | near-duplicate |
| 5 | **aion** (+aion-2, mmorpg, aion2, overlay, dps-meter, 2 more) | 13 | 13 | 740 | 82/d | 6/d | ▁▁▁▁▁▁█▁▁▁▁▁▁▁ | 2026-10-24 | [ORICHO08/aion2-combat-overlay](https://github.com/ORICHO08/aion2-combat-overlay) | same-day |
| 6 | **lag** (+fps-booster-no-lag, rpocket, fps-booster-software, fps-tweak, frame-rate-boost, 9 more) | 10 | 10 | 589 | 70/d | 20/d | ▁▁▁▁▃▁▁█▁▁▇▁▃▁ | 2026-10-23 | [Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package](https://github.com/Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package) | near-duplicate |
| 7 | **enshrouded** (+game-companion) | 10 | 10 | 580 | 64/d | 0/d | ▁▁▁▁▁▁█▁▁▁▁▁▁▁ | 2026-10-24 | [Abdelhadidr/enshrouded-interactive-map-desktop](https://github.com/Abdelhadidr/enshrouded-interactive-map-desktop) | same-day |
| 8 | **resp** | 8 | 8 | 466 | 55/d | 16/d | ▁▁▁▁▃▁▁█▁▁▇▁▃▁ | 2026-10-23 | [Wildange85773l/windows-fine-tuner-resp](https://github.com/Wildange85773l/windows-fine-tuner-resp) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>totk</b>: 8 repos, 5.0k stars</summary>

- [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) 3.8k★ Static recompilation of The Legend of Zelda: Tears of the Kingdom to native Win…
- [kuraeow/ultratears](https://github.com/kuraeow/ultratears) 612★ Unofficial native Windows port of Tears of the Kingdom 1.4.3 using static recom…
- [OJZen/totk-mobile](https://github.com/OJZen/totk-mobile) 201★ Experimental native Tears of the Kingdom port for macOS and iOS.
- [daniel-madrid-07/weeping-of-the-empire](https://github.com/daniel-madrid-07/weeping-of-the-empire) 174★ Zelda: Tears of the Kingdom (TotK) 1.0.0 recompiled to native Windows and Vulka…
- [Muhammad1259-sigma/totk-recomp](https://github.com/Muhammad1259-sigma/totk-recomp) 106★ Static recompilation of Zelda: Tears of the Kingdom 1.0.0 to Linux / Steam Deck…

</details>

<details><summary><b>tvs</b>: 15 repos, 11.0k stars</summary>

- [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) 9.0k★ 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for …
- [lasharor/cleanyourtv-WebOS](https://github.com/lasharor/cleanyourtv-WebOS) 389★ A clean home screen for rooted LG webOS TVs, with an optional debloat of LG's a…
- [OmkarK97/webos-vibehack](https://github.com/OmkarK97/webos-vibehack) 345★ Apple TV-style home screen for LG webOS TVs, a port of tv-vibehack
- [ecklf/lg-luma](https://github.com/ecklf/lg-luma) 287★ A native launcher for rooted LG webOS TVs
- [danielthejoker18/FreeMyTvWebOS](https://github.com/danielthejoker18/FreeMyTvWebOS) 286★ Fast, ad-free 60fps home screen for LG webOS TVs: frosted glass app shelf, live…

</details>

<details><summary><b>regularly</b>: 7 repos, 1.4k stars</summary>

- [TinsmithConsole60/Roblox-Account-Manager-Multi-Account-Tool-2026](https://github.com/TinsmithConsole60/Roblox-Account-Manager-Multi-Account-Tool-2026) 300★ Powerful Roblox Account Manager for easy multi-account control. Switch accounts…
- [davidlopez-x05x8/minecraft-aim-assist](https://github.com/davidlopez-x05x8/minecraft-aim-assist) 300★ Minecraft Aim Assist 2026 — Smooth aiming assistance for 1.21.4 Fabric. Adaptiv…
- [redjellyfishrampart/Bunny-Hop-Script-Auto-Bhop-Movement-Tool-2026](https://github.com/redjellyfishrampart/Bunny-Hop-Script-Auto-Bhop-Movement-Tool-2026) 300★ Advanced Bunny Hop script with smooth auto-bhop and movement assistance. Fully …
- [GrandeurPikeman/Roblox-MM2-Utility-2026](https://github.com/GrandeurPikeman/Roblox-MM2-Utility-2026) 144★ Lightweight desktop utility for Roblox Murder Mystery 2. Convenient helpers, qu…
- [Digitalvetrough/Forza-Horizon-6-FPS-Optimizer-2026](https://github.com/Digitalvetrough/Forza-Horizon-6-FPS-Optimizer-2026) 106★ Lightweight desktop tool for Forza Horizon 6. Smart FPS optimization, performan…

</details>

<details><summary><b>uncensored-ai</b>: 6 repos, 1.4k stars</summary>

- [routerhubSI/glm-5.3-abliterated](https://github.com/routerhubSI/glm-5.3-abliterated) 541★ GLM 5.3 abliterated or uncensored API access with RouterHub. Browse 35 jailbrea…
- [wideeyededi/uncensored-nsfw-ai-video-api](https://github.com/wideeyededi/uncensored-nsfw-ai-video-api) 415★ Uncensored NSFW AI video API — Seedance Spicy & Wan NSFW docs for 18+ text-to-v…
- [7API/glm-5.3-abliterated](https://github.com/7API/glm-5.3-abliterated) 171★ GLM 5.3 Abliterated or Uncensored AI model — 35 jailbreak prompts, model guide …
- [routerhubSI/openrouter-alternative](https://github.com/routerhubSI/openrouter-alternative) 136★ OpenRouter alternative for uncensored AI LLM access — independent RouterHub giv…
- [UncensoredLabs/uncensored-ai-api](https://github.com/UncensoredLabs/uncensored-ai-api) 90★ Uncensored AI API and browser chat: DeepSeek and GLM models, streaming, Python …

</details>

<details><summary><b>stick</b>: 6 repos, 1.8k stars</summary>

- [Arjun-Ingole/hop](https://github.com/Arjun-Ingole/hop) 1.3k★ Install Linux next to Windows without a USB stick
- [nilbuild/tinyhand](https://github.com/nilbuild/tinyhand) 128★ A tiny hand on a stick that points at things on your Mac screen.
- [artemnovitckii/claude-animation-skills](https://github.com/artemnovitckii/claude-animation-skills) 110★ Six Claude Code skills that make animations for reels, no footage needed: 3D ca…
- [AbhishekKaisar/glassos-tv](https://github.com/AbhishekKaisar/glassos-tv) 95★ A calm, glassy home screen for Android TV, Google TV and Fire TV, inspired by t…
- [cascodigital/skippy-tv](https://github.com/cascodigital/skippy-tv) 55★ Sci-fi starship-bridge home screen for Android TV (tested on NVIDIA Shield 1st …

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
