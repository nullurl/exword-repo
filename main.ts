// exword: the entry is the text beside this file.
// The program copies it to the grader's output directory as entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const TEXT_FILE = 'entry.txt';
const DEFAULT_OUTPUT_DIR = '/output';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;

// The grader's /output may not exist yet; create it so the copy never fails.
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL(`./${TEXT_FILE}`, import.meta.url), join(outputDir, TEXT_FILE));
