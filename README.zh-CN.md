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
_recent 2,030 repos  2026-09-20..2026-10-04  stars>=40 · baseline 2,756 repos  2026-07-22..2026-09-19  stars>=150 · generated 2026-10-04 12:25 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **opus** (+motion-graphics) | 26 | 25 | 9.4k | 1.1k/d | 570/d | ▁▁▂▇▅▃▅█▇▄▄▄▄▄ | 2026-09-22 | [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 2 | **muse** (+muse.ai) | 14 | 14 | 3.3k | 907/d | 568/d | ▁▁▁▁▁▄▃▂▂▃▃▃▆█ | 2026-09-23 | [facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk) |
| 3 | **options** | 6 | 6 | 3.8k | 476/d | 332/d | ▁▁▁▁▁▁▁▁█▆▂▃▃▇ | 2026-09-20 | [Avenuezensport/efjvysuz](https://github.com/Avenuezensport/efjvysuz) |
| 4 | **films** | 9 | 9 | 4.0k | 469/d | 291/d | ▁▁▂▂▃▃▇▅▅▃█▅▄▂ | 2026-09-22 | [feitangyuan/onetake](https://github.com/feitangyuan/onetake) |
| 5 | **revolutionize** (+cutting) | 6 | 6 | 798 | 439/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-10-02 | [Splendorchucall/BorisFX](https://github.com/Splendorchucall/BorisFX) |
| 6 | **feature** | 9 | 8 | 1.2k | 233/d | 84/d | ▁▁▁▁▁▁▁▄█▅▄▄▃▃ | 2026-09-21 | [rushiranpise/Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next) |
| 7 | **steamos** | 5 | 5 | 1.9k | 192/d | 334/d | ▁▁▁▂▁▁▁▂▃▃▂▂▃█ | 2026-09-23 | [Droid-Deck/DroidDeck](https://github.com/Droid-Deck/DroidDeck) |
| 8 | **ledger** | 7 | 7 | 520 | 132/d | 41/d | ▁▁▁▁▃▄▁▇▁█▆▆▃▂ | 2026-09-21 | [architectds/collabosm](https://github.com/architectds/collabosm) |
| 9 | **typed-decision** | 5 | 5 | 1.2k | 111/d | 145/d | ▁▁▂▂▂▂▃▄▆█▆▅▆▆ | 2026-09-22 | [angel291592/Intent-Router](https://github.com/angel291592/Intent-Router) |
| 10 | **checker** | 6 | 6 | 625 | 105/d | 25/d | ▁▁▁▁▄▅█▁▁▄▃▂▁▃ | 2026-09-21 | [ashleydarosa/CC-Checker-Validator-Generator](https://github.com/ashleydarosa/CC-Checker-Validator-Generator) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **providing** (+streamlines, professional, optimizes, utility, enhances, 27 more) | 80 | 80 | 15.0k | 8.0k/d | 0/d | ▁▁▁▁▁▁▁▁▁█▁▁▁▁ | 2026-09-28 | [BlackCrewmanFringe/AutoCad](https://github.com/BlackCrewmanFringe/AutoCad) | same-day, flat-stars |
| 2 | **trainer** (+forge, cheat, game-trainer, trainers, pc-game, 144 more) | 589 | 589 | 35.8k | 3.6k/d | 11.0k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-09-20 | [rehan-remade/universal-modder](https://github.com/rehan-remade/universal-modder) | near-duplicate, same-day, flat-stars |
| 3 | **configurations** | 16 | 16 | 2.8k | 1.6k/d | 0/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁▁ | 2026-10-02 | [GreenSorcererShears/SolidWorks-CAD](https://github.com/GreenSorcererShears/SolidWorks-CAD) | same-day |
| 4 | **pay-as-you-go** (+minimum, top-up, image2, image2.5, llm-api-gateway, 57 more) | 115 | 85 | 7.0k | 947/d | 660/d | ▁▁▁▁▁▆▄▁▆▃▃▁▁█ | 2026-09-24 | [azle5biyd9td956/pixverse6-pixverse-v6-api](https://github.com/azle5biyd9td956/pixverse6-pixverse-v6-api) | near-duplicate, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>opus</b>: 26 repos, 9.4k stars</summary>

- [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) 1.8k★ A growing collection of viral videos made with Claude Opus 5.5 and the prompts …
- [JohnHeibel/PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) 1.8k★ Source code for the Claude Opus 5.5 music video for I'm Upping My P(doom)
- [dgreenheck/tidewater](https://github.com/dgreenheck/tidewater) 1.1k★ Coastal town built with Opus 5.5
- [riba2534/claude-opus-5-5-demo](https://github.com/riba2534/claude-opus-5-5-demo) 981★ claude-opus-5-5-demo
- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 918★ Claude Code skill for short films with no video model: 43 film styles, each a s…

</details>

<details><summary><b>muse</b>: 14 repos, 3.3k stars</summary>

- [facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk) 1.0k★ Open source SDK to build Muse gadgets
- [zouyuxuan122/dsh-our-free-model](https://github.com/zouyuxuan122/dsh-our-free-model) 940★ 在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 Muse Spark 1.3、MiMo V2.6 在内的前沿模型——完全免费…
- [win4r/MuseAI-Skills](https://github.com/win4r/MuseAI-Skills) 317★ muse.ai (Muse AI) skills and runtime snapshot: 68 skills, workflow guides, conn…
- [czg86389-hub/muse2api](https://github.com/czg86389-hub/muse2api) 241★ 把 Muse(muse.ai) 逆向封装为 OpenAI 兼容接口，支持对话、文生图、文生视频/图生视频、多账号池轮转与 48h 自动续期。OpenAI-co…
- [AFK-surf/Comma](https://github.com/AFK-surf/Comma) 167★ The sessionless, relentless personal agent. Open source alternative to Muse, Do…

</details>

<details><summary><b>options</b>: 6 repos, 3.8k stars</summary>

- [Avenuezensport/efjvysuz](https://github.com/Avenuezensport/efjvysuz) 1.9k★ Welcome to Shnek-Tools, a multi-tool with a multitude of options. All functions…
- [firelex/jeff](https://github.com/firelex/jeff) 1.4k★ Millisecond decisions, any domain: a 0.8B open "System 1" model that picks betw…
- [strands-labs/strands-decider](https://github.com/strands-labs/strands-decider) 317★ A small, fast decision model, or system one model, for agentic workflows. Pick …
- [some-scurvy-dog/banjo-tooie-scurvy-dog-port](https://github.com/some-scurvy-dog/banjo-tooie-scurvy-dog-port) 72★ Banjo-Tooie Recompiled: a native Windows PC port with widescreen, resolution an…
- [kofiadeyemiq/commander-mangen](https://github.com/kofiadeyemiq/commander-mangen) 65★ Generate man pages from a commander.js program, including every subcommand's op…

</details>

<details><summary><b>films</b>: 9 repos, 4.0k stars</summary>

- [feitangyuan/onetake](https://github.com/feitangyuan/onetake) 1.5k★ Motion films that never cut to the next slide: every beat grows out of the one …
- [echris6/motion-video-kit](https://github.com/echris6/motion-video-kit) 991★ Claude Code skill kit for premium AI-assisted business videos: independent crit…
- [alexgreensh/anidoodle](https://github.com/alexgreensh/anidoodle) 779★ Art and animation, written as code. Illustrations, loops, interactive web art, …
- [sevenevesai/riso-windowseat](https://github.com/sevenevesai/riso-windowseat) 273★ Procedural risograph films in single HTML files (Window Seat, Roost and more), …
- [tugrawork-creator/saas-motion-kit](https://github.com/tugrawork-creator/saas-motion-kit) 205★ Promo & motion videos for software products with HyperFrames + Claude Code. No …

</details>

<details><summary><b>revolutionize</b>: 6 repos, 798 stars</summary>

- [Splendorchucall/BorisFX](https://github.com/Splendorchucall/BorisFX) 203★ Revolutionize your video editing workflow with Borisfx, a cutting-edge plugin s…
- [cosmicrankawaken/FL-Studio](https://github.com/cosmicrankawaken/FL-Studio) 203★ Revolutionize your music production with this professional digital audio workst…
- [MarbleMelodyExpand/SoundPad](https://github.com/MarbleMelodyExpand/SoundPad) 107★ Revolutionize your audio experience with Soundpad: a comprehensive digital audi…
- [faststalliontreat/SonyVegas](https://github.com/faststalliontreat/SonyVegas) 104★ Revolutionize your video editing experience with Sonyvegas, a cutting-edge plug…
- [pacebackerretrieve/Auslogics](https://github.com/pacebackerretrieve/Auslogics) 102★ Revolutionize your music production with Auslogics, an innovative digital audio…

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
