import { sparkline } from "./history.js";
import type { Snapshot, Wave, Window } from "./types.js";
import { ageDays } from "./waves.js";

const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";
const VEL_NOTE = "vel/d: each repo's stars divided by its age in days, summed";
const VEL3D_NOTE = "3d/d: stars per day over the last 3 full days";

export function formatCount(n: number): string {
  if (n < 1000) return String(n);
  if (n < 1e6) return `${(n / 1e3).toFixed(1)}k`;
  return `${(n / 1e6).toFixed(1)}m`;
}

export function renderTable(snapshot: Snapshot, { top, color }: { top: number; color: boolean }): string {
  const bold = (s: string) => (color ? `${BOLD}${s}${RESET}` : s);
  const dim = (s: string) => (color ? `${DIM}${s}${RESET}` : s);
  const organic = snapshot.waves.filter((w) => w.flags.length === 0);
  const flagged = snapshot.waves.filter((w) => w.flags.length > 0);
  const withHistory = snapshot.waves.some((w) => w.velocity3d !== undefined);
  const header = bold(tableLine(HEADER_CELLS(withHistory), COLUMN_WIDTHS(withHistory), COLUMN_LEFT(withHistory)));
  const lines = [
    `${bold("starwave")} ${dim(utcMinute(snapshot.generatedAt))}`,
    `recent    ${windowLine(snapshot.recentCount, snapshot.recentWindow)}`,
    `baseline  ${windowLine(snapshot.baselineCount, snapshot.baselineWindow)}`,
    "",
    bold(`Waves (${Math.min(top, organic.length)} of ${organic.length})`),
    header,
    ...organic.slice(0, top).map((wave, i) => tableRow(i + 1, wave, withHistory)),
  ];
  if (flagged.length) {
    lines.push("", bold(`Looks coordinated (${Math.min(top, flagged.length)} of ${flagged.length})`), header);
    for (const [i, wave] of flagged.slice(0, top).entries()) {
      lines.push(tableRow(i + 1, wave, withHistory), dim(`    ${wave.flags.join(" · ")}`));
    }
  }
  if (withHistory) lines.push("", dim(`${VEL_NOTE} · ${VEL3D_NOTE}`));
  return `${lines.join("\n")}\n`;
}

export function renderMarkdown(snapshot: Snapshot, { top }: { top: number }): string {
  const organic = snapshot.waves.filter((w) => w.flags.length === 0).slice(0, top);
  const flagged = snapshot.waves.filter((w) => w.flags.length > 0).slice(0, top);
  const hasHistory = snapshot.waves.some((w) => w.daily !== undefined);
  const head = ["#", "wave", "repos", "owners", "stars", "vel/d", ...(hasHistory ? ["3d/d", "last 14 days"] : []), "first seen", "anchor"];
  const align = ["--:", "---", "--:", "--:", "--:", "--:", ...(hasHistory ? ["--:", "---"] : []), "---", "---"];
  const table = (waves: Wave[], withFlags: boolean) => [
    `| ${[...head, ...(withFlags ? ["flags"] : [])].join(" | ")} |`,
    `|${[...align, ...(withFlags ? ["---"] : [])].join("|")}|`,
    ...waves.map((wave, i) => {
      const cells = [
        i + 1,
        `**${wave.id}**${aliasSuffix(wave, 5)}`,
        wave.repoCount,
        wave.ownerCount,
        formatCount(wave.stars),
        perDay(wave.velocity),
        ...(hasHistory ? [wave.velocity3d === undefined ? "-" : perDay(wave.velocity3d), wave.daily ? sparkline(wave.daily) : "-"] : []),
        wave.firstSeen,
        repoLink(wave.anchor.fullName),
        ...(withFlags ? [wave.flags.join(", ")] : []),
      ];
      return `| ${cells.join(" | ")} |`;
    }),
  ];
  const lines = [
    `_recent ${windowLine(snapshot.recentCount, snapshot.recentWindow)} · ` +
      `baseline ${windowLine(snapshot.baselineCount, snapshot.baselineWindow)} · generated ${utcMinute(snapshot.generatedAt)}_`,
    "",
    ...table(organic, false),
  ];
  if (flagged.length) lines.push("", "**Looks coordinated**", "", ...table(flagged, true));
  lines.push("", hasHistory ? `_${VEL_NOTE}. ${VEL3D_NOTE}._` : `_${VEL_NOTE}._`);
  for (const wave of [...organic, ...flagged].slice(0, 5)) {
    lines.push("", `<details><summary><b>${wave.id}</b>: ${wave.repoCount} repos, ${formatCount(wave.stars)} stars</summary>`, "");
    for (const repo of wave.repos.slice(0, 5)) {
      const description = truncate(repo.description, 80).replace(/\|/g, "\\|");
      lines.push(`- ${repoLink(repo.fullName)} ${formatCount(repo.stars)}★ ${description}`);
    }
    lines.push("", "</details>");
  }
  return `${lines.join("\n")}\n`;
}

