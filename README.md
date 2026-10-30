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
_recent 2,211 repos  2026-10-16..2026-10-30  stars>=40 · baseline 3,349 repos  2026-08-17..2026-10-15  stars>=150 · generated 2026-10-30 12:59 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **android-tv** (+google-tv, debloat, fire-tv, tv-style, home-screen, 8 more) | 30 | 29 | 57.9k | 4.7k/d | 2.5k/d | ▁▁▃▆█▇▅▄▅▅▄▃▃▃ | 2026-10-16 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) |
| 2 | **kingdom** (+tears, totk) | 6 | 6 | 8.3k | 1.6k/d | 568/d | ▁▁███▇▄▄▃▄▄▃▃█ | 2026-10-17 | [ly05010419/MacNativeGames](https://github.com/ly05010419/MacNativeGames) |
| 3 | **tvs** (+webos, tizen, lg-tv) | 15 | 15 | 10.2k | 1.0k/d | 610/d | ▁▁▁▁▇█▆▅▄▆▆▅▃▃ | 2026-10-17 | [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) |
| 4 | **purge** (+inject) | 10 | 9 | 6.1k | 609/d | 407/d | ▁▂▁▂██▄▂▂▄▅▄▄▂ | 2026-10-16 | [kingcharleslzy-ai/dsh-purge](https://github.com/kingcharleslzy-ai/dsh-purge) |
| 5 | **supermimic** (+reproduction) | 9 | 9 | 2.0k | 357/d | 197/d | ▁▁▁▁▁▄█▅▃▅▇▅▄▅ | 2026-10-21 | [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) |
| 6 | **health** | 8 | 8 | 951 | 354/d | 33/d | ▁▂▃▂▁▄▅▂▃█▁▁▄▁ | 2026-10-16 | [mike-vops93s1/Valorant-ESP-Advanced-Player-Visual-Overlay-2026](https://github.com/mike-vops93s1/Valorant-ESP-Advanced-Player-Visual-Overlay-2026) |
| 7 | **ad-free** | 9 | 9 | 2.8k | 306/d | 153/d | ▁▁▄██▅▄▃▄▃▃▄▃▃ | 2026-10-18 | [Ansub/tv-detox](https://github.com/Ansub/tv-detox) |
| 8 | **moss** (+moss-image) | 12 | 12 | 3.1k | 295/d | 146/d | ▇▆██▅▆▇▆▅▄▆▄▄▅ | 2026-10-16 | [OpenMOSS/MOSS-Image](https://github.com/OpenMOSS/MOSS-Image) |
| 9 | **secure** | 6 | 6 | 1.0k | 266/d | 104/d | ▁▁▂▄▄▁▂▃▄▃▃█▄▅ | 2026-10-17 | [eliasbiondo/antirion](https://github.com/eliasbiondo/antirion) |
| 10 | **yandex** | 7 | 7 | 1.3k | 176/d | 181/d | ▁▁▁▁▁▁▃▂▅▃█▅▇▃ | 2026-10-21 | [Marker284/yandex-station-extended](https://github.com/Marker284/yandex-station-extended) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **activated** (+pre-activated, ready-to-run, setup, immediate, crack, 30 more) | 134 | 134 | 15.0k | 10.8k/d | 208/d | ▁██▁▁▂▁▁▁▁▂▁▃▂ | 2026-10-17 | [OriginOstrichSignify/Photo-Commander](https://github.com/OriginOstrichSignify/Photo-Commander) | near-duplicate, flat-stars, same-day |
| 2 | **troubleshooting** (+game-guide, pc-gaming, steam-games, game-specific, graphics-settings, 27 more) | 46 | 46 | 2.2k | 1.9k/d | 640/d | ▁▁▁▁▁▁▁▁▁▂▁▁▁█ | 2026-10-22 | [NeonToShadow/fps-boost-2026-windows-gaming-optimizer-resp](https://github.com/NeonToShadow/fps-boost-2026-windows-gaming-optimizer-resp) | same-day, flat-stars |
| 3 | **utility** | 27 | 27 | 2.3k | 1.2k/d | 192/d | ▁▁▆▄▂▂▂▂▅▇▂▅▄█ | 2026-10-18 | [Manan-Santoki/OpenShelf](https://github.com/Manan-Santoki/OpenShelf) | flat-stars |
| 4 | **php2shell** (+cve-2026-109618, cve-2026-109619, rce, cve, poc, 4 more) | 31 | 28 | 9.6k | 1.1k/d | 121/d | ▁▁▁▁▁█▅▄▂▂▂▁▁▁ | 2026-10-20 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 5 | **lag** (+fps-booster-no-lag, rpocket, booster, fps-booster-software, fps-tweak, 14 more) | 19 | 19 | 1.3k | 303/d | 155/d | ▁▁▄▁▁▁▁▂▁▂▆▁▁█ | 2026-10-18 | [nickn-eng1989k7/Fortnite-FPS-Booster-Frame-Rate-Latency-Tuning-for-Windows](https://github.com/nickn-eng1989k7/Fortnite-FPS-Booster-Frame-Rate-Latency-Tuning-for-Windows) | near-duplicate |
| 6 | **aion** (+aion-2, aion2, mmorpg, timer, overlay, 5 more) | 14 | 14 | 859 | 227/d | 1/d | ▁▁▁▁▁▁▁▁▁█▁▁▁▁ | 2026-10-24 | [SupervisorScrew/AION-2-Cheat](https://github.com/SupervisorScrew/AION-2-Cheat) | same-day |
| 7 | **auto-scaling** (+scaling, centralized, utilizes, enables, within) | 24 | 9 | 2.8k | 214/d | 897/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▁ | 2026-10-17 | [bagusprts/OutlineWeld](https://github.com/bagusprts/OutlineWeld) | same-day, few-owners, flat-stars |
| 8 | **abliterated-models** (+uncensored-ai, uncensored-ai-model, abliterated, anthropic-compatible) | 5 | 5 | 893 | 172/d | 2/d | ▁▁▁▁▁▁▆▁▆▄█▁▁▁ | 2026-10-22 | [routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) | near-duplicate |
| 9 | **rpocket** (+esp, item) | 11 | 11 | 655 | 141/d | 117/d | ▁▁▁▁▁▁▁▂▁▁▆▁▁█ | 2026-10-23 | [OnCzar/Delivery-rpocket-Job](https://github.com/OnCzar/Delivery-rpocket-Job) | same-day |
| 10 | **resp** | 8 | 8 | 498 | 95/d | 84/d | ▁▁▁▁▁▁▁▃▁▁▆▁▁█ | 2026-10-23 | [Wildange85773l/windows-fine-tuner-resp](https://github.com/Wildange85773l/windows-fine-tuner-resp) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>android-tv</b>: 30 repos, 57.9k stars</summary>

- [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) 46.1k★ Debloat any Android or Google TV over Wi-Fi and get an Apple TV-style home.
- [simbasjungles/free-my-tv](https://github.com/simbasjungles/free-my-tv) 5.4k★ A fast, ad-free home screen for Google TV, LG webOS and Samsung Tizen. One butt…
- [humblemuzzu/dumbtv](https://github.com/humblemuzzu/dumbtv) 1.8k★ Take the ads, tracking and clutter out of your Fire TV over ADB, no root. Every…
- [udhaykumarbala/cleanyourtv-app](https://github.com/udhaykumarbala/cleanyourtv-app) 1.1k★ A community-built phone app for Clean Your TV: clean up an Android TV from your…
- [mihirgupta0900/tv-home](https://github.com/mihirgupta0900/tv-home) 678★ Debloat a slow, ad-filled Android TV over Wi-Fi and give it a fast Apple TV-sty…

</details>

<details><summary><b>kingdom</b>: 6 repos, 8.3k stars</summary>

- [ly05010419/MacNativeGames](https://github.com/ly05010419/MacNativeGames) 6.5k★ Play your own Tears of the Kingdom and Breath of the Wild natively on Apple sil…
- [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) 996★ Static recompilation of The Legend of Zelda: Tears of the Kingdom to native Win…
- [kuraeow/ultratears](https://github.com/kuraeow/ultratears) 440★ Unofficial native Windows port of Tears of the Kingdom 1.4.3 using static recom…
- [OJZen/totk-mobile](https://github.com/OJZen/totk-mobile) 191★ Experimental native Tears of the Kingdom port for macOS and iOS.
- [Muhammad1259-sigma/totk-recomp](https://github.com/Muhammad1259-sigma/totk-recomp) 85★ Static recompilation of Zelda: Tears of the Kingdom 1.0.0 to Linux / Steam Deck…

</details>

<details><summary><b>tvs</b>: 15 repos, 10.2k stars</summary>

- [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) 8.0k★ 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for …
- [OmkarK97/webos-vibehack](https://github.com/OmkarK97/webos-vibehack) 336★ Apple TV-style home screen for LG webOS TVs, a port of tv-vibehack
- [lasharor/cleanyourtv-WebOS](https://github.com/lasharor/cleanyourtv-WebOS) 327★ A clean home screen for rooted LG webOS TVs, with an optional debloat of LG's a…
- [rudra-avatar/Hearth](https://github.com/rudra-avatar/Hearth) 271★ Hearth: a fast, calm home screen for LG WebOS TVs
- [danielthejoker18/FreeMyTvWebOS](https://github.com/danielthejoker18/FreeMyTvWebOS) 268★ Fast, ad-free 60fps home screen for LG webOS TVs: frosted glass app shelf, live…

</details>

<details><summary><b>purge</b>: 10 repos, 6.1k stars</summary>

- [kingcharleslzy-ai/dsh-purge](https://github.com/kingcharleslzy-ai/dsh-purge) 3.5k★ dsh-purge Community · DeepSeek Harness 社区维护版：宿主兼容、状态诊断、提示词管理、更新与本机备份回滚。基于小杨 / Y…
- [ZiChuanLan/agent-purge](https://github.com/ZiChuanLan/agent-purge) 904★ One persona, many coding agents. Replace or inject system prompts across codex,…
- [ZiChuanLan/pi-purge](https://github.com/ZiChuanLan/pi-purge) 659★ pi extension: /purge swaps pi's built-in assistant persona for your own prompt …
- [WoYun520/dsh-purge](https://github.com/WoYun520/dsh-purge) 477★ DeepSeek Harness 破甲 (mirror of mmparko/dsh-purge) — 全量镜像：全部分支/100 个 tag/完整提交历史。…
- [evilevil/dsh-purge-021rc2](https://github.com/evilevil/dsh-purge-021rc2) 186★ dsh-purge 社区适配版：上游已停更，这里让它继续跑在 DeepSeek Harness 0.2.1-rc.2 上（基于 1.1.72）

</details>

<details><summary><b>supermimic</b>: 9 repos, 2.0k stars</summary>

- [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) 745★ vibe coded supermimic within 1h, LAFAN passed within 1.5 gpuh training
- [miao-org/awesome-supermimic](https://github.com/miao-org/awesome-supermimic) 384★ A curated collection of SuperMimic implementations, extensions, demos, and reso…
- [CuboiLeo/SuperMimic-Reproduced](https://github.com/CuboiLeo/SuperMimic-Reproduced) 332★ Reproduction of SuperMimic (arXiv:2610.28480): learned differentiable world mod…
- [Motphys/Uni-SuperMimic](https://github.com/Motphys/Uni-SuperMimic) 212★ SuperMimic-UniLab: An Independent reproduction of SuperMimic on UniLab for whol…
- [CumulusAlpha/Dex-Supermimic](https://github.com/CumulusAlpha/Dex-Supermimic) 90★ This is a reproduction of SuperMimic for dexterous hand manipulation tasks.

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
