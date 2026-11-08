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
_recent 2,423 repos  2026-10-25..2026-11-08  stars>=40 · baseline 3,670 repos  2026-08-26..2026-10-24  stars>=150 · generated 2026-11-08 13:28 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **lag** | 6 | 6 | 1.5k | 707/d | 218/d | ▁▁▁▁▁▂▁▁▁▅█▁█▅ | 2026-10-30 | [PulverizeLink/roblox-performance-tool](https://github.com/PulverizeLink/roblox-performance-tool) |
| 2 | **totk** | 5 | 5 | 7.1k | 704/d | 322/d | ▂▂▁▁▆█▇▇▇▄▄▃▃▃ | 2026-10-25 | [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) |
| 3 | **trainer** (+blade, phantom) | 7 | 7 | 1.1k | 586/d | 363/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-03 | [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) |
| 4 | **regularly** | 6 | 6 | 1.4k | 290/d | 133/d | ▁▁▃▁▁▁▁▅▁▁█▁▁▆ | 2026-10-27 | [fjordostrichhose/Steam-Points-Tools-2026](https://github.com/fjordostrichhose/Steam-Points-Tools-2026) |
| 5 | **eglantine** | 5 | 5 | 1.1k | 284/d | 281/d | ▁▁▁▁▁▁▁▁▂▂▃▆█▄ | 2026-11-01 | [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) |
| 6 | **blockchain** (+bnb) | 9 | 9 | 1.2k | 280/d | 179/d | ▁▁▁▁▁▁▄▁▄▅▆█▄▂ | 2026-10-25 | [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) |
| 7 | **forensics** | 5 | 5 | 977 | 255/d | 159/d | ▁▁▁▁▁▃▂▁▂▇▆▄█▇ | 2026-10-25 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 8 | **nintendo-switch-2** | 6 | 6 | 1.2k | 201/d | 134/d | ▁▁▁▁▁▂▁▁▇█▆▅▄▅ | 2026-10-30 | [xFractals/pokopia-native](https://github.com/xFractals/pokopia-native) |
| 9 | **portrait** (+pose-reference) | 9 | 9 | 982 | 179/d | 96/d | ▁▂▂▁▃▅▄▆█▅▃▄▆▆ | 2026-10-26 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 10 | **living** | 7 | 7 | 1.7k | 174/d | 72/d | ▄▃▃▂▂█▅▅▅▃▃▃▂▂ | 2026-10-25 | [alchaincyf/huashu-bird-sticker](https://github.com/alchaincyf/huashu-bird-sticker) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **configured** (+pre-configured, software-engineering, utility, scripts, seamless, 80 more) | 293 | 293 | 76.7k | 58.4k/d | 11.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▂█ | 2026-10-25 | [PaladinDiscriminate/adobe-substance-3d](https://github.com/PaladinDiscriminate/adobe-substance-3d) | near-duplicate, same-day, flat-stars |
| 2 | **activator** (+kms, activation, windows-10, massgravel, office365, 25 more) | 136 | 136 | 19.8k | 9.7k/d | 6.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-29 | [bautistacorujo610-stack/office-activation-command-tool](https://github.com/bautistacorujo610-stack/office-activation-command-tool) | near-duplicate, same-day, flat-stars |
| 3 | **windows-app** (+activated, community-driven, enabled, mirroring) | 54 | 54 | 13.7k | 8.4k/d | 3.6k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-06 | [OhmUrchinSee/abbyy-finereader-pdf](https://github.com/OhmUrchinSee/abbyy-finereader-pdf) | same-day, flat-stars |
| 4 | **gemeni** (+general-purpose, manus, purpose, typescript-sdk, function-calling, 15 more) | 33 | 29 | 1.8k | 1.3k/d | 591/d | ▁▁▁▁▁▁▁▁▁▁▁▁▆█ | 2026-11-06 | [quyetcao/ai-manus](https://github.com/quyetcao/ai-manus) | near-duplicate, flat-stars |
| 5 | **ai-image-generation** (+apimart, gpt-image) | 14 | 2 | 1.8k | 477/d | 438/d | ▁▁▁▁▂▁▁▁▂▁▁█▂▁ | 2026-10-29 | [wquguru/shisei](https://github.com/wquguru/shisei) | same-day, few-owners |
| 6 | **coregold** (+vcc, usdt, visa, mastercard) | 42 | 37 | 2.4k | 253/d | 138/d | ▁▁▁▃▄▅▃▇▁▅█▇▁▁ | 2026-10-28 | [gutrfgtd-cyber/CoreGold---Direct-Issue-Global-Virtual-Credit-Card-Infrastructure-Management-Console](https://github.com/gutrfgtd-cyber/CoreGold---Direct-Issue-Global-Virtual-Credit-Card-Infrastructure-Management-Console) | flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>lag</b>: 6 repos, 1.5k stars</summary>

- [PulverizeLink/roblox-performance-tool](https://github.com/PulverizeLink/roblox-performance-tool) 426★ Lightweight performance utility for Roblox on Windows. Boosts FPS, fixes stutte…
- [StormSkinkGrip/game-ping-multipath-router](https://github.com/StormSkinkGrip/game-ping-multipath-router) 326★ Shortcut races your normal route against faster ones to the game server, sends …
- [Badgenyamultiplexer/pc-game-fps-doctor](https://github.com/Badgenyamultiplexer/pc-game-fps-doctor) 307★ One button: why the game stutters, why it lags and why it won't start. Pitstop …
- [PlateParrotTerminal/lag-doctor](https://github.com/PlateParrotTerminal/lag-doctor) 190★ Game ping, jitter & packet loss monitor: finds who causes your lag
- [MajestyPoemFold/ghostclick-mouse-double-click-fix](https://github.com/MajestyPoemFold/ghostclick-mouse-double-click-fix) 173★ Free mouse double click test and fix for Windows 11/10. Finds ghost clicks (mou…

</details>

<details><summary><b>totk</b>: 5 repos, 7.1k stars</summary>

- [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) 5.8k★ Static recompilation of The Legend of Zelda: Tears of the Kingdom to native Win…
- [kuraeow/ultratears](https://github.com/kuraeow/ultratears) 836★ Unofficial native PC and Steam Deck port of Tears of the Kingdom 1.4.3 using st…
- [daniel-madrid-07/weeping-of-the-empire](https://github.com/daniel-madrid-07/weeping-of-the-empire) 306★ Zelda: Tears of the Kingdom (TotK) 1.0.0 recompiled to native Windows and Vulka…
- [FurkanAnc/totk-launcher](https://github.com/FurkanAnc/totk-launcher) 89★ Launcher for the Tears of the Kingdom PC recomp: settings, key rebinding, keybo…
- [AurelioB/totk-android](https://github.com/AurelioB/totk-android) 72★ Tears of the Kingdom native Android port (TotK Native)

</details>

<details><summary><b>trainer</b>: 7 repos, 1.1k stars</summary>

- [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) 244★ Phantom Blade Zero Trainer 2026: God Mode, One-Hit Kill, start All Weapons
- [pablomatosdev/phantom-blade-zero-save-manager](https://github.com/pablomatosdev/phantom-blade-zero-save-manager) 244★ Phantom Blade Zero Save Manager 2026 — Automated Progress Backup Utility
- [richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit](https://github.com/richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit) 244★ PhantomBladeZero-Cheat: 54 toggleable runtime options and three presets for Pha…
- [wanjalaibra05-lgtm/phantom-blade-zero-assist](https://github.com/wanjalaibra05-lgtm/phantom-blade-zero-assist) 244★ Phantom Blade Zero: Symbol Cues, Wider Parry Windows, Full Arsenal
- [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) 73★ Whole-body motion tracking for the Unitree G1 in under a minute. BlinkMimic's w…

</details>

<details><summary><b>regularly</b>: 6 repos, 1.4k stars</summary>

- [fjordostrichhose/Steam-Points-Tools-2026](https://github.com/fjordostrichhose/Steam-Points-Tools-2026) 426★ Professional desktop application for Steam users. Smart tools for points manage…
- [davidlopez-x05x8/minecraft-aim-assist](https://github.com/davidlopez-x05x8/minecraft-aim-assist) 300★ Minecraft Aim Assist 2026 — Smooth aiming assistance for 1.21.4 Fabric. Adaptiv…
- [StraitBailiff/Voice-Changer-2026](https://github.com/StraitBailiff/Voice-Changer-2026) 235★ Lightweight desktop application for real-time voice changing. Multiple voice ef…
- [ChannelDivinerCast/VSCode-Extension-Helper](https://github.com/ChannelDivinerCast/VSCode-Extension-Helper) 163★ Lightweight desktop tool for Visual Studio Code users. Smart extension manageme…
- [GrandeurPikeman/Roblox-MM2-Utility-2026](https://github.com/GrandeurPikeman/Roblox-MM2-Utility-2026) 144★ Lightweight desktop utility for Roblox Murder Mystery 2. Convenient helpers, qu…

</details>

<details><summary><b>eglantine</b>: 5 repos, 1.1k stars</summary>

- [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) 500★ Use-case guide to Nintendo Switch 2 emulator forks: builds, games, GPUs, Androi…
- [sylvieistaken/selevet-eglantine](https://github.com/sylvieistaken/selevet-eglantine) 249★ Selevet Eglantine: an unofficial Eglantine (Switch 2 emulator) build tuned for …
- [viejunerd/Eglantine-PS5-](https://github.com/viejunerd/Eglantine-PS5-) 150★ 
- [ZendNevs/Eglantine-ZendNevs](https://github.com/ZendNevs/Eglantine-ZendNevs) 114★ Better performance, Frame Generation FSR 3 and LSFG. DynamicFPS. 30FPS LOCK. On…
- [sikoGD/playDB-CNT](https://github.com/sikoGD/playDB-CNT) 88★ Play The Duskbloods Network Test on Eglantine/Lichii: a launcher with local loo…

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
