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
_recent 2,211 repos  2026-10-16..2026-10-30  stars>=40 · baseline 3,349 repos  2026-08-17..2026-10-15  stars>=150 · generated 2026-10-30 12:59 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **android-tv** (+google-tv, debloat, fire-tv, tv-style, home-screen, 8 more) | 30 | 29 | 57.9k | 4.7k/d | 2.5k/d | ▁▁▃▆█▇▅▄▅▅▄▃▃▃ | 2026-10-16 | [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) |
| 2 | **kingdom** (+tears, totk) | 6 | 6 | 8.3k | 1.6k/d | 568/d | ▁▁███▇▄▄▃▄▄▃▃█ | 2026-10-17 | [ly05010419/MacNativeGames](https://github.com/ly05010419/MacNativeGames) |
| 3 | **tvs** (+webos, tizen, lg-tv) | 15 | 15 | 10.2k | 1.0k/d | 610/d | ▁▁▁▁▇█▆▅▄▆▆▅▃▃ | 2026-10-17 | [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) |
| 4 | **purge** (+inject) | 10 | 9 | 6.1k | 609/d | 407/d | ▁▂▁▂██▄▂▂▄▅▄▄▂ | 2026-10-16 | [kingcharleslzy-ai/dsh-purge](https://github.com/kingcharleslzy-ai/dsh-purge) |
| 5 | **supermimic** (+reproduction) | 9 | 9 | 2.0k | 357/d | 197/d | ▁▁▁▁▁▄█▅▃▅▇▅▄▅ | 2026-10-21 | [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) |
| 6 | **health** | 8 | 8 | 951 | 354/d | 33/d | ▁▂▃▂▁▄▅▂▃█▁▁▄▁ | 2026-10-16 | [mike-vops93s1/Valorant-ESP-Advanced-Player-Visual-Overlay-2026](https://github.com/mike-vops93s1/Valorant-ESP-Advanced-Player-Visual-Overlay-2026) |
| 7 | **ad-free** | 9 | 9 | 2.8k | 306/d | 153/d | ▁▁▄██▅▄▃▄▃▃▄▃▃ | 2026-10-18 | [Ansub/tv-detox](https://github.com/Ansub/tv-detox) |
| 8 | **moss** (+moss-image) | 12 | 12 | 3.1k | 295/d | 146/d | ▇▆██▅▆▇▆▅▄▆▄▄▅ | 2026-10-16 | [OpenMOSS/MOSS-Image](https://github.com/OpenMOSS/MOSS-Image) |
| 9 | **secure** | 6 | 6 | 1.0k | 266/d | 104/d | ▁▁▂▄▄▁▂▃▄▃▃█▄▅ | 2026-10-17 | [eliasbiondo/antirion](https://github.com/eliasbiondo/antirion) |
| 10 | **yandex** | 7 | 7 | 1.3k | 176/d | 181/d | ▁▁▁▁▁▁▃▂▅▃█▅▇▃ | 2026-10-21 | [Marker284/yandex-station-extended](https://github.com/Marker284/yandex-station-extended) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **activated** (+pre-activated, ready-to-run, setup, immediate, crack, 30 more) | 134 | 134 | 15.0k | 10.8k/d | 208/d | ▁██▁▁▂▁▁▁▁▂▁▃▂ | 2026-10-17 | [OriginOstrichSignify/Photo-Commander](https://github.com/OriginOstrichSignify/Photo-Commander) | near-duplicate, flat-stars, same-day |
| 2 | **troubleshooting** (+game-guide, pc-gaming, steam-games, game-specific, graphics-settings, 27 more) | 46 | 46 | 2.2k | 1.9k/d | 640/d | ▁▁▁▁▁▁▁▁▁▂▁▁▁█ | 2026-10-22 | [NeonToShadow/fps-boost-2026-windows-gaming-optimizer-resp](https://github.com/NeonToShadow/fps-boost-2026-windows-gaming-optimizer-resp) | same-day, flat-stars |
| 3 | **utility** | 27 | 27 | 2.3k | 1.2k/d | 192/d | ▁▁▆▄▂▂▂▂▅▇▂▅▄█ | 2026-10-18 | [Manan-Santoki/OpenShelf](https://github.com/Manan-Santoki/OpenShelf) | flat-stars |
| 4 | **php2shell** (+cve-2026-109618, cve-2026-109619, rce, cve, poc, 4 more) | 31 | 28 | 9.6k | 1.1k/d | 121/d | ▁▁▁▁▁█▅▄▂▂▂▁▁▁ | 2026-10-20 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 5 | **lag** (+fps-booster-no-lag, rpocket, booster, fps-booster-software, fps-tweak, 14 more) | 19 | 19 | 1.3k | 303/d | 155/d | ▁▁▄▁▁▁▁▂▁▂▆▁▁█ | 2026-10-18 | [nickn-eng1989k7/Fortnite-FPS-Booster-Frame-Rate-Latency-Tuning-for-Windows](https://github.com/nickn-eng1989k7/Fortnite-FPS-Booster-Frame-Rate-Latency-Tuning-for-Windows) | near-duplicate |
| 6 | **aion** (+aion-2, aion2, mmorpg, timer, overlay, 5 more) | 14 | 14 | 859 | 227/d | 1/d | ▁▁▁▁▁▁▁▁▁█▁▁▁▁ | 2026-10-24 | [SupervisorScrew/AION-2-Cheat](https://github.com/SupervisorScrew/AION-2-Cheat) | same-day |
| 7 | **auto-scaling** (+scaling, centralized, utilizes, enables, within) | 24 | 9 | 2.8k | 214/d | 897/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▁ | 2026-10-17 | [bagusprts/OutlineWeld](https://github.com/bagusprts/OutlineWeld) | same-day, few-owners, flat-stars |
| 8 | **abliterated-models** (+uncensored-ai, uncensored-ai-model, abliterated, anthropic-compatible) | 5 | 5 | 893 | 172/d | 2/d | ▁▁▁▁▁▁▆▁▆▄█▁▁▁ | 2026-10-22 | [routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) | near-duplicate |
| 9 | **rpocket** (+esp, item) | 11 | 11 | 655 | 141/d | 117/d | ▁▁▁▁▁▁▁▂▁▁▆▁▁█ | 2026-10-23 | [OnCzar/Delivery-rpocket-Job](https://github.com/OnCzar/Delivery-rpocket-Job) | same-day |
| 10 | **resp** | 8 | 8 | 498 | 95/d | 84/d | ▁▁▁▁▁▁▁▃▁▁▆▁▁█ | 2026-10-23 | [Wildange85773l/windows-fine-tuner-resp](https://github.com/Wildange85773l/windows-fine-tuner-resp) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>android-tv</b>: 30 repos, 57.9k stars</summary>

- [Gathin23/cleanyourtv](https://github.com/Gathin23/cleanyourtv) 46.1k★ Debloat any Android or Google TV over Wi-Fi and get an Apple TV-style home.
- [simbasjungles/free-my-tv](https://github.com/simbasjungles/free-my-tv) 5.4k★ A fast, ad-free home screen for Google TV, LG webOS and Samsung Tizen. One butt…
- [humblemuzzu/dumbtv](https://github.com/humblemuzzu/dumbtv) 1.8k★ Take the ads, tracking and clutter out of your Fire TV over ADB, no root. Every…
- [udhaykumarbala/cleanyourtv-app](https://github.com/udhaykumarbala/cleanyourtv-app) 1.1k★ A community-built phone app for Clean Your TV: clean up an Android TV from your…
- [mihirgupta0900/tv-home](https://github.com/mihirgupta0900/tv-home) 678★ Debloat a slow, ad-filled Android TV over Wi-Fi and give it a fast Apple TV-sty…

</details>

<details><summary><b>kingdom</b>: 6 repos, 8.3k stars</summary>

- [ly05010419/MacNativeGames](https://github.com/ly05010419/MacNativeGames) 6.5k★ Play your own Tears of the Kingdom and Breath of the Wild natively on Apple sil…
- [valentderah/totk-pc-recomp](https://github.com/valentderah/totk-pc-recomp) 996★ Static recompilation of The Legend of Zelda: Tears of the Kingdom to native Win…
- [kuraeow/ultratears](https://github.com/kuraeow/ultratears) 440★ Unofficial native Windows port of Tears of the Kingdom 1.4.3 using static recom…
- [OJZen/totk-mobile](https://github.com/OJZen/totk-mobile) 191★ Experimental native Tears of the Kingdom port for macOS and iOS.
- [Muhammad1259-sigma/totk-recomp](https://github.com/Muhammad1259-sigma/totk-recomp) 85★ Static recompilation of Zelda: Tears of the Kingdom 1.0.0 to Linux / Steam Deck…

</details>

<details><summary><b>tvs</b>: 15 repos, 10.2k stars</summary>

- [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) 8.0k★ 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for …
- [OmkarK97/webos-vibehack](https://github.com/OmkarK97/webos-vibehack) 336★ Apple TV-style home screen for LG webOS TVs, a port of tv-vibehack
- [lasharor/cleanyourtv-WebOS](https://github.com/lasharor/cleanyourtv-WebOS) 327★ A clean home screen for rooted LG webOS TVs, with an optional debloat of LG's a…
- [rudra-avatar/Hearth](https://github.com/rudra-avatar/Hearth) 271★ Hearth: a fast, calm home screen for LG WebOS TVs
- [danielthejoker18/FreeMyTvWebOS](https://github.com/danielthejoker18/FreeMyTvWebOS) 268★ Fast, ad-free 60fps home screen for LG webOS TVs: frosted glass app shelf, live…

</details>

<details><summary><b>purge</b>: 10 repos, 6.1k stars</summary>

- [kingcharleslzy-ai/dsh-purge](https://github.com/kingcharleslzy-ai/dsh-purge) 3.5k★ dsh-purge Community · DeepSeek Harness 社区维护版：宿主兼容、状态诊断、提示词管理、更新与本机备份回滚。基于小杨 / Y…
- [ZiChuanLan/agent-purge](https://github.com/ZiChuanLan/agent-purge) 904★ One persona, many coding agents. Replace or inject system prompts across codex,…
- [ZiChuanLan/pi-purge](https://github.com/ZiChuanLan/pi-purge) 659★ pi extension: /purge swaps pi's built-in assistant persona for your own prompt …
- [WoYun520/dsh-purge](https://github.com/WoYun520/dsh-purge) 477★ DeepSeek Harness 破甲 (mirror of mmparko/dsh-purge) — 全量镜像：全部分支/100 个 tag/完整提交历史。…
- [evilevil/dsh-purge-021rc2](https://github.com/evilevil/dsh-purge-021rc2) 186★ dsh-purge 社区适配版：上游已停更，这里让它继续跑在 DeepSeek Harness 0.2.1-rc.2 上（基于 1.1.72）

</details>

<details><summary><b>supermimic</b>: 9 repos, 2.0k stars</summary>

- [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) 745★ vibe coded supermimic within 1h, LAFAN passed within 1.5 gpuh training
- [miao-org/awesome-supermimic](https://github.com/miao-org/awesome-supermimic) 384★ A curated collection of SuperMimic implementations, extensions, demos, and reso…
- [CuboiLeo/SuperMimic-Reproduced](https://github.com/CuboiLeo/SuperMimic-Reproduced) 332★ Reproduction of SuperMimic (arXiv:2610.28480): learned differentiable world mod…
- [Motphys/Uni-SuperMimic](https://github.com/Motphys/Uni-SuperMimic) 212★ SuperMimic-UniLab: An Independent reproduction of SuperMimic on UniLab for whol…
- [CumulusAlpha/Dex-Supermimic](https://github.com/CumulusAlpha/Dex-Supermimic) 90★ This is a reproduction of SuperMimic for dexterous hand manipulation tasks.

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
