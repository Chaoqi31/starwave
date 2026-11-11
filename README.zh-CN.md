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
_recent 2,706 repos  2026-10-28..2026-11-11  stars>=40 · baseline 3,777 repos  2026-08-29..2026-10-27  stars>=150 · generated 2026-11-11 14:26 UTC_

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor |
|--:|---|--:|--:|--:|--:|--:|---|---|---|
| 1 | **tweaks** | 11 | 11 | 8.1k | 3.3k/d | 2.1k/d | ▁▁▁▁▁▁▁▁▁▁▂▂█▆ | 2026-10-28 | [huamidev/GestaltX](https://github.com/huamidev/GestaltX) |
| 2 | **ocarina** | 6 | 6 | 8.8k | 1.5k/d | 1.8k/d | ▁▁▁▁▁▁▁▁▁▄▇▆█▆ | 2026-11-05 | [NotRexed/Hookshot](https://github.com/NotRexed/Hookshot) |
| 3 | **blockchain** (+ethereum) | 10 | 10 | 2.1k | 502/d | 208/d | ▁▁▁▃▁▃▃▄▅▃▁▂▁█ | 2026-10-30 | [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) |
| 4 | **trainer** (+blade) | 7 | 7 | 1.7k | 385/d | 284/d | ▁▁▁▁▁▁▁▁▁▁█▄▅▁ | 2026-11-05 | [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) |
| 5 | **eglantine** (+lichii) | 5 | 5 | 1.2k | 177/d | 69/d | ▁▁▁▁▁▂▂▂▅█▅▃▂▂ | 2026-11-01 | [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) |
| 6 | **flight** (+ads-b) | 11 | 11 | 1.4k | 169/d | 105/d | ▁▁▁▁▂▃██▄▂▃▄▂▄ | 2026-10-29 | [1337isnot1337/DOPPLERGEIST](https://github.com/1337isnot1337/DOPPLERGEIST) |
| 7 | **cs2** (+aegis) | 6 | 6 | 855 | 144/d | 88/d | ▁▁▂█▁▂▁▁▁▁▁▄▃▁ | 2026-10-30 | [SoldierMultiply/footstep-equalizer](https://github.com/SoldierMultiply/footstep-equalizer) |
| 8 | **portrait** (+pose-reference) | 8 | 8 | 1.1k | 132/d | 95/d | ▁▃▅▄▆█▅▃▃▅▅▇▄▅ | 2026-10-29 | [yt1988/who-are-you](https://github.com/yt1988/who-are-you) |
| 9 | **nintendo-switch-2** | 5 | 5 | 1.2k | 130/d | 154/d | ▁▁▃▂▂▄▆▄▃▄▅█▆▅ | 2026-10-30 | [Lucas-blip-png/dkb-pc-recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp) |
| 10 | **gpl-3.0** | 7 | 7 | 819 | 119/d | 57/d | ▁▁▁▄█▃▃▃▂▂▂▃▂▄ | 2026-10-30 | [0xCodez/DuoDesk](https://github.com/0xCodez/DuoDesk) |

**Looks coordinated**

| # | wave | repos | owners | stars | vel/d | 3d/d | last 14 days | first seen | anchor | flags |
|--:|---|--:|--:|--:|--:|--:|---|---|---|---|
| 1 | **windows-app** (+utility, software-engineering, configured, pre-configured, setup, 16 more) | 118 | 118 | 93.4k | 19.8k/d | 15.6k/d | ▁▁▁▁▁▁▁▁▁▁█▄▆▇ | 2026-11-06 | [abdulmannanmalik13-wq/adobe-substance-3d-studio](https://github.com/abdulmannanmalik13-wq/adobe-substance-3d-studio) | near-duplicate, same-day, flat-stars |
| 2 | **activator** (+kms, activation, windows-10, office365, scala, 23 more) | 138 | 138 | 19.7k | 3.9k/d | 41/d | ▁▁▁▁▁▁▁▁▁▁█▁▁▁ | 2026-10-29 | [Hussaincodingmaster/bandicam-screen-recorder-desktop](https://github.com/Hussaincodingmaster/bandicam-screen-recorder-desktop) | near-duplicate, same-day, flat-stars |
| 3 | **rpocket** (+cheat, meteor, one-knob, items, playerbots, 40 more) | 217 | 216 | 11.4k | 1.9k/d | 2.9k/d | ▁▁▁▁▁▁▁▁▃▁▁▁█▁ | 2026-10-31 | [sneys123123/rpocket-brave-desktop-2026](https://github.com/sneys123123/rpocket-brave-desktop-2026) | flat-stars |
| 4 | **resp** (+ban, autoclicker, troubleshooting, clicker, macro, 9 more) | 123 | 121 | 6.3k | 1.1k/d | 1.6k/d | ▁▁▁▁▁▁▁▁▃▁▁▁█▁ | 2026-10-31 | [OlocrestDwarf/AutoMouseClicker-resp](https://github.com/OlocrestDwarf/AutoMouseClicker-resp) | flat-stars |
| 5 | **resocket** (+rates, optimizations, improve, warzone, regularly, 1 more) | 75 | 75 | 4.1k | 681/d | 1.0k/d | ▁▁▁▁▁▁▁▁▃▁▁▁█▁ | 2026-10-31 | [AstraLunarvenom33479/BloodStrike-region-limit-resocket](https://github.com/AstraLunarvenom33479/BloodStrike-region-limit-resocket) | same-day, flat-stars |
| 6 | **coregold** (+vcc, usdt, visa, mastercard, stripe, 2 more) | 79 | 71 | 6.0k | 600/d | 648/d | ▂▃▃▂▄▁▄▇▆▁▁▄▄█ | 2026-10-28 | [eyuputku57-ops/-CoreGold---Global-Virtual-Card-Platform-for-Media-Buying-AI-SaaS-Cross-Border-Payments](https://github.com/eyuputku57-ops/-CoreGold---Global-Virtual-Card-Platform-for-Media-Buying-AI-SaaS-Cross-Border-Payments) | flat-stars |
| 7 | **respocket** (+aax, cheats, aio, soft, yet, 3 more) | 56 | 56 | 2.8k | 558/d | 748/d | ▁▁▁▁▁▁▁▁▃▁▁▁█▁ | 2026-10-31 | [CometForDagger/all-the-mods-respocket-modpack-minecraft](https://github.com/CometForDagger/all-the-mods-respocket-modpack-minecraft) | flat-stars |
| 8 | **gemeni** (+general-purpose, manus, purpose, typescript-sdk, solidjs, 14 more) | 27 | 25 | 1.4k | 308/d | 1/d | ▁▁▁▁▁▁▁▁▁▇█▁▁▁ | 2026-11-06 | [quyetcao/ai-manus](https://github.com/quyetcao/ai-manus) | near-duplicate, flat-stars |
| 9 | **ai-image-generation** (+gpt-image, apimart) | 14 | 2 | 1.8k | 253/d | 6/d | ▁▂▁▁▁▂▁▁█▂▁▁▁▁ | 2026-10-29 | [wquguru/shisei](https://github.com/wquguru/shisei) | same-day, few-owners |
| 10 | **currency** (+economy, exile, path-of-exile-2-trade, pathofexile2, poe, 25 more) | 8 | 8 | 385 | 71/d | 107/d | ▁▁▁▁▁▁▁▁▂▁▁▁█▁ | 2026-10-31 | [Hydravampiresilver/RESP-PathOfExile2-Trade-Helper-Price-Checker](https://github.com/Hydravampiresilver/RESP-PathOfExile2-Trade-Helper-Price-Checker) | near-duplicate |

_vel/d: each repo's stars divided by its age in days, summed. 3d/d: stars per day over the last 3 full days._

<details><summary><b>tweaks</b>: 11 repos, 8.1k stars</summary>

- [huamidev/GestaltX](https://github.com/huamidev/GestaltX) 5.9k★ An MobileGestalt editor for iOS 27.x, featuring region-code tweaks, device pres…
- [shivsupratik/windows-optimizer](https://github.com/shivsupratik/windows-optimizer) 1.0k★ Windows Optimizer: Advanced System Tweaks and Performance Enhancements
- [JaceThings/DiaTweaks](https://github.com/JaceThings/DiaTweaks) 608★ Unofficial tweaks for the Dia browser, kept in place across updates
- [PoomSmart/ios-logos-tweak](https://github.com/PoomSmart/ios-logos-tweak) 105★ Agent skill for best practices for iOS jailbreak tweaks
- [PranavDupati/ninboy-hat-for-macos](https://github.com/PranavDupati/ninboy-hat-for-macos) 78★ Native compilation enhancements, crash fixes, keyboard/mouse controls, and perf…

</details>

<details><summary><b>ocarina</b>: 6 repos, 8.8k stars</summary>

- [NotRexed/Hookshot](https://github.com/NotRexed/Hookshot) 7.2k★ A Native Recompilation Of The Legend Of Zelda: Ocarina Of Time Nintendo Switch …
- [sostenesfreitas/ocarina-recomp](https://github.com/sostenesfreitas/ocarina-recomp) 1.1k★ Ocarina of Time running natively on Windows, no emulator. Built on your PC from…
- [jaigner-hub/ocarina-of-time-recomp](https://github.com/jaigner-hub/ocarina-of-time-recomp) 292★ Static recompilation of The Legend of Zelda: Ocarina of Time into a native PC p…
- [adi0900/GreenKid-MV](https://github.com/adi0900/GreenKid-MV) 103★ Game-free Mac builder for native Ocarina of Time (Switch 2) ports on Apple Sili…
- [daurosk/oot-remake-multiplayer](https://github.com/daurosk/oot-remake-multiplayer) 48★ Working multiplayer for the Ocarina of Time remake: first on an emulator, then …

</details>

<details><summary><b>blockchain</b>: 10 repos, 2.1k stars</summary>

- [Danuse84/Exodus-Fake-Balance](https://github.com/Danuse84/Exodus-Fake-Balance) 808★ Wallet UI simulation tool for BTC, ETH, SOL, XRP, and 200+ assets. Customize di…
- [PatchBuilderAmplify/stolen-crypto-tracer](https://github.com/PatchBuilderAmplify/stolen-crypto-tracer) 392★ Paste a wallet or a transaction hash and follow stolen crypto to the exchange t…
- [ValidatorStack/solana-vigil](https://github.com/ValidatorStack/solana-vigil) 241★ Solana validator health in 60 seconds: score, leader duties, rewards, disk fore…
- [Signcluengine/onchain-money-trail-analyzer](https://github.com/Signcluengine/onchain-money-trail-analyzer) 167★ Follow stolen crypto hop by hop across Bitcoin, Ethereum, TRON, BNB Chain and S…
- [zeemscript/block-roll](https://github.com/zeemscript/block-roll) 164★ Non-custodial, encrypted file storage & sharing platform with Stellar payments …

</details>

<details><summary><b>trainer</b>: 7 repos, 1.7k stars</summary>

- [Mymedspharmacy/phantom-blade-zero-trainer](https://github.com/Mymedspharmacy/phantom-blade-zero-trainer) 479★ Phantom Blade Zero Trainer 2026: God Mode, One-Hit Kill, start All Weapons
- [richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit](https://github.com/richmondasensomensah-eng/phantom-blade-zero-runtime-toolkit) 479★ PhantomBladeZero-Cheat: 54 toggleable runtime options and three presets for Pha…
- [wanjalaibra05-lgtm/phantom-blade-zero-assist](https://github.com/wanjalaibra05-lgtm/phantom-blade-zero-assist) 479★ Phantom Blade Zero: Symbol Cues, Wider Parry Windows, Full Arsenal
- [nico-bohlinger/xmimic](https://github.com/nico-bohlinger/xmimic) 123★ Whole-body motion tracking for the Unitree G1 in under a minute. BlinkMimic's w…
- [prabeakarve/microgpt](https://github.com/prabeakarve/microgpt) 51★ A from-scratch, dependency-free GPT implementation in pure NumPy: byte-level to…

</details>

<details><summary><b>eglantine</b>: 5 repos, 1.2k stars</summary>

- [riyadhHDA/wichforks](https://github.com/riyadhHDA/wichforks) 569★ Use-case guide to Nintendo Switch 2 emulator forks: builds, games, GPUs, Androi…
- [sylvieistaken/selevet-eglantine](https://github.com/sylvieistaken/selevet-eglantine) 259★ Selevet Eglantine: an unofficial Eglantine (Switch 2 emulator) build tuned for …
- [viejunerd/Eglantine-PS5-](https://github.com/viejunerd/Eglantine-PS5-) 169★ 
- [sikoGD/playDB-CNT](https://github.com/sikoGD/playDB-CNT) 121★ Play The Duskbloods Network Test on Eglantine/Lichii: a launcher with local loo…
- [callme-sy/Lichii-Superbuild](https://github.com/callme-sy/Lichii-Superbuild) 76★ Unofficial Lichii superbuild: PGO builds with curated performance and correctne…

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
