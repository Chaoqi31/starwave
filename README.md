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
_recent 2,944 repos  2026-10-26..2026-11-09  stars>=40 · baseline 3,690 repos  2026-08-27..2026-10-25  stars>=150 · generated 2026-11-09 16:26 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **tweaks** | 9 | 9 | 1.9k | 1.1k/d | 98/d | ▁▁▁▁▄█▅▃▃▃▃▃▂▇ | 2026-10-28 | [huamidev/GestaltX](https://github.com/huamidev/GestaltX) |
| 2 | **trainer** (+blade) | 7 | 7 | 1.6k | 576/d | 482/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▄ | 2026-11-05 | [richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit](https://github.com/richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit) |
| 3 | **cs2** (+steam-market, aegis, fee) | 7 | 7 | 982 | 358/d | 63/d | ▁▁▁▁▂█▁▂▁▁▁▁▁▃ | 2026-10-30 | [SoldierMultiply/footstep-equalizer](https://github.com/SoldierMultiply/footstep-equalizer) |
| 4 | **eglantine** | 6 | 6 | 1.2k | 257/d | 238/d | ▁▁▁▁▁▁▁▂▂▃▆█▅▃ | 2026-11-01 | [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) |
| 5 | **nintendo-switch-2** | 6 | 6 | 1.4k | 204/d | 165/d | ▁▁▁▁▂▁▁▇█▆▅▄▅█ | 2026-10-30 | [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) |
| 6 | **portrait** (+pose-reference) | 9 | 9 | 1.1k | 167/d | 122/d | ▂▂▁▃▅▄▆█▅▃▄▆▆▇ | 2026-10-26 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 7 | **stats** | 5 | 5 | 440 | 76/d | 48/d | ▁▁▁▁▁▁▁▁▄█▄▆▂▂ | 2026-10-30 | [Hubamongrescue/hearthstone-battlegrounds-tracker](https://github.com/Hubamongrescue/hearthstone-battlegrounds-tracker) |
| 8 | **vita** | 5 | 5 | 513 | 48/d | 18/d | ▂▂▂▂▃▄▄▃█▃▂▂▂▂ | 2026-10-26 | [TheLostPantheon/nativ](https://github.com/TheLostPantheon/nativ) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **configured** (+pre-configured, utility, software-engineering, ensuring, crack, 95 more) | 271 | 271 | 92.7k | 63.8k/d | 28.3k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▅█ | 2026-10-31 | [PaladinSmash84/aida-64-extreme](https://github.com/PaladinSmash84/aida-64-extreme) | near-duplicate, flat-stars, same-day |
| 2 | **windows-app** (+activated, pre-activated, payday, jetbrains, enabled) | 54 | 54 | 19.4k | 9.1k/d | 6.2k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▆ | 2026-11-06 | [PurpleChordEvaluate/claude-jailbreak-prompt](https://github.com/PurpleChordEvaluate/claude-jailbreak-prompt) | same-day, flat-stars |
| 3 | **activator** (+kms, activation, windows-10, office365, scala, 19 more) | 136 | 136 | 19.6k | 6.4k/d | 6.4k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-10-29 | [bautistacorujo610-stack/office-activation-command-tool](https://github.com/bautistacorujo610-stack/office-activation-command-tool) | near-duplicate, same-day, flat-stars |
| 4 | **rpocket** (+cheat, premiere, one-knob, hop, items, 46 more) | 228 | 227 | 12.3k | 3.3k/d | 51/d | ▁▁▁▁▁▁▁▁▁▁█▁▁▁ | 2026-10-26 | [Ceilingpiintensify/horizon-mod-checker](https://github.com/Ceilingpiintensify/horizon-mod-checker) | flat-stars |
| 5 | **resp** (+autoclicker, macro, clicker, printer, monitors, 5 more) | 126 | 124 | 6.7k | 1.8k/d | 2/d | ▁▁▁▁▁▁▁▁▁▁█▁▁▁ | 2026-10-26 | [ViaBecrest/Eden-Switch-Emulator-resp](https://github.com/ViaBecrest/Eden-Switch-Emulator-resp) | flat-stars |
| 6 | **resocket** (+optimizations, rates, warzone) | 76 | 76 | 4.3k | 1.1k/d | 0/d | ▁▁▁▁▁▁▁▁▁▁█▁▁▁ | 2026-10-26 | [AstraLunarvenom33479/BloodStrike-region-limit-resocket](https://github.com/AstraLunarvenom33479/BloodStrike-region-limit-resocket) | same-day, flat-stars |
| 7 | **respocket** (+aax, cheats, yet, aio, soft, 7 more) | 60 | 60 | 3.0k | 1.1k/d | 0/d | ▁▁▁▁▁▁▁▁▁▁█▁▁▁ | 2026-10-31 | [CometForDagger/all-the-mods-respocket-modpack-minecraft](https://github.com/CometForDagger/all-the-mods-respocket-modpack-minecraft) | flat-stars |
| 8 | **gemeni** (+general-purpose, manus, purpose, typescript-sdk, function-calling, 13 more) | 30 | 27 | 1.6k | 661/d | 537/d | ▁▁▁▁▁▁▁▁▁▁▁▆█▁ | 2026-11-06 | [Abdul-Rehman7826/ai-manus](https://github.com/Abdul-Rehman7826/ai-manus) | near-duplicate, flat-stars |
| 9 | **ai-image-generation** (+apimart, gpt-image) | 14 | 2 | 1.8k | 366/d | 77/d | ▁▁▁▂▁▁▁▂▁▁█▂▁▁ | 2026-10-29 | [wquguru/shisei](https://github.com/wquguru/shisei) | same-day, few-owners |
| 10 | **coregold** (+vcc, usdt, visa, mastercard) | 51 | 46 | 3.2k | 320/d | 99/d | ▁▁▃▃▄▂▆▁▅█▇▁▁▄ | 2026-10-28 | [reneefrank8161/CoreGold-ChatGPT-Pro-Cursor](https://github.com/reneefrank8161/CoreGold-ChatGPT-Pro-Cursor) | flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>tweaks</b>: 9 repos, 1.9k stars</summary>

- [huamidev/GestaltX](https://github.com/huamidev/GestaltX) 1.0k★ An MobileGestalt editor for iOS 27.x, featuring region-code tweaks, device pres…
- [JaceThings/DiaTweaks](https://github.com/JaceThings/DiaTweaks) 562★ Unofficial tweaks for the Dia browser, kept in place across updates
- [PoomSmart/ios-logos-tweak](https://github.com/PoomSmart/ios-logos-tweak) 103★ Agent skill for best practices for iOS jailbreak tweaks
- [WithElectron83682/PC-Gaming-Tweaker](https://github.com/WithElectron83682/PC-Gaming-Tweaker) 59★ Optimize Windows 10/11 for gaming – boost FPS, reduce latency, clean disk, and …
- [ModNexusfree/Valheim-Visual-Overhaul-Graphics-Mods](https://github.com/ModNexusfree/Valheim-Visual-Overhaul-Graphics-Mods) 46★ Ultimate visual mod collection for Valheim 1.0. HD textures, Ray Tracing, ReSha…

</details>

<details><summary><b>trainer</b>: 7 repos, 1.6k stars</summary>

- [richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit](https://github.com/richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit) 350★ PhantomBladeZero-Cheat: 54 toggleable runtime options and three presets for Pha…
- [wanjalaibra05-lgtm/phantom-blade-zero-assist](https://github.com/wanjalaibra05-lgtm/phantom-blade-zero-assist) 350★ Phantom Blade Zero: Symbol Cues, Wider Parry Windows, Full Arsenal
- [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) 349★ Phantom Blade Zero Trainer 2026: God Mode, One-Hit Kill, start All Weapons
- [pablomatosdev/phantom-blade-zero-save-manager](https://github.com/pablomatosdev/phantom-blade-zero-save-manager) 348★ Phantom Blade Zero Save Manager 2026 — Automated Progress Backup Utility
- [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) 99★ Whole-body motion tracking for the Unitree G1 in under a minute. BlinkMimic's w…

</details>

<details><summary><b>cs2</b>: 7 repos, 982 stars</summary>

- [SoldierMultiply/footstep-equalizer](https://github.com/SoldierMultiply/footstep-equalizer) 158★ Footstep equalizer for FPS games: auto EQ for Valorant, CS2, Apex
- [Lavagroabide/aegis-spreadwatch](https://github.com/Lavagroabide/aegis-spreadwatch) 148★ Aegis SpreadWatch: keeps CS2 buy and sell opportunities legible — net profit, R…
- [oilcorporatebarn/aegis-skinfees](https://github.com/oilcorporatebarn/aegis-skinfees) 148★ Aegis SkinFees: console-grade workspace for CS2 fee math — venue models, FX con…
- [solderdatabraid29/aegis-vaultgrid](https://github.com/solderdatabraid29/aegis-vaultgrid) 134★ Aegis VaultGrid: pairs a CS2 inventory vault with a fee-aware order planner. Lo…
- [SheikhDynamo/aegis-crossmarket](https://github.com/SheikhDynamo/aegis-crossmarket) 133★ Aegis CrossMarket: cross-market desk for CS2 items — net-return math, currency …

</details>

<details><summary><b>eglantine</b>: 6 repos, 1.2k stars</summary>

- [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) 536★ Use-case guide to Nintendo Switch 2 emulator forks: builds, games, GPUs, Androi…
- [sylvieistaken/selevet-eglantine](https://github.com/sylvieistaken/selevet-eglantine) 256★ Selevet Eglantine: an unofficial Eglantine (Switch 2 emulator) build tuned for …
- [viejunerd/Eglantine-PS5-](https://github.com/viejunerd/Eglantine-PS5-) 165★ 
- [ZendNevs/Eglantine-ZendNevs](https://github.com/ZendNevs/Eglantine-ZendNevs) 111★ Better performance, Frame Generation FSR 3 and LSFG. DynamicFPS. 30FPS LOCK. On…
- [sikoGD/playDB-CNT](https://github.com/sikoGD/playDB-CNT) 98★ Play The Duskbloods Network Test on Eglantine/Lichii: a launcher with local loo…

</details>

<details><summary><b>nintendo-switch-2</b>: 6 repos, 1.4k stars</summary>

- [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) 568★ Static recompilation of Donkey Kong Bananza (Switch 2) to native Windows with V…
- [xFractals/pokopia-native](https://github.com/xFractals/pokopia-native) 446★ Build Pokémon Pokopia (Switch 2) into a native Windows app, Mac app, and iPhone…
- [azmasm/switch2mac](https://github.com/azmasm/switch2mac) 150★ A Mac app that turns your own Nintendo Switch and Switch 2 game dumps into nati…
- [EddizEge/Anka](https://github.com/EddizEge/Anka) 108★ Anka — Nintendo Switch 2 emulator for Windows, focused on performance
- [niakw/ProsperoEden-Encore](https://github.com/niakw/ProsperoEden-Encore) 101★ ProsperoEden Encore Switch 1 + 2 EXPERIMENT emulator fork for PS5 FW 13.60: NSP…

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
