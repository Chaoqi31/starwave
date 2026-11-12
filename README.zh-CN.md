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
_recent 2,561 repos  2026-10-29..2026-11-12  stars>=40 · baseline 3,820 repos  2026-08-30..2026-10-28  stars>=150 · generated 2026-11-12 15:19 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **ocarina** | 6 | 6 | 10.1k | 1.5k/d | 1.7k/d | ▁▁▁▁▁▁▁▁▄▇▆█▆▅ | 2026-11-05 | [NotRexed/Hookshot](https://github.com/NotRexed/Hookshot) |
| 2 | **blockchain** (+ethereum) | 10 | 10 | 2.2k | 366/d | 325/d | ▁▁▃▁▃▃▄▆▃▁▂▁█▇ | 2026-10-30 | [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) |
| 3 | **enhancements** | 5 | 5 | 2.1k | 289/d | 428/d | ▁▁▁▁▂▁▂▂▂▄▃▆▅█ | 2026-10-29 | [shivsupratik/windows-optimizer](https://github.com/shivsupratik/windows-optimizer) |
| 4 | **eglantine** | 6 | 6 | 1.3k | 169/d | 45/d | ▁▁▁▁▂▂▃▆█▅▃▂▂▂ | 2026-11-01 | [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) |
| 5 | **que** | 6 | 6 | 1.1k | 149/d | 47/d | ▁▁▁▆█▇▄▃▅▃▂▂▂▃ | 2026-10-30 | [mille-okws/pestinha](https://github.com/mille-okws/pestinha) |
| 6 | **flight** (+endless, ads-b) | 10 | 10 | 1.3k | 143/d | 52/d | ▁▁▁▁▃██▄▂▃▄▂▂▂ | 2026-10-29 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 7 | **codes** | 5 | 5 | 464 | 130/d | 10/d | ▁▃█▁▂▁▄▁█▂▆▂▂▁ | 2026-10-29 | [Townlanurture/aegis-skin-terminal](https://github.com/Townlanurture/aegis-skin-terminal) |
| 8 | **nintendo-switch-2** | 5 | 5 | 1.3k | 126/d | 118/d | ▁▃▂▂▄▆▄▃▄▅█▆▅▄ | 2026-10-30 | [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) |
| 9 | **portrait** | 7 | 7 | 1.3k | 124/d | 84/d | ▃▅▄▆█▅▃▃▅▅▇▄▃▇ | 2026-10-29 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 10 | **gpl-3.0** | 7 | 7 | 861 | 101/d | 55/d | ▁▁▄█▃▃▃▂▂▂▃▂▃▃ | 2026-10-30 | [0xCodez/DuoDesk](https://github.com/0xCodez/DuoDesk) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **trial-version** (+trial, windows-software, windows-10, latest, download, 70 more) | 367 | 367 | 38.4k | 18.3k/d | 12.3k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-30 | [uchihamx999-beep/imei-repair-toolkit](https://github.com/uchihamx999-beep/imei-repair-toolkit) | same-day, flat-stars |
| 2 | **utility** (+windows-app, software-engineering, setup, configured, pre-configured, 10 more) | 117 | 117 | 88.6k | 15.3k/d | 22.1k/d | ▁▁▁▁▁▁▁▁▁▄▃▄▄█ | 2026-10-29 | [mahmoudtawfik1998/secure-pdf-document-processor](https://github.com/mahmoudtawfik1998/secure-pdf-document-processor) | near-duplicate, same-day, flat-stars |
| 3 | **activator** (+kms, activation, massgravel, office365, scala, 22 more) | 135 | 135 | 19.6k | 3.2k/d | 2/d | ▁▁▁▁▁▁▁▁▁█▁▁▁▁ | 2026-10-29 | [CCardona6/office-suite-alternative-access](https://github.com/CCardona6/office-suite-alternative-access) | near-duplicate, same-day, flat-stars |
| 4 | **coregold** (+vcc, usdt, visa, billing, mastercard, 1 more) | 70 | 64 | 5.1k | 518/d | 708/d | ▂▂▂▄▁▃▆▆▁▁▄▄█▇ | 2026-10-29 | [jmarianodaa-ctrl/-CoreGold---Global-Virtual-Card-Gateway](https://github.com/jmarianodaa-ctrl/-CoreGold---Global-Virtual-Card-Gateway) | flat-stars |
| 5 | **gemeni** (+general-purpose, manus, solidjs, typescript-sdk, tool-calling, 14 more) | 27 | 25 | 1.4k | 252/d | 1/d | ▁▁▁▁▁▁▁▁▇█▁▁▁▁ | 2026-11-06 | [Abdul-Rehman7826/ai-manus](https://github.com/Abdul-Rehman7826/ai-manus) | near-duplicate, flat-stars |
| 6 | **ai-image-generation** (+gpt-image, apimart) | 14 | 2 | 1.8k | 220/d | 7/d | ▂▁▁▁▂▁▁█▂▁▁▁▁▁ | 2026-10-29 | [wquguru/shisei](https://github.com/wquguru/shisei) | same-day, few-owners |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>ocarina</b>: 6 repos, 10.1k stars</summary>

- [NotRexed/Hookshot](https://github.com/NotRexed/Hookshot) 8.4k★ A Native Recompilation Of The Legend Of Zelda: Ocarina Of Time Nintendo Switch …
- [sostenesfreitas/ocarina-recomp](https://github.com/sostenesfreitas/ocarina-recomp) 1.2k★ Ocarina of Time running natively on Windows, no emulator. Built on your PC from…
- [jaigner-hub/ocarina-of-time-recomp](https://github.com/jaigner-hub/ocarina-of-time-recomp) 296★ Static recompilation of The Legend of Zelda: Ocarina of Time into a native PC p…
- [adi0900/GreenKid-MV](https://github.com/adi0900/GreenKid-MV) 109★ Game-free Mac builder for native Ocarina of Time (Switch 2) ports on Apple Sili…
- [dsi-hub/HookLink](https://github.com/dsi-hub/HookLink) 66★ The Legend of Zelda: Ocarina of Time (Switch 2 Edition) on iPhone, built on you…

</details>

<details><summary><b>blockchain</b>: 10 repos, 2.2k stars</summary>

- [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) 934★ Wallet UI simulation tool for BTC, ETH, SOL, XRP, and 200+ assets. Customize di…
- [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) 392★ Paste a wallet or a transaction hash and follow stolen crypto to the exchange t…
- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) 241★ Solana validator health in 60 seconds: score, leader duties, rewards, disk fore…
- [Signcluengine/onchain-money-trail-analyzer](https://github.com/Signcluengine/onchain-money-trail-analyzer) 167★ Follow stolen crypto hop by hop across Bitcoin, Ethereum, TRON, BNB Chain and S…
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) 164★ Non-custodial, encrypted file storage & sharing platform with Stellar payments …

</details>

<details><summary><b>enhancements</b>: 5 repos, 2.1k stars</summary>

- [shivsupratik/windows-optimizer](https://github.com/shivsupratik/windows-optimizer) 1.1k★ Windows Optimizer: Advanced System Tweaks and Performance Enhancements
- [Dittobyte/Recompia](https://github.com/Dittobyte/Recompia) 673★ Pokémon Pokopia (Switch 2) recompiled to run natively on Windows with Linux/Han…
- [Mabec-games/Conker-Recomped-and-Reloaded](https://github.com/Mabec-games/Conker-Recomped-and-Reloaded) 163★ Conker: Live & Reloaded (Xbox) on Windows & Linux: a native recompilation with …
- [PranavDupati/ninboy-hat-for-macos](https://github.com/PranavDupati/ninboy-hat-for-macos) 81★ Native compilation enhancements, crash fixes, keyboard/mouse controls, and perf…
- [ethanseagull/sm64ds-enhanced](https://github.com/ethanseagull/sm64ds-enhanced) 53★ Super Mario 64 DS native 3ds port with enhancements

</details>

<details><summary><b>eglantine</b>: 6 repos, 1.3k stars</summary>

- [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) 574★ Use-case guide to Nintendo Switch 2 emulator forks: builds, games, GPUs, Androi…
- [sylvieistaken/selevet-eglantine](https://github.com/sylvieistaken/selevet-eglantine) 258★ Selevet Eglantine: an unofficial Eglantine (Switch 2 emulator) build tuned for …
- [viejunerd/Eglantine-PS5-](https://github.com/viejunerd/Eglantine-PS5-) 172★ 
- [sikoGD/playDB-CNT](https://github.com/sikoGD/playDB-CNT) 138★ Play The Duskbloods Network Test on Eglantine/Lichii: a launcher with local loo…
- [ZendNevs/Eglantine-ZendNevs](https://github.com/ZendNevs/Eglantine-ZendNevs) 110★ Better performance, Frame Generation FSR 3 and LSFG. DynamicFPS. 30FPS LOCK. On…

</details>

<details><summary><b>que</b>: 6 repos, 1.1k stars</summary>

- [mille-okws/pestinha](https://github.com/mille-okws/pestinha) 405★ Pestinha é um pet virtual de desktop para Windows, com rede neural pulsada, emo…
- [R238Company/meu-emprego-novo](https://github.com/R238Company/meu-emprego-novo) 256★ Equipe de agentes de IA (CrewAI + AWS Bedrock/Claude) que lê a descrição de uma…
- [viajatech/agente-isabella](https://github.com/viajatech/agente-isabella) 173★ 🌐 PÚBLICO · Agente Isabella: convierte un Android en asistente de voz con IA q…
- [SalmeronDevZone/azure-lab](https://github.com/SalmeronDevZone/azure-lab) 139★ Simulador de Azure para aprender DevOps sin cuenta ni costes: portal, Cloud She…
- [LeiteZ/fluxo-de-edicao](https://github.com/LeiteZ/fluxo-de-edicao) 99★ Skill para o Claude Code que te guia a montar o seu fluxo de edição de vídeo

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
