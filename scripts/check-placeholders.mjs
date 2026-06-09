// Cross-platform placeholder scanner — no shell, no git.
//
// Recursively scans `src/` for tokens that signal unfinished per-client work
// (REPLACE_ME, TODO, LOREM, {{, PLACEHOLDER) and prints each hit with its
// file and line number.
//
// Default (warn) mode always exits 0 so it never fails staging builds.
// `--strict` exits 1 when any hit is found — wire this into a pre-launch gate.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SCAN_DIR = join(ROOT, 'src');

const TOKENS = ['REPLACE_ME', 'TODO', 'LOREM', '{{', 'PLACEHOLDER'];
const TOKEN_PATTERN = new RegExp(
  TOKENS.map((token) => token.replace(/[{}]/g, '\\$&')).join('|'),
  'g'
);

const strict = process.argv.includes('--strict');

/** @param {string} dir */
function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) {
      yield* walk(full);
    } else if (stats.isFile()) {
      yield full;
    }
  }
}

let hits = 0;

for (const file of walk(SCAN_DIR)) {
  const contents = readFileSync(file, 'utf8');
  const lines = contents.split(/\r?\n/);

  lines.forEach((line, index) => {
    TOKEN_PATTERN.lastIndex = 0;
    if (TOKEN_PATTERN.test(line)) {
      hits += 1;
      const relPath = relative(ROOT, file);
      console.log(`${relPath}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (hits === 0) {
  console.log('No placeholder tokens found.');
} else {
  console.log(`\nFound ${hits} placeholder ${hits === 1 ? 'hit' : 'hits'}.`);
}

if (strict && hits > 0) {
  process.exit(1);
}

process.exit(0);
