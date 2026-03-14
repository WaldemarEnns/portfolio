# Portfolio Project Prompt Template

Use this template to ask Claude to generate a ready-to-use project file for `content/projects/`.

---

## Collection Schema

Each project file lives in `content/projects/` and uses frontmatter only (no body content needed).

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | yes | Short project name |
| `description` | string | yes | 1–2 sentence summary shown on the card |
| `tags` | string[] | yes | Technologies used (shown as badges) |
| `url` | string | no | External link (shows "View Project" button) |
| `image` | string | no | Path to a preview image (reserved for future use) |
| `featured` | boolean | no | Mark as featured project |

---

## Fill in Your Project Details

Answer the following questions, then paste everything into the prompt below.

- **Project name:**
- **What does it do?** (1–2 sentences)
- **Technologies used:** (comma-separated)
- **Live URL:** (optional)
- **Is it a featured project?** (yes / no)

---

## Prompt to Claude

```
Generate a nuxt-content project file for my portfolio.

Here are the details:
- Title: [PROJECT NAME]
- Description: [WHAT IT DOES]
- Tags: [TECH 1, TECH 2, TECH 3]
- URL: [OPTIONAL URL or "none"]
- Featured: [true or false]

Output only the raw markdown file content (frontmatter only, no body), ready to save as `content/projects/my-project.md`.
```

---

## Example Output

```md
---
title: "Invoice Generator SaaS"
description: "A self-service invoicing platform for freelancers with PDF export, multi-currency support, and Stripe integration."
tags: ["Laravel", "Vue", "TypeScript", "Stripe"]
url: "https://invoiceapp.example.com"
featured: true
---
```

Save the output as `content/projects/<slug>.md` — no code changes needed, the section updates automatically.
