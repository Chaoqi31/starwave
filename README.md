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
_recent 1,835 repos  2026-10-09..2026-10-23  stars>=40 · baseline 3,182 repos  2026-08-10..2026-10-08  stars>=150 · generated 2026-10-23 11:43 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **rea** (+ghidra, protocols) | 15 | 15 | 8.2k | 1.2k/d | 836/d | ▁▁▂▂▂▄▆▄▆▅▅█▄▃ | 2026-10-09 | [JoasASantos/REA-Prompts](https://github.com/JoasASantos/REA-Prompts) |
| 2 | **natively** | 15 | 15 | 11.4k | 1.1k/d | 870/d | ▁▁▁▅▃▇█▅▄▅▅▄▄▆ | 2026-10-09 | [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) |
| 3 | **aimbot** (+wallhack, cs2, external-esp, cheat, skeleton, 2 more) | 12 | 12 | 1.4k | 1.1k/d | 230/d | ▁▁▁▁▁▁▁▁▁▂▂▁▁█ | 2026-10-09 | [david-silvalab1993i0/Roblox-Aimbot-Smooth-Tracking-Auto-Aim-Script-2026](https://github.com/david-silvalab1993i0/Roblox-Aimbot-Smooth-Tracking-Auto-Aim-Script-2026) |
| 4 | **mcd** (+mcdonalds, food, budget, mcdonalds-mcp, nutrition, 5 more) | 56 | 56 | 9.1k | 925/d | 977/d | ▂▂▃▅▄▃▅▄▅▇▇██▆ | 2026-10-09 | [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) |
| 5 | **purge** | 7 | 7 | 3.2k | 584/d | 992/d | ▁▁▁▁▁▁▁▁▁▁▂▆█▅ | 2026-10-13 | [mmparko/dsh-purge](https://github.com/mmparko/dsh-purge) |
| 6 | **professional** | 9 | 9 | 1.6k | 555/d | 169/d | ▁▁▁▁▁▁▁▁█▅▄▂▂▇ | 2026-10-12 | [EL4CTEO/blender-skills](https://github.com/EL4CTEO/blender-skills) |
| 7 | **defi** | 5 | 5 | 851 | 548/d | 173/d | ▁▁▃▁▃▁▁▁▁▁▁▁▁█ | 2026-10-11 | [cxmza/windle](https://github.com/cxmza/windle) |
| 8 | **fps** (+booster, fighter, rates, lag, optimizer, 2 more) | 18 | 17 | 1.9k | 461/d | 158/d | ▁▁▁▂▂▂▁▁▃▆█▂▂▄ | 2026-10-10 | [LTSharpe/OblivionRemasteredPerformanceFix](https://github.com/LTSharpe/OblivionRemasteredPerformanceFix) |
| 9 | **ps4** (+jailbroken) | 18 | 14 | 4.0k | 432/d | 280/d | ▁▁▁▃▅█▆▆▇██▆▅▄ | 2026-10-11 | [AjncSystem/ShadowOfTheColossus-PC](https://github.com/AjncSystem/ShadowOfTheColossus-PC) |
| 10 | **ad-free** | 7 | 7 | 2.1k | 398/d | 371/d | ▁▁▁▁▂▁▁▂▁▄██▆▅ | 2026-10-12 | [Ansub/tv-detox](https://github.com/Ansub/tv-detox) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **google-tv** (+debloat, android-tv, tv-style, cleanyourtv, tv-vibehack, 1 more) | 10 | 9 | 30.9k | 5.5k/d | 7.3k/d | ▁▁▁▁▁▁▁▁▁▃▅█▇▅ | 2026-10-17 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) | same-day |
| 2 | **php2shell** (+cve-2026-109618, cve-2026-109619, rce, cve, session.upload, 2 more) | 24 | 23 | 7.0k | 3.6k/d | 2.1k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▅ | 2026-10-15 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 3 | **activated** (+pre-activated, ready-to-run, download, crack, setup, 8 more) | 56 | 56 | 7.3k | 1.4k/d | 169/d | ▁▁▁▁▁▁▁▁█▇▁▁▂▁ | 2026-10-17 | [Nestsarecall/Ozone-12-Advanced](https://github.com/Nestsarecall/Ozone-12-Advanced) | near-duplicate, same-day, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>rea</b>: 15 repos, 8.2k stars</summary>

- [JoasASantos/REA-Prompts](https://github.com/JoasASantos/REA-Prompts) 1.6k★ REAP - Prompts for you to use REA (Reverse Engineer Anything), get the most out…
- [aicodeking/leanrea](https://github.com/aicodeking/leanrea) 1.5k★ One 8 KB skill that replaces REA (Reverse Engineer Anything): plain CLI tools, …
- [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) 1.4k★ 基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分…
- [morluto/awesome-reverse-engineering](https://github.com/morluto/awesome-reverse-engineering) 1.1k★ Curated reverse-engineering tools and learning resources for binaries, apps, fi…
- [Zfinix/eleven](https://github.com/Zfinix/eleven) 833★ Agent-first reverse engineering for macOS, Windows and Linux: any ACP agent rea…

</details>

<details><summary><b>natively</b>: 15 repos, 11.4k stars</summary>

- [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) 4.5k★ Open-source compatibility layer for Diablo II: Resurrected with the Reign of th…
- [seedds/nxnative](https://github.com/seedds/nxnative) 2.2k★ Switch games running natively on iPhone, iPad and Mac: an NSP folder becomes an…
- [Supermedo/uncharted_pc](https://github.com/Supermedo/uncharted_pc) 1.9k★ Uncharted: The Nathan Drake Collection running natively on Windows - by SuperMe…
- [Awakenchan/LanternEngine](https://github.com/Awakenchan/LanternEngine) 879★ Lantern Engine: run your own copy of Bloodborne on Windows. A launcher and engi…
- [longbridge/nsh](https://github.com/longbridge/nsh) 587★ NSH runs modules written in TSX — natively on iOS, Android, macOS, Windows, Lin…

</details>

<details><summary><b>aimbot</b>: 12 repos, 1.4k stars</summary>

- [david-silvalab1993i0/Roblox-Aimbot-Smooth-Tracking-Auto-Aim-Script-2026](https://github.com/david-silvalab1993i0/Roblox-Aimbot-Smooth-Tracking-Auto-Aim-Script-2026) 301★ High-performance Roblox aimbot with adaptive smooth tracking and precise auto a…
- [wpfigfszroxn/pubg-external-esp](https://github.com/wpfigfszroxn/pubg-external-esp) 247★ PUBG external ESP/aimbot: player skeleton ESP, item glow, no-recoil, radar — re…
- [nicksilva1989q2/Valorant-Aimbot-Smooth-Tracking-Auto-Aim-System-2026](https://github.com/nicksilva1989q2/Valorant-Aimbot-Smooth-Tracking-Auto-Aim-System-2026) 145★ High-performance Valorant aimbot with adaptive smooth tracking and precise auto…
- [piqganehprlv/ff-external-esp](https://github.com/piqganehprlv/ff-external-esp) 120★ FreeFire external ESP cheat: player boxes, skeleton ESP, distance readout, item…
- [ulymxumfqtdi/dbd-external-esp](https://github.com/ulymxumfqtdi/dbd-external-esp) 116★ DBD external ESP: survivor aura, killer wallhack, skillcheck aimbot, injector f…

</details>

<details><summary><b>mcd</b>: 56 repos, 9.1k stars</summary>

- [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) 1.1k★ 麦当劳省钱点餐助手（麦门精算师）｜麦当劳优惠券组合优化 Skill：拉取麦当劳菜单与全部可用优惠券，算出最省的点餐组合，巨无霸套餐 ¥47 → ¥21.9（省…
- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 953★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 934★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [zcbacxc/mcd-party-planner](https://github.com/zcbacxc/mcd-party-planner) 923★ 麦当劳 MCP 聚会/团餐组织助手 — 基于 Model Context Protocol 的派对预订与团餐规划 CLI/Skill
- [AAA-EE/mcd-budget-planner](https://github.com/AAA-EE/mcd-budget-planner) 519★ 

</details>

<details><summary><b>purge</b>: 7 repos, 3.2k stars</summary>

- [mmparko/dsh-purge](https://github.com/mmparko/dsh-purge) 1.9k★ DeepSeek Harness 破甲 (mirror of YuJunZhiXue/dsh-purge) — 上游即将删库，此为本仓库全量镜像：含全部分支/…
- [WoYun520/dsh-purge](https://github.com/WoYun520/dsh-purge) 417★ DeepSeek Harness 破甲 (mirror of mmparko/dsh-purge) — 全量镜像：全部分支/100 个 tag/完整提交历史。…
- [JeffKeeping/dsh-purge-plus](https://github.com/JeffKeeping/dsh-purge-plus) 371★ dsh-purge 的非官方分支（fork）：适配 DeepSeek Harness 0.2.1-rc.2、破甲内核 v3、设置页 UI 重做 / unoff…
- [ZiChuanLan/pi-purge](https://github.com/ZiChuanLan/pi-purge) 292★ pi extension: /purge swaps pi's built-in assistant persona for your own prompt …
- [evilevil/dsh-purge-021rc2](https://github.com/evilevil/dsh-purge-021rc2) 129★ dsh-purge 社区适配版：上游已停更，这里让它继续跑在 DeepSeek Harness 0.2.1-rc.2 上（基于 1.1.72）

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
