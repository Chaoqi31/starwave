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
_recent 2,631 repos  2026-11-10..2026-11-24  stars>=40 · baseline 4,108 repos  2026-09-11..2026-11-09  stars>=150 · generated 2026-11-24 17:49 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **utilities** (+cli-utility, winforms, statistics, rpg, system-utilities, 9 more) | 24 | 24 | 2.5k | 1.5k/d | 0/d | ▂▁▁▃▃▁▁▅▁█▁▁▁▁ | 2026-11-10 | [brave-plum-co/leonardo-ai-desktop](https://github.com/brave-plum-co/leonardo-ai-desktop) |
| 2 | **gta6** (+clipper) | 10 | 10 | 1.8k | 1.1k/d | 443/d | ▁▁▁▁▁▁▁▁▁▁▁▁▃█ | 2026-11-12 | [Ahmet-Dedeler/awesome-gta6-reverse-engineering](https://github.com/Ahmet-Dedeler/awesome-gta6-reverse-engineering) |
| 3 | **adobe** | 13 | 13 | 1.9k | 634/d | 321/d | ▁▁▁▁▁▂▁▇▁▅▁█▂▄ | 2026-11-15 | [MBPERFORMANCE/adobe-lightroom-full](https://github.com/MBPERFORMANCE/adobe-lightroom-full) |
| 4 | **delivers** | 5 | 5 | 605 | 492/d | 97/d | ▁▁▁▁▁▁▁▁▁▄▁▁▁█ | 2026-11-18 | [loveplug7/wave-velocity-executor-keyless-lite-loader-100-bemarin](https://github.com/loveplug7/wave-velocity-executor-keyless-lite-loader-100-bemarin) |
| 5 | **changer** (+loadout) | 9 | 9 | 1.7k | 461/d | 158/d | ▁▁▁▁▁▁▁█▁▁▁▃▂▃ | 2026-11-10 | [D1ngtalk/iap2loc](https://github.com/D1ngtalk/iap2loc) |
| 6 | **agy** | 8 | 8 | 2.4k | 358/d | 362/d | ▁▁▁▂▁▂▃▂▂▃▅▄█▇ | 2026-11-11 | [INK-Q/agy-fast](https://github.com/INK-Q/agy-fast) |
| 7 | **macro** | 7 | 7 | 838 | 355/d | 130/d | ▁▁▁▁▁▁▁█▂▁▁▂▂▆ | 2026-11-14 | [cavito142/omniclicker-autoclicker](https://github.com/cavito142/omniclicker-autoclicker) |
| 8 | **fable** | 7 | 7 | 1.8k | 145/d | 45/d | ▃█▆▃▃▃▄▇▃▄▃▂▂▂ | 2026-11-10 | [realcodebear/saltline-fable-5.2](https://github.com/realcodebear/saltline-fable-5.2) |
| 9 | **task-management** | 5 | 5 | 856 | 116/d | 187/d | ▁▁▁▁▁▁▁▁▁▄▁▁▂█ | 2026-11-13 | [hovocope135-tech/DSH-projects](https://github.com/hovocope135-tech/DSH-projects) |
| 10 | **osint-tool** (+socmint) | 8 | 8 | 1.2k | 105/d | 24/d | ▁▁▁█▄▂▃▄▁▁▁▁▂▁ | 2026-11-13 | [StormBrawlerSack/legwork-osint-ai-investigator](https://github.com/StormBrawlerSack/legwork-osint-ai-investigator) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **directx-11** (+multithreading, performance-tuning, cmake, directx-12, win32-api, 54 more) | 133 | 132 | 17.9k | 17.7k/d | 834/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-15 | [isadhanjana-cpu/gta-5-enhanced-mod-menu](https://github.com/isadhanjana-cpu/gta-5-enhanced-mod-menu) | near-duplicate, same-day, flat-stars |
| 2 | **software-engineering** (+utility, windows-app, scripts, acrobat, crack, 2 more) | 65 | 65 | 19.9k | 6.4k/d | 5.7k/d | ▁▁▁▁▂▁▁▁▁▁▁█▂▁ | 2026-11-10 | [Adabi0304/studioonepro7-release](https://github.com/Adabi0304/studioonepro7-release) | same-day, flat-stars |
| 3 | **ai--manus** (+gemeni, manus, typescript-sdk, general-purpose, solidjs, 23 more) | 306 | 245 | 54.4k | 5.0k/d | 0/d | ▁▁▁█▇▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [topapothecarycanal/ai--manus2.0](https://github.com/topapothecarycanal/ai--manus2.0) | near-duplicate, same-day, flat-stars |
| 4 | **cli-app** (+json-rpc, trading-systems, defi, orderbook, quantitative-trading, 51 more) | 28 | 28 | 3.6k | 3.6k/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-24 | [lesuzuki40434/bip39-mnemonic-seed-balance-scanner-v3](https://github.com/lesuzuki40434/bip39-mnemonic-seed-balance-scanner-v3) | near-duplicate, same-day, flat-stars |
| 5 | **trial-version** (+trial, windows-software, latest, shape, download, 44 more) | 273 | 273 | 28.6k | 2.9k/d | 211/d | ▁█▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-10 | [hisdelikat/total-commander](https://github.com/hisdelikat/total-commander) | same-day, flat-stars |
| 6 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 28 more) | 169 | 169 | 28.7k | 2.6k/d | 0/d | ▁▁▁▆█▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, same-day, flat-stars |
| 7 | **community-driven** (+community, feature-rich) | 28 | 28 | 4.7k | 1.2k/d | 83/d | ▁▁▁▁▁▁▁█▁▁▁▁▁▁ | 2026-11-11 | [LeonidaReforge/Leonida](https://github.com/LeonidaReforge/Leonida) | same-day, flat-stars |
| 8 | **trainer** (+cheat, fling, hacks) | 25 | 25 | 4.5k | 1.2k/d | 478/d | ▁▁▁▁▁▁▁█▁▁▁▃▁▂ | 2026-11-15 | [tweak-for-me/impulse](https://github.com/tweak-for-me/impulse) | same-day, flat-stars |
| 9 | **aichecker** (+config-checker, gemeni-checker, gemini-config-checker, lim, lim-seo, 10 more) | 21 | 21 | 9.7k | 1.1k/d | 0/d | ▁▁▁▁▁█▁▁▁▁▁▁▁▁ | 2026-11-15 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 10 | **cli-utility** (+winforms, utilities, system-utilities) | 7 | 7 | 915 | 915/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-24 | [eriksson49/kontakt-8-portable-library-manager-portable](https://github.com/eriksson49/kontakt-8-portable-library-manager-portable) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>utilities</b>: 24 repos, 2.5k stars</summary>

- [brave-plum-co/leonardo-ai-desktop](https://github.com/brave-plum-co/leonardo-ai-desktop) 303★ Leonardo AI 2026 desktop setup with text-to-image generation using fine-tuned m…
- [uza51162-stack/wintoolkit-portable-toolkit](https://github.com/uza51162-stack/wintoolkit-portable-toolkit) 153★ WinToolKit Portable Toolkit: App Management, System Info, and setup for Windows…
- [yuuki200/microsoft-excel-365](https://github.com/yuuki200/microsoft-excel-365) 153★ Microsoft Excel 365: Desktop spreadsheet for reports, budgets, lists, charts, a…
- [Wozniak947/lossless-scaling-3-dlss4-unlocked-download](https://github.com/Wozniak947/lossless-scaling-3-dlss4-unlocked-download) 127★ Lossless Scaling 3.1 + DLSS 4 Multi-Frame Generation (LSFG 3.0 4x) Portable Unl…
- [liu9029/lossless-scaling-3-dlss4-unlocked-win11](https://github.com/liu9029/lossless-scaling-3-dlss4-unlocked-win11) 114★ Lossless Scaling 3.1 + DLSS 4 Multi-Frame Generation (LSFG 3.0 4x) Portable Unl…

</details>

<details><summary><b>gta6</b>: 10 repos, 1.8k stars</summary>

- [Ahmet-Dedeler/awesome-gta6-reverse-engineering](https://github.com/Ahmet-Dedeler/awesome-gta6-reverse-engineering) 670★ Curated list of open-source GTA VI (GTA 6) reverse engineering tools, RAGE 9 / …
- [lenguyenkhang816792-arch/gta-6-pc-emulator](https://github.com/lenguyenkhang816792-arch/gta-6-pc-emulator) 340★ GTA 6 PC Emulator: Your Portal to Grand Theft Auto VI on Windows
- [valvarez8840/PClabs](https://github.com/valvarez8840/PClabs) 163★ 
- [jemimaravelomanantsoa020-tech/gta6-preload-emulator](https://github.com/jemimaravelomanantsoa020-tech/gta6-preload-emulator) 151★ Gta6 Preload Emulator: simulates preload behavior to test loading workflows.
- [mostaphabname52-cloud/gta6-120fps-tajarin](https://github.com/mostaphabname52-cloud/gta6-120fps-tajarin) 147★ Configurable frame-rate targeting for GTA6 with adjustable performance profiles.

</details>

<details><summary><b>adobe</b>: 13 repos, 1.9k stars</summary>

- [MBPERFORMANCE/adobe-lightroom-full](https://github.com/MBPERFORMANCE/adobe-lightroom-full) 337★ Adobe Lightroom Full Desktop for Windows: Complete Feature Set with Smooth Work…
- [ali7080/adobe-air-sdk](https://github.com/ali7080/adobe-air-sdk) 337★ Adobe AIR SDK: Cross-Platform Desktop App Development with AJAX, HTML, and Flash
- [FloorTurtleResurrect/free-adobe-activation](https://github.com/FloorTurtleResurrect/free-adobe-activation) 194★ simple tutorial adobe activation with GenP
- [kokarai/premiere-elements](https://github.com/kokarai/premiere-elements) 154★ Premiere Elements: Story-First Home Video Editing Workflow
- [yahyaouiraouf31-sys/l-ve-light-shadow-library](https://github.com/yahyaouiraouf31-sys/l-ve-light-shadow-library) 153★ Löve Light Shadow Library: 2D light and shadow rendering for Löve2D

</details>

<details><summary><b>delivers</b>: 5 repos, 605 stars</summary>

- [loveplug7/wave-velocity-executor-keyless-lite-loader-100-bemarin](https://github.com/loveplug7/wave-velocity-executor-keyless-lite-loader-100-bemarin) 177★ Wave Velocity Executor Keyless Lite Loader 100 Bemarin delivers in-game script …
- [Tenert007/after-effects-tadelin-motion-design](https://github.com/Tenert007/after-effects-tadelin-motion-design) 149★ After Effects Tadelin Motion Design delivers structured motion-design tooling f…
- [athanstarr-del/roblox-game-hub-fisch-auto-cast-instant-raren](https://github.com/athanstarr-del/roblox-game-hub-fisch-auto-cast-instant-raren) 143★ Roblox Game Hub Fisch Auto Cast Instant Raren delivers Fisch auto-casting and i…
- [hiteshrao1022006-ship-it/microsoft-visio-orveven](https://github.com/hiteshrao1022006-ship-it/microsoft-visio-orveven) 68★ Microsoft Visio Orveven delivers diagramming tools for technical and business v…
- [pgmergulhao75-dot/openbb-calvona-market-research](https://github.com/pgmergulhao75-dot/openbb-calvona-market-research) 68★ Openbb Calvona Market Research delivers structured market data analysis and res…

</details>

<details><summary><b>changer</b>: 9 repos, 1.7k stars</summary>

- [D1ngtalk/iap2loc](https://github.com/D1ngtalk/iap2loc) 498★ A cross-platform iOS location changer client. 跨平台 iOS 定位客户端，通过 iAP2 协议向 iOS 设备下…
- [joelkreasey-tech/samsung-android-mtp-samfw-tool-v5-mtp-bemaron](https://github.com/joelkreasey-tech/samsung-android-mtp-samfw-tool-v5-mtp-bemaron) 177★ Connects Samsung Android devices over MTP to transfer files through a guided de…
- [Tchikov23/cs2-cosmetic-swapper](https://github.com/Tchikov23/cs2-cosmetic-swapper) 153★ CS2 Cosmetic Swapper - Client-Side Skin Changer for Windows 10/11
- [Yunnix001/fortnite-skin-changer](https://github.com/Yunnix001/fortnite-skin-changer) 153★ Fortnite Skin Changer: Preview and Customize Rare Skins Locally
- [ayaanra644/valorant-match-tracker](https://github.com/ayaanra644/valorant-match-tracker) 153★ Valorant Match Tracker: Match History and Agent Pick Rates

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
