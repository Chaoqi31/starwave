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
_recent 2,148 repos  2026-09-26..2026-10-10  stars>=40 · baseline 2,900 repos  2026-07-28..2026-09-25  stars>=150 · generated 2026-10-10 12:35 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **artex** | 7 | 7 | 4.8k | 2.0k/d | 1.4k/d | ▁▁▁▁▁▁▁▁▁▁▁▂█▇ | 2026-10-02 | [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) |
| 2 | **revolutionize** (+cutting, vfx) | 9 | 9 | 1.3k | 1.3k/d | 437/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-09 | [Haircloboutique/Cubase](https://github.com/Haircloboutique/Cubase) |
| 3 | **soroban** (+stellar, smart-contracts, defi, settlement) | 18 | 9 | 2.4k | 1.2k/d | 803/d | ▁▁▁▁▁▁▁▁▁▁▁█▇▆ | 2026-09-26 | [StellarHyperion/stellarhyperion-contracts](https://github.com/StellarHyperion/stellarhyperion-contracts) |
| 4 | **hack** | 14 | 14 | 1.3k | 1.0k/d | 395/d | ▁▁▁▁▁▁▁▁▁▁▁▁▃█ | 2026-10-03 | [attowarriorbond/SolidWorks-CAD](https://github.com/attowarriorbond/SolidWorks-CAD) |
| 5 | **ps4** | 9 | 9 | 2.0k | 537/d | 481/d | ▁▁▁▁▁▁▁▂▃▂▂█▆▃ | 2026-09-30 | [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) |
| 6 | **recompiled** | 9 | 8 | 1.1k | 208/d | 83/d | ▃▆▅▃▅▆▃▅▅▇▆▄▄█ | 2026-09-26 | [chrissotraidis/bluewake](https://github.com/chrissotraidis/bluewake) |
| 7 | **pick** | 7 | 7 | 1.0k | 119/d | 79/d | ▁▁▁▁▁▅▇█▄▅▆▅▄▂ | 2026-09-26 | [strands-labs/strands-decider](https://github.com/strands-labs/strands-decider) |
| 8 | **proton** | 5 | 5 | 896 | 104/d | 126/d | ▃▂▂▃▃▃▃▂▂▂▄▅█▄ | 2026-09-26 | [fxgl/steamac](https://github.com/fxgl/steamac) |
| 9 | **size** | 6 | 6 | 493 | 85/d | 70/d | ▁▁▂▁▂▂▂▆▂▃▄█▅▃ | 2026-09-27 | [yfyeung/PrunedCTC](https://github.com/yfyeung/PrunedCTC) |
| 10 | **tensorfold** | 5 | 4 | 807 | 82/d | 62/d | ▁▁▁▆▃█▃▃▃▂▂▃▄▃ | 2026-09-28 | [MiaAI-Lab/GLM-5.3-Flash-EXL3-2x-DGX-Sparks-TensorFold](https://github.com/MiaAI-Lab/GLM-5.3-Flash-EXL3-2x-DGX-Sparks-TensorFold) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **providing** (+configurations, streamlines, optimizes, professional, utility, 25 more) | 86 | 86 | 15.6k | 15.4k/d | 5.2k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-09-26 | [KindStatesman/KMS-Pico](https://github.com/KindStatesman/KMS-Pico) | same-day, flat-stars |
| 2 | **reimplementation** (+clean-room) | 12 | 5 | 73.4k | 8.5k/d | 17.7k/d | ▁▁▁▁▁▁▁▁▁▂▅▇█▇ | 2026-09-30 | [storytold/photocraft](https://github.com/storytold/photocraft) | few-owners |
| 3 | **minimum** (+top-up, image2, image2.5, pay-as-you-go, usd, 181 more) | 668 | 371 | 35.2k | 3.2k/d | 3.1k/d | ▁▁▁▁▂▁▁▇███▆▃▄ | 2026-09-28 | [apimartnsksu/llm-api-relay-cheap-cn](https://github.com/apimartnsksu/llm-api-relay-cheap-cn) | near-duplicate, flat-stars |
| 4 | **argolink** (+polling, argolink-focused, fields, async) | 17 | 17 | 742 | 131/d | 90/d | ▁▁▁▁▁▁▁▁▁▅█▃▃▅ | 2026-10-04 | [eliasbrookner7/seedance-2-5-api-provider](https://github.com/eliasbrookner7/seedance-2-5-api-provider) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>artex</b>: 7 repos, 4.8k stars</summary>

- [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) 2.7k★ AI 自主渗透测试系统 \| 百度“agent+”攻防挑战赛冠军项目
- [jiwoochris/artex-ko](https://github.com/jiwoochris/artex-ko) 912★ ARTEX 한국어판 · AI 자율 침투 테스트 프레임워크 현지화 (upstream: Autumn-27/ARTEX, AGPL-3.0)
- [Hinln/ARTEX](https://github.com/Hinln/ARTEX) 515★ ARTEX 源码备份：基于 Autumn-27/ARTEX v0.3.15，保留原始提交历史与 AGPL-3.0 许可证。
- [cskwork/scopeweaver](https://github.com/cskwork/scopeweaver) 335★ ScopeWeaver: English and Korean localization of ARTEX, with preserved AGPL-3.0 …
- [sharenjun/ARTEX-main](https://github.com/sharenjun/ARTEX-main) 105★ 可以提交issue和优化思路，会维护

</details>

<details><summary><b>revolutionize</b>: 9 repos, 1.3k stars</summary>

- [Haircloboutique/Cubase](https://github.com/Haircloboutique/Cubase) 300★ Revolutionize your music production with this robust digital audio workstation …
- [Charactervefilter/Reason-14](https://github.com/Charactervefilter/Reason-14) 200★ Revolutionize your workflow with 'Reason 14', a bespoke desktop utility designe…
- [ChunkPoolChain/BorisFX](https://github.com/ChunkPoolChain/BorisFX) 198★ Revolutionize your video editing workflow with the robust Borisfx plugin soluti…
- [Demonsemarvel/Auslogics](https://github.com/Demonsemarvel/Auslogics) 116★ Revolutionize your audio production with Auslogics - an innovative digital audi…
- [BowyerSqueeze/Avid-Media-Composer](https://github.com/BowyerSqueeze/Avid-Media-Composer) 103★ Revolutionize professional video and audio post-production workflows by utilizi…

</details>

<details><summary><b>soroban</b>: 18 repos, 2.4k stars</summary>

- [StellarHyperion/stellarhyperion-contracts](https://github.com/StellarHyperion/stellarhyperion-contracts) 149★ Cross-chain router contracts for Stellar and EVM networks, with CCTP, Axelar, a…
- [StellarHyperion/stellarhyperion-backend](https://github.com/StellarHyperion/stellarhyperion-backend) 148★ Backend infrastructure for indexing, monitoring, and managing Hyperion cross-ch…
- [StellarHyperion/stellarhyperion-frontend](https://github.com/StellarHyperion/stellarhyperion-frontend) 148★ Web interface for Hyperion, enabling cross-chain routing, live quotes, wallet c…
- [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) 132★ Open-source Stellar and Soroban API for peer-to-peer USDC settlement, wallet au…
- [Local-Settle/local-settle-frontend](https://github.com/Local-Settle/local-settle-frontend) 132★ Open-source peer-to-peer payments on Stellar and Soroban. Connect a wallet, tra…

</details>

<details><summary><b>hack</b>: 14 repos, 1.3k stars</summary>

- [attowarriorbond/SolidWorks-CAD](https://github.com/attowarriorbond/SolidWorks-CAD) 309★ Solidworks Cad meticulously configures professional desktop software utilities …
- [deepkiwiraid/Canva-Pro](https://github.com/deepkiwiraid/Canva-Pro) 301★ Integrates seamlessly with professional desktop software utilities to provide a…
- [floorwrenmold/IDM](https://github.com/floorwrenmold/IDM) 98★ Idm is a professional desktop software utility configuration that enables users…
- [Janina21/Crypto-Checker](https://github.com/Janina21/Crypto-Checker) 83★ Python-based crypto wallet analysis tool with multi-threaded address and seed p…
- [majestymagpiepattern/Modern-FPS-Booster-2026-Win](https://github.com/majestymagpiepattern/Modern-FPS-Booster-2026-Win) 74★ FPS Tweaks is a collection of settings and optimizations designed to improve ga…

</details>

<details><summary><b>ps4</b>: 9 repos, 2.0k stars</summary>

- [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) 1.3k★ Native PC port of P.T. (runs from your own PS4 game files)
- [bigmak94/AstroQuest](https://github.com/bigmak94/AstroQuest) 221★ ASTRO BOT Rescue Mission (PS4, PlayStation VR) in virtual reality on Meta Quest…
- [iHaiDeeZ/DolphinPS4](https://github.com/iHaiDeeZ/DolphinPS4) 93★ Dolphin (GameCube/Wii emulator) for jailbroken PS4: Vulkan on the PS4 GPU, PSP-…
- [Yharnam-Hunters/Paleblood](https://github.com/Yharnam-Hunters/Paleblood) 75★ A decompilation of Bloodborne (CUSA03173 v1.09) with its own runtime: the game'…
- [IFreemz/shadPS4-Bloodborne-DLSS-FSR](https://github.com/IFreemz/shadPS4-Bloodborne-DLSS-FSR) 73★ NVIDIA DLSS Super Resolution and AMD FSR 3.1 / FSR 4 for Bloodborne on shadPS4 …

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
