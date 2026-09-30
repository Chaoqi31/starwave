#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

const [tablePath] = process.argv.slice(2);
if (!tablePath) {
  process.stderr.write("usage: node scripts/readme.mjs <waves.md>\n");
  process.exit(1);
}

const body = readFileSync(tablePath, "utf8").trim();
const block = /(<!-- starwave:start -->)[\s\S]*?(<!-- starwave:end -->)/;
for (const file of ["README.md", "README.zh-CN.md"]) {
  const source = readFileSync(file, "utf8");
  if (!block.test(source)) throw new Error(`markers not found in ${file}`);
  writeFileSync(file, source.replace(block, (_, start, end) => `${start}\n${body}\n${end}`));
}
