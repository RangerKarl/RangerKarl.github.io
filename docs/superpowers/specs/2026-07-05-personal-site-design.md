# Personal Site Design Spec

**Date:** 2026-07-05  
**Site:** www.rangerkarl.llc (GitHub Pages, `RangerKarl.github.io`)  
**Author:** Khairil Kasimir Isa

## Goal

Use this repository as a moderate, developer-focused personal presence: showcase backend/infrastructure and full-stack skills, publish occasional technical writing, and support an emerging career transition — without overselling or dedicated hobby branding.

## Audience & Tone

**Primary audience:** Other developers and technical peers (not recruiters-first).

**Tone:**
- Conversational, colleague-to-colleague
- Show work: repos, configs, tradeoffs, lessons learned
- Career exploration framed as learning-in-public
- Avoid buzzwords, résumé-speak, and exhaustive skill dumps

**Posting cadence:** Starting at a few posts per year (A), moving toward roughly monthly (B) as career exploration intensifies.

## Hobbies Policy

No dedicated hobbies nav item, homepage section, or page. The `hobbies` blog tag is reserved for organic posts only. Default tags remain technical.

## Information Architecture

### Navigation

```
Home  |  Blog  |  Projects  |  About  |  Contact
```

Contact may live as a footer section rather than a full page if content is minimal (email + GitHub + LinkedIn).

### Pages

| Page | Purpose |
|------|---------|
| **Home** (`index.html`) | Dev-focused intro, latest posts, featured projects, about teaser |
| **Blog index** (`blog/index.html`) | Reverse-chronological post list with title, date, tags, excerpt |
| **Blog post** (`blog/<slug>.html`) | Individual articles with code-block styling |
| **Projects** (`projects.html`) | Curated work in two groups (see below) |
| **About** (`about.html`) | Background, skill tags, optional "Currently exploring" |

### Homepage Sections (top → bottom)

1. **Hero** — One line on building reliable backend/infra and full-stack apps; optional second line on current focus
2. **Latest posts** — Up to 3 most recent entries linking to full posts
3. **Featured projects** — 3–4 cards with technical blurbs, stack tags, repo/demo links
4. **About teaser** — 2 sentences + link to About page
5. **Footer** — Copyright, email, GitHub, LinkedIn, and disclosure footnote (see below)

### Projects Page Structure

Two sections with headings (single page, not separate sites):

1. **Infrastructure & backend** — CI/CD, automation, APIs, ops tooling, homelab, etc.
2. **Full-stack & apps** — Web apps, side projects, integrations

Each project card includes:
- Project name
- 1–2 sentences on the technically interesting aspect
- Stack tags
- Link to repository and/or live demo

### Blog Tags

Active: `devops`, `infrastructure`, `backend`, `full-stack`, `learning`  
Reserved: `hobbies` (use only when a post fits naturally)

### Suggested Early Post Types

- "How I set up X" (infra/DevOps)
- "Building Y: decisions and tradeoffs" (full-stack)
- "What I'm learning for Z" (career exploration, peer-friendly)
- Launch post: brief "why this site exists" or a small technical note

## Visual Design

Prioritize readability for developers over decorative flair.

| Element | Direction |
|---------|-----------|
| Palette | Dark header/footer; softened body background; single accent color (retain magenta or shift to calmer blue/teal) |
| Typography | System stack or web font such as Inter / Source Sans 3 |
| Blog | Monospace inline code; styled `<pre><code>` blocks; ~65–75 character line length for prose |
| Layout | Retain existing container + card grid; mobile-friendly |
| Dark mode | Out of scope for Phase 1 |

## Footer Disclosure

Every page footer includes a small, unobtrusive footnote so visitors are not misled about the author's front-end focus.

**Placement:** Below copyright and social links, smaller type, muted color.

**Copy (use on all pages):**

> † Site layout and styling were built with [Cursor](https://cursor.com) AI assistance. I'm primarily a backend and infrastructure developer — don't read too much into the front-end polish.

**Rationale:** The site should represent skills honestly. Peers may otherwise assume strong front-end/design chops from a polished static site; this footnote sets accurate expectations.

## Technical Approach

### Phase 1 — Multi-page static HTML (now)

- Plain HTML/CSS/JS, no build step
- Deploy via existing GitHub Actions workflow on push to `master`
- Keep `CNAME` for `www.rangerkarl.llc`
- Shared header/nav/footer copied across pages (acceptable duplication until Phase 2)

**File structure:**

```
/
├── index.html
├── about.html
├── projects.html
├── blog/
│   ├── index.html
│   └── welcome.html          # First launch post (slug TBD)
├── css/styles.css
├── js/main.js
├── CNAME
└── .github/workflows/static.yml
```

**Phase 1 deliverables:**

1. Replace all `[PLACEHOLDER]` tokens with real structure and draft copy
2. Multi-page site with consistent navigation
3. Blog index listing posts manually (newest first)
4. One launch blog post demonstrating code blocks and tag display
5. Projects page with two grouped sections
6. About page with bio, skill tags, optional "Currently exploring"
7. Footer contact: email, GitHub, LinkedIn only — remove unused social placeholders and phone unless explicitly desired
8. Footer disclosure footnote on every page (see Footer Disclosure section)
9. CSS pass: blog typography, code blocks, project cards, tag pills, footnote styling

**Minimum content to launch:**

| Item | Minimum |
|------|---------|
| Home | Real hero + intro copy |
| About | 2–3 paragraphs + skill tags |
| Projects | 2 entries (1 infra-ish, 1 app-ish) |
| Blog | 1 launch post |
| Contact | Email + GitHub + LinkedIn |

### Phase 2 — Eleventy + Markdown (trigger: ~post 3–4)

**Trigger:** Maintaining duplicated header/footer and hand-editing the blog index becomes tedious.

**Adds:**
- Markdown posts with YAML front matter (title, date, tags, excerpt)
- Shared layouts (eliminate nav/footer duplication)
- Auto-generated blog index
- RSS feed at `/feed.xml`

**Unchanged:** GitHub Actions deploy, custom domain.

## Out of Scope

Phase 1 and Phase 2 (until explicitly planned):

- Contact forms
- Analytics
- Comments
- Search
- Dark mode
- Dedicated hobbies section
- Jekyll, Astro, or external CMS
- Blog hosted elsewhere (Dev.to, Medium, etc.)

## Content Needed From Author

Before or during implementation, provide (draft copy is fine):

- [ ] Tagline / one-line professional identity
- [ ] About bio (2–3 paragraphs)
- [ ] Skill tags (infra/backend + full-stack focus)
- [ ] "Currently exploring" line (optional)
- [ ] 2+ projects: name, description, stack, repo URL
- [ ] Contact email
- [ ] GitHub profile URL
- [ ] LinkedIn profile URL
- [ ] First blog post topic or draft

## Success Criteria

- A developer peer can understand who Khairil is and what he builds within 2–3 minutes
- Site is shareable during career conversations with at least one blog post and two projects live
- Blog reading experience is comfortable for technical content (code blocks, tags)
- Deploy pipeline unchanged; site serves at www.rangerkarl.llc
- Clear path to Eleventy when posting frequency increases
- Footer discloses Cursor-assisted site design so visitors don't overestimate front-end expertise
