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
_recent 2,569 repos  2026-11-11..2026-11-25  stars>=40 · baseline 4,242 repos  2026-09-12..2026-11-10  stars>=150 · generated 2026-11-25 17:16 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **desktop-application** | 6 | 6 | 2.9k | 1.2k/d | 717/d | ▁▁▁▁▁▁▂▁▁▂▁▁▁█ | 2026-11-12 | [Umbra9179/clipboard-history-manager-windows](https://github.com/Umbra9179/clipboard-history-manager-windows) |
| 2 | **macro** (+keyless) | 13 | 13 | 1.8k | 1.1k/d | 254/d | ▁▁▁▁▁▁▇▁▂▁▁▁▁█ | 2026-11-13 | [henkbonnet297/steal-a-brainrot-roblox-index-macro](https://github.com/henkbonnet297/steal-a-brainrot-roblox-index-macro) |
| 3 | **hack** | 13 | 13 | 2.1k | 890/d | 122/d | ▁▁▂▁▁▁█▁▁▁▁▁▁▃ | 2026-11-11 | [gigarectorpulse/Universal-Gaming-Hub](https://github.com/gigarectorpulse/Universal-Gaming-Hub) |
| 4 | **mev** (+sniper, jito, fun) | 6 | 6 | 871 | 556/d | 172/d | ▁▁▁▁▁▁▆▁▁▁▁▁▁█ | 2026-11-15 | [Norao01/solana-pump-fun-jito-bundler-sniper](https://github.com/Norao01/solana-pump-fun-jito-bundler-sniper) |
| 5 | **radar** (+statistics, rpg, game-data, game-overlay, game-statistics, 2 more) | 16 | 16 | 4.2k | 543/d | 224/d | ▁▁▂▅▄▄█▂▅▂▂▂▂▄ | 2026-11-11 | [ZiChuanLan/freebie-radar](https://github.com/ZiChuanLan/freebie-radar) |
| 6 | **agy** (+antigravity-plugin) | 9 | 9 | 3.2k | 422/d | 591/d | ▁▁▂▁▁▂▂▂▂▃▃▅▄█ | 2026-11-11 | [INK-Q/agy-fast](https://github.com/INK-Q/agy-fast) |
| 7 | **advanced** | 13 | 13 | 1.7k | 400/d | 99/d | ▁▁▁▁▁▁█▁▂▁▅▂▁▃ | 2026-11-12 | [hisdelikat/total-commander](https://github.com/hisdelikat/total-commander) |
| 8 | **fortnite** (+valorant) | 5 | 5 | 873 | 355/d | 138/d | ▁▁▁▁▁▁█▁▁▁▁▁▄▄ | 2026-11-15 | [GleamThunder/fortnite-pirate-chest-map](https://github.com/GleamThunder/fortnite-pirate-chest-map) |
| 9 | **force** | 5 | 5 | 1.2k | 329/d | 84/d | ▁▁▁▁▃▅▅▂▁▁█▂▁▅ | 2026-11-14 | [34306/ForceDuoApp](https://github.com/34306/ForceDuoApp) |
| 10 | **scripting** (+3d-automation, blender-agents, blender-ai, blender-assistant, blender-automation, 8 more) | 9 | 9 | 3.7k | 291/d | 2/d | ▁▃▆█▄▁▃▁▁▁▁▁▁▁ | 2026-11-12 | [tiobeharxi1987/blender-ai-copilot-flow](https://github.com/tiobeharxi1987/blender-ai-copilot-flow) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **gemeni** (+manus, typescript-sdk, ai--manus, general-purpose, solidjs, 39 more) | 422 | 328 | 67.4k | 5.9k/d | 1/d | ▁▁▇█▃▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 2 | **software-engineering** (+utility, windows-app, scripts, setup, crack, 1 more) | 58 | 58 | 18.7k | 4.5k/d | 463/d | ▁▁▁▁▁▁▁▁▁▁█▂▁▁ | 2026-11-13 | [Adabi0304/studioonepro7-release](https://github.com/Adabi0304/studioonepro7-release) | same-day, flat-stars |
| 3 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 38 more) | 313 | 268 | 39.6k | 3.4k/d | 0/d | ▁▁▄█▁▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, same-day, flat-stars |
| 4 | **trainer** (+directx-11, overlay, external, blade, directx, 4 more) | 36 | 35 | 6.6k | 2.8k/d | 234/d | ▁▁▁▁▁▁█▁▁▁▄▁▁▂ | 2026-11-15 | [tweak-for-me/impulse](https://github.com/tweak-for-me/impulse) | flat-stars |
| 5 | **community-driven** (+community, feature-rich) | 27 | 27 | 4.3k | 819/d | 141/d | ▁▁▁▁▁▁█▁▁▁▁▁▁▂ | 2026-11-11 | [ProjectLeonidaL/leonida](https://github.com/ProjectLeonidaL/leonida) | same-day, flat-stars |
| 6 | **coregold** (+vcc, usdt, applepay, finops, architectural, 10 more) | 67 | 54 | 6.2k | 618/d | 865/d | ▁▂▂▁▁▃▂▃▅▄▁▃█▅ | 2026-11-11 | [KenjiIra5580/openai-o3-deep-research-applepay-vcc](https://github.com/KenjiIra5580/openai-o3-deep-research-applepay-vcc) | near-duplicate, flat-stars |
| 7 | **download** (+streamline) | 27 | 27 | 4.2k | 512/d | 55/d | ▁▁▂▃▁▁█▁▁▁▃▁▁▁ | 2026-11-11 | [darthvader097br-ctrl/acronis-standalone-bundle](https://github.com/darthvader097br-ctrl/acronis-standalone-bundle) | flat-stars |
| 8 | **install-guide** (+configuration, windows-11, covers, desktop-software, file-tools, 5 more) | 32 | 32 | 2.6k | 213/d | 0/d | ▁▁▁▁▁▁▁▁█▁▁▁▁▁ | 2026-11-13 | [DictatorHinge/IBM-SPSS-Statistics-Full](https://github.com/DictatorHinge/IBM-SPSS-Statistics-Full) | near-duplicate, same-day, flat-stars |
| 9 | **jetbrains** | 5 | 5 | 937 | 198/d | 18/d | ▁▁▁▁▂▁▃▁▁▁█▂▁▁ | 2026-11-15 | [parthivvinod95-blip/clion-desktop](https://github.com/parthivvinod95-blip/clion-desktop) | near-duplicate |
| 10 | **osint-tool** (+nickname, osint, socmint) | 12 | 12 | 1.5k | 127/d | 24/d | ▁▁█▆▂▄▅▁▁▁▁▂▁▁ | 2026-11-13 | [StormBrawlerSack/legwork-osint-ai-investigator](https://github.com/StormBrawlerSack/legwork-osint-ai-investigator) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>desktop-application</b>: 6 repos, 2.9k stars</summary>

- [Umbra9179/clipboard-history-manager-windows](https://github.com/Umbra9179/clipboard-history-manager-windows) 1.3k★ Free open-source Windows clipboard manager with searchable history, image previ…
- [solv4626/steam-achievement-manager-windows](https://github.com/solv4626/steam-achievement-manager-windows) 1.1k★ Free open-source Steam Achievement Manager for Windows to manage game achieveme…
- [umbra0688/windows-clipboard-manager-sync](https://github.com/umbra0688/windows-clipboard-manager-sync) 214★ Free open-source Windows clipboard manager with searchable history, smart colle…
- [gordonotaminaguo008-png/syncsetup](https://github.com/gordonotaminaguo008-png/syncsetup) 153★ SyncSetup: Cross-PC app install, update, backup, and restore tool
- [DentistRoute/WInslop](https://github.com/DentistRoute/WInslop) 126★ Take full control of Windows with Winslop — a modern WinUI 3 tweaking tool for …

</details>

<details><summary><b>macro</b>: 13 repos, 1.8k stars</summary>

- [henkbonnet297/steal-a-brainrot-roblox-index-macro](https://github.com/henkbonnet297/steal-a-brainrot-roblox-index-macro) 176★ Steal a Brainrot Script & Roblox Index Macro [2026] — Base Shield Timer, Auto C…
- [kprice417/rust-recoil-script-esp-macro-2026](https://github.com/kprice417/rust-recoil-script-esp-macro-2026) 171★ Rust Recoil Script & Rust Macro Suite [2026] — Humanized Mouse Smoothing, Auto …
- [JisungDiaz447/blox-fruits-script-keyless-2026](https://github.com/JisungDiaz447/blox-fruits-script-keyless-2026) 168★ Blox Fruits Script [2026] — Keyless Auto Farm Mastery, Dragon/Kitsune Fruit Sni…
- [RijuliXiye39/grow-a-garden-script-roblox-macro](https://github.com/RijuliXiye39/grow-a-garden-script-roblox-macro) 166★ Grow a Garden Script Roblox [2026] — Keyless Auto Plant, Instant Harvest, Seed …
- [alkabdohagag/fxdeck-fivem-command-deck](https://github.com/alkabdohagag/fxdeck-fivem-command-deck) 154★ FxDeck FiveM Command Deck - Streamlined In-Game Command Interface for Modders

</details>

<details><summary><b>hack</b>: 13 repos, 2.1k stars</summary>

- [gigarectorpulse/Universal-Gaming-Hub](https://github.com/gigarectorpulse/Universal-Gaming-Hub) 266★ A universal gaming hub for games such as: CS2, Counter-Strike 2, GTA V, Fortnit…
- [QakajaVeca60/deadlock-cheat-esp-aimbot-win11](https://github.com/QakajaVeca60/deadlock-cheat-esp-aimbot-win11) 206★ Deadlock Cheat ESP Aimbot Win11 [2026] — Standalone Windows 10/11 (x64) Release…
- [ismaelkahh-netizen/brave-desktop-browser](https://github.com/ismaelkahh-netizen/brave-desktop-browser) 154★ Brave Desktop Browser: Privacy-Focused Web Browser for Windows 10/11 with Built…
- [DARSC-FIlp/minecraft-xray-mod](https://github.com/DARSC-FIlp/minecraft-xray-mod) 153★ Minecraft Xray Mod Windows: See Every Ore, Play Sharper
- [alexis1688/minecraft-client-base](https://github.com/alexis1688/minecraft-client-base) 153★ Minecraft Client Base: Modular ImGui Framework for Serious Gameplay

</details>

<details><summary><b>mev</b>: 6 repos, 871 stars</summary>

- [Norao01/solana-pump-fun-jito-bundler-sniper](https://github.com/Norao01/solana-pump-fun-jito-bundler-sniper) 182★ Jito MEV Bot & Solana Pump.fun gRPC Sniper Bundler [2026] — Sub-Millisecond Shr…
- [pinargomez/raydium-meteora-grpc-sniper-bot](https://github.com/pinargomez/raydium-meteora-grpc-sniper-bot) 171★ Raydium Sniper Bot & Solana Copy Trading Bot [2026] — Sub-Millisecond Yellowsto…
- [rajmyers29/jupiter-v6-atomic-arbitrage-bot](https://github.com/rajmyers29/jupiter-v6-atomic-arbitrage-bot) 167★ Jupiter Arbitrage Bot & Solana DEX Atomic MEV Bot [2026] — V6 Quote Router, Fla…
- [farzanamustafa936-dot/solana-pump-fun-sniper-bot](https://github.com/farzanamustafa936-dot/solana-pump-fun-sniper-bot) 153★ Feature-rich Solana Pump.fun Sniper Bot with Jito MEV protection and community …
- [guruyxs/blockrazor-documentation](https://github.com/guruyxs/blockrazor-documentation) 153★ BlockRazor Documentation: Technical Guide and Reference

</details>

<details><summary><b>radar</b>: 16 repos, 4.2k stars</summary>

- [ZiChuanLan/freebie-radar](https://github.com/ZiChuanLan/freebie-radar) 2.7k★ 白嫖与资讯资源聚合雷达：100+个源定时采集 + AI 二审过滤假福利 + 获取方式分级隔离抽奖/试用/推广 + Telegram 即时推送
- [PaulSchaefer86202/cs2-cheat-external-esp-triggerbot-v2](https://github.com/PaulSchaefer86202/cs2-cheat-external-esp-triggerbot-v2) 189★ CS2 Cheat & Counter-Strike 2 External ESP, Triggerbot & Radar Overlay [2026] — …
- [dennisyang1986/polymarket-proxy](https://github.com/dennisyang1986/polymarket-proxy) 160★ Polymarket Proxy — a local Polymarket desk inside DeepSeek Harness: deposit add…
- [deyvi9333-sys/black-ops-6-esp-aimbot](https://github.com/deyvi9333-sys/black-ops-6-esp-aimbot) 153★ Black Ops 6 ESP Aimbot: Precision ESP and Aimbot
- [diom1995/skeet-cs2-cheat](https://github.com/diom1995/skeet-cs2-cheat) 153★ Skeet Cheat: Precision Internal Framework for Competitive Play

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
