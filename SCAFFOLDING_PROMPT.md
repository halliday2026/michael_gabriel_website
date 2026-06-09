# Using this scaffold for a new client site — prompt checklist

When kicking off a new client build from a repo created via "Use this
template," make sure the prompt to Claude Code addresses all of the following.
This is the difference between a clean handoff and a repo full of half-finished
placeholders.

## 1. Point it at the README — as instructions to execute, not just read

Don't just say "review README.md for context." Say something like:

> Follow the per-client workflow and housekeeping checklist in README.md
> step by step, and don't consider the task done until every item in that
> checklist is satisfied.

The README already documents the exact sequence (theme → content → assets →
prune sections → housekeeping). The risk isn't that it won't find the file —
it's that it'll skim it for context rather than treat it as a literal task list.

## 2. Spell out the specific replacements — don't assume "fill in the content" covers it

- **`src/data/site.ts`** — every `REPLACE_ME` token needs real client content
  (org name, nav, contact info, hero/mission/programs/testimonials/get-involved/
  contact copy). Give Claude the actual client info up front, or it'll invent
  placeholder-ish filler that just shifts the problem down the road.
- **`src/styles/global.css`** — the `@theme` block still has *Halliday's*
  navy/teal/coral palette. Explicitly say to replace these with the client's
  actual brand colors and fonts. Easy to miss because nothing flags it as a
  placeholder the way `REPLACE_ME` does.
- **`astro.config.mjs`** — the `BASE_PATH` fallback needs to match the new
  repo's name (`/new-repo-name/`).
- **`PUBLIC_FORMSPREE_ENDPOINT`** — needs the client's real Formspree endpoint
  (or call out that you're doing the documented Supabase swap instead).
- **`SHOW_HALLIDAY_CREDIT`** — explicitly decide `true`/`false`. If it's a
  white-label engagement, this needs to flip.

## 3. Tell it what to delete, not just what to add

- Sections the client doesn't need: removing the `<Section />` usage from
  `index.astro` is not enough — the **import line** and the **component file**
  in `src/components/sections/` should go too, or the repo ends up with dead files.
- **The `<!-- STARTER NOTES -->` block at the top of README.md is explicitly
  marked for deletion before client handoff** — it's internal Halliday process
  documentation (the four hard rules, template explanation) that has no
  business in a client-facing repo. Easy to forget since it lives inside a
  file you're otherwise keeping.
- Any placeholder assets being replaced (e.g., the starter favicon) should be
  removed once swapped, not left alongside the new ones.

## 4. Make verification a hard requirement, not a suggestion

Tell it to run these — and not report the task done until they pass:

- `npm install && npm run build` — must succeed with no errors
- `npm run check:strict` — must exit clean (zero `REPLACE_ME` / `TODO` /
  `LOREM` / `PLACEHOLDER` hits). This is the scaffold's built-in
  "nothing sloppy leftover" gate.
- A grep for stray hex codes (`#[0-9a-fA-F]{3,6}`) outside `global.css` — the
  "single source of truth for the look" promise only holds if nothing
  hardcodes colors elsewhere.

## 5. Note what it can't (and shouldn't) do

- **Enabling GitHub Pages** (Settings → Pages → Source = "GitHub Actions")
  and **setting repo Actions Variables** (`SITE_URL`, `BASE_PATH`, `NOINDEX`,
  `PUBLIC_FORMSPREE_ENDPOINT`, etc.) are manual, account-level steps that
  "Use this template" never carries over from the source repo — same gotcha
  hit when first deploying the template repo itself. These are yours to do
  by hand in the GitHub UI.
- **Decide and state your git expectations up front.** Unlike the "no git"
  rule used to build the *template* (where the human handled all version
  control), building an actual client site is normal repo work — but say
  explicitly whether you want Claude Code to commit/push for you, or whether
  you'll handle that yourself through VS Code.

---

## Ready-to-adapt prompt skeleton

```
This repo was created from the Halliday Astro + Tailwind template
(scaffold_astro_tailwind). Build out the client site for [CLIENT NAME].

Client info:
- [org name, tagline, description, contact info, nav structure]
- [brand colors / fonts, or attach brand guidelines]
- [hero, mission, programs/impact, testimonials, get-involved, contact copy]
- [Formspree endpoint, or note that we're doing the Supabase swap]
- [white-label? if so, set SHOW_HALLIDAY_CREDIT = false]
- [which of the six sections does this client need — delete the rest, including
  their component files and imports]

Follow the per-client workflow AND the housekeeping checklist in README.md
step by step — treat both as a literal task list, not just background reading.
Specifically:
1. Replace every REPLACE_ME token in src/data/site.ts with the content above.
2. Replace the @theme palette/fonts in src/styles/global.css with the client's
   actual brand tokens (the current navy/teal/coral is Halliday's placeholder).
3. Set BASE_PATH in astro.config.mjs to match this repo's name.
4. Delete unused section components (file + import + usage in index.astro).
5. Delete the <!-- STARTER NOTES --> block from the top of README.md — it's
   internal Halliday documentation and must not ship to the client.
6. Drop client assets (logo, favicon, images) into public/ and remove any
   placeholder assets they replace.

Verify before reporting done:
- `npm install && npm run build` succeeds
- `npm run check:strict` exits clean (no placeholder tokens remain)
- No hardcoded hex colors outside global.css
- `npm run dev` renders correctly with the client's look and copy

Do NOT attempt to enable GitHub Pages or set repo Actions Variables — those
are manual GitHub UI steps I'll handle myself.

[State your git/commit expectations here — e.g., "commit when done" or
"leave commits to me."]
```
