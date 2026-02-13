# Modern Next.js Blog Platform

A professional, feature-rich blog application built with Next.js 14+, Tailwind CSS, and Markdown. Designed for performance, SEO, and great reading experiences.

## Features

- **Next.js 14+ App Router**: Built on the latest React Server Components architecture.
- **Markdown-based Content**: Write posts in standard Markdown with comprehensive frontmatter support.
- **Dynamic Search & Filtering**: Real-time search and tag filtering for easy content discovery.
- **Rich Metadata**: Support for tags, authors, and dates.
- **Smart Features**: Automatic reading time calculation for every article.
- **Modern UI**: Professional typography, responsive design, and polished components tailored with Tailwind CSS.
- **SEO Ready**: Optimized metadata and semantic HTML structure.

## Project Structure

```bash
app/
	globals.css         # Global styles and Tailwind directives
	layout.tsx          # Root layout with Navbar and Footer
	page.tsx            # Modern Homepage with Featured Posts
	blog/
		page.tsx          # /blog – Searchable list of all posts
		[slug]/
			page.tsx        # /blog/[slug] – Article detail page
			loading.tsx     # Loading UI
components/
	BlogList.tsx        # Client-side search and filter logic
	Navbar.tsx          # Responsive navigation
	PostCard.tsx        # Feature-rich post card component
lib/
	posts.ts            # content logic: parsing, reading time, sorting
content/
	posts/              # Markdown content files
```

## Markdown Format

Posts are stored in `content/posts`. Each file supports rich frontmatter:

```md
---
title: "Advanced Next.js Patterns"
date: "2026-02-20"
description: "A deep dive into server actions."
tags: ["Next.js", "React", "Web Dev"]
author: "Sarah Engineer"
---

# Your Content Here
```

## Installation

```bash
npm install
```

## Development

Start the dev server:

```bash
npm run dev
```

The app will run at http://localhost:3000.

## Build and Production

Build the app:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## How It Works

- `lib/posts.ts` uses Node `fs` and `path` to read markdown files from `content/posts`.
- `gray-matter` parses the frontmatter (title, date, description).
- `remark` + `remark-html` convert the markdown body into HTML.
- `/blog` (`app/blog/page.tsx`) calls `getSortedPostsData()` to list posts and renders them using `PostCard`.
- `/blog/[slug]` (`app/blog/[slug]/page.tsx`) uses `generateStaticParams()` and `getPostData(slug)` for static generation, then renders the full HTML content.
- `notFound()` is called for invalid slugs to serve a 404 page.
- Tailwind CSS + Typography provide a clean, responsive UI.

## Adding a New Post

1. Create a new file in `content/posts`, e.g. `my-new-post.md`.
2. Add frontmatter (title, date, description) and markdown content.
3. Run `npm run dev` (or just refresh if already running) and visit `/blog` – your new post will appear in the list and under `/blog/my-new-post`.

