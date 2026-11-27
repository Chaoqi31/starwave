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
_recent 3,331 repos  2026-11-13..2026-11-27  stars>=40 · baseline 4,328 repos  2026-09-14..2026-11-12  stars>=150 · generated 2026-11-27 16:42 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **victory** (+dxil, shader-recompiler) | 25 | 23 | 27.9k | 10.0k/d | 6.4k/d | ▁▁▁▁▁▁▁▁▁▁▆█▅▅ | 2026-11-21 | [Marvisak/VIctory](https://github.com/Marvisak/VIctory) |
| 2 | **gdk** (+xbox-series, xcl) | 5 | 5 | 10.0k | 1.6k/d | 1.6k/d | ▁▁▁▁▁▁▁▁▁▁█▆▂▃ | 2026-11-20 | [xcl-dev/xcl](https://github.com/xcl-dev/xcl) |
| 3 | **riemann** (+alp, hypothesis) | 10 | 10 | 4.0k | 1.0k/d | 618/d | ▁▁▁▁▁▁▁▆▄▄▃▃█▆ | 2026-11-20 | [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis) |
| 4 | **prebuilt** (+portable, windows-tool, x64, abuse, dota, 4 more) | 38 | 38 | 2.5k | 996/d | 783/d | ▁▁▁▁▁▁▁▁▁▁▁▄█▂ | 2026-11-23 | [Locorreia1992/native-instruments-reaktor-6](https://github.com/Locorreia1992/native-instruments-reaktor-6) |
| 5 | **shape** (+modder, save-editor) | 23 | 23 | 3.5k | 950/d | 536/d | ▁▁▁▁█▁▂▁▁▁▁▂▄▅ | 2026-11-15 | [avciomer1155/izotope-tonal-balance-control](https://github.com/avciomer1155/izotope-tonal-balance-control) |
| 6 | **video-converter** | 6 | 6 | 2.7k | 725/d | 812/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▂ | 2026-11-15 | [kai415-debug/ffmpeg-video-audio-converter](https://github.com/kai415-debug/ffmpeg-video-audio-converter) |
| 7 | **agy** (+antigravity-plugin) | 13 | 12 | 5.5k | 615/d | 954/d | ▂▁▁▂▁▂▂▃▃▅▄▇██ | 2026-11-13 | [INK-Q/agy-fast](https://github.com/INK-Q/agy-fast) |
| 8 | **mastering** | 8 | 8 | 2.0k | 464/d | 303/d | ▁▁▁▁█▁▁▁▅▁▁▅▄▅ | 2026-11-15 | [Msen4/easeus-partition-master](https://github.com/Msen4/easeus-partition-master) |
| 9 | **adobe** | 10 | 10 | 2.2k | 455/d | 203/d | ▁▁▁▁▄▁▂▁█▂▁▂▂▄ | 2026-11-15 | [Ifeanyimorozov/substance-3d-stager](https://github.com/Ifeanyimorozov/substance-3d-stager) |
| 10 | **architectural** | 7 | 7 | 1.6k | 451/d | 353/d | ▁▁▁▁▄▁▂▁▂▁▁▆▅█ | 2026-11-15 | [james-plus-96/octane-render](https://github.com/james-plus-96/octane-render) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **software-engineering** (+windows-app, utilities, letting, windows-10, utility, 195 more) | 549 | 549 | 180.6k | 50.7k/d | 34.8k/d | ▁▁▁▁▂▁▁▁█▂▁▇▆▇ | 2026-11-13 | [zephyr4123/snug](https://github.com/zephyr4123/snug) | near-duplicate, same-day, flat-stars |
| 2 | **prebuilt-clones** (+windows-tool, rotation, portable, x64, utility, 45 more) | 283 | 241 | 16.2k | 5.4k/d | 4.6k/d | ▁▁▁▁▁▁▁▁▁▁▃█▅▁ | 2026-11-23 | [SodovaFo7/claude-code-unlimited](https://github.com/SodovaFo7/claude-code-unlimited) | near-duplicate, same-day, flat-stars |
| 3 | **gemeni** (+manus, typescript-sdk, ai--manus, function-calling, general-purpose, 39 more) | 318 | 265 | 59.9k | 4.4k/d | 1/d | ██▄▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 4 | **activated** (+latest) | 23 | 23 | 6.5k | 2.1k/d | 1.6k/d | ▂▂▁▁▂▁▁▁▁▁▁█▇█ | 2026-11-14 | [ByteNetQuiet2/basecamp](https://github.com/ByteNetQuiet2/basecamp) | same-day, flat-stars |
| 5 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 26 more) | 173 | 172 | 29.0k | 2.1k/d | 1/d | ▆█▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, same-day, flat-stars |
| 6 | **desktop-ai** (+desktop-apps, serum, desktop-client, desktop-files, desktop-hyper, 17 more) | 14 | 14 | 5.0k | 1.7k/d | 1.4k/d | ▁▁▁▁▁▁▁▁▁▁▁█▇█ | 2026-11-24 | [hudaflo8391/tradingview-desktop](https://github.com/hudaflo8391/tradingview-desktop) | same-day |
| 7 | **clips** (+video-games, video-ai, video-api, video-game) | 16 | 16 | 6.5k | 1.5k/d | 1.1k/d | ▁▁▁▁▁▁▅▅▄▃▂█▆▇ | 2026-11-17 | [iamajmeena/neonclipping](https://github.com/iamajmeena/neonclipping) | same-day |
| 8 | **directx-11** (+multithreading, performance-tuning, directx-12, cmake, win32-api, 8 more) | 24 | 24 | 1.7k | 1.3k/d | 251/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-25 | [ahmaddyeager-coder/fisch-script-macro-defaron](https://github.com/ahmaddyeager-coder/fisch-script-macro-defaron) | same-day |
| 9 | **coregold** (+vcc, usdt, applepay, ustd, avs, 16 more) | 94 | 84 | 8.3k | 1.2k/d | 1.3k/d | ▂▁▁▂▂▂▃▃▁▃▇▆█▅ | 2026-11-13 | [TabethaBult399205/virtual-card-usdt-indie-hacker-ai-mvp-saas-applepay](https://github.com/TabethaBult399205/virtual-card-usdt-indie-hacker-ai-mvp-saas-applepay) | near-duplicate, flat-stars |
| 10 | **hack** (+wardogs) | 26 | 26 | 4.3k | 1.1k/d | 525/d | ▁▁▁▁█▁▁▁▁▁▁▂▂▃ | 2026-11-15 | [Glebbennett597/image-line-harmor](https://github.com/Glebbennett597/image-line-harmor) | flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>victory</b>: 25 repos, 27.9k stars</summary>

- [Marvisak/VIctory](https://github.com/Marvisak/VIctory) 13.7k★ An attempt at running GTA VI on PC
- [Belobug/VIctory-Belobug-AMD](https://github.com/Belobug/VIctory-Belobug-AMD) 4.1k★ 
- [fxceless/victory-fork](https://github.com/fxceless/victory-fork) 3.3k★ Work-in-progress fork of VIctory: getting an Xbox Series title to render and ru…
- [avatarmanz/VIctory-7900XTX](https://github.com/avatarmanz/VIctory-7900XTX) 1.9k★ Goal: an Xbox Series title (your own dump) on PC as the Series X version at 4K …
- [trustno1-coder/VIctory-NVIDIA](https://github.com/trustno1-coder/VIctory-NVIDIA) 1.1k★ VIctory (Xbox Series compatibility layer) tuned for NVIDIA RTX cards: Series X …

</details>

<details><summary><b>gdk</b>: 5 repos, 10.0k stars</summary>

- [xcl-dev/xcl](https://github.com/xcl-dev/xcl) 8.7k★ Xbox Series compatibility layer for Windows - runs console game code natively, …
- [zortos293/XSEmu](https://github.com/zortos293/XSEmu) 859★ Experimental Xbox Series X\|S (GDK) title runner for Windows, built on the XCL t…
- [isaac-btw/AmericasLauncher](https://github.com/isaac-btw/AmericasLauncher) 185★ A modern Windows launcher that automatically sets up, updates, builds, and laun…
- [PastiiJay/klbf-lab](https://github.com/PastiiJay/klbf-lab) 177★ Xbox Series X\|S (Scarlett) GDK compatibility layer for Windows: runs the Xbox S…
- [jadeowaowa/scarlett-layer](https://github.com/jadeowaowa/scarlett-layer) 46★ Experimental Windows x64 / D3D12 compatibility layer for unpacked, unencrypted …

</details>

<details><summary><b>riemann</b>: 10 repos, 4.0k stars</summary>

- [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis) 1.5k★ Lean formalization of the Riemann Hypothesis (Alpöge, 2026-11-20) being cleaned…
- [lsernau/grh-lean](https://github.com/lsernau/grh-lean) 1.0k★ A short Lean 4 proof of the Generalized Riemann Hypothesis
- [CocoSgt/riemann-hypothesis-lean](https://github.com/CocoSgt/riemann-hypothesis-lean) 589★ Mirror of Levent Alpöge's Lean proof of the Riemann Hypothesis (with Claude). A…
- [yuiyuiui/Natural-Language-Proof-Generalized-Riemann-Hypothesis](https://github.com/yuiyuiui/Natural-Language-Proof-Generalized-Riemann-Hypothesis) 252★ 
- [jimjamzola/RH-Alpoge-Reconstruction](https://github.com/jimjamzola/RH-Alpoge-Reconstruction) 196★ An attempt to make the proof of the Riemann hypothesis human readable

</details>

<details><summary><b>prebuilt</b>: 38 repos, 2.5k stars</summary>

- [Locorreia1992/native-instruments-reaktor-6](https://github.com/Locorreia1992/native-instruments-reaktor-6) 360★ Native Instruments Reaktor 6 for Windows 10/11. Builds custom synths, samplers …
- [DugihaJede29/rob-run-heist-timer](https://github.com/DugihaJede29/rob-run-heist-timer) 66★ Heist timers for ROB RUN — never miss a payout window.
- [MoqisaGolo94/youtube-mp3-converter](https://github.com/MoqisaGolo94/youtube-mp3-converter) 66★ YouTube to MP3 with covers and tags — desktop, instant.
- [MoxaheZil50/nitro-code-tool](https://github.com/MoxaheZil50/nitro-code-tool) 66★ Nitro gift code generator with a concurrent checker. Fast, silent, proxy-ready.…
- [PabloZhu42/pet-sim-helper](https://github.com/PabloZhu42/pet-sim-helper) 66★ Pet Simulator 99 farm kit: coins, auto-hatch, rare tracking. \| pet-sim-99 roblo…

</details>

<details><summary><b>shape</b>: 23 repos, 3.5k stars</summary>

- [avciomer1155/izotope-tonal-balance-control](https://github.com/avciomer1155/izotope-tonal-balance-control) 359★ Izotope Tonal Balance Control for Windows 10/11. Analyzes your mix against genr…
- [Mgupta495/fabfilter-pro-r](https://github.com/Mgupta495/fabfilter-pro-r) 358★ Fabfilter Pro R for Windows 10/11. Sculpts reverb spaces on vocals, drums and f…
- [HoangMinh-sikula/rob-run-mod-trainer](https://github.com/HoangMinh-sikula/rob-run-mod-trainer) 335★ Rob Run Mod Trainer: Shape Your Run, Bend the Rules, Build the Mod
- [A188-ux/warframe-solvian](https://github.com/A188-ux/warframe-solvian) 193★ Shape the Origin System your way - a modder's toolkit for Warframe.
- [Rijalox/guild-wars-2-varvalia](https://github.com/Rijalox/guild-wars-2-varvalia) 192★ Shape Tyria your way — a modder's toolkit for Guild Wars 2 Varvalia.

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
