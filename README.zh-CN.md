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
_recent 2,242 repos  2026-10-20..2026-11-03  stars>=40 · baseline 3,494 repos  2026-08-21..2026-10-19  stars>=150 · generated 2026-11-03 14:20 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **uncensored-ai** (+abliterated) | 6 | 4 | 1.4k | 571/d | 221/d | ▁▁▃▁▄▃▁▁▁▃▁▁█▂ | 2026-10-22 | [routerhubSI/glm-5.3-abliterated](https://github.com/routerhubSI/glm-5.3-abliterated) |
| 2 | **stick** | 6 | 6 | 2.0k | 500/d | 572/d | ▁▁▁▁▁▁▁▁▁▁▁█▅▃ | 2026-10-22 | [Arjun-Ingole/hop](https://github.com/Arjun-Ingole/hop) |
| 3 | **nxnative** | 6 | 6 | 3.8k | 459/d | 305/d | ▂▂▂▃▂▃▃▇█▅▅▄▄▆ | 2026-10-20 | [LNPANDY/NX2Apple](https://github.com/LNPANDY/NX2Apple) |
| 4 | **png** | 9 | 9 | 1.5k | 403/d | 232/d | ▁▁▁▁▁▁▃▂▃▄▂▂█▂ | 2026-10-21 | [heydeer/pngdeer](https://github.com/heydeer/pngdeer) |
| 5 | **supermimic** (+mjlab, reproduction, body) | 11 | 11 | 2.4k | 324/d | 113/d | ▁▄█▅▃▅▇▆▄▅▃▂▃▅ | 2026-10-21 | [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) |
| 6 | **statically** | 12 | 11 | 1.5k | 236/d | 138/d | ▁▂▂▃█▆▃▇▃▃▄▆▄▆ | 2026-10-21 | [ryderclanky/BotW-Native](https://github.com/ryderclanky/BotW-Native) |
| 7 | **cs2** (+aegis) | 6 | 6 | 776 | 229/d | 208/d | ▁▁▁▁▁▁▁▁▁▁▂█▁▂ | 2026-10-30 | [oilcorporatebarn/aegis-skinfees](https://github.com/oilcorporatebarn/aegis-skinfees) |
| 8 | **sidebar** | 6 | 6 | 1.3k | 206/d | 84/d | █▅▃▁▁▂▂▂▂▁▂▁▃▄ | 2026-10-20 | [dominikmartn/harp](https://github.com/dominikmartn/harp) |
| 9 | **portrait** (+pose-reference) | 7 | 7 | 675 | 187/d | 129/d | ▁▁▁▁▁▁▂▂▂▄▅▄▇█ | 2026-10-22 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 10 | **yandex** | 8 | 8 | 1.5k | 132/d | 40/d | ▁▁▃▂▄▄█▅▇▃▂▂▂▂ | 2026-10-21 | [Marker284/yandex-station-extended](https://github.com/Marker284/yandex-station-extended) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **windows-app** (+utility, software-engineering, activated, ready-to-run, scripts, 33 more) | 167 | 167 | 24.6k | 23.0k/d | 4.4k/d | ▁▁▁▁▁▁▁▁▁▁▂▁▁█ | 2026-10-20 | [Codeonshovel/microsoft-365](https://github.com/Codeonshovel/microsoft-365) | near-duplicate, flat-stars, same-day |
| 2 | **single-player** (+wallhack, cheat, helpers, changer, esp, 2 more) | 26 | 26 | 1.4k | 1.2k/d | 429/d | ▁▁▁▁▁▁▁▁▁▁▁▁▂█ | 2026-10-26 | [BadgeStudentShovel/valorant-skin-changer](https://github.com/BadgeStudentShovel/valorant-skin-changer) | near-duplicate, same-day, flat-stars |
| 3 | **php2shell** (+cve-2026-109618, cve-2026-109619, cve, rce, php, 3 more) | 34 | 31 | 9.9k | 778/d | 65/d | ▁█▅▄▂▂▂▁▁▁▁▁▁▁ | 2026-10-20 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 4 | **troubleshooting** (+game-guide, pc-gaming, steam-games, game-specific, graphics-settings, 28 more) | 48 | 48 | 2.5k | 584/d | 70/d | ▁▁▁▁▁▂▁▁▁█▁▁▁▁ | 2026-10-22 | [ilikechocopies/sideload-jiostb](https://github.com/ilikechocopies/sideload-jiostb) | same-day, flat-stars |
| 5 | **abliterated-models** (+uncensored-ai, uncensored-ai-model, abliterated) | 6 | 5 | 1.1k | 160/d | 68/d | ▁▁▆▁▇▄█▁▁▁▁▁▄▃ | 2026-10-22 | [routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) | near-duplicate |
| 6 | **coregold** (+usdt, vcc, visa, mastercard) | 17 | 15 | 798 | 139/d | 78/d | ▁▁▁▁▁▁▁▁▇▇▇▃█▁ | 2026-10-28 | [eyuputku57-ops/-CoreGold---Global-Virtual-Card-Platform-for-Media-Buying-AI-SaaS-Cross-Border-Payments](https://github.com/eyuputku57-ops/-CoreGold---Global-Virtual-Card-Platform-for-Media-Buying-AI-SaaS-Cross-Border-Payments) | same-day |
| 7 | **aion** (+aion-2, mmorpg, aion2, dps-meter, dps, 4 more) | 13 | 13 | 743 | 74/d | 5/d | ▁▁▁▁▁█▁▁▁▁▁▁▁▁ | 2026-10-24 | [ORICHO08/aion2-combat-overlay](https://github.com/ORICHO08/aion2-combat-overlay) | same-day |
| 8 | **fps-booster-no-lag** (+rpocket, fps-booster-software, fps-tweak, lag, frame-rate-boost, 8 more) | 10 | 10 | 589 | 62/d | 20/d | ▁▁▁▃▁▁█▁▁▇▁▃▁▁ | 2026-10-23 | [Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package](https://github.com/Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package) | near-duplicate |
| 9 | **enshrouded** (+game-companion) | 10 | 10 | 580 | 58/d | 0/d | ▁▁▁▁▁█▁▁▁▁▁▁▁▁ | 2026-10-24 | [Abdelhadidr/enshrouded-interactive-map-desktop](https://github.com/Abdelhadidr/enshrouded-interactive-map-desktop) | same-day |
| 10 | **resp** | 8 | 8 | 466 | 49/d | 16/d | ▁▁▁▃▁▁█▁▁▇▁▃▁▁ | 2026-10-23 | [Wildange85773l/windows-fine-tuner-resp](https://github.com/Wildange85773l/windows-fine-tuner-resp) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>uncensored-ai</b>: 6 repos, 1.4k stars</summary>

- [routerhubSI/glm-5.3-abliterated](https://github.com/routerhubSI/glm-5.3-abliterated) 545★ GLM 5.3 abliterated or uncensored API access with RouterHub. Browse 35 jailbrea…
- [wideeyededi/uncensored-nsfw-ai-video-api](https://github.com/wideeyededi/uncensored-nsfw-ai-video-api) 417★ Uncensored NSFW AI video API — Seedance Spicy & Wan NSFW docs for 18+ text-to-v…
- [7API/glm-5.3-abliterated](https://github.com/7API/glm-5.3-abliterated) 172★ GLM 5.3 Abliterated or Uncensored AI model — 35 jailbreak prompts, model guide …
- [routerhubSI/openrouter-alternative](https://github.com/routerhubSI/openrouter-alternative) 136★ OpenRouter alternative for uncensored AI LLM access — independent RouterHub giv…
- [UncensoredLabs/uncensored-ai-api](https://github.com/UncensoredLabs/uncensored-ai-api) 95★ Uncensored AI API and browser chat: DeepSeek and GLM models, streaming, Python …

</details>

<details><summary><b>stick</b>: 6 repos, 2.0k stars</summary>

- [Arjun-Ingole/hop](https://github.com/Arjun-Ingole/hop) 1.4k★ Install Linux next to Windows without a USB stick
- [artemnovitckii/claude-animation-skills](https://github.com/artemnovitckii/claude-animation-skills) 194★ Six Claude Code skills that make animations for reels, no footage needed: 3D ca…
- [nilbuild/tinyhand](https://github.com/nilbuild/tinyhand) 143★ A tiny hand on a stick that points at things on your Mac screen.
- [AbhishekKaisar/glassos-tv](https://github.com/AbhishekKaisar/glassos-tv) 96★ A calm, glassy home screen for Android TV, Google TV and Fire TV, inspired by t…
- [cascodigital/skippy-tv](https://github.com/cascodigital/skippy-tv) 55★ Sci-fi starship-bridge home screen for Android TV (tested on NVIDIA Shield 1st …

</details>

<details><summary><b>nxnative</b>: 6 repos, 3.8k stars</summary>

- [LNPANDY/NX2Apple](https://github.com/LNPANDY/NX2Apple) 3.2k★ Play your own Switch games on iPhone/iPad — one-click macOS app, no terminal. \|…
- [Xc1Ym/LumaNX](https://github.com/Xc1Ym/LumaNX) 250★ 璃游 LumaNX：nxnative 第三方 GUI，图形化构建 Switch 游戏，支持 macOS 运行与 iOS / iPadOS IPA 导出。A m…
- [xFractals/pokopia-native](https://github.com/xFractals/pokopia-native) 144★ Build Pokémon Pokopia (Switch 2) into a native Mac app and iPhone app from your…
- [varyform/nx-native-wrapper](https://github.com/varyform/nx-native-wrapper) 91★ NX Play: a Mac app to build, play, install and manage Switch games with nxnativ…
- [jamescastells/nxnative-gui](https://github.com/jamescastells/nxnative-gui) 69★ A macOS app for nxnative.

</details>

<details><summary><b>png</b>: 9 repos, 1.5k stars</summary>

- [heydeer/pngdeer](https://github.com/heydeer/pngdeer) 431★ Smaller images, same picture. Compress PNGs to PNG or WebP with automatic quali…
- [nikita-s-x2001x7/photo-converter](https://github.com/nikita-s-x2001x7/photo-converter) 300★ Photo Converter Pro 2026 – Fast and powerful image converter for Windows. Conve…
- [SparrowPortray/horizon-free-capes](https://github.com/SparrowPortray/horizon-free-capes) 245★ Every cape, wing, hat, pet and emote in Drip is free: 24 capes, your own PNG or…
- [charolettebradford1361985svo-bit/stable-sprite-animation](https://github.com/charolettebradford1361985svo-bit/stable-sprite-animation) 111★ Reference-preserving sprite animation skill for AI agents: intact-limb walks, s…
- [guilhermealvestech/carrossel-skill](https://github.com/guilhermealvestech/carrossel-skill) 108★ Skill para Claude Code e Codex: carrosséis com a cara da sua marca, do roteiro …

</details>

<details><summary><b>supermimic</b>: 11 repos, 2.4k stars</summary>

- [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) 797★ vibe coded supermimic within 1h, LAFAN passed within 1.5 gpuh training
- [miao-org/awesome-supermimic](https://github.com/miao-org/awesome-supermimic) 459★ A curated collection of SuperMimic implementations, extensions, demos, and reso…
- [CuboiLeo/SuperMimic-Reproduced](https://github.com/CuboiLeo/SuperMimic-Reproduced) 382★ Reproduction of SuperMimic (arXiv:2610.28480): learned differentiable world mod…
- [Motphys/Uni-SuperMimic](https://github.com/Motphys/Uni-SuperMimic) 233★ SuperMimic-UniLab: An Independent reproduction of SuperMimic on UniLab for whol…
- [Huy-Quang-Dao/instantTrack](https://github.com/Huy-Quang-Dao/instantTrack) 123★ Whole-body motion tracking for the Unitree G1 in about 7 minutes on one GPU, 4.…

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
