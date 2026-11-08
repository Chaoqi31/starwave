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
_recent 2,423 repos  2026-10-25..2026-11-08  stars>=40 · baseline 3,670 repos  2026-08-26..2026-10-24  stars>=150 · generated 2026-11-08 13:28 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **lag** | 6 | 6 | 1.5k | 707/d | 218/d | ▁▁▁▁▁▂▁▁▁▅█▁█▅ | 2026-10-30 | [PulverizeLink/roblox-performance-tool](https://github.com/PulverizeLink/roblox-performance-tool) |
| 2 | **totk** | 5 | 5 | 7.1k | 704/d | 322/d | ▂▂▁▁▆█▇▇▇▄▄▃▃▃ | 2026-10-25 | [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) |
| 3 | **trainer** (+blade, phantom) | 7 | 7 | 1.1k | 586/d | 363/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-03 | [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) |
| 4 | **regularly** | 6 | 6 | 1.4k | 290/d | 133/d | ▁▁▃▁▁▁▁▅▁▁█▁▁▆ | 2026-10-27 | [fjordostrichhose/Steam-Points-Tools-2026](https://github.com/fjordostrichhose/Steam-Points-Tools-2026) |
| 5 | **eglantine** | 5 | 5 | 1.1k | 284/d | 281/d | ▁▁▁▁▁▁▁▁▂▂▃▆█▄ | 2026-11-01 | [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) |
| 6 | **blockchain** (+bnb) | 9 | 9 | 1.2k | 280/d | 179/d | ▁▁▁▁▁▁▄▁▄▅▆█▄▂ | 2026-10-25 | [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) |
| 7 | **forensics** | 5 | 5 | 977 | 255/d | 159/d | ▁▁▁▁▁▃▂▁▂▇▆▄█▇ | 2026-10-25 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 8 | **nintendo-switch-2** | 6 | 6 | 1.2k | 201/d | 134/d | ▁▁▁▁▁▂▁▁▇█▆▅▄▅ | 2026-10-30 | [xFractals/pokopia-native](https://github.com/xFractals/pokopia-native) |
| 9 | **portrait** (+pose-reference) | 9 | 9 | 982 | 179/d | 96/d | ▁▂▂▁▃▅▄▆█▅▃▄▆▆ | 2026-10-26 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 10 | **living** | 7 | 7 | 1.7k | 174/d | 72/d | ▄▃▃▂▂█▅▅▅▃▃▃▂▂ | 2026-10-25 | [alchaincyf/huashu-bird-sticker](https://github.com/alchaincyf/huashu-bird-sticker) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **configured** (+pre-configured, software-engineering, utility, scripts, seamless, 80 more) | 293 | 293 | 76.7k | 58.4k/d | 11.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▂█ | 2026-10-25 | [PaladinDiscriminate/adobe-substance-3d](https://github.com/PaladinDiscriminate/adobe-substance-3d) | near-duplicate, same-day, flat-stars |
| 2 | **activator** (+kms, activation, windows-10, massgravel, office365, 25 more) | 136 | 136 | 19.8k | 9.7k/d | 6.5k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-29 | [bautistacorujo610-stack/office-activation-command-tool](https://github.com/bautistacorujo610-stack/office-activation-command-tool) | near-duplicate, same-day, flat-stars |
| 3 | **windows-app** (+activated, community-driven, enabled, mirroring) | 54 | 54 | 13.7k | 8.4k/d | 3.6k/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-11-06 | [OhmUrchinSee/abbyy-finereader-pdf](https://github.com/OhmUrchinSee/abbyy-finereader-pdf) | same-day, flat-stars |
| 4 | **gemeni** (+general-purpose, manus, purpose, typescript-sdk, function-calling, 15 more) | 33 | 29 | 1.8k | 1.3k/d | 591/d | ▁▁▁▁▁▁▁▁▁▁▁▁▆█ | 2026-11-06 | [quyetcao/ai-manus](https://github.com/quyetcao/ai-manus) | near-duplicate, flat-stars |
| 5 | **ai-image-generation** (+apimart, gpt-image) | 14 | 2 | 1.8k | 477/d | 438/d | ▁▁▁▁▂▁▁▁▂▁▁█▂▁ | 2026-10-29 | [wquguru/shisei](https://github.com/wquguru/shisei) | same-day, few-owners |
| 6 | **coregold** (+vcc, usdt, visa, mastercard) | 42 | 37 | 2.4k | 253/d | 138/d | ▁▁▁▃▄▅▃▇▁▅█▇▁▁ | 2026-10-28 | [gutrfgtd-cyber/CoreGold---Direct-Issue-Global-Virtual-Credit-Card-Infrastructure-Management-Console](https://github.com/gutrfgtd-cyber/CoreGold---Direct-Issue-Global-Virtual-Credit-Card-Infrastructure-Management-Console) | flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>lag</b>: 6 repos, 1.5k stars</summary>

- [PulverizeLink/roblox-performance-tool](https://github.com/PulverizeLink/roblox-performance-tool) 426★ Lightweight performance utility for Roblox on Windows. Boosts FPS, fixes stutte…
- [StormSkinkGrip/game-ping-multipath-router](https://github.com/StormSkinkGrip/game-ping-multipath-router) 326★ Shortcut races your normal route against faster ones to the game server, sends …
- [Badgenyamultiplexer/pc-game-fps-doctor](https://github.com/Badgenyamultiplexer/pc-game-fps-doctor) 307★ One button: why the game stutters, why it lags and why it won't start. Pitstop …
- [PlateParrotTerminal/lag-doctor](https://github.com/PlateParrotTerminal/lag-doctor) 190★ Game ping, jitter & packet loss monitor: finds who causes your lag
- [MajestyPoemFold/ghostclick-mouse-double-click-fix](https://github.com/MajestyPoemFold/ghostclick-mouse-double-click-fix) 173★ Free mouse double click test and fix for Windows 11/10. Finds ghost clicks (mou…

</details>

<details><summary><b>totk</b>: 5 repos, 7.1k stars</summary>

- [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) 5.8k★ Static recompilation of The Legend of Zelda: Tears of the Kingdom to native Win…
- [kuraeow/ultratears](https://github.com/kuraeow/ultratears) 836★ Unofficial native PC and Steam Deck port of Tears of the Kingdom 1.4.3 using st…
- [daniel-madrid-07/weeping-of-the-empire](https://github.com/daniel-madrid-07/weeping-of-the-empire) 306★ Zelda: Tears of the Kingdom (TotK) 1.0.0 recompiled to native Windows and Vulka…
- [FurkanAnc/totk-launcher](https://github.com/FurkanAnc/totk-launcher) 89★ Launcher for the Tears of the Kingdom PC recomp: settings, key rebinding, keybo…
- [AurelioB/totk-android](https://github.com/AurelioB/totk-android) 72★ Tears of the Kingdom native Android port (TotK Native)

</details>

<details><summary><b>trainer</b>: 7 repos, 1.1k stars</summary>

- [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) 244★ Phantom Blade Zero Trainer 2026: God Mode, One-Hit Kill, start All Weapons
- [pablomatosdev/phantom-blade-zero-save-manager](https://github.com/pablomatosdev/phantom-blade-zero-save-manager) 244★ Phantom Blade Zero Save Manager 2026 — Automated Progress Backup Utility
- [richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit](https://github.com/richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit) 244★ PhantomBladeZero-Cheat: 54 toggleable runtime options and three presets for Pha…
- [wanjalaibra05-lgtm/phantom-blade-zero-assist](https://github.com/wanjalaibra05-lgtm/phantom-blade-zero-assist) 244★ Phantom Blade Zero: Symbol Cues, Wider Parry Windows, Full Arsenal
- [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) 73★ Whole-body motion tracking for the Unitree G1 in under a minute. BlinkMimic's w…

</details>

<details><summary><b>regularly</b>: 6 repos, 1.4k stars</summary>

- [fjordostrichhose/Steam-Points-Tools-2026](https://github.com/fjordostrichhose/Steam-Points-Tools-2026) 426★ Professional desktop application for Steam users. Smart tools for points manage…
- [davidlopez-x05x8/minecraft-aim-assist](https://github.com/davidlopez-x05x8/minecraft-aim-assist) 300★ Minecraft Aim Assist 2026 — Smooth aiming assistance for 1.21.4 Fabric. Adaptiv…
- [StraitBailiff/Voice-Changer-2026](https://github.com/StraitBailiff/Voice-Changer-2026) 235★ Lightweight desktop application for real-time voice changing. Multiple voice ef…
- [ChannelDivinerCast/VSCode-Extension-Helper](https://github.com/ChannelDivinerCast/VSCode-Extension-Helper) 163★ Lightweight desktop tool for Visual Studio Code users. Smart extension manageme…
- [GrandeurPikeman/Roblox-MM2-Utility-2026](https://github.com/GrandeurPikeman/Roblox-MM2-Utility-2026) 144★ Lightweight desktop utility for Roblox Murder Mystery 2. Convenient helpers, qu…

</details>

<details><summary><b>eglantine</b>: 5 repos, 1.1k stars</summary>

- [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) 500★ Use-case guide to Nintendo Switch 2 emulator forks: builds, games, GPUs, Androi…
- [sylvieistaken/selevet-eglantine](https://github.com/sylvieistaken/selevet-eglantine) 249★ Selevet Eglantine: an unofficial Eglantine (Switch 2 emulator) build tuned for …
- [viejunerd/Eglantine-PS5-](https://github.com/viejunerd/Eglantine-PS5-) 150★ 
- [ZendNevs/Eglantine-ZendNevs](https://github.com/ZendNevs/Eglantine-ZendNevs) 114★ Better performance, Frame Generation FSR 3 and LSFG. DynamicFPS. 30FPS LOCK. On…
- [sikoGD/playDB-CNT](https://github.com/sikoGD/playDB-CNT) 88★ Play The Duskbloods Network Test on Eglantine/Lichii: a launcher with local loo…

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
