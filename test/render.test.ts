import assert from "node:assert/strict";
import test from "node:test";
import { renderMarkdown, renderWave } from "../dist/render.js";
import type { Repo, Snapshot, Wave } from "../dist/types.js";

function snapshotWithDescription(description: string): Snapshot {
  const repo: Repo = {
    fullName: "owner/example", stars: 40, createdAt: "2026-09-30",
    description, topics: [], language: null,
  };
  const wave: Wave = {
    id: "example", aliases: [], repos: [repo], repoCount: 1, ownerCount: 1,
    stars: 40, velocity: 40, firstSeen: repo.createdAt, baselineCount: 0,
    burst: 1, cohesion: 1, score: 1, anchor: repo, flags: [],
  };
  return {
    generatedAt: "2026-09-30T12:00:00Z",
    recentWindow: { from: "2026-09-16", to: "2026-09-30", minStars: 40 },
    baselineWindow: { from: "2026-07-18", to: "2026-09-15", minStars: 150 },
    recentCount: 1, baselineCount: 0, waves: [wave],
  };
}

test("Markdown descriptions display HTML tags and entities as literal text", () => {
  const snapshot = snapshotWithDescription('<img src="x"> </details> &lt;tag&gt;');
  const md = renderMarkdown(snapshot, { top: 1 });
  assert.ok(md.includes('&lt;img src="x"&gt; &lt;/details&gt; &amp;lt;tag&amp;gt;'));
  assert.ok(!md.includes('<img src="x">'));
  assert.equal(md.split("</details>").length - 1, 1);
  assert.ok(md.includes("<details><summary>"), "generated details markup is preserved");
  assert.ok(renderWave(snapshot.waves[0]!, "2026-09-30").includes('<img src="x">'));
});

test("Markdown descriptions retain pipe escaping and whitespace normalization", () => {
  const md = renderMarkdown(snapshotWithDescription("  A & B\n| C  "), { top: 1 });
  assert.ok(md.includes("40★ A &amp; B \\| C\n"));
});

test("Markdown descriptions are truncated before HTML escaping", () => {
  const md = renderMarkdown(snapshotWithDescription("<".repeat(81)), { top: 1 });
  assert.ok(md.includes(`40★ ${"&lt;".repeat(79)}…\n`));
});
