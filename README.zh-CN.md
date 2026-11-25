<div align="center">

# starwave

**GitHub Trending 告诉你哪些仓库已经火了。<br>starwave 告诉你哪些浪潮正在形成。**

[![ci](https://github.com/Chaoqi31/starwave/actions/workflows/ci.yml/badge.svg)](https://github.com/Chaoqi31/starwave/actions/workflows/ci.yml)
[![daily snapshot](https://github.com/Chaoqi31/starwave/actions/workflows/daily.yml/badge.svg)](https://github.com/Chaoqi31/starwave/actions/workflows/daily.yml)
[![dependencies: 0](https://img.shields.io/badge/dependencies-0-2ea44f)](package.json)
[![node >= 20](https://img.shields.io/badge/node-%3E%3D20-339933)](package.json)
[![license: MIT](https://img.shields.io/badge/license-MIT-0969da)](LICENSE)

[English](README.md) · 简体中文 · [在线看今日浪潮](https://chaoqi31.github.io/starwave/) · [今日 JSON](https://chaoqi31.github.io/starwave/latest.json)

<img src="assets/waves.svg" alt="starwave 终端输出：按每日新增 star 排序的今日浪潮，以及疑似协同的仓库簇" width="100%">

</div>

所谓浪潮，是一批新仓库在同一时间开始用同一个词。它可能围绕上周刚发布的模型，可能是大家都在写插件的某个 harness，也可能是一种突然流行的 demo 形式。starwave 读取 GitHub 上最近 14 天新建的全部仓库，找出和前 60 天相比用量突增的词，再把仓库按这些词聚成组。每组按每天新增 star 排序，由同一模板复制出来的仓库簇单独列出。

```bash
npx github:Chaoqi31/starwave
```

需要 Node 20 以上和一个 GitHub token。已登录的 `gh` 命令行可以直接用，设置 `GITHUB_TOKEN` 也行。

## 2026-09-30 这一天它发现了什么

以下数字来自当天 12:53 UTC 的抓取，也就是测试用的那份数据。顶部的图和下面的表每天更新。

- **jev：15 天 249 个仓库、14.5 万 star。** TypeSafe AI 在 9 月 15 日发布 Jev 决策模型。starwave 把 40 个词（`laya`、`typesafe`、`system-one`、`decision-model` 等）合并成这一个浪潮，这是任何单个关键词搜索都拼不出来的。单日最高是 9 月 21 日，新增 24,568 个 star。现在正在降温：这 14 天里平均每天新增 1.03 万，最近 3 天每天 5,100。
- **opus：21 个仓库，都是用 Claude Opus 5.5 做出来的东西，其中 13 个是写代码渲染的视频。** 最早的一个才 8 天，最近 3 天每天新增 1,100 个 star，而当天 GitHub Trending 的日榜和周榜上一个都没有。
- **有两个仓库簇疑似协同。** `apimart` 的 173 个仓库全部提到同一家 API 中转商，其中 146 个创建于 9 月 24 日。抓取 4 小时后，其中 105 个已经返回 404。`auto-raid-complete-script` 浪潮的 44 个仓库全是 Roblox 脚本注入器，全部创建于 9 月 18 日，最近 14 天的 star 有 98% 落在 9 月 27 日这一天。starwave 把它们放进"疑似协同"（Looks coordinated），不参与排名。

## 为什么不直接看 GitHub Trending？

| | GitHub Trending | starwave |
|---|---|---|
| 排的是什么 | 单个仓库 | 共享同一个突增词的一组新仓库 |
| 看哪些仓库 | 不限年龄 | 最近 14 天新建的 |
| 一次发布带出 249 个周边仓库 | 各自单列，前提是能挤进前 25 名 | 一个浪潮，列出每个仓库 |
| 几乎一模一样的仓库簇 | 没有这类视图 | 单独列出，每个标记都写明依据 |
| 势头 | 今日、本周或本月的 star | 最近 3 天的日均 star，外加 14 天走势图 |
| 输出 | 网页 | 终端表格、Markdown、JSON，以及 agent skill |

## 今日浪潮

GitHub Action 每天 06:17 UTC（北京时间 14:17）重写这张表。往日数据在 [`data/`](data)。

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

## 用法

```bash
npx github:Chaoqi31/starwave                           # 最近 14 天的浪潮
npx github:Chaoqi31/starwave --show jev                # 某个浪潮的全部仓库，附 14 天 star 走势
npx github:Chaoqi31/starwave --days 7 --min-stars 100  # 更短的窗口，更高的门槛
npx github:Chaoqi31/starwave --json                    # 完整快照，给脚本和 agent 用
npx github:Chaoqi31/starwave --md                      # Markdown 表格，可以直接贴
```

第一次运行要 3 到 5 分钟，因为 GitHub 搜索 API 每分钟只允许 30 次请求。结果会在 `~/.cache/starwave` 缓存 6 小时，之后再跑是秒出。第一次执行 `npx github:` 还要下载并构建 starwave，实测网速快时 10 秒，网速慢时约 2 分钟。想长期保留 `starwave` 命令，运行 `npm install -g github:Chaoqi31/starwave`。

| 参数 | 默认值 | 含义 |
|---|---|---|
| `--days <n>` | 14 | 近期窗口的天数 |
| `--min-stars <n>` | 40 | 近期仓库的最低 star 数 |
| `--baseline-days <n>` | 60 | 近期窗口之前的基线天数 |
| `--baseline-min-stars <n>` | 150 | 基线仓库的最低 star 数 |
| `--top <n>` | 15 | 每个分区打印多少个浪潮 |
| `--show <id>` | | 列出某个浪潮的全部仓库 |
| `--json`、`--md` | | 输出 JSON 或 Markdown，而不是表格 |
| `--from <file>` | | 读取保存过的抓取结果或快照（`.json` 或 `.json.gz`），不请求 GitHub |
| `--save <file>` | | 保存原始抓取结果 |
| `--no-history` | | 跳过 star 历史（约 500 次请求） |
| `--no-cache`、`--no-color` | | 忽略缓存、纯文本输出 |

## 在 agent 里用

`skills/starwave/SKILL.md` 教 Claude Code、Codex 以及其他读取 `SKILL.md` 的 agent 运行 starwave 并总结结果。装好之后直接问："这周 GitHub 上什么在爆？"

在 Claude Code 里：

```text
/plugin marketplace add Chaoqi31/starwave
/plugin install starwave@starwave
```

用 skills 命令行，适用于任何 agent：

```bash
npx skills add Chaoqi31/starwave
```

## 原理

1. 抓取最近 14 天新建、star 不少于 40 的全部仓库，以及再往前 60 天、star 不少于 150 的仓库作为基线。搜索 API 每次查询最多返回 1,000 条，所以 starwave 按日期切片查询。
2. 把每个仓库变成一组词：名称和描述里的拉丁字母词、复合词拆出的部分（`hermes-jev-skills` 也会拆出 `jev`）、以及 topics，去掉停用词。
3. 先把模板化仓库挑出来。某个仓库的词和另一个 owner 的仓库 Jaccard 相似度达到 0.6，就算作复制品，复制品单独分组。
4. 按突增度给每个词打分：带这个词的近期仓库数，除以基线预测的数量。仓库集合重叠 40% 以上的词合并成一个浪潮。除了浪潮词以外互相毫无共同点的浪潮会被丢掉。
5. 抓取每个浪潮里每个仓库的 star 历史，每次并发 6 个。这样得到最近 3 天的日均 star 和 14 天走势，统计范围和生命周期日均完全一致。

阈值、取值理由以及锁定它们的测试都在 [DESIGN.md](DESIGN.md)（英文）。

## 不装任何东西也能拿到数据

- [chaoqi31.github.io/starwave](https://chaoqi31.github.io/starwave/) 展示今日浪潮。
- [`latest.json`](https://chaoqi31.github.io/starwave/latest.json) 是今日快照，结构见 [DESIGN.md](DESIGN.md#data-shapes-srctypests) 里的 `Snapshot`。
- [`data/YYYY-MM-DD.json.gz`](data) 每天一份快照，每份约 40 KB。

## 当库用

包导出 `detectWaves`、`renderMarkdown`、`renderTable` 和全部类型。库本身不发网络请求，你传入 `Repo[]` 数组即可，比如 `--save capture.json` 保存下来的数据。

```ts
import { readFileSync } from "node:fs";
import { detectWaves, renderMarkdown } from "starwave";

const { recentWindow, baselineWindow, recent, baseline } = JSON.parse(readFileSync("capture.json", "utf8"));
const waves = detectWaves(recent, baseline, { today: "2026-09-30" });
const snapshot = { generatedAt: new Date().toISOString(), recentWindow, baselineWindow, recentCount: recent.length, baselineCount: baseline.length, waves };
console.log(renderMarkdown(snapshot, { top: 10 }));
```

## 常见问题

**被标记的浪潮就是刷星吗？** starwave 不下这个结论。每个标记只说明测到了什么：`same-day` 是 60% 以上的仓库在同一天创建，`few-owners` 是 owner 数不到仓库数的一半，`flat-stars` 是没有任何一个仓库占到总 star 的 10%，`near-duplicate` 是这些仓库由同一个模板复制而来。用 `--show <id>` 自己看一眼那些仓库。

**为什么只看最近 14 天的仓库？** 成熟仓库 GitHub Trending 已经覆盖了。浪潮最先出现在互相借用词汇的新仓库里。

**能读中文、日文、韩文描述吗？** 暂时不能。中日韩文描述只贡献其中的拉丁字母词和 topics。不过很多中文仓库仍然能靠名称和 topics 进入浪潮。

**跑一次要花多少钱？** 只花 API 配额：用你自己的 token，大约 60 次搜索请求和 500 次 star 历史请求。

**阈值是怎么定的？** 在 2026-09-30 的一份抓取数据上调出来的，这份数据也是测试夹具。测试里点名了每个阈值必须保留或排除的仓库。

## Star 历史

[![Chaoqi31/starwave 的 star 历史](https://api.star-history.com/svg?repos=Chaoqi31/starwave&type=Date)](https://star-history.com/#Chaoqi31/starwave&Date)

如果 starwave 比你的信息流更早让你看到了某个浪潮，点个 star，能帮下一个人找到它。

MIT 许可证。
