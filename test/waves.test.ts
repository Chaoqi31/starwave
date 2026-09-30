import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { gunzipSync } from "node:zlib";
import { renderMarkdown } from "../dist/index.js";
import type { Capture, Snapshot, Wave } from "../dist/index.js";
import { STOP, detectWaves, terms } from "../dist/waves.js";

const fixture = JSON.parse(
  gunzipSync(readFileSync(new URL("./fixtures/2026-09-30.json.gz", import.meta.url))).toString("utf8"),
) as Capture;
const today = "2026-09-30";
const waves = detectWaves(fixture.recent, fixture.baseline, { today });
const organic = waves.filter((w) => w.flags.length === 0);
const flagged = waves.filter((w) => w.flags.length > 0);
const jev = organic[0] as Wave;

test("top organic wave is jev, merged with laya and typesafe", () => {
  assert.equal(jev.id, "jev");
  assert.ok(jev.repoCount >= 150, `repoCount ${jev.repoCount}`);
  assert.ok(jev.aliases.includes("laya"), `aliases ${jev.aliases.join(",")}`);
  assert.ok(jev.aliases.includes("typesafe"));
  assert.equal(jev.anchor.fullName, "NandhaKishorM/laya");
});

test("apimart spam farm is flagged, not organic", () => {
  const apimart = waves.find((w) => w.id === "apimart" || w.aliases.includes("apimart"));
  assert.ok(apimart, "apimart wave exists");
  assert.ok(
    apimart.flags.some((f) => f === "same-day" || f === "near-duplicate" || f === "flat-stars"),
    `flags ${apimart.flags.join(",")}`,
  );
  assert.ok(flagged.includes(apimart));
  assert.ok(!organic.includes(apimart));
});

test("no organic wave is led by a stopword", () => {
  for (const wave of organic) assert.ok(!STOP.has(wave.id), wave.id);
});

test("a legit repo sharing one generic word with a spam farm stays out of it", () => {
  const apimart = waves.find((w) => w.id === "apimart") as Wave;
  assert.ok(!apimart.repos.some((r) => r.fullName === "browser-use/jev-ultrafast"));
  assert.ok(!apimart.repos.some((r) => r.fullName === "KKKKhazix/AIHOT"));
  assert.ok(jev.repos.some((r) => r.fullName === "browser-use/jev-ultrafast"));
});

test("small waves held together by one generic word are dropped", () => {
  for (const wave of waves) {
    if (wave.repoCount < 20) assert.ok(wave.cohesion >= 0.25, `${wave.id} cohesion ${wave.cohesion}`);
  }
  for (const junk of ["point", "bit", "answers", "quest", "dock"]) {
    assert.ok(!waves.some((w) => w.id === junk), `${junk} should not be a wave`);
  }
  assert.ok(waves.some((w) => w.id === "omarchy"));
  assert.ok(waves.some((w) => w.id === "discordfix"));
});

test("detectWaves is deterministic", () => {
  const again = detectWaves(fixture.recent, fixture.baseline, { today });
  assert.equal(JSON.stringify(again), JSON.stringify(waves));
});

test("renderMarkdown lists the table and the anchor", () => {
  const snapshot: Snapshot = {
    generatedAt: `${today}T00:00:00.000Z`,
    recentWindow: fixture.recentWindow,
    baselineWindow: fixture.baselineWindow,
    recentCount: fixture.recent.length,
    baselineCount: fixture.baseline.length,
    waves,
  };
  const md = renderMarkdown(snapshot, { top: 10 });
  assert.ok(md.includes("| # |"));
  assert.ok(md.includes("NandhaKishorM/laya"));
});

test("terms strips stopwords, keeps topics, drops digits", () => {
  const set = terms({
    fullName: "someone/Laya-Server",
    stars: 1,
    createdAt: today,
    description: "A self-hosted API for the Laya 2.0 decision model, 100% open source.",
    topics: ["Decision-Engine", "2024", "ai"],
    language: null,
  });
  assert.deepEqual([...set].sort(), ["decision", "decision-engine", "laya", "laya-server"]);
});
