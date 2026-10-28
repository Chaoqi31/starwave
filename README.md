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
_recent 2,111 repos  2026-10-14..2026-10-28  stars>=40 · baseline 3,291 repos  2026-08-15..2026-10-13  stars>=150 · generated 2026-10-28 13:00 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **debloat** (+smart-tv) | 12 | 12 | 7.6k | 1.4k/d | 1.4k/d | ▁▁▁▁▂▄▃▂▂▂▃▆██ | 2026-10-18 | [rddmwmddr/android-ad-cleaner](https://github.com/rddmwmddr/android-ad-cleaner) |
| 2 | **tvs** (+lg-tv) | 12 | 12 | 8.7k | 1.1k/d | 1.0k/d | ▁▁▁▁▁▁▇█▆▅▄▆▆▅ | 2026-10-14 | [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) |
| 3 | **mcd** (+nutrition, meal) | 43 | 43 | 7.2k | 1.0k/d | 763/d | ▁▁▂▂▂▂▂▂▂▄██▁▁ | 2026-10-14 | [zcbacxc/mcd-party-planner](https://github.com/zcbacxc/mcd-party-planner) |
| 4 | **utility** | 16 | 16 | 1.9k | 516/d | 186/d | ▁▁▁█▅▃▂▂▁▁▂▆▁▃ | 2026-10-17 | [PureShoutRemedy/StartAll-Back](https://github.com/PureShoutRemedy/StartAll-Back) |
| 5 | **ad-free** | 10 | 10 | 3.0k | 410/d | 220/d | ▁▁▂▁▄█▇▅▄▄▄▄▄▄ | 2026-10-14 | [Ansub/tv-detox](https://github.com/Ansub/tv-detox) |
| 6 | **supermimic** (+reproduction) | 6 | 6 | 1.6k | 351/d | 229/d | ▁▁▁▁▁▁▁▄█▅▃▅▆▄ | 2026-10-21 | [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) |
| 7 | **moss** | 9 | 9 | 2.7k | 245/d | 152/d | ▁▁▇▆██▅▆▇▆▅▄▅▄ | 2026-10-16 | [OpenMOSS/MOSS-Image](https://github.com/OpenMOSS/MOSS-Image) |
| 8 | **sniper** | 7 | 7 | 957 | 217/d | 113/d | ▁▁▁▁▁▁▁▁▅▇█▂█▂ | 2026-10-23 | [wcoxptzhhdbo/solana-sniper-bot](https://github.com/wcoxptzhhdbo/solana-sniper-bot) |
| 9 | **astrbot** | 6 | 5 | 717 | 178/d | 144/d | ▁▁▁▁▂▂▂▂▂▂▂▃█▇ | 2026-10-14 | [JunWan666/astrbot-for-android](https://github.com/JunWan666/astrbot-for-android) |
| 10 | **yandex** | 6 | 6 | 917 | 167/d | 201/d | ▁▁▁▁▁▁▁▁▃▂▅▄█▅ | 2026-10-21 | [Marker284/yandex-station-extended](https://github.com/Marker284/yandex-station-extended) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **activated** (+ready-to-run, pre-activated, setup, download, crack, 10 more) | 63 | 62 | 9.9k | 1.4k/d | 647/d | ▁▁▁█▇▁▁▂▁▁▁▃▂▁ | 2026-10-17 | [Shardgrureduce/Wondshare-Recoverit](https://github.com/Shardgrureduce/Wondshare-Recoverit) | near-duplicate, same-day, flat-stars |
| 2 | **php2shell** (+cve-2026-109618, cve-2026-109619, rce, cve, php, 5 more) | 30 | 27 | 9.4k | 1.4k/d | 264/d | ▁▁▁▁▁▁▁█▅▄▂▂▂▁ | 2026-10-20 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 3 | **resp** (+booster, fps-booster-no-lag, lag, optimizer, game-booster-free, 9 more) | 21 | 21 | 2.6k | 325/d | 357/d | ▁▁▁▁▃▆▂▂▂▅▁▄█▂ | 2026-10-16 | [kividbio/kividb](https://github.com/kividbio/kividb) | same-day |
| 4 | **abliterated-models** (+uncensored-ai, uncensored-ai-model, abliterated, anthropic-compatible) | 5 | 5 | 898 | 322/d | 148/d | ▁▁▁▁▁▁▁▁▆▁▆▄█▁ | 2026-10-22 | [routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) | near-duplicate |
| 5 | **auto-scaling** (+scaling, centralized, utilizes, real-time, enables, 2 more) | 26 | 9 | 3.0k | 273/d | 971/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-17 | [bagusprts/OutlineWeld](https://github.com/bagusprts/OutlineWeld) | same-day, few-owners, flat-stars |
| 6 | **rpocket** (+game-booster, windows-optimization-tool, counter-strike) | 22 | 22 | 1.2k | 234/d | 235/d | ▁▁▁▁▁▁▁▁▁▆▁▁█▁ | 2026-10-23 | [Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package](https://github.com/Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package) | same-day, flat-stars |
| 7 | **aion** (+aion-2, aion2, mmorpg, overlay, game-overlay, 6 more) | 13 | 13 | 754 | 189/d | 251/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▁ | 2026-10-24 | [Ikramullah-2011/daeva-lens](https://github.com/Ikramullah-2011/daeva-lens) | same-day |
| 8 | **resocket** (+system-tweaks, fps-tweak, fps-booster-exe) | 14 | 14 | 743 | 149/d | 150/d | ▁▁▁▁▁▁▁▁▁▆▁▁█▁ | 2026-10-23 | [Axesand12310/ddr-resocket-multichannel-dma](https://github.com/Axesand12310/ddr-resocket-multichannel-dma) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>debloat</b>: 12 repos, 7.6k stars</summary>

- [rddmwmddr/android-ad-cleaner](https://github.com/rddmwmddr/android-ad-cleaner) 4.1k★ 关掉国产安卓手机系统里的广告、热搜、资讯推荐和营销推送。不 root，可还原，支持 AI 智能体一键执行。
- [humblemuzzu/dumbtv](https://github.com/humblemuzzu/dumbtv) 1.7k★ Take the ads, tracking and clutter out of your Fire TV over ADB, no root. Every…
- [jss8649/quiet-tizen](https://github.com/jss8649/quiet-tizen) 417★ Native Quiet Home launcher, reversible cleanup tools, and an agent-readable gui…
- [man15h/tellyscope](https://github.com/man15h/tellyscope) 396★ Debloat your Android TV, install apps, browse and transfer files on it, all fro…
- [lasharor/cleanyourtv-WebOS](https://github.com/lasharor/cleanyourtv-WebOS) 277★ A clean home screen for rooted LG webOS TVs, with an optional debloat of LG's a…

</details>

<details><summary><b>tvs</b>: 12 repos, 8.7k stars</summary>

- [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) 7.3k★ 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for …
- [OmkarK97/webos-vibehack](https://github.com/OmkarK97/webos-vibehack) 328★ Apple TV-style home screen for LG webOS TVs, a port of tv-vibehack
- [rudra-avatar/Hearth](https://github.com/rudra-avatar/Hearth) 256★ Hearth: a fast, calm home screen for LG WebOS TVs
- [ecklf/lg-luma](https://github.com/ecklf/lg-luma) 213★ A native launcher for rooted LG webOS TVs
- [victaphu/glass-home-samsung-tv](https://github.com/victaphu/glass-home-samsung-tv) 181★ A minimal home screen for Samsung Tizen TVs: rotating nature photos, a glass do…

</details>

<details><summary><b>mcd</b>: 43 repos, 7.2k stars</summary>

- [zcbacxc/mcd-party-planner](https://github.com/zcbacxc/mcd-party-planner) 1.6k★ 麦当劳 MCP 聚会/团餐组织助手 — 基于 Model Context Protocol 的派对预订与团餐规划 CLI/Skill
- [zengshuangzi/mcd-money-saver](https://github.com/zengshuangzi/mcd-money-saver) 420★ 基于麦当劳MCP的智能省钱助手
- [abckkf321/-mcd-fair-split](https://github.com/abckkf321/-mcd-fair-split) 245★ 
- [makabaka0328/mcd-compass](https://github.com/makabaka0328/mcd-compass) 224★ 
- [jouaaaaaa/mcd-self-butler](https://github.com/jouaaaaaa/mcd-self-butler) 217★ 麦当劳自助管家 McButler — 基于麦当劳 MCP 的点单参谋：每日推荐 / 套餐健康体检 / 门店全成本比价 / 团餐智能配餐 / 麦险分信用评级 /…

</details>

<details><summary><b>utility</b>: 16 repos, 1.9k stars</summary>

- [PureShoutRemedy/StartAll-Back](https://github.com/PureShoutRemedy/StartAll-Back) 350★ Startall Back 3.1.7 complete standalone installation build for professional des…
- [southroadball/Hwid-Spoofer](https://github.com/southroadball/Hwid-Spoofer) 252★ Complete standalone setup for Hwid Spoofer Free, a professional desktop utility…
- [Manan-Santoki/OpenShelf](https://github.com/Manan-Santoki/OpenShelf) 158★ Free, open-source Mac utility: start dragging any file, tap a key, and drop it …
- [GrandeurPikeman/Roblox-MM2-Utility-2026](https://github.com/GrandeurPikeman/Roblox-MM2-Utility-2026) 144★ Lightweight desktop utility for Roblox Murder Mystery 2. Convenient helpers, qu…
- [TownFletcherEstimate/Minecraft-PvP-Helper-2026](https://github.com/TownFletcherEstimate/Minecraft-PvP-Helper-2026) 106★ Lightweight utility for Minecraft. Convenient PvP helpers, quality-of-life feat…

</details>

<details><summary><b>ad-free</b>: 10 repos, 3.0k stars</summary>

- [Ansub/tv-detox](https://github.com/Ansub/tv-detox) 1.7k★ Make an old Android TV fast again with Claude Code or Codex: a tiny ad-free hom…
- [kota-zo/myspoti](https://github.com/kota-zo/myspoti) 555★ Native Android client for Spotify, built with Jetpack Compose
- [aradhyas8/Plume_Launcher](https://github.com/aradhyas8/Plume_Launcher) 256★ 🪶 A lightweight, ad-free launcher for Android TV and Google TV. 0.4 MB, no tra…
- [addozhang/leancast](https://github.com/addozhang/leancast) 105★ Ad-free DLNA / UPnP cast receiver for Android TV · 极简无广告投屏接收器
- [Jarvis322/matinee](https://github.com/Jarvis322/matinee) 82★ A calm, ad-free home screen for Google TV and Android TV

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
