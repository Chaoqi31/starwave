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
_recent 3,069 repos  2026-11-04..2026-11-18  stars>=40 · baseline 4,093 repos  2026-09-05..2026-11-03  stars>=150 · generated 2026-11-18 15:42 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **setup** | 53 | 53 | 10.8k | 2.4k/d | 1.1k/d | ▁▁▁▁▂▂▂▃▂▅█▂▁█ | 2026-11-04 | [uchihamx999-beep/imei-repair-toolkit](https://github.com/uchihamx999-beep/imei-repair-toolkit) |
| 2 | **systemhelper** | 5 | 5 | 2.0k | 263/d | 284/d | ▁▁▂▂▂▁▁▂▂▂█▆▄▃ | 2026-11-05 | [Eynnzerr/TelemetryCleaner](https://github.com/Eynnzerr/TelemetryCleaner) |
| 3 | **modders** | 5 | 5 | 765 | 255/d | 255/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-15 | [AlbertoIlustra/marvel-rivals-galacta-mod](https://github.com/AlbertoIlustra/marvel-rivals-galacta-mod) |
| 4 | **colab** | 8 | 8 | 1.1k | 242/d | 123/d | ▂▂▂▂▅▄▂▁▁▁▁▁▁█ | 2026-11-04 | [scarletkc/colab-playground](https://github.com/scarletkc/colab-playground) |
| 5 | **hero** | 6 | 6 | 742 | 220/d | 210/d | ▁▁▁▁▁▂▁▁▁▁▁▁▁█ | 2026-11-09 | [donsimox0-wq/azerothcore-personal-loot-mod](https://github.com/donsimox0-wq/azerothcore-personal-loot-mod) |
| 6 | **asset** | 8 | 8 | 886 | 215/d | 188/d | ▁▁▁▁▁▁▁▁▁▃▂▁▂█ | 2026-11-04 | [wraithlegislatorknot/domesday-osint-asset-records](https://github.com/wraithlegislatorknot/domesday-osint-asset-records) |
| 7 | **oot** (+ocarina) | 7 | 7 | 929 | 192/d | 147/d | ▁▁▂▂▃▃▂▂▂▅██▇▇ | 2026-11-06 | [pixl27/ProjectReLink](https://github.com/pixl27/ProjectReLink) |
| 8 | **address** | 5 | 5 | 809 | 185/d | 98/d | ▁▁▃▂▃▂▁▁▁██▁▅█ | 2026-11-06 | [JouninGlide65/assay-osint-crypto-aml-check](https://github.com/JouninGlide65/assay-osint-crypto-aml-check) |
| 9 | **delivery** | 10 | 10 | 854 | 144/d | 106/d | ▃▅▂▂▂▂▁▂▄▂▂▂▃█ | 2026-11-04 | [guzhezao/parcel-shift](https://github.com/guzhezao/parcel-shift) |
| 10 | **plamo** | 6 | 6 | 730 | 58/d | 20/d | ▁▃▂▅▆█▆▂▂▂▂▂▂▂ | 2026-11-05 | [jammaru/sakutto](https://github.com/jammaru/sakutto) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **gemeni** (+manus, typescript-sdk, ai--manus, general-purpose, solidjs, 41 more) | 399 | 322 | 74.8k | 17.1k/d | 3.7k/d | ▁▁▁▁▁▁▁▁▁█▇▃▁▁ | 2026-11-06 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 2 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 33 more) | 196 | 194 | 30.7k | 7.3k/d | 374/d | ▁▁▁▁▁▁▁▁▁▆█▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, same-day, flat-stars |
| 3 | **utility** (+software-engineering, windows-app, configured, pre-configured, crack, 9 more) | 87 | 87 | 42.9k | 4.8k/d | 999/d | ▁▁▁▄▃▄▄█▁▂▂▁▁▂ | 2026-11-06 | [ebtsamalhakmy-sketch/desktop-backup-suite](https://github.com/ebtsamalhakmy-sketch/desktop-backup-suite) | near-duplicate, flat-stars |
| 4 | **trial-version** (+trial, windows-software, latest, windows-10, download, 42 more) | 266 | 266 | 27.3k | 3.5k/d | 104/d | ▁▁▁▁▁▁▁█▁▁▁▁▁▁ | 2026-11-08 | [brisk-thrush-husky/malware-defender-desktop](https://github.com/brisk-thrush-husky/malware-defender-desktop) | same-day, flat-stars |
| 5 | **community-driven** (+community) | 33 | 33 | 5.9k | 1.7k/d | 1.6k/d | ▁▁▁▁▁▁▁▂▁▁▁▁▁█ | 2026-11-06 | [RolandoV3/metatrader-5-bot](https://github.com/RolandoV3/metatrader-5-bot) | same-day |
| 6 | **activator** (+activation, kms, scala, office365, tweak, 13 more) | 99 | 99 | 14.8k | 1.3k/d | 106/d | ▁▁▁█▁▁▁▁▁▁▁▁▁▁ | 2026-11-06 | [markrusell/excel-spreadsheet](https://github.com/markrusell/excel-spreadsheet) | near-duplicate, same-day, flat-stars |
| 7 | **trainer** (+blade, fling, cheat) | 26 | 26 | 4.3k | 1.2k/d | 952/d | ▁▁▁▂▂▂▁▁▁▁▁▁▁█ | 2026-11-05 | [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) | flat-stars |
| 8 | **apimart** (+ai-image-generation, gpt-image, ai-video-generation) | 23 | 1 | 3.3k | 1.1k/d | 684/d | ▁█▂▁▁▁▁▁▁▁▁▁█▇ | 2026-11-05 | [fujc683/seedance-2-5-flash-pricing](https://github.com/fujc683/seedance-2-5-flash-pricing) | few-owners, flat-stars |
| 9 | **osint-tool** (+nickname, osint, socmint, investigation) | 15 | 14 | 3.7k | 797/d | 554/d | ▁▁▁▁▁▁▁▁▁█▆▃▅▆ | 2026-11-06 | [StormBrawlerSack/legwork-osint-ai-investigator](https://github.com/StormBrawlerSack/legwork-osint-ai-investigator) | same-day |
| 10 | **scripting** (+blender-mcp, 3d-automation, blender-agents, blender-ai, blender-assistant, 9 more) | 10 | 10 | 3.5k | 626/d | 300/d | ▁▁▁▁▁▁▁▁▄▅█▄▁▃ | 2026-11-04 | [tiobeharxi1987/blender-ai-copilot-flow](https://github.com/tiobeharxi1987/blender-ai-copilot-flow) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>setup</b>: 53 repos, 10.8k stars</summary>

- [uchihamx999-beep/imei-repair-toolkit](https://github.com/uchihamx999-beep/imei-repair-toolkit) 1.1k★ IMEI Repair 2026: Standalone Installer and Complete Setup for Device Repair Sol…
- [ariamitchell54/cubase-studio-desktop](https://github.com/ariamitchell54/cubase-studio-desktop) 367★ Cubase Studio 2026 desktop setup with full plugin suite and complete feature set
- [ben14-dunn/native-instruments-kontakt-desktop](https://github.com/ben14-dunn/native-instruments-kontakt-desktop) 366★ Native Instruments Kontakt 2026 desktop setup with industry-standard sampler fo…
- [bradburns2001/topaz-video-ai-desktop](https://github.com/bradburns2001/topaz-video-ai-desktop) 365★ Topaz Video AI 2026 desktop setup with AI upscaling up to 16K with detail recov…
- [brave-shell-07/izotope-rx-11-desktop](https://github.com/brave-shell-07/izotope-rx-11-desktop) 365★ iZotope RX 11 2026 desktop setup with AI audio repair, denoise, de-reverb and d…

</details>

<details><summary><b>systemhelper</b>: 5 repos, 2.0k stars</summary>

- [Eynnzerr/TelemetryCleaner](https://github.com/Eynnzerr/TelemetryCleaner) 1.6k★ 基于 Shizuku 免 Root 清除国产安卓 SystemHelper、RegService 等系统预装隐私数据收集模块
- [vivibibi30/hyperpguard](https://github.com/vivibibi30/hyperpguard) 136★ 可配置的应用行为开关模块（LSPosed）：网络、存储、接口、采集四层，纯本地
- [acxun/hyperos-dm-report](https://github.com/acxun/hyperos-dm-report) 119★ HyperOS preinstalled carrier DM components: data collection, crypto, and decryp…
- [zhang010416/carrier-dm-blocker](https://github.com/zhang010416/carrier-dm-blocker) 72★ 三家运营商预装 DM 组件拦截（联通 SystemHelper / 移动 RegService / 电信 CTAutoRegist）：LSPosed + Ke…
- [zd-Ethan/systemhelper](https://github.com/zd-Ethan/systemhelper) 40★ SystemHelper 免 Root 用户级卸载方案：小米 14 Pro / 小米 17 Pro Max 实测记录

</details>

<details><summary><b>modders</b>: 5 repos, 765 stars</summary>

- [AlbertoIlustra/marvel-rivals-galacta-mod](https://github.com/AlbertoIlustra/marvel-rivals-galacta-mod) 153★ Marvel Rivals Galacta Mod: Native Runtime Skin Swapper and Companion Manager
- [ahmedmahtab9991-cpu/scurz-fps-plus](https://github.com/ahmedmahtab9991-cpu/scurz-fps-plus) 153★ Scurz FPS Plus: A Minecraft 1.20 Performance Mod for Modders
- [alkabdohagag/fxdeck-fivem-command-deck](https://github.com/alkabdohagag/fxdeck-fivem-command-deck) 153★ FxDeck FiveM Command Deck - Streamlined In-Game Command Interface for Modders
- [bagusprastika-dot/aurora-dialog-enhancer](https://github.com/bagusprastika-dot/aurora-dialog-enhancer) 153★ Aurora Dialog Enhancer - Deeper Conversations, Richer Worlds for Modders
- [cumarmahamed7288-bit/jainacore-playerbots-mod](https://github.com/cumarmahamed7288-bit/jainacore-playerbots-mod) 153★ JainaCore Playerbots Mod: Bring Azeroth's Heroes to Life for Modders

</details>

<details><summary><b>colab</b>: 8 repos, 1.1k stars</summary>

- [scarletkc/colab-playground](https://github.com/scarletkc/colab-playground) 256★ A desktop app for the Google Colab CLI: accounts, GPU sessions with cost guards…
- [designfuchen/worldforge](https://github.com/designfuchen/worldforge) 221★ WorldForge 世界工坊 — Squeeze 100% out of Google Colab GPUs (RTX PRO 6000 Blackwell…
- [TizenryA/colab-gpu-studio](https://github.com/TizenryA/colab-gpu-studio) 218★ 移动端 AI 创作工作台：按需 Colab GPU、ComfyUI 工作流、Drive 缓存与任务管理。
- [miguellclc/cod3-extraction-tools](https://github.com/miguellclc/cod3-extraction-tools) 153★ Extraction Tools: Xbox 360 asset extractors, format notes, and game checks
- [dseditor/h3-colab-skill](https://github.com/dseditor/h3-colab-skill) 120★ MiniMax H3 pictures, talking video, extensions and TTS on your own Google Colab…

</details>

<details><summary><b>hero</b>: 6 repos, 742 stars</summary>

- [donsimox0-wq/azerothcore-personal-loot-mod](https://github.com/donsimox0-wq/azerothcore-personal-loot-mod) 153★ AzerothCore Loot Mod - Tailored Loot for Every Hero
- [jbfixurpc/satano-overwatch-2-overlay](https://github.com/jbfixurpc/satano-overwatch-2-overlay) 153★ Satano Overwatch 2 Overlay: Real-Time Hero Head Marking for Focused Target Trac…
- [mherrerahuacachino-lang/marvel-rivals-skins-customization](https://github.com/mherrerahuacachino-lang/marvel-rivals-skins-customization) 153★ Marvel Rivals Skin Forge: Reshape Every Hero Your Way
- [nikhishamudin-create/deadlock-counterpicker](https://github.com/nikhishamudin-create/deadlock-counterpicker) 153★ Deadlock Counterpicker: Pick the Right Hero, Win the Match
- [jyotiprakash101/nuvio-badge-kit](https://github.com/jyotiprakash101/nuvio-badge-kit) 83★ The complete stream badge pack for Nuvio and Fusion: 261 badges in 5 styles. Go…

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
