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
