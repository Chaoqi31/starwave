export type StarBucket = { week: number; total: number; days: number[] };

const DAY_S = 86_400;
const SPARK_BLOCKS = "▁▂▃▄▅▆▇█";

export function dayCounts(history: StarBucket[]): { date: string; count: number }[] {
  const out: { date: string; count: number }[] = [];
  for (const bucket of history) {
    bucket.days.forEach((count, i) => {
      out.push({ date: new Date((bucket.week + i * DAY_S) * 1000).toISOString().slice(0, 10), count });
    });
  }
  return out.sort((a, b) => (a.date < b.date ? -1 : 1));
}

export function starsInLastDays(history: StarBucket[], today: string, n: number): number {
  return dayCounts(history)
    .filter((d) => d.date < today)
    .slice(-n)
    .reduce((sum, d) => sum + d.count, 0);
}

export function sparkline(history: StarBucket[], today: string, n = 14): string {
  const counts = dayCounts(history)
    .filter((d) => d.date < today)
    .slice(-n)
    .map((d) => d.count);
  const max = Math.max(1, ...counts);
  return counts.map((c) => SPARK_BLOCKS[Math.min(7, Math.round((c / max) * 7))]).join("");
}
