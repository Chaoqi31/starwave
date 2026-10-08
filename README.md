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
_recent 1,908 repos  2026-09-24..2026-10-08  stars>=40 · baseline 2,858 repos  2026-07-26..2026-09-23  stars>=150 · generated 2026-10-08 13:34 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **ps4** | 9 | 9 | 1.4k | 935/d | 308/d | ▁▁▁▁▁▁▁▁▁▂▃▂▂█ | 2026-09-30 | [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) |
| 2 | **motion-graphics** | 18 | 16 | 8.7k | 844/d | 768/d | ▁▂▅█▇▄▄▄▄▄▅▅▅▇ | 2026-09-25 | [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 3 | **carplay** | 8 | 7 | 8.1k | 627/d | 929/d | ▁▁▁▂▃▅▄▄▅▄▇▆▅█ | 2026-09-24 | [shihabal3amri/DiPlay](https://github.com/shihabal3amri/DiPlay) |
| 4 | **there** | 5 | 5 | 4.6k | 375/d | 928/d | ▁▂▁▂▁▁▂▁▂▁▃▃▆█ | 2026-09-24 | [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) |
| 5 | **steamos** (+steamvr) | 5 | 5 | 4.2k | 341/d | 648/d | ▁▁▁▂▃▂▂▂▃█▅▇█▇ | 2026-09-24 | [Droid-Deck/DroidDeck](https://github.com/Droid-Deck/DroidDeck) |
| 6 | **size** (+font) | 9 | 9 | 615 | 149/d | 74/d | ▂▂▂▂▆▂▂▂▂▆▄▄▅█ | 2026-09-24 | [yfyeung/PrunedCTC](https://github.com/yfyeung/PrunedCTC) |
| 7 | **pick** | 6 | 6 | 914 | 129/d | 113/d | ▁▁▁▁▁▁▁▅▇█▄▅▅▅ | 2026-09-26 | [strands-labs/strands-decider](https://github.com/strands-labs/strands-decider) |
| 8 | **muse.ai** | 6 | 6 | 963 | 82/d | 33/d | ▁█▅▄▄▅▃▃▃▂▃▂▂▂ | 2026-09-25 | [win4r/MuseAI-Skills](https://github.com/win4r/MuseAI-Skills) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **reimplementation** (+clean-room) | 11 | 4 | 39.1k | 5.9k/d | 10.3k/d | ▁▁▁▁▁▁▁▁▁▁▂▂▆█ | 2026-09-30 | [storytold/photocraft](https://github.com/storytold/photocraft) | few-owners |
| 2 | **minimum** (+top-up, pay-as-you-go, image2, image2.5, llm-api-gateway, 186 more) | 587 | 340 | 32.6k | 3.3k/d | 5.3k/d | ▁▂▂▁▂▂▂▁▁▇███▄ | 2026-09-24 | [azle5biyd9td956/pixverse6-pixverse-v6-api](https://github.com/azle5biyd9td956/pixverse6-pixverse-v6-api) | near-duplicate, flat-stars |
| 3 | **stellar** (+soroban, settlement) | 12 | 7 | 1.6k | 1.2k/d | 478/d | ▁▁▁▁▁▁▁▁▁▁▂▃▁█ | 2026-10-04 | [Stellar-hush/hush](https://github.com/Stellar-hush/hush) | same-day |
| 4 | **argolink** (+fields) | 11 | 11 | 482 | 121/d | 159/d | ▁▁▁▁▁▁▁▁▁▁▁▅█▂ | 2026-10-04 | [eliasbrookner7/seedance-2-5-api-provider](https://github.com/eliasbrookner7/seedance-2-5-api-provider) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>ps4</b>: 9 repos, 1.4k stars</summary>

- [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) 774★ Native PC port of P.T. (runs from your own PS4 game files)
- [bigmak94/AstroQuest](https://github.com/bigmak94/AstroQuest) 200★ ASTRO BOT Rescue Mission (PS4, PlayStation VR) in virtual reality on Meta Quest…
- [iHaiDeeZ/DolphinPS4](https://github.com/iHaiDeeZ/DolphinPS4) 72★ Dolphin (GameCube/Wii emulator) for jailbroken PS4: Vulkan on the PS4 GPU, PSP-…
- [GronedWaffel/etahen-11.00-13.60](https://github.com/GronedWaffel/etahen-11.00-13.60) 67★ Unofficial etaHEN 2.5B unified PS5 11.00-13.60 port: Toolbox, plugins and PS4/P…
- [aarvsn/Ryty](https://github.com/aarvsn/Ryty) 63★ Tool for porting PlayStation 4 & 5 executables to Windows, MacOS and Linux

</details>

<details><summary><b>motion-graphics</b>: 18 repos, 8.7k stars</summary>

- [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) 3.0k★ A growing collection of viral videos made with Claude Opus 5.5 and the prompts …
- [feitangyuan/onetake](https://github.com/feitangyuan/onetake) 1.9k★ Motion films that never cut to the next slide: every beat grows out of the one …
- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 1.4k★ Claude Code skill for short films with no video model: 43 film styles, each a s…
- [Barty-Bart/motion-graphics](https://github.com/Barty-Bart/motion-graphics) 499★ Motion-graphics skills for Claude Code and Codex.
- [zhuyansen/awesome-claude-video-skills](https://github.com/zhuyansen/awesome-claude-video-skills) 481★ Open-source skills and toolkits that let Claude Code, Codex and other coding ag…

</details>

<details><summary><b>carplay</b>: 8 repos, 8.1k stars</summary>

- [shihabal3amri/DiPlay](https://github.com/shihabal3amri/DiPlay) 7.1k★ Independent CarPlay receiver for compatible Android head units. Wired and wirel…
- [yuedizhibo/MHI2Q-CarPlay-AltScreen](https://github.com/yuedizhibo/MHI2Q-CarPlay-AltScreen) 322★ 补全 Audi MHI2Q / MIB2 High AUG22 的 CarPlay AltScreen 逻辑，让 CarPlay 第二屏显示在 Virtual…
- [youcci/playport](https://github.com/youcci/playport) 256★ Wireless CarPlay in your browser — a server-side receiver that turns any screen…
- [Roylyl/WinPlay](https://github.com/Roylyl/WinPlay) 166★ WinPlay是一款开源Windows无线CarPlay接收软件，支持本机热点与局域网连接，让你在电脑上显示和操作iPhone的CarPlay界面。
- [harman-f/mhi2_altscreen_carplay](https://github.com/harman-f/mhi2_altscreen_carplay) 101★ Open research for CarPlay AltScreen/Auxiliary Screen navigation in MQB Virtual …

</details>

<details><summary><b>there</b>: 5 repos, 4.6k stars</summary>

- [Ebony-Vinyl/dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) 4.2k★ 在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 DeepSeek V4.1 Flash、Kimi K3 在内的前沿模型——完…
- [scaleapi/agentenv-framework](https://github.com/scaleapi/agentenv-framework) 197★ Creating realistic RL environments requires collaboration between researchers, …
- [SpeakingOfBrad/BIGWORDS.PAGE](https://github.com/SpeakingOfBrad/BIGWORDS.PAGE) 103★ Full-screen text for any screen. The message lives in the URL, so there's no ba…
- [SamGu-NRX/BaseScanning](https://github.com/SamGu-NRX/BaseScanning) 85★ Splat! There goes your battery. BaseScanning is an E2E, worry-free iOS workflow…
- [xDAnkit/system-design-journey](https://github.com/xDAnkit/system-design-journey) 47★ System design resources and examples for beginner to expert, Season 1. This is …

</details>

<details><summary><b>steamos</b>: 5 repos, 4.2k stars</summary>

- [Droid-Deck/DroidDeck](https://github.com/Droid-Deck/DroidDeck) 3.4k★ DroidDeck brings the SteamOS experience to Android
- [DeeJanuz/frametop](https://github.com/DeeJanuz/frametop) 256★ Multi-screen KDE Plasma desktop and universal 3D mouse for the Valve Steam Fram…
- [hashtagbasit/SteamOS-ARM-Port](https://github.com/hashtagbasit/SteamOS-ARM-Port) 230★ Unofficial SteamOS for Snapdragon handhelds and tablets
- [fxgl/steamac](https://github.com/fxgl/steamac) 215★ Valve's official ARM64 SteamOS in a lightweight VM on Apple Silicon: libkrun + …
- [saphid/frame-control](https://github.com/saphid/frame-control) 83★ Frame Control: a free, open-source app for Valve Steam Frame on macOS, Windows,…

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
