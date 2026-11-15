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
_recent 3,689 repos  2026-11-01..2026-11-15  stars>=40 · baseline 3,971 repos  2026-09-02..2026-10-31  stars>=150 · generated 2026-11-15 13:58 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **hghub** | 5 | 5 | 9.8k | 869/d | 375/d | ▁▁▂▃▂▂▃▅█▄▂▃▂▁ | 2026-11-03 | [Minireel/HGhub](https://github.com/Minireel/HGhub) |
| 2 | **blockchain** | 9 | 9 | 2.0k | 508/d | 148/d | ▁▂▂▁▆▃▁▁▁██▁▃▆ | 2026-11-01 | [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) |
| 3 | **trainer** | 7 | 7 | 1.6k | 405/d | 87/d | ▁▁▁▁▂▁█▆█▁▁▁▁▅ | 2026-11-05 | [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) |
| 4 | **ocarina** (+oot) | 8 | 8 | 2.0k | 311/d | 159/d | ▁▁▁▁▁▇█▄▄▃▃▂▄▄ | 2026-11-05 | [sostenesfreitas/ocarina-recomp](https://github.com/sostenesfreitas/ocarina-recomp) |
| 5 | **nup** | 6 | 6 | 1.7k | 130/d | 85/d | ▅▆▄▄▄▃▄▇█▅▄▄▄▃ | 2026-11-01 | [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) |
| 6 | **flight** (+ads-b) | 10 | 10 | 1.4k | 117/d | 27/d | ▁▂█▇▄▃▃▄▃▂▂▂▂▁ | 2026-11-01 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 7 | **mapping** | 6 | 6 | 674 | 81/d | 51/d | ▁▅▃▇█▆▅▅▂▃▃▂▅▇ | 2026-11-01 | [sylvieistaken/selevet-eglantine](https://github.com/sylvieistaken/selevet-eglantine) |
| 8 | **plamo** | 5 | 5 | 642 | 67/d | 21/d | ▁▁▁▁▃▂▅▆█▆▂▂▂▂ | 2026-11-05 | [jammaru/sakutto](https://github.com/jammaru/sakutto) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **gemeni** (+manus, typescript-sdk, ai--manus, general-purpose, solidjs, 24 more) | 556 | 476 | 140.5k | 81.6k/d | 46.4k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▄█ | 2026-11-06 | [Topkiflare74/ai--manus2.0](https://github.com/Topkiflare74/ai--manus2.0) | near-duplicate, same-day, flat-stars |
| 2 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 37 more) | 395 | 353 | 99.5k | 71.3k/d | 33.1k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▂█ | 2026-11-13 | [WarriorRemember/IPTV_Player_2.0](https://github.com/WarriorRemember/IPTV_Player_2.0) | near-duplicate, flat-stars |
| 3 | **software-engineering** (+windows-app, utility, configured, pre-configured, setup, 12 more) | 118 | 118 | 88.5k | 11.6k/d | 1.1k/d | ▁▁▁▁▁▁▄▃▄▄█▁▁▁ | 2026-11-02 | [mahmoudtawfik1998/secure-pdf-document-processor](https://github.com/mahmoudtawfik1998/secure-pdf-document-processor) | near-duplicate, same-day, flat-stars |
| 4 | **trial-version** (+trial, windows-software, latest, windows-10, dvd, 57 more) | 349 | 349 | 35.9k | 7.7k/d | 220/d | ▁▁▁▁▁▁▁▁▁▁█▁▁▁ | 2026-11-10 | [brisk-thrush-husky/malware-defender-desktop](https://github.com/brisk-thrush-husky/malware-defender-desktop) | same-day, flat-stars |
| 5 | **activator** (+kms, activation, office365, scala, microsoft, 15 more) | 128 | 128 | 18.8k | 2.1k/d | 114/d | ▁▁▁▁▁▁█▁▁▁▁▁▁▁ | 2026-11-05 | [CCardona6/office-suite-alternative-access](https://github.com/CCardona6/office-suite-alternative-access) | near-duplicate, same-day, flat-stars |
| 6 | **rpocket** (+meteor, recoil, optimize, optimizations, playerbots, 19 more) | 159 | 158 | 13.6k | 1.9k/d | 4.4k/d | ▁▁▁▁▁▁▁▁▁▁▁▆▁█ | 2026-11-01 | [FaelVenomvale/JennyModMinecraft-rpocket-team](https://github.com/FaelVenomvale/JennyModMinecraft-rpocket-team) | flat-stars |
| 7 | **resp** (+monitors, dealer, macro, weapons, exposure, 4 more) | 102 | 101 | 8.7k | 1.1k/d | 2.8k/d | ▁▁▁▁▁▁▁▁▁▁▁▆▁█ | 2026-11-01 | [ViaBecrest/Eden-Switch-Emulator-resp](https://github.com/ViaBecrest/Eden-Switch-Emulator-resp) | flat-stars |
| 8 | **osint-tool** (+nickname, investigation) | 11 | 11 | 1.8k | 894/d | 534/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▅ | 2026-11-06 | [StormBrawlerSack/legwork-osint-ai-investigator](https://github.com/StormBrawlerSack/legwork-osint-ai-investigator) | same-day |
| 9 | **respocket** (+soft, aio, yet, aax, mastering, 1 more) | 42 | 42 | 3.5k | 534/d | 1.2k/d | ▁▁▁▁▁▁▁▁▁▁▁▆▁█ | 2026-11-01 | [BeyondLibraBlaze/Fl-Studio-26-Respocket-Installer](https://github.com/BeyondLibraBlaze/Fl-Studio-26-Respocket-Installer) | flat-stars |
| 10 | **resocket** (+autoclicker) | 54 | 54 | 4.8k | 513/d | 1.6k/d | ▁▁▁▁▁▁▁▁▁▁▁▆▁█ | 2026-11-01 | [AstraLunarvenom33479/BloodStrike-region-limit-resocket](https://github.com/AstraLunarvenom33479/BloodStrike-region-limit-resocket) | same-day, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>hghub</b>: 5 repos, 9.8k stars</summary>

- [Minireel/HGhub](https://github.com/Minireel/HGhub) 8.9k★ Plug-in media player
- [LNPANDY/HGhub-MacOS-iOS-Version](https://github.com/LNPANDY/HGhub-MacOS-iOS-Version) 521★ HGhub 跨平台客户端 (macOS & iOS 增强版) · 支持 Apple Silicon / Intel 双架构 DMG 与 iOS 免签 IPA …
- [vps1986/hghub-clone](https://github.com/vps1986/hghub-clone) 175★ HGhub 1.2.0 复刻：竖屏短剧网页 + 播放解析代理 + Android WebView 壳，小白可跟着复刻
- [Kel077/HGhub](https://github.com/Kel077/HGhub) 146★ YellowFruit third-party client
- [Kepler16f/HGhub](https://github.com/Kepler16f/HGhub) 62★ 派生自 Minireel/HGhub (Fork) · HGhub 跨平台桌面与移动端社区移植增强版 - 支持 macOS (Apple Silicon/In…

</details>

<details><summary><b>blockchain</b>: 9 repos, 2.0k stars</summary>

- [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) 934★ Wallet UI simulation tool for BTC, ETH, SOL, XRP, and 200+ assets. Customize di…
- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) 230★ Solana validator health in 60 seconds: score, leader duties, rewards, disk fore…
- [Beachfromgate/Wallet-Hunter](https://github.com/Beachfromgate/Wallet-Hunter) 179★ A cryptocurrency wallet discovery and balance scanning tool designed to check m…
- [tabookhandawn/interchange-osint-cross-chain-tracing](https://github.com/tabookhandawn/interchange-osint-cross-chain-tracing) 177★ OSINT tracing of crypto funds across blockchains.
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) 164★ Non-custodial, encrypted file storage & sharing platform with Stellar payments …

</details>

<details><summary><b>trainer</b>: 7 repos, 1.6k stars</summary>

- [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) 382★ Phantom Blade Zero Trainer 2026: God Mode, One-Hit Kill, start All Weapons
- [richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit](https://github.com/richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit) 382★ PhantomBladeZero-Cheat: 54 toggleable runtime options and three presets for Pha…
- [wanjalaibra05-lgtm/phantom-blade-zero-assist](https://github.com/wanjalaibra05-lgtm/phantom-blade-zero-assist) 382★ Phantom Blade Zero: Symbol Cues, Wider Parry Windows, Full Arsenal
- [charliestanley1993/rob-run-desktop](https://github.com/charliestanley1993/rob-run-desktop) 247★ Rob Run Hack 2026 - undetected cheat for Windows 10/11. Player ESP, Cop ESP, Lo…
- [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) 147★ Whole-body motion tracking for the Unitree G1 in under a minute. BlinkMimic's w…

</details>

<details><summary><b>ocarina</b>: 8 repos, 2.0k stars</summary>

- [sostenesfreitas/ocarina-recomp](https://github.com/sostenesfreitas/ocarina-recomp) 1.2k★ Ocarina of Time running natively on Windows, no emulator. Built on your PC from…
- [pixl27/ProjectReLink](https://github.com/pixl27/ProjectReLink) 192★ Project ReLink - Zelda OOT Remake Recomp. An unofficial native PC recompilation…
- [daurosk/oot-remake-multiplayer](https://github.com/daurosk/oot-remake-multiplayer) 174★ Working multiplayer for the Ocarina of Time remake: first on an emulator, then …
- [adi0900/GreenKid-MV](https://github.com/adi0900/GreenKid-MV) 118★ Game-free Mac builder for native Ocarina of Time (Switch 2) ports on Apple Sili…
- [dsi-hub/HookLink](https://github.com/dsi-hub/HookLink) 117★ The Legend of Zelda: Ocarina of Time (Switch 2 Edition) on iPhone, built on you…

</details>

<details><summary><b>nup</b>: 6 repos, 1.7k stars</summary>

- [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) 1.0k★ Static recompilation of Donkey Kong Bananza (Switch 2) to native Windows with V…
- [a55uka/nup](https://github.com/a55uka/nup) 393★ NUP is a clean-room container format for unencrypted NX (Nintendo Switch 1/2) g…
- [Alano6678/hwaoi-recomp](https://github.com/Alano6678/hwaoi-recomp) 83★ Experimental Hyrule Warriors: Age of Imprisonment recompilation for Windows, wi…
- [PranavDupati/ninboy-hat-for-macos](https://github.com/PranavDupati/ninboy-hat-for-macos) 83★ Native compilation enhancements, crash fixes, keyboard/mouse controls, and perf…
- [SPIN0ZAi/nup-extractor](https://github.com/SPIN0ZAi/nup-extractor) 55★ A modern, high-performance native desktop GUI for inspecting, exploring, verify…

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
