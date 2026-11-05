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
_recent 2,349 repos  2026-10-22..2026-11-05  stars>=40 · baseline 3,574 repos  2026-08-23..2026-10-21  stars>=150 · generated 2026-11-05 14:44 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **leveling** | 5 | 5 | 804 | 748/d | 260/d | ▁▁▁▁▁▁▁▁▁▁▁▁▂█ | 2026-11-01 | [protonversestudio/wow-forever-builds-kindred](https://github.com/protonversestudio/wow-forever-builds-kindred) |
| 2 | **uncensored-ai** (+abliterated-models, abliterated) | 8 | 6 | 2.4k | 557/d | 250/d | ▃▁▄▃▂▁▁▃▁▁▇▂▂█ | 2026-10-22 | [UncensoredLabs/uncensored-ai-api](https://github.com/UncensoredLabs/uncensored-ai-api) |
| 3 | **minecraft-mods** | 6 | 6 | 1.2k | 453/d | 33/d | ▁▁▁▁▁▁▁▁▄██▂▁▂ | 2026-10-28 | [Wallbycontact/java-mod-rust-port-tool](https://github.com/Wallbycontact/java-mod-rust-port-tool) |
| 4 | **bsc** | 5 | 5 | 860 | 452/d | 82/d | ▁▁▁▂▃▂▂▃▄▄▂▁▁█ | 2026-10-25 | [jacke-pp/ai-wallet-binance](https://github.com/jacke-pp/ai-wallet-binance) |
| 5 | **stick** | 6 | 6 | 2.3k | 392/d | 201/d | ▁▁▁▁▁▁▁▁▁█▅▃▃▂ | 2026-10-22 | [Arjun-Ingole/hop](https://github.com/Arjun-Ingole/hop) |
| 6 | **printed** | 6 | 6 | 2.2k | 292/d | 95/d | ▁▁▁▁▁▁▁█▂▄▁▁▂▂ | 2026-10-22 | [aschmelyun/print-my-profile-pic](https://github.com/aschmelyun/print-my-profile-pic) |
| 7 | **cve** | 20 | 19 | 2.4k | 255/d | 80/d | ▇▆█▄▃▂▃▃▂▃▂▂▂▄ | 2026-10-22 | [assetnote/php2shell-scanner](https://github.com/assetnote/php2shell-scanner) |
| 8 | **cs2** (+steam-market, profit, aegis) | 6 | 6 | 924 | 222/d | 63/d | ▁▁▁▁▁▁▁▁▂█▁▂▁▂ | 2026-10-30 | [WilonityGames/WilonityLoader](https://github.com/WilonityGames/WilonityLoader) |
| 9 | **living** | 8 | 8 | 1.7k | 221/d | 131/d | ▁▁▁▅▄▃▂▂█▅▅▅▄▃ | 2026-10-23 | [alchaincyf/huashu-bird-sticker](https://github.com/alchaincyf/huashu-bird-sticker) |
| 10 | **supermimic** (+body, mjlab) | 10 | 10 | 1.5k | 183/d | 132/d | ▃▃▂▅█▆▅▆▃▂▃▆▆▄ | 2026-10-22 | [miao-org/awesome-supermimic](https://github.com/miao-org/awesome-supermimic) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **windows-app** (+utility, software-engineering, activated, scripts, setup, 52 more) | 259 | 259 | 45.5k | 34.8k/d | 11.8k/d | ▁▁▁▁▁▁▁▁▁▁▁▅▂█ | 2026-10-22 | [DawnShaperFrost90/slideshow-video-maker](https://github.com/DawnShaperFrost90/slideshow-video-maker) | near-duplicate, flat-stars, same-day |
| 2 | **rpocket** (+desert) | 31 | 31 | 1.2k | 1.2k/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-05 | [RiventronLucky53535/crypto-rpocket-accumulation-scanner](https://github.com/RiventronLucky53535/crypto-rpocket-accumulation-scanner) | same-day, flat-stars |
| 3 | **resocket** (+progression) | 16 | 16 | 640 | 640/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-05 | [AstraLunarvenom33479/BloodStrike-region-limit-resocket](https://github.com/AstraLunarvenom33479/BloodStrike-region-limit-resocket) | same-day |
| 4 | **troubleshooting** (+game-guide, pc-gaming, steam-games, game-specific, graphics-settings, 29 more) | 47 | 47 | 2.6k | 549/d | 100/d | ▁▁▁▂▁▁▁█▁▁▁▁▁▁ | 2026-10-22 | [ilikechocopies/sideload-jiostb](https://github.com/ilikechocopies/sideload-jiostb) | same-day |
| 5 | **resp** | 10 | 10 | 400 | 400/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-05 | [AcrossTopazcache8602/abogado-resp-chile-skill](https://github.com/AcrossTopazcache8602/abogado-resp-chile-skill) | same-day |
| 6 | **respocket** (+yet, aio) | 10 | 10 | 400 | 400/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-05 | [Branscript/Apex-Legends-respocket-FPS-Boost](https://github.com/Branscript/Apex-Legends-respocket-FPS-Boost) | same-day |
| 7 | **coregold** (+usdt, vcc, visa, mastercard, global) | 30 | 26 | 1.6k | 221/d | 193/d | ▁▁▁▁▁▁▄▅▆▃▇▁▅█ | 2026-10-28 | [gutrfgtd-cyber/CoreGold---Direct-Issue-Global-Virtual-Credit-Card-Infrastructure-Management-Console](https://github.com/gutrfgtd-cyber/CoreGold---Direct-Issue-Global-Virtual-Credit-Card-Infrastructure-Management-Console) | flat-stars |
| 8 | **aion** (+aion-2, mmorpg, aion2, dps-meter, dps, 4 more) | 13 | 13 | 741 | 62/d | 2/d | ▁▁▁█▁▁▁▁▁▁▁▁▁▁ | 2026-10-24 | [ORICHO08/aion2-combat-overlay](https://github.com/ORICHO08/aion2-combat-overlay) | same-day |
| 9 | **trading-strategy-simulation** (+strategy) | 10 | 10 | 573 | 49/d | 2/d | ▁▁▁█▁▁▁▁▁▁▁▁▁▁ | 2026-10-23 | [KhulekanisiyandaMchunu/llm-trading-arena](https://github.com/KhulekanisiyandaMchunu/llm-trading-arena) | same-day |
| 10 | **enshrouded** (+game-companion) | 10 | 10 | 580 | 48/d | 0/d | ▁▁▁█▁▁▁▁▁▁▁▁▁▁ | 2026-10-24 | [Abdelhadidr/enshrouded-interactive-map-desktop](https://github.com/Abdelhadidr/enshrouded-interactive-map-desktop) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>leveling</b>: 5 repos, 804 stars</summary>

- [protonversestudio/wow-forever-builds-kindred](https://github.com/protonversestudio/wow-forever-builds-kindred) 286★ Answer four questions and see which WoW Forever class fits how you play. Free W…
- [EmpressRectifier/wow-forever-builds-sixty](https://github.com/EmpressRectifier/wow-forever-builds-sixty) 162★ Replay any WoW Forever talent build level by level from 1 to 60. Free Windows a…
- [helixmaintenancesaw/wow-forever-builds-respec](https://github.com/helixmaintenancesaw/wow-forever-builds-respec) 147★ Compare two WoW Forever builds and get an exact respec plan. Free Windows app.
- [Obsidiantatrap/wow-forever-builds-waymark](https://github.com/Obsidiantatrap/wow-forever-builds-waymark) 134★ A step-by-step WoW Forever leveling route with an in-game overlay. Free Windows…
- [ItzMeShadow999/BadgeMaxxer](https://github.com/ItzMeShadow999/BadgeMaxxer) 75★ Discord badge leveling tool, fabricates game time, game variety and Go Live str…

</details>

<details><summary><b>uncensored-ai</b>: 8 repos, 2.4k stars</summary>

- [UncensoredLabs/uncensored-ai-api](https://github.com/UncensoredLabs/uncensored-ai-api) 800★ Uncensored AI API and browser chat: DeepSeek and GLM models, streaming, Python …
- [routerhubSI/glm-5.3-abliterated](https://github.com/routerhubSI/glm-5.3-abliterated) 556★ GLM 5.3 abliterated or uncensored API access with RouterHub. Browse 35 jailbrea…
- [wideeyededi/uncensored-nsfw-ai-video-api](https://github.com/wideeyededi/uncensored-nsfw-ai-video-api) 422★ Uncensored NSFW API for AI video generation — Seedance Spicy & Wan NSFW docs: 1…
- [7API/glm-5.3-abliterated](https://github.com/7API/glm-5.3-abliterated) 165★ GLM 5.3 Abliterated or Uncensored AI model — 35 jailbreak prompts, model guide …
- [routerhubSI/openrouter-alternative](https://github.com/routerhubSI/openrouter-alternative) 137★ OpenRouter alternative for uncensored AI LLM access — independent RouterHub giv…

</details>

<details><summary><b>minecraft-mods</b>: 6 repos, 1.2k stars</summary>

- [Wallbycontact/java-mod-rust-port-tool](https://github.com/Wallbycontact/java-mod-rust-port-tool) 299★ Feed it a Fabric or NeoForge mod jar and Smelt writes the Rust side for Horizon…
- [UpperSupervisor/horizon-modpack-compatibility](https://github.com/UpperSupervisor/horizon-modpack-compatibility) 213★ Drop your mods folder, a Prism or MultiMC instance or an .mrpack on Hopper and …
- [Ceilingpiintensify/horizon-mod-checker](https://github.com/Ceilingpiintensify/horizon-mod-checker) 204★ Is my mod on Horizon? Type a name or drop your whole pack and every mod gets on…
- [Straitbrashadow/minecraft-ai-mod-builder](https://github.com/Straitbrashadow/minecraft-ai-mod-builder) 198★ Vibe-build in Minecraft. Describe a build in your terminal, see it as a bluepri…
- [DolphinStronghold9/ai-minecraft-modmaker](https://github.com/DolphinStronghold9/ai-minecraft-modmaker) 173★ Describe a mod or a structure and this terminal agent builds it in Minecraft: g…

</details>

<details><summary><b>bsc</b>: 5 repos, 860 stars</summary>

- [jacke-pp/ai-wallet-binance](https://github.com/jacke-pp/ai-wallet-binance) 308★ 让任何 AI 用你自己的币安 AI 钱包交易：秒买秒卖、狙击 Agent 专属发射台（Four、Flap、GANG）、AI 专属 Mint、本机交易页面。币安…
- [WyrmSpongeHaul/quant-trading-bot](https://github.com/WyrmSpongeHaul/quant-trading-bot) 300★ Quant Trading Bot 2026 - Full working installer with advanced trading algorithm…
- [nancyc0813-maker/agentid-sniper](https://github.com/nancyc0813-maker/agentid-sniper) 149★ Local monitor + auto-mint + take-profit for Binance .ai Agent ID exclusive mint…
- [hamnurger0501/binance-agentic-sniper](https://github.com/hamnurger0501/binance-agentic-sniper) 57★ BSC launchpad sniper (Gang V3 / Fair / CA / Flap Agent-ID) using Binance Agenti…
- [setyamickala/bsc-contract-audit-skill](https://github.com/setyamickala/bsc-contract-audit-skill) 46★ 

</details>

<details><summary><b>stick</b>: 6 repos, 2.3k stars</summary>

- [Arjun-Ingole/hop](https://github.com/Arjun-Ingole/hop) 1.5k★ Install Linux next to Windows without a USB stick
- [artemnovitckii/claude-animation-skills](https://github.com/artemnovitckii/claude-animation-skills) 395★ Six Claude Code skills that make animations for reels, no footage needed: 3D ca…
- [nilbuild/tinyhand](https://github.com/nilbuild/tinyhand) 161★ A tiny hand on a stick that points at things on your Mac screen.
- [AbhishekKaisar/glassos-tv](https://github.com/AbhishekKaisar/glassos-tv) 105★ A calm, glassy home screen for Android TV, Google TV and Fire TV, inspired by t…
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
