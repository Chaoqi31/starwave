#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { renderTable } from "../dist/render.js";

const [snapshotPath, outPath = "assets/waves.svg"] = process.argv.slice(2);
if (!snapshotPath) {
  process.stderr.write("usage: node scripts/svg.mjs <snapshot.json[.gz]> [out.svg]\n");
  process.exit(1);
}

const raw = readFileSync(snapshotPath);
const snapshot = JSON.parse((snapshotPath.endsWith(".gz") ? gunzipSync(raw) : raw).toString("utf8"));
const output = renderTable(snapshot, { top: 6, color: false }).trimEnd().split("\n");

const COLORS = {
  text: "#d7dae0",
  dim: "#7d8590",
  section: "#e3b341",
  clean: "#7ee787",
  flagged: "#ffa198",
  flag: "#f47067",
  prompt: "#7ee787",
};
const LINE_HEIGHT = 20;
const WIDTH = 1000;
const TOP = 52;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "\u00a0");

let flaggedSection = false;
const rows = output.map((line) => {
  if (line.startsWith("Looks coordinated")) flaggedSection = true;
  if (/^(Waves|Looks coordinated) \(/.test(line)) return { color: COLORS.section, body: esc(line) };
  if (/^ #\s/.test(line) || /^(recent|baseline)\s/.test(line) || line.startsWith("vel/d:")) {
    return { color: COLORS.dim, body: esc(line) };
  }
  if (line.startsWith("starwave ")) {
    return { color: COLORS.text, body: `<tspan font-weight="700">starwave</tspan><tspan fill="${COLORS.dim}">${esc(line.slice(8))}</tspan>` };
  }
  if (/^\s{4}[a-z-]+( · [a-z-]+)*$/.test(line)) return { color: COLORS.flag, body: esc(line) };
  const row = /^(\s*\d+\s+)(\S+)(.*)$/.exec(line);
  if (row) {
    const [, rank, id, rest] = row;
    const idColor = flaggedSection ? COLORS.flagged : COLORS.clean;
    return { color: COLORS.text, body: `${esc(rank)}<tspan fill="${idColor}" font-weight="700">${esc(id)}</tspan>${esc(rest)}` };
  }
  return { color: COLORS.text, body: esc(line) };
});

const command = `<tspan fill="${COLORS.prompt}">$</tspan> npx github:Chaoqi31/starwave`;
const lines = [{ color: COLORS.text, body: command, delay: 0 }, ...rows.map((r, i) => ({ ...r, delay: 0.9 + i * 0.09 }))];
const cursorDelay = (lines.at(-1).delay + 0.3).toFixed(2);
const height = TOP + (lines.length + 1) * LINE_HEIGHT + 12;

const text = lines
  .map(
    (l, i) =>
      `<text class="l" x="24" y="${TOP + i * LINE_HEIGHT}" fill="${l.color}" style="animation-delay:${l.delay.toFixed(2)}s">${l.body}</text>`,
  )
  .join("\n");
const cursorY = TOP + lines.length * LINE_HEIGHT;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${height}" viewBox="0 0 ${WIDTH} ${height}" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace" font-size="12.5" role="img" aria-label="starwave terminal output for ${esc(snapshot.generatedAt.slice(0, 10))}">
<style>
.l { animation: in .35s ease-out both }
.c { animation: in .2s ease-out both, blink 1.1s steps(1) ${cursorDelay}s infinite }
@keyframes in { from { opacity: 0 } to { opacity: 1 } }
@keyframes blink { 50% { opacity: 0 } }
@media (prefers-reduced-motion: reduce) { .l, .c { animation: none } }
</style>
<rect width="${WIDTH}" height="${height}" rx="12" fill="#0d1117"/>
<rect x="0.5" y="0.5" width="${WIDTH - 1}" height="${height - 1}" rx="12" fill="none" stroke="#30363d"/>
<circle cx="24" cy="20" r="6" fill="#ff5f56"/><circle cx="44" cy="20" r="6" fill="#ffbd2e"/><circle cx="64" cy="20" r="6" fill="#27c93f"/>
<text x="${WIDTH / 2}" y="24" fill="${COLORS.dim}" text-anchor="middle">starwave</text>
${text}
<text class="c" x="24" y="${cursorY}" fill="${COLORS.prompt}" style="animation-delay:${cursorDelay}s">$ <tspan fill="${COLORS.text}">█</tspan></text>
</svg>
`;
writeFileSync(outPath, svg);
process.stderr.write(`wrote ${outPath} (${lines.length} lines)\n`);
