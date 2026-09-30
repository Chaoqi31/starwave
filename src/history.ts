export type StarBucket = { week: number; total: number; days: number[] };

const DAY_MS = 86_400_000;
const SPARK_BLOCKS = "▁▂▃▄▅▆▇█";

export function dailyStars(histories: StarBucket[][], today: string, days: number): number[] {
  const byDate = new Map<string, number>();
  for (const history of histories) {
    for (const bucket of history) {
      bucket.days.forEach((count, i) => {
        const date = new Date(bucket.week * 1000 + i * DAY_MS).toISOString().slice(0, 10);
        byDate.set(date, (byDate.get(date) ?? 0) + count);
      });
    }
  }
  const start = Date.parse(today);
  return Array.from({ length: days }, (_, i) => {
    const date = new Date(start - (days - i) * DAY_MS).toISOString().slice(0, 10);
    return byDate.get(date) ?? 0;
  });
}

export function sparkline(counts: number[]): string {
  const max = Math.max(1, ...counts);
  return counts.map((c) => SPARK_BLOCKS[Math.min(7, Math.round((c / max) * 7))]).join("");
}
