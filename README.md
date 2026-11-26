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
_recent 3,687 repos  2026-11-12..2026-11-26  stars>=40 · baseline 4,270 repos  2026-09-13..2026-11-11  stars>=150 · generated 2026-11-26 16:57 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **victory** | 11 | 11 | 20.8k | 10.2k/d | 6.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▆█▅ | 2026-11-23 | [Marvisak/VIctory](https://github.com/Marvisak/VIctory) |
| 2 | **trainer** (+blade, fling, phantom-blade-zero, hit) | 26 | 26 | 5.6k | 2.0k/d | 458/d | ▁▁▁▁▁█▁▁▁▄▂▂▁▄ | 2026-11-15 | [alesha-pro/llm.asm](https://github.com/alesha-pro/llm.asm) |
| 3 | **gdk** (+xbox-series) | 5 | 5 | 8.9k | 1.7k/d | 2.7k/d | ▁▁▁▁▁▁▁▁▁▁▁█▆▂ | 2026-11-20 | [xcl-dev/xcl](https://github.com/xcl-dev/xcl) |
| 4 | **clips** (+video-ai, video-api, video-game, video-games, highlight) | 22 | 22 | 5.6k | 1.6k/d | 874/d | ▁▁▁▁▁▁▁▄▅▄▃▂█▆ | 2026-11-12 | [iamajmeena/neonclipping](https://github.com/iamajmeena/neonclipping) |
| 5 | **riemann** (+alp, hypothesis) | 9 | 9 | 3.4k | 1.3k/d | 510/d | ▁▁▁▁▁▁▁▁▆▄▄▃▃█ | 2026-11-20 | [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis) |
| 6 | **video-converter** | 6 | 6 | 3.6k | 1.1k/d | 1.1k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-15 | [zero5122/offline-file-converter-windows](https://github.com/zero5122/offline-file-converter-windows) |
| 7 | **shape** | 18 | 18 | 2.6k | 903/d | 349/d | ▁▁▁▁▁█▁▂▁▁▁▂▂▄ | 2026-11-15 | [HoangMinh-sikula/rob-run-mod-trainer](https://github.com/HoangMinh-sikula/rob-run-mod-trainer) |
| 8 | **macro** (+recoil, keyless-script, luau-script) | 19 | 19 | 1.6k | 607/d | 292/d | ▁▁▁▁▁█▁▂▁▁▂▆▅▃ | 2026-11-13 | [alkabdohagag/fxdeck-fivem-command-deck](https://github.com/alkabdohagag/fxdeck-fivem-command-deck) |
| 9 | **adobe** | 17 | 17 | 2.6k | 592/d | 124/d | ▁▁▁▁▁▄▁▂▁█▂▂▂▂ | 2026-11-15 | [purvprajapati2504-design/premiere-pro-video-editor](https://github.com/purvprajapati2504-design/premiere-pro-video-editor) |
| 10 | **agy** (+antigravity-plugin) | 12 | 11 | 4.5k | 574/d | 782/d | ▁▂▁▁▂▁▂▂▃▃▅▅██ | 2026-11-13 | [INK-Q/agy-fast](https://github.com/INK-Q/agy-fast) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **software-engineering** (+windows-app, utilities, letting, windows-10, utility, 160 more) | 506 | 506 | 122.9k | 44.8k/d | 20.8k/d | ▁▁▁▁▁▁▁▁▁█▂▁▇▅ | 2026-11-13 | [Umbra9179/clipboard-history-manager-windows](https://github.com/Umbra9179/clipboard-history-manager-windows) | near-duplicate, same-day, flat-stars |
| 2 | **prebuilt** (+windows-tool, rotation, portable, x64, utility, 60 more) | 324 | 272 | 18.1k | 9.0k/d | 6.0k/d | ▁▁▁▁▁▁▁▁▁▁▁▃█▆ | 2026-11-23 | [SodovaFo7/claude-code-unlimited](https://github.com/SodovaFo7/claude-code-unlimited) | near-duplicate, same-day, flat-stars |
| 3 | **gemeni** (+manus, typescript-sdk, ai--manus, function-calling, general-purpose, 39 more) | 366 | 308 | 64.5k | 5.1k/d | 1/d | ▁▇█▃▁▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 4 | **latest** (+activated, premium, izotope-ozone, genius, lite, 1 more) | 57 | 57 | 11.3k | 5.1k/d | 2.7k/d | ▁▁▁▁▁▃▁▁▁▁▁▁█▇ | 2026-11-14 | [34306/ForceDuoApp](https://github.com/34306/ForceDuoApp) | same-day, flat-stars |
| 5 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 35 more) | 248 | 221 | 35.2k | 2.8k/d | 1/d | ▁▅█▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, same-day, flat-stars |
| 6 | **desktop-ai** (+desktop-apps, serum, desktop-client, hyper, desktop-tools, 16 more) | 16 | 16 | 3.3k | 1.7k/d | 985/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▇ | 2026-11-17 | [jyotiazev3do/duolingo-desktop](https://github.com/jyotiazev3do/duolingo-desktop) | same-day |
| 7 | **x64** (+autodesk-3ds-max-app, autodesk-3d-design, autodesk-automation, autodesk-desktop, autodesk-maya-pc, 11 more) | 23 | 22 | 3.3k | 1.5k/d | 809/d | ▁▁▂▁▁▁▁▁▁▁▂▂█▅ | 2026-11-14 | [Freminet/ScarlettX](https://github.com/Freminet/ScarlettX) | flat-stars |
| 8 | **directx-11** (+multithreading, performance-tuning, directx-12, configuration, cmake, 8 more) | 35 | 33 | 2.7k | 1.4k/d | 886/d | ▁▁▁▁▁▁▁▁▁▁▁█▇▃ | 2026-11-23 | [isadhanjana-cpu/gta-5-enhanced-mod-menu](https://github.com/isadhanjana-cpu/gta-5-enhanced-mod-menu) | near-duplicate, flat-stars |
| 9 | **hack** (+robrun-mod) | 20 | 20 | 3.1k | 1.3k/d | 693/d | ▁▁▁▁▁▆▁▁▁▁▁▂▅█ | 2026-11-15 | [gigarectorpulse/Universal-Gaming-Hub](https://github.com/gigarectorpulse/Universal-Gaming-Hub) | flat-stars |
| 10 | **coregold** (+vcc, usdt, applepay, finops, ustd, 18 more) | 91 | 76 | 7.7k | 1.1k/d | 1.5k/d | ▁▂▁▁▂▂▂▄▄▁▃█▆█ | 2026-11-12 | [TabethaBult399205/virtual-card-usdt-indie-hacker-ai-mvp-saas-applepay](https://github.com/TabethaBult399205/virtual-card-usdt-indie-hacker-ai-mvp-saas-applepay) | near-duplicate, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>victory</b>: 11 repos, 20.8k stars</summary>

- [Marvisak/VIctory](https://github.com/Marvisak/VIctory) 13.1k★ An attempt at running GTA VI on PC
- [fxceless/victory-fork](https://github.com/fxceless/victory-fork) 3.2k★ Work-in-progress fork of VIctory: getting an Xbox Series title to render and ru…
- [Belobug/VIctory-Belobug-AMD](https://github.com/Belobug/VIctory-Belobug-AMD) 1.8k★ 
- [avatarmanz/VIctory-7900XTX](https://github.com/avatarmanz/VIctory-7900XTX) 1.7k★ Goal: an Xbox Series title (your own dump) at a stable 30+ fps on PC without ra…
- [ZigZagBoi1/ScarlettPort](https://github.com/ZigZagBoi1/ScarlettPort) 450★ Native PC port layer for an Xbox Series X\|S title: the game's x64 code runs on …

</details>

<details><summary><b>trainer</b>: 26 repos, 5.6k stars</summary>

- [alesha-pro/llm.asm](https://github.com/alesha-pro/llm.asm) 1.2k★ Qwen3-0.6B inference (12 KB), bare-metal bootable OS (22 KB), and from-scratch …
- [tweak-for-me/impulse](https://github.com/tweak-for-me/impulse) 515★ Lightweight alternative Windows client for game trainers: hotkeys, overlay and …
- [vinujak/phantom-blade-zero-modifier](https://github.com/vinujak/phantom-blade-zero-modifier) 339★ Phantom Blade Zero Modifier: God Mode, Infinite Health, One-Hit Kill Trainer fo…
- [aagiiretry/phantom-blade-zero-enhancer](https://github.com/aagiiretry/phantom-blade-zero-enhancer) 335★ Blade Zero Enhancer: Runtime Utility for Blade Zero
- [sukhwinder776/phantom-blade-zero-trainer](https://github.com/sukhwinder776/phantom-blade-zero-trainer) 335★ Phantom Blade Zero Trainer: Symbol Cues, Wider Parry Windows, Full Arsenal Star…

</details>

<details><summary><b>gdk</b>: 5 repos, 8.9k stars</summary>

- [xcl-dev/xcl](https://github.com/xcl-dev/xcl) 8.5k★ Xbox Series compatibility layer for Windows - runs console game code natively, …
- [PastiiJay/klbf-lab](https://github.com/PastiiJay/klbf-lab) 156★ Xbox Series X\|S (Scarlett) GDK compatibility layer for Windows: runs the Xbox S…
- [isaac-btw/AmericasLauncher](https://github.com/isaac-btw/AmericasLauncher) 78★ A modern Windows launcher that automatically sets up, updates, builds, and laun…
- [zortos293/XSEmu](https://github.com/zortos293/XSEmu) 60★ Experimental Xbox Series X\|S (GDK) title runner for Windows, built on the XCL t…
- [jadeowaowa/scarlett-layer](https://github.com/jadeowaowa/scarlett-layer) 46★ Experimental Windows x64 / D3D12 compatibility layer for unpacked, unencrypted …

</details>

<details><summary><b>clips</b>: 22 repos, 5.6k stars</summary>

- [iamajmeena/neonclipping](https://github.com/iamajmeena/neonclipping) 2.7k★ Paste a link, get captioned 9:16 clips in ~2 min. Free, local, open-source clip…
- [D3bug-patch91/davinci-resolve-speed-editor](https://github.com/D3bug-patch91/davinci-resolve-speed-editor) 226★ Davinci Resolve Speed Editor for Windows 10/11. Edits timelines faster with a d…
- [Gerald-wallace25/gopro-fusion-studio](https://github.com/Gerald-wallace25/gopro-fusion-studio) 226★ Gopro Fusion Studio for Windows 10/11. Stitches dual-lens 360 footage into flat…
- [DivyaPham/intel-arc-control](https://github.com/DivyaPham/intel-arc-control) 221★ Intel Arc Control for Windows 10/11. Monitors GPU performance, installs driver …
- [Mario-smith54/kolor-autopano-video](https://github.com/Mario-smith54/kolor-autopano-video) 219★ Kolor Autopano Video for Windows 10/11. Stitches footage from multiple action c…

</details>

<details><summary><b>riemann</b>: 9 repos, 3.4k stars</summary>

- [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis) 1.4k★ Lean formalization of the Riemann Hypothesis (Alpöge, 2026-11-20) being cleaned…
- [lsernau/grh-lean](https://github.com/lsernau/grh-lean) 814★ A short Lean 4 proof of the Generalized Riemann Hypothesis
- [CocoSgt/riemann-hypothesis-lean](https://github.com/CocoSgt/riemann-hypothesis-lean) 581★ Mirror of Levent Alpöge's Lean proof of the Riemann Hypothesis (with Claude). A…
- [mccorvie/riemann-masullo](https://github.com/mccorvie/riemann-masullo) 175★ Lean 4 formalization of A. M. Masullo, The Music of the Primes
- [jimjamzola/RH-Alpoge-Reconstruction](https://github.com/jimjamzola/RH-Alpoge-Reconstruction) 171★ An attempt to make the proof of the Riemann hypothesis human readable

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
