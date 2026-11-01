import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import type { StarBucket } from "./history.js";
import type { Repo } from "./types.js";

export type Progress = (message: string) => void;

const SEARCH_URL = "https://api.github.com/search/repositories";
const PACE_MS = 2100;
const MAX_RATE_LIMIT_WAIT_MS = 70_000;
const CACHE_DIR = join(homedir(), ".cache", "starwave");
const CACHE_TTL_MS = 6 * 3600_000;
const DAY_MS = 86_400_000;

type SearchItem = {
  full_name: string;
  stargazers_count: number;
  created_at: string;
  description: string | null;
  topics?: string[];
  language: string | null;
};

let lastRequestAt = 0;

class SearchLimitError extends Error {
  constructor(query: string, total: number, incomplete: boolean) {
    super(`GitHub search ${incomplete ? "returned incomplete results" : `exceeded 1,000 results (${total})`} for ${query}`);
  }
}

export function resolveToken(): string {
  const token = process.env.GITHUB_TOKEN?.trim() || ghToken();
  if (token) return token;
  throw new Error("set GITHUB_TOKEN or run: gh auth login");
}

function ghToken(): string {
  try {
    return execFileSync("gh", ["auth", "token"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}

export async function searchRepos(query: string, token: string, onProgress?: Progress): Promise<Repo[]> {
  const repos: Repo[] = [];
  for (let page = 1; page <= 10; page++) {
    const url = `${SEARCH_URL}?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=100&page=${page}`;
    const response = await request(url, token);
    if (!response.ok) throw new Error(`GitHub search returned ${response.status}: ${(await response.text()).slice(0, 200)}`);
    const body = (await response.json()) as { total_count: number; incomplete_results?: boolean; items: SearchItem[] };
    if (body.total_count > 1000 || body.incomplete_results) {
      throw new SearchLimitError(query, body.total_count, Boolean(body.incomplete_results));
    }
    repos.push(...body.items.map(toRepo));
    const pages = Math.max(1, Math.min(10, Math.ceil(body.total_count / 100)));
    onProgress?.(`fetched ${repos.length.toLocaleString("en-US")} repos (page ${page}/${pages})`);
    if (body.items.length < 100 || page >= pages) break;
  }
  return repos;
}

export async function fetchWindow(
  from: string,
  to: string,
  minStars: number,
  sliceDays: number,
  token: string,
  onProgress?: Progress,
): Promise<Repo[]> {
  const byName = new Map<string, Repo>();
  const fetchRange = async (start: number, end: number): Promise<void> => {
    const wholeDays = start % DAY_MS === 0 && (end + 1000) % DAY_MS === 0;
    const format = (time: number) => wholeDays
      ? new Date(time).toISOString().slice(0, 10)
      : new Date(time).toISOString().replace(".000Z", "+00:00");
    const range = `${format(start)}..${format(end)}`;
    try {
      const found = await searchRepos(`created:${range} stars:>=${minStars}`, token, (message) =>
        onProgress?.(`${range}  ${message}`),
      );
      for (const repo of found) byName.set(repo.fullName, repo);
    } catch (error) {
      if (!(error instanceof SearchLimitError)) throw error;
      if (start === end) throw new Error(`${error.message}; cannot split a one-second window further`);
      onProgress?.(`${range}  splitting search window`);
      const midpoint = start + Math.floor((end - start) / 2000) * 1000;
      await fetchRange(start, midpoint);
      await fetchRange(midpoint + 1000, end);
    }
  };
  for (let start = from; start <= to; start = shiftDays(start, sliceDays)) {
    const end = shiftDays(start, sliceDays - 1) < to ? shiftDays(start, sliceDays - 1) : to;
    await fetchRange(Date.parse(start), Date.parse(end) + DAY_MS - 1000);
  }
  return [...byName.values()];
}

export function shiftDays(date: string, days: number): string {
  return new Date(Date.parse(date) + days * DAY_MS).toISOString().slice(0, 10);
}

export function loadCached<T>(key: string): T | undefined {
  const path = cachePath(key);
  try {
    if (Date.now() - statSync(path).mtimeMs > CACHE_TTL_MS) return undefined;
    return JSON.parse(readFileSync(path, "utf8")) as T;
  } catch {
    return undefined;
  }
}

export function saveCached(key: string, value: unknown): void {
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(cachePath(key), JSON.stringify(value));
}

export async function fetchStarHistory(fullName: string, token: string, useCache = true): Promise<StarBucket[]> {
  const key = `history ${fullName}`;
  const cached = useCache ? loadCached<StarBucket[]>(key) : undefined;
  if (cached) return cached;
  const url = `https://api.github.com/repos/${fullName}/stargazers/history`;
  let response = await fetch(url, { headers: headersFor(token) });
  if (isRateLimited(response)) {
    await sleep(rateLimitWaitMs(response));
    response = await fetch(url, { headers: headersFor(token) });
  }
  if (response.status === 404) return [];
  if (!response.ok) throw new Error(`stargazers/history for ${fullName} returned ${response.status}`);
  const buckets = (await response.json()) as StarBucket[];
  saveCached(key, buckets);
  return buckets;
}

async function request(url: string, token: string): Promise<Response> {
  const first = await pacedFetch(url, token);
  if (!isRateLimited(first)) return first;
  await sleep(rateLimitWaitMs(first));
  return pacedFetch(url, token);
}

async function pacedFetch(url: string, token: string): Promise<Response> {
  await sleep(lastRequestAt + PACE_MS - Date.now());
  lastRequestAt = Date.now();
  return fetch(url, { headers: headersFor(token) });
}

function headersFor(token: string): Record<string, string> {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "starwave",
  };
}

function isRateLimited(response: Response): boolean {
  return (
    (response.status === 403 || response.status === 429) &&
    (response.headers.has("retry-after") || response.headers.get("x-ratelimit-remaining") === "0")
  );
}

function rateLimitWaitMs(response: Response): number {
  const retryAfter = Number(response.headers.get("retry-after")) * 1000;
  const untilReset = Number(response.headers.get("x-ratelimit-reset")) * 1000 - Date.now();
  return Math.min(MAX_RATE_LIMIT_WAIT_MS, Math.max(1000, retryAfter || untilReset));
}

function toRepo(item: SearchItem): Repo {
  return {
    fullName: item.full_name,
    stars: item.stargazers_count,
    createdAt: item.created_at.slice(0, 10),
    description: item.description ?? "",
    topics: item.topics ?? [],
    language: item.language,
  };
}

const cachePath = (key: string) => join(CACHE_DIR, `${createHash("sha1").update(key).digest("hex").slice(0, 16)}.json`);
const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, Math.max(0, ms)));
