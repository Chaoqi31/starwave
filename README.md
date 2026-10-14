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
_recent 1,837 repos  2026-09-30..2026-10-14  stars>=40 · baseline 3,000 repos  2026-08-01..2026-09-29  stars>=150 · generated 2026-10-14 11:57 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **clean-room** | 7 | 2 | 27.5k | 4.0k/d | 5.5k/d | ▁▁▁▁▁▁▁▂▄▅▄█▇▆ | 2026-10-07 | [storytold/wordcraft](https://github.com/storytold/wordcraft) |
| 2 | **isometric** | 8 | 8 | 12.0k | 1.8k/d | 3.0k/d | ▁▁▁▁▂▁▁▂▂▁▂█▇▅ | 2026-10-01 | [wheresryan22/anatomy](https://github.com/wheresryan22/anatomy) |
| 3 | **artex** (+korean) | 6 | 6 | 7.1k | 1.0k/d | 605/d | ▁▁▁▁▁▁▁▂█▇▄▄▃▃ | 2026-10-02 | [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) |
| 4 | **mcd** (+mcdonalds) | 12 | 12 | 1.5k | 504/d | 401/d | ▁▁▁▁▁▁▁▁▁▃▃▄█▆ | 2026-10-09 | [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) |
| 5 | **finder** | 6 | 6 | 1.0k | 494/d | 225/d | ▁▁▁▁▁▁▁▁▂▃▃▃▂█ | 2026-10-01 | [nikgrbn/finder-menu](https://github.com/nikgrbn/finder-menu) |
| 6 | **ps4** (+bloodborne) | 11 | 11 | 2.7k | 463/d | 211/d | ▁▁▁▂▃▂▁█▆▃▂▃▃▄ | 2026-09-30 | [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) |
| 7 | **messages** | 7 | 7 | 2.6k | 373/d | 617/d | ▁▁▁▁▁▁▁▂▂▁▅█▇▇ | 2026-10-01 | [Fei2411/DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot) |
| 8 | **soroban** (+stellar, smart-contracts, testnet, sentinel) | 15 | 8 | 2.0k | 325/d | 0/d | ▁▁▁▁▁▁▁█▄▆▁▁▁▁ | 2026-10-06 | [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) |
| 9 | **font** | 6 | 6 | 1.7k | 263/d | 206/d | ▁▁▁▁▂▂▂█▂▂▄▇▂▂ | 2026-10-01 | [szabadkai/c64-keyboard-font](https://github.com/szabadkai/c64-keyboard-font) |
| 10 | **claude-code-mod** (+claude-code-mods) | 9 | 9 | 1.7k | 242/d | 326/d | ▁▁▁▂▂▁▁▁▂▂▂▃▂█ | 2026-10-02 | [YeonwooSung/my-claude-code-mods](https://github.com/YeonwooSung/my-claude-code-mods) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **apimart-en** (+image2, image2.5, llm-api-gateway, minimum, pay-as-you-go, 38 more) | 334 | 252 | 15.9k | 1.3k/d | 2.6k/d | ▁▁▁▁▁▁▁▂▅▇█▇▇█ | 2026-10-02 | [apimartcsivz33s/video-api-pricing-guide](https://github.com/apimartcsivz33s/video-api-pricing-guide) | near-duplicate, same-day, flat-stars |
| 2 | **discord-fix** (+discord-proxy, discord-unblock, discordfix, fix-discord, fixdiscord, 6 more) | 5 | 5 | 349 | 349/d | 116/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-13 | [Handcuffgladominate/zapret-discord](https://github.com/Handcuffgladominate/zapret-discord) | near-duplicate |
| 3 | **argolink** (+argolink-focused, polling, fields) | 28 | 28 | 1.2k | 129/d | 111/d | ▁▁▁▁▁▅█▃▃▅▅▅▄▂ | 2026-10-04 | [eliasbrookner7/seedance-2-5-api-provider](https://github.com/eliasbrookner7/seedance-2-5-api-provider) | flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>clean-room</b>: 7 repos, 27.5k stars</summary>

- [storytold/wordcraft](https://github.com/storytold/wordcraft) 11.9k★ An open-source, clean-room reimplementation of Microsoft Word in pure Rust
- [storytold/gridcraft](https://github.com/storytold/gridcraft) 4.6k★ GridCraft: an open-source, clean-room spreadsheet (Microsoft Excel-style) in pu…
- [storytold/cadcraft](https://github.com/storytold/cadcraft) 4.5k★ CADCraft: computer-aided design and drafting — an open-source, clean-room AutoC…
- [storytold/deckcraft](https://github.com/storytold/deckcraft) 3.1k★ Presentations and slide shows: an open-source, clean-room reimplementation of M…
- [storytold/soundcraft](https://github.com/storytold/soundcraft) 2.7k★ An open-source, clean-room reimplementation of Avid Pro Tools in pure Rust

</details>

<details><summary><b>isometric</b>: 8 repos, 12.0k stars</summary>

- [wheresryan22/anatomy](https://github.com/wheresryan22/anatomy) 9.1k★ An agent skill for creating detailed, interactive isometric illustrations of re…
- [lucasmarkes/hairline](https://github.com/lucasmarkes/hairline) 2.0k★ Six isometric line figures that answer the pointer. For React and for anything …
- [Aryanutkarsh/SeeCode](https://github.com/Aryanutkarsh/SeeCode) 472★ Animated, explorable diagrams for Claude and other coding agents, from a short …
- [MrBongoC/ai-iso-skill](https://github.com/MrBongoC/ai-iso-skill) 181★ Claude skill that draws interactive isometric figures in a single HTML file
- [Khalidabdi1/factory](https://github.com/Khalidabdi1/factory) 131★ A live isometric world in the browser: a seaside town, a new city, a farming vi…

</details>

<details><summary><b>artex</b>: 6 repos, 7.1k stars</summary>

- [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) 4.0k★ AI 自主渗透测试系统 \| 百度“agent+”攻防挑战赛冠军项目
- [jiwoochris/artex-global](https://github.com/jiwoochris/artex-global) 1.5k★ ARTEX 한국어판 · AI 자율 침투 테스트 프레임워크(upstream: Autumn-27/ARTEX, AGPL-3.0)
- [Hinln/ARTEX](https://github.com/Hinln/ARTEX) 760★ ARTEX 源码备份：基于 Autumn-27/ARTEX v0.3.15，保留原始提交历史与 AGPL-3.0 许可证。
- [cskwork/scopeweaver](https://github.com/cskwork/scopeweaver) 569★ ScopeWeaver: English and Korean localization of ARTEX, with preserved AGPL-3.0 …
- [bdg9412/artex-ko-plus](https://github.com/bdg9412/artex-ko-plus) 182★ ARTEX 한국어판 ·AI 기반 침해사고 대응 기능 추가 (upstream: Autumn-27/ARTEX, AGPL-3.0)

</details>

<details><summary><b>mcd</b>: 12 repos, 1.5k stars</summary>

- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 303★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [yzg1226/mcd-party-officer](https://github.com/yzg1226/mcd-party-officer) 235★ 🍟 麦当劳门店派对成团调度 Skill — 把派对从「策划」推进到「办得成」：成团概率雷达 / 包场vs拼团 / 择日黄历 / 儿童营养指数 / 招募卡与邀…
- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 175★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) 162★ 麦当劳省钱点餐助手（麦门精算师）｜麦当劳优惠券组合优化 Skill：拉取麦当劳菜单与全部可用优惠券，算出最省的点餐组合，巨无霸套餐 ¥47 → ¥21.9（省…
- [WilderNoTrack/mcd-calorie-butler](https://github.com/WilderNoTrack/mcd-calorie-butler) 149★ 麦麦热量管家：减脂不是少吃你爱的，是先换掉不值这口热量的。基于麦当劳 MCP 的味热比点餐 Skill。

</details>

<details><summary><b>finder</b>: 6 repos, 1.0k stars</summary>

- [nikgrbn/finder-menu](https://github.com/nikgrbn/finder-menu) 412★ Right-click menu for macOS Finder: New File, Open Terminal Here, Copy Path, Go …
- [egotoadcitadel/palette-from-image-ai](https://github.com/egotoadcitadel/palette-from-image-ai) 303★ AI coloring palette-from-image generator for designers and pixel artists — pull…
- [mstcvk/MacRAR](https://github.com/mstcvk/MacRAR) 89★ WinRAR-style archive manager for macOS: native AppKit app around RARLAB rar/unr…
- [deeeeone/gitdrive](https://github.com/deeeeone/gitdrive) 78★ Turn GitHub into an iCloud-style drive for macOS. Native Finder integration, fi…
- [gentpan/LiteZip](https://github.com/gentpan/LiteZip) 69★ 免费开源的原生 macOS 压缩与解压工具。支持 ZIP / 7Z 压缩解压、RAR 解压、加密分卷、目录预览和 Finder 右键操作，文件完全在本机处理。

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
