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
_recent 2,863 repos  2026-10-18..2026-11-01  stars>=40 · baseline 3,372 repos  2026-08-19..2026-10-17  stars>=150 · generated 2026-11-01 13:29 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **vfx** | 6 | 6 | 2.4k | 1.2k/d | 664/d | ▁▁▁▁▁▁▁▁▁▁▁▁▄█ | 2026-10-21 | [patch-gg/pixelfx](https://github.com/patch-gg/pixelfx) |
| 2 | **totk** (+tears, kingdom) | 6 | 6 | 3.8k | 1.1k/d | 1.0k/d | ▁▁▁▁▁▁▁▂▂▂▁▆█▇ | 2026-10-19 | [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) |
| 3 | **android-tv** (+google-tv, home-screen, debloat, tv-launcher, tv-style, 3 more) | 29 | 29 | 12.5k | 995/d | 416/d | ▂▆█▅▄▄▄▄▃▃▃▂▂▂ | 2026-10-18 | [simbasjungles/free-my-tv](https://github.com/simbasjungles/free-my-tv) |
| 4 | **tvs** (+tizen) | 13 | 13 | 10.4k | 874/d | 366/d | ▁▁▇█▆▅▄▆▆▅▃▃▃▂ | 2026-10-19 | [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) |
| 5 | **published** | 10 | 10 | 1.7k | 608/d | 172/d | ▁▁▁▁▁▁▁▂▆█▅▄▆▁ | 2026-10-26 | [yaojingang/GEOInflow](https://github.com/yaojingang/GEOInflow) |
| 6 | **png** | 10 | 10 | 1.3k | 494/d | 144/d | ▁▁▁▁▁▃▂▂▇▄▆█▅▃ | 2026-10-19 | [heydeer/pngdeer](https://github.com/heydeer/pngdeer) |
| 7 | **cs2** (+aegis) | 7 | 7 | 756 | 380/d | 229/d | ▁▁▁▁▁▁▁▁▁▁▁▁▂█ | 2026-10-18 | [oilcorporatebarn/aegis-skinfees](https://github.com/oilcorporatebarn/aegis-skinfees) |
| 8 | **ad-free** | 12 | 12 | 3.4k | 298/d | 153/d | ▄██▆▄▄▄▄▃▄▃▃▄▃ | 2026-10-18 | [Ansub/tv-detox](https://github.com/Ansub/tv-detox) |
| 9 | **zip** | 5 | 5 | 2.8k | 256/d | 46/d | ▁▁▁▁▁█▅▃▂▂▂▁▁▁ | 2026-10-18 | [xevrion/hatchzip](https://github.com/xevrion/hatchzip) |
| 10 | **supermimic** (+reproduction) | 9 | 9 | 2.1k | 254/d | 112/d | ▁▁▁▄█▅▃▅▇▅▄▅▃▂ | 2026-10-21 | [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **windows-app** (+utility, setup, software-engineering, unlocker, phone-tool, 95 more) | 335 | 335 | 53.2k | 43.6k/d | 15.2k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▄█ | 2026-10-18 | [darkareaminaret/MetaTrader-5-Bot](https://github.com/darkareaminaret/MetaTrader-5-Bot) | near-duplicate, flat-stars, same-day |
| 2 | **activator** (+windows-10, activation, kms, massgravel, office365, 22 more) | 135 | 135 | 11.0k | 3.7k/d | 3.7k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-10-28 | [Jerry24655/gtweak-portable](https://github.com/Jerry24655/gtweak-portable) | near-duplicate, same-day, flat-stars |
| 3 | **rpocket** (+telegram-bot-with-ai, telegrambot, playerbots, aimbot, claude-skills-library, 26 more) | 130 | 130 | 7.8k | 3.0k/d | 2.4k/d | ▁▁▁▁▁▁▁▁▂▁▁▃▁█ | 2026-10-23 | [OnCzar/Delivery-rpocket-Job](https://github.com/OnCzar/Delivery-rpocket-Job) | near-duplicate, flat-stars |
| 4 | **troubleshooting** (+game-guide, pc-gaming, steam-games, stuttering, game-specific, 32 more) | 56 | 56 | 3.3k | 1.6k/d | 985/d | ▁▁▁▁▁▁▁▂▁▁▁█▁▅ | 2026-10-22 | [FencerEngage/courier-dota2](https://github.com/FencerEngage/courier-dota2) | near-duplicate, same-day, flat-stars |
| 5 | **resocket** (+fps-tweak, n8n, claude-skills-creator) | 56 | 56 | 3.3k | 1.3k/d | 1.1k/d | ▁▁▁▁▁▁▁▁▁▁▁▃▁█ | 2026-10-23 | [Paladinyeti71292/resocket-FPS-Tweaker-Full](https://github.com/Paladinyeti71292/resocket-FPS-Tweaker-Full) | flat-stars |
| 6 | **resp** (+autoclicker-tool) | 59 | 59 | 3.7k | 1.3k/d | 1.1k/d | ▁▁▁▁▁▁▁▁▂▁▁▄▁█ | 2026-10-23 | [Wildange85773l/windows-fine-tuner-resp](https://github.com/Wildange85773l/windows-fine-tuner-resp) | near-duplicate, flat-stars |
| 7 | **php2shell** (+cve-2026-109618, cve-2026-109619, cve, rce, php, 4 more) | 33 | 30 | 9.8k | 913/d | 101/d | ▁▁▁█▅▄▂▂▂▁▁▁▁▁ | 2026-10-20 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 8 | **respocket** (+aio, soft, aax, yet, clap) | 31 | 31 | 2.0k | 746/d | 591/d | ▁▁▁▁▁▁▁▁▂▁▁▃▁█ | 2026-10-26 | [PrinceDruid/ZZZ-Respocket-AIO-Soft](https://github.com/PrinceDruid/ZZZ-Respocket-AIO-Soft) | flat-stars |
| 9 | **lag** (+fps-booster-no-lag, booster, fps-booster-software, fps-tweak, optimizer, 14 more) | 17 | 17 | 1.7k | 547/d | 364/d | ▂▁▁▁▂▂▁▁▃▁▁▄▂█ | 2026-10-18 | [SteersmanStronghold/Windows-Optimizer](https://github.com/SteersmanStronghold/Windows-Optimizer) | near-duplicate |
| 10 | **abliterated-models** (+uncensored-ai, uncensored-ai-model) | 5 | 5 | 998 | 133/d | 1/d | ▁▁▁▁▆▁▇▄█▁▁▁▁▁ | 2026-10-22 | [routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>vfx</b>: 6 repos, 2.4k stars</summary>

- [patch-gg/pixelfx](https://github.com/patch-gg/pixelfx) 2.1k★ 244 pixel art effects, every one a small piece of code. Plus a Claude Code skil…
- [jutsuhq/open-source-higgsfield](https://github.com/jutsuhq/open-source-higgsfield) 86★ Open-source Higgsfield AI alternatives on GitHub: every #OpenSourceHiggsfield p…
- [Humpalumps/ultra-elements](https://github.com/Humpalumps/ultra-elements) 78★ Real-time elemental spell VFX lab for three.js (WebGL2): 39 tunable spells
- [Smidle/Jeff-FX-forge](https://github.com/Smidle/Jeff-FX-forge) 54★ Jeff FX 1.0.1 — Godot 4.7 pixel VFX workshop. 82 presets, sprite-sheet export a…
- [hughesl431/After-Effects-Motion-Studio-2026](https://github.com/hughesl431/After-Effects-Motion-Studio-2026) 51★ Adobe After Effects 2026 professional motion graphics and VFX software for Wind…

</details>

<details><summary><b>totk</b>: 6 repos, 3.8k stars</summary>

- [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) 2.9k★ Static recompilation of The Legend of Zelda: Tears of the Kingdom to native Win…
- [kuraeow/ultratears](https://github.com/kuraeow/ultratears) 488★ Unofficial native Windows port of Tears of the Kingdom 1.4.3 using static recom…
- [OJZen/totk-mobile](https://github.com/OJZen/totk-mobile) 195★ Experimental native Tears of the Kingdom port for macOS and iOS.
- [Muhammad1259-sigma/totk-recomp](https://github.com/Muhammad1259-sigma/totk-recomp) 105★ Static recompilation of Zelda: Tears of the Kingdom 1.0.0 to Linux / Steam Deck…
- [FurkanAnc/totk-launcher](https://github.com/FurkanAnc/totk-launcher) 64★ Launcher for the Tears of the Kingdom PC recomp: settings, key rebinding, keybo…

</details>

<details><summary><b>android-tv</b>: 29 repos, 12.5k stars</summary>

- [simbasjungles/free-my-tv](https://github.com/simbasjungles/free-my-tv) 5.6k★ A fast, ad-free home screen for Google TV, LG webOS and Samsung Tizen. One butt…
- [humblemuzzu/dumbtv](https://github.com/humblemuzzu/dumbtv) 1.8k★ Take the ads, tracking and clutter out of your Fire TV over ADB, no root. Every…
- [udhaykumarbala/cleanyourtv-app](https://github.com/udhaykumarbala/cleanyourtv-app) 1.3k★ A community-built phone app for Clean Your TV: clean up an Android TV from your…
- [mihirgupta0900/tv-home](https://github.com/mihirgupta0900/tv-home) 703★ Debloat a slow, ad-filled Android TV over Wi-Fi and give it a fast Apple TV-sty…
- [op7418/guizang-tv](https://github.com/op7418/guizang-tv) 286★ 归藏电视：适配国内小米电视的简洁 Android 桌面，大字列表、壁纸轮播与 HDMI 直达。

</details>

<details><summary><b>tvs</b>: 13 repos, 10.4k stars</summary>

- [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) 8.6k★ 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for …
- [lasharor/cleanyourtv-WebOS](https://github.com/lasharor/cleanyourtv-WebOS) 372★ A clean home screen for rooted LG webOS TVs, with an optional debloat of LG's a…
- [OmkarK97/webos-vibehack](https://github.com/OmkarK97/webos-vibehack) 341★ Apple TV-style home screen for LG webOS TVs, a port of tv-vibehack
- [ecklf/lg-luma](https://github.com/ecklf/lg-luma) 274★ A native launcher for rooted LG webOS TVs
- [victaphu/glass-home-samsung-tv](https://github.com/victaphu/glass-home-samsung-tv) 206★ A minimal home screen for Samsung Tizen TVs: rotating nature photos, a glass do…

</details>

<details><summary><b>published</b>: 10 repos, 1.7k stars</summary>

- [yaojingang/GEOInflow](https://github.com/yaojingang/GEOInflow) 776★ Self-hosted web and AI crawler analytics for Generative Engine Optimization (GE…
- [routerhubSI/openrouter-alternative](https://github.com/routerhubSI/openrouter-alternative) 135★ OpenRouter alternative for uncensored AI LLM access — independent RouterHub giv…
- [Lookouteiseparator/droids-v1.5.2](https://github.com/Lookouteiseparator/droids-v1.5.2) 103★ Published: 2026-10-28
- [BranchLegendWhirl71/hexa-v2.6.0](https://github.com/BranchLegendWhirl71/hexa-v2.6.0) 102★ Published: 2026-10-28
- [Centaurbinexplode/nova-v1.9.2](https://github.com/Centaurbinexplode/nova-v1.9.2) 102★ Published: 2026-10-28

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
