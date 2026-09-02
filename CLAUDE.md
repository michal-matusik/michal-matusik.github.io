# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Michal Matusik's personal site: an Astro static site (portfolio + "Writing" blog + resume),
deployed to GitHub Pages via GitHub Actions. Repo is `michal-matusik/michal-matusik.github.io`
(renamed from `personal-website` so it serves as the root user site at
`https://michal-matusik.github.io/`, no `base` path needed).

`master` is a protected branch: no direct pushes. Work on a feature branch, open a PR (runs
`ci.yml`), merge once the `validate` check passes — merging triggers `deploy.yml`.

Two specification documents (`UI_UX.docx`, `Technical.docx`) are the design source of truth
for anything not covered below — read them before making a structural change (new page type,
new content field, changed nav) rather than guessing.

## Commands

- `npm run dev` — local dev server.
- `npm run check` — `astro check` (type + content collection schema validation). Must show 0
  errors before committing.
- `npm run build` — production build to `dist/`.
- Full gate (same as CI): `npm ci && npm run check && npm run build`.
- No unit test runner — correctness is enforced by `astro check` + content schemas + the
  build itself (drafts/missing frontmatter fail the build).

## Architecture

Static, no backend: Astro (`output: 'static'`), strict TypeScript, MDX content collections
validated at build time, hand-authored CSS with design tokens, minimal client JS (theme
toggle only). No database, auth, CMS, or analytics.

- `src/config/site.ts` — single source of truth for name, role, bio, email, and social links.
  Components import this object; never hardcode identity strings elsewhere.
- `src/content.config.ts` — zod schemas for the `projects` and `writing` collections
  (`src/content/projects/*.mdx`, `src/content/writing/*.mdx`). Malformed frontmatter fails
  the build by design.
- `src/layouts/` — `BaseLayout` (head/header/footer/theme init shell), `ProjectLayout`,
  `ArticleLayout` (both wrap `BaseLayout` and add per-collection metadata/JSON-LD).
- `src/pages/projects/[...id].astro` and `writing/[...id].astro` — `getStaticPaths` driven by
  `getCollection(..., ({ data }) => !data.draft)`; this is the drafts filter, keep it in any
  new collection query.
- `src/pages/rss.xml.js` — build-time RSS from non-draft `writing` entries.

### Content invariants (enforced by page query logic, not the schema)

- Home (`src/pages/index.astro`) renders exactly the top 3 `featured` non-draft projects,
  sorted by `order` then `startDate`.
- The Writing nav link and Home "Writing" section only render once `getCollection('writing')`
  has ≥2 non-draft entries (`showWriting` in `SiteHeader`/`index.astro`) — don't add a
  standalone Writing link elsewhere without this same guard.
- Writing index sorts by `published` descending.

### Styling

`src/styles/tokens.css` (light/dark custom properties, cobalt accent), `global.css` (reset,
focus, skip-link, container), `components.css` (header, hero, cards, footer, theme toggle),
`prose.css` (article typography). Theme is `data-theme="light"|"dark"` on `<html>`, set by an
inline pre-paint script in `BaseHead.astro` and toggled by `ThemeToggle.astro`; both wrap
`localStorage` access in try/catch for privacy-mode browsers. The default is always light —
`BaseHead.astro` does not fall back to `prefers-color-scheme`, only to an explicit stored
`'light'`/`'dark'` choice. Add new component styles to
`components.css` rather than component-scoped `<style>` unless a rule is genuinely local.

## Placeholder content still to fill in

Projects, About copy, contact links, portrait, and resume are all filled in with real
content. The Experience section (`src/pages/index.astro`, `#experience`) is the one
remaining placeholder: it intentionally renders an empty-state message ("More to come
soon.") instead of fabricated entries, pending real `experience-item` entries from the
user. Don't invent real experience/biographical content on the user's behalf — leave the
empty state as-is until they provide entries.

## CI/CD

- `.github/workflows/ci.yml` — PR gate: `npm ci && npm run check && npm run build`.
- `.github/workflows/deploy.yml` — on push to `main`/`master`: `withastro/action` builds and
  uploads the Pages artifact, `actions/deploy-pages` deploys it. Requires repo Settings →
  Pages → Source = GitHub Actions.
- Only the default branch deploys; use `workflow_dispatch` for a manual redeploy.