export function renderWave(wave: Wave, today: string): string {
  const nameWidth = Math.min(40, Math.max(...wave.repos.map((r) => r.fullName.length)));
  const lines = wave.repos.map((repo) =>
    [
      formatCount(repo.stars).padStart(6),
      `${ageDays(repo, today)}d`.padStart(4),
      repo.fullName.padEnd(nameWidth),
      truncate(repo.description, 80),
    ].join("  "),
  );
  const header =
    wave.daily === undefined || wave.velocity3d === undefined
      ? []
      : [`${wave.id}  ${sparkline(wave.daily)}  ${perDay(wave.velocity3d)} over the last 3 full days (chart: 14 days)`, ""];
  return `${[...header, ...lines].join("\n")}\n`;
}

function tableRow(rank: number, wave: Wave, withHistory: boolean): string {
  const cells = [
    String(rank),
    waveLabel(wave, 28),
    String(wave.repoCount),
    String(wave.ownerCount),
    formatCount(wave.stars),
    perDay(wave.velocity),
    ...(withHistory ? [wave.velocity3d === undefined ? "-" : perDay(wave.velocity3d)] : []),
    wave.firstSeen,
    truncate(wave.anchor.fullName, 18),
  ];
  return tableLine(cells, COLUMN_WIDTHS(withHistory), COLUMN_LEFT(withHistory));
}

const perDay = (n: number) => `${formatCount(Math.round(n))}/d`;
const utcMinute = (iso: string) => `${iso.slice(0, 10)} ${iso.slice(11, 16)} UTC`;

const HEADER_CELLS = (withHistory: boolean): string[] => [
  "#",
  "wave",
  "repos",
  "owners",
  "stars",
  "vel/d",
  ...(withHistory ? ["3d/d"] : []),
  "first",
  "anchor",
];

const COLUMN_WIDTHS = (withHistory: boolean): number[] =>
  withHistory ? [2, 28, 5, 6, 6, 7, 7, 10, 18] : [2, 28, 5, 6, 6, 7, 10, 18];

const COLUMN_LEFT = (withHistory: boolean): boolean[] =>
  withHistory
    ? [false, true, false, false, false, false, false, true, true]
    : [false, true, false, false, false, false, true, true];

function tableLine(cells: string[], widths: number[], left: boolean[]): string {
  return cells
    .map((cell, i) => {
      const width = widths[i] as number;
      return left[i] ? cell.padEnd(width) : cell.padStart(width);
    })
    .join("  ")
    .trimEnd();
}

function waveLabel(wave: Wave, width: number): string {
  for (let shown = wave.aliases.length; shown >= 0; shown--) {
    const label = `${wave.id}${aliasSuffix(wave, shown)}`;
    if (label.length <= width) return label;
  }
  return truncate(wave.id, width);
}

function aliasSuffix(wave: Wave, shown: number): string {
  const parts = wave.aliases.slice(0, shown);
  const hidden = wave.aliases.length - parts.length;
  if (hidden) parts.push(`${hidden} more`);
  return parts.length ? ` (+${parts.join(", ")})` : "";
}

function windowLine(count: number, window: Window): string {
  return `${count.toLocaleString("en-US")} repos  ${window.from}..${window.to}  stars>=${window.minStars}`;
}

function truncate(text: string, width: number): string {
  const flat = text.replace(/\s+/g, " ").trim();
  return flat.length > width ? `${flat.slice(0, width - 1)}…` : flat;
}

const repoLink = (fullName: string) => `[${fullName}](https://github.com/${fullName})`;
