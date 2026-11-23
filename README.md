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
_recent 3,080 repos  2026-11-09..2026-11-23  stars>=40 · baseline 4,204 repos  2026-09-10..2026-11-08  stars>=150 · generated 2026-11-23 18:15 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **riemann** (+alp) | 6 | 6 | 1.7k | 536/d | 475/d | ▂▁▁▁▁▁▁▁▁▁▁█▅▄ | 2026-11-09 | [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis) |
| 2 | **force** | 5 | 5 | 1.1k | 272/d | 152/d | ▁▁▁▁▁▁▃▅▅▂▃▂█▂ | 2026-11-14 | [34306/ForceDuoApp](https://github.com/34306/ForceDuoApp) |
| 3 | **fable** | 8 | 8 | 1.9k | 166/d | 57/d | ▁▄█▅▃▃▃▄▇▃▃▂▂▂ | 2026-11-09 | [fengyiqicoder/awesome-fable-5.2](https://github.com/fengyiqicoder/awesome-fable-5.2) |
| 4 | **streamlined** | 7 | 7 | 953 | 149/d | 54/d | ▁▁▁▁▁▁▁▁█▁▄▃▁▁ | 2026-11-15 | [Cllayver/fl-studio-installer](https://github.com/Cllayver/fl-studio-installer) |
| 5 | **changer** | 6 | 6 | 1.2k | 125/d | 102/d | ▁▁▁▁▁▁▁▁█▁▁▁▃▂ | 2026-11-10 | [D1ngtalk/iap2loc](https://github.com/D1ngtalk/iap2loc) |
| 6 | **address** | 6 | 6 | 694 | 89/d | 12/d | ▁▁▁▁▆█▁█▇▁▃▁▁▂ | 2026-11-12 | [zacharyrogue/Crypto-Whale-Tracker](https://github.com/zacharyrogue/Crypto-Whale-Tracker) |
| 7 | **hero** | 6 | 6 | 753 | 87/d | 2/d | ▂▁▁▁▁▁▁▁█▁▁▁▁▁ | 2026-11-09 | [Veeru7411/dota-2-fps-booster](https://github.com/Veeru7411/dota-2-fps-booster) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **software-engineering** (+windows-app, utility, scripts, setup, crack, 7 more) | 155 | 155 | 50.4k | 24.1k/d | 15.9k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▂ | 2026-11-10 | [icitycode/capcut-for-windows](https://github.com/icitycode/capcut-for-windows) | near-duplicate, same-day, flat-stars |
| 2 | **hot-reloadable** (+low-overhead, prebuilt, reloadable, configuration, overhead, 64 more) | 108 | 86 | 18.2k | 18.2k/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-22 | [TalhaKang/resident-evil-4-cheat-trainer](https://github.com/TalhaKang/resident-evil-4-cheat-trainer) | near-duplicate, same-day, flat-stars |
| 3 | **ai--manus** (+gemeni, manus, typescript-sdk, general-purpose, solidjs, 22 more) | 366 | 300 | 59.4k | 6.0k/d | 0/d | ▁▁▁▁██▁▁▁▁▁▁▁▁ | 2026-11-13 | [topapothecarycanal/ai--manus2.0](https://github.com/topapothecarycanal/ai--manus2.0) | near-duplicate, same-day, flat-stars |
| 4 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 37 more) | 267 | 239 | 36.1k | 3.8k/d | 0/d | ▁▁▁▁▅█▁▁▁▁▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, same-day, flat-stars |
| 5 | **trial-version** (+trial, windows-software, latest, shape, download, 38 more) | 268 | 268 | 27.9k | 2.3k/d | 129/d | ▁▁█▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-10 | [vivitimiguel-dotcom/protonvpn-business-client](https://github.com/vivitimiguel-dotcom/protonvpn-business-client) | same-day, flat-stars |
| 6 | **aichecker** (+config-checker, gemeni-checker, gemini-config-checker, lim, lim-seo, 10 more) | 26 | 26 | 10.0k | 1.3k/d | 0/d | ▁▁▁▁▁▁█▁▁▁▁▁▁▁ | 2026-11-15 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 7 | **scripting** (+blender-mcp, blender-ai, blender-automation, blender-plugin, blender-scripting, 8 more) | 10 | 10 | 6.4k | 1.0k/d | 607/d | ▁▁▁▃▆█▄▁▃▁▆▆▅▁ | 2026-11-12 | [bookwjitchieni1986/blender-ai-mcp-addon](https://github.com/bookwjitchieni1986/blender-ai-mcp-addon) | same-day |
| 8 | **trainer** (+blade, fling, hit) | 23 | 23 | 4.3k | 985/d | 439/d | ▁▁▁▁▁▁▁▁█▁▁▁▄▁ | 2026-11-15 | [vinujak/phantom-blade-zero-modifier](https://github.com/vinujak/phantom-blade-zero-modifier) | same-day, flat-stars |
| 9 | **community-driven** (+community) | 28 | 28 | 4.4k | 671/d | 118/d | ▁▁▁▁▁▁▁▁█▁▁▁▂▁ | 2026-11-11 | [Baracos99/discord-quest-helper](https://github.com/Baracos99/discord-quest-helper) | same-day, flat-stars |
| 10 | **coregold** (+vcc, usdt, applepay, finops, architectural, 9 more) | 81 | 53 | 5.8k | 637/d | 438/d | ▁▂▃▂▃▁▁▄▃▄█▇▁▅ | 2026-11-09 | [borchertnad-creator/runpod-cloud-gpu-spend-firewall-vcc](https://github.com/borchertnad-creator/runpod-cloud-gpu-spend-firewall-vcc) | near-duplicate, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>riemann</b>: 6 repos, 1.7k stars</summary>

- [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis) 808★ Independent Comparator setup for the Lean formalization of the Riemann Hypothes…
- [CocoSgt/riemann-hypothesis-lean](https://github.com/CocoSgt/riemann-hypothesis-lean) 543★ Mirror of Levent Alpöge's Lean proof of the Riemann Hypothesis (with Claude). A…
- [mccorvie/riemann-masullo](https://github.com/mccorvie/riemann-masullo) 106★ Lean 4 formalization of A. M. Masullo, The Music of the Primes
- [professorsolderin/project-lighthouse](https://github.com/professorsolderin/project-lighthouse) 100★ Project Lighthouse — shining AI on the pages history never read: transcriptions…
- [TomasOrtega/RH](https://github.com/TomasOrtega/RH) 77★ Lean files extracted from the archive accompanying Levent Alpöge’s Riemann Hypo…

</details>

<details><summary><b>force</b>: 5 repos, 1.1k stars</summary>

- [34306/ForceDuoApp](https://github.com/34306/ForceDuoApp) 376★ Force iPhone Duo's application use latest SDK to adaptive and supports iPhone D…
- [aathreynair22-bit/wifi-password-tester](https://github.com/aathreynair22-bit/wifi-password-tester) 337★ WiFi Credential Strength Auditor: PowerShell Brute-Force Tester for Wireless Ne…
- [SUBIR33/sbft-bip39-brute-force-framework](https://github.com/SUBIR33/sbft-bip39-brute-force-framework) 153★ SBFT BIP39 Brute-Force Framework: Concurrent Multi-Provider Balance Checking wi…
- [yunusozgur944-source/delta-force-verina](https://github.com/yunusozgur944-source/delta-force-verina) 139★ Delta Force Verina: field intel and combat readouts for sharper tactical play.
- [smolderyguest/Super3DXPlus](https://github.com/smolderyguest/Super3DXPlus) 84★ An accessibility-focused native port of Wangan Midnight Maximum Tune 3DX+ for P…

</details>

<details><summary><b>fable</b>: 8 repos, 1.9k stars</summary>

- [fengyiqicoder/awesome-fable-5.2](https://github.com/fengyiqicoder/awesome-fable-5.2) 535★ Games, 3D worlds and web pages built with Claude Fable 5.2 that you can actuall…
- [realcodebear/saltline-fable-5.2](https://github.com/realcodebear/saltline-fable-5.2) 533★ 
- [viktorkav/uno-com-escada](https://github.com/viktorkav/uno-com-escada) 171★ Fiat Uno Mille EP com escada no teto, para pilotar no navegador. Três versões d…
- [MiaAI-Lab/Claude-Fable-5.2-HTML-Files](https://github.com/MiaAI-Lab/Claude-Fable-5.2-HTML-Files) 140★ Claude Fable 5.2 HTML Files — 76 visual studies with screenshots and original p…
- [andrisgauracs/bevel-os](https://github.com/andrisgauracs/bevel-os) 131★ A small Windows-95-style desktop OS for a single ESP32-S3 on a VGA monitor, wri…

</details>

<details><summary><b>streamlined</b>: 7 repos, 953 stars</summary>

- [Cllayver/fl-studio-installer](https://github.com/Cllayver/fl-studio-installer) 154★ FL Studio Installer: Streamlined Setup and Enhanced Performance
- [alkabdohagag/fxdeck-fivem-command-deck](https://github.com/alkabdohagag/fxdeck-fivem-command-deck) 154★ FxDeck FiveM Command Deck - Streamlined In-Game Command Interface for Modders
- [tahsintasnuva/voice-notes-pipeline](https://github.com/tahsintasnuva/voice-notes-pipeline) 153★ Voice Notes Pipeline: Automation Script for Streamlined Note Processing
- [Bhavya-ragala95/monster-hunter-wilds-varvana](https://github.com/Bhavya-ragala95/monster-hunter-wilds-varvana) 139★ Streamlined monster data and field intel so you hunt smarter in Monster Hunter …
- [kenzz-devv/open-webui-talora-ai-workspace](https://github.com/kenzz-devv/open-webui-talora-ai-workspace) 139★ Streamlined workspace for organizing and running AI workflows in one place.

</details>

<details><summary><b>changer</b>: 6 repos, 1.2k stars</summary>

- [D1ngtalk/iap2loc](https://github.com/D1ngtalk/iap2loc) 460★ A cross-platform iOS location changer client. 跨平台 iOS 虚拟定位客户端，通过 iAP2 协议向 iOS 设…
- [Tchikov23/cs2-cosmetic-swapper](https://github.com/Tchikov23/cs2-cosmetic-swapper) 153★ CS2 Cosmetic Swapper - Client-Side Skin Changer for Windows 10/11
- [Yunnix001/fortnite-skin-changer](https://github.com/Yunnix001/fortnite-skin-changer) 153★ Fortnite Skin Changer: Preview and Customize Rare Skins Locally
- [diom1995/skeet-cs2-cheat](https://github.com/diom1995/skeet-cs2-cheat) 153★ Skeet Cheat: Precision Internal Framework for Competitive Play
- [moamenrdakje/xeno-protocol-core](https://github.com/moamenrdakje/xeno-protocol-core) 153★ Xeno Protocol Core - Community Discord and Telegram Bot with Rich Features

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
