# xxx-mike-xxx.github.io

Michal Matusik's personal site — an Astro static site with a portfolio, blog ("Writing"),
and resume, deployed to GitHub Pages via GitHub Actions.

See `CLAUDE.md` for the full architecture/content contract, and `UI_UX.docx` / `Technical.docx`
for the original specifications this was built from.

## Commands

| Command         | Action                                        |
| :-------------- | :--------------------------------------------- |
| `npm install`   | Install dependencies                           |
| `npm run dev`   | Start local dev server at `localhost:4321`     |
| `npm run check` | Type-check and validate content collections    |
| `npm run build` | Build the production site to `./dist/`         |
| `npm run preview` | Preview the production build locally         |

## Filling in content

- `src/config/site.ts` — name, role, bio, email, and social links (single source of truth).
- `src/content/projects/*.mdx` — replace the three placeholder projects with real ones.
- `src/content/writing/*.mdx` — add posts here; the Writing nav link appears automatically
  once at least two non-draft posts exist.
- `public/portrait.jpg` — add a personal photo, then swap the placeholder `<div>` for an
  `<img>` per the comment in `src/pages/index.astro`.
- `public/resume.pdf` — add your resume; the header already links to `/resume.pdf`.
- `src/pages/index.astro` — Experience and About sections still hold bracketed placeholder copy.

## Deployment

Push to `main`/`master` to deploy via `.github/workflows/deploy.yml`. In the GitHub repo,
set **Settings → Pages → Source** to **GitHub Actions**. Pull requests run
`.github/workflows/ci.yml` (`npm ci && npm run check && npm run build`).
