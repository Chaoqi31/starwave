#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { parseArgs } from "node:util";
import { gunzipSync, gzipSync } from "node:zlib";
import { fetchStarHistory, fetchWindow, loadCached, resolveToken, saveCached, shiftDays } from "./github.js";
import { dailyStars } from "./history.js";
import type { StarBucket } from "./history.js";
import { renderMarkdown, renderTable, renderWave } from "./render.js";
import type { Capture, Repo, Snapshot, Window } from "./types.js";
import { detectWaves } from "./waves.js";

const USAGE = `starwave: waves of new GitHub repos that share a bursting term

usage: starwave [options]

  --days <n>                recent window in days (default 14)
  --min-stars <n>           minimum stars for recent repos (default 40)
  --baseline-days <n>       baseline window in days before the recent window (default 60)
  --baseline-min-stars <n>  minimum stars for baseline repos (default 150)
  --top <n>                 waves to print per section (default 15)
  --json                    print the Snapshot as JSON
  --md                      print a Markdown table
  --show <wave-id>          list every repo in one wave
  --from <path>             read a capture or snapshot (.json or .json.gz) instead of GitHub
  --save <path>             write the raw capture (.json or .json.gz)
  --no-cache                ignore the 6 h cache in ~/.cache/starwave
  --no-history              skip star history (one request per repo in a wave: 3d/d, 14-day chart)
  --no-color                plain output
  -h, --help                show this help
  -v, --version             show the version

needs a GitHub token: GITHUB_TOKEN or an authenticated gh CLI.
`;

const RECENT_SLICE_DAYS = 3;
const BASELINE_SLICE_DAYS = 7;
const HISTORY_DAYS = 14;
const HISTORY_CONCURRENCY = 6;

function parseFlags() {
  return parseArgs({
    options: {
      days: { type: "string", default: "14" },
      "min-stars": { type: "string", default: "40" },
      "baseline-days": { type: "string", default: "60" },
      "baseline-min-stars": { type: "string", default: "150" },
      top: { type: "string", default: "15" },
      json: { type: "boolean", default: false },
      md: { type: "boolean", default: false },
      show: { type: "string" },
      from: { type: "string" },
      save: { type: "string" },
      "no-cache": { type: "boolean", default: false },
      "no-history": { type: "boolean", default: false },
      "no-color": { type: "boolean", default: false },
      help: { type: "boolean", short: "h", default: false },
      version: { type: "boolean", short: "v", default: false },
    },
  }).values;
}

type Flags = ReturnType<typeof parseFlags>;

async function main(): Promise<void> {
  const flags = parseFlags();
  if (flags.help) return void process.stdout.write(USAGE);
  if (flags.version) {
    const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as { version: string };
    return void process.stdout.write(`${pkg.version}\n`);
  }

  const top = positiveInt(flags.top, "--top");
  const snapshot = flags.from ? loadSnapshot(flags.from) : snapshotOf(await captureFromGithub(flags));
  if (!flags["no-history"]) await enrichWithStarHistory(snapshot, flags["no-cache"]);

  if (flags.show !== undefined) {
    const id = flags.show;
    const wave = snapshot.waves.find((w) => w.id === id || w.aliases.includes(id));
    if (!wave) throw new Error(`no wave "${id}"; ids: ${snapshot.waves.map((w) => w.id).join(", ")}`);
    process.stdout.write(renderWave(wave, snapshot.generatedAt.slice(0, 10)));
  } else if (flags.json) {
    process.stdout.write(`${JSON.stringify(snapshot)}\n`);
  } else if (flags.md) {
    process.stdout.write(renderMarkdown(snapshot, { top }));
  } else {
    const color = !flags["no-color"] && Boolean(process.stdout.isTTY) && !process.env.NO_COLOR;
    process.stdout.write(renderTable(snapshot, { top, color }));
  }
}

function loadSnapshot(path: string): Snapshot {
  const raw = readFileSync(path);
  const parsed = JSON.parse((path.endsWith(".gz") ? gunzipSync(raw) : raw).toString("utf8")) as Snapshot | Capture;
  if ("waves" in parsed) return parsed;
  if (!Array.isArray(parsed.recent) || !Array.isArray(parsed.baseline)) throw new Error(`${path} is neither a capture nor a snapshot`);
  return snapshotOf(parsed);
}

