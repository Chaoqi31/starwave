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
_recent 1,950 repos  2026-09-25..2026-10-09  stars>=40 · baseline 2,882 repos  2026-07-27..2026-09-24  stars>=150 · generated 2026-10-09 13:21 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **artex** | 8 | 8 | 3.4k | 2.4k/d | 835/d | ▁▁▁▁▁▁▁▁▁▁▁▁▂█ | 2026-10-02 | [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) |
| 2 | **mod** (+claude-code-mod, trainer, hack) | 30 | 30 | 10.1k | 1.3k/d | 992/d | ▁▁▁▂▂█▆▇▆█▇█▆▆ | 2026-09-25 | [rehan-remade/universal-modder](https://github.com/rehan-remade/universal-modder) |
| 3 | **soroban** (+stellar, settlement) | 16 | 8 | 2.1k | 1.3k/d | 584/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▇ | 2026-09-26 | [StellarHyperion/stellarhyperion-contracts](https://github.com/StellarHyperion/stellarhyperion-contracts) |
| 4 | **motion-graphics** | 19 | 17 | 9.5k | 893/d | 800/d | ▂▅█▇▄▄▄▄▄▅▅▅▇▆ | 2026-09-25 | [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 5 | **ps4** | 9 | 9 | 1.8k | 692/d | 431/d | ▁▁▁▁▁▁▁▁▂▃▂▂█▆ | 2026-09-30 | [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) |
| 6 | **homebrew** (+jailbroken, ps5) | 16 | 15 | 1.6k | 242/d | 190/d | ▁▁▂▁▁▁▂▂▅██▆▅▄ | 2026-09-25 | [saawant12/orbit-store-ps5](https://github.com/saawant12/orbit-store-ps5) |
| 7 | **esp** | 6 | 5 | 1.4k | 220/d | 100/d | ▁▁▁▁▂▅▅▃▃█▅▃▃▄ | 2026-09-28 | [ESPARGOS/esp-sdr](https://github.com/ESPARGOS/esp-sdr) |
| 8 | **pick** | 6 | 6 | 950 | 128/d | 112/d | ▁▁▁▁▁▁▅▆█▃▅▆▅▄ | 2026-09-29 | [strands-labs/strands-decider](https://github.com/strands-labs/strands-decider) |
| 9 | **size** | 7 | 7 | 552 | 106/d | 80/d | ▂▁▂▄▂▂▃▂▆▃▃▅█▅ | 2026-09-25 | [yfyeung/PrunedCTC](https://github.com/yfyeung/PrunedCTC) |
| 10 | **steamvr** | 5 | 5 | 602 | 63/d | 31/d | ▁▂█▂▂▃▃▅▇▇▅▃▃▃ | 2026-09-25 | [DeeJanuz/frametop](https://github.com/DeeJanuz/frametop) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **reimplementation** (+clean-room) | 11 | 4 | 57.9k | 7.5k/d | 16.1k/d | ▁▁▁▁▁▁▁▁▁▁▂▅▇█ | 2026-09-30 | [storytold/photocraft](https://github.com/storytold/photocraft) | few-owners |
| 2 | **minimum** (+top-up, image2, image2.5, pay-as-you-go, usd, 177 more) | 578 | 314 | 30.6k | 2.9k/d | 3.6k/d | ▁▁▁▁▁▂▁▁▇███▅▂ | 2026-09-28 | [apimartnsksu/llm-api-relay-cheap-cn](https://github.com/apimartnsksu/llm-api-relay-cheap-cn) | near-duplicate, flat-stars |
| 3 | **argolink** (+fields, async) | 12 | 12 | 532 | 106/d | 116/d | ▁▁▁▁▁▁▁▁▁▁▅█▃▂ | 2026-10-04 | [eliasbrookner7/seedance-2-5-api-provider](https://github.com/eliasbrookner7/seedance-2-5-api-provider) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>artex</b>: 8 repos, 3.4k stars</summary>

- [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) 1.9k★ AI 自主渗透测试系统 \| 百度“agent+”攻防挑战赛冠军项目
- [jiwoochris/artex-ko](https://github.com/jiwoochris/artex-ko) 830★ ARTEX 한국어판 · AI 자율 침투 테스트 프레임워크 현지화 (upstream: Autumn-27/ARTEX, AGPL-3.0)
- [cskwork/scopeweaver](https://github.com/cskwork/scopeweaver) 254★ ScopeWeaver: English and Korean localization of ARTEX, with preserved AGPL-3.0 …
- [Hinln/ARTEX](https://github.com/Hinln/ARTEX) 205★ ARTEX 源码备份：基于 Autumn-27/ARTEX v0.3.15，保留原始提交历史与 AGPL-3.0 许可证。
- [sharenjun/ARTEX-main](https://github.com/sharenjun/ARTEX-main) 78★ 可以提交issue和优化思路，会维护

</details>

<details><summary><b>mod</b>: 30 repos, 10.1k stars</summary>

- [rehan-remade/universal-modder](https://github.com/rehan-remade/universal-modder) 5.9k★ Point Claude at any game. Skills, tools and the fal MCP that let Claude Code mo…
- [chasmlol/SkyCraft](https://github.com/chasmlol/SkyCraft) 1.1k★ Play Skyrim as a Minecraft player: Minecraft physics, inventory, blocks and com…
- [openOMSI-org/openOMSI](https://github.com/openOMSI-org/openOMSI) 509★ OMSI 2 recreated from scratch in Rust, compatible with every map and mod (requi…
- [noahdunnagan/mcopt](https://github.com/noahdunnagan/mcopt) 416★ mcopt, a Minecraft mod: a native Metal renderer for Minecraft: Java Edition on …
- [trevaintdead/ai-game-modding-guides](https://github.com/trevaintdead/ai-game-modding-guides) 396★ Guides for building game mods with AI coding agents: passthrough mods, Rust rew…

</details>

<details><summary><b>soroban</b>: 16 repos, 2.1k stars</summary>

- [StellarHyperion/stellarhyperion-contracts](https://github.com/StellarHyperion/stellarhyperion-contracts) 149★ Cross-chain router contracts for Stellar and EVM networks, with CCTP, Axelar, a…
- [StellarHyperion/stellarhyperion-backend](https://github.com/StellarHyperion/stellarhyperion-backend) 148★ Backend infrastructure for indexing, monitoring, and managing Hyperion cross-ch…
- [StellarHyperion/stellarhyperion-frontend](https://github.com/StellarHyperion/stellarhyperion-frontend) 148★ Web interface for Hyperion, enabling cross-chain routing, live quotes, wallet c…
- [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) 132★ Open-source Stellar and Soroban API for peer-to-peer USDC settlement, wallet au…
- [Local-Settle/local-settle-frontend](https://github.com/Local-Settle/local-settle-frontend) 132★ Open-source peer-to-peer payments on Stellar and Soroban. Connect a wallet, tra…

</details>

<details><summary><b>motion-graphics</b>: 19 repos, 9.5k stars</summary>

- [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) 3.3k★ A growing collection of viral videos made with Claude Opus 5.5 and the prompts …
- [feitangyuan/onetake](https://github.com/feitangyuan/onetake) 2.0k★ Motion films that never cut to the next slide: every beat grows out of the one …
- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 1.5k★ Claude Code skill for short films with no video model: 43 film styles, each a s…
- [Barty-Bart/motion-graphics](https://github.com/Barty-Bart/motion-graphics) 534★ Motion-graphics skills for Claude Code and Codex.
- [zhuyansen/awesome-claude-video-skills](https://github.com/zhuyansen/awesome-claude-video-skills) 495★ Open-source skills and toolkits that let Claude Code, Codex and other coding ag…

</details>

<details><summary><b>ps4</b>: 9 repos, 1.8k stars</summary>

- [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) 1.1k★ Native PC port of P.T. (runs from your own PS4 game files)
- [bigmak94/AstroQuest](https://github.com/bigmak94/AstroQuest) 211★ ASTRO BOT Rescue Mission (PS4, PlayStation VR) in virtual reality on Meta Quest…
- [iHaiDeeZ/DolphinPS4](https://github.com/iHaiDeeZ/DolphinPS4) 84★ Dolphin (GameCube/Wii emulator) for jailbroken PS4: Vulkan on the PS4 GPU, PSP-…
- [GronedWaffel/etahen-11.00-13.60](https://github.com/GronedWaffel/etahen-11.00-13.60) 68★ Unofficial etaHEN 2.5B unified PS5 11.00-13.60 port: Toolbox, plugins and PS4/P…
- [Yharnam-Hunters/Paleblood](https://github.com/Yharnam-Hunters/Paleblood) 68★ A decompilation of Bloodborne (CUSA03173 v1.09) with its own runtime: the game'…

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
