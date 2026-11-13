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
_recent 3,047 repos  2026-10-30..2026-11-13  stars>=40 · baseline 3,887 repos  2026-08-31..2026-10-29  stars>=150 · generated 2026-11-13 14:38 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **tweaks** | 9 | 9 | 8.3k | 1.9k/d | 1.3k/d | ▁▁▁▁▁▁▁▁▁▁█▆▃▂ | 2026-10-30 | [huamidev/GestaltX](https://github.com/huamidev/GestaltX) |
| 2 | **crack** | 7 | 7 | 1.8k | 471/d | 417/d | ▁▁▁▁▁▂▂▁▄▂▃▆█▅ | 2026-11-04 | [marorateb/burning-studio-desktop](https://github.com/marorateb/burning-studio-desktop) |
| 3 | **blockchain** (+ethereum) | 10 | 10 | 2.2k | 298/d | 316/d | ▁▃▁▃▃▅▆▃▁▂▁█▇▁ | 2026-10-30 | [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) |
| 4 | **trainer** (+blade) | 6 | 6 | 1.4k | 201/d | 7/d | ▁▁▁▁▁▁▂▁█▆█▁▁▁ | 2026-11-05 | [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) |
| 5 | **flight** (+ads-b) | 10 | 10 | 1.3k | 132/d | 45/d | ▁▁▁▃█▆▃▂▃▄▂▂▂▂ | 2026-10-31 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 6 | **gpl-3.0** | 8 | 8 | 929 | 114/d | 66/d | ▁▄█▃▃▃▂▂▂▃▂▃▄▂ | 2026-10-30 | [0xCodez/DuoDesk](https://github.com/0xCodez/DuoDesk) |
| 7 | **cs2** (+aegis, fee) | 7 | 7 | 985 | 108/d | 1/d | ▂█▁▂▁▁▁▁▁▃▂▁▁▁ | 2026-10-30 | [SoldierMultiply/footstep-equalizer](https://github.com/SoldierMultiply/footstep-equalizer) |
| 8 | **switch2** | 5 | 5 | 374 | 103/d | 65/d | ▁▁▁▁▁▁▂▁▂▇▅▃█▅ | 2026-11-04 | [enjoyerofslop/droidplay-core](https://github.com/enjoyerofslop/droidplay-core) |
| 9 | **plamo** | 5 | 5 | 604 | 80/d | 58/d | ▁▁▁▁▁▁▃▂▅▆█▆▂▂ | 2026-11-05 | [jammaru/sakutto](https://github.com/jammaru/sakutto) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **trial-version** (+trial, windows-software, windows-10, latest, download, 73 more) | 366 | 366 | 38.4k | 12.7k/d | 12.3k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-10-31 | [uchihamx999-beep/imei-repair-toolkit](https://github.com/uchihamx999-beep/imei-repair-toolkit) | same-day, flat-stars |
| 2 | **utility** (+windows-app, software-engineering, configured, setup, pre-configured, 10 more) | 112 | 112 | 82.6k | 12.4k/d | 16.2k/d | ▁▁▁▁▁▁▁▁▄▃▄▄█▁ | 2026-11-01 | [mahmoudtawfik1998/secure-pdf-document-processor](https://github.com/mahmoudtawfik1998/secure-pdf-document-processor) | near-duplicate, same-day, flat-stars |
| 3 | **rpocket** (+recoil, pre-activated, esp, meteor, items, 47 more) | 236 | 235 | 12.9k | 3.6k/d | 4.2k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-31 | [Arcanedagger38906/Domination-for-Red-rpocket-Engineers-server](https://github.com/Arcanedagger38906/Domination-for-Red-rpocket-Engineers-server) | flat-stars |
| 4 | **activator** (+kms, activation, microsoft, office365, scala, 19 more) | 131 | 131 | 19.0k | 2.9k/d | 91/d | ▁▁▁▁▁▁▁▁█▁▁▁▁▁ | 2026-11-05 | [CCardona6/office-suite-alternative-access](https://github.com/CCardona6/office-suite-alternative-access) | near-duplicate, same-day, flat-stars |
| 5 | **resp** (+changer, troubleshooting, monitors, ban, dealer, 9 more) | 142 | 140 | 7.8k | 2.0k/d | 2.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-31 | [ViaBecrest/Eden-Switch-Emulator-resp](https://github.com/ViaBecrest/Eden-Switch-Emulator-resp) | flat-stars |
| 6 | **respocket** (+cheats, aax, soft, aio, yet, 4 more) | 65 | 65 | 3.5k | 1.2k/d | 1.1k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-31 | [Ironisnex/FC27-Respocket-AIO-Soft](https://github.com/Ironisnex/FC27-Respocket-AIO-Soft) | flat-stars |
| 7 | **resocket** | 72 | 72 | 4.2k | 730/d | 1.3k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-31 | [AstraLunarvenom33479/BloodStrike-region-limit-resocket](https://github.com/AstraLunarvenom33479/BloodStrike-region-limit-resocket) | flat-stars |
| 8 | **coregold** (+vcc, billing, guard, stripe) | 64 | 62 | 4.5k | 479/d | 618/d | ▂▁▃▁▃▅▆▁▁▄▅█▇▄ | 2026-10-30 | [sygnomkt-ops/CoreGold---3-Step-Guide-to-Subscribe-to-Claude-Pro-Cursor-AI](https://github.com/sygnomkt-ops/CoreGold---3-Step-Guide-to-Subscribe-to-Claude-Pro-Cursor-AI) | flat-stars |
| 9 | **gemeni** (+general-purpose, manus, typescript-sdk, ai-manus, purpose, 12 more) | 26 | 24 | 1.4k | 205/d | 1/d | ▁▁▁▁▁▁▁▇█▁▁▁▁▁ | 2026-11-06 | [Abdul-Rehman7826/ai-manus](https://github.com/Abdul-Rehman7826/ai-manus) | near-duplicate, same-day, flat-stars |
| 10 | **ai-image-generation** (+gpt-image, apimart) | 13 | 1 | 1.3k | 162/d | 0/d | ▁▁▁▁▁▁█▂▁▁▁▁▁▁ | 2026-11-05 | [fujc683/gpt-image-2-6-commercial-use](https://github.com/fujc683/gpt-image-2-6-commercial-use) | same-day, few-owners |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>tweaks</b>: 9 repos, 8.3k stars</summary>

- [huamidev/GestaltX](https://github.com/huamidev/GestaltX) 7.2k★ An MobileGestalt editor for iOS 27.x, featuring region-code tweaks, device pres…
- [JaceThings/DiaTweaks](https://github.com/JaceThings/DiaTweaks) 668★ Unofficial tweaks for the Dia browser, kept in place across updates
- [PoomSmart/ios-logos-tweak](https://github.com/PoomSmart/ios-logos-tweak) 105★ Agent skill for best practices for iOS jailbreak tweaks
- [PranavDupati/ninboy-hat-for-macos](https://github.com/PranavDupati/ninboy-hat-for-macos) 82★ Native compilation enhancements, crash fixes, keyboard/mouse controls, and perf…
- [WithElectron83682/PC-Gaming-Tweaker](https://github.com/WithElectron83682/PC-Gaming-Tweaker) 63★ Optimize Windows 10/11 for gaming – boost FPS, reduce latency, clean disk, and …

</details>

<details><summary><b>crack</b>: 7 repos, 1.8k stars</summary>

- [marorateb/burning-studio-desktop](https://github.com/marorateb/burning-studio-desktop) 1.1k★ Burning Studio 2026: Complete Standalone Desktop Setup with Full Feature Config…
- [tigerogijzooav/Hyperliquid-Trade-Bot](https://github.com/tigerogijzooav/Hyperliquid-Trade-Bot) 289★ Independently analyze ROI, win rate, and PnL using the public Hyperliquid API, …
- [silverdugongenhance/PromptReel](https://github.com/silverdugongenhance/PromptReel) 207★ Free desktop app that turns a text prompt into a short video clip on your own P…
- [FrontierPheasant/voicemod](https://github.com/FrontierPheasant/voicemod) 102★ Reactive state management for voice modes, real-time streaming, and audio inter…
- [DeckhandIgnite/Davinci-Resolve-Studio-For-Windows](https://github.com/DeckhandIgnite/Davinci-Resolve-Studio-For-Windows) 50★ DaVinci Resolve Studio for Windows — professional video editing, color grading,…

</details>

<details><summary><b>blockchain</b>: 10 repos, 2.2k stars</summary>

- [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) 934★ Wallet UI simulation tool for BTC, ETH, SOL, XRP, and 200+ assets. Customize di…
- [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) 392★ Paste a wallet or a transaction hash and follow stolen crypto to the exchange t…
- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) 240★ Solana validator health in 60 seconds: score, leader duties, rewards, disk fore…
- [Signcluengine/onchain-money-trail-analyzer](https://github.com/Signcluengine/onchain-money-trail-analyzer) 167★ Follow stolen crypto hop by hop across Bitcoin, Ethereum, TRON, BNB Chain and S…
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) 164★ Non-custodial, encrypted file storage & sharing platform with Stellar payments …

</details>

<details><summary><b>trainer</b>: 6 repos, 1.4k stars</summary>

- [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) 382★ Phantom Blade Zero Trainer 2026: God Mode, One-Hit Kill, start All Weapons
- [richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit](https://github.com/richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit) 382★ PhantomBladeZero-Cheat: 54 toggleable runtime options and three presets for Pha…
- [wanjalaibra05-lgtm/phantom-blade-zero-assist](https://github.com/wanjalaibra05-lgtm/phantom-blade-zero-assist) 382★ Phantom Blade Zero: Symbol Cues, Wider Parry Windows, Full Arsenal
- [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) 130★ Whole-body motion tracking for the Unitree G1 in under a minute. BlinkMimic's w…
- [prabeakarve/microgpt](https://github.com/prabeakarve/microgpt) 51★ A from-scratch, dependency-free GPT implementation in pure NumPy: byte-level to…

</details>

<details><summary><b>flight</b>: 10 repos, 1.3k stars</summary>

- [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) 580★ Python tool for aircraft Doppler audio geolocation using historical ADS-B fligh…
- [mjshiggins/dopplertrack](https://github.com/mjshiggins/dopplertrack) 259★ Acoustic geolocation from the Doppler curves of propeller aircraft.
- [WeebLabs/Nightscape](https://github.com/WeebLabs/Nightscape) 96★ A cozy, endless flight above a moonlit sea of storm clouds, rendered in real ti…
- [nathanmarlor/flightscope-public](https://github.com/nathanmarlor/flightscope-public) 86★ Handheld Raspberry Pi flight tracker for a young plane-spotter: live map, plane…
- [globalmpc/vibe-preflight](https://github.com/globalmpc/vibe-preflight) 65★ Claude Code skill: pre-flight check for vibe-coded apps before launch — leaked …

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
