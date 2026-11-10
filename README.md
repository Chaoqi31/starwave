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
_recent 2,717 repos  2026-10-27..2026-11-10  stars>=40 · baseline 3,737 repos  2026-08-28..2026-10-26  stars>=150 · generated 2026-11-10 14:56 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **tweaks** | 10 | 10 | 5.7k | 4.5k/d | 1.3k/d | ▁▁▁▁▁▁▁▁▁▁▁▂▂█ | 2026-10-28 | [huamidev/GestaltX](https://github.com/huamidev/GestaltX) |
| 2 | **trainer** (+blade) | 6 | 6 | 1.7k | 432/d | 523/d | ▁▁▁▁▁▁▁▁▁▁▁█▄▅ | 2026-11-05 | [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) |
| 3 | **eglantine** (+lichii) | 6 | 6 | 1.3k | 219/d | 124/d | ▁▁▁▁▁▁▂▂▃▆█▅▃▂ | 2026-11-01 | [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) |
| 4 | **cs2** (+aegis, fee) | 7 | 7 | 984 | 209/d | 97/d | ▁▁▁▂█▁▂▁▁▁▁▁▃▂ | 2026-10-30 | [SoldierMultiply/footstep-equalizer](https://github.com/SoldierMultiply/footstep-equalizer) |
| 5 | **flight** (+ads-b) | 10 | 10 | 1.3k | 175/d | 90/d | ▁▁▁▁▁▁▃██▄▂▃▄▂ | 2026-10-29 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 6 | **portrait** (+pose-reference) | 8 | 8 | 1.1k | 147/d | 112/d | ▁▁▃▅▄▆█▅▃▄▆▆▇▄ | 2026-10-29 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 7 | **blockchain** | 8 | 8 | 1.0k | 142/d | 26/d | ▁▁▁▂▄▁▄▆█▇▂▁▂▂ | 2026-10-30 | [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) |
| 8 | **nintendo-switch-2** | 5 | 5 | 1.1k | 135/d | 162/d | ▁▁▁▃▂▂▄▆▄▃▄▅█▆ | 2026-10-30 | [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) |
| 9 | **stats** | 5 | 5 | 448 | 66/d | 34/d | ▁▁▁▁▁▁▁▄█▄▆▂▂▄ | 2026-10-30 | [Hubamongrescue/hearthstone-battlegrounds-tracker](https://github.com/Hubamongrescue/hearthstone-battlegrounds-tracker) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **windows-app** (+utility, software-engineering, configured, pre-configured, scripts, 17 more) | 120 | 120 | 50.4k | 13.4k/d | 16.7k/d | ▁▁▁▁▁▁▁▁▁▁▁█▄▆ | 2026-11-06 | [AbhramJohn/instagram-engagement-bot](https://github.com/AbhramJohn/instagram-engagement-bot) | near-duplicate, same-day, flat-stars |
| 2 | **activator** (+kms, activation, windows-10, office365, scala, 25 more) | 138 | 138 | 19.7k | 4.8k/d | 6.4k/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▁ | 2026-10-29 | [Hussaincodingmaster/bandicam-screen-recorder-desktop](https://github.com/Hussaincodingmaster/bandicam-screen-recorder-desktop) | near-duplicate, same-day, flat-stars |
| 3 | **rpocket** (+cheat, meteor, one-knob, items, playerbots, 41 more) | 218 | 217 | 11.6k | 2.6k/d | 2.9k/d | ▁▁▁▁▁▁▁▁▁▃▁▁▁█ | 2026-10-31 | [dankumarlab2090u1/minecraft-hack-menu-2026](https://github.com/dankumarlab2090u1/minecraft-hack-menu-2026) | flat-stars |
| 4 | **resp** (+autoclicker, ban, troubleshooting, clicker, macro, 8 more) | 123 | 121 | 6.3k | 1.4k/d | 1.6k/d | ▁▁▁▁▁▁▁▁▁▃▁▁▁█ | 2026-10-31 | [ViaBecrest/Eden-Switch-Emulator-resp](https://github.com/ViaBecrest/Eden-Switch-Emulator-resp) | flat-stars |
| 5 | **resocket** (+rates, optimizations, warzone, rivals) | 75 | 75 | 4.1k | 890/d | 1.0k/d | ▁▁▁▁▁▁▁▁▁▃▁▁▁█ | 2026-10-31 | [AstraLunarvenom33479/BloodStrike-region-limit-resocket](https://github.com/AstraLunarvenom33479/BloodStrike-region-limit-resocket) | same-day, flat-stars |
| 6 | **respocket** (+aax, cheats, aio, soft, yet, 2 more) | 56 | 56 | 2.8k | 829/d | 747/d | ▁▁▁▁▁▁▁▁▁▃▁▁▁█ | 2026-10-31 | [CometForDagger/all-the-mods-respocket-modpack-minecraft](https://github.com/CometForDagger/all-the-mods-respocket-modpack-minecraft) | flat-stars |
| 7 | **coregold** (+vcc, usdt, visa, mastercard, stripe) | 63 | 56 | 4.4k | 429/d | 251/d | ▁▂▃▄▂▅▁▄█▇▁▁▄▅ | 2026-10-28 | [reneefrank8161/CoreGold-ChatGPT-Pro-Cursor](https://github.com/reneefrank8161/CoreGold-ChatGPT-Pro-Cursor) | flat-stars |
| 8 | **gemeni** (+general-purpose, manus, purpose, typescript-sdk, solidjs, 14 more) | 27 | 25 | 1.4k | 397/d | 253/d | ▁▁▁▁▁▁▁▁▁▁▇█▁▁ | 2026-11-06 | [quyetcao/ai-manus](https://github.com/quyetcao/ai-manus) | near-duplicate, flat-stars |
| 9 | **ai-image-generation** (+gpt-image, apimart) | 14 | 2 | 1.8k | 298/d | 8/d | ▁▁▂▁▁▁▂▁▁█▂▁▁▁ | 2026-10-29 | [wquguru/shisei](https://github.com/wquguru/shisei) | same-day, few-owners |
| 10 | **currency** (+economy, exile, path-of-exile-2-trade, pathofexile2, poe, 25 more) | 8 | 8 | 385 | 102/d | 107/d | ▁▁▁▁▁▁▁▁▁▂▁▁▁█ | 2026-10-31 | [Hydravampiresilver/RESP-PathOfExile2-Trade-Helper-Price-Checker](https://github.com/Hydravampiresilver/RESP-PathOfExile2-Trade-Helper-Price-Checker) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>tweaks</b>: 10 repos, 5.7k stars</summary>

- [huamidev/GestaltX](https://github.com/huamidev/GestaltX) 4.2k★ An MobileGestalt editor for iOS 27.x, featuring region-code tweaks, device pres…
- [JaceThings/DiaTweaks](https://github.com/JaceThings/DiaTweaks) 581★ Unofficial tweaks for the Dia browser, kept in place across updates
- [shivsupratik/windows-optimizer](https://github.com/shivsupratik/windows-optimizer) 479★ Windows Optimizer: Advanced System Tweaks and Performance Enhancements
- [PoomSmart/ios-logos-tweak](https://github.com/PoomSmart/ios-logos-tweak) 105★ Agent skill for best practices for iOS jailbreak tweaks
- [PranavDupati/ninboy-hat-for-macos](https://github.com/PranavDupati/ninboy-hat-for-macos) 75★ Native compilation enhancements, crash fixes, keyboard/mouse controls, and perf…

</details>

<details><summary><b>trainer</b>: 6 repos, 1.7k stars</summary>

- [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) 479★ Phantom Blade Zero Trainer 2026: God Mode, One-Hit Kill, start All Weapons
- [richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit](https://github.com/richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit) 479★ PhantomBladeZero-Cheat: 54 toggleable runtime options and three presets for Pha…
- [wanjalaibra05-lgtm/phantom-blade-zero-assist](https://github.com/wanjalaibra05-lgtm/phantom-blade-zero-assist) 479★ Phantom Blade Zero: Symbol Cues, Wider Parry Windows, Full Arsenal
- [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) 115★ Whole-body motion tracking for the Unitree G1 in under a minute. BlinkMimic's w…
- [prabeakarve/microgpt](https://github.com/prabeakarve/microgpt) 51★ A from-scratch, dependency-free GPT implementation in pure NumPy: byte-level to…

</details>

<details><summary><b>eglantine</b>: 6 repos, 1.3k stars</summary>

- [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) 550★ Use-case guide to Nintendo Switch 2 emulator forks: builds, games, GPUs, Androi…
- [sylvieistaken/selevet-eglantine](https://github.com/sylvieistaken/selevet-eglantine) 259★ Selevet Eglantine: an unofficial Eglantine (Switch 2 emulator) build tuned for …
- [viejunerd/Eglantine-PS5-](https://github.com/viejunerd/Eglantine-PS5-) 167★ 
- [ZendNevs/Eglantine-ZendNevs](https://github.com/ZendNevs/Eglantine-ZendNevs) 112★ Better performance, Frame Generation FSR 3 and LSFG. DynamicFPS. 30FPS LOCK. On…
- [sikoGD/playDB-CNT](https://github.com/sikoGD/playDB-CNT) 110★ Play The Duskbloods Network Test on Eglantine/Lichii: a launcher with local loo…

</details>

<details><summary><b>cs2</b>: 7 repos, 984 stars</summary>

- [SoldierMultiply/footstep-equalizer](https://github.com/SoldierMultiply/footstep-equalizer) 159★ Footstep equalizer for FPS games: auto EQ for Valorant, CS2, Apex
- [Lavagroabide/aegis-spreadwatch](https://github.com/Lavagroabide/aegis-spreadwatch) 148★ Aegis SpreadWatch: keeps CS2 buy and sell opportunities legible — net profit, R…
- [oilcorporatebarn/aegis-skinfees](https://github.com/oilcorporatebarn/aegis-skinfees) 148★ Aegis SkinFees: console-grade workspace for CS2 fee math — venue models, FX con…
- [solderdatabraid29/aegis-vaultgrid](https://github.com/solderdatabraid29/aegis-vaultgrid) 134★ Aegis VaultGrid: pairs a CS2 inventory vault with a fee-aware order planner. Lo…
- [SheikhDynamo/aegis-crossmarket](https://github.com/SheikhDynamo/aegis-crossmarket) 133★ Aegis CrossMarket: cross-market desk for CS2 items — net-return math, currency …

</details>

<details><summary><b>flight</b>: 10 repos, 1.3k stars</summary>

- [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) 546★ Python tool for aircraft Doppler audio geolocation using historical ADS-B fligh…
- [mjshiggins/dopplertrack](https://github.com/mjshiggins/dopplertrack) 230★ Acoustic geolocation from the Doppler curves of propeller aircraft.
- [ianTPE/tetra-unfold](https://github.com/ianTPE/tetra-unfold) 84★ Seamless tetrahedral world map with a multi-stop flight trip planner in 9 langu…
- [nathanmarlor/flightscope-public](https://github.com/nathanmarlor/flightscope-public) 83★ Handheld Raspberry Pi flight tracker for a young plane-spotter: live map, plane…
- [WeebLabs/Nightscape](https://github.com/WeebLabs/Nightscape) 75★ A live, calming, realistic night flight over a moonlit sea of clouds, rendered …

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
