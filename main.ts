// gta6-meme-x-01 — entrypoint (Node 22, standard library only).
//
// The entry is the X post named in POST.json. This program's only job is to
// hand that file to the grader: it reads POST.json from this repository and
// copies it into the output directory, where the house picks it up and reads
// the post itself from X.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths from this file's own location, never from the working
// directory: the grader runs the program from / and the repository lives
// wherever it was checked out.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "POST.json");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Validate the entry before handing it over: POST.json must parse, and its
// `url` must name a real X status — otherwise the grader would read a dead
// link. Fail loudly instead of copying a broken entry.
const raw = readFileSync(source, "utf8");
let parsed;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error("POST.json is not valid JSON — the entry names no X post.");
  process.exit(1);
}
if (typeof parsed.url !== "string" || !/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(parsed.url)) {
  console.error("POST.json url must be https://x.com/<handle>/status/<digits> — got: " + String(parsed.url));
  process.exit(1);
}

const target = join(outDir, "POST.json");
copyFileSync(source, target);
console.log(`POST.json copied to ${target}`);
