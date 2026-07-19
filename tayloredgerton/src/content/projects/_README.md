# Project Writeups

Place markdown files in this directory to create project detail pages.

## Naming convention

Use kebab-case: `my-project-name.md`

## Frontmatter template

```yaml
---
title: "Project Title"
description: "A short description of the project."
tags: ["tag1", "tag2"]
date: 2026-01-15
external_url: "https://github.com/example/repo"
draft: false
---
```

## Fields

| Field          | Required | Description                                          |
|----------------|----------|------------------------------------------------------|
| `title`        | Yes      | Project title                                        |
| `description`  | Yes      | Short description                                    |
| `tags`         | No       | Array of tag strings                                 |
| `date`         | No       | Project date (YYYY-MM-DD)                            |
| `external_url` | No       | Link to external resource (shown as "View project ↗")|
| `draft`        | No       | Set to `true` to hide from production builds         |

## Notes

- Files starting with `_` (like this README) are ignored by the content collection.
- The homepage project list is hardcoded — these pages are for longer writeups.
