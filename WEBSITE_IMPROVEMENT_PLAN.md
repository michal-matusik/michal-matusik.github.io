# Personal Website Improvement Plan

**Site:** https://michal-matusik.github.io/  
**Goal:** Improve recruiter clarity and technical credibility without redesigning the site's existing visual system.

## Preserve

- Current typography, spacing, restrained color palette, photograph, and light/dark themes.
- Projects immediately after the hero; projects are currently stronger evidence than formal experience.
- Separate `/projects/` index and detailed project case-study pages.
- Existing accessibility foundations: skip link, semantic headings, keyboard-accessible controls, and reduced-motion behavior.
- Case-study structure: Summary, Context and constraints, Approach, Evaluation, Result, and What changed.

## Priority 1 — Remove incomplete states

- Hide **Experience** everywhere until at least one substantive entry exists.
- Hide **Writing** everywhere until at least two posts are published.
- Hide **RSS** until Writing is enabled.
- Use one shared condition/configuration so homepage, project pages, case studies, navigation, and footer remain consistent.
- Never display “More to come soon” or “No posts published yet.”

**Acceptance:** No navigation link or page leads to an empty professional section.

## Priority 2 — Sharpen the hero

- Keep: `Software Engineer — Machine Learning & AI`.
- Replace the generic/student paragraph with an evidence-oriented statement, for example:

  > I build privacy-conscious ML products and data systems, from on-device pose estimation to model-evaluation pipelines.

- Replace “freshman” with durable metadata:

  `B.S. Computer Science, Purdue University · Expected [YEAR]`

- Remove the repeated “Focus: Machine Learning, Deep Learning, AI” line.
- Use this action hierarchy:

  `View my work` (primary) · `Résumé` · `GitHub` · `LinkedIn` · `Email`

**Acceptance:** The first viewport communicates identity, specialty, proof of work, and contact routes without repeating information.

## Priority 3 — Improve project cards

- Shorten headings; place the explanation in a subtitle:
  - `FitPerfect` — On-device fitness form coach
  - `Chess Quant` — Live chess tilt detection
  - `Solana Data Platform` — Event-driven token research pipeline
- Each card should contain:
  1. Meaningful category, such as On-device ML, Applied ML, ML infrastructure, or Research prototype.
  2. One-sentence problem statement.
  3. One defensible result with enough context to understand it.
  4. Three or four important technologies.
  5. Visible `Case study →`, `Source ↗`, and `Demo ↗` links when available.
- Do not rely only on the entire card being clickable.
- Replace ambiguous metrics such as “avoided 56 losses on average” with a verified result that names the baseline, evaluation set, and measurement.

**Acceptance:** A visitor can understand each project's problem, contribution, result, and available evidence in under 15 seconds.

## Priority 4 — Strengthen case studies

- Retain the existing case-study section structure.
- Add, when available:
  - one screenshot, short demo, architecture diagram, or evaluation chart;
  - repository and live-demo links;
  - project dates and exact role;
  - limitations and next steps;
  - evaluation data, baseline, and methodology.
- Prefer technical evidence over decorative imagery.
- Never invent or inflate metrics, production status, collaborators, or impact.

## Priority 5 — Add compact education

Add after Writing, or after Selected Work while Writing is hidden:

```text
Education

Purdue University
B.S. Computer Science · Expected [YEAR]
Relevant focus: algorithms, probability, linear algebra, machine learning, systems
```

Only include courses already completed or currently being taken. Add research, teaching, competitions, or technical organizations only when substantive.

## Priority 6 — Publish before enabling Writing

Publish at least two substantive articles before exposing Writing:

1. **Running 3D pose estimation on-device: calibration, ONNX, and mobile constraints**
2. **How I evaluated a chess tilt detector without fooling myself**

When enabled, show two or three recent articles on the homepage with date, title, and one-sentence summary. Do not create a separate Notes section until at least six useful short notes exist.

## About and external links

- Keep the brief personal details about Poland, running, and swimming.
- Replace generic AI slogans with a specific technical motivation, for example:

  > I’m especially interested in ML systems that must work under real constraints: privacy, latency, noisy data, and imperfect evaluation.

- Keep GitHub, LinkedIn, Email, and conditional RSS in the footer; do not add a separate Elsewhere section.
- Add Google Scholar only after publications exist. Do not prioritize LeetCode on the homepage.

## Target homepage order

1. Header: Name · Work · Writing* · About · Résumé · Theme
2. Hero
3. Selected Work — three featured projects
4. Writing* — two or three substantive posts
5. Education
6. Experience* — only when substantive
7. About
8. Contact
9. Footer: GitHub · LinkedIn · RSS*

`*` Render only when the required content exists.

## Implementation sequence

1. Centralize conditional navigation and remove empty states.
2. Rewrite the hero and CTA hierarchy.
3. Refactor project-card content and visible links.
4. Improve project case studies with evidence and metadata.
5. Add the compact Education section.
6. Publish two articles, then enable Writing and RSS globally.

## Definition of done

- All routes use consistent navigation and footer content.
- No empty or placeholder professional sections are public.
- Featured projects show a problem, contribution, defensible result, and evidence link.
- The homepage works without client-side JavaScript.
- Keyboard navigation, focus indicators, both themes, reduced motion, and 320 px layouts pass manual review.
- `npm run check`, `npm run build`, and formatting validation pass.
- Resume, internal links, project links, email, and social links work in the production build.
