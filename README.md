# Next.js Markdown Blog

A complete Next.js 14+ blog application using the App Router and Markdown files as content. Posts are stored in `content/posts` as `.md` files with frontmatter and rendered to HTML using `remark`.

## Features

- Next.js 14+ App Router (`app/` directory)
- Blog posts as Markdown files in `content/posts`
- Frontmatter support via `gray-matter` (title, date, description)
- Markdown to HTML via `remark` + `remark-html`
- Static generation with `generateStaticParams`
- 404 handling with `notFound()` for invalid slugs
- Clean UI with Tailwind CSS + Typography plugin
- Reusable `PostCard` component

## Project Structure

```bash
app/
	layout.tsx          # Root layout with Navbar and global styles
	page.tsx            # Homepage with link to Blog
	blog/
		page.tsx          # /blog – list all posts
		[slug]/
			page.tsx        # /blog/[slug] – blog detail page
			loading.tsx     # Loading state for blog detail
components/
	Navbar.tsx          # Simple navbar
	PostCard.tsx        # Reusable card for each post
lib/
	posts.ts            # Helpers to read/parse Markdown posts
content/
	posts/
		first-post.md
		second-post.md
```

## Markdown Format

Each post in `content/posts` must be a `.md` file with frontmatter:

```md
---
title: "My First Blog"
date: "2026-01-01"
description: "This is a sample blog post"
---

# Blog content here
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

