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
_recent 2,359 repos  2026-10-24..2026-11-07  stars>=40 · baseline 3,622 repos  2026-08-25..2026-10-23  stars>=150 · generated 2026-11-07 13:06 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **pixel-art** | 13 | 13 | 7.9k | 938/d | 613/d | ▁▁▁▁▁▂▃▇█▅▄▄▃▃ | 2026-10-24 | [patch-gg/pixelfx](https://github.com/patch-gg/pixelfx) |
| 2 | **lag** (+ping) | 7 | 7 | 1.7k | 739/d | 340/d | ▁▁▁▁▁▁▅▁▁▁▅█▁▆ | 2026-10-30 | [PulverizeLink/roblox-performance-tool](https://github.com/PulverizeLink/roblox-performance-tool) |
| 3 | **blockchain** (+bnb) | 8 | 8 | 1.2k | 379/d | 245/d | ▁▁▁▁▁▁▁▄▁▄▅▆█▄ | 2026-10-30 | [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) |
| 4 | **sniper** (+bsc) | 5 | 5 | 865 | 357/d | 186/d | ▁▂▂▁▂▂▂▁▁▁▁▁█▃ | 2026-10-25 | [Nebularotunnel/Token-Sniper](https://github.com/Nebularotunnel/Token-Sniper) |
| 5 | **forensics** | 5 | 5 | 848 | 341/d | 148/d | ▁▁▁▁▁▁▃▂▁▂▇▆▄█ | 2026-10-25 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 6 | **eglantine** | 5 | 5 | 936 | 336/d | 267/d | ▁▁▁▁▁▁▁▁▁▂▂▄▆█ | 2026-11-01 | [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) |
| 7 | **regularly** | 7 | 7 | 1.5k | 321/d | 162/d | ▁▁▁▃▁▁▅▅▅▁▁█▁▁ | 2026-10-27 | [TinsmithConsole60/Roblox-Account-Manager-Multi-Account-Tool-2026](https://github.com/TinsmithConsole60/Roblox-Account-Manager-Multi-Account-Tool-2026) |
| 8 | **leveling** | 5 | 5 | 807 | 252/d | 222/d | ▁▁▁▁▁▁▁▁▁▁▂█▁▁ | 2026-11-01 | [protonversestudio/wow-forever-builds-kindred](https://github.com/protonversestudio/wow-forever-builds-kindred) |
| 9 | **portrait** (+pose-reference) | 8 | 8 | 797 | 171/d | 63/d | ▁▁▂▂▁▃▅▄▆█▅▃▃▅ | 2026-10-26 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 10 | **six** | 6 | 6 | 1.1k | 164/d | 95/d | ▁▁▁▁▄▃▂▃▅▆█▅▃▄ | 2026-10-25 | [artemnovitckii/claude-animation-skills](https://github.com/artemnovitckii/claude-animation-skills) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **configured** (+pre-configured, utility, software-engineering, windows-app, ensuring, 46 more) | 166 | 166 | 24.5k | 22.4k/d | 8.1k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-27 | [chordexpertflourish/autocad](https://github.com/chordexpertflourish/autocad) | near-duplicate, same-day, flat-stars |
| 2 | **activator** (+kms, windows-10, activation, scala, office365, 22 more) | 137 | 137 | 6.3k | 6.0k/d | 73/d | ▁▁▁▁▁▁█▁▁▁▁▁▁▅ | 2026-10-29 | [Layerriclient/microsoft-365](https://github.com/Layerriclient/microsoft-365) | near-duplicate, same-day, flat-stars |
| 3 | **gemeni** (+general-purpose, manus, purpose, typescript-sdk, function-calling, 19 more) | 66 | 59 | 5.3k | 5.3k/d | 258/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-06 | [quyetcao/ai-manus](https://github.com/quyetcao/ai-manus) | near-duplicate, same-day, flat-stars |
| 4 | **ai-image-generation** (+apimart, gpt-image) | 14 | 2 | 1.8k | 697/d | 444/d | ▁▁▁▁▁▂▁▁▁▂▁▁█▂ | 2026-10-29 | [wquguru/shisei](https://github.com/wquguru/shisei) | same-day, few-owners |
| 5 | **rpocket** (+desert) | 30 | 30 | 1.2k | 601/d | 400/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-05 | [RiventronLucky53535/crypto-rpocket-accumulation-scanner](https://github.com/RiventronLucky53535/crypto-rpocket-accumulation-scanner) | same-day, flat-stars |
| 6 | **resocket** | 16 | 16 | 640 | 320/d | 213/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-05 | [AstraLunarvenom33479/BloodStrike-region-limit-resocket](https://github.com/AstraLunarvenom33479/BloodStrike-region-limit-resocket) | same-day |
| 7 | **coregold** (+vcc, usdt, visa, mastercard) | 42 | 37 | 2.4k | 283/d | 309/d | ▁▁▁▁▃▄▅▃▇▁▅█▇▁ | 2026-10-28 | [gutrfgtd-cyber/CoreGold---Direct-Issue-Global-Virtual-Credit-Card-Infrastructure-Management-Console](https://github.com/gutrfgtd-cyber/CoreGold---Direct-Issue-Global-Virtual-Credit-Card-Infrastructure-Management-Console) | flat-stars |
| 8 | **resp** | 11 | 11 | 441 | 221/d | 147/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-05 | [ViaBecrest/Eden-Switch-Emulator-resp](https://github.com/ViaBecrest/Eden-Switch-Emulator-resp) | same-day |
| 9 | **aion** (+aion-2, mmorpg, aion2, dps-meter, dps, 6 more) | 15 | 15 | 863 | 62/d | 2/d | ▁█▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-10-24 | [ORICHO08/aion2-combat-overlay](https://github.com/ORICHO08/aion2-combat-overlay) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>pixel-art</b>: 13 repos, 7.9k stars</summary>

- [patch-gg/pixelfx](https://github.com/patch-gg/pixelfx) 5.7k★ 244 pixel art effects, every one a small piece of code. Plus a Claude Code skil…
- [yalongwastaken/git-koi](https://github.com/yalongwastaken/git-koi) 618★ Draw a pixel-art koi from a GitHub account's public activity, as a looping GIF …
- [Lanqiao-Luca/ai-video-marker](https://github.com/Lanqiao-Luca/ai-video-marker) 385★ 🎬 AI 视频制作与 AIGC 创作工作流（AI Video Creation Workflow）｜用 AI 制作视频、像素动画与漫画短片｜分镜、素材、配乐…
- [sloemo01/diorama](https://github.com/sloemo01/diorama) 346★ Playbook and Three.js code kit for detailed dioramas: classic pixel art, stroke…
- [SparrowPortray/horizon-free-capes](https://github.com/SparrowPortray/horizon-free-capes) 231★ Every cape, wing, hat, pet and emote in Drip is free: 24 capes, your own PNG or…

</details>

<details><summary><b>lag</b>: 7 repos, 1.7k stars</summary>

- [PulverizeLink/roblox-performance-tool](https://github.com/PulverizeLink/roblox-performance-tool) 426★ Lightweight performance utility for Roblox on Windows. Boosts FPS, fixes stutte…
- [StormSkinkGrip/game-ping-multipath-router](https://github.com/StormSkinkGrip/game-ping-multipath-router) 325★ Shortcut races your normal route against faster ones to the game server, sends …
- [Badgenyamultiplexer/pc-game-fps-doctor](https://github.com/Badgenyamultiplexer/pc-game-fps-doctor) 305★ One button: why the game stutters, why it lags and why it won't start. Pitstop …
- [QuantumBladesmith/FPS-Optimizer-Universal-Game-Performance-Booster-2026](https://github.com/QuantumBladesmith/FPS-Optimizer-Universal-Game-Performance-Booster-2026) 302★ Powerful FPS Optimizer for all games. Increase frame rate, reduce lag and stutt…
- [SkinkSmelter6/valorant-fps-lag-fixer](https://github.com/SkinkSmelter6/valorant-fps-lag-fixer) 272★ VALORANT stutters, lags or won't start? Tick reads the Vanguard code, measures …

</details>

<details><summary><b>blockchain</b>: 8 repos, 1.2k stars</summary>

- [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) 387★ Paste a wallet or a transaction hash and follow stolen crypto to the exchange t…
- [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) 255★ Wallet UI simulation tool for BTC, ETH, SOL, XRP, and 200+ assets. Customize di…
- [Signcluengine/onchain-money-trail-analyzer](https://github.com/Signcluengine/onchain-money-trail-analyzer) 166★ Follow stolen crypto hop by hop across Bitcoin, Ethereum, TRON, BNB Chain and S…
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) 164★ Non-custodial, encrypted file storage & sharing platform with Stellar payments …
- [git-wallet/gitwallet](https://github.com/git-wallet/gitwallet) 61★ GitWallet — non-custodial multi-chain crypto wallet for Android. 14 blockchains…

</details>

<details><summary><b>sniper</b>: 5 repos, 865 stars</summary>

- [Nebularotunnel/Token-Sniper](https://github.com/Nebularotunnel/Token-Sniper) 391★ Advanced desktop analyzer for DEX activity. Monitors new liquidity pair creatio…
- [jacke-pp/ai-wallet-binance](https://github.com/jacke-pp/ai-wallet-binance) 308★ 让任何 AI 用你自己的币安 AI 钱包交易：秒买秒卖、狙击 Agent 专属发射台（Four、Flap、GANG）、AI 专属 Mint、本机交易页面。币安…
- [Stratumgreawning7/MemeCoin-Sniper-Bot](https://github.com/Stratumgreawning7/MemeCoin-Sniper-Bot) 58★ Crypto Meme Coin Sniper Bot for Automated Trading, New Token Sniping, Meme Toke…
- [hamnurger0501/binance-agentic-sniper](https://github.com/hamnurger0501/binance-agentic-sniper) 57★ BSC launchpad sniper (Gang V3 / Fair / CA / Flap Agent-ID) using Binance Agenti…
- [Beingfluresurrect/Solana-token-sniper](https://github.com/Beingfluresurrect/Solana-token-sniper) 51★ Solana token sniper for Raydium V4 and Pump.fun. Bypass mempool with Jito MEV b…

</details>

<details><summary><b>forensics</b>: 5 repos, 848 stars</summary>

- [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) 406★ Python tool for aircraft Doppler audio geolocation using historical ADS-B fligh…
- [arnold117/iOS-NOIR](https://github.com/arnold117/iOS-NOIR) 224★ No-jailbreak iOS privacy, entitlement, sandbox & telemetry forensic auditor (in…
- [phishdestroy/TgWitness](https://github.com/phishdestroy/TgWitness) 109★ Telegram chat exporter and OSINT evidence workspace. Preserve observed edits an…
- [acnekot/frauddb](https://github.com/acnekot/frauddb) 59★ 
- [ycc77cn/skills](https://github.com/ycc77cn/skills) 50★ 杨CC 开源 AI Agent 技能合集 \| Divination, Software Development, Digital Forensics

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
