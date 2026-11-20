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
_recent 3,207 repos  2026-11-06..2026-11-20  stars>=40 · baseline 4,115 repos  2026-09-07..2026-11-05  stars>=150 · generated 2026-11-20 15:29 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **scripting** (+blender-mcp, blender-ai, blender-automation, blender-plugin, blender-scripting, 8 more) | 12 | 12 | 4.9k | 1.7k/d | 446/d | ▁▁▁▁▁▁▃▆█▄▁▃▁▆ | 2026-11-12 | [bookwjitchieni1986/blender-ai-mcp-addon](https://github.com/bookwjitchieni1986/blender-ai-mcp-addon) |
| 2 | **adobe** (+digital-art, graphic-design) | 20 | 20 | 1.8k | 1.0k/d | 425/d | ▁▁▁▁▁▁▁▁▁▁▁▅▁█ | 2026-11-15 | [FloorTurtleResurrect/free-adobe-activation](https://github.com/FloorTurtleResurrect/free-adobe-activation) |
| 3 | **blockchain** (+ethereum) | 11 | 11 | 1.6k | 437/d | 311/d | ▁▁▁▁▃▁▁▂▁▁▁█▁▂ | 2026-11-10 | [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) |
| 4 | **ai-video-generation** | 7 | 1 | 1.4k | 362/d | 245/d | ▁▁▁▁▁▁▁▁▁▁██▁▁ | 2026-11-16 | [fujc683/seedance-2-5-flash-pricing](https://github.com/fujc683/seedance-2-5-flash-pricing) |
| 5 | **streamlined** | 7 | 7 | 727 | 322/d | 190/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▄ | 2026-11-15 | [alkabdohagag/fxdeck-fivem-command-deck](https://github.com/alkabdohagag/fxdeck-fivem-command-deck) |
| 6 | **macro** (+wardogs) | 6 | 6 | 641 | 307/d | 146/d | ▁▁▁▁▁▁▁▁▁▁▁█▂▁ | 2026-11-15 | [Afabio2007/weekend-lottery-contract](https://github.com/Afabio2007/weekend-lottery-contract) |
| 7 | **delivers** | 5 | 5 | 436 | 296/d | 93/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-18 | [luciskynet-cloud/sonyvegas](https://github.com/luciskynet-cloud/sonyvegas) |
| 8 | **defi** | 6 | 6 | 735 | 230/d | 207/d | ▁▁▁▁▁▁▁▁▁▂▁█▁▂ | 2026-11-15 | [antonioRicanto/pioneercrypto](https://github.com/antonioRicanto/pioneercrypto) |
| 9 | **asset** | 9 | 9 | 1.0k | 207/d | 252/d | ▁▁▁▁▁▁▁▂▂▁▁█▁▂ | 2026-11-08 | [sarderji889900-bit/rea-game-asset-scraper](https://github.com/sarderji889900-bit/rea-game-asset-scraper) |
| 10 | **agy** | 8 | 8 | 698 | 201/d | 87/d | ▁▁▂▁▁▁▂▅▃▄█▅▅▇ | 2026-11-08 | [oil-oil/agy-fast-io](https://github.com/oil-oil/agy-fast-io) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **gemeni** (+manus, typescript-sdk, ai--manus, general-purpose, solidjs, 41 more) | 450 | 373 | 77.9k | 11.8k/d | 281/d | ▁▁▁▁▁▁▁▇█▃▁▁▁▁ | 2026-11-06 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 2 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 37 more) | 300 | 272 | 38.8k | 6.0k/d | 300/d | ▁▁▁▁▁▁▁▄█▁▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, same-day, flat-stars |
| 3 | **trial-version** (+trial, windows-software, latest, shape, conversion, 70 more) | 310 | 310 | 31.4k | 3.8k/d | 1.2k/d | ▁▁▁▁▁█▁▁▁▁▁▁▁▂ | 2026-11-06 | [brisk-thrush-husky/malware-defender-desktop](https://github.com/brisk-thrush-husky/malware-defender-desktop) | near-duplicate, same-day, flat-stars |
| 4 | **setup** (+activated, color-grading, bundled, multitrack, updater, 1 more) | 54 | 54 | 8.5k | 1.8k/d | 1.2k/d | ▁▁▂▂▁▂▂▄▇▂▁█▂▃ | 2026-11-06 | [ariamitchell54/cubase-studio-desktop](https://github.com/ariamitchell54/cubase-studio-desktop) | flat-stars |
| 5 | **utility** (+software-engineering, fortnite, configured, pre-configured, scripts, 1 more) | 56 | 56 | 7.9k | 1.7k/d | 1.2k/d | ▁▁▂▄▂▁▁▃▃▁▁█▁▃ | 2026-11-06 | [ben-miller-23/dxo-photolab-10-desktop](https://github.com/ben-miller-23/dxo-photolab-10-desktop) | near-duplicate, flat-stars |
| 6 | **activator** (+office365, kms, activation, tweak, scala, 10 more) | 93 | 93 | 13.8k | 990/d | 1/d | ▁█▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-06 | [CCardona6/office-suite-alternative-access](https://github.com/CCardona6/office-suite-alternative-access) | same-day, flat-stars |
| 7 | **community-driven** | 32 | 32 | 4.8k | 957/d | 1.6k/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▁ | 2026-11-11 | [aburhabanas-sketch/signal-bot-client](https://github.com/aburhabanas-sketch/signal-bot-client) | same-day, flat-stars |
| 8 | **game-data** (+game-overlay, game-statistics, game-utilities, statistics, first-person-shooter, 16 more) | 16 | 16 | 1.6k | 784/d | 495/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-18 | [Anonymoussgc/dayz-selora](https://github.com/Anonymoussgc/dayz-selora) | near-duplicate, same-day |
| 9 | **trainer** (+hack, fling, cheat) | 21 | 21 | 3.0k | 645/d | 902/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▁ | 2026-11-07 | [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) | same-day, flat-stars |
| 10 | **base-building** (+resource-management, survival-game, co-op-game, cooperative-game, team-play, 5 more) | 11 | 11 | 957 | 584/d | 249/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-18 | [Moyaking/rust-norvella](https://github.com/Moyaking/rust-norvella) | near-duplicate, same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>scripting</b>: 12 repos, 4.9k stars</summary>

- [bookwjitchieni1986/blender-ai-mcp-addon](https://github.com/bookwjitchieni1986/blender-ai-mcp-addon) 1.0k★ AI assistant and MCP server for Blender: visual chat, scene tools, multi-agent …
- [tiobeharxi1987/blender-ai-copilot-flow](https://github.com/tiobeharxi1987/blender-ai-copilot-flow) 515★ A controlled AI workflow for Blender: every copilot edit is a supervised tool c…
- [zovulrira1974/blender-ai-copilot-assets](https://github.com/zovulrira1974/blender-ai-copilot-assets) 511★ An asset-savvy AI copilot for Blender—search Poly Haven, Sketchfab and Poly Piz…
- [Doug-218/blender-ai-copilot-forge](https://github.com/Doug-218/blender-ai-copilot-forge) 509★ A scene-forging AI copilot for Blender—describe the layout and watch primitives…
- [fumbdendade19718/blender-ai-copilot-desk](https://github.com/fumbdendade19718/blender-ai-copilot-desk) 506★ A visual AI desk for Blender—chat, scene objects, viewport snapshots, approvals…

</details>

<details><summary><b>adobe</b>: 20 repos, 1.8k stars</summary>

- [FloorTurtleResurrect/free-adobe-activation](https://github.com/FloorTurtleResurrect/free-adobe-activation) 193★ simple tutorial adobe activation with GenP
- [kokarai/premiere-elements](https://github.com/kokarai/premiere-elements) 153★ Premiere Elements: Story-First Home Video Editing Workflow
- [yahyaouiraouf31-sys/l-ve-light-shadow-library](https://github.com/yahyaouiraouf31-sys/l-ve-light-shadow-library) 153★ Löve Light Shadow Library: 2D light and shadow rendering for Löve2D
- [MinosoaRafalimanana/adobe-dreamweaver-varvera](https://github.com/MinosoaRafalimanana/adobe-dreamweaver-varvera) 113★ Varvera edition of Adobe Dreamweaver, a web development environment for coding …
- [abhyudaychauhan/adobe-indesign-merrarin](https://github.com/abhyudaychauhan/adobe-indesign-merrarin) 113★ Provides layout and typesetting tools for structured, multi-page document produ…

</details>

<details><summary><b>blockchain</b>: 11 repos, 1.6k stars</summary>

- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) 227★ Solana validator health in 60 seconds: score, leader duties, rewards, disk fore…
- [sjohansson2004/Exodus-Fake-Balance](https://github.com/sjohansson2004/Exodus-Fake-Balance) 188★ Wallet UI simulation tool for BTC, ETH, SOL, XRP, and 200+ assets. Customize di…
- [EmeerMacapili/ethereum-anomaly-detection](https://github.com/EmeerMacapili/ethereum-anomaly-detection) 153★ Ethereum Anomaly Detection: Behavioral Analysis and Threat Identification
- [ZeekCursos/metaid-file-system](https://github.com/ZeekCursos/metaid-file-system) 153★ MetaID File System: Blockchain-Based Decentralized File Storage and Service Pla…
- [abhijitacharyathegoat-collab/7fchain-blockchain](https://github.com/abhijitacharyathegoat-collab/7fchain-blockchain) 153★ 7FChain Blockchain: Desktop Node Software for Decentralized Ledger Infrastructu…

</details>

<details><summary><b>ai-video-generation</b>: 7 repos, 1.4k stars</summary>

- [fujc683/seedance-2-5-flash-pricing](https://github.com/fujc683/seedance-2-5-flash-pricing) 216★ Seedance 2.5 Flash cost per second of video, with comparisons.
- [fujc683/seedance-2-5-flash-camera-movements](https://github.com/fujc683/seedance-2-5-flash-camera-movements) 209★ 12 camera moves for text-to-video, with copy-paste prompt phrases.
- [fujc683/seedance-2-5-flash-reference-video](https://github.com/fujc683/seedance-2-5-flash-reference-video) 208★ Control Seedance 2.5 Flash motion with a first frame or reference clip.
- [fujc683/seedance-2-5-flash-api](https://github.com/fujc683/seedance-2-5-flash-api) 207★ Seedance 2.5 Flash API: text-to-video endpoint, parameters and errors.
- [fujc683/seedance-2-5-flash-alternatives](https://github.com/fujc683/seedance-2-5-flash-alternatives) 205★ Seedance 2.5 Flash vs Seedance 2.0, Kling 4.0 Flash and Veo 3.

</details>

<details><summary><b>streamlined</b>: 7 repos, 727 stars</summary>

- [alkabdohagag/fxdeck-fivem-command-deck](https://github.com/alkabdohagag/fxdeck-fivem-command-deck) 154★ FxDeck FiveM Command Deck - Streamlined In-Game Command Interface for Modders
- [tahsintasnuva/voice-notes-pipeline](https://github.com/tahsintasnuva/voice-notes-pipeline) 153★ Voice Notes Pipeline: Automation Script for Streamlined Note Processing
- [vkindustries49-star/minectaft-on-rust-easy-launch](https://github.com/vkindustries49-star/minectaft-on-rust-easy-launch) 101★ Launch and manage Minecraft on Rust through a streamlined setup and launcher.
- [kenzz-devv/open-webui-talora-ai-workspace](https://github.com/kenzz-devv/open-webui-talora-ai-workspace) 94★ Streamlined workspace for organizing and running AI workflows in one place.
- [samuelmatus/canva-magic-studio-workbench](https://github.com/samuelmatus/canva-magic-studio-workbench) 94★ Canva Magic Studio Workbench: Streamlined Workflow for Modern Teams

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
