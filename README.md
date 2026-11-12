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
_recent 2,561 repos  2026-10-29..2026-11-12  stars>=40 · baseline 3,820 repos  2026-08-30..2026-10-28  stars>=150 · generated 2026-11-12 15:19 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **ocarina** | 6 | 6 | 10.1k | 1.5k/d | 1.7k/d | ▁▁▁▁▁▁▁▁▄▇▆█▆▅ | 2026-11-05 | [NotRexed/Hookshot](https://github.com/NotRexed/Hookshot) |
| 2 | **blockchain** (+ethereum) | 10 | 10 | 2.2k | 366/d | 325/d | ▁▁▃▁▃▃▄▆▃▁▂▁█▇ | 2026-10-30 | [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) |
| 3 | **enhancements** | 5 | 5 | 2.1k | 289/d | 428/d | ▁▁▁▁▂▁▂▂▂▄▃▆▅█ | 2026-10-29 | [shivsupratik/windows-optimizer](https://github.com/shivsupratik/windows-optimizer) |
| 4 | **eglantine** | 6 | 6 | 1.3k | 169/d | 45/d | ▁▁▁▁▂▂▃▆█▅▃▂▂▂ | 2026-11-01 | [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) |
| 5 | **que** | 6 | 6 | 1.1k | 149/d | 47/d | ▁▁▁▆█▇▄▃▅▃▂▂▂▃ | 2026-10-30 | [mille-okws/pestinha](https://github.com/mille-okws/pestinha) |
| 6 | **flight** (+endless, ads-b) | 10 | 10 | 1.3k | 143/d | 52/d | ▁▁▁▁▃██▄▂▃▄▂▂▂ | 2026-10-29 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 7 | **codes** | 5 | 5 | 464 | 130/d | 10/d | ▁▃█▁▂▁▄▁█▂▆▂▂▁ | 2026-10-29 | [Townlanurture/aegis-skin-terminal](https://github.com/Townlanurture/aegis-skin-terminal) |
| 8 | **nintendo-switch-2** | 5 | 5 | 1.3k | 126/d | 118/d | ▁▃▂▂▄▆▄▃▄▅█▆▅▄ | 2026-10-30 | [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) |
| 9 | **portrait** | 7 | 7 | 1.3k | 124/d | 84/d | ▃▅▄▆█▅▃▃▅▅▇▄▃▇ | 2026-10-29 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 10 | **gpl-3.0** | 7 | 7 | 861 | 101/d | 55/d | ▁▁▄█▃▃▃▂▂▂▃▂▃▃ | 2026-10-30 | [0xCodez/DuoDesk](https://github.com/0xCodez/DuoDesk) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **trial-version** (+trial, windows-software, windows-10, latest, download, 70 more) | 367 | 367 | 38.4k | 18.3k/d | 12.3k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-30 | [uchihamx999-beep/imei-repair-toolkit](https://github.com/uchihamx999-beep/imei-repair-toolkit) | same-day, flat-stars |
| 2 | **utility** (+windows-app, software-engineering, setup, configured, pre-configured, 10 more) | 117 | 117 | 88.6k | 15.3k/d | 22.1k/d | ▁▁▁▁▁▁▁▁▁▄▃▄▄█ | 2026-10-29 | [mahmoudtawfik1998/secure-pdf-document-processor](https://github.com/mahmoudtawfik1998/secure-pdf-document-processor) | near-duplicate, same-day, flat-stars |
| 3 | **activator** (+kms, activation, massgravel, office365, scala, 22 more) | 135 | 135 | 19.6k | 3.2k/d | 2/d | ▁▁▁▁▁▁▁▁▁█▁▁▁▁ | 2026-10-29 | [CCardona6/office-suite-alternative-access](https://github.com/CCardona6/office-suite-alternative-access) | near-duplicate, same-day, flat-stars |
| 4 | **coregold** (+vcc, usdt, visa, billing, mastercard, 1 more) | 70 | 64 | 5.1k | 518/d | 708/d | ▂▂▂▄▁▃▆▆▁▁▄▄█▇ | 2026-10-29 | [jmarianodaa-ctrl/-CoreGold---Global-Virtual-Card-Gateway](https://github.com/jmarianodaa-ctrl/-CoreGold---Global-Virtual-Card-Gateway) | flat-stars |
| 5 | **gemeni** (+general-purpose, manus, solidjs, typescript-sdk, tool-calling, 14 more) | 27 | 25 | 1.4k | 252/d | 1/d | ▁▁▁▁▁▁▁▁▇█▁▁▁▁ | 2026-11-06 | [Abdul-Rehman7826/ai-manus](https://github.com/Abdul-Rehman7826/ai-manus) | near-duplicate, flat-stars |
| 6 | **ai-image-generation** (+gpt-image, apimart) | 14 | 2 | 1.8k | 220/d | 7/d | ▂▁▁▁▂▁▁█▂▁▁▁▁▁ | 2026-10-29 | [wquguru/shisei](https://github.com/wquguru/shisei) | same-day, few-owners |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>ocarina</b>: 6 repos, 10.1k stars</summary>

- [NotRexed/Hookshot](https://github.com/NotRexed/Hookshot) 8.4k★ A Native Recompilation Of The Legend Of Zelda: Ocarina Of Time Nintendo Switch …
- [sostenesfreitas/ocarina-recomp](https://github.com/sostenesfreitas/ocarina-recomp) 1.2k★ Ocarina of Time running natively on Windows, no emulator. Built on your PC from…
- [jaigner-hub/ocarina-of-time-recomp](https://github.com/jaigner-hub/ocarina-of-time-recomp) 296★ Static recompilation of The Legend of Zelda: Ocarina of Time into a native PC p…
- [adi0900/GreenKid-MV](https://github.com/adi0900/GreenKid-MV) 109★ Game-free Mac builder for native Ocarina of Time (Switch 2) ports on Apple Sili…
- [dsi-hub/HookLink](https://github.com/dsi-hub/HookLink) 66★ The Legend of Zelda: Ocarina of Time (Switch 2 Edition) on iPhone, built on you…

</details>

<details><summary><b>blockchain</b>: 10 repos, 2.2k stars</summary>

- [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) 934★ Wallet UI simulation tool for BTC, ETH, SOL, XRP, and 200+ assets. Customize di…
- [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) 392★ Paste a wallet or a transaction hash and follow stolen crypto to the exchange t…
- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) 241★ Solana validator health in 60 seconds: score, leader duties, rewards, disk fore…
- [Signcluengine/onchain-money-trail-analyzer](https://github.com/Signcluengine/onchain-money-trail-analyzer) 167★ Follow stolen crypto hop by hop across Bitcoin, Ethereum, TRON, BNB Chain and S…
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) 164★ Non-custodial, encrypted file storage & sharing platform with Stellar payments …

</details>

<details><summary><b>enhancements</b>: 5 repos, 2.1k stars</summary>

- [shivsupratik/windows-optimizer](https://github.com/shivsupratik/windows-optimizer) 1.1k★ Windows Optimizer: Advanced System Tweaks and Performance Enhancements
- [Dittobyte/Recompia](https://github.com/Dittobyte/Recompia) 673★ Pokémon Pokopia (Switch 2) recompiled to run natively on Windows with Linux/Han…
- [Mabec-games/Conker-Recomped-and-Reloaded](https://github.com/Mabec-games/Conker-Recomped-and-Reloaded) 163★ Conker: Live & Reloaded (Xbox) on Windows & Linux: a native recompilation with …
- [PranavDupati/ninboy-hat-for-macos](https://github.com/PranavDupati/ninboy-hat-for-macos) 81★ Native compilation enhancements, crash fixes, keyboard/mouse controls, and perf…
- [ethanseagull/sm64ds-enhanced](https://github.com/ethanseagull/sm64ds-enhanced) 53★ Super Mario 64 DS native 3ds port with enhancements

</details>

<details><summary><b>eglantine</b>: 6 repos, 1.3k stars</summary>

- [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) 574★ Use-case guide to Nintendo Switch 2 emulator forks: builds, games, GPUs, Androi…
- [sylvieistaken/selevet-eglantine](https://github.com/sylvieistaken/selevet-eglantine) 258★ Selevet Eglantine: an unofficial Eglantine (Switch 2 emulator) build tuned for …
- [viejunerd/Eglantine-PS5-](https://github.com/viejunerd/Eglantine-PS5-) 172★ 
- [sikoGD/playDB-CNT](https://github.com/sikoGD/playDB-CNT) 138★ Play The Duskbloods Network Test on Eglantine/Lichii: a launcher with local loo…
- [ZendNevs/Eglantine-ZendNevs](https://github.com/ZendNevs/Eglantine-ZendNevs) 110★ Better performance, Frame Generation FSR 3 and LSFG. DynamicFPS. 30FPS LOCK. On…

</details>

<details><summary><b>que</b>: 6 repos, 1.1k stars</summary>

- [mille-okws/pestinha](https://github.com/mille-okws/pestinha) 405★ Pestinha é um pet virtual de desktop para Windows, com rede neural pulsada, emo…
- [R238Company/meu-emprego-novo](https://github.com/R238Company/meu-emprego-novo) 256★ Equipe de agentes de IA (CrewAI + AWS Bedrock/Claude) que lê a descrição de uma…
- [viajatech/agente-isabella](https://github.com/viajatech/agente-isabella) 173★ 🌐 PÚBLICO · Agente Isabella: convierte un Android en asistente de voz con IA q…
- [SalmeronDevZone/azure-lab](https://github.com/SalmeronDevZone/azure-lab) 139★ Simulador de Azure para aprender DevOps sin cuenta ni costes: portal, Cloud She…
- [LeiteZ/fluxo-de-edicao](https://github.com/LeiteZ/fluxo-de-edicao) 99★ Skill para o Claude Code que te guia a montar o seu fluxo de edição de vídeo

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
