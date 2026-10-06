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
_recent 1,708 repos  2026-09-22..2026-10-06  stars>=40 · baseline 2,777 repos  2026-07-24..2026-09-21  stars>=150 · generated 2026-10-06 13:21 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **adobe** (+reimplementation) | 7 | 3 | 5.5k | 1.1k/d | 1.5k/d | ▁▁▁▁▁▁▁▁▁▁▂▃▅█ | 2026-09-30 | [storytold/photocraft](https://github.com/storytold/photocraft) |
| 2 | **opus** (+motion-graphics) | 28 | 27 | 11.0k | 1.1k/d | 682/d | ▂▇▅▃▅█▇▄▄▄▅▄▄▅ | 2026-09-22 | [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 3 | **films** | 10 | 10 | 4.4k | 420/d | 178/d | ▂▂▃▃▇▆▅▃█▅▄▂▃▃ | 2026-09-22 | [feitangyuan/onetake](https://github.com/feitangyuan/onetake) |
| 4 | **options** | 5 | 5 | 3.9k | 389/d | 732/d | ▁▁▁▁▁▁▄▃▂▂▂▄█▁ | 2026-09-22 | [Avenuezensport/efjvysuz](https://github.com/Avenuezensport/efjvysuz) |
| 5 | **feature** | 8 | 7 | 1.3k | 310/d | 120/d | ▁▁▁▁▁▄█▅▄▄▃▃▂▇ | 2026-09-23 | [rushiranpise/Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next) |
| 6 | **esp** | 6 | 5 | 1.2k | 301/d | 210/d | ▁▁▁▁▁▁▁▂▅▅▃▃█▆ | 2026-09-28 | [ESPARGOS/esp-sdr](https://github.com/ESPARGOS/esp-sdr) |
| 7 | **steamos** (+steamvr) | 5 | 5 | 3.0k | 257/d | 589/d | ▁▂▁▁▁▂▃▃▂▂▃█▆▇ | 2026-09-23 | [Droid-Deck/DroidDeck](https://github.com/Droid-Deck/DroidDeck) |
| 8 | **quest** | 7 | 7 | 725 | 137/d | 105/d | ▂▂▃▂▂▂▃▃▄▃▂▄█▅ | 2026-09-22 | [bigmak94/AstroQuest](https://github.com/bigmak94/AstroQuest) |
| 9 | **size** | 6 | 6 | 406 | 54/d | 49/d | ▁▃▂▃▂▃█▃▃▃▂█▅▃ | 2026-09-24 | [shootthesound/ComfyUI-Fizgig-H3-Still](https://github.com/shootthesound/ComfyUI-Fizgig-H3-Still) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **providing** (+professional, optimizes, streamlines, configurations, utility, 26 more) | 83 | 83 | 12.6k | 12.5k/d | 4.2k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-09-26 | [CrewPotterRectify/Autodesk-Inventor](https://github.com/CrewPotterRectify/Autodesk-Inventor) | same-day, flat-stars |
| 2 | **minimum** (+top-up, pay-as-you-go, image2, image2.5, llm-api-gateway, 126 more) | 407 | 244 | 23.0k | 2.9k/d | 5.9k/d | ▁▁▁▃▂▁▃▂▂▁▁▇██ | 2026-09-24 | [azle5biyd9td956/pixverse6-pixverse-v6-api](https://github.com/azle5biyd9td956/pixverse6-pixverse-v6-api) | near-duplicate, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>adobe</b>: 7 repos, 5.5k stars</summary>

- [storytold/photocraft](https://github.com/storytold/photocraft) 2.7k★ An open-source, clean-room reimplementation of Adobe Photoshop in pure Rust
- [storytold/filmcraft](https://github.com/storytold/filmcraft) 752★ An open-source, clean-room reimplementation of Adobe Premiere Pro built in pure…
- [storytold/lightcraft](https://github.com/storytold/lightcraft) 557★ An open-source, clean-room reimplementation of Adobe Lightroom in pure Rust.
- [storytold/vectorcraft](https://github.com/storytold/vectorcraft) 539★ An open-source, clean-room reimplementation of Adobe Illustrator, built in pure…
- [storytold/printcraft](https://github.com/storytold/printcraft) 513★ An open-source, clean-room reimplementation of Adobe Acrobat built in pure Rust

</details>

<details><summary><b>opus</b>: 28 repos, 11.0k stars</summary>

- [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) 2.2k★ A growing collection of viral videos made with Claude Opus 5.5 and the prompts …
- [JohnHeibel/PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) 1.8k★ Source code for the Claude Opus 5.5 music video for I'm Upping My P(doom)
- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 1.3k★ Claude Code skill for short films with no video model: 43 film styles, each a s…
- [dgreenheck/tidewater](https://github.com/dgreenheck/tidewater) 1.1k★ Coastal town built with Opus 5.5
- [riba2534/claude-opus-5-5-demo](https://github.com/riba2534/claude-opus-5-5-demo) 1.0k★ claude-opus-5-5-demo

</details>

<details><summary><b>films</b>: 10 repos, 4.4k stars</summary>

- [feitangyuan/onetake](https://github.com/feitangyuan/onetake) 1.7k★ Motion films that never cut to the next slide: every beat grows out of the one …
- [echris6/motion-video-kit](https://github.com/echris6/motion-video-kit) 1.0k★ Claude Code skill kit for premium AI-assisted business videos: independent crit…
- [alexgreensh/anidoodle](https://github.com/alexgreensh/anidoodle) 819★ Art and animation, written as code. Illustrations, loops, interactive web art, …
- [sevenevesai/riso-windowseat](https://github.com/sevenevesai/riso-windowseat) 275★ Procedural risograph films in single HTML files (Window Seat, Roost and more), …
- [tugrawork-creator/saas-motion-kit](https://github.com/tugrawork-creator/saas-motion-kit) 212★ Promo & motion videos for software products with HyperFrames + Claude Code. No …

</details>

<details><summary><b>options</b>: 5 repos, 3.9k stars</summary>

- [Avenuezensport/efjvysuz](https://github.com/Avenuezensport/efjvysuz) 1.9k★ Welcome to Shnek-Tools, a multi-tool with a multitude of options. All functions…
- [firelex/jeff](https://github.com/firelex/jeff) 1.4k★ Millisecond decisions, any domain: a 0.8B open "System 1" model that picks betw…
- [strands-labs/strands-decider](https://github.com/strands-labs/strands-decider) 412★ A small, fast decision model, or system one model, for agentic workflows. Pick …
- [some-scurvy-dog/banjo-tooie-scurvy-dog-port](https://github.com/some-scurvy-dog/banjo-tooie-scurvy-dog-port) 75★ Banjo-Tooie Recompiled: a native Windows PC port with widescreen, resolution an…
- [kofiadeyemiq/commander-mangen](https://github.com/kofiadeyemiq/commander-mangen) 72★ Generate man pages from a commander.js program, including every subcommand's op…

</details>

<details><summary><b>feature</b>: 8 repos, 1.3k stars</summary>

- [rushiranpise/Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next) 466★ A feature-rich Shizuku fork with improved setup, reliability, UI, and additiona…
- [emir/AIKON](https://github.com/emir/AIKON) 336★ A 2007 Nokia can't search Google anymore, so I gave it Claude, ChatGPT, Gemini …
- [Ratiokrunote/Movavi-Converter](https://github.com/Ratiokrunote/Movavi-Converter) 102★ Efficiently processes and converts multimedia files across various formats, eli…
- [TarantulaKnow/Movavi-Screen-Recorder](https://github.com/TarantulaKnow/Movavi-Screen-Recorder) 100★ Captures high-quality video output with precision and efficiency, simplifying p…
- [radium-wang/ricoh-gr4-firmware-analysis-and-feature-expansion](https://github.com/radium-wang/ricoh-gr4-firmware-analysis-and-feature-expansion) 92★ 

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
