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
_recent 3,380 repos  2026-11-05..2026-11-19  stars>=40 · baseline 4,096 repos  2026-09-06..2026-11-04  stars>=150 · generated 2026-11-19 15:48 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **scripting** (+blender-mcp, 3d-automation, blender-agents, blender-ai, blender-assistant, 8 more) | 8 | 8 | 3.4k | 512/d | 106/d | ▁▁▁▁▁▁▁▄▅█▄▁▃▁ | 2026-11-12 | [tiobeharxi1987/blender-ai-copilot-flow](https://github.com/tiobeharxi1987/blender-ai-copilot-flow) |
| 2 | **apex** | 5 | 5 | 3.2k | 407/d | 232/d | ▁▁▁▁▁▁▂█▄▄▄▃▃▂ | 2026-11-06 | [apex-compute/ANR](https://github.com/apex-compute/ANR) |
| 3 | **blockchain** (+ethereum) | 14 | 14 | 1.8k | 358/d | 302/d | ▃▁▁▁▁▃▁▁▃▂▂▁█▁ | 2026-11-05 | [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) |
| 4 | **systemhelper** | 5 | 5 | 2.3k | 270/d | 220/d | ▁▂▂▂▁▁▂▂▂█▆▄▃▄ | 2026-11-05 | [Eynnzerr/TelemetryCleaner](https://github.com/Eynnzerr/TelemetryCleaner) |
| 5 | **asset** | 9 | 9 | 967 | 200/d | 227/d | ▁▁▁▁▁▁▁▁▂▂▁▁█▁ | 2026-11-05 | [sarderji889900-bit/rea-game-asset-scraper](https://github.com/sarderji889900-bit/rea-game-asset-scraper) |
| 6 | **modders** | 5 | 5 | 766 | 192/d | 255/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-15 | [ahmedmahtab9991-cpu/scurz-fps-plus](https://github.com/ahmedmahtab9991-cpu/scurz-fps-plus) |
| 7 | **hero** | 6 | 6 | 745 | 168/d | 209/d | ▁▁▁▁▂▁▁▁▁▁▁▁█▁ | 2026-11-09 | [donsimox0-wq/azerothcore-personal-loot-mod](https://github.com/donsimox0-wq/azerothcore-personal-loot-mod) |
| 8 | **item** | 5 | 5 | 575 | 152/d | 178/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-05 | [Ffcj2025/steam-community-market-scraper](https://github.com/Ffcj2025/steam-community-market-scraper) |
| 9 | **address** | 6 | 6 | 754 | 137/d | 108/d | ▁▃▂▃▂▁▁▁▆█▁█▇▁ | 2026-11-06 | [zacharyrogue/Crypto-Whale-Tracker](https://github.com/zacharyrogue/Crypto-Whale-Tracker) |
| 10 | **oot** (+ocarina) | 6 | 6 | 923 | 122/d | 91/d | ▁▂▂▃▃▃▂▂▅██▆▅▃ | 2026-11-06 | [pixl27/ProjectReLink](https://github.com/pixl27/ProjectReLink) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **gemeni** (+manus, typescript-sdk, ai--manus, general-purpose, solidjs, 41 more) | 494 | 380 | 80.5k | 14.7k/d | 394/d | ▁▁▁▁▁▁▁▁▇█▃▁▁▁ | 2026-11-06 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 2 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 38 more) | 328 | 283 | 40.3k | 7.5k/d | 348/d | ▁▁▁▁▁▁▁▁▄█▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, flat-stars |
| 3 | **trial-version** (+trial, windows-software, latest, windows-10, conversion, 65 more) | 299 | 299 | 30.2k | 3.6k/d | 214/d | ▁▁▁▁▁▁█▁▁▁▁▁▁▁ | 2026-11-06 | [brisk-thrush-husky/malware-defender-desktop](https://github.com/brisk-thrush-husky/malware-defender-desktop) | near-duplicate, same-day, flat-stars |
| 4 | **setup** (+activated) | 54 | 54 | 9.0k | 1.8k/d | 994/d | ▁▁▁▂▂▁▂▂▅█▂▁█▂ | 2026-11-05 | [ariamitchell54/cubase-studio-desktop](https://github.com/ariamitchell54/cubase-studio-desktop) | flat-stars |
| 5 | **utility** (+software-engineering, configured, pre-configured, acrobat, scripts, 2 more) | 52 | 52 | 7.2k | 1.7k/d | 1.0k/d | ▁▁▁▂▄▂▁▁▃▄▁▁█▁ | 2026-11-06 | [ben-miller-23/dxo-photolab-10-desktop](https://github.com/ben-miller-23/dxo-photolab-10-desktop) | near-duplicate, flat-stars |
| 6 | **community-driven** (+community) | 33 | 33 | 5.0k | 1.2k/d | 1.6k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-11 | [aburhabanas-sketch/signal-bot-client](https://github.com/aburhabanas-sketch/signal-bot-client) | same-day, flat-stars |
| 7 | **activator** (+activation, kms, scala, office365, tweak, 9 more) | 94 | 94 | 13.9k | 1.1k/d | 4/d | ▁▁█▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-06 | [haroonwattoo556677-max/ios-forensic-exploitation-framework](https://github.com/haroonwattoo556677-max/ios-forensic-exploitation-framework) | same-day, flat-stars |
| 8 | **apimart** (+ai-image-generation, ai-video-generation, gpt-image) | 23 | 1 | 3.3k | 777/d | 684/d | █▂▁▁▁▁▁▁▁▁▁█▇▁ | 2026-11-05 | [fujc683/seedance-2-5-flash-pricing](https://github.com/fujc683/seedance-2-5-flash-pricing) | few-owners, flat-stars |
| 9 | **trainer** (+fling, cheat) | 21 | 21 | 3.0k | 743/d | 916/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-05 | [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) | same-day, flat-stars |
| 10 | **coregold** (+vcc, applepay, usdt, finops, architectural, 6 more) | 58 | 55 | 2.9k | 316/d | 215/d | ▃▁▁▃▃▇█▆▇▂▁▆▃▅ | 2026-11-05 | [manassiradao368-tech/gemini-2-flash-thinking-api-guard](https://github.com/manassiradao368-tech/gemini-2-flash-thinking-api-guard) | near-duplicate, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>scripting</b>: 8 repos, 3.4k stars</summary>

- [tiobeharxi1987/blender-ai-copilot-flow](https://github.com/tiobeharxi1987/blender-ai-copilot-flow) 514★ A controlled AI workflow for Blender: every copilot edit is a supervised tool c…
- [zovulrira1974/blender-ai-copilot-assets](https://github.com/zovulrira1974/blender-ai-copilot-assets) 510★ An asset-savvy AI copilot for Blender—search Poly Haven, Sketchfab and Poly Piz…
- [Doug-218/blender-ai-copilot-forge](https://github.com/Doug-218/blender-ai-copilot-forge) 509★ A scene-forging AI copilot for Blender—describe the layout and watch primitives…
- [precygtrucqui1981/blender-ai-copilot-lab](https://github.com/precygtrucqui1981/blender-ai-copilot-lab) 507★ An AI lab for Blender where manager–worker–reviewer agent teams run multi-step …
- [fumbdendade19718/blender-ai-copilot-desk](https://github.com/fumbdendade19718/blender-ai-copilot-desk) 505★ A visual AI desk for Blender—chat, scene objects, viewport snapshots, approvals…

</details>

<details><summary><b>apex</b>: 5 repos, 3.2k stars</summary>

- [apex-compute/ANR](https://github.com/apex-compute/ANR) 2.7k★ Apex Neural Rendering (ANR) by Apex Compute
- [Sxuan-Coder/open-apex-drama](https://github.com/Sxuan-Coder/open-apex-drama) 204★ 第三方水果短剧客户端，免登录、免广告、免费使用，支持真人剧、AI漫剧、AI短剧等多种短剧。支持Windows和安卓双端播放
- [Ar6thr-333/apex-legends-fps-optimizer](https://github.com/Ar6thr-333/apex-legends-fps-optimizer) 153★ Apex Legends FPS Optimizer — Open-Source Windows Performance Boost
- [SoldierMultiply/footstep-equalizer](https://github.com/SoldierMultiply/footstep-equalizer) 75★ Footstep equalizer for FPS games: auto EQ for Valorant, CS2, Apex
- [DiamondCockatooFlow/Apex-Legends-cheat-client](https://github.com/DiamondCockatooFlow/Apex-Legends-cheat-client) 53★ 

</details>

<details><summary><b>blockchain</b>: 14 repos, 1.8k stars</summary>

- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) 227★ Solana validator health in 60 seconds: score, leader duties, rewards, disk fore…
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) 163★ Non-custodial, encrypted file storage & sharing platform with Stellar payments …
- [EmeerMacapili/ethereum-anomaly-detection](https://github.com/EmeerMacapili/ethereum-anomaly-detection) 153★ Ethereum Anomaly Detection: Behavioral Analysis and Threat Identification
- [ZeekCursos/metaid-file-system](https://github.com/ZeekCursos/metaid-file-system) 153★ MetaID File System: Blockchain-Based Decentralized File Storage and Service Pla…
- [abhijitacharyathegoat-collab/7fchain-blockchain](https://github.com/abhijitacharyathegoat-collab/7fchain-blockchain) 153★ 7FChain Blockchain: Desktop Node Software for Decentralized Ledger Infrastructu…

</details>

<details><summary><b>systemhelper</b>: 5 repos, 2.3k stars</summary>

- [Eynnzerr/TelemetryCleaner](https://github.com/Eynnzerr/TelemetryCleaner) 1.9k★ 基于 Shizuku 免 Root 清除国产安卓 SystemHelper、RegService 等系统预装隐私数据收集模块
- [vivibibi30/hyperpguard](https://github.com/vivibibi30/hyperpguard) 137★ 可配置的应用行为开关模块（LSPosed）：网络、存储、接口、采集四层，纯本地
- [acxun/hyperos-dm-report](https://github.com/acxun/hyperos-dm-report) 120★ HyperOS preinstalled carrier DM components: data collection, crypto, and decryp…
- [zhang010416/carrier-dm-blocker](https://github.com/zhang010416/carrier-dm-blocker) 77★ 三家运营商预装 DM 组件拦截（联通 SystemHelper / 移动 RegService / 电信 CTAutoRegist）：LSPosed + Ke…
- [zd-Ethan/systemhelper](https://github.com/zd-Ethan/systemhelper) 42★ SystemHelper 免 Root 用户级卸载方案：小米 14 Pro / 小米 17 Pro Max 实测记录

</details>

<details><summary><b>asset</b>: 9 repos, 967 stars</summary>

- [sarderji889900-bit/rea-game-asset-scraper](https://github.com/sarderji889900-bit/rea-game-asset-scraper) 154★ REA Game Asset Scraper: Scoped Asset Extraction for Visual Workflows
- [erwachirakenya-dot/gflfc-decryption-toolkit](https://github.com/erwachirakenya-dot/gflfc-decryption-toolkit) 153★ GFLFC Decryption Toolkit: Fire Control UnityFS XOR, FlatBuffers Manifest, CDN S…
- [jalelhmem26-hub/rpg-maker-decrypter](https://github.com/jalelhmem26-hub/rpg-maker-decrypter) 153★ Fast RPG Maker archive and asset decrypter with built-in asset inspection
- [miguellclc/cod3-extraction-tools](https://github.com/miguellclc/cod3-extraction-tools) 153★ Extraction Tools: Xbox 360 asset extractors, format notes, and game checks
- [wraithlegislatorknot/domesday-osint-asset-records](https://github.com/wraithlegislatorknot/domesday-osint-asset-records) 112★ OSINT search of public financial and property records.

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
