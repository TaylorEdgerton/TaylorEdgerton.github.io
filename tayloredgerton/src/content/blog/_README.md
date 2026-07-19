# Blog Posts

Place markdown files in this directory to create blog posts.

## Naming convention

Use kebab-case: `my-post-title.md`

## Frontmatter template

```yaml
---
title: "Post Title"
description: "A short description for the listing page."
date: 2026-01-15
tags: ["tag1", "tag2"]
draft: false
---
```

## Fields

| Field         | Required | Description                                      |
|---------------|----------|--------------------------------------------------|
| `title`       | Yes      | Post title                                       |
| `description` | Yes      | Short description shown on the blog listing page |
| `date`        | Yes      | Publication date (YYYY-MM-DD)                    |
| `tags`        | No       | Array of tag strings                             |
| `draft`       | No       | Set to `true` to hide from production builds     |

## Notes

- Files starting with `_` (like this README) are ignored by the content collection.
- Draft posts are visible during `npm run dev` but excluded from `npm run build`.
