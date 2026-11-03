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
_recent 2,242 repos  2026-10-20..2026-11-03  stars>=40 · baseline 3,494 repos  2026-08-21..2026-10-19  stars>=150 · generated 2026-11-03 14:20 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **uncensored-ai** (+abliterated) | 6 | 4 | 1.4k | 571/d | 221/d | ▁▁▃▁▄▃▁▁▁▃▁▁█▂ | 2026-10-22 | [routerhubSI/glm-5.3-abliterated](https://github.com/routerhubSI/glm-5.3-abliterated) |
| 2 | **stick** | 6 | 6 | 2.0k | 500/d | 572/d | ▁▁▁▁▁▁▁▁▁▁▁█▅▃ | 2026-10-22 | [Arjun-Ingole/hop](https://github.com/Arjun-Ingole/hop) |
| 3 | **nxnative** | 6 | 6 | 3.8k | 459/d | 305/d | ▂▂▂▃▂▃▃▇█▅▅▄▄▆ | 2026-10-20 | [LNPANDY/NX2Apple](https://github.com/LNPANDY/NX2Apple) |
| 4 | **png** | 9 | 9 | 1.5k | 403/d | 232/d | ▁▁▁▁▁▁▃▂▃▄▂▂█▂ | 2026-10-21 | [heydeer/pngdeer](https://github.com/heydeer/pngdeer) |
| 5 | **supermimic** (+mjlab, reproduction, body) | 11 | 11 | 2.4k | 324/d | 113/d | ▁▄█▅▃▅▇▆▄▅▃▂▃▅ | 2026-10-21 | [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) |
| 6 | **statically** | 12 | 11 | 1.5k | 236/d | 138/d | ▁▂▂▃█▆▃▇▃▃▄▆▄▆ | 2026-10-21 | [ryderclanky/BotW-Native](https://github.com/ryderclanky/BotW-Native) |
| 7 | **cs2** (+aegis) | 6 | 6 | 776 | 229/d | 208/d | ▁▁▁▁▁▁▁▁▁▁▂█▁▂ | 2026-10-30 | [oilcorporatebarn/aegis-skinfees](https://github.com/oilcorporatebarn/aegis-skinfees) |
| 8 | **sidebar** | 6 | 6 | 1.3k | 206/d | 84/d | █▅▃▁▁▂▂▂▂▁▂▁▃▄ | 2026-10-20 | [dominikmartn/harp](https://github.com/dominikmartn/harp) |
| 9 | **portrait** (+pose-reference) | 7 | 7 | 675 | 187/d | 129/d | ▁▁▁▁▁▁▂▂▂▄▅▄▇█ | 2026-10-22 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 10 | **yandex** | 8 | 8 | 1.5k | 132/d | 40/d | ▁▁▃▂▄▄█▅▇▃▂▂▂▂ | 2026-10-21 | [Marker284/yandex-station-extended](https://github.com/Marker284/yandex-station-extended) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **windows-app** (+utility, software-engineering, activated, ready-to-run, scripts, 33 more) | 167 | 167 | 24.6k | 23.0k/d | 4.4k/d | ▁▁▁▁▁▁▁▁▁▁▂▁▁█ | 2026-10-20 | [Codeonshovel/microsoft-365](https://github.com/Codeonshovel/microsoft-365) | near-duplicate, flat-stars, same-day |
| 2 | **single-player** (+wallhack, cheat, helpers, changer, esp, 2 more) | 26 | 26 | 1.4k | 1.2k/d | 429/d | ▁▁▁▁▁▁▁▁▁▁▁▁▂█ | 2026-10-26 | [BadgeStudentShovel/valorant-skin-changer](https://github.com/BadgeStudentShovel/valorant-skin-changer) | near-duplicate, same-day, flat-stars |
| 3 | **php2shell** (+cve-2026-109618, cve-2026-109619, cve, rce, php, 3 more) | 34 | 31 | 9.9k | 778/d | 65/d | ▁█▅▄▂▂▂▁▁▁▁▁▁▁ | 2026-10-20 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 4 | **troubleshooting** (+game-guide, pc-gaming, steam-games, game-specific, graphics-settings, 28 more) | 48 | 48 | 2.5k | 584/d | 70/d | ▁▁▁▁▁▂▁▁▁█▁▁▁▁ | 2026-10-22 | [ilikechocopies/sideload-jiostb](https://github.com/ilikechocopies/sideload-jiostb) | same-day, flat-stars |
| 5 | **abliterated-models** (+uncensored-ai, uncensored-ai-model, abliterated) | 6 | 5 | 1.1k | 160/d | 68/d | ▁▁▆▁▇▄█▁▁▁▁▁▄▃ | 2026-10-22 | [routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) | near-duplicate |
| 6 | **coregold** (+usdt, vcc, visa, mastercard) | 17 | 15 | 798 | 139/d | 78/d | ▁▁▁▁▁▁▁▁▇▇▇▃█▁ | 2026-10-28 | [eyuputku57-ops/-CoreGold---Global-Virtual-Card-Platform-for-Media-Buying-AI-SaaS-Cross-Border-Payments](https://github.com/eyuputku57-ops/-CoreGold---Global-Virtual-Card-Platform-for-Media-Buying-AI-SaaS-Cross-Border-Payments) | same-day |
| 7 | **aion** (+aion-2, mmorpg, aion2, dps-meter, dps, 4 more) | 13 | 13 | 743 | 74/d | 5/d | ▁▁▁▁▁█▁▁▁▁▁▁▁▁ | 2026-10-24 | [ORICHO08/aion2-combat-overlay](https://github.com/ORICHO08/aion2-combat-overlay) | same-day |
| 8 | **fps-booster-no-lag** (+rpocket, fps-booster-software, fps-tweak, lag, frame-rate-boost, 8 more) | 10 | 10 | 589 | 62/d | 20/d | ▁▁▁▃▁▁█▁▁▇▁▃▁▁ | 2026-10-23 | [Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package](https://github.com/Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package) | near-duplicate |
| 9 | **enshrouded** (+game-companion) | 10 | 10 | 580 | 58/d | 0/d | ▁▁▁▁▁█▁▁▁▁▁▁▁▁ | 2026-10-24 | [Abdelhadidr/enshrouded-interactive-map-desktop](https://github.com/Abdelhadidr/enshrouded-interactive-map-desktop) | same-day |
| 10 | **resp** | 8 | 8 | 466 | 49/d | 16/d | ▁▁▁▃▁▁█▁▁▇▁▃▁▁ | 2026-10-23 | [Wildange85773l/windows-fine-tuner-resp](https://github.com/Wildange85773l/windows-fine-tuner-resp) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>uncensored-ai</b>: 6 repos, 1.4k stars</summary>

- [routerhubSI/glm-5.3-abliterated](https://github.com/routerhubSI/glm-5.3-abliterated) 545★ GLM 5.3 abliterated or uncensored API access with RouterHub. Browse 35 jailbrea…
- [wideeyededi/uncensored-nsfw-ai-video-api](https://github.com/wideeyededi/uncensored-nsfw-ai-video-api) 417★ Uncensored NSFW AI video API — Seedance Spicy & Wan NSFW docs for 18+ text-to-v…
- [7API/glm-5.3-abliterated](https://github.com/7API/glm-5.3-abliterated) 172★ GLM 5.3 Abliterated or Uncensored AI model — 35 jailbreak prompts, model guide …
- [routerhubSI/openrouter-alternative](https://github.com/routerhubSI/openrouter-alternative) 136★ OpenRouter alternative for uncensored AI LLM access — independent RouterHub giv…
- [UncensoredLabs/uncensored-ai-api](https://github.com/UncensoredLabs/uncensored-ai-api) 95★ Uncensored AI API and browser chat: DeepSeek and GLM models, streaming, Python …

</details>

<details><summary><b>stick</b>: 6 repos, 2.0k stars</summary>

- [Arjun-Ingole/hop](https://github.com/Arjun-Ingole/hop) 1.4k★ Install Linux next to Windows without a USB stick
- [artemnovitckii/claude-animation-skills](https://github.com/artemnovitckii/claude-animation-skills) 194★ Six Claude Code skills that make animations for reels, no footage needed: 3D ca…
- [nilbuild/tinyhand](https://github.com/nilbuild/tinyhand) 143★ A tiny hand on a stick that points at things on your Mac screen.
- [AbhishekKaisar/glassos-tv](https://github.com/AbhishekKaisar/glassos-tv) 96★ A calm, glassy home screen for Android TV, Google TV and Fire TV, inspired by t…
- [cascodigital/skippy-tv](https://github.com/cascodigital/skippy-tv) 55★ Sci-fi starship-bridge home screen for Android TV (tested on NVIDIA Shield 1st …

</details>

<details><summary><b>nxnative</b>: 6 repos, 3.8k stars</summary>

- [LNPANDY/NX2Apple](https://github.com/LNPANDY/NX2Apple) 3.2k★ Play your own Switch games on iPhone/iPad — one-click macOS app, no terminal. \|…
- [Xc1Ym/LumaNX](https://github.com/Xc1Ym/LumaNX) 250★ 璃游 LumaNX：nxnative 第三方 GUI，图形化构建 Switch 游戏，支持 macOS 运行与 iOS / iPadOS IPA 导出。A m…
- [xFractals/pokopia-native](https://github.com/xFractals/pokopia-native) 144★ Build Pokémon Pokopia (Switch 2) into a native Mac app and iPhone app from your…
- [varyform/nx-native-wrapper](https://github.com/varyform/nx-native-wrapper) 91★ NX Play: a Mac app to build, play, install and manage Switch games with nxnativ…
- [jamescastells/nxnative-gui](https://github.com/jamescastells/nxnative-gui) 69★ A macOS app for nxnative.

</details>

<details><summary><b>png</b>: 9 repos, 1.5k stars</summary>

- [heydeer/pngdeer](https://github.com/heydeer/pngdeer) 431★ Smaller images, same picture. Compress PNGs to PNG or WebP with automatic quali…
- [nikita-s-x2001x7/photo-converter](https://github.com/nikita-s-x2001x7/photo-converter) 300★ Photo Converter Pro 2026 – Fast and powerful image converter for Windows. Conve…
- [SparrowPortray/horizon-free-capes](https://github.com/SparrowPortray/horizon-free-capes) 245★ Every cape, wing, hat, pet and emote in Drip is free: 24 capes, your own PNG or…
- [charolettebradford1361985svo-bit/stable-sprite-animation](https://github.com/charolettebradford1361985svo-bit/stable-sprite-animation) 111★ Reference-preserving sprite animation skill for AI agents: intact-limb walks, s…
- [guilhermealvestech/carrossel-skill](https://github.com/guilhermealvestech/carrossel-skill) 108★ Skill para Claude Code e Codex: carrosséis com a cara da sua marca, do roteiro …

</details>

<details><summary><b>supermimic</b>: 11 repos, 2.4k stars</summary>

- [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) 797★ vibe coded supermimic within 1h, LAFAN passed within 1.5 gpuh training
- [miao-org/awesome-supermimic](https://github.com/miao-org/awesome-supermimic) 459★ A curated collection of SuperMimic implementations, extensions, demos, and reso…
- [CuboiLeo/SuperMimic-Reproduced](https://github.com/CuboiLeo/SuperMimic-Reproduced) 382★ Reproduction of SuperMimic (arXiv:2610.28480): learned differentiable world mod…
- [Motphys/Uni-SuperMimic](https://github.com/Motphys/Uni-SuperMimic) 233★ SuperMimic-UniLab: An Independent reproduction of SuperMimic on UniLab for whol…
- [Huy-Quang-Dao/instantTrack](https://github.com/Huy-Quang-Dao/instantTrack) 123★ Whole-body motion tracking for the Unitree G1 in about 7 minutes on one GPU, 4.…

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
