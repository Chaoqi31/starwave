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
_recent 1,586 repos  2026-10-03..2026-10-17  stars>=40 · baseline 3,058 repos  2026-08-04..2026-10-02  stars>=150 · generated 2026-10-17 10:48 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **clean-room** (+reimplementation) | 8 | 2 | 33.9k | 3.5k/d | 2.3k/d | ▁▁▁▁▂▄▄▄█▇▆▄▃▃ | 2026-10-07 | [storytold/wordcraft](https://github.com/storytold/wordcraft) |
| 2 | **rea** | 9 | 9 | 2.5k | 735/d | 699/d | ▁▁▁▁▁▁▁▁▁▂▂▅█▄ | 2026-10-07 | [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) |
| 3 | **mcd** (+mcdonalds) | 21 | 21 | 2.9k | 532/d | 401/d | ▁▁▁▁▁▁▃▃▄▇▆▄█▅ | 2026-10-09 | [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) |
| 4 | **artex** | 8 | 8 | 4.4k | 454/d | 144/d | ▁▁▁▂▃▆▆▅▅█▆▂▃▂ | 2026-10-03 | [jiwoochris/artex-global](https://github.com/jiwoochris/artex-global) |
| 5 | **portfolio** | 7 | 6 | 4.3k | 405/d | 215/d | ▁▁▁▁▄▅█▅▄▆▄▁▄▃ | 2026-10-06 | [LosaLosSantos/aurelio-finance](https://github.com/LosaLosSantos/aurelio-finance) |
| 6 | **sound** | 10 | 10 | 1.7k | 378/d | 205/d | ▁▁▁▁▃▄▆▆▃▃▂▃▄█ | 2026-10-04 | [Leonxlnx/earshot](https://github.com/Leonxlnx/earshot) |
| 7 | **messages** | 6 | 6 | 2.8k | 301/d | 190/d | ▁▁▁▁▂▂▁▅█▇▅▄▃▂ | 2026-10-06 | [Fei2411/DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot) |
| 8 | **font** | 7 | 7 | 1.8k | 223/d | 113/d | ▁▁▂▂█▂▂▃▆▂▂▃▃▂ | 2026-10-04 | [szabadkai/c64-keyboard-font](https://github.com/szabadkai/c64-keyboard-font) |
| 9 | **soroban** (+stellar, sentinel, smart-contracts, contracts) | 15 | 8 | 2.0k | 216/d | 0/d | ▁▁▁▁█▄▆▁▁▁▁▁▁▁ | 2026-10-06 | [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) |
| 10 | **finder** | 8 | 8 | 1.2k | 212/d | 80/d | ▁▁▁▁▁▃▂▃▃▂█▃▂▂ | 2026-10-03 | [nikgrbn/finder-menu](https://github.com/nikgrbn/finder-menu) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **respocket** (+aio, yet, soft, hack, trainer, 3 more) | 24 | 24 | 1.4k | 1.4k/d | 472/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-16 | [XOmiod40291/99-Nights-Respocket-Free-Script](https://github.com/XOmiod40291/99-Nights-Respocket-Free-Script) | same-day, flat-stars |
| 2 | **apimart-en** (+image2, image2.5, llm-api-gateway, minimum, pay-as-you-go, 12 more) | 36 | 36 | 1.7k | 121/d | 85/d | ▁▁▁▁▁▂▄█▅▆▇▄▃▁ | 2026-10-03 | [apimartfwey/seedance-2.5-prompt-gallery](https://github.com/apimartfwey/seedance-2.5-prompt-gallery) | near-duplicate, same-day, flat-stars |
| 3 | **argolink** (+argolink-focused, polling, focused, fields) | 34 | 34 | 1.5k | 121/d | 86/d | ▁▁▅█▃▃▅▅▅▄▂▆▃▁ | 2026-10-04 | [eliasbrookner7/seedance-2-5-api-provider](https://github.com/eliasbrookner7/seedance-2-5-api-provider) | same-day, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>clean-room</b>: 8 repos, 33.9k stars</summary>

- [storytold/wordcraft](https://github.com/storytold/wordcraft) 13.8k★ An open-source, clean-room reimplementation of Microsoft Word in pure Rust
- [storytold/gridcraft](https://github.com/storytold/gridcraft) 5.5k★ GridCraft: an open-source, clean-room spreadsheet (Microsoft Excel-style) in pu…
- [storytold/cadcraft](https://github.com/storytold/cadcraft) 5.5k★ CADCraft: computer-aided design and drafting — an open-source, clean-room AutoC…
- [storytold/deckcraft](https://github.com/storytold/deckcraft) 3.6k★ Presentations and slide shows: an open-source, clean-room reimplementation of M…
- [storytold/soundcraft](https://github.com/storytold/soundcraft) 3.1k★ An open-source, clean-room reimplementation of Avid Pro Tools in pure Rust

</details>

<details><summary><b>rea</b>: 9 repos, 2.5k stars</summary>

- [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) 1.1k★ 基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分…
- [Zfinix/eleven](https://github.com/Zfinix/eleven) 646★ Agent-first reverse engineering for macOS, Windows and Linux: any ACP agent rea…
- [bbylw/rea-cn](https://github.com/bbylw/rea-cn) 388★ REA：逆向一切 通过一个 MCP 服务，逆向分析二进制文件、应用程序和运行时行为。 看到喜欢的功能，弄清它的工作原理，深入到二进制层面。
- [songshikang0111/awesome-REA-cases](https://github.com/songshikang0111/awesome-REA-cases) 85★ A curated collection of REA and AI-assisted reverse engineering cases, projects…
- [yibie/awesome-rea](https://github.com/yibie/awesome-rea) 69★ A curated list of AI-assisted reverse engineering: decompilation, recompilation…

</details>

<details><summary><b>mcd</b>: 21 repos, 2.9k stars</summary>

- [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) 476★ 麦当劳省钱点餐助手（麦门精算师）｜麦当劳优惠券组合优化 Skill：拉取麦当劳菜单与全部可用优惠券，算出最省的点餐组合，巨无霸套餐 ¥47 → ¥21.9（省…
- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 400★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 329★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [yzg1226/mcd-party-officer](https://github.com/yzg1226/mcd-party-officer) 244★ 🍟 麦当劳门店派对成团调度 Skill — 把派对从「策划」推进到「办得成」：成团概率雷达 / 包场vs拼团 / 择日黄历 / 儿童营养指数 / 招募卡与邀…
- [lvzuojing/mcd-wrapped](https://github.com/lvzuojing/mcd-wrapped) 211★ M-CODE WRAPPED · 麦当劳数据全景报告 + 个人年报 + 方言播报

</details>

<details><summary><b>artex</b>: 8 repos, 4.4k stars</summary>

- [jiwoochris/artex-global](https://github.com/jiwoochris/artex-global) 1.6k★ ARTEX 한국어판 · AI 자율 침투 테스트 프레임워크(upstream: Autumn-27/ARTEX, AGPL-3.0)
- [trhhubsd/ARTEX](https://github.com/trhhubsd/ARTEX) 1.2k★ ARTEX，AI 自主渗透测试系统。百度 agent+ 攻防挑战赛冠军项目。
- [Hinln/ARTEX](https://github.com/Hinln/ARTEX) 792★ ARTEX 源码备份：基于 Autumn-27/ARTEX v0.3.15，保留原始提交历史与 AGPL-3.0 许可证。
- [RuoJi6/ARTEX](https://github.com/RuoJi6/ARTEX) 262★ Autumn-27/ARTEX 持续维护开源版本
- [bdg9412/artex-ko-plus](https://github.com/bdg9412/artex-ko-plus) 191★ ARTEX 한국어판 ·AI 기반 침해사고 대응 기능 추가 (upstream: Autumn-27/ARTEX, AGPL-3.0)

</details>

<details><summary><b>portfolio</b>: 7 repos, 4.3k stars</summary>

- [LosaLosSantos/aurelio-finance](https://github.com/LosaLosSantos/aurelio-finance) 3.9k★ Open-source personal finance app with an AI financial advisor: track your net w…
- [Sushmitadasari/Portfolio_series](https://github.com/Sushmitadasari/Portfolio_series) 121★ 
- [Itz-Anya/Haimiya-Mio](https://github.com/Itz-Anya/Haimiya-Mio) 77★ My Portfolio v2 version
- [CodeNightOwl/ai-trading-assistant](https://github.com/CodeNightOwl/ai-trading-assistant) 57★ AI-powered investment research assistant: review, portfolio, analysis & risk co…
- [nocTia-O9/3d-card-game-showcase](https://github.com/nocTia-O9/3d-card-game-showcase) 49★ Unity / C# 3D 卡牌游戏：核心脚本、回合战斗、地图生成与 UI Toolkit

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
