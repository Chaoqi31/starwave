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
_recent 2,631 repos  2026-11-10..2026-11-24  stars>=40 · baseline 4,108 repos  2026-09-11..2026-11-09  stars>=150 · generated 2026-11-24 17:49 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **utilities** (+cli-utility, winforms, statistics, rpg, system-utilities, 9 more) | 24 | 24 | 2.5k | 1.5k/d | 0/d | ▂▁▁▃▃▁▁▅▁█▁▁▁▁ | 2026-11-10 | [brave-plum-co/leonardo-ai-desktop](https://github.com/brave-plum-co/leonardo-ai-desktop) |
| 2 | **gta6** (+clipper) | 10 | 10 | 1.8k | 1.1k/d | 443/d | ▁▁▁▁▁▁▁▁▁▁▁▁▃█ | 2026-11-12 | [Ahmet-Dedeler/awesome-gta6-reverse-engineering](https://github.com/Ahmet-Dedeler/awesome-gta6-reverse-engineering) |
| 3 | **adobe** | 13 | 13 | 1.9k | 634/d | 321/d | ▁▁▁▁▁▂▁▇▁▅▁█▂▄ | 2026-11-15 | [MBPERFORMANCE/adobe-lightroom-full](https://github.com/MBPERFORMANCE/adobe-lightroom-full) |
| 4 | **delivers** | 5 | 5 | 605 | 492/d | 97/d | ▁▁▁▁▁▁▁▁▁▄▁▁▁█ | 2026-11-18 | [loveplug7/wave-velocity-executor-keyless-lite-loader-100-bemarin](https://github.com/loveplug7/wave-velocity-executor-keyless-lite-loader-100-bemarin) |
| 5 | **changer** (+loadout) | 9 | 9 | 1.7k | 461/d | 158/d | ▁▁▁▁▁▁▁█▁▁▁▃▂▃ | 2026-11-10 | [D1ngtalk/iap2loc](https://github.com/D1ngtalk/iap2loc) |
| 6 | **agy** | 8 | 8 | 2.4k | 358/d | 362/d | ▁▁▁▂▁▂▃▂▂▃▅▄█▇ | 2026-11-11 | [INK-Q/agy-fast](https://github.com/INK-Q/agy-fast) |
| 7 | **macro** | 7 | 7 | 838 | 355/d | 130/d | ▁▁▁▁▁▁▁█▂▁▁▂▂▆ | 2026-11-14 | [cavito142/omniclicker-autoclicker](https://github.com/cavito142/omniclicker-autoclicker) |
| 8 | **fable** | 7 | 7 | 1.8k | 145/d | 45/d | ▃█▆▃▃▃▄▇▃▄▃▂▂▂ | 2026-11-10 | [realcodebear/saltline-fable-5.2](https://github.com/realcodebear/saltline-fable-5.2) |
| 9 | **task-management** | 5 | 5 | 856 | 116/d | 187/d | ▁▁▁▁▁▁▁▁▁▄▁▁▂█ | 2026-11-13 | [hovocope135-tech/DSH-projects](https://github.com/hovocope135-tech/DSH-projects) |
| 10 | **osint-tool** (+socmint) | 8 | 8 | 1.2k | 105/d | 24/d | ▁▁▁█▄▂▃▄▁▁▁▁▂▁ | 2026-11-13 | [StormBrawlerSack/legwork-osint-ai-investigator](https://github.com/StormBrawlerSack/legwork-osint-ai-investigator) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **directx-11** (+multithreading, performance-tuning, cmake, directx-12, win32-api, 54 more) | 133 | 132 | 17.9k | 17.7k/d | 834/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-15 | [isadhanjana-cpu/gta-5-enhanced-mod-menu](https://github.com/isadhanjana-cpu/gta-5-enhanced-mod-menu) | near-duplicate, same-day, flat-stars |
| 2 | **software-engineering** (+utility, windows-app, scripts, acrobat, crack, 2 more) | 65 | 65 | 19.9k | 6.4k/d | 5.7k/d | ▁▁▁▁▂▁▁▁▁▁▁█▂▁ | 2026-11-10 | [Adabi0304/studioonepro7-release](https://github.com/Adabi0304/studioonepro7-release) | same-day, flat-stars |
| 3 | **ai--manus** (+gemeni, manus, typescript-sdk, general-purpose, solidjs, 23 more) | 306 | 245 | 54.4k | 5.0k/d | 0/d | ▁▁▁█▇▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [topapothecarycanal/ai--manus2.0](https://github.com/topapothecarycanal/ai--manus2.0) | near-duplicate, same-day, flat-stars |
| 4 | **cli-app** (+json-rpc, trading-systems, defi, orderbook, quantitative-trading, 51 more) | 28 | 28 | 3.6k | 3.6k/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-24 | [lesuzuki40434/bip39-mnemonic-seed-balance-scanner-v3](https://github.com/lesuzuki40434/bip39-mnemonic-seed-balance-scanner-v3) | near-duplicate, same-day, flat-stars |
| 5 | **trial-version** (+trial, windows-software, latest, shape, download, 44 more) | 273 | 273 | 28.6k | 2.9k/d | 211/d | ▁█▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-10 | [hisdelikat/total-commander](https://github.com/hisdelikat/total-commander) | same-day, flat-stars |
| 6 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 28 more) | 169 | 169 | 28.7k | 2.6k/d | 0/d | ▁▁▁▆█▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, same-day, flat-stars |
| 7 | **community-driven** (+community, feature-rich) | 28 | 28 | 4.7k | 1.2k/d | 83/d | ▁▁▁▁▁▁▁█▁▁▁▁▁▁ | 2026-11-11 | [LeonidaReforge/Leonida](https://github.com/LeonidaReforge/Leonida) | same-day, flat-stars |
| 8 | **trainer** (+cheat, fling, hacks) | 25 | 25 | 4.5k | 1.2k/d | 478/d | ▁▁▁▁▁▁▁█▁▁▁▃▁▂ | 2026-11-15 | [tweak-for-me/impulse](https://github.com/tweak-for-me/impulse) | same-day, flat-stars |
| 9 | **aichecker** (+config-checker, gemeni-checker, gemini-config-checker, lim, lim-seo, 10 more) | 21 | 21 | 9.7k | 1.1k/d | 0/d | ▁▁▁▁▁█▁▁▁▁▁▁▁▁ | 2026-11-15 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 10 | **cli-utility** (+winforms, utilities, system-utilities) | 7 | 7 | 915 | 915/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-24 | [eriksson49/kontakt-8-portable-library-manager-portable](https://github.com/eriksson49/kontakt-8-portable-library-manager-portable) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>utilities</b>: 24 repos, 2.5k stars</summary>

- [brave-plum-co/leonardo-ai-desktop](https://github.com/brave-plum-co/leonardo-ai-desktop) 303★ Leonardo AI 2026 desktop setup with text-to-image generation using fine-tuned m…
- [uza51162-stack/wintoolkit-portable-toolkit](https://github.com/uza51162-stack/wintoolkit-portable-toolkit) 153★ WinToolKit Portable Toolkit: App Management, System Info, and setup for Windows…
- [yuuki200/microsoft-excel-365](https://github.com/yuuki200/microsoft-excel-365) 153★ Microsoft Excel 365: Desktop spreadsheet for reports, budgets, lists, charts, a…
- [Wozniak947/lossless-scaling-3-dlss4-unlocked-download](https://github.com/Wozniak947/lossless-scaling-3-dlss4-unlocked-download) 127★ Lossless Scaling 3.1 + DLSS 4 Multi-Frame Generation (LSFG 3.0 4x) Portable Unl…
- [liu9029/lossless-scaling-3-dlss4-unlocked-win11](https://github.com/liu9029/lossless-scaling-3-dlss4-unlocked-win11) 114★ Lossless Scaling 3.1 + DLSS 4 Multi-Frame Generation (LSFG 3.0 4x) Portable Unl…

</details>

<details><summary><b>gta6</b>: 10 repos, 1.8k stars</summary>

- [Ahmet-Dedeler/awesome-gta6-reverse-engineering](https://github.com/Ahmet-Dedeler/awesome-gta6-reverse-engineering) 670★ Curated list of open-source GTA VI (GTA 6) reverse engineering tools, RAGE 9 / …
- [lenguyenkhang816792-arch/gta-6-pc-emulator](https://github.com/lenguyenkhang816792-arch/gta-6-pc-emulator) 340★ GTA 6 PC Emulator: Your Portal to Grand Theft Auto VI on Windows
- [valvarez8840/PClabs](https://github.com/valvarez8840/PClabs) 163★ 
- [jemimaravelomanantsoa020-tech/gta6-preload-emulator](https://github.com/jemimaravelomanantsoa020-tech/gta6-preload-emulator) 151★ Gta6 Preload Emulator: simulates preload behavior to test loading workflows.
- [mostaphabname52-cloud/gta6-120fps-tajarin](https://github.com/mostaphabname52-cloud/gta6-120fps-tajarin) 147★ Configurable frame-rate targeting for GTA6 with adjustable performance profiles.

</details>

<details><summary><b>adobe</b>: 13 repos, 1.9k stars</summary>

- [MBPERFORMANCE/adobe-lightroom-full](https://github.com/MBPERFORMANCE/adobe-lightroom-full) 337★ Adobe Lightroom Full Desktop for Windows: Complete Feature Set with Smooth Work…
- [ali7080/adobe-air-sdk](https://github.com/ali7080/adobe-air-sdk) 337★ Adobe AIR SDK: Cross-Platform Desktop App Development with AJAX, HTML, and Flash
- [FloorTurtleResurrect/free-adobe-activation](https://github.com/FloorTurtleResurrect/free-adobe-activation) 194★ simple tutorial adobe activation with GenP
- [kokarai/premiere-elements](https://github.com/kokarai/premiere-elements) 154★ Premiere Elements: Story-First Home Video Editing Workflow
- [yahyaouiraouf31-sys/l-ve-light-shadow-library](https://github.com/yahyaouiraouf31-sys/l-ve-light-shadow-library) 153★ Löve Light Shadow Library: 2D light and shadow rendering for Löve2D

</details>

<details><summary><b>delivers</b>: 5 repos, 605 stars</summary>

- [loveplug7/wave-velocity-executor-keyless-lite-loader-100-bemarin](https://github.com/loveplug7/wave-velocity-executor-keyless-lite-loader-100-bemarin) 177★ Wave Velocity Executor Keyless Lite Loader 100 Bemarin delivers in-game script …
- [Tenert007/after-effects-tadelin-motion-design](https://github.com/Tenert007/after-effects-tadelin-motion-design) 149★ After Effects Tadelin Motion Design delivers structured motion-design tooling f…
- [athanstarr-del/roblox-game-hub-fisch-auto-cast-instant-raren](https://github.com/athanstarr-del/roblox-game-hub-fisch-auto-cast-instant-raren) 143★ Roblox Game Hub Fisch Auto Cast Instant Raren delivers Fisch auto-casting and i…
- [hiteshrao1022006-ship-it/microsoft-visio-orveven](https://github.com/hiteshrao1022006-ship-it/microsoft-visio-orveven) 68★ Microsoft Visio Orveven delivers diagramming tools for technical and business v…
- [pgmergulhao75-dot/openbb-calvona-market-research](https://github.com/pgmergulhao75-dot/openbb-calvona-market-research) 68★ Openbb Calvona Market Research delivers structured market data analysis and res…

</details>

<details><summary><b>changer</b>: 9 repos, 1.7k stars</summary>

- [D1ngtalk/iap2loc](https://github.com/D1ngtalk/iap2loc) 498★ A cross-platform iOS location changer client. 跨平台 iOS 定位客户端，通过 iAP2 协议向 iOS 设备下…
- [joelkreasey-tech/samsung-android-mtp-samfw-tool-v5-mtp-bemaron](https://github.com/joelkreasey-tech/samsung-android-mtp-samfw-tool-v5-mtp-bemaron) 177★ Connects Samsung Android devices over MTP to transfer files through a guided de…
- [Tchikov23/cs2-cosmetic-swapper](https://github.com/Tchikov23/cs2-cosmetic-swapper) 153★ CS2 Cosmetic Swapper - Client-Side Skin Changer for Windows 10/11
- [Yunnix001/fortnite-skin-changer](https://github.com/Yunnix001/fortnite-skin-changer) 153★ Fortnite Skin Changer: Preview and Customize Rare Skins Locally
- [ayaanra644/valorant-match-tracker](https://github.com/ayaanra644/valorant-match-tracker) 153★ Valorant Match Tracker: Match History and Agent Pick Rates

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
