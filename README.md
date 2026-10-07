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
_recent 1,741 repos  2026-09-23..2026-10-07  stars>=40 · baseline 2,812 repos  2026-07-25..2026-09-22  stars>=150 · generated 2026-10-07 13:28 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **opus** | 24 | 23 | 9.5k | 888/d | 649/d | ▆▄▃▅█▇▅▄▄▅▄▅▅▄ | 2026-09-23 | [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 2 | **stellar** (+soroban, prototype, settlement) | 8 | 5 | 943 | 725/d | 131/d | ▁▁▁▁▁▁▁▁▁▁▁▅█▁ | 2026-10-04 | [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) |
| 3 | **steamos** (+steamvr) | 6 | 6 | 3.8k | 325/d | 603/d | ▂▁▁▁▂▃▂▂▂▃█▆▇█ | 2026-09-23 | [Droid-Deck/DroidDeck](https://github.com/Droid-Deck/DroidDeck) |
| 4 | **ps4** | 8 | 8 | 577 | 188/d | 125/d | ▁▁▁▁▁▁▁▂▁▃▃█▆▄ | 2026-09-30 | [bigmak94/AstroQuest](https://github.com/bigmak94/AstroQuest) |
| 5 | **pick** | 6 | 6 | 834 | 143/d | 101/d | ▁▁▁▁▁▁▁▁▅▇█▄▅▅ | 2026-09-26 | [strands-labs/strands-decider](https://github.com/strands-labs/strands-decider) |
| 6 | **size** (+font) | 8 | 8 | 532 | 132/d | 46/d | ▃▂▃▂▃█▃▃▃▂█▅▅▆ | 2026-09-24 | [shootthesound/ComfyUI-Fizgig-H3-Still](https://github.com/shootthesound/ComfyUI-Fizgig-H3-Still) |
| 7 | **argolink** (+fields, polling) | 8 | 8 | 360 | 120/d | 120/d | ▁▁▁▁▁▁▁▁▁▁▁▁██ | 2026-10-04 | [eliasbrookner7/seedance-2-5-api-provider](https://github.com/eliasbrookner7/seedance-2-5-api-provider) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **clean-room** (+reimplementation) | 10 | 1 | 21.1k | 3.2k/d | 5.1k/d | ▁▁▁▁▁▁▁▁▁▁▁▂▂█ | 2026-09-30 | [storytold/photocraft](https://github.com/storytold/photocraft) | few-owners |
| 2 | **minimum** (+top-up, pay-as-you-go, image2, image2.5, llm-api-gateway, 149 more) | 482 | 283 | 27.0k | 3.0k/d | 5.5k/d | ▁▁▂▂▁▂▂▂▁▁▇██▅ | 2026-09-24 | [azle5biyd9td956/pixverse6-pixverse-v6-api](https://github.com/azle5biyd9td956/pixverse6-pixverse-v6-api) | near-duplicate, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>opus</b>: 24 repos, 9.5k stars</summary>

- [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) 2.5k★ A growing collection of viral videos made with Claude Opus 5.5 and the prompts …
- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 1.3k★ Claude Code skill for short films with no video model: 43 film styles, each a s…
- [dgreenheck/tidewater](https://github.com/dgreenheck/tidewater) 1.1k★ Coastal town built with Opus 5.5
- [riba2534/claude-opus-5-5-demo](https://github.com/riba2534/claude-opus-5-5-demo) 1.0k★ claude-opus-5-5-demo
- [athemeroy/awesome-claude-5-5-videos](https://github.com/athemeroy/awesome-claude-5-5-videos) 488★ Source-linked Claude 5.5 video workflows: Opus and Sonnet demos, separately lab…

</details>

<details><summary><b>stellar</b>: 8 repos, 943 stars</summary>

- [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) 131★ Open-source Stellar and Soroban API for peer-to-peer USDC settlement, wallet au…
- [Local-Settle/local-settle-frontend](https://github.com/Local-Settle/local-settle-frontend) 131★ Open-source peer-to-peer payments on Stellar and Soroban. Connect a wallet, tra…
- [VelaPayments/vela-payments](https://github.com/VelaPayments/vela-payments) 131★ Open-source mobile payment prototype on Stellar, featuring NFC payment requests…
- [VelaPayments/vela-server](https://github.com/VelaPayments/vela-server) 131★ NestJS backend for Vela’s Stellar payment prototype, with payment-request valid…
- [zeemscript/TrustMint](https://github.com/zeemscript/TrustMint) 131★ Open-source toolkit for compliant real-world asset tokenization on Stellar.KYC …

</details>

<details><summary><b>steamos</b>: 6 repos, 3.8k stars</summary>

- [Droid-Deck/DroidDeck](https://github.com/Droid-Deck/DroidDeck) 3.0k★ DroidDeck brings the SteamOS experience to Android
- [DeeJanuz/frametop](https://github.com/DeeJanuz/frametop) 245★ Multi-screen KDE Plasma desktop and universal 3D mouse for the Valve Steam Fram…
- [hashtagbasit/SteamOS-ARM-Port](https://github.com/hashtagbasit/SteamOS-ARM-Port) 204★ Unofficial SteamOS for Snapdragon handhelds and tablets
- [fxgl/steamac](https://github.com/fxgl/steamac) 128★ Valve's official ARM64 SteamOS in a lightweight VM on Apple Silicon: libkrun + …
- [MaSieS4Fun/SteamOS-ARM-SM8550](https://github.com/MaSieS4Fun/SteamOS-ARM-SM8550) 115★ Official SteamOS ARM version, custom-adapted for SM8550 ARM devices.

</details>

<details><summary><b>ps4</b>: 8 repos, 577 stars</summary>

- [bigmak94/AstroQuest](https://github.com/bigmak94/AstroQuest) 184★ ASTRO BOT Rescue Mission (PS4, PlayStation VR) in virtual reality on Meta Quest…
- [GronedWaffel/etahen-11.00-13.60](https://github.com/GronedWaffel/etahen-11.00-13.60) 66★ Unofficial etaHEN 2.5B unified PS5 11.00-13.60 port: Toolbox, plugins and PS4/P…
- [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) 63★ Native PC port of P.T. (runs from your own PS4 game files)
- [aarvsn/Ryty](https://github.com/aarvsn/Ryty) 61★ Tool for porting PlayStation 4 & 5 executables to Windows, MacOS and Linux
- [OptiTronOffical/OptiStore](https://github.com/OptiTronOffical/OptiStore) 57★ Sony should be comfortable not owning their PKGs - front end for browsing PS4 a…

</details>

<details><summary><b>pick</b>: 6 repos, 834 stars</summary>

- [strands-labs/strands-decider](https://github.com/strands-labs/strands-decider) 482★ A small, fast decision model, or system one model, for agentic workflows. Pick …
- [adityajha2005/yc-outreach](https://github.com/adityajha2005/yc-outreach) 156★ Pick a YC batch, get founders and likely emails, write personalised cold emails…
- [irpina/elekloader](https://github.com/irpina/elekloader) 59★ A mod loader for Elektron firmware. You pick mods and supply the stock OS file …
- [playportdev/playport](https://github.com/playportdev/playport) 48★ Playport runs Windows games, 64-bit and now 32-bit, on a stock, non-jailbroken …
- [deox1111/ps5-library](https://github.com/deox1111/ps5-library) 46★ Game library for jailbroken PS5: pick a game, it downloads, installs and appear…

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
