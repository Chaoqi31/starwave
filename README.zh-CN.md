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

- **jev：15 天 249 个仓库、14.5 万 star。** TypeSafe AI 在 9 月 15 日发布 Jev 决策模型。starwave 把 40 个词（`laya`、`typesafe`、`system-one`、`decision-model` 等）合并成这一个浪潮，这是任何单个关键词搜索都拼不出来的。单日最高是 9 月 21 日，新增 24,568 个 star，现在正在降温：发布以来平均每天 1.32 万，最近 3 天每天 5,100。
- **opus：21 个用 Claude Opus 5.5 写代码渲染出来的视频仓库。** 最早的一个才 8 天，现在每天仍有 1,100 个 star，而当天 GitHub Trending 的日榜和周榜上一个都没有。
- **有两个仓库簇疑似协同。** `apimart` 的 173 个仓库全部提到同一家 API 中转商，其中 146 个创建于 9 月 24 日。44 个 Roblox 脚本仓库全部创建于 9 月 18 日，最近 14 天的 star 有 98% 落在 9 月 27 日这一天。starwave 把它们放进"疑似协同"（Looks coordinated），不参与排名。

## 为什么不直接看 GitHub Trending？

| | GitHub Trending | starwave |
|---|---|---|
| 排的是什么 | 单个仓库 | 共享同一个突增词的一组新仓库 |
| 看哪些仓库 | 不限年龄 | 最近 14 天新建的 |
| 一次发布带出 249 个周边仓库 | 各自单列，前提是能挤进前 25 名 | 一个浪潮，列出每个仓库 |
| 模板农场 | 不显示 | 单独列出，每个标记都写明依据 |
| 势头 | 今日、本周或本月的 star | 发布以来的日均 star 对比最近 3 天，外加 14 天走势图 |
| 输出 | 网页 | 终端表格、Markdown、JSON，以及 agent skill |

## 今日浪潮

GitHub Action 每天 06:17 UTC（北京时间 14:17）重写这张表。往日数据在 [`data/`](data)。

