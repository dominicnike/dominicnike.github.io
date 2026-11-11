# Dominic Iortyer — Personal Blog

Personal blog built with [Astro](https://astro.build) and hosted on GitHub Pages at <https://dominicnike.github.io>.

## Features

- Dark / light theme toggle
- Home hero with stats, latest posts and topics
- Paginated blog list with sidebar (author + popular tags)
- Post pages with table of contents, reading time, progress bar, related posts and share links
- Tags pages, client-side search (`Ctrl+K`), RSS feed (`/rss.xml`) and sitemap

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
```

## Writing a post

Add a Markdown file to `src/content/blog/`:

```md
---
title: 'My Post'
description: 'Short summary'
pubDate: 2026-11-11
tags: ['Azure', 'DevOps']
heroImage: '/images/my-cover.png'   # optional, place file in public/images
draft: false
---

Content here...
```

Site-wide settings (name, role, socials, nav) live in `src/consts.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`. In the repo, go to
**Settings → Pages → Build and deployment → Source: GitHub Actions**.
