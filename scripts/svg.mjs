#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { renderTable } from "../dist/render.js";

const [snapshotPath, outPath = "assets/waves.svg"] = process.argv.slice(2);
if (!snapshotPath) {
  process.stderr.write("usage: node scripts/svg.mjs <snapshot.json> [out.svg]\n");
  process.exit(1);
}

const snapshot = JSON.parse(readFileSync(snapshotPath, "utf8"));
const lines = renderTable(snapshot, { top: 6, color: false }).trimEnd().split("\n");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "\u00a0");
const lineHeight = 20;
const width = 1000;
const height = lines.length * lineHeight + 56;

const colorOf = (line) => {
  if (/^Waves|^Looks coordinated/.test(line)) return "#e6a23c";
  if (/^ #/.test(line)) return "#6c7a89";
  if (/^\s+[a-z-]+( · [a-z-]+)*$/.test(line)) return "#e06c75";
  if (/^\s*\d+\s/.test(line)) return "#d7dae0";
  return "#8b949e";
};

const text = lines
  .map((line, i) => {
    const y = 44 + i * lineHeight;
    const row = /^\s*(\d+)\s+(\S+)(.*)$/.exec(line);
    if (!row || colorOf(line) !== "#d7dae0") {
      return `<text x="20" y="${y}" fill="${colorOf(line)}">${esc(line)}</text>`;
    }
    const [, n, id, rest] = row;
    const pad = line.slice(0, line.indexOf(n));
    return `<text x="20" y="${y}" fill="#d7dae0">${esc(pad + n + " ")}<tspan fill="#7ee787" font-weight="600">${esc(id)}</tspan>${esc(rest)}</text>`;
  })
  .join("\n");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="12.5">
<rect width="${width}" height="${height}" rx="10" fill="#0d1117"/>
<circle cx="22" cy="18" r="6" fill="#ff5f56"/><circle cx="42" cy="18" r="6" fill="#ffbd2e"/><circle cx="62" cy="18" r="6" fill="#27c93f"/>
<text x="${width / 2}" y="22" fill="#8b949e" text-anchor="middle">npx starwave</text>
${text}
</svg>
`;
writeFileSync(outPath, svg);
process.stderr.write(`wrote ${outPath} (${lines.length} lines)\n`);
