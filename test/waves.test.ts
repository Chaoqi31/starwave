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
const has = (wave: Wave, fullName: string) => wave.repos.some((r) => r.fullName === fullName);

test("fixture is the default window a first run fetches", () => {
  assert.equal(fixture.recentWindow.minStars, 40);
  assert.equal(fixture.baselineWindow.minStars, 150);
  assert.ok(fixture.recent.length > 1000 && fixture.baseline.length > 2000);
});

test("top organic wave is jev, merged from laya and typesafe, anchored by laya", () => {
  assert.equal(jev.id, "jev");
  assert.ok(jev.repoCount >= 200, `repoCount ${jev.repoCount}`);
  assert.ok(jev.aliases.includes("laya") && jev.aliases.includes("typesafe"), jev.aliases.join(","));
  assert.equal(jev.anchor.fullName, "NandhaKishorM/laya");
  assert.ok(has(jev, "browser-use/jev-ultrafast"));
});

test("a wave 8 days old and absent from Trending shows up: opus 5.5 videos", () => {
  const opus = organic.find((w) => w.id === "opus");
  assert.ok(opus && opus.repoCount >= 15, "opus wave");
  assert.ok(has(opus, "yihui-dev/awesome-opus5-5-videos"));
});

test("the API reseller farm is one flagged wave and keeps legit repos out", () => {
  const farm = flagged.find((w) => w.id === "apimart" || w.aliases.includes("apimart")) as Wave;
  assert.ok(farm, "apimart wave");
  assert.ok(farm.flags.includes("near-duplicate") && farm.flags.includes("same-day"), farm.flags.join(","));
  assert.ok(farm.repoCount >= 150, `repoCount ${farm.repoCount}`);
  assert.ok(farm.anchor.fullName.startsWith("apimart"), farm.anchor.fullName);
  for (const legit of ["browser-use/jev-ultrafast", "KKKKhazix/AIHOT", "ghuntley/underclass"]) {
    assert.ok(!has(farm, legit), `${legit} in farm`);
  }
  assert.equal(flagged.filter((w) => w.id === "apimart" || w.aliases.includes("apimart")).length, 1);
});

test("templated script farms below the 10-repo flag floor are still not organic", () => {
  for (const id of ["updated", "discordfix", "executor", "auto-raid-complete-script"]) {
    assert.ok(!organic.some((w) => w.id === id || w.aliases.includes(id)), `${id} is organic`);
  }
  for (const wave of organic) {
    for (const repo of wave.repos) {
      assert.ok(!/8-Ball-Pool-Autoplay|DiscordFix-|Bunker-Script/.test(repo.fullName), `${repo.fullName} in organic ${wave.id}`);
    }
  }
  const scripts = flagged.find((w) => w.id === "auto-raid-complete-script") as Wave;
  assert.ok(scripts && scripts.flags.includes("near-duplicate"), "roblox script farm flagged");
});

test("a legit repo sharing generic words with a farm is not flagged", () => {
  for (const wave of flagged) {
    assert.ok(!has(wave, "timoncool/YuE2-Studio"), `YuE2-Studio in ${wave.id}`);
    assert.ok(!has(wave, "NandhaKishorM/laya"), `laya in ${wave.id}`);
  }
});

test("waves held together by one generic word are dropped", () => {
  for (const wave of organic) assert.ok(wave.cohesion >= 0.5, `${wave.id} cohesion ${wave.cohesion}`);
  for (const junk of ["bit", "answers", "point", "midi"]) {
    assert.ok(!waves.some((w) => w.id === junk), `${junk} should not be a wave`);
  }
});

test("organic waves are ranked by star velocity and never led by a stopword", () => {
  for (let i = 1; i < organic.length; i++) {
    assert.ok((organic[i - 1] as Wave).velocity >= (organic[i] as Wave).velocity);
  }
  for (const wave of organic) assert.ok(!STOP.has(wave.id), wave.id);
});

test("every repo belongs to at most one wave and ids are unique", () => {
  const seen = new Set<string>();
  for (const wave of waves) {
    assert.ok(!seen.has(wave.id), `duplicate id ${wave.id}`);
    seen.add(wave.id);
    for (const repo of wave.repos) {
      assert.ok(!seen.has(repo.fullName), `${repo.fullName} in two waves`);
      seen.add(repo.fullName);
    }
  }
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

test("terms strips stopwords, splits compounds, keeps topics, drops digits", () => {
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
