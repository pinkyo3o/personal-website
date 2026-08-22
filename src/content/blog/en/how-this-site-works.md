---
title: 'How This Website Was Built'
description: 'Building a fully independent personal website with Astro + Tailwind CSS + GitHub + Vercel, not tied to any platform.'
pubDate: 2026-08-20
tags: ['tech', 'Astro', 'tutorial']
lang: 'en'
---

# The Tech Stack Behind This Site 🛠️

This post explains how this website was built and why this tech stack was chosen.

## Tech Stack

| Component | Choice | Why |
|-----------|--------|-----|
| Framework | Astro | Built for content sites, blazing fast |
| Styling | Tailwind CSS | Utility-first, clean and efficient |
| Hosting | Vercel | Free hosting, auto-deploy on git push |
| Code | GitHub | You own your code |

## Why Astro?

1. **Static output** — Generates pure HTML/CSS/JS, incredibly fast, easy to deploy
2. **Content-first** — Native Markdown content collections
3. **Zero JS by default** — No unnecessary JavaScript framework overhead
4. **Extensible** — Add React/Vue/Svelte islands where interactivity is needed

## How Bilingual Support Works

Astro 5 has native i18n routing:

```
src/pages/
├── zh/          # Chinese pages
│   ├── index.astro
│   ├── about.astro
│   └── blog/
└── en/          # English pages
    ├── index.astro
    ├── about.astro
    └── blog/
```

UI strings are managed centrally in `src/i18n/ui.ts`. Adding new translations is just editing one file.

## How to Update Content

Writing a blog post is as simple as:

```bash
# 1. Create a new .md file in src/content/blog/en/
# 2. Fill in the frontmatter (title, date, tags, etc.)
# 3. Write the content
# 4. git push
# → The site updates automatically!
```

That's it. No dependency on any specific editing tool.
