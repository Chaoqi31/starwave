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
_recent 3,727 repos  2026-10-31..2026-11-14  stars>=40 · baseline 3,933 repos  2026-09-01..2026-10-30  stars>=150 · generated 2026-11-14 13:35 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **osint-tool** | 9 | 9 | 1.4k | 1.4k/d | 345/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-13 | [StormBrawlerSack/legwork-osint-ai-investigator](https://github.com/StormBrawlerSack/legwork-osint-ai-investigator) |
| 2 | **scripting** (+blender-ai, blender-automation, blender-mcp, blender-plugin, blender-scripting, 8 more) | 8 | 8 | 2.0k | 1.2k/d | 560/d | ▁▁▁▁▁▁▁▁▁▁▁▁▄█ | 2026-11-12 | [ben14-dunn/native-instruments-kontakt-desktop](https://github.com/ben14-dunn/native-instruments-kontakt-desktop) |
| 3 | **hghub** | 5 | 5 | 9.7k | 939/d | 429/d | ▁▁▁▂▃▂▂▃▅█▄▂▃▂ | 2026-11-03 | [Minireel/HGhub](https://github.com/Minireel/HGhub) |
| 4 | **blockchain** | 9 | 9 | 1.9k | 493/d | 230/d | ▁▁▂▂▁▆▃▁▂▁█▇▁▅ | 2026-10-31 | [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) |
| 5 | **was** | 6 | 6 | 1.8k | 303/d | 151/d | ▁▁▂▂▂▂█▂▄▃▃▃▃▄ | 2026-11-01 | [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) |
| 6 | **ocarina** | 6 | 6 | 1.6k | 226/d | 104/d | ▁▁▁▁▁▁▇█▄▄▃▃▂▃ | 2026-11-05 | [sostenesfreitas/ocarina-recomp](https://github.com/sostenesfreitas/ocarina-recomp) |
| 7 | **trainer** (+blade) | 6 | 6 | 1.4k | 176/d | 4/d | ▁▁▁▁▁▂▁█▆█▁▁▁▁ | 2026-11-05 | [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) |
| 8 | **flight** (+ads-b) | 11 | 11 | 1.4k | 128/d | 44/d | ▁▁▃█▇▄▃▃▄▂▂▂▂▂ | 2026-10-31 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 9 | **mapping** | 8 | 7 | 798 | 88/d | 48/d | ▁▁▄█▇▇▅▅▅▃▃▄▃▄ | 2026-10-31 | [sylvieistaken/selevet-eglantine](https://github.com/sylvieistaken/selevet-eglantine) |
| 10 | **switch2** | 5 | 5 | 383 | 78/d | 59/d | ▁▁▁▁▁▂▁▂▇▅▃█▅▂ | 2026-11-04 | [enjoyerofslop/droidplay-core](https://github.com/enjoyerofslop/droidplay-core) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **gemeni** (+manus, typescript-sdk, ai--manus, general-purpose, solidjs, 22 more) | 509 | 434 | 105.3k | 100.1k/d | 13.3k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-06 | [AdmiralEmporium/ai--manus](https://github.com/AdmiralEmporium/ai--manus) | near-duplicate, same-day, flat-stars |
| 2 | **m3u** (+player2, player2.0, ip-tv, iptv-channels, iptv-m3u8, 22 more) | 334 | 334 | 59.0k | 59.0k/d | 5.6k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-13 | [AdmiralEmporium/IPTV_Player2.0](https://github.com/AdmiralEmporium/IPTV_Player2.0) | near-duplicate, same-day, flat-stars |
| 3 | **software-engineering** (+utility, windows-app, configured, pre-configured, setup, 10 more) | 117 | 117 | 88.3k | 12.9k/d | 12.1k/d | ▁▁▁▁▁▁▁▄▃▄▄█▁▁ | 2026-11-02 | [mahmoudtawfik1998/secure-pdf-document-processor](https://github.com/mahmoudtawfik1998/secure-pdf-document-processor) | near-duplicate, same-day, flat-stars |
| 4 | **trial-version** (+trial, windows-software, latest, windows-10, download, 55 more) | 351 | 351 | 36.8k | 9.7k/d | 12.0k/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▁ | 2026-11-08 | [DevedevT/FFmpeg-GUI-Editor-Windows](https://github.com/DevedevT/FFmpeg-GUI-Editor-Windows) | same-day, flat-stars |
| 5 | **activator** (+kms, activation, office365, scala, microsoft, 15 more) | 129 | 129 | 18.9k | 2.4k/d | 74/d | ▁▁▁▁▁▁▁█▁▁▁▁▁▁ | 2026-11-05 | [CCardona6/office-suite-alternative-access](https://github.com/CCardona6/office-suite-alternative-access) | near-duplicate, same-day, flat-stars |
| 6 | **rpocket** (+recoil, meteor, premiere, optimize, optimizations, 33 more) | 219 | 218 | 15.7k | 2.4k/d | 2.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-10-31 | [Harmonicdellafitting/minecraft-jenny-mod-download](https://github.com/Harmonicdellafitting/minecraft-jenny-mod-download) | flat-stars |
| 7 | **resp** (+troubleshooting, changer, monitors, autoclicker, dealer, 5 more) | 129 | 128 | 9.3k | 1.3k/d | 1.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-10-31 | [ViaBecrest/Eden-Switch-Emulator-resp](https://github.com/ViaBecrest/Eden-Switch-Emulator-resp) | flat-stars |
| 8 | **respocket** (+cheats, aax, soft, aio, yet, 4 more) | 56 | 56 | 3.9k | 663/d | 622/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-10-31 | [BeyondLibraBlaze/Fl-Studio-26-Respocket-Installer](https://github.com/BeyondLibraBlaze/Fl-Studio-26-Respocket-Installer) | flat-stars |
| 9 | **resocket** (+shooter) | 66 | 66 | 5.1k | 585/d | 787/d | ▁▁▁▁▁▂▁▁▁▁▁▁█▁ | 2026-10-31 | [AstraLunarvenom33479/BloodStrike-region-limit-resocket](https://github.com/AstraLunarvenom33479/BloodStrike-region-limit-resocket) | flat-stars |
| 10 | **coregold** (+billing, stripe) | 52 | 50 | 3.4k | 346/d | 335/d | ▁▂▁▃▅▅▁▁▄▅█▇▄▃ | 2026-10-31 | [sahinmola5-rgb/coregold-vcc-terminal](https://github.com/sahinmola5-rgb/coregold-vcc-terminal) | flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>osint-tool</b>: 9 repos, 1.4k stars</summary>

- [StormBrawlerSack/legwork-osint-ai-investigator](https://github.com/StormBrawlerSack/legwork-osint-ai-investigator) 196★ AI OSINT investigator for Windows: ask a question in plain words and get an ans…
- [solderpupabridge/mutuals-osint-social-connections](https://github.com/solderpupabridge/mutuals-osint-social-connections) 186★ OSINT tool for Windows: enter two public accounts and see everyone who links th…
- [IceBricklayer4/exposure-osint-digital-footprint](https://github.com/IceBricklayer4/exposure-osint-digital-footprint) 176★ Self-OSINT scanner for Windows: look yourself up the way a stranger would, see …
- [rivetternregard/acid-test-osint-scam-checker](https://github.com/rivetternregard/acid-test-osint-scam-checker) 164★ OSINT website checker for Windows: paste a link to a shop, site or project and …
- [RouteInferno/shamus-osint-ai-agent](https://github.com/RouteInferno/shamus-osint-ai-agent) 157★ Command-line AI agent for OSINT: one command, it picks the tools, runs them and…

</details>

<details><summary><b>scripting</b>: 8 repos, 2.0k stars</summary>

- [ben14-dunn/native-instruments-kontakt-desktop](https://github.com/ben14-dunn/native-instruments-kontakt-desktop) 280★ Native Instruments Kontakt 2026 desktop setup with industry-standard sampler fo…
- [hitkeeen/blender-ai-mcp-addon](https://github.com/hitkeeen/blender-ai-mcp-addon) 253★ AI assistant and MCP server for Blender: visual chat, scene tools, multi-agent …
- [precygtrucqui1981/blender-ai-copilot-lab](https://github.com/precygtrucqui1981/blender-ai-copilot-lab) 253★ An AI lab for Blender where manager–worker–reviewer agent teams run multi-step …
- [tiobeharxi1987/blender-ai-copilot-flow](https://github.com/tiobeharxi1987/blender-ai-copilot-flow) 252★ A controlled AI workflow for Blender: every copilot edit is a supervised tool c…
- [zovulrira1974/blender-ai-copilot-assets](https://github.com/zovulrira1974/blender-ai-copilot-assets) 249★ An asset-savvy AI copilot for Blender—search Poly Haven, Sketchfab and Poly Piz…

</details>

<details><summary><b>hghub</b>: 5 repos, 9.7k stars</summary>

- [Minireel/HGhub](https://github.com/Minireel/HGhub) 8.8k★ YellowFruit third-party client
- [LNPANDY/HGhub-MacOS-iOS-Version](https://github.com/LNPANDY/HGhub-MacOS-iOS-Version) 518★ HGhub 跨平台客户端 (macOS & iOS 增强版) · 支持 Apple Silicon / Intel 双架构 DMG 与 iOS 免签 IPA …
- [vps1986/hghub-clone](https://github.com/vps1986/hghub-clone) 150★ HGhub 1.2.0 复刻：竖屏短剧网页 + 播放解析代理 + Android WebView 壳，小白可跟着复刻
- [Kel077/HGhub](https://github.com/Kel077/HGhub) 117★ YellowFruit third-party client
- [Kepler16f/HGhub](https://github.com/Kepler16f/HGhub) 50★ 派生自 Minireel/HGhub (Fork) · HGhub 跨平台桌面与移动端社区移植增强版 - 支持 macOS (Apple Silicon/In…

</details>

<details><summary><b>blockchain</b>: 9 repos, 1.9k stars</summary>

- [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) 934★ Wallet UI simulation tool for BTC, ETH, SOL, XRP, and 200+ assets. Customize di…
- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) 230★ Solana validator health in 60 seconds: score, leader duties, rewards, disk fore…
- [tabookhandawn/interchange-osint-cross-chain-tracing](https://github.com/tabookhandawn/interchange-osint-cross-chain-tracing) 176★ OSINT tracing of crypto funds across blockchains.
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) 164★ Non-custodial, encrypted file storage & sharing platform with Stellar payments …
- [ifrc-zju/blockchain-federated-prototypes](https://github.com/ifrc-zju/blockchain-federated-prototypes) 127★ 区块链协作的联邦原型学习，结合语义加权对比学习与原型收缩，通过智能合约校验训练轮次、客户端提交和聚合状态。

</details>

<details><summary><b>was</b>: 6 repos, 1.8k stars</summary>

- [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) 983★ Static recompilation of Donkey Kong Bananza (Switch 2) to native Windows with V…
- [Tropicaldrescoop/discord-id-osint-checker](https://github.com/Tropicaldrescoop/discord-id-osint-checker) 383★ Free OSINT app for Discord IDs: paste a user, server or invite and see when it …
- [retropineaple/ForbiddenItlwm](https://github.com/retropineaple/ForbiddenItlwm) 157★ Because AirDrop was never supposed to work on Intel Wi-Fi.
- [CityGrubWedge/amber-osint-web-archive](https://github.com/CityGrubWedge/amber-osint-web-archive) 130★ OSINT time machine for the web: how a page looked, and what was removed from it.
- [Hexay/dopplerprint](https://github.com/Hexay/dopplerprint) 67★ Work out where and when an audio recording was made using only the doppler band…

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
