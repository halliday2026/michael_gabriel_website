// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// site + base are env-driven so the SAME repo deploys to a GitHub Pages project
// subpath (staging) OR a custom domain (production).
// IMPORTANT: use || (NOT ??). CI can pass an empty string '', which ?? would let
// through (?? only catches null/undefined), breaking the base path. || treats ''
// as falsy and falls back correctly.
const SITE = process.env.SITE_URL || 'https://psorthodoxro.org';
const BASE = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  vite: { plugins: [tailwindcss()] },
});
