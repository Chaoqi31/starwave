import assert from "node:assert/strict";
import test from "node:test";
import { dayCounts, sparkline, starsInLastDays } from "../dist/history.js";
import type { StarBucket } from "../dist/history.js";

const week = (start: string, days: number[]): StarBucket => ({
  week: Date.parse(`${start}T00:00:00Z`) / 1000,
  total: days.reduce((a, b) => a + b, 0),
  days,
});

const history = [week("2026-09-20", [1, 2, 3, 4, 5, 6, 7]), week("2026-09-27", [10, 20, 30, 40, 0, 0, 0])];

test("dayCounts maps buckets to dates in order", () => {
  const counts = dayCounts(history);
  assert.equal(counts.length, 14);
  assert.deepEqual(counts[0], { date: "2026-09-20", count: 1 });
  assert.deepEqual(counts.at(-1), { date: "2026-10-03", count: 0 });
});

test("starsInLastDays counts only complete days", () => {
  assert.equal(starsInLastDays(history, "2026-09-30", 3), 10 + 20 + 30);
  assert.equal(starsInLastDays(history, "2026-09-30", 7), 4 + 5 + 6 + 7 + 10 + 20 + 30);
  assert.equal(starsInLastDays(history, "2026-09-20", 3), 0);
});

test("sparkline is one block per complete day with the peak at full height", () => {
  const spark = sparkline(history, "2026-09-30", 14);
  assert.equal(spark.length, 10);
  assert.ok(spark.endsWith("█"), spark);
  assert.equal(sparkline([], "2026-09-30"), "");
});

test("matches the real laya capture from 2026-09-30", () => {
  const laya = [
    week("2026-09-20", [3943, 6486, 5577, 3468, 2178, 1444, 1129]),
    week("2026-09-27", [971, 934, 877, 156, 0, 0, 0]),
  ];
  assert.equal(starsInLastDays(laya, "2026-09-30", 3), 971 + 934 + 877);
});
