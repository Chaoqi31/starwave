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
_recent 1,747 repos  2026-10-06..2026-10-20  stars>=40 · baseline 3,127 repos  2026-08-07..2026-10-05  stars>=150 · generated 2026-10-20 11:42 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **debloat** | 5 | 5 | 9.2k | 3.3k/d | 2.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▂▄█ | 2026-10-17 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) |
| 2 | **rea** (+ghidra) | 15 | 15 | 6.0k | 1.4k/d | 817/d | ▁▁▁▁▁▂▃▃▅█▅▇▆▆ | 2026-10-07 | [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) |
| 3 | **ad-free** | 7 | 7 | 2.1k | 1.3k/d | 482/d | ▁▁▁▁▁▁▁▁▁▁▁▁▃█ | 2026-10-06 | [simbasjungles/free-my-tv](https://github.com/simbasjungles/free-my-tv) |
| 4 | **fps** (+lag, fighter, booster, optimizer, widescreen, 1 more) | 19 | 18 | 5.7k | 1.3k/d | 590/d | ▁▁▁▁▁▁▆▄█▆▃▃▅▆ | 2026-10-06 | [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) |
| 5 | **mcd** (+mcdonalds, mcdonalds-mcp, coupon, budget, mcdonald, 1 more) | 32 | 32 | 5.5k | 676/d | 772/d | ▁▁▁▂▂▃▅▅▃▆▄▆█▇ | 2026-10-09 | [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) |
| 6 | **messages** | 9 | 9 | 3.7k | 428/d | 272/d | ▁▂▂▁▅█▇▅▄▃▂▄▄▄ | 2026-10-06 | [Fei2411/DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot) |
| 7 | **portfolio** | 8 | 7 | 4.5k | 346/d | 59/d | ▁▄▅█▅▄▆▄▁▄▃▁▂▁ | 2026-10-06 | [LosaLosSantos/aurelio-finance](https://github.com/LosaLosSantos/aurelio-finance) |
| 8 | **co-op** | 6 | 6 | 1.3k | 287/d | 322/d | ▁▁▁▃▃▁▁▁▁▁▃▅█▅ | 2026-10-09 | [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) |
| 9 | **obs** | 5 | 5 | 513 | 226/d | 83/d | ▁▁▁▂▁▁▁▁▃▂▃▃▁█ | 2026-10-08 | [loyraydi/meow_hud](https://github.com/loyraydi/meow_hud) |
| 10 | **podcast** | 5 | 5 | 829 | 180/d | 79/d | ▁▆▂▃▂▂▁▂█▇▆▂▆▆ | 2026-10-07 | [assafkip/claudemy](https://github.com/assafkip/claudemy) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **activated** (+pre-activated, ready-to-run, crack, setup, download, 11 more) | 62 | 62 | 8.3k | 3.4k/d | 2.8k/d | ▁▁▁▁▁▁▁▁▁▁▁█▆▁ | 2026-10-08 | [Maroonplocord/Movavi-Converter](https://github.com/Maroonplocord/Movavi-Converter) | near-duplicate, same-day, flat-stars |
| 2 | **clean-room** (+microsoft, engineered, room) | 11 | 5 | 37.5k | 2.9k/d | 1.2k/d | ▁▂▄▄▄█▇▆▄▃▃▂▂▂ | 2026-10-07 | [storytold/wordcraft](https://github.com/storytold/wordcraft) | few-owners |
| 3 | **hack** (+cheats, hacks, rpocket, hwid) | 14 | 14 | 1.7k | 1.2k/d | 421/d | ▁▁▂▁▁▁▁▁▁▁▁▁▅█ | 2026-10-06 | [arc-tool/.github](https://github.com/arc-tool/.github) | same-day |
| 4 | **stellar** (+soroban, sentinel, smart-contracts) | 15 | 7 | 1.9k | 160/d | 0/d | ▁█▄▆▁▁▁▁▁▁▁▁▁▁ | 2026-10-06 | [Stellar-Kolo/kolo-frontend](https://github.com/Stellar-Kolo/kolo-frontend) | few-owners |
| 5 | **resp** (+hack) | 5 | 5 | 300 | 150/d | 43/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-10-18 | [AstralAirAnchorage78/Resp-Minecraft-AIO-Soft](https://github.com/AstralAirAnchorage78/Resp-Minecraft-AIO-Soft) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>debloat</b>: 5 repos, 9.2k stars</summary>

- [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) 8.7k★ Debloat any Android or Google TV over Wi-Fi and get an Apple TV-style home.
- [mihirgupta0900/tv-home](https://github.com/mihirgupta0900/tv-home) 257★ Debloat a slow, ad-filled Android TV over Wi-Fi and give it a fast Apple TV-sty…
- [mclhm8182/tvhome-zh](https://github.com/mclhm8182/tvhome-zh) 120★ Apple TV-style launcher for Android TV — ready-to-install APK, no build needed.…
- [VictorTran1023/tcl-tv-adb-proxy](https://github.com/VictorTran1023/tcl-tv-adb-proxy) 64★ TCL 电视调试与优化手册：ADB 授权 · 侧载 · 代理 · 去广告 · 低负载 · HUD · 回归测试
- [kulwantnagi/android-tv-makeover](https://github.com/kulwantnagi/android-tv-makeover) 58★ Debloat an Android TV, replace its home screen with a clean Apple TV style laun…

</details>

<details><summary><b>rea</b>: 15 repos, 6.0k stars</summary>

- [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) 1.3k★ 基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分…
- [aicodeking/leanrea](https://github.com/aicodeking/leanrea) 1.1k★ One 8 KB skill that replaces REA (Reverse Engineer Anything): plain CLI tools, …
- [morluto/awesome-reverse-engineering](https://github.com/morluto/awesome-reverse-engineering) 959★ Curated reverse-engineering tools and learning resources for binaries, apps, fi…
- [Zfinix/eleven](https://github.com/Zfinix/eleven) 805★ Agent-first reverse engineering for macOS, Windows and Linux: any ACP agent rea…
- [bbylw/rea-cn](https://github.com/bbylw/rea-cn) 499★ REA：逆向一切 通过一个 MCP 服务，逆向分析二进制文件、应用程序和运行时行为。 看到喜欢的功能，弄清它的工作原理，深入到二进制层面。

</details>

<details><summary><b>ad-free</b>: 7 repos, 2.1k stars</summary>

- [simbasjungles/free-my-tv](https://github.com/simbasjungles/free-my-tv) 886★ A fast, ad-free home screen for Google TV. Open source, built with Claude Code.…
- [Ansub/tv-detox](https://github.com/Ansub/tv-detox) 738★ Make an old Android TV fast again with Claude Code or Codex: a tiny ad-free hom…
- [kota-zo/myspoti](https://github.com/kota-zo/myspoti) 139★ Native Android client for Spotify, built with Jetpack Compose
- [graent/grclean](https://github.com/graent/grclean) 91★ A lightweight, safe and ad-free PC cleaner. Junk cleanup, chat-app deep cleanin…
- [deciocrytek/Skipii](https://github.com/deciocrytek/Skipii) 74★ Ad-free YouTube player for Android (Material 3 Expressive)

</details>

<details><summary><b>fps</b>: 19 repos, 5.7k stars</summary>

- [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) 4.1k★ Open-source iOS / macOS compatibility layer for Diablo II: Resurrected with the…
- [LTSharpe/OblivionRemasteredPerformanceFix](https://github.com/LTSharpe/OblivionRemasteredPerformanceFix) 258★ Engine-level performance fix for Oblivion Remastered (UE5): higher fps in towns…
- [EpicRealmTitle/call-of-duty-modern-warfare-4-fps-optimizer](https://github.com/EpicRealmTitle/call-of-duty-modern-warfare-4-fps-optimizer) 126★ Lightweight desktop tool for Call of Duty: Modern Warfare 4. Smart FPS optimiza…
- [markklab1903d9/CS2-FPS-Optimizer-Performance-Boost-Lag-Fix-Tool-2026](https://github.com/markklab1903d9/CS2-FPS-Optimizer-Performance-Boost-Lag-Fix-Tool-2026) 125★ Powerful CS2 FPS optimizer that boosts frame rate, reduces lag and optimizes sy…
- [Digitalvetrough/Forza-Horizon-6-FPS-Optimizer-2026](https://github.com/Digitalvetrough/Forza-Horizon-6-FPS-Optimizer-2026) 106★ Lightweight desktop tool for Forza Horizon 6. Smart FPS optimization, performan…

</details>

<details><summary><b>mcd</b>: 32 repos, 5.5k stars</summary>

- [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) 745★ 麦当劳省钱点餐助手（麦门精算师）｜麦当劳优惠券组合优化 Skill：拉取麦当劳菜单与全部可用优惠券，算出最省的点餐组合，巨无霸套餐 ¥47 → ¥21.9（省…
- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 662★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 600★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [zcbacxc/mcd-party-planner](https://github.com/zcbacxc/mcd-party-planner) 549★ 麦当劳 MCP 聚会/团餐组织助手 — 基于 Model Context Protocol 的派对预订与团餐规划 CLI/Skill
- [lvzuojing/mcd-wrapped](https://github.com/lvzuojing/mcd-wrapped) 392★ M-CODE WRAPPED · 麦当劳数据全景报告 + 个人年报 + 方言播报

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
