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
_recent 1,837 repos  2026-09-30..2026-10-14  stars>=40 · baseline 3,000 repos  2026-08-01..2026-09-29  stars>=150 · generated 2026-10-14 11:57 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **clean-room** | 7 | 2 | 27.5k | 4.0k/d | 5.5k/d | ▁▁▁▁▁▁▁▂▄▅▄█▇▆ | 2026-10-07 | [storytold/wordcraft](https://github.com/storytold/wordcraft) |
| 2 | **isometric** | 8 | 8 | 12.0k | 1.8k/d | 3.0k/d | ▁▁▁▁▂▁▁▂▂▁▂█▇▅ | 2026-10-01 | [wheresryan22/anatomy](https://github.com/wheresryan22/anatomy) |
| 3 | **artex** (+korean) | 6 | 6 | 7.1k | 1.0k/d | 605/d | ▁▁▁▁▁▁▁▂█▇▄▄▃▃ | 2026-10-02 | [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) |
| 4 | **mcd** (+mcdonalds) | 12 | 12 | 1.5k | 504/d | 401/d | ▁▁▁▁▁▁▁▁▁▃▃▄█▆ | 2026-10-09 | [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) |
| 5 | **finder** | 6 | 6 | 1.0k | 494/d | 225/d | ▁▁▁▁▁▁▁▁▂▃▃▃▂█ | 2026-10-01 | [nikgrbn/finder-menu](https://github.com/nikgrbn/finder-menu) |
| 6 | **ps4** (+bloodborne) | 11 | 11 | 2.7k | 463/d | 211/d | ▁▁▁▂▃▂▁█▆▃▂▃▃▄ | 2026-09-30 | [LoreanXavier/pt-pc](https://github.com/LoreanXavier/pt-pc) |
| 7 | **messages** | 7 | 7 | 2.6k | 373/d | 617/d | ▁▁▁▁▁▁▁▂▂▁▅█▇▇ | 2026-10-01 | [Fei2411/DeepSeek-Bot](https://github.com/Fei2411/DeepSeek-Bot) |
| 8 | **soroban** (+stellar, smart-contracts, testnet, sentinel) | 15 | 8 | 2.0k | 325/d | 0/d | ▁▁▁▁▁▁▁█▄▆▁▁▁▁ | 2026-10-06 | [Local-Settle/local-settle-backend](https://github.com/Local-Settle/local-settle-backend) |
| 9 | **font** | 6 | 6 | 1.7k | 263/d | 206/d | ▁▁▁▁▂▂▂█▂▂▄▇▂▂ | 2026-10-01 | [szabadkai/c64-keyboard-font](https://github.com/szabadkai/c64-keyboard-font) |
| 10 | **claude-code-mod** (+claude-code-mods) | 9 | 9 | 1.7k | 242/d | 326/d | ▁▁▁▂▂▁▁▁▂▂▂▃▂█ | 2026-10-02 | [YeonwooSung/my-claude-code-mods](https://github.com/YeonwooSung/my-claude-code-mods) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **apimart-en** (+image2, image2.5, llm-api-gateway, minimum, pay-as-you-go, 38 more) | 334 | 252 | 15.9k | 1.3k/d | 2.6k/d | ▁▁▁▁▁▁▁▂▅▇█▇▇█ | 2026-10-02 | [apimartcsivz33s/video-api-pricing-guide](https://github.com/apimartcsivz33s/video-api-pricing-guide) | near-duplicate, same-day, flat-stars |
| 2 | **discord-fix** (+discord-proxy, discord-unblock, discordfix, fix-discord, fixdiscord, 6 more) | 5 | 5 | 349 | 349/d | 116/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-13 | [Handcuffgladominate/zapret-discord](https://github.com/Handcuffgladominate/zapret-discord) | near-duplicate |
| 3 | **argolink** (+argolink-focused, polling, fields) | 28 | 28 | 1.2k | 129/d | 111/d | ▁▁▁▁▁▅█▃▃▅▅▅▄▂ | 2026-10-04 | [eliasbrookner7/seedance-2-5-api-provider](https://github.com/eliasbrookner7/seedance-2-5-api-provider) | flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>clean-room</b>: 7 repos, 27.5k stars</summary>

- [storytold/wordcraft](https://github.com/storytold/wordcraft) 11.9k★ An open-source, clean-room reimplementation of Microsoft Word in pure Rust
- [storytold/gridcraft](https://github.com/storytold/gridcraft) 4.6k★ GridCraft: an open-source, clean-room spreadsheet (Microsoft Excel-style) in pu…
- [storytold/cadcraft](https://github.com/storytold/cadcraft) 4.5k★ CADCraft: computer-aided design and drafting — an open-source, clean-room AutoC…
- [storytold/deckcraft](https://github.com/storytold/deckcraft) 3.1k★ Presentations and slide shows: an open-source, clean-room reimplementation of M…
- [storytold/soundcraft](https://github.com/storytold/soundcraft) 2.7k★ An open-source, clean-room reimplementation of Avid Pro Tools in pure Rust

</details>

<details><summary><b>isometric</b>: 8 repos, 12.0k stars</summary>

- [wheresryan22/anatomy](https://github.com/wheresryan22/anatomy) 9.1k★ An agent skill for creating detailed, interactive isometric illustrations of re…
- [lucasmarkes/hairline](https://github.com/lucasmarkes/hairline) 2.0k★ Six isometric line figures that answer the pointer. For React and for anything …
- [Aryanutkarsh/SeeCode](https://github.com/Aryanutkarsh/SeeCode) 472★ Animated, explorable diagrams for Claude and other coding agents, from a short …
- [MrBongoC/ai-iso-skill](https://github.com/MrBongoC/ai-iso-skill) 181★ Claude skill that draws interactive isometric figures in a single HTML file
- [Khalidabdi1/factory](https://github.com/Khalidabdi1/factory) 131★ A live isometric world in the browser: a seaside town, a new city, a farming vi…

</details>

<details><summary><b>artex</b>: 6 repos, 7.1k stars</summary>

- [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) 4.0k★ AI 自主渗透测试系统 \| 百度“agent+”攻防挑战赛冠军项目
- [jiwoochris/artex-global](https://github.com/jiwoochris/artex-global) 1.5k★ ARTEX 한국어판 · AI 자율 침투 테스트 프레임워크(upstream: Autumn-27/ARTEX, AGPL-3.0)
- [Hinln/ARTEX](https://github.com/Hinln/ARTEX) 760★ ARTEX 源码备份：基于 Autumn-27/ARTEX v0.3.15，保留原始提交历史与 AGPL-3.0 许可证。
- [cskwork/scopeweaver](https://github.com/cskwork/scopeweaver) 569★ ScopeWeaver: English and Korean localization of ARTEX, with preserved AGPL-3.0 …
- [bdg9412/artex-ko-plus](https://github.com/bdg9412/artex-ko-plus) 182★ ARTEX 한국어판 ·AI 기반 침해사고 대응 기능 추가 (upstream: Autumn-27/ARTEX, AGPL-3.0)

</details>

<details><summary><b>mcd</b>: 12 repos, 1.5k stars</summary>

- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 303★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [yzg1226/mcd-party-officer](https://github.com/yzg1226/mcd-party-officer) 235★ 🍟 麦当劳门店派对成团调度 Skill — 把派对从「策划」推进到「办得成」：成团概率雷达 / 包场vs拼团 / 择日黄历 / 儿童营养指数 / 招募卡与邀…
- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 175★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [hujjun/mcd-saver-strategist](https://github.com/hujjun/mcd-saver-strategist) 162★ 麦当劳省钱点餐助手（麦门精算师）｜麦当劳优惠券组合优化 Skill：拉取麦当劳菜单与全部可用优惠券，算出最省的点餐组合，巨无霸套餐 ¥47 → ¥21.9（省…
- [WilderNoTrack/mcd-calorie-butler](https://github.com/WilderNoTrack/mcd-calorie-butler) 149★ 麦麦热量管家：减脂不是少吃你爱的，是先换掉不值这口热量的。基于麦当劳 MCP 的味热比点餐 Skill。

</details>

<details><summary><b>finder</b>: 6 repos, 1.0k stars</summary>

- [nikgrbn/finder-menu](https://github.com/nikgrbn/finder-menu) 412★ Right-click menu for macOS Finder: New File, Open Terminal Here, Copy Path, Go …
- [egotoadcitadel/palette-from-image-ai](https://github.com/egotoadcitadel/palette-from-image-ai) 303★ AI coloring palette-from-image generator for designers and pixel artists — pull…
- [mstcvk/MacRAR](https://github.com/mstcvk/MacRAR) 89★ WinRAR-style archive manager for macOS: native AppKit app around RARLAB rar/unr…
- [deeeeone/gitdrive](https://github.com/deeeeone/gitdrive) 78★ Turn GitHub into an iCloud-style drive for macOS. Native Finder integration, fi…
- [gentpan/LiteZip](https://github.com/gentpan/LiteZip) 69★ 免费开源的原生 macOS 压缩与解压工具。支持 ZIP / 7Z 压缩解压、RAR 解压、加密分卷、目录预览和 Finder 右键操作，文件完全在本机处理。

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
