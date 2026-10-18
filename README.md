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
_recent 1,572 repos  2026-10-04..2026-10-18  stars>=40 · baseline 3,063 repos  2026-08-05..2026-10-03  stars>=150 · generated 2026-10-18 11:10 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **clean-room** | 8 | 2 | 35.2k | 3.3k/d | 1.7k/d | ▁▁▁▂▄▄▄█▇▆▄▃▃▂ | 2026-10-07 | [storytold/wordcraft](https://github.com/storytold/wordcraft) |
| 2 | **rea** (+ghidra) | 10 | 10 | 3.4k | 1.1k/d | 776/d | ▁▁▁▁▁▁▁▁▂▂▅█▄▇ | 2026-10-07 | [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) |
| 3 | **game-port** | 6 | 6 | 4.5k | 758/d | 526/d | ▁▁▁▁▂▁▁▁▆▄█▆▃▃ | 2026-10-05 | [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) |
| 4 | **mcd** (+mcdonalds, coupon, mcdonald, budget) | 24 | 24 | 3.6k | 552/d | 528/d | ▁▁▁▁▁▃▃▄▇▆▄█▅█ | 2026-10-09 | [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) |
| 5 | **sound** | 12 | 12 | 2.7k | 433/d | 391/d | ▁▁▂▃▄▄▄▂▂▂▂▃▅█ | 2026-10-04 | [Leonxlnx/earshot](https://github.com/Leonxlnx/earshot) |
| 6 | **portfolio** | 9 | 8 | 4.5k | 406/d | 221/d | ▁▁▁▄▅█▅▄▆▄▁▄▃▁ | 2026-10-06 | [LosaLosSantos/aurelio-finance](https://github.com/LosaLosSantos/aurelio-finance) |
| 7 | **classic** | 6 | 6 | 1.1k | 385/d | 166/d | ▁▂▂▁▁▁▁▁▁▄▇▃▃█ | 2026-10-04 | [solana-classic/solana-classic](https://github.com/solana-classic/solana-classic) |
| 8 | **messages** | 6 | 6 | 3.0k | 289/d | 183/d | ▁▁▁▂▂▁▅█▇▅▄▃▂▃ | 2026-10-06 | [Fei2411/DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot) |
| 9 | **finder** (+palette) | 6 | 6 | 1.1k | 168/d | 35/d | ▁▁▁▁▁▂▃▃▂█▃▂▂▁ | 2026-10-06 | [nikgrbn/finder-menu](https://github.com/nikgrbn/finder-menu) |
| 10 | **forza** | 6 | 4 | 478 | 111/d | 122/d | ▁▁▃▁▂▁▁▁▁▂▂█▇█ | 2026-10-05 | [LoZazaMastro/RaceOneHub](https://github.com/LoZazaMastro/RaceOneHub) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **activated** (+pre-activated, download, features) | 10 | 10 | 2.5k | 2.5k/d | 848/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-17 | [Nestsarecall/Ozone-12-Advanced](https://github.com/Nestsarecall/Ozone-12-Advanced) | same-day |
| 2 | **stellar** (+soroban, sentinel, smart-contracts, prototype, contracts) | 20 | 10 | 2.6k | 247/d | 0/d | ▂▃▁█▃▅▁▁▁▁▁▁▁▁ | 2026-10-04 | [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) | flat-stars |
| 3 | **argolink** (+argolink-focused, polling, focused, fields) | 34 | 34 | 1.5k | 112/d | 29/d | ▁▅█▃▃▅▅▅▄▂▆▃▁▁ | 2026-10-04 | [eliasbrookner7/seedance-2-5-api-provider](https://github.com/eliasbrookner7/seedance-2-5-api-provider) | same-day, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>clean-room</b>: 8 repos, 35.2k stars</summary>

- [storytold/wordcraft](https://github.com/storytold/wordcraft) 14.2k★ An open-source, clean-room reimplementation of Microsoft Word in pure Rust
- [storytold/cadcraft](https://github.com/storytold/cadcraft) 5.7k★ CADCraft: computer-aided design and drafting — an open-source, clean-room AutoC…
- [storytold/gridcraft](https://github.com/storytold/gridcraft) 5.7k★ GridCraft: an open-source, clean-room spreadsheet (Microsoft Excel-style) in pu…
- [storytold/deckcraft](https://github.com/storytold/deckcraft) 3.7k★ Presentations and slide shows: an open-source, clean-room reimplementation of M…
- [storytold/soundcraft](https://github.com/storytold/soundcraft) 3.2k★ An open-source, clean-room reimplementation of Avid Pro Tools in pure Rust

</details>

<details><summary><b>rea</b>: 10 repos, 3.4k stars</summary>

- [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) 1.2k★ 基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分…
- [Zfinix/eleven](https://github.com/Zfinix/eleven) 701★ Agent-first reverse engineering for macOS, Windows and Linux: any ACP agent rea…
- [aicodeking/leanrea](https://github.com/aicodeking/leanrea) 522★ One 8 KB skill that replaces REA (Reverse Engineer Anything): plain CLI tools, …
- [bbylw/rea-cn](https://github.com/bbylw/rea-cn) 419★ REA：逆向一切 通过一个 MCP 服务，逆向分析二进制文件、应用程序和运行时行为。 看到喜欢的功能，弄清它的工作原理，深入到二进制层面。
- [songshikang0111/awesome-REA-cases](https://github.com/songshikang0111/awesome-REA-cases) 230★ A curated collection of REA and AI-assisted reverse engineering cases, projects…

</details>

<details><summary><b>game-port</b>: 6 repos, 4.5k stars</summary>

- [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) 3.8k★ Open-source iOS / macOS compatibility layer for Diablo II: Resurrected with the…
- [SpeedBreakerProject/speedbreaker](https://github.com/SpeedBreakerProject/speedbreaker) 362★ Unofficial static recompilation of the Xbox 360 version of Need for Speed: Most…
- [d2r-mobile/d2r-mobile](https://github.com/d2r-mobile/d2r-mobile) 160★ Diablo II: Resurrected on iPhone, iPad & Apple silicon Mac. Play offline with t…
- [murkantor/Project-Midas](https://github.com/murkantor/Project-Midas) 126★ PC port of GE for Windows and Linux, built from the N64 decompilation. Widescre…
- [pablocpas/OpenCMR2](https://github.com/pablocpas/OpenCMR2) 67★ Native SDL3 port of Colin McRae Rally 2.0 built from the CMR2Decomp decompilati…

</details>

<details><summary><b>mcd</b>: 24 repos, 3.6k stars</summary>

- [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) 535★ 麦当劳省钱点餐助手（麦门精算师）｜麦当劳优惠券组合优化 Skill：拉取麦当劳菜单与全部可用优惠券，算出最省的点餐组合，巨无霸套餐 ¥47 → ¥21.9（省…
- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 490★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 408★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [yzg1226/mcd-party-officer](https://github.com/yzg1226/mcd-party-officer) 244★ 🍟 麦当劳门店派对成团调度 Skill — 把派对从「策划」推进到「办得成」：成团概率雷达 / 包场vs拼团 / 择日黄历 / 儿童营养指数 / 招募卡与邀…
- [lvzuojing/mcd-wrapped](https://github.com/lvzuojing/mcd-wrapped) 224★ M-CODE WRAPPED · 麦当劳数据全景报告 + 个人年报 + 方言播报

</details>

<details><summary><b>sound</b>: 12 repos, 2.7k stars</summary>

- [Leonxlnx/earshot](https://github.com/Leonxlnx/earshot) 722★ Ears for coding agents: let AI hear, review and make sound. CPU-only, open sour…
- [fxgl/steamac](https://github.com/fxgl/steamac) 619★ Valve's official ARM64 SteamOS in a lightweight VM on Apple Silicon: libkrun + …
- [mrsarac/ff-tracking](https://github.com/mrsarac/ff-tracking) 462★ A virtual camera films an AI agent's screen while a tracker locks onto every gl…
- [drowzeys/keys-Wasserman-Slate-AI-Studio-powered-by-TensorFold-built-with-integrated-Fish-Audio-Drama3](https://github.com/drowzeys/keys-Wasserman-Slate-AI-Studio-powered-by-TensorFold-built-with-integrated-Fish-Audio-Drama3) 140★ keys-Wasserman Slate AI Studio powered by TensorFold: an AI film studio for Mac…
- [postenginnering/super-bass-fully-agentic-dexed](https://github.com/postenginnering/super-bass-fully-agentic-dexed) 140★ Native VST3 and standalone Dexed with natural-language sound design

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
