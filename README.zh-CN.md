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
_recent 1,835 repos  2026-10-10..2026-10-24  stars>=40 · baseline 3,217 repos  2026-08-11..2026-10-09  stars>=150 · generated 2026-10-24 11:05 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **tvs** | 11 | 11 | 5.1k | 1.3k/d | 1.1k/d | ▁▁▁▁▁▁▁▁▁▁▇█▆▅ | 2026-10-10 | [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) |
| 2 | **rea** (+ghidra) | 16 | 16 | 8.0k | 1.1k/d | 678/d | ▁▁▂▂▄▇▄▅▄▅█▄▃▆ | 2026-10-10 | [aicodeking/leanrea](https://github.com/aicodeking/leanrea) |
| 3 | **mcd** (+mcdonalds, nutrition, food) | 48 | 48 | 5.8k | 784/d | 684/d | ▂▃▃▃▂▃▂▃▃▃▅▄▄█ | 2026-10-10 | [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) |
| 4 | **fps** (+fighter, booster, rates, lag, fps-booster-no-lag, 2 more) | 21 | 19 | 6.7k | 758/d | 252/d | ▁▁▆▄█▆▃▃▄▅▂▂▃▂ | 2026-10-10 | [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) |
| 5 | **professional** | 12 | 12 | 3.2k | 626/d | 442/d | ▁▁▁▁▁▁▁█▅▃▁▃▆▆ | 2026-10-12 | [Zagitta/gpu-unlock](https://github.com/Zagitta/gpu-unlock) |
| 6 | **purge** | 9 | 9 | 3.6k | 603/d | 853/d | ▁▁▁▁▁▁▁▁▁▂▆█▅▃ | 2026-10-13 | [mmparko/dsh-purge](https://github.com/mmparko/dsh-purge) |
| 7 | **zip** | 5 | 5 | 1.7k | 486/d | 416/d | ▁▁▁▁▁▁▁▁▁▁▁▁▁█ | 2026-10-10 | [xevrion/hatchzip](https://github.com/xevrion/hatchzip) |
| 8 | **aimbot** (+external-esp) | 8 | 8 | 1.1k | 451/d | 285/d | ▁▁▁▁▁▁▁▁▃▃▁▁█▅ | 2026-10-10 | [david-silvalab1993i0/Roblox-Aimbot-Smooth-Tracking-Auto-Aim-Script-2026](https://github.com/david-silvalab1993i0/Roblox-Aimbot-Smooth-Tracking-Auto-Aim-Script-2026) |
| 9 | **ps4** | 18 | 14 | 4.2k | 416/d | 229/d | ▁▁▃▅█▆▅▆▇▇▆▄▄▄ | 2026-10-11 | [AjncSystem/ShadowOfTheColossus-PC](https://github.com/AjncSystem/ShadowOfTheColossus-PC) |
| 10 | **ad-free** | 8 | 8 | 2.3k | 382/d | 281/d | ▁▁▁▂▁▁▂▁▄██▅▅▄ | 2026-10-12 | [Ansub/tv-detox](https://github.com/Ansub/tv-detox) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **php2shell** (+cve-2026-109618, cve-2026-109619, rce, cve, session.upload, 2 more) | 27 | 26 | 8.4k | 2.8k/d | 2.6k/d | ▁▁▁▁▁▁▁▁▁▁▁█▅▄ | 2026-10-15 | [ikow/php2shell-poc](https://github.com/ikow/php2shell-poc) | same-day |
| 2 | **activated** (+pre-activated, ready-to-run, download, setup, crack, 11 more) | 62 | 62 | 7.8k | 1.4k/d | 219/d | ▁▁▁▁▁▁▁█▇▁▁▂▁▁ | 2026-10-17 | [Nestsarecall/Ozone-12-Advanced](https://github.com/Nestsarecall/Ozone-12-Advanced) | near-duplicate, same-day, flat-stars |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>tvs</b>: 11 repos, 5.1k stars</summary>

- [pengchujin/aerial-tv](https://github.com/pengchujin/aerial-tv) 4.1k★ 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for …
- [OmkarK97/webos-vibehack](https://github.com/OmkarK97/webos-vibehack) 270★ Apple TV-style home screen for LG webOS TVs, a port of tv-vibehack
- [gabrielgreco1/TVmenubar-MacOS](https://github.com/gabrielgreco1/TVmenubar-MacOS) 130★ Native macOS menu bar remotes for LG webOS and Roku OS TVs
- [rudra-avatar/Hearth](https://github.com/rudra-avatar/Hearth) 101★ Hearth: a fast, calm home screen for LG WebOS TVs
- [berteotti/custom-tv](https://github.com/berteotti/custom-tv) 83★ A calm custom Home screen for Samsung Tizen TVs: weather, weather-matched lands…

</details>

<details><summary><b>rea</b>: 16 repos, 8.0k stars</summary>

- [aicodeking/leanrea](https://github.com/aicodeking/leanrea) 1.9k★ One 8 KB skill that replaces REA (Reverse Engineer Anything): plain CLI tools, …
- [JoasASantos/REA-Prompts](https://github.com/JoasASantos/REA-Prompts) 1.9k★ REAP - Prompts for you to use REA (Reverse Engineer Anything), get the most out…
- [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) 1.4k★ 基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分…
- [Zfinix/eleven](https://github.com/Zfinix/eleven) 850★ Agent-first reverse engineering for macOS, Windows and Linux: any ACP agent rea…
- [bbylw/rea-cn](https://github.com/bbylw/rea-cn) 565★ REA：逆向一切 通过一个 MCP 服务，逆向分析二进制文件、应用程序和运行时行为。 看到喜欢的功能，弄清它的工作原理，深入到二进制层面。

</details>

<details><summary><b>mcd</b>: 48 repos, 5.8k stars</summary>

- [Sam-Hui-dot/mcd-budget-meal](https://github.com/Sam-Hui-dot/mcd-budget-meal) 1.2k★ 麦麦预算餐：基于麦当劳 MCP 的真实核价、预算比较与餐品替换 Skill
- [Ayzzz123/mcd-coupon-strategist](https://github.com/Ayzzz123/mcd-coupon-strategist) 998★ 麦麦省钱助手 —— 基于麦当劳 MCP 的点餐成本优化 Skill。算出当前门店最省钱的点餐方案，并主动提示凑单陷阱。
- [makabaka0328/mcd-compass](https://github.com/makabaka0328/mcd-compass) 172★ 
- [LewisLeeYu-AIR/mcd-mood-palette](https://github.com/LewisLeeYu-AIR/mcd-mood-palette) 151★ 麦麦心情调色盘 — 基于麦当劳 MCP 的情绪×营养推荐与下单 Skill（程序员创意开发大赛参赛项目）
- [WilderNoTrack/mcd-calorie-butler](https://github.com/WilderNoTrack/mcd-calorie-butler) 150★ 麦麦热量管家：减脂不是少吃你爱的，是先换掉不值这口热量的。基于麦当劳 MCP 的味热比点餐 Skill。

</details>

<details><summary><b>fps</b>: 21 repos, 6.7k stars</summary>

- [jhaizhou-ops/d2r-mobile](https://github.com/jhaizhou-ops/d2r-mobile) 4.5k★ Open-source compatibility layer for Diablo II: Resurrected with the Reign of th…
- [LTSharpe/OblivionRemasteredPerformanceFix](https://github.com/LTSharpe/OblivionRemasteredPerformanceFix) 406★ Engine-level performance fix for Oblivion Remastered (UE5): higher fps in towns…
- [Dyotson/ForzaHorizon1-ReImagined](https://github.com/Dyotson/ForzaHorizon1-ReImagined) 287★ Forza Horizon (Xbox 360) natively on PC, rebuilt around the modern Horizon expe…
- [divergesoulpersist/IOBIT-Driver-Booster](https://github.com/divergesoulpersist/IOBIT-Driver-Booster) 147★ Iobit Driver Booster 2025, a full working installer with all updates and driver…
- [SmokeProduction/DLSS5-Unlocker](https://github.com/SmokeProduction/DLSS5-Unlocker) 127★ Unlock and manage DLSS 5 on any NVIDIA or AMD graphics card. The ultimate one-c…

</details>

<details><summary><b>professional</b>: 12 repos, 3.2k stars</summary>

- [Zagitta/gpu-unlock](https://github.com/Zagitta/gpu-unlock) 1.1k★ Unlock FP/BF16 instruction issue rate on Nvidia 3000's cards to their professio…
- [EL4CTEO/blender-skills](https://github.com/EL4CTEO/blender-skills) 460★ Professional Blender 5.2 workflows as Agent Skills for Claude Code, Codex, Gemi…
- [rossark0/rossark-motion-skill](https://github.com/rossark0/rossark-motion-skill) 412★ Turn any SVG into a professional 60 fps animation. A Claude Code skill that bri…
- [OverlordPrize/Power-Director](https://github.com/OverlordPrize/Power-Director) 252★ Power Director 14.5, a robust professional-grade video editing software, is now…
- [PureShoutRemedy/StartAll-Back](https://github.com/PureShoutRemedy/StartAll-Back) 252★ Startall Back 3.1.7 complete standalone installation build for professional des…

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