<!-- starwave:start -->
_recent 1,456 repos  2026-09-16..2026-09-30  stars>=40 · baseline 2,833 repos  2026-07-18..2026-09-15  stars>=150 · generated 2026-09-30 16:22 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **jev** (+typesafe, system-one, typesafe-ai, decision-model, typed, 38 more) | 251 | 233 | 146.0k | 13.3k/d | 5.2k/d | ▁▃▄▅▆█▇▅▃▃▂▂▃▂ | 2026-09-16 | [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) |  |
| 2 | **opus** (+motion-graphics) | 22 | 21 | 7.1k | 1.4k/d | 1.1k/d | ▁▁▁▁▁▁▂▇▅▃▅█▇▄ | 2026-09-22 | [JohnHeibel/PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) |  |
| 3 | **films** | 7 | 7 | 2.6k | 552/d | 351/d | ▁▁▁▁▁▁▂▂▃▃█▆▆▃ | 2026-09-22 | [feitangyuan/onetake](https://github.com/feitangyuan/onetake) |  |
| 4 | **steamos** | 5 | 5 | 660 | 118/d | 160/d | ▁▁▁▁▁▁▁▃▂▂▂▆█▇ | 2026-09-23 | [Droid-Deck/DroidDeck](https://github.com/Droid-Deck/DroidDeck) |  |
| 5 | **qwen-image** (+qwen-image-2.1) | 5 | 5 | 638 | 84/d | 54/d | ▁▁▁▁▁▁▆█▇█▅▃▄▇ | 2026-09-21 | [nihui/qwenimage-ncnn-vulkan](https://github.com/nihui/qwenimage-ncnn-vulkan) |  |
| 6 | **roblox** | 5 | 5 | 335 | 57/d | 52/d | ▁▁▁▁▁▁▁▂▃▄▄█▂▂ | 2026-09-17 | [caomod2077/Deobfuscator-Luraph-V15](https://github.com/caomod2077/Deobfuscator-Luraph-V15) |  |
| 7 | **apimart** (+ai-api-gateway, api-docs, pay-as-you-go, aggregator, llm-api, 22 more) | 68 | 61 | 6.2k | 859/d | 766/d | ▁▁▁▁▃▂▂▁▁█▅▁█▃ | 2026-09-16 | [apimart001a/llm-gateway-comparison](https://github.com/apimart001a/llm-gateway-comparison) | near-duplicate, same-day, flat-stars |
| 8 | **auto-raid-complete-script** (+executor, executor-collection, multi-executor, rbx, rbx-scripts, 13 more) | 44 | 39 | 1.9k | 159/d | 622/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▁ | 2026-09-18 | [1234512345z/Arcadia-Update-v3.4](https://github.com/1234512345z/Arcadia-Update-v3.4) | near-duplicate, same-day, flat-stars |

<details><summary><b>jev</b>: 251 repos, 146.0k stars</summary>

- [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) 29.1k★ Non-autoregressive System 1 decision engine. Typed choice, score and yes/no dec…
- [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) 21.5k★ Fastest and cheapest web agent
- [jaredpalmer/kev](https://github.com/jaredpalmer/kev) 8.0k★ Jev-like family of decision models built on top of Qwen3.5/3.8 you can train an…
- [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) 7.2k★ Claude Code plugin that replaces the compaction summary with Jev decisions: eve…
- [jev-chat/jev-chat-jarvis](https://github.com/jev-chat/jev-chat-jarvis) 7.2k★ 装在手机上的对话副驾：在 QQ / X / 飞书里读懂对方、给出候选回复、一键填入输入框，发不发由你。非侵入，只读屏幕，不 hook 不改包。

</details>

<details><summary><b>opus</b>: 22 repos, 7.1k stars</summary>

- [JohnHeibel/PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) 1.6k★ Source code for the Claude Opus 5.5 music video for I'm Upping My P(doom)
- [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) 1.0k★ A growing collection of viral videos made with Claude Opus 5.5 and the prompts …
- [dgreenheck/tidewater](https://github.com/dgreenheck/tidewater) 995★ Coastal town built with Opus 5.5
- [riba2534/claude-opus-5-5-demo](https://github.com/riba2534/claude-opus-5-5-demo) 938★ claude-opus-5-5-demo
- [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) 666★ 43 film styles, each a reusable style prompt plus a short film made entirely in…

</details>

<details><summary><b>films</b>: 7 repos, 2.6k stars</summary>

- [feitangyuan/onetake](https://github.com/feitangyuan/onetake) 1.0k★ Motion films that never cut to the next slide: every beat grows out of the one …
- [alexgreensh/anidoodle](https://github.com/alexgreensh/anidoodle) 720★ Art and animation, written as code. Illustrations, loops, interactive web art, …
- [echris6/motion-video-kit](https://github.com/echris6/motion-video-kit) 324★ Claude Code skill kit for premium AI-assisted business videos: independent crit…
- [sevenevesai/riso-windowseat](https://github.com/sevenevesai/riso-windowseat) 263★ Procedural risograph films in single HTML files (Window Seat, Roost and more), …
- [tugrawork-creator/saas-motion-kit](https://github.com/tugrawork-creator/saas-motion-kit) 140★ Promo & motion videos for software products with HyperFrames + Claude Code. No …

</details>

<details><summary><b>steamos</b>: 5 repos, 660 stars</summary>

- [Droid-Deck/DroidDeck](https://github.com/Droid-Deck/DroidDeck) 298★ DroidDeck brings the SteamOS experience to Android
- [DeeJanuz/frametop](https://github.com/DeeJanuz/frametop) 112★ Multi-screen KDE Plasma desktop and universal 3D mouse for the Valve Steam Fram…
- [MaSieS4Fun/SteamOS-ARM-SM8550](https://github.com/MaSieS4Fun/SteamOS-ARM-SM8550) 110★ Official SteamOS ARM version, custom-adapted for SM8550 ARM devices.
- [hashtagbasit/SteamOS-ARM-Handhelds](https://github.com/hashtagbasit/SteamOS-ARM-Handhelds) 94★ Valve's SteamOS for ARM on Snapdragon handhelds. Runs on 8 Gen 3 (SM8650) and 8…
- [saphid/frame-control](https://github.com/saphid/frame-control) 46★ Frame Control: a free, open-source app for Valve Steam Frame on macOS, Windows,…

</details>

<details><summary><b>qwen-image</b>: 5 repos, 638 stars</summary>

- [nihui/qwenimage-ncnn-vulkan](https://github.com/nihui/qwenimage-ncnn-vulkan) 246★ ncnn implementation of Qwen-Image-2.1, with text-to-image, image editing, multi…
- [iamyoki/qwen-image-2.1-skill](https://github.com/iamyoki/qwen-image-2.1-skill) 128★ 🎨 Agentic skill for Qwen-Image-2.1: Rewrites and optimizes text-to-image and m…
- [wildminder/awesome-qwen-image](https://github.com/wildminder/awesome-qwen-image) 111★ Qwen-Image 2.1. Checkpoints, quants, prompt engines, LoRAs, and tooling
- [Work-Fisher/ComfyUI-Fisher-Pose](https://github.com/Work-Fisher/ComfyUI-Fisher-Pose) 98★ ComfyUI 姿势与机位编辑器 for Qwen Image 2.1：VNCCS 真人人偶 + OpenPose 一键摆姿（内置 209 骨架）+ 自由视角…
- [janishar/qwen-image-2.1-studio](https://github.com/janishar/qwen-image-2.1-studio) 55★ Local Qwen-Image-2.1 studio for Apple Silicon: text-to-image, multi-image editi…

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

第一次运行要 3 到 5 分钟，因为 GitHub 搜索 API 每分钟只允许 30 次请求。结果会在 `~/.cache/starwave` 缓存 6 小时，之后再跑是秒出。想长期保留 `starwave` 命令，运行 `npm install -g github:Chaoqi31/starwave`。

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
