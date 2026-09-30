import assert from "node:assert/strict";
import test from "node:test";
import { dailyStars, sparkline } from "../dist/history.js";
import type { StarBucket } from "../dist/history.js";

const week = (sunday: string, days: number[]): StarBucket => ({
  week: Date.parse(`${sunday}T00:00:00Z`) / 1000,
  total: days.reduce((a, b) => a + b, 0),
  days,
});

const laya = [
  week("2026-09-13", [0, 0, 0, 0, 0, 336, 1451]),
  week("2026-09-20", [3943, 6486, 5577, 3468, 2178, 1444, 1129]),
  week("2026-09-27", [971, 934, 877, 156, 0, 0, 0]),
];
const small = [week("2026-09-27", [10, 20, 30, 5, 0, 0, 0])];

test("dailyStars returns complete days before today, oldest first", () => {
  assert.deepEqual(dailyStars([laya], "2026-09-30", 3), [971, 934, 877]);
  assert.deepEqual(dailyStars([laya], "2026-09-23", 4), [1451, 3943, 6486, 5577]);
});

test("dailyStars sums across the repos of a wave and fills missing days with 0", () => {
  assert.deepEqual(dailyStars([laya, small], "2026-09-30", 3), [981, 954, 907]);
  assert.deepEqual(dailyStars([small], "2026-09-28", 3), [0, 0, 10]);
  assert.deepEqual(dailyStars([], "2026-09-30", 2), [0, 0]);
});

test("sparkline puts the peak at full height", () => {
  const spark = sparkline(dailyStars([laya], "2026-09-30", 14));
  assert.equal(spark.length, 14);
  assert.equal(spark[5], "█", spark);
  assert.equal(sparkline([0, 0]), "▁▁");
});
