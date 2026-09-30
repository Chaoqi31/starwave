import type { Snapshot, Wave, Window } from "./types.js";
import { ageDays } from "./waves.js";

const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

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
  const header = bold(tableLine("#", "wave", "repos", "owners", "stars", "vel/d", "first", "anchor"));
  const lines = [
    `${bold("starwave")} ${dim(snapshot.generatedAt)}`,
    `recent    ${windowLine(snapshot.recentCount, snapshot.recentWindow)}`,
    `baseline  ${windowLine(snapshot.baselineCount, snapshot.baselineWindow)}`,
    "",
    bold(`Waves (${Math.min(top, organic.length)} of ${organic.length})`),
    header,
    ...organic.slice(0, top).map((wave, i) => tableRow(i + 1, wave)),
  ];
  if (flagged.length) {
    lines.push("", bold(`Looks coordinated (${Math.min(top, flagged.length)} of ${flagged.length})`), header);
    for (const [i, wave] of flagged.slice(0, top).entries()) {
      lines.push(tableRow(i + 1, wave), dim(`    ${wave.flags.join(" · ")}`));
    }
  }
  return `${lines.join("\n")}\n`;
}

export function renderMarkdown(snapshot: Snapshot, { top }: { top: number }): string {
  const organic = snapshot.waves.filter((w) => w.flags.length === 0).slice(0, top);
  const flagged = snapshot.waves.filter((w) => w.flags.length > 0).slice(0, top);
  const shown = [...organic, ...flagged];
  const lines = [
    `_recent ${windowLine(snapshot.recentCount, snapshot.recentWindow)} · ` +
      `baseline ${windowLine(snapshot.baselineCount, snapshot.baselineWindow)} · generated ${snapshot.generatedAt}_`,
    "",
    "| # | wave | repos | owners | stars | vel/d | first seen | anchor | flags |",
    "|--:|------|------:|-------:|------:|------:|------------|--------|-------|",
    ...shown.map((wave, i) => {
      const cells = [
        i + 1,
        `**${wave.id}**${aliasSuffix(wave, 5)}`,
        wave.repoCount,
        wave.ownerCount,
        formatCount(wave.stars),
        `${formatCount(Math.round(wave.velocity))}/d`,
        wave.firstSeen,
        repoLink(wave.anchor.fullName),
        wave.flags.join(", "),
      ];
      return `| ${cells.join(" | ")} |`;
    }),
  ];
  for (const wave of shown.slice(0, 5)) {
    lines.push("", `**${wave.id}**: ${wave.repoCount} repos, ${formatCount(wave.stars)} stars`);
    for (const repo of wave.repos.slice(0, 5)) {
      const description = truncate(repo.description, 80).replace(/\|/g, "\\|");
      lines.push(`- ${repoLink(repo.fullName)} ${formatCount(repo.stars)}★ ${description}`);
    }
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
  return `${lines.join("\n")}\n`;
}

function tableRow(rank: number, wave: Wave): string {
  return tableLine(
    String(rank),
    waveLabel(wave, 30),
    String(wave.repoCount),
    String(wave.ownerCount),
    formatCount(wave.stars),
    `${formatCount(Math.round(wave.velocity))}/d`,
    wave.firstSeen,
    truncate(wave.anchor.fullName, 20),
  );
}

function tableLine(...cells: [string, string, string, string, string, string, string, string]): string {
  const [rank, wave, repos, owners, stars, velocity, first, anchor] = cells;
  return [
    rank.padStart(2),
    wave.padEnd(30),
    repos.padStart(5),
    owners.padStart(6),
    stars.padStart(6),
    velocity.padStart(7),
    first.padEnd(10),
    anchor,
  ].join("  ");
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
