# Sukhwinder Singh — Portfolio

A production-ready developer portfolio built with React, Vite and Tailwind CSS. All content
(education, skills, projects, links) is sourced from `src/data/resume.js`, which was populated
directly from the résumé — including live/GitHub/Swagger links extracted from the PDF's actual
embedded hyperlinks.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (auto-detected).
4. Deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Structure

```
src/
  data/resume.js       single source of truth for all résumé content
  hooks/                useReveal (scroll animations), useActiveSection (nav highlighting)
  components/           one component per section + shared UI primitives (Tag, LinkButton, SectionHeading)
public/
  Sukhwinder_Singh_Resume.pdf   served for the résumé download CTA
```

## Updating content

Edit `src/data/resume.js` only — every section reads from it, so there's a single place to keep
in sync with the résumé.