function snapshotOf(capture: Capture): Snapshot {
  const generatedAt = new Date(capture.capturedAt).toISOString();
  return {
    generatedAt,
    recentWindow: capture.recentWindow,
    baselineWindow: capture.baselineWindow,
    recentCount: capture.recent.length,
    baselineCount: capture.baseline.length,
    waves: detectWaves(capture.recent, capture.baseline, { today: generatedAt.slice(0, 10) }),
  };
}

async function captureFromGithub(flags: Flags): Promise<Capture> {
  const token = resolveToken();
  const capturedAt = new Date().toISOString();
  const today = capturedAt.slice(0, 10);
  const recentFrom = shiftDays(today, -positiveInt(flags.days, "--days"));
  const recentWindow: Window = { from: recentFrom, to: today, minStars: positiveInt(flags["min-stars"], "--min-stars") };
  const baselineWindow: Window = {
    from: shiftDays(recentFrom, -positiveInt(flags["baseline-days"], "--baseline-days")),
    to: shiftDays(recentFrom, -1),
    minStars: positiveInt(flags["baseline-min-stars"], "--baseline-min-stars"),
  };
  const useCache = !flags["no-cache"];
  const capture: Capture = {
    capturedAt,
    recentWindow,
    baselineWindow,
    recent: await fetchCached("recent  ", recentWindow, RECENT_SLICE_DAYS, token, useCache),
    baseline: await fetchCached("baseline", baselineWindow, BASELINE_SLICE_DAYS, token, useCache),
  };
  if (flags.save) {
    const json = JSON.stringify(capture);
    writeFileSync(flags.save, flags.save.endsWith(".gz") ? gzipSync(json) : json);
    progress(`saved ${flags.save}`);
  }
  return capture;
}

async function fetchCached(label: string, window: Window, sliceDays: number, token: string, useCache: boolean): Promise<Repo[]> {
  const key = `${window.from}..${window.to} stars>=${window.minStars}`;
  const cached = useCache ? loadCached<Repo[]>(key) : undefined;
  if (cached) {
    progress(`${label}  ${cached.length.toLocaleString("en-US")} repos (cached)`);
    return cached;
  }
  const repos = await fetchWindow(window.from, window.to, window.minStars, sliceDays, token, (message) =>
    progress(`${label}  ${message}`),
  );
  saveCached(key, repos);
  return repos;
}

async function enrichWithStarHistory(snapshot: Snapshot, noCache: boolean): Promise<void> {
  let token: string;
  try {
    token = resolveToken();
  } catch {
    progress("no GitHub token, skipping star history");
    return;
  }
  const today = snapshot.generatedAt.slice(0, 10);
  const targets = snapshot.waves.filter((w) => w.daily === undefined);
  const names = [...new Set(targets.flatMap((w) => w.repos.map((r) => r.fullName)))];
  const histories = new Map<string, StarBucket[]>();
  let done = 0;
  await forEachLimit(names, HISTORY_CONCURRENCY, async (name) => {
    try {
      histories.set(name, await fetchStarHistory(name, token, !noCache));
    } catch (error) {
      progress(`star history: ${error instanceof Error ? error.message : String(error)}`);
    }
    done++;
    if (done % 50 === 0 || done === names.length) progress(`star history  ${done}/${names.length} repos`);
  });
  for (const wave of targets) {
    const found = wave.repos.map((r) => histories.get(r.fullName));
    if (found.some((h) => h === undefined)) continue;
    wave.daily = dailyStars(found as StarBucket[][], today, HISTORY_DAYS);
    wave.velocity3d = wave.daily.slice(-3).reduce((sum, n) => sum + n, 0) / 3;
  }
}

async function forEachLimit<T>(items: T[], limit: number, fn: (item: T) => Promise<void>): Promise<void> {
  let next = 0;
  const worker = async () => {
    while (next < items.length) await fn(items[next++] as T);
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
}

function positiveInt(value: string, flag: string): number {
  const n = Number(value);
  if (!Number.isInteger(n) || n <= 0) throw new Error(`${flag} expects a positive integer, got "${value}"`);
  return n;
}

const progress = (message: string) => process.stderr.write(`${message}\n`);

main().catch((error: unknown) => {
  process.stderr.write(`starwave: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
