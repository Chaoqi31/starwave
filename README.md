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
_recent 1,702 repos  2026-10-05..2026-10-19  stars>=40 · baseline 3,100 repos  2026-08-06..2026-10-04  stars>=150 · generated 2026-10-19 13:22 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **ad-free** | 7 | 7 | 4.2k | 2.1k/d | 1.0k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▃█ | 2026-10-06 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) |
| 2 | **features** (+unlocked) | 22 | 22 | 2.4k | 1.6k/d | 590/d | ▁▁▁▁▁▁▁▁▂▁▁▁▇█ | 2026-10-07 | [southroadball/Hwid-Spoofer](https://github.com/southroadball/Hwid-Spoofer) |
| 3 | **rea** (+ghidra) | 13 | 13 | 4.1k | 994/d | 638/d | ▁▁▁▁▁▁▁▂▂▅█▄▇▅ | 2026-10-07 | [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) |
| 4 | **ps4** (+bloodborne) | 17 | 16 | 5.1k | 684/d | 500/d | ▁▁█▆▃▂▂▄▅█▇▆▆▇ | 2026-10-05 | [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) |
| 5 | **mcd** (+mcdonalds, budget, coupon, mcdonald) | 28 | 28 | 4.7k | 665/d | 649/d | ▁▁▁▁▂▂▃▅▄▃▆▄▆█ | 2026-10-09 | [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) |
| 6 | **messages** | 9 | 9 | 3.5k | 521/d | 228/d | ▁▁▂▂▁▅█▇▅▄▃▂▄▄ | 2026-10-06 | [Fei2411/DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot) |
| 7 | **fps** (+optimizer, widescreen, zip) | 12 | 11 | 945 | 501/d | 188/d | ▁▁▁▁▁▁▁▂▂▂▂▂▂█ | 2026-10-06 | [LTSharpe/OblivionRemasteredPerformanceFix](https://github.com/LTSharpe/OblivionRemasteredPerformanceFix) |
| 8 | **portfolio** | 8 | 7 | 4.5k | 375/d | 130/d | ▁▁▄▅█▅▄▆▄▁▄▃▁▂ | 2026-10-06 | [LosaLosSantos/aurelio-finance](https://github.com/LosaLosSantos/aurelio-finance) |
| 9 | **artex** | 8 | 8 | 3.1k | 323/d | 128/d | ▁▁▁▃▅▄▃█▆▂▃▂▂▃ | 2026-10-08 | [trhhubsd/ARTEX](https://github.com/trhhubsd/ARTEX) |
| 10 | **co-op** | 5 | 5 | 1.1k | 308/d | 264/d | ▁▁▁▁▃▃▁▁▁▁▁▃▆█ | 2026-10-09 | [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **activated** (+pre-activated, ready-to-run, crack, setup, download, 9 more) | 52 | 52 | 6.7k | 4.9k/d | 2.2k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▇ | 2026-10-17 | [Maroonplocord/Movavi-Converter](https://github.com/Maroonplocord/Movavi-Converter) | near-duplicate, same-day, flat-stars |
| 2 | **clean-room** (+microsoft, room, engineered) | 11 | 5 | 36.5k | 3.1k/d | 1.4k/d | ▁▁▂▄▄▄█▇▆▄▃▃▂▂ | 2026-10-07 | [storytold/wordcraft](https://github.com/storytold/wordcraft) | few-owners |
| 3 | **stellar** (+soroban, sentinel, smart-contracts, prototype, contracts) | 19 | 9 | 2.5k | 217/d | 0/d | ▃▁█▃▅▁▁▁▁▁▁▁▁▁ | 2026-10-05 | [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) | few-owners |
| 4 | **argolink** (+argolink-focused, focused, responses) | 22 | 22 | 959 | 69/d | 0/d | ▁▁▁▃▇▇█▆▃█▄▁▁▁ | 2026-10-05 | [leopoldstclair5/seedance-2-5-shortdrama-studio](https://github.com/leopoldstclair5/seedance-2-5-shortdrama-studio) | same-day, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>ad-free</b>: 7 repos, 4.2k stars</summary>

- [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) 3.6k★ Debloat any Android or Google TV over Wi-Fi and get an Apple TV-style home.
- [Ansub/tv-detox](https://github.com/Ansub/tv-detox) 247★ Make an old Android TV fast again with Claude Code or Codex: a tiny ad-free hom…
- [kota-zo/myspoti](https://github.com/kota-zo/myspoti) 119★ Native Android client for Spotify, built with Jetpack Compose
- [graent/grclean](https://github.com/graent/grclean) 80★ A lightweight, safe and ad-free PC cleaner. Junk cleanup, chat-app deep cleanin…
- [deciocrytek/Skipii](https://github.com/deciocrytek/Skipii) 72★ Ad-free YouTube player for Android (Material 3 Expressive)

</details>

<details><summary><b>features</b>: 22 repos, 2.4k stars</summary>

- [southroadball/Hwid-Spoofer](https://github.com/southroadball/Hwid-Spoofer) 252★ Complete standalone setup for Hwid Spoofer Free, a professional desktop utility…
- [RiggerVitalize/Uttorent](https://github.com/RiggerVitalize/Uttorent) 250★ Complete standalone setup for Uttorent 1.4, featuring all essential utilities a…
- [StoneSniperStrip/Discord-Server-Cloner](https://github.com/StoneSniperStrip/Discord-Server-Cloner) 250★ Discord Server Cloner 2025: Full working installer with all features enabled. R…
- [WaEnhancerX/WaEnhancerX](https://github.com/WaEnhancerX/WaEnhancerX) 175★ WaEnhancer X - An advanced, open-source LSPosed module for WhatsApp. Features U…
- [stadiummidgeguide41/for-everyone](https://github.com/stadiummidgeguide41/for-everyone) 115★ After Effects: Full working installer with secure digital asset deployment pipe…

</details>

<details><summary><b>rea</b>: 13 repos, 4.1k stars</summary>

- [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) 1.2k★ 基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分…
- [aicodeking/leanrea](https://github.com/aicodeking/leanrea) 847★ One 8 KB skill that replaces REA (Reverse Engineer Anything): plain CLI tools, …
- [Zfinix/eleven](https://github.com/Zfinix/eleven) 778★ Agent-first reverse engineering for macOS, Windows and Linux: any ACP agent rea…
- [bbylw/rea-cn](https://github.com/bbylw/rea-cn) 460★ REA：逆向一切 通过一个 MCP 服务，逆向分析二进制文件、应用程序和运行时行为。 看到喜欢的功能，弄清它的工作原理，深入到二进制层面。
- [songshikang0111/awesome-REA-cases](https://github.com/songshikang0111/awesome-REA-cases) 281★ A curated collection of REA and AI-assisted reverse engineering cases, projects…

</details>

<details><summary><b>ps4</b>: 17 repos, 5.1k stars</summary>

- [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) 2.0k★ Native PC port of P.T. (runs from your own PS4 game files)
- [AjncSystem/ShadowOfTheColossus-PC](https://github.com/AjncSystem/ShadowOfTheColossus-PC) 1.1k★ Native Windows port of Shadow of the Colossus (PS4, CUSA08809) - bring your own…
- [GetLostIn/CTR-NitroFueled-PC](https://github.com/GetLostIn/CTR-NitroFueled-PC) 511★ Crash Team Racing: Nitro-Fueled (PS4) running natively on Windows 10/11. Window…
- [OverkillLabs3/driveclub-recomp](https://github.com/OverkillLabs3/driveclub-recomp) 329★ DriveClub (PS4, version 1.28) running natively on Windows
- [CLSAMG22/BBSC](https://github.com/CLSAMG22/BBSC) 156★ Bloodborne Seamless Co-op: a shadPS4 mod that keeps co-op alive through deaths,…

</details>

<details><summary><b>mcd</b>: 28 repos, 4.7k stars</summary>

- [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) 660★ 麦当劳省钱点餐助手（麦门精算师）｜麦当劳优惠券组合优化 Skill：拉取麦当劳菜单与全部可用优惠券，算出最省的点餐组合，巨无霸套餐 ¥47 → ¥21.9（省…
- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 558★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 555★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [zcbacxc/mcd-party-planner](https://github.com/zcbacxc/mcd-party-planner) 389★ 麦当劳 MCP 聚会/团餐组织助手 — 基于 Model Context Protocol 的派对预订与团餐规划 CLI/Skill
- [lvzuojing/mcd-wrapped](https://github.com/lvzuojing/mcd-wrapped) 329★ M-CODE WRAPPED · 麦当劳数据全景报告 + 个人年报 + 方言播报

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
