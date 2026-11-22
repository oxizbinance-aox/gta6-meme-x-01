// gta6-meme-x-01 — entrypoint (Node 22, standard library only).
//
// The entry is the X post named in POST.json. This program's only job is to
// hand that file to the grader: it reads POST.json from this repository and
// copies it into the output directory, where the house picks it up and reads
// the post itself from X.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths from this file's own location, never from the working
// directory: the grader runs the program from / and the repository lives
// wherever it was checked out.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "POST.json");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "POST.json");
copyFileSync(source, target);
console.log(`POST.json copied to ${target}`);
