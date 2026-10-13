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
_recent 2,069 repos  2026-09-29..2026-10-13  stars>=40 · baseline 2,971 repos  2026-07-31..2026-09-28  stars>=150 · generated 2026-10-13 14:15 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **artex** | 6 | 6 | 6.8k | 1.2k/d | 780/d | ▁▁▁▁▁▁▁▁▂█▇▄▄▃ | 2026-10-02 | [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) |
| 2 | **mcd** (+mcdonalds) | 9 | 9 | 1.2k | 539/d | 295/d | ▁▁▁▁▁▁▁▁▁▁▃▃▄█ | 2026-10-09 | [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) |
| 3 | **soroban** (+stellar, smart-contracts) | 15 | 8 | 2.0k | 392/d | 0/d | ▁▁▁▁▁▁▁▁█▄▆▁▁▁ | 2026-10-06 | [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) |
| 4 | **messages** | 7 | 7 | 2.1k | 369/d | 555/d | ▁▁▁▁▁▁▁▁▂▂▁▅█▇ | 2026-09-29 | [Fei2411/DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot) |
| 5 | **gsap** | 6 | 6 | 1.0k | 368/d | 199/d | ▁▁▁▁▁▁▁▂▂▂▃▂▂█ | 2026-09-29 | [Tejashmakwana/motionmaxxing](https://github.com/Tejashmakwana/motionmaxxing) |
| 6 | **ps4** | 9 | 9 | 2.4k | 363/d | 165/d | ▁▁▁▁▂▃▂▁█▆▃▂▃▃ | 2026-09-30 | [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) |
| 7 | **palworld** (+points) | 6 | 6 | 329 | 329/d | 110/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-12 | [IndigoSpinner/palworld-controller-input-recovery-helper](https://github.com/IndigoSpinner/palworld-controller-input-recovery-helper) |
| 8 | **font** | 6 | 6 | 1.6k | 320/d | 251/d | ▁▁▁▁▁▂▂▂█▂▂▄▇▂ | 2026-10-01 | [szabadkai/c64-keyboard-font](https://github.com/szabadkai/c64-keyboard-font) |
| 9 | **game-preservation** | 5 | 5 | 701 | 144/d | 156/d | ▁▁▁▁▁▁▂▂▁▁▅█▇█ | 2026-09-29 | [SubmitGame/awesome-decomp-games](https://github.com/SubmitGame/awesome-decomp-games) |
| 10 | **turkish** | 5 | 5 | 505 | 129/d | 93/d | ▁▁▁▁▁▁▁▅▄▂▂▂█▆ | 2026-10-02 | [canberk7/ema-lightning](https://github.com/canberk7/ema-lightning) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **image2** (+image2.5, minimum, pay-as-you-go, top-up, usd, 62 more) | 559 | 345 | 28.6k | 2.3k/d | 3.1k/d | ▁▁▁▁▅▆█▆▅▅▇█▇▅ | 2026-09-29 | [apimartnsksu/llm-api-relay-cheap-cn](https://github.com/apimartnsksu/llm-api-relay-cheap-cn) | near-duplicate, flat-stars |
| 2 | **hack** (+aimbot, esp, recoil, cheats, undetected, 7 more) | 25 | 25 | 1.5k | 584/d | 211/d | ▁▁▁▁▁▁▂▂▁▆▅▃█▃ | 2026-10-03 | [OctopusSlicer/l1s](https://github.com/OctopusSlicer/l1s) | flat-stars |
| 3 | **ark** (+ark-survival-ascended, asa, ascended, survival, profiles, 2 more) | 10 | 10 | 413 | 413/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-10-13 | [FloorBowyerLimit/ark-survival-ascended-performance-stutter-profile-manager](https://github.com/FloorBowyerLimit/ark-survival-ascended-performance-stutter-profile-manager) | same-day |
| 4 | **argolink** (+argolink-focused, error, polling, fields) | 26 | 26 | 1.1k | 134/d | 134/d | ▁▁▁▁▁▁▅█▃▃▅▅▅▃ | 2026-10-04 | [eliasbrookner7/seedance-2-5-api-provider](https://github.com/eliasbrookner7/seedance-2-5-api-provider) | flat-stars |
| 5 | **trainer** (+aggro, aniimo, aniimo-2026, aniimo-assistant, aniimo-cheat, 23 more) | 7 | 7 | 292 | 27/d | 97/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-02 | [Clawgluditch/Gears-E-Day-Cheat](https://github.com/Clawgluditch/Gears-E-Day-Cheat) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>artex</b>: 6 repos, 6.8k stars</summary>

- [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) 3.8k★ AI 自主渗透测试系统 \| 百度“agent+”攻防挑战赛冠军项目
- [jiwoochris/artex-ko](https://github.com/jiwoochris/artex-ko) 1.4k★ ARTEX 한국어판 · AI 자율 침투 테스트 프레임워크(upstream: Autumn-27/ARTEX, AGPL-3.0)
- [Hinln/ARTEX](https://github.com/Hinln/ARTEX) 742★ ARTEX 源码备份：基于 Autumn-27/ARTEX v0.3.15，保留原始提交历史与 AGPL-3.0 许可证。
- [cskwork/scopeweaver](https://github.com/cskwork/scopeweaver) 519★ ScopeWeaver: English and Korean localization of ARTEX, with preserved AGPL-3.0 …
- [bdg9412/artex-ko-plus](https://github.com/bdg9412/artex-ko-plus) 173★ ARTEX 한국어판 ·AI 기반 침해사고 대응 기능 추가 (upstream: Autumn-27/ARTEX, AGPL-3.0)

</details>

<details><summary><b>mcd</b>: 9 repos, 1.2k stars</summary>

- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 257★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [yzg1226/mcd-party-officer](https://github.com/yzg1226/mcd-party-officer) 211★ 🍟 麦当劳门店派对成团调度 Skill — 把派对从「策划」推进到「办得成」：成团概率雷达 / 包场vs拼团 / 择日黄历 / 儿童营养指数 / 招募卡与邀…
- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 142★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [WilderNoTrack/mcd-calorie-butler](https://github.com/WilderNoTrack/mcd-calorie-butler) 131★ 麦麦热量管家：减脂不是少吃你爱的，是先换掉不值这口热量的。基于麦当劳 MCP 的味热比点餐 Skill。
- [cc844673379-lgtm/mcd-hui-life](https://github.com/cc844673379-lgtm/mcd-hui-life) 111★ 

</details>

<details><summary><b>soroban</b>: 15 repos, 2.0k stars</summary>

- [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) 132★ Open-source Stellar and Soroban API for peer-to-peer USDC settlement, wallet au…
- [Local-Settle/local-settle-frontend](https://github.com/Local-Settle/local-settle-frontend) 132★ Open-source peer-to-peer payments on Stellar and Soroban. Connect a wallet, tra…
- [Stellar-Kolo/kolo-frontend](https://github.com/Stellar-Kolo/kolo-frontend) 132★ Kolo's Stellar community savings web app: Next.js member and admin dashboards, …
- [Stellar-hush/hush](https://github.com/Stellar-hush/hush) 132★ Open-source working beta for private email on Stellar: encrypted messages, send…
- [Stellar-Clear/clearledger](https://github.com/Stellar-Clear/clearledger) 131★ Invoice finance infrastructure on Stellar: Soroban contracts, a Next.js app, Ty…

</details>

<details><summary><b>messages</b>: 7 repos, 2.1k stars</summary>

- [Fei2411/DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot) 1.6k★ A team of long-lived bots for DeepSeek Harness, with main bots, bot-to-bot mess…
- [chekusu/yobiru](https://github.com/chekusu/yobiru) 159★ Let your agents talk: messages, data, files and wake-ups over Tailscale.
- [ntailio/ntk](https://github.com/ntailio/ntk) 103★ Fast, friendly CLI and TUI for Apache Kafka: inspect clusters, move messages, w…
- [ralf1qdev/json-toolkit](https://github.com/ralf1qdev/json-toolkit) 58★ Validate, format, minify, and compare JSON with a clean desktop interface or CL…
- [airisorg/tofu-chat](https://github.com/airisorg/tofu-chat) 50★ An open-source team messenger for groups of up to 30, with spaces, threads, fil…

</details>

<details><summary><b>gsap</b>: 6 repos, 1.0k stars</summary>

- [Tejashmakwana/motionmaxxing](https://github.com/Tejashmakwana/motionmaxxing) 339★ Looksmaxxing for motion graphics. An agent skill that turns AI slop videos into…
- [juliobsz/skills](https://github.com/juliobsz/skills) 290★ An agent skill that builds award-caliber websites from one line
- [midudev/mcp-higgsfield-landing](https://github.com/midudev/mcp-higgsfield-landing) 144★ Landing de Arko, restaurante nikkei de Barcelona: un paseo en vídeo por el loca…
- [Sunwood-ai-labs/hyperframes-motion-reel-skill](https://github.com/Sunwood-ai-labs/hyperframes-motion-reel-skill) 124★ 🎬 Claude Code skill for showreel-grade, beat-synced motion graphics with Hyper…
- [borjaperfra/beatdeck](https://github.com/borjaperfra/beatdeck) 86★ Talks as beats, not slides: a fixed 1920×1080 React stage where one click is on…

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
