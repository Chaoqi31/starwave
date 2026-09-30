export type Repo = {
  fullName: string;
  stars: number;
  createdAt: string;
  description: string;
  topics: string[];
  language: string | null;
};

export type Flag = "same-day" | "few-owners" | "flat-stars" | "near-duplicate";

export type Wave = {
  id: string;
  aliases: string[];
  repos: Repo[];
  repoCount: number;
  ownerCount: number;
  stars: number;
  velocity: number;
  velocity3d?: number;
  daily?: number[];
  firstSeen: string;
  baselineCount: number;
  burst: number;
  cohesion: number;
  score: number;
  anchor: Repo;
  flags: Flag[];
};

export type Window = { from: string; to: string; minStars: number };

export type Capture = {
  capturedAt: string;
  recentWindow: Window;
  baselineWindow: Window;
  recent: Repo[];
  baseline: Repo[];
};

export type Snapshot = {
  generatedAt: string;
  recentWindow: Window;
  baselineWindow: Window;
  recentCount: number;
  baselineCount: number;
  waves: Wave[];
};
