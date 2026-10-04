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
_recent 2,030 repos  2026-09-20..2026-10-04  stars>=40 · baseline 2,756 repos  2026-07-22..2026-09-19  stars>=150 · generated 2026-10-04 12:25 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **opus** (+motion-graphics) | 26 | 25 | 9.4k | 1.1k/d | 570/d | ▁▁▂▇▅▃▅█▇▄▄▄▄▄ | 2026-09-22 | [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 2 | **muse** (+muse.ai) | 14 | 14 | 3.3k | 907/d | 568/d | ▁▁▁▁▁▄▃▂▂▃▃▃▆█ | 2026-09-23 | [facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk) |
| 3 | **options** | 6 | 6 | 3.8k | 476/d | 332/d | ▁▁▁▁▁▁▁▁█▆▂▃▃▇ | 2026-09-20 | [Avenuezensport/efjvysuz](https://github.com/Avenuezensport/efjvysuz) |
| 4 | **films** | 9 | 9 | 4.0k | 469/d | 291/d | ▁▁▂▂▃▃▇▅▅▃█▅▄▂ | 2026-09-22 | [feitangyuan/onetake](https://github.com/feitangyuan/onetake) |
| 5 | **revolutionize** (+cutting) | 6 | 6 | 798 | 439/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-10-02 | [Splendorchucall/BorisFX](https://github.com/Splendorchucall/BorisFX) |
| 6 | **feature** | 9 | 8 | 1.2k | 233/d | 84/d | ▁▁▁▁▁▁▁▄█▅▄▄▃▃ | 2026-09-21 | [rushiranpise/Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next) |
| 7 | **steamos** | 5 | 5 | 1.9k | 192/d | 334/d | ▁▁▁▂▁▁▁▂▃▃▂▂▃█ | 2026-09-23 | [Droid-Deck/DroidDeck](https://github.com/Droid-Deck/DroidDeck) |
| 8 | **ledger** | 7 | 7 | 520 | 132/d | 41/d | ▁▁▁▁▃▄▁▇▁█▆▆▃▂ | 2026-09-21 | [architectds/collabosm](https://github.com/architectds/collabosm) |
| 9 | **typed-decision** | 5 | 5 | 1.2k | 111/d | 145/d | ▁▁▂▂▂▂▃▄▆█▆▅▆▆ | 2026-09-22 | [angel291592/Intent-Router](https://github.com/angel291592/Intent-Router) |
| 10 | **checker** | 6 | 6 | 625 | 105/d | 25/d | ▁▁▁▁▄▅█▁▁▄▃▂▁▃ | 2026-09-21 | [ashleydarosa/CC-Checker-Validator-Generator](https://github.com/ashleydarosa/CC-Checker-Validator-Generator) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **providing** (+streamlines, professional, optimizes, utility, enhances, 27 more) | 80 | 80 | 15.0k | 8.0k/d | 0/d | ▁▁▁▁▁▁▁▁▁█▁▁▁▁ | 2026-09-28 | [BlackCrewmanFringe/AutoCad](https://github.com/BlackCrewmanFringe/AutoCad) | same-day, flat-stars |
| 2 | **trainer** (+forge, cheat, game-trainer, trainers, pc-game, 144 more) | 589 | 589 | 35.8k | 3.6k/d | 11.0k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-09-20 | [rehan-remade/universal-modder](https://github.com/rehan-remade/universal-modder) | near-duplicate, same-day, flat-stars |
| 3 | **configurations** | 16 | 16 | 2.8k | 1.6k/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-10-02 | [GreenSorcererShears/SolidWorks-CAD](https://github.com/GreenSorcererShears/SolidWorks-CAD) | same-day |
| 4 | **pay-as-you-go** (+minimum, top-up, image2, image2.5, llm-api-gateway, 57 more) | 115 | 85 | 7.0k | 947/d | 660/d | ▁▁▁▁▁▆▄▁▆▃▃▁▁█ | 2026-09-24 | [azle5biyd9td956/pixverse6-pixverse-v6-api](https://github.com/azle5biyd9td956/pixverse6-pixverse-v6-api) | near-duplicate, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>opus</b>: 26 repos, 9.4k stars</summary>

- [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) 1.8k★ A growing collection of viral videos made with Claude Opus 5.5 and the prompts …
- [JohnHeibel/PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) 1.8k★ Source code for the Claude Opus 5.5 music video for I'm Upping My P(doom)
- [dgreenheck/tidewater](https://github.com/dgreenheck/tidewater) 1.1k★ Coastal town built with Opus 5.5
- [riba2534/claude-opus-5-5-demo](https://github.com/riba2534/claude-opus-5-5-demo) 981★ claude-opus-5-5-demo
- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 918★ Claude Code skill for short films with no video model: 43 film styles, each a s…

</details>

<details><summary><b>muse</b>: 14 repos, 3.3k stars</summary>

- [facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk) 1.0k★ Open source SDK to build Muse gadgets
- [zouyuxuan122/dsh-our-free-model](https://github.com/zouyuxuan122/dsh-our-free-model) 940★ 在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 Muse Spark 1.3、MiMo V2.6 在内的前沿模型——完全免费…
- [win4r/MuseAI-Skills](https://github.com/win4r/MuseAI-Skills) 317★ muse.ai (Muse AI) skills and runtime snapshot: 68 skills, workflow guides, conn…
- [czg86389-hub/muse2api](https://github.com/czg86389-hub/muse2api) 241★ 把 Muse(muse.ai) 逆向封装为 OpenAI 兼容接口，支持对话、文生图、文生视频/图生视频、多账号池轮转与 48h 自动续期。OpenAI-co…
- [AFK-surf/Comma](https://github.com/AFK-surf/Comma) 167★ The sessionless, relentless personal agent. Open source alternative to Muse, Do…

</details>

<details><summary><b>options</b>: 6 repos, 3.8k stars</summary>

- [Avenuezensport/efjvysuz](https://github.com/Avenuezensport/efjvysuz) 1.9k★ Welcome to Shnek-Tools, a multi-tool with a multitude of options. All functions…
- [firelex/jeff](https://github.com/firelex/jeff) 1.4k★ Millisecond decisions, any domain: a 0.8B open "System 1" model that picks betw…
- [strands-labs/strands-decider](https://github.com/strands-labs/strands-decider) 317★ A small, fast decision model, or system one model, for agentic workflows. Pick …
- [some-scurvy-dog/banjo-tooie-scurvy-dog-port](https://github.com/some-scurvy-dog/banjo-tooie-scurvy-dog-port) 72★ Banjo-Tooie Recompiled: a native Windows PC port with widescreen, resolution an…
- [kofiadeyemiq/commander-mangen](https://github.com/kofiadeyemiq/commander-mangen) 65★ Generate man pages from a commander.js program, including every subcommand's op…

</details>

<details><summary><b>films</b>: 9 repos, 4.0k stars</summary>

- [feitangyuan/onetake](https://github.com/feitangyuan/onetake) 1.5k★ Motion films that never cut to the next slide: every beat grows out of the one …
- [echris6/motion-video-kit](https://github.com/echris6/motion-video-kit) 991★ Claude Code skill kit for premium AI-assisted business videos: independent crit…
- [alexgreensh/anidoodle](https://github.com/alexgreensh/anidoodle) 779★ Art and animation, written as code. Illustrations, loops, interactive web art, …
- [sevenevesai/riso-windowseat](https://github.com/sevenevesai/riso-windowseat) 273★ Procedural risograph films in single HTML files (Window Seat, Roost and more), …
- [tugrawork-creator/saas-motion-kit](https://github.com/tugrawork-creator/saas-motion-kit) 205★ Promo & motion videos for software products with HyperFrames + Claude Code. No …

</details>

<details><summary><b>revolutionize</b>: 6 repos, 798 stars</summary>

- [Splendorchucall/BorisFX](https://github.com/Splendorchucall/BorisFX) 203★ Revolutionize your video editing workflow with Borisfx, a cutting-edge plugin s…
- [cosmicrankawaken/FL-Studio](https://github.com/cosmicrankawaken/FL-Studio) 203★ Revolutionize your music production with this professional digital audio workst…
- [MarbleMelodyExpand/SoundPad](https://github.com/MarbleMelodyExpand/SoundPad) 107★ Revolutionize your audio experience with Soundpad: a comprehensive digital audi…
- [faststalliontreat/SonyVegas](https://github.com/faststalliontreat/SonyVegas) 104★ Revolutionize your video editing experience with Sonyvegas, a cutting-edge plug…
- [pacebackerretrieve/Auslogics](https://github.com/pacebackerretrieve/Auslogics) 102★ Revolutionize your music production with Auslogics, an innovative digital audio…

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
