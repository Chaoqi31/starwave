import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const tests = readdirSync(new URL("../test/", import.meta.url))
  .filter((name) => name.endsWith(".test.ts"))
  .sort()
  .map((name) => fileURLToPath(new URL(`../.test-dist/${name.replace(/\.ts$/, ".js")}`, import.meta.url)));

if (tests.length === 0) throw new Error("no test files found");
const result = spawnSync(process.execPath, ["--test", ...process.argv.slice(2), ...tests], { stdio: "inherit" });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
