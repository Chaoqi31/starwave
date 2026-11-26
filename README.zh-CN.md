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
_recent 3,687 repos  2026-11-12..2026-11-26  stars>=40 · baseline 4,270 repos  2026-09-13..2026-11-11  stars>=150 · generated 2026-11-26 16:57 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **victory** | 11 | 11 | 20.8k | 10.2k/d | 6.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▆█▅ | 2026-11-23 | [Marvisak/VIctory](https://github.com/Marvisak/VIctory) |
| 2 | **trainer** (+blade, fling, phantom-blade-zero, hit) | 26 | 26 | 5.6k | 2.0k/d | 458/d | ▁▁▁▁▁█▁▁▁▄▂▂▁▄ | 2026-11-15 | [alesha-pro/llm.asm](https://github.com/alesha-pro/llm.asm) |
| 3 | **gdk** (+xbox-series) | 5 | 5 | 8.9k | 1.7k/d | 2.7k/d | ▁▁▁▁▁▁▁▁▁▁▁█▆▂ | 2026-11-20 | [xcl-dev/xcl](https://github.com/xcl-dev/xcl) |
| 4 | **clips** (+video-ai, video-api, video-game, video-games, highlight) | 22 | 22 | 5.6k | 1.6k/d | 874/d | ▁▁▁▁▁▁▁▄▅▄▃▂█▆ | 2026-11-12 | [iamajmeena/neonclipping](https://github.com/iamajmeena/neonclipping) |
| 5 | **riemann** (+alp, hypothesis) | 9 | 9 | 3.4k | 1.3k/d | 510/d | ▁▁▁▁▁▁▁▁▆▄▄▃▃█ | 2026-11-20 | [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis) |
| 6 | **video-converter** | 6 | 6 | 3.6k | 1.1k/d | 1.1k/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▁ | 2026-11-15 | [zero5122/offline-file-converter-windows](https://github.com/zero5122/offline-file-converter-windows) |
| 7 | **shape** | 18 | 18 | 2.6k | 903/d | 349/d | ▁▁▁▁▁█▁▂▁▁▁▂▂▄ | 2026-11-15 | [HoangMinh-sikula/rob-run-mod-trainer](https://github.com/HoangMinh-sikula/rob-run-mod-trainer) |
| 8 | **macro** (+recoil, keyless-script, luau-script) | 19 | 19 | 1.6k | 607/d | 292/d | ▁▁▁▁▁█▁▂▁▁▂▆▅▃ | 2026-11-13 | [alkabdohagag/fxdeck-fivem-command-deck](https://github.com/alkabdohagag/fxdeck-fivem-command-deck) |
| 9 | **adobe** | 17 | 17 | 2.6k | 592/d | 124/d | ▁▁▁▁▁▄▁▂▁█▂▂▂▂ | 2026-11-15 | [purvprajapati2504-design/premiere-pro-video-editor](https://github.com/purvprajapati2504-design/premiere-pro-video-editor) |
| 10 | **agy** (+antigravity-plugin) | 12 | 11 | 4.5k | 574/d | 782/d | ▁▂▁▁▂▁▂▂▃▃▅▅██ | 2026-11-13 | [INK-Q/agy-fast](https://github.com/INK-Q/agy-fast) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **software-engineering** (+windows-app, utilities, letting, windows-10, utility, 160 more) | 506 | 506 | 122.9k | 44.8k/d | 20.8k/d | ▁▁▁▁▁▁▁▁▁█▂▁▇▅ | 2026-11-13 | [Umbra9179/clipboard-history-manager-windows](https://github.com/Umbra9179/clipboard-history-manager-windows) | near-duplicate, same-day, flat-stars |
| 2 | **prebuilt** (+windows-tool, rotation, portable, x64, utility, 60 more) | 324 | 272 | 18.1k | 9.0k/d | 6.0k/d | ▁▁▁▁▁▁▁▁▁▁▁▃█▆ | 2026-11-23 | [SodovaFo7/claude-code-unlimited](https://github.com/SodovaFo7/claude-code-unlimited) | near-duplicate, same-day, flat-stars |
| 3 | **gemeni** (+manus, typescript-sdk, ai--manus, function-calling, general-purpose, 39 more) | 366 | 308 | 64.5k | 5.1k/d | 1/d | ▁▇█▃▁▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [YellowLaborerMarket/Gemini-Config-Checker-](https://github.com/YellowLaborerMarket/Gemini-Config-Checker-) | near-duplicate, same-day, flat-stars |
| 4 | **latest** (+activated, premium, izotope-ozone, genius, lite, 1 more) | 57 | 57 | 11.3k | 5.1k/d | 2.7k/d | ▁▁▁▁▁▃▁▁▁▁▁▁█▇ | 2026-11-14 | [34306/ForceDuoApp](https://github.com/34306/ForceDuoApp) | same-day, flat-stars |
| 5 | **xtreamcode** (+ip-tv, iptv-channels, iptv-m3u8, iptv-player, iptv-player-application, 35 more) | 248 | 221 | 35.2k | 2.8k/d | 1/d | ▁▅█▁▁▁▁▁▁▁▁▁▁▁ | 2026-11-13 | [trackersnailgrip/GitHub-Copilot-app](https://github.com/trackersnailgrip/GitHub-Copilot-app) | near-duplicate, same-day, flat-stars |
| 6 | **desktop-ai** (+desktop-apps, serum, desktop-client, hyper, desktop-tools, 16 more) | 16 | 16 | 3.3k | 1.7k/d | 985/d | ▁▁▁▁▁▁▁▁▁▁▁▁█▇ | 2026-11-17 | [jyotiazev3do/duolingo-desktop](https://github.com/jyotiazev3do/duolingo-desktop) | same-day |
| 7 | **x64** (+autodesk-3ds-max-app, autodesk-3d-design, autodesk-automation, autodesk-desktop, autodesk-maya-pc, 11 more) | 23 | 22 | 3.3k | 1.5k/d | 809/d | ▁▁▂▁▁▁▁▁▁▁▂▂█▅ | 2026-11-14 | [Freminet/ScarlettX](https://github.com/Freminet/ScarlettX) | flat-stars |
| 8 | **directx-11** (+multithreading, performance-tuning, directx-12, configuration, cmake, 8 more) | 35 | 33 | 2.7k | 1.4k/d | 886/d | ▁▁▁▁▁▁▁▁▁▁▁█▇▃ | 2026-11-23 | [isadhanjana-cpu/gta-5-enhanced-mod-menu](https://github.com/isadhanjana-cpu/gta-5-enhanced-mod-menu) | near-duplicate, flat-stars |
| 9 | **hack** (+robrun-mod) | 20 | 20 | 3.1k | 1.3k/d | 693/d | ▁▁▁▁▁▆▁▁▁▁▁▂▅█ | 2026-11-15 | [gigarectorpulse/Universal-Gaming-Hub](https://github.com/gigarectorpulse/Universal-Gaming-Hub) | flat-stars |
| 10 | **coregold** (+vcc, usdt, applepay, finops, ustd, 18 more) | 91 | 76 | 7.7k | 1.1k/d | 1.5k/d | ▁▂▁▁▂▂▂▄▄▁▃█▆█ | 2026-11-12 | [TabethaBult399205/virtual-card-usdt-indie-hacker-ai-mvp-saas-applepay](https://github.com/TabethaBult399205/virtual-card-usdt-indie-hacker-ai-mvp-saas-applepay) | near-duplicate, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>victory</b>: 11 repos, 20.8k stars</summary>

- [Marvisak/VIctory](https://github.com/Marvisak/VIctory) 13.1k★ An attempt at running GTA VI on PC
- [fxceless/victory-fork](https://github.com/fxceless/victory-fork) 3.2k★ Work-in-progress fork of VIctory: getting an Xbox Series title to render and ru…
- [Belobug/VIctory-Belobug-AMD](https://github.com/Belobug/VIctory-Belobug-AMD) 1.8k★ 
- [avatarmanz/VIctory-7900XTX](https://github.com/avatarmanz/VIctory-7900XTX) 1.7k★ Goal: an Xbox Series title (your own dump) at a stable 30+ fps on PC without ra…
- [ZigZagBoi1/ScarlettPort](https://github.com/ZigZagBoi1/ScarlettPort) 450★ Native PC port layer for an Xbox Series X\|S title: the game's x64 code runs on …

</details>

<details><summary><b>trainer</b>: 26 repos, 5.6k stars</summary>

- [alesha-pro/llm.asm](https://github.com/alesha-pro/llm.asm) 1.2k★ Qwen3-0.6B inference (12 KB), bare-metal bootable OS (22 KB), and from-scratch …
- [tweak-for-me/impulse](https://github.com/tweak-for-me/impulse) 515★ Lightweight alternative Windows client for game trainers: hotkeys, overlay and …
- [vinujak/phantom-blade-zero-modifier](https://github.com/vinujak/phantom-blade-zero-modifier) 339★ Phantom Blade Zero Modifier: God Mode, Infinite Health, One-Hit Kill Trainer fo…
- [aagiiretry/phantom-blade-zero-enhancer](https://github.com/aagiiretry/phantom-blade-zero-enhancer) 335★ Blade Zero Enhancer: Runtime Utility for Blade Zero
- [sukhwinder776/phantom-blade-zero-trainer](https://github.com/sukhwinder776/phantom-blade-zero-trainer) 335★ Phantom Blade Zero Trainer: Symbol Cues, Wider Parry Windows, Full Arsenal Star…

</details>

<details><summary><b>gdk</b>: 5 repos, 8.9k stars</summary>

- [xcl-dev/xcl](https://github.com/xcl-dev/xcl) 8.5k★ Xbox Series compatibility layer for Windows - runs console game code natively, …
- [PastiiJay/klbf-lab](https://github.com/PastiiJay/klbf-lab) 156★ Xbox Series X\|S (Scarlett) GDK compatibility layer for Windows: runs the Xbox S…
- [isaac-btw/AmericasLauncher](https://github.com/isaac-btw/AmericasLauncher) 78★ A modern Windows launcher that automatically sets up, updates, builds, and laun…
- [zortos293/XSEmu](https://github.com/zortos293/XSEmu) 60★ Experimental Xbox Series X\|S (GDK) title runner for Windows, built on the XCL t…
- [jadeowaowa/scarlett-layer](https://github.com/jadeowaowa/scarlett-layer) 46★ Experimental Windows x64 / D3D12 compatibility layer for unpacked, unencrypted …

</details>

<details><summary><b>clips</b>: 22 repos, 5.6k stars</summary>

- [iamajmeena/neonclipping](https://github.com/iamajmeena/neonclipping) 2.7k★ Paste a link, get captioned 9:16 clips in ~2 min. Free, local, open-source clip…
- [D3bug-patch91/davinci-resolve-speed-editor](https://github.com/D3bug-patch91/davinci-resolve-speed-editor) 226★ Davinci Resolve Speed Editor for Windows 10/11. Edits timelines faster with a d…
- [Gerald-wallace25/gopro-fusion-studio](https://github.com/Gerald-wallace25/gopro-fusion-studio) 226★ Gopro Fusion Studio for Windows 10/11. Stitches dual-lens 360 footage into flat…
- [DivyaPham/intel-arc-control](https://github.com/DivyaPham/intel-arc-control) 221★ Intel Arc Control for Windows 10/11. Monitors GPU performance, installs driver …
- [Mario-smith54/kolor-autopano-video](https://github.com/Mario-smith54/kolor-autopano-video) 219★ Kolor Autopano Video for Windows 10/11. Stitches footage from multiple action c…

</details>

<details><summary><b>riemann</b>: 9 repos, 3.4k stars</summary>

- [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis) 1.4k★ Lean formalization of the Riemann Hypothesis (Alpöge, 2026-11-20) being cleaned…
- [lsernau/grh-lean](https://github.com/lsernau/grh-lean) 814★ A short Lean 4 proof of the Generalized Riemann Hypothesis
- [CocoSgt/riemann-hypothesis-lean](https://github.com/CocoSgt/riemann-hypothesis-lean) 581★ Mirror of Levent Alpöge's Lean proof of the Riemann Hypothesis (with Claude). A…
- [mccorvie/riemann-masullo](https://github.com/mccorvie/riemann-masullo) 175★ Lean 4 formalization of A. M. Masullo, The Music of the Primes
- [jimjamzola/RH-Alpoge-Reconstruction](https://github.com/jimjamzola/RH-Alpoge-Reconstruction) 171★ An attempt to make the proof of the Riemann hypothesis human readable

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
