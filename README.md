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
_recent 3,840 repos  2026-11-08..2026-11-22  stars>=40 · baseline 4,160 repos  2026-09-09..2026-11-07  stars>=150 · generated 2026-11-22 14:38 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **scripting** (+blender-mcp, blender3d, blender-ai, blender-automation, blender-plugin, 8 more) | 13 | 13 | 6.8k | 1.6k/d | 1.0k/d | ▁▁▁▁▄▆█▄▁▃▁▆▇▆ | 2026-11-12 | [bookwjitchieni1986/blender-ai-mcp-addon](https://github.com/bookwjitchieni1986/blender-ai-mcp-addon) |
| 2 | **adobe** (+after-effects, visual-effects, keyframe) | 17 | 17 | 2.7k | 943/d | 701/d | ▁▁▁▁▁▁▁▁▁▄▁▄█▃ | 2026-11-14 | [purvprajapati2504-design/premiere-pro-video-editor](https://github.com/purvprajapati2504-design/premiere-pro-video-editor) |
| 3 | **digital-art** (+3d-rendering, graphic-design) | 6 | 6 | 1.1k | 672/d | 366/d | ▁▁▁▁▁▁▁▁▁▁▁▃█▆ | 2026-11-18 | [randrianiaina1/illustrator-datalin-vector-design](https://github.com/randrianiaina1/illustrator-datalin-vector-design) |
| 4 | **streamlined** | 9 | 9 | 1.3k | 461/d | 263/d | ▁▁▁▁▁▁▁▁▁█▁▃▇▃ | 2026-11-15 | [Blaqsoft/acrobat-pro-fajalor-pdf-workspace](https://github.com/Blaqsoft/acrobat-pro-fajalor-pdf-workspace) |
| 5 | **riemann** (+alp) | 5 | 5 | 761 | 359/d | 212/d | ▁▂▁▁▁▁▁▁▁▁▁▁█▄ | 2026-11-09 | [CocoSgt/riemann-hypothesis-lean](https://github.com/CocoSgt/riemann-hypothesis-lean) |
| 6 | **escape** | 6 | 5 | 4.1k | 356/d | 144/d | ▃▅█▄▂▃▂▂▂▃▂▃▂▁ | 2026-11-08 | [Kianuni/Erosion-CN](https://github.com/Kianuni/Erosion-CN) |
| 7 | **rob** | 6 | 6 | 656 | 355/d | 185/d | ▁▁▁▁▁▁▂▁▁▁▁▃▅█ | 2026-11-13 | [jubileeuk27-ship-it/rob-run-orvella](https://github.com/jubileeuk27-ship-it/rob-run-orvella) |
| 8 | **modder** | 6 | 6 | 911 | 254/d | 151/d | ▁▁▁▁▁▁▁▁▁█▁▂▇▁ | 2026-11-15 | [guaravs01-prog/better-orbital-strike-cannon](https://github.com/guaravs01-prog/better-orbital-strike-cannon) |
| 9 | **blockchain** (+bnb) | 13 | 13 | 1.7k | 246/d | 47/d | ▁▁▃▁▁▃▂▂▁█▁▁▂▁ | 2026-11-10 | [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) |
| 10 | **ai-video-generation** | 7 | 1 | 1.4k | 241/d | 0/d | ▁▁▁▁▁▁▁▁██▁▁▁▁ | 2026-11-16 | [fujc683/seedance-2-5-flash-pricing](https://github.com/fujc683/seedance-2-5-flash-pricing) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **win** (+architectural, computer-graphics, imaging, microsoftexcel, autodesk, 74 more) | 269 | 203 | 66.5k | 65.0k/d | 14.0k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-14 | [esamZumrawi/dr-fone-mobile-launch-suite](https://github.com/esamZumrawi/dr-fone-mobile-launch-suite) | near-duplicate, same-day, flat-stars |
| 2 | **software-engineering** (+windows-app, utility, utilities, acrobat, scripts, 23 more) | 215 | 214 | 64.8k | 61.3k/d | 17.9k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-08 | [Dhruv2710-hub/cellebrite-ufed](https://github.com/Dhruv2710-hub/cellebrite-ufed) | near-duplicate, same-day, flat-stars |
| 3 | **prebuilt** (+hot-reloadable, low-overhead, reloadable, overhead, configuration, 92 more) | 175 | 161 | 44.9k | 44.7k/d | 14.9k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-15 | [kyle-millerx2098t3/daw-synth-fl-studio-2026-producer-portable-x64](https://github.com/kyle-millerx2098t3/daw-synth-fl-studio-2026-producer-portable-x64) | near-duplicate, same-day, flat-stars |
| 4 | **ai--manus** (+gemeni, manus, typescript-sdk, general-purpose, solidjs, 19 more) | 298 | 298 | 43.9k | 4.9k/d | 0/d | ▁▁▁▁▁██▁▁▁▁▁▁▁ | 2026-11-13 | [AcgBoss/ai--manus](https://github.com/AcgBoss/ai--manus) | near-duplicate, same-day, flat-stars |
| 5 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 37 more) | 323 | 278 | 39.4k | 4.6k/d | 0/d | ▁▁▁▁▁▄█▁▁▁▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, flat-stars |
| 6 | **setup** (+configured, pre-configured, visio, multitrack, bundled, 1 more) | 62 | 62 | 11.0k | 3.6k/d | 1.2k/d | ▂▂▁▂▁▂▆▂▁█▂▂▃█ | 2026-11-08 | [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis) | flat-stars |
| 7 | **trial-version** (+trial, windows-software, latest, download, conversion, 35 more) | 265 | 265 | 27.2k | 2.3k/d | 1/d | ▁▁▁█▁▁▁▁▁▁▁▁▁▁ | 2026-11-08 | [brisk-thrush-husky/malware-defender-desktop](https://github.com/brisk-thrush-husky/malware-defender-desktop) | same-day, flat-stars |
| 8 | **trainer** (+hack, blade, cheat, fling, hacks) | 25 | 25 | 4.3k | 1.7k/d | 415/d | ▁▁▁▁▁▁▁▁▁█▁▁▁▄ | 2026-11-15 | [vinujak/phantom-blade-zero-modifier](https://github.com/vinujak/phantom-blade-zero-modifier) | same-day, flat-stars |
| 9 | **aichecker** (+anti-dpi, config-checker, gemeni-checker, gemini-config-checker, lim, 10 more) | 27 | 27 | 10.2k | 1.5k/d | 0/d | ▁▁▁▁▁▁▁█▁▁▁▁▁▁ | 2026-11-15 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 10 | **manus--ai** | 64 | 64 | 12.1k | 1.3k/d | 0/d | ▁▁▁▁▁█▄▁▁▁▁▁▁▁ | 2026-11-13 | [AcgBoss/manus--ai](https://github.com/AcgBoss/manus--ai) | near-duplicate, same-day, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>scripting</b>: 13 repos, 6.8k stars</summary>

- [bookwjitchieni1986/blender-ai-mcp-addon](https://github.com/bookwjitchieni1986/blender-ai-mcp-addon) 2.7k★ AI assistant and MCP server for Blender: visual chat, scene tools, multi-agent …
- [tiobeharxi1987/blender-ai-copilot-flow](https://github.com/tiobeharxi1987/blender-ai-copilot-flow) 514★ A controlled AI workflow for Blender: every copilot edit is a supervised tool c…
- [Doug-218/blender-ai-copilot-forge](https://github.com/Doug-218/blender-ai-copilot-forge) 509★ A scene-forging AI copilot for Blender—describe the layout and watch primitives…
- [zovulrira1974/blender-ai-copilot-assets](https://github.com/zovulrira1974/blender-ai-copilot-assets) 509★ An asset-savvy AI copilot for Blender—search Poly Haven, Sketchfab and Poly Piz…
- [fumbdendade19718/blender-ai-copilot-desk](https://github.com/fumbdendade19718/blender-ai-copilot-desk) 505★ A visual AI desk for Blender—chat, scene objects, viewport snapshots, approvals…

</details>

<details><summary><b>adobe</b>: 17 repos, 2.7k stars</summary>

- [purvprajapati2504-design/premiere-pro-video-editor](https://github.com/purvprajapati2504-design/premiere-pro-video-editor) 337★ Professional Multi-Track Video Editing Suite for Windows with 4K/8K Export
- [FloorTurtleResurrect/free-adobe-activation](https://github.com/FloorTurtleResurrect/free-adobe-activation) 193★ simple tutorial adobe activation with GenP
- [kokarai/premiere-elements](https://github.com/kokarai/premiere-elements) 154★ Premiere Elements: Story-First Home Video Editing Workflow
- [yahyaouiraouf31-sys/l-ve-light-shadow-library](https://github.com/yahyaouiraouf31-sys/l-ve-light-shadow-library) 153★ Löve Light Shadow Library: 2D light and shadow rendering for Löve2D
- [124113009-art/adobe-fresco-elrina](https://github.com/124113009-art/adobe-fresco-elrina) 150★ Explore brushes and tools in Adobe Fresco Elrina with screenshot-heavy visual g…

</details>

<details><summary><b>digital-art</b>: 6 repos, 1.1k stars</summary>

- [randrianiaina1/illustrator-datalin-vector-design](https://github.com/randrianiaina1/illustrator-datalin-vector-design) 205★ Illustrator Datalin Vector Design delivers precise vector design workflows for …
- [bgleeson180-afk/cinema-4d-sacerin-motion-studio](https://github.com/bgleeson180-afk/cinema-4d-sacerin-motion-studio) 201★ Builds Cinema 4D Sacerin motion scenes through a structured studio workflow.
- [Visionservice117/lightroom-classic-belelan-photo-workflow](https://github.com/Visionservice117/lightroom-classic-belelan-photo-workflow) 199★ Manage photo workflows in Lightroom Classic with Belelan Photo Workflow.
- [himeshsuthar91-eng/after-effects-ceramar-motion-design](https://github.com/himeshsuthar91-eng/after-effects-ceramar-motion-design) 194★ After Effects Ceramar Motion Design: a motion design project built around Ceram…
- [tarouquelaprogramacao-max/krita-elvona-art-studio](https://github.com/tarouquelaprogramacao-max/krita-elvona-art-studio) 151★ Krita plugin that builds a structured art studio workspace for digital painters.

</details>

<details><summary><b>streamlined</b>: 9 repos, 1.3k stars</summary>

- [Blaqsoft/acrobat-pro-fajalor-pdf-workspace](https://github.com/Blaqsoft/acrobat-pro-fajalor-pdf-workspace) 188★ Streamlined PDF workspace for editing, converting, and organizing documents.
- [Cllayver/fl-studio-installer](https://github.com/Cllayver/fl-studio-installer) 154★ FL Studio Installer: Streamlined Setup and Enhanced Performance
- [alkabdohagag/fxdeck-fivem-command-deck](https://github.com/alkabdohagag/fxdeck-fivem-command-deck) 154★ FxDeck FiveM Command Deck - Streamlined In-Game Command Interface for Modders
- [tahsintasnuva/voice-notes-pipeline](https://github.com/tahsintasnuva/voice-notes-pipeline) 153★ Voice Notes Pipeline: Automation Script for Streamlined Note Processing
- [vkindustries49-star/minectaft-on-rust-easy-launch](https://github.com/vkindustries49-star/minectaft-on-rust-easy-launch) 151★ Launch and manage Minecraft on Rust through a streamlined setup and launcher.

</details>

<details><summary><b>riemann</b>: 5 repos, 761 stars</summary>

- [CocoSgt/riemann-hypothesis-lean](https://github.com/CocoSgt/riemann-hypothesis-lean) 498★ Mirror of Levent Alpöge's Lean proof of the Riemann Hypothesis (with Claude). A…
- [professorsolderin/project-lighthouse](https://github.com/professorsolderin/project-lighthouse) 100★ Project Lighthouse — shining AI on the pages history never read: transcriptions…
- [TomasOrtega/RH](https://github.com/TomasOrtega/RH) 76★ Lean files extracted from the archive accompanying Levent Alpöge’s Riemann Hypo…
- [Tomodovodoo/Riemann](https://github.com/Tomodovodoo/Riemann) 46★ Levent Alpöge’s claimed proof of the Riemann Hypothesis in 17.4 million lines o…
- [nasqret/riemann-rev](https://github.com/nasqret/riemann-rev) 41★ Status dashboard, guide and map of the formal proof of the Riemann hypothesis a…

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
| `--from <file>` | | read a saved capture or snapshot (`.json` or `.json.gz`) instead of searching GitHub; missing star history may still be fetched |
| `--save <file>` | | write the raw capture |
| `--no-history` | | skip star history (about 500 requests) |
| `--no-cache`, `--no-color` | | ignore the cache, plain output |

To replay saved data without a GitHub token or API requests, combine `--from` with `--no-history`:

```bash
npx github:Chaoqi31/starwave --from data/2026-09-30.json.gz --no-history --md
```

`--from` skips repository searches. By default, if a token is available, starwave still fetches missing star history for waves without `daily`. `--no-history` skips that enrichment and preserves any history already stored in the snapshot. A raw capture contains no star history, so its offline output has no 3-day rate or 14-day chart.

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
