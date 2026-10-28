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
_recent 2,111 repos  2026-10-14..2026-10-28  stars>=40 · baseline 3,291 repos  2026-08-15..2026-10-13  stars>=150 · generated 2026-10-28 13:00 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **debloat** (+smart-tv) | 12 | 12 | 7.6k | 1.4k/d | 1.4k/d | ▁▁▁▁▂▄▃▂▂▂▃▆██ | 2026-10-18 | [rddmwmddr/android-ad-cleaner](https://github.com/rddmwmddr/android-ad-cleaner) |
| 2 | **tvs** (+lg-tv) | 12 | 12 | 8.7k | 1.1k/d | 1.0k/d | ▁▁▁▁▁▁▇█▆▅▄▆▆▅ | 2026-10-14 | [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) |
| 3 | **mcd** (+nutrition, meal) | 43 | 43 | 7.2k | 1.0k/d | 763/d | ▁▁▂▂▂▂▂▂▂▄██▁▁ | 2026-10-14 | [zcbacxc/mcd-party-planner](https://github.com/zcbacxc/mcd-party-planner) |
| 4 | **utility** | 16 | 16 | 1.9k | 516/d | 186/d | ▁▁▁█▅▃▂▂▁▁▂▆▁▃ | 2026-10-17 | [PureShoutRemedy/StartAll-Back](https://github.com/PureShoutRemedy/StartAll-Back) |
| 5 | **ad-free** | 10 | 10 | 3.0k | 410/d | 220/d | ▁▁▂▁▄█▇▅▄▄▄▄▄▄ | 2026-10-14 | [Ansub/tv-detox](https://github.com/Ansub/tv-detox) |
| 6 | **supermimic** (+reproduction) | 6 | 6 | 1.6k | 351/d | 229/d | ▁▁▁▁▁▁▁▄█▅▃▅▆▄ | 2026-10-21 | [zita-ch/supermimic_vibed](https://github.com/zita-ch/supermimic_vibed) |
| 7 | **moss** | 9 | 9 | 2.7k | 245/d | 152/d | ▁▁▇▆██▅▆▇▆▅▄▅▄ | 2026-10-16 | [OpenMOSS/MOSS-Image](https://github.com/OpenMOSS/MOSS-Image) |
| 8 | **sniper** | 7 | 7 | 957 | 217/d | 113/d | ▁▁▁▁▁▁▁▁▅▇█▂█▂ | 2026-10-23 | [wcoxptzhhdbo/solana-sniper-bot](https://github.com/wcoxptzhhdbo/solana-sniper-bot) |
| 9 | **astrbot** | 6 | 5 | 717 | 178/d | 144/d | ▁▁▁▁▂▂▂▂▂▂▂▃█▇ | 2026-10-14 | [JunWan666/astrbot-for-android](https://github.com/JunWan666/astrbot-for-android) |
| 10 | **yandex** | 6 | 6 | 917 | 167/d | 201/d | ▁▁▁▁▁▁▁▁▃▂▅▄█▅ | 2026-10-21 | [Marker284/yandex-station-extended](https://github.com/Marker284/yandex-station-extended) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **activated** (+ready-to-run, pre-activated, setup, download, crack, 10 more) | 63 | 62 | 9.9k | 1.4k/d | 647/d | ▁▁▁█▇▁▁▂▁▁▁▃▂▁ | 2026-10-17 | [Shardgrureduce/Wondshare-Recoverit](https://github.com/Shardgrureduce/Wondshare-Recoverit) | near-duplicate, same-day, flat-stars |
| 2 | **php2shell** (+cve-2026-109618, cve-2026-109619, rce, cve, php, 5 more) | 30 | 27 | 9.4k | 1.4k/d | 264/d | ▁▁▁▁▁▁▁█▅▄▂▂▂▁ | 2026-10-20 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 3 | **resp** (+booster, fps-booster-no-lag, lag, optimizer, game-booster-free, 9 more) | 21 | 21 | 2.6k | 325/d | 357/d | ▁▁▁▁▃▆▂▂▂▅▁▄█▂ | 2026-10-16 | [kividbio/kividb](https://github.com/kividbio/kividb) | same-day |
| 4 | **abliterated-models** (+uncensored-ai, uncensored-ai-model, abliterated, anthropic-compatible) | 5 | 5 | 898 | 322/d | 148/d | ▁▁▁▁▁▁▁▁▆▁▆▄█▁ | 2026-10-22 | [routerhubSI/uncensored-ai-api](https://github.com/routerhubSI/uncensored-ai-api) | near-duplicate |
| 5 | **auto-scaling** (+scaling, centralized, utilizes, real-time, enables, 2 more) | 26 | 9 | 3.0k | 273/d | 971/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-17 | [bagusprts/OutlineWeld](https://github.com/bagusprts/OutlineWeld) | same-day, few-owners, flat-stars |
| 6 | **rpocket** (+game-booster, windows-optimization-tool, counter-strike) | 22 | 22 | 1.2k | 234/d | 235/d | ▁▁▁▁▁▁▁▁▁▆▁▁█▁ | 2026-10-23 | [Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package](https://github.com/Raptorvanaheim/Low-rpocket-End-Fps-Tweaks-Package) | same-day, flat-stars |
| 7 | **aion** (+aion-2, aion2, mmorpg, overlay, game-overlay, 6 more) | 13 | 13 | 754 | 189/d | 251/d | ▁▁▁▁▁▁▁▁▁▁▁█▁▁ | 2026-10-24 | [Ikramullah-2011/daeva-lens](https://github.com/Ikramullah-2011/daeva-lens) | same-day |
| 8 | **resocket** (+system-tweaks, fps-tweak, fps-booster-exe) | 14 | 14 | 743 | 149/d | 150/d | ▁▁▁▁▁▁▁▁▁▆▁▁█▁ | 2026-10-23 | [Axesand12310/ddr-resocket-multichannel-dma](https://github.com/Axesand12310/ddr-resocket-multichannel-dma) | same-day |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>debloat</b>: 12 repos, 7.6k stars</summary>

- [rddmwmddr/android-ad-cleaner](https://github.com/rddmwmddr/android-ad-cleaner) 4.1k★ 关掉国产安卓手机系统里的广告、热搜、资讯推荐和营销推送。不 root，可还原，支持 AI 智能体一键执行。
- [humblemuzzu/dumbtv](https://github.com/humblemuzzu/dumbtv) 1.7k★ Take the ads, tracking and clutter out of your Fire TV over ADB, no root. Every…
- [jss8649/quiet-tizen](https://github.com/jss8649/quiet-tizen) 417★ Native Quiet Home launcher, reversible cleanup tools, and an agent-readable gui…
- [man15h/tellyscope](https://github.com/man15h/tellyscope) 396★ Debloat your Android TV, install apps, browse and transfer files on it, all fro…
- [lasharor/cleanyourtv-WebOS](https://github.com/lasharor/cleanyourtv-WebOS) 277★ A clean home screen for rooted LG webOS TVs, with an optional debloat of LG's a…

</details>

<details><summary><b>tvs</b>: 12 repos, 8.7k stars</summary>

- [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) 7.3k★ 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for …
- [OmkarK97/webos-vibehack](https://github.com/OmkarK97/webos-vibehack) 328★ Apple TV-style home screen for LG webOS TVs, a port of tv-vibehack
- [rudra-avatar/Hearth](https://github.com/rudra-avatar/Hearth) 256★ Hearth: a fast, calm home screen for LG WebOS TVs
- [ecklf/lg-luma](https://github.com/ecklf/lg-luma) 213★ A native launcher for rooted LG webOS TVs
- [victaphu/glass-home-samsung-tv](https://github.com/victaphu/glass-home-samsung-tv) 181★ A minimal home screen for Samsung Tizen TVs: rotating nature photos, a glass do…

</details>

<details><summary><b>mcd</b>: 43 repos, 7.2k stars</summary>

- [zcbacxc/mcd-party-planner](https://github.com/zcbacxc/mcd-party-planner) 1.6k★ 麦当劳 MCP 聚会/团餐组织助手 — 基于 Model Context Protocol 的派对预订与团餐规划 CLI/Skill
- [zengshuangzi/mcd-money-saver](https://github.com/zengshuangzi/mcd-money-saver) 420★ 基于麦当劳MCP的智能省钱助手
- [abckkf321/-mcd-fair-split](https://github.com/abckkf321/-mcd-fair-split) 245★ 
- [makabaka0328/mcd-compass](https://github.com/makabaka0328/mcd-compass) 224★ 
- [jouaaaaaa/mcd-self-butler](https://github.com/jouaaaaaa/mcd-self-butler) 217★ 麦当劳自助管家 McButler — 基于麦当劳 MCP 的点单参谋：每日推荐 / 套餐健康体检 / 门店全成本比价 / 团餐智能配餐 / 麦险分信用评级 /…

</details>

<details><summary><b>utility</b>: 16 repos, 1.9k stars</summary>

- [PureShoutRemedy/StartAll-Back](https://github.com/PureShoutRemedy/StartAll-Back) 350★ Startall Back 3.1.7 complete standalone installation build for professional des…
- [southroadball/Hwid-Spoofer](https://github.com/southroadball/Hwid-Spoofer) 252★ Complete standalone setup for Hwid Spoofer Free, a professional desktop utility…
- [Manan-Santoki/OpenShelf](https://github.com/Manan-Santoki/OpenShelf) 158★ Free, open-source Mac utility: start dragging any file, tap a key, and drop it …
- [GrandeurPikeman/Roblox-MM2-Utility-2026](https://github.com/GrandeurPikeman/Roblox-MM2-Utility-2026) 144★ Lightweight desktop utility for Roblox Murder Mystery 2. Convenient helpers, qu…
- [TownFletcherEstimate/Minecraft-PvP-Helper-2026](https://github.com/TownFletcherEstimate/Minecraft-PvP-Helper-2026) 106★ Lightweight utility for Minecraft. Convenient PvP helpers, quality-of-life feat…

</details>

<details><summary><b>ad-free</b>: 10 repos, 3.0k stars</summary>

- [Ansub/tv-detox](https://github.com/Ansub/tv-detox) 1.7k★ Make an old Android TV fast again with Claude Code or Codex: a tiny ad-free hom…
- [kota-zo/myspoti](https://github.com/kota-zo/myspoti) 555★ Native Android client for Spotify, built with Jetpack Compose
- [aradhyas8/Plume_Launcher](https://github.com/aradhyas8/Plume_Launcher) 256★ 🪶 A lightweight, ad-free launcher for Android TV and Google TV. 0.4 MB, no tra…
- [addozhang/leancast](https://github.com/addozhang/leancast) 105★ Ad-free DLNA / UPnP cast receiver for Android TV · 极简无广告投屏接收器
- [Jarvis322/matinee](https://github.com/Jarvis322/matinee) 82★ A calm, ad-free home screen for Google TV and Android TV

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
