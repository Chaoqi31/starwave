import assert from "node:assert/strict";
import test from "node:test";
import type { TestContext } from "node:test";
import { fetchWindow, searchRepos } from "../dist/github.js";

type Item = {
  full_name: string; stargazers_count: number; created_at: string;
  description: null; language: null;
};
const itemsAt = (date: string, count: number, prefix: string): Item[] => Array.from({ length: count }, (_, i) => ({
  full_name: `owner/${prefix}-${i}`, stargazers_count: 40, created_at: date,
  description: null, language: null,
}));

let clock = Date.now();
function mockSearch(t: TestContext, items: Item[], incomplete = false): string[] {
  const queries: string[] = [];
  // Advance the clock so API pacing does not make mocked requests take seconds.
  t.mock.method(Date, "now", () => (clock += 3000));
  t.mock.method(globalThis, "fetch", async (input: string) => {
    const url = new URL(input);
    const query = url.searchParams.get("q")!;
    queries.push(query);
    const match = /^created:(\S+)\.\.(\S+) stars:>=40$/.exec(query);
    assert.ok(match, query);
    const start = Date.parse(match[1]!);
    const end = Date.parse(match[2]!) + (match[2]!.length === 10 ? 86_399_000 : 0);
    const found = items.filter((item) => Date.parse(item.created_at) >= start && Date.parse(item.created_at) <= end);
    const page = Number(url.searchParams.get("page"));
    return Response.json({
      total_count: found.length, incomplete_results: incomplete,
      items: found.slice((page - 1) * 100, page * 100),
    });
  });
  return queries;
}

test("searchRepos stops at the reported page count, including exactly 1,000 results", async (t) => {
  const queries = mockSearch(t, itemsAt("2026-09-30T00:00:00Z", 1000, "repo"));
  const repos = await searchRepos("created:2026-09-30..2026-09-30 stars:>=40", "test-token");
  assert.equal(repos.length, 1000);
  assert.equal(queries.length, 10);
});

test("searchRepos does not request an extra page for exactly 100 results", async (t) => {
  const queries = mockSearch(t, itemsAt("2026-09-30T00:00:00Z", 100, "repo"));
  assert.equal((await searchRepos("created:2026-09-30..2026-09-30 stars:>=40", "test-token")).length, 100);
  assert.equal(queries.length, 1);
});

test("searchRepos rejects capped results before fetching the remaining pages", async (t) => {
  const queries = mockSearch(t, itemsAt("2026-09-30T00:00:00Z", 1500, "repo"));
  await assert.rejects(searchRepos("created:2026-09-30..2026-09-30 stars:>=40", "test-token"), /exceeded 1,000/);
  assert.equal(queries.length, 1);
});

test("fetchWindow splits a capped date slice and preserves both endpoints", async (t) => {
  const items = [
    ...itemsAt("2026-09-29T00:00:00Z", 750, "first"),
    ...itemsAt("2026-09-30T23:59:59Z", 750, "last"),
  ];
  const queries = mockSearch(t, items);
  const repos = await fetchWindow("2026-09-29", "2026-09-30", 40, 3, "test-token");
  assert.deepEqual(new Set(repos.map((repo) => repo.fullName)), new Set(items.map((item) => item.full_name)));
  assert.equal(queries.length, 17);
  assert.ok(queries.includes("created:2026-09-29..2026-09-29 stars:>=40"));
  assert.ok(queries.includes("created:2026-09-30..2026-09-30 stars:>=40"));
});

test("fetchWindow splits a single day more than once without gaps at split boundaries", async (t) => {
  const items = [
    ...itemsAt("2026-09-30T00:00:00Z", 600, "first"),
    ...itemsAt("2026-09-30T05:59:59Z", 600, "before"),
    ...itemsAt("2026-09-30T06:00:00Z", 600, "after"),
    ...itemsAt("2026-09-30T23:59:59Z", 600, "last"),
  ];
  mockSearch(t, items);
  const repos = await fetchWindow("2026-09-30", "2026-09-30", 40, 3, "test-token");
  assert.equal(repos.length, 2400);
  assert.deepEqual(new Set(repos.map((repo) => repo.fullName)), new Set(items.map((item) => item.full_name)));
});

test("fetchWindow fails explicitly when more than 1,000 repos share one second", async (t) => {
  const queries = mockSearch(t, itemsAt("2026-09-30T00:00:00Z", 1001, "repo"));
  await assert.rejects(fetchWindow("2026-09-30", "2026-09-30", 40, 3, "test-token"), /cannot split a one-second window/);
  assert.ok(queries.length < 20, "recursive splitting terminates");
});

test("fetchWindow rejects incomplete responses even when their count is below the cap", async (t) => {
  mockSearch(t, [], true);
  await assert.rejects(fetchWindow("2026-09-30", "2026-09-30", 40, 3, "test-token"), /incomplete results.*cannot split/);
});

test("fetchWindow propagates HTTP errors without splitting the range", async (t) => {
  const queries = mockSearch(t, []);
  t.mock.method(globalThis, "fetch", async () => new Response("unavailable", { status: 500 }));
  await assert.rejects(fetchWindow("2026-09-30", "2026-09-30", 40, 3, "test-token"), /GitHub search returned 500/);
  assert.equal(queries.length, 0);
});
