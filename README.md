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
_recent 1,835 repos  2026-10-10..2026-10-24  stars>=40 · baseline 3,217 repos  2026-08-11..2026-10-09  stars>=150 · generated 2026-10-24 11:05 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **tvs** | 11 | 11 | 5.1k | 1.3k/d | 1.1k/d | ▁▁▁▁▁▁▁▁▁▁▇█▆▅ | 2026-10-10 | [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) |
| 2 | **rea** (+ghidra) | 16 | 16 | 8.0k | 1.1k/d | 678/d | ▁▁▂▂▄▇▄▅▄▅█▄▃▆ | 2026-10-10 | [aicodeking/leanrea](https://github.com/aicodeking/leanrea) |
| 3 | **mcd** (+mcdonalds, nutrition, food) | 48 | 48 | 5.8k | 784/d | 684/d | ▂▃▃▃▂▃▂▃▃▃▅▄▄█ | 2026-10-10 | [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) |
| 4 | **fps** (+fighter, booster, rates, lag, fps-booster-no-lag, 2 more) | 21 | 19 | 6.7k | 758/d | 252/d | ▁▁▆▄█▆▃▃▄▅▂▂▃▂ | 2026-10-10 | [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) |
| 5 | **professional** | 12 | 12 | 3.2k | 626/d | 442/d | ▁▁▁▁▁▁▁█▅▃▁▃▆▆ | 2026-10-12 | [Zagitta/gpu-unlock](https://github.com/Zagitta/gpu-unlock) |
| 6 | **purge** | 9 | 9 | 3.6k | 603/d | 853/d | ▁▁▁▁▁▁▁▁▁▂▆█▅▃ | 2026-10-13 | [mmparko/dsh-purge](https://github.com/mmparko/dsh-purge) |
| 7 | **zip** | 5 | 5 | 1.7k | 486/d | 416/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-10 | [xevrion/hatchzip](https://github.com/xevrion/hatchzip) |
| 8 | **aimbot** (+external-esp) | 8 | 8 | 1.1k | 451/d | 285/d | ▁▁▁▁▁▁▁▁▃▃▁▁█▅ | 2026-10-10 | [david-silvalab1993i0/Roblox-Aimbot-Smooth-Tracking-Auto-Aim-Script-2026](https://github.com/david-silvalab1993i0/Roblox-Aimbot-Smooth-Tracking-Auto-Aim-Script-2026) |
| 9 | **ps4** | 18 | 14 | 4.2k | 416/d | 229/d | ▁▁▃▅█▆▅▆▇▇▆▄▄▄ | 2026-10-11 | [AjncSystem/ShadowOfTheColossus-PC](https://github.com/AjncSystem/ShadowOfTheColossus-PC) |
| 10 | **ad-free** | 8 | 8 | 2.3k | 382/d | 281/d | ▁▁▁▂▁▁▂▁▄██▅▅▄ | 2026-10-12 | [Ansub/tv-detox](https://github.com/Ansub/tv-detox) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **php2shell** (+cve-2026-109618, cve-2026-109619, rce, cve, session.upload, 2 more) | 27 | 26 | 8.4k | 2.8k/d | 2.6k/d | ▁▁▁▁▁▁▁▁▁▁▁█▅▄ | 2026-10-15 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 2 | **activated** (+pre-activated, ready-to-run, download, setup, crack, 11 more) | 62 | 62 | 7.8k | 1.4k/d | 219/d | ▁▁▁▁▁▁▁█▇▁▁▂▁▁ | 2026-10-17 | [Nestsarecall/Ozone-12-Advanced](https://github.com/Nestsarecall/Ozone-12-Advanced) | near-duplicate, same-day, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>tvs</b>: 11 repos, 5.1k stars</summary>

- [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) 4.1k★ 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for …
- [OmkarK97/webos-vibehack](https://github.com/OmkarK97/webos-vibehack) 270★ Apple TV-style home screen for LG webOS TVs, a port of tv-vibehack
- [gabrielgreco1/TVmenubar-MacOS](https://github.com/gabrielgreco1/TVmenubar-MacOS) 130★ Native macOS menu bar remotes for LG webOS and Roku OS TVs
- [rudra-avatar/Hearth](https://github.com/rudra-avatar/Hearth) 101★ Hearth: a fast, calm home screen for LG WebOS TVs
- [berteotti/custom-tv](https://github.com/berteotti/custom-tv) 83★ A calm custom Home screen for Samsung Tizen TVs: weather, weather-matched lands…

</details>

<details><summary><b>rea</b>: 16 repos, 8.0k stars</summary>

- [aicodeking/leanrea](https://github.com/aicodeking/leanrea) 1.9k★ One 8 KB skill that replaces REA (Reverse Engineer Anything): plain CLI tools, …
- [JoasASantos/REA-Prompts](https://github.com/JoasASantos/REA-Prompts) 1.9k★ REAP - Prompts for you to use REA (Reverse Engineer Anything), get the most out…
- [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) 1.4k★ 基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分…
- [Zfinix/eleven](https://github.com/Zfinix/eleven) 850★ Agent-first reverse engineering for macOS, Windows and Linux: any ACP agent rea…
- [bbylw/rea-cn](https://github.com/bbylw/rea-cn) 565★ REA：逆向一切 通过一个 MCP 服务，逆向分析二进制文件、应用程序和运行时行为。 看到喜欢的功能，弄清它的工作原理，深入到二进制层面。

</details>

<details><summary><b>mcd</b>: 48 repos, 5.8k stars</summary>

- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 1.2k★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 998★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [makabaka0328/mcd-compass](https://github.com/makabaka0328/mcd-compass) 172★ 
- [LewisLeeYu-AIR/mcd-mood-palette](https://github.com/LewisLeeYu-AIR/mcd-mood-palette) 151★ 麦麦心情调色盘 — 基于麦当劳 MCP 的情绪×营养推荐与下单 Skill（程序员创意开发大赛参赛项目）
- [WilderNoTrack/mcd-calorie-butler](https://github.com/WilderNoTrack/mcd-calorie-butler) 150★ 麦麦热量管家：减脂不是少吃你爱的，是先换掉不值这口热量的。基于麦当劳 MCP 的味热比点餐 Skill。

</details>

<details><summary><b>fps</b>: 21 repos, 6.7k stars</summary>

- [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) 4.5k★ Open-source compatibility layer for Diablo II: Resurrected with the Reign of th…
- [LTSharpe/OblivionRemasteredPerformanceFix](https://github.com/LTSharpe/OblivionRemasteredPerformanceFix) 406★ Engine-level performance fix for Oblivion Remastered (UE5): higher fps in towns…
- [Dyotson/ForzaHorizon1-ReImagined](https://github.com/Dyotson/ForzaHorizon1-ReImagined) 287★ Forza Horizon (Xbox 360) natively on PC, rebuilt around the modern Horizon expe…
- [divergesoulpersist/IOBIT-Driver-Booster](https://github.com/divergesoulpersist/IOBIT-Driver-Booster) 147★ Iobit Driver Booster 2025, a full working installer with all updates and driver…
- [SmokeProduction/DLSS5-Unlocker](https://github.com/SmokeProduction/DLSS5-Unlocker) 127★ Unlock and manage DLSS 5 on any NVIDIA or AMD graphics card. The ultimate one-c…

</details>

<details><summary><b>professional</b>: 12 repos, 3.2k stars</summary>

- [Zagitta/gpu-unlock](https://github.com/Zagitta/gpu-unlock) 1.1k★ Unlock FP/BF16 instruction issue rate on Nvidia 3000's cards to their professio…
- [EL4CTEO/blender-skills](https://github.com/EL4CTEO/blender-skills) 460★ Professional Blender 5.2 workflows as Agent Skills for Claude Code, Codex, Gemi…
- [rossark0/rossark-motion-skill](https://github.com/rossark0/rossark-motion-skill) 412★ Turn any SVG into a professional 60 fps animation. A Claude Code skill that bri…
- [OverlordPrize/Power-Director](https://github.com/OverlordPrize/Power-Director) 252★ Power Director 14.5, a robust professional-grade video editing software, is now…
- [PureShoutRemedy/StartAll-Back](https://github.com/PureShoutRemedy/StartAll-Back) 252★ Startall Back 3.1.7 complete standalone installation build for professional des…

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
