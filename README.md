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
_recent 3,380 repos  2026-11-05..2026-11-19  stars>=40 · baseline 4,096 repos  2026-09-06..2026-11-04  stars>=150 · generated 2026-11-19 15:48 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **scripting** (+blender-mcp, 3d-automation, blender-agents, blender-ai, blender-assistant, 8 more) | 8 | 8 | 3.4k | 512/d | 106/d | ▁▁▁▁▁▁▁▄▅█▄▁▃▁ | 2026-11-12 | [tiobeharxi1987/blender-ai-copilot-flow](https://github.com/tiobeharxi1987/blender-ai-copilot-flow) |
| 2 | **apex** | 5 | 5 | 3.2k | 407/d | 232/d | ▁▁▁▁▁▁▂█▄▄▄▃▃▂ | 2026-11-06 | [apex-compute/ANR](https://github.com/apex-compute/ANR) |
| 3 | **blockchain** (+ethereum) | 14 | 14 | 1.8k | 358/d | 302/d | ▃▁▁▁▁▃▁▁▃▂▂▁█▁ | 2026-11-05 | [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) |
| 4 | **systemhelper** | 5 | 5 | 2.3k | 270/d | 220/d | ▁▂▂▂▁▁▂▂▂█▆▄▃▄ | 2026-11-05 | [Eynnzerr/TelemetryCleaner](https://github.com/Eynnzerr/TelemetryCleaner) |
| 5 | **asset** | 9 | 9 | 967 | 200/d | 227/d | ▁▁▁▁▁▁▁▁▂▂▁▁█▁ | 2026-11-05 | [sarderji889900-bit/rea-game-asset-scraper](https://github.com/sarderji889900-bit/rea-game-asset-scraper) |
| 6 | **modders** | 5 | 5 | 766 | 192/d | 255/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-15 | [ahmedmahtab9991-cpu/scurz-fps-plus](https://github.com/ahmedmahtab9991-cpu/scurz-fps-plus) |
| 7 | **hero** | 6 | 6 | 745 | 168/d | 209/d | ▁▁▁▁▂▁▁▁▁▁▁▁█▁ | 2026-11-09 | [donsimox0-wq/azerothcore-personal-loot-mod](https://github.com/donsimox0-wq/azerothcore-personal-loot-mod) |
| 8 | **item** | 5 | 5 | 575 | 152/d | 178/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-05 | [Ffcj2025/steam-community-market-scraper](https://github.com/Ffcj2025/steam-community-market-scraper) |
| 9 | **address** | 6 | 6 | 754 | 137/d | 108/d | ▁▃▂▃▂▁▁▁▆█▁█▇▁ | 2026-11-06 | [zacharyrogue/Crypto-Whale-Tracker](https://github.com/zacharyrogue/Crypto-Whale-Tracker) |
| 10 | **oot** (+ocarina) | 6 | 6 | 923 | 122/d | 91/d | ▁▂▂▃▃▃▂▂▅██▆▅▃ | 2026-11-06 | [pixl27/ProjectReLink](https://github.com/pixl27/ProjectReLink) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **gemeni** (+manus, typescript-sdk, ai--manus, general-purpose, solidjs, 41 more) | 494 | 380 | 80.5k | 14.7k/d | 394/d | ▁▁▁▁▁▁▁▁▇█▃▁▁▁ | 2026-11-06 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 2 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 38 more) | 328 | 283 | 40.3k | 7.5k/d | 348/d | ▁▁▁▁▁▁▁▁▄█▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, flat-stars |
| 3 | **trial-version** (+trial, windows-software, latest, windows-10, conversion, 65 more) | 299 | 299 | 30.2k | 3.6k/d | 214/d | ▁▁▁▁▁▁█▁▁▁▁▁▁▁ | 2026-11-06 | [brisk-thrush-husky/malware-defender-desktop](https://github.com/brisk-thrush-husky/malware-defender-desktop) | near-duplicate, same-day, flat-stars |
| 4 | **setup** (+activated) | 54 | 54 | 9.0k | 1.8k/d | 994/d | ▁▁▁▂▂▁▂▂▅█▂▁█▂ | 2026-11-05 | [ariamitchell54/cubase-studio-desktop](https://github.com/ariamitchell54/cubase-studio-desktop) | flat-stars |
| 5 | **utility** (+software-engineering, configured, pre-configured, acrobat, scripts, 2 more) | 52 | 52 | 7.2k | 1.7k/d | 1.0k/d | ▁▁▁▂▄▂▁▁▃▄▁▁█▁ | 2026-11-06 | [ben-miller-23/dxo-photolab-10-desktop](https://github.com/ben-miller-23/dxo-photolab-10-desktop) | near-duplicate, flat-stars |
| 6 | **community-driven** (+community) | 33 | 33 | 5.0k | 1.2k/d | 1.6k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-11 | [aburhabanas-sketch/signal-bot-client](https://github.com/aburhabanas-sketch/signal-bot-client) | same-day, flat-stars |
| 7 | **activator** (+activation, kms, scala, office365, tweak, 9 more) | 94 | 94 | 13.9k | 1.1k/d | 4/d | ▁▁█▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-06 | [haroonwattoo556677-max/ios-forensic-exploitation-framework](https://github.com/haroonwattoo556677-max/ios-forensic-exploitation-framework) | same-day, flat-stars |
| 8 | **apimart** (+ai-image-generation, ai-video-generation, gpt-image) | 23 | 1 | 3.3k | 777/d | 684/d | █▂▁▁▁▁▁▁▁▁▁█▇▁ | 2026-11-05 | [fujc683/seedance-2-5-flash-pricing](https://github.com/fujc683/seedance-2-5-flash-pricing) | few-owners, flat-stars |
| 9 | **trainer** (+fling, cheat) | 21 | 21 | 3.0k | 743/d | 916/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-05 | [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) | same-day, flat-stars |
| 10 | **coregold** (+vcc, applepay, usdt, finops, architectural, 6 more) | 58 | 55 | 2.9k | 316/d | 215/d | ▃▁▁▃▃▇█▆▇▂▁▆▃▅ | 2026-11-05 | [manassiradao368-tech/gemini-2-flash-thinking-api-guard](https://github.com/manassiradao368-tech/gemini-2-flash-thinking-api-guard) | near-duplicate, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>scripting</b>: 8 repos, 3.4k stars</summary>

- [tiobeharxi1987/blender-ai-copilot-flow](https://github.com/tiobeharxi1987/blender-ai-copilot-flow) 514★ A controlled AI workflow for Blender: every copilot edit is a supervised tool c…
- [zovulrira1974/blender-ai-copilot-assets](https://github.com/zovulrira1974/blender-ai-copilot-assets) 510★ An asset-savvy AI copilot for Blender—search Poly Haven, Sketchfab and Poly Piz…
- [Doug-218/blender-ai-copilot-forge](https://github.com/Doug-218/blender-ai-copilot-forge) 509★ A scene-forging AI copilot for Blender—describe the layout and watch primitives…
- [precygtrucqui1981/blender-ai-copilot-lab](https://github.com/precygtrucqui1981/blender-ai-copilot-lab) 507★ An AI lab for Blender where manager–worker–reviewer agent teams run multi-step …
- [fumbdendade19718/blender-ai-copilot-desk](https://github.com/fumbdendade19718/blender-ai-copilot-desk) 505★ A visual AI desk for Blender—chat, scene objects, viewport snapshots, approvals…

</details>

<details><summary><b>apex</b>: 5 repos, 3.2k stars</summary>

- [apex-compute/ANR](https://github.com/apex-compute/ANR) 2.7k★ Apex Neural Rendering (ANR) by Apex Compute
- [Sxuan-Coder/open-apex-drama](https://github.com/Sxuan-Coder/open-apex-drama) 204★ 第三方水果短剧客户端，免登录、免广告、免费使用，支持真人剧、AI漫剧、AI短剧等多种短剧。支持Windows和安卓双端播放
- [Ar6thr-333/apex-legends-fps-optimizer](https://github.com/Ar6thr-333/apex-legends-fps-optimizer) 153★ Apex Legends FPS Optimizer — Open-Source Windows Performance Boost
- [SoldierMultiply/footstep-equalizer](https://github.com/SoldierMultiply/footstep-equalizer) 75★ Footstep equalizer for FPS games: auto EQ for Valorant, CS2, Apex
- [DiamondCockatooFlow/Apex-Legends-cheat-client](https://github.com/DiamondCockatooFlow/Apex-Legends-cheat-client) 53★ 

</details>

<details><summary><b>blockchain</b>: 14 repos, 1.8k stars</summary>

- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) 227★ Solana validator health in 60 seconds: score, leader duties, rewards, disk fore…
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) 163★ Non-custodial, encrypted file storage & sharing platform with Stellar payments …
- [EmeerMacapili/ethereum-anomaly-detection](https://github.com/EmeerMacapili/ethereum-anomaly-detection) 153★ Ethereum Anomaly Detection: Behavioral Analysis and Threat Identification
- [ZeekCursos/metaid-file-system](https://github.com/ZeekCursos/metaid-file-system) 153★ MetaID File System: Blockchain-Based Decentralized File Storage and Service Pla…
- [abhijitacharyathegoat-collab/7fchain-blockchain](https://github.com/abhijitacharyathegoat-collab/7fchain-blockchain) 153★ 7FChain Blockchain: Desktop Node Software for Decentralized Ledger Infrastructu…

</details>

<details><summary><b>systemhelper</b>: 5 repos, 2.3k stars</summary>

- [Eynnzerr/TelemetryCleaner](https://github.com/Eynnzerr/TelemetryCleaner) 1.9k★ 基于 Shizuku 免 Root 清除国产安卓 SystemHelper、RegService 等系统预装隐私数据收集模块
- [vivibibi30/hyperpguard](https://github.com/vivibibi30/hyperpguard) 137★ 可配置的应用行为开关模块（LSPosed）：网络、存储、接口、采集四层，纯本地
- [acxun/hyperos-dm-report](https://github.com/acxun/hyperos-dm-report) 120★ HyperOS preinstalled carrier DM components: data collection, crypto, and decryp…
- [zhang010416/carrier-dm-blocker](https://github.com/zhang010416/carrier-dm-blocker) 77★ 三家运营商预装 DM 组件拦截（联通 SystemHelper / 移动 RegService / 电信 CTAutoRegist）：LSPosed + Ke…
- [zd-Ethan/systemhelper](https://github.com/zd-Ethan/systemhelper) 42★ SystemHelper 免 Root 用户级卸载方案：小米 14 Pro / 小米 17 Pro Max 实测记录

</details>

<details><summary><b>asset</b>: 9 repos, 967 stars</summary>

- [sarderji889900-bit/rea-game-asset-scraper](https://github.com/sarderji889900-bit/rea-game-asset-scraper) 154★ REA Game Asset Scraper: Scoped Asset Extraction for Visual Workflows
- [erwachirakenya-dot/gflfc-decryption-toolkit](https://github.com/erwachirakenya-dot/gflfc-decryption-toolkit) 153★ GFLFC Decryption Toolkit: Fire Control UnityFS XOR, FlatBuffers Manifest, CDN S…
- [jalelhmem26-hub/rpg-maker-decrypter](https://github.com/jalelhmem26-hub/rpg-maker-decrypter) 153★ Fast RPG Maker archive and asset decrypter with built-in asset inspection
- [miguellclc/cod3-extraction-tools](https://github.com/miguellclc/cod3-extraction-tools) 153★ Extraction Tools: Xbox 360 asset extractors, format notes, and game checks
- [wraithlegislatorknot/domesday-osint-asset-records](https://github.com/wraithlegislatorknot/domesday-osint-asset-records) 112★ OSINT search of public financial and property records.

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
