# SESSION HANDOFF — Ted's Voice Academy

**Date written:** February 6, 2026
**Written by:** Claude Code session 14b (Opus 4)
**Site status: LAUNCHED & LIVE** at https://tedsvoiceacademy.com

---

## Start Here

1. Read `CLAUDE.md` — project rules, design system, content rules, structure
2. Read `PROJECT_BACKLOG.md` — the living to-do list with all open items
3. Read this file — for current state and session-specific context

---

## CRITICAL: How Ted Wants to Work

**Do NOT start implementing changes without Ted's explicit approval.** Ted is the decision-maker. The workflow is:

1. **Present** what you recommend and why
2. **Discuss** with Ted — he may have questions, concerns, or a different direction
3. **Get explicit approval** before writing any code
4. **Implement** only after Ted says go

This applies to everything — quick fixes, visual changes, SEO tweaks, all of it. Ted wants to be on the same page before work begins. He is relying on expert recommendations but reserves the right to approve, modify, or reject any proposed change.

**IMPORTANT: Update handoff docs incrementally.** After each significant task completion (not just at session end), update these handoff documents to reflect progress. This was a process correction from Ted in session 8.

**IMPORTANT: Track token usage.** When approaching 60-70% token usage, stop current work, update handoff docs, and ensure a clean checkpoint. Ted checks in regularly on this — it's standard operating procedure.

---

## What Session 14 + 14b + 14c Accomplished

### .gitignore (Session 14)
- Created `.gitignore` at project root (node_modules/, dist/, .astro/, .DS_Store, nul)

### Card Grid Symmetry Fixes (9 grids across 7 pages — Sessions 14 + 14b)
- **singing.astro** `.cards-grid`: `auto-fit` → `repeat(2, 1fr)` for 2x2
- **index.astro** `.paths-grid`: `auto-fit` → `repeat(3, 1fr)` for 3 inline
- **ensembles.astro** `.help-grid`: Added 6th card + `repeat(3, 1fr)` for 2x3
- **pricing.astro** `.pricing-grid`: `auto-fit` → `repeat(3, 1fr)`
- **pricing.astro** `.pricing-grid.two-col`: Added `repeat(2, 1fr)` override (was inheriting 3-col from parent, leaving column 3 empty) **(Session 14b fix)**
- **blog.astro** `.categories-grid`: `repeat(3, 1fr)` + responsive breakpoints
- **pass-profile.astro** `.future-items`: `repeat(3, 1fr)` + 600px mobile breakpoint
- **pass-profile.astro** `.differentiators`: `auto-fit` → `repeat(2, 1fr)` for 2x2 **(Session 14b fix)**
- **pass-profile.astro** `.applications-grid`: `auto-fit` → `repeat(2, 1fr)` for 2x2 **(Session 14b fix)**
- **speaking.astro** `.how-grid`: `auto-fit` → `repeat(2, 1fr)` for 2x2 **(Session 14b fix)**

### Icon Visibility Fix (Session 14b)
- `.icon-inline` in global.css now has explicit `width: 20px; height: 20px;`
- Root cause: global SVG reset (`svg { display: block; height: auto; }`) was overriding HTML width/height attributes on the inline SVGs
- This fix makes all 64 icons visible

### Trademark Symbols (Session 14b — 38 instances across 14 files)
- Added ™ to PASS Profile, AVF, and Adaptive Voice Framework
- Strategy: Key headings + first body mention per page
- NOT added to: URLs, CSS classes, alt text, schema/JSON-LD, email addresses
- Files: pass-profile, avf, singing, speaking, pricing, workshops, about, index, faq, terms, vocal-health, contact, Header, Footer

### Photo Processing & Placement (3 photos — Session 14)
- `ted-workshop-teaching.webp` (13 KB), `ted-entrepreneur-award.webp` (271 KB), `ted-directing-chorus-stage.webp` (48 KB)
- Placed on workshops, about, ensembles pages

### Lucide Iconography (64 icons across 10 pages — Session 14)
- `.icon-inline` CSS utility in global.css
- Inline SVG icons (20x20, stroke-based, `aria-hidden="true"`, `currentColor`) on card H3 headings

### Hero Images on Service Pages (Session 14c)
- Converted 3 new photos from Ted to WebP: `hero-singing-lesson.webp` (68 KB), `hero-speaking.webp` (27 KB), `hero-ensembles.webp` (79 KB)
- Converted text-only heroes on Singing, Speaking, and Ensembles to `hero-grid` layout (text left, image right)
- Added entrance animations matching Homepage/About pattern (text slides in from left, photo fades/scales)
- Responsive: stacks to single column below 900px; `prefers-reduced-motion` respected
- **Pages now with hero images (7):** Homepage, About, AVF, PASS Profile, Singing, Speaking, Ensembles
- **Pages still text-only heroes:** Pricing, Workshops, Vocal Health, Blog, FAQ, Contact (plus Terms, Privacy, Success which don't need images)

---

## Decisions Made This Session

1. **Card symmetry approach:** Explicit column counts (`repeat(N, 1fr)`) instead of `auto-fit` to eliminate orphan cards at all viewport widths
2. **Ensembles 5 to 6 cards:** Added "Show preparation" to make a clean 3x2 grid instead of 3+2 orphan
3. **Photo selection:** Chose 3 from 48 unused based on content relevance + page needs (workshops had zero photos, about needed ceremony shot, ensembles needed group performance shot)
4. **Icon approach:** Inline SVG (no library dependency), `currentColor` inheritance, decorative-only (`aria-hidden`)
5. **Blog 5-card layout:** 3-col at desktop, 2-col at tablet with 5th card centered full-width, 1-col at mobile
6. **Trademark strategy (Session 14b):** ™ on key headings (H1/H2/H3) + first body text mention per page. Not on every instance — that would clutter the reading experience

---

## What's Next

### Tier 1 — Next Priorities:
- [ ] **CMS (Decap CMS)** — **Ted's #1 near-term priority.** He needs an easy way to add blog posts and modify site content independently. Critical enabler.
- [ ] **E-Commerce (Lemonsqueezy)** — Needed for Vocal Fit digital product sales. Also enables future product offerings.
- [ ] **Review 41 untracked images** — Decide placement/removal with Ted (see Feb 16 session notes below)
- [ ] **Track AI referral traffic in GA4** — Custom channel grouping for ChatGPT, Perplexity, etc.

### Completed:
- [x] **Blog system** — ✅ DONE (Feb 16). 24 posts, routing, layout, SEO optimization, interactive category filtering.
- [x] **Vocal Health page** — ✅ DONE (Feb 16). All 4 "coming soon" placeholders replaced with real content.
- [x] **Inventory session** — ✅ DONE (Feb 7). See `HANDOFF_RESOURCE_INVENTORY.md`.

### Tier 2:
- [ ] **Per-page OG images** — Branded social sharing images for individual pages
- [ ] **Related posts on blog pages** — Add related posts section to individual blog post pages
- [ ] **Remaining hero images** — Workshops, Vocal Health, Pricing, Blog, FAQ, Contact still have text-only heroes. Ted has `Ted Quartet coach.png` and `studio lesson2.png` available for future use.

### Tier 3 — Visual Polish:
- [ ] **Hero parallax effect** — CSS-only parallax on hero photos
- [ ] **Varied section layouts** — Numbered steps, alternating left-right, timelines

### Discussion Items:
- Hero photos for pages that currently lack them (Pricing, Contact, Vocal Health, FAQ)
- Remaining unused photos (45+ in public/images/) — consider cleanup or placement

---

## Verified Current State (as of Session 14)

### Git & Deploy
- **GitHub repo:** https://github.com/tedsvoiceacademy/teds-voice-academy
- **Local project path:** `H:\OneDrive\AI Projects\TVA AI Projects\TVA Webstie 4.0\teds-voice-academy-main\teds-voice-academy-main\`
- **Live site:** https://tedsvoiceacademy.com
- **Netlify URL:** https://deft-baklava-b2eb2e.netlify.app/
- **Build status:** Clean — 42 pages built (18 route pages + 24 blog posts), zero errors
- **Latest commits:** `877a11d` (handoff docs), `94604ba` (vocal health page), `78c1677` (blog SEO + filtering), `a9bd0ef` (blog system)
- **Previous commits:** `06271f2` (14c: hero images), `366a679` (14b: icon fix, grids, TM), `d6105fb` (14: icons, symmetry, photos)

### What's Live (42 Pages)
Homepage, Contact, Singing, Speaking, Ensembles, About, Pricing, AVF, PASS Profile, Workshops, Vocal Health Hub, Blog (landing + 24 individual posts), FAQ, Success, Privacy, Terms, Shop, Intonation Lab

### Analytics
- **GA4:** Live, Measurement ID `G-ZDX6WPT6CZ`. Script in BaseLayout.astro `<head>` with `is:inline` directive.
- **Google Search Console:** Verified for tedsvoiceacademy.com. Sitemap submitted.

### Netlify Forms — WORKING
- **Forms detected:** contact, workshop-inquiry, blog-newsletter, newsletter-footer
- **Email notifications:** Configured to ted@tedsvoiceacademy.com for all forms

### Key Files Modified This Session
- `src/styles/global.css` — `.icon-inline` utility class + width/height fix
- `.gitignore` — NEW file
- `public/images/ted-workshop-teaching.webp` — NEW (13 KB)
- `public/images/ted-entrepreneur-award.webp` — NEW (271 KB)
- `public/images/ted-directing-chorus-stage.webp` — NEW (48 KB)
- 14 page files modified: all pages got either grid fixes, icons, photos, or TM symbols
- `src/components/Header.astro` + `src/components/Footer.astro` — TM in nav labels
- `public/images/hero-singing-lesson.webp` — NEW (68 KB, from studio lesson.png)
- `public/images/hero-speaking.webp` — NEW (27 KB, from Ted speaking.png)
- `public/images/hero-ensembles.webp` — NEW (79 KB, from Ted Ensemble.png)
- `src/pages/singing.astro`, `src/pages/speaking.astro`, `src/pages/ensembles.astro` — hero-grid layout + hero images

### Images in public/images/
Same as Session 13, plus:
- `ted-workshop-teaching.webp` — Ted teaching in studio (from "8 Ted Portrait Teaching.png")
- `ted-entrepreneur-award.webp` — Ted at award ceremony (from "Ted Lacey Entrepreneur OTY 2025 - 1.jpg")
- `ted-directing-chorus-stage.webp` — Ted directing chorus on stage (from Facebook photo)

---

## Technical Architecture Notes

### Icon System (Session 14 + 14b fix)
- **Approach:** Inline SVG icons, no external library or component
- **CSS:** `.icon-inline` in global.css — `display: inline-block`, `width: 20px`, `height: 20px`, `vertical-align: -0.15em`, `margin-right: 0.5rem`
- **IMPORTANT:** The explicit CSS `width` and `height` are required because the global SVG reset (`svg { display: block; height: auto; }`) overrides HTML attributes. Without CSS dimensions, icons are invisible.
- **Size:** 20x20px with 24x24 viewBox (Lucide standard)
- **Color:** `stroke="currentColor"` — inherits text color automatically (white in dark sections, navy in light sections)
- **Accessibility:** `aria-hidden="true"` — icons are decorative, text carries meaning
- **Total:** 64 icons across 10 pages

### Trademark System (Session 14b)
- **Terms:** PASS Profile™, AVF™, Adaptive Voice Framework™
- **Strategy:** ™ on key headings (H1/H2/H3) + first body mention per page
- **Excluded from:** URLs/hrefs, CSS class names, alt text, JSON-LD schema, email addresses
- **Coverage:** 38 instances across 14 files (12 pages + Header + Footer)
- **Legal pages:** terms.astro has ™ in IP section — important for trademark protection

### Card Grid System (Session 14)
- **Previous approach:** `repeat(auto-fit, minmax(Xpx, 1fr))` — caused orphan cards at intermediate widths
- **New approach:** Explicit column counts with responsive breakpoints
- **Pattern:** `repeat(N, 1fr)` at desktop, `repeat(2, 1fr)` at tablet, `1fr` at mobile
- **Breakpoints:** 768px (tablet) and 480px (small mobile) where needed

### Font System (Session 13)
- **Main brand:** Inter (body) + Playfair Display (headings) — `@font-face` in global.css
- **AVF sub-brand:** Cinzel + Cormorant Garamond — `@font-face` in avf.astro scoped styles
- **CSS vars:** `--font-body`, `--font-heading`, `--font-avf-accent`
- **Zero external font requests** — no Google Fonts CDN dependency

### Section Divider System (Session 13)
- **Component:** `src/components/SectionDivider.astro`
- **SVG approach:** Two paths per divider — fill path (color transition) + stroke path (gold accent line)
- **Stroke:** `var(--color-gold-bright)`, stroke-width 2, 50% opacity, `vector-effect: non-scaling-stroke`
- **Placement strategy:** Only at dark-to-light transitions (navy/teal to white/off-white/cream)
- **viewBox:** `0 0 1440 64`, `preserveAspectRatio="none"` for responsive full-width

### Grain Texture System (Session 11)
- **Working approach:** CSS multiple backgrounds with `background-blend-mode: soft-light`
- **Pattern:** Each dark section's background property includes noise PNG in scoped `<style>`
- **noise-texture.png** tiles seamlessly at any size; `background-size: 200px 200px`

### Scroll Reveal System (Session 11)
- **CSS:** `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-stagger` in `global.css`
- **JS:** IntersectionObserver in `BaseLayout.astro` (runs on every page automatically)

---

## Domain Setup — WORKING
- **Domain registrar:** Squarespace (registration only)
- **DNS management:** Netlify DNS
- **Primary domain:** `tedsvoiceacademy.com` (bare domain, no www)
- **SSL:** Let's Encrypt, auto-renews

### DNS Reference (MANAGED BY NETLIFY DNS)
| Host | Type | Data | Purpose |
|------|------|------|---------|
| `@` | A/ALIAS | (Netlify managed) | Bare domain -> Netlify site |
| `www` | CNAME | (Netlify managed) | www -> Netlify site |
| `pass` | CNAME | `cheery-elf-ded263.netlify.app` | PASS Profile app |
| `@` | MX | (5 Google MX records) | Email — DO NOT TOUCH |
| Various | TXT | DKIM, DMARC, SPF records | Email auth — DO NOT TOUCH |

**CRITICAL:** Do NOT add redirect rules in `netlify.toml` between bare and www domains. This caused an infinite redirect loop in session 6. Netlify domain settings handle this automatically.

---

## Environment
- **Platform:** Windows
- **Git:** v2.52.0
- **Node/npm:** v24.12.0 (sharp available via Astro dependency)
- **Ted's Google account:** ted@tedsvoiceacademy.com (Google Business Standard)

---

## How to Write the Next Handoff

When ending a session, create/update this file with:

1. **Verified facts only** — don't copy planned actions as if they happened.
2. **Git state** — latest commit hash, sync status, uncommitted changes.
3. **Known issues** — anything discovered but not fixed.
4. **What was done** — brief list of accomplishments.
5. **What was NOT done and why** — avoid re-investigating decided deferrals.
6. **Suggested priorities** — what makes sense to do next.
7. **Update PROJECT_BACKLOG.md** — move completed items, add new discoveries.
8. **Update CLAUDE.md** — if structural or status changes happened.
9. **Update incrementally** — don't wait until session end. Update after each significant task.
10. **Track token usage** — when approaching 60-70%, stop and checkpoint.

---

*This handoff replaces the previous version. Keep updating it at the end of each session.*
---

## Session: February 11, 2026 - Blog Migration Attempt (Partial)

Created migration tooling at `scripts/blog-migration/` and Astro content collection schema. Only 4 of 24 posts captured due to WebWave CMS limitations. Ted later scraped all 24 posts manually using Chrome extension in a separate session (stored in `scraped-blogs/`).

---

## Session: February 16, 2026 - Blog System + SEO + Vocal Health Page

### Completed This Session

**Vocal Health Page — ALL PLACEHOLDERS REPLACED (commit `94604ba`):**
- **Home Care & Remedies:** Ted's gargle recipe (8 ingredients with instructions), Dr. Gould's Gargle (clinical recipe with 7-day protocol), tea/honey/lozenge tips, cross-link to hydration section
- **SOVT Tools & Techniques:** Why SOVT works, 4 exercises explained (humming, lip trills, straw phonation, Lax Vox), 5-minute daily routine, straw selection guide, usage guidance (warm-up/cool-down/recovery/maintenance)
- **Vocal Fit:** Product preview (LOW/HIGH range MP3 bundles, 8 exercises, companion PDF, aging voice modifications), "coming to the store" notice with contact/newsletter links
- **Articles & Resources:** 6 curated Vocal Health blog post links + "Explore all articles" link to /blog
- Updated last-modified date to Feb 16, 2026
- Source content: Ted's gargle PDFs from `H:\OneDrive\Ted's Voice Academy\Vocal Health\`, SOVT docs extracted from WEBSITE-READY via PowerShell Word COM

**Blog System — FULLY BUILT:**
- Deleted all 10 old files from `src/content/blog/` (6 non-blog page dumps + 4 messy WebWave scrapes)
- Created 24 clean blog posts from scraped content with proper Astro frontmatter
- Created `src/layouts/BlogPostLayout.astro` — individual post layout with hero, categories, tags, CTA
- Created `src/pages/blog/[...slug].astro` — dynamic routing for all posts
- Moved `src/pages/blog.astro` → `src/pages/blog/index.astro` (required for Astro routing)
- Copied 24 hero images to `public/images/blog/`
- Build: 40 pages, zero errors
- Committed and pushed to GitHub: blog system deployed to Netlify

**SEO & Category Optimization:**
- Audited all 24 posts for category balance, tag standardization, and SEO descriptions
- Rebalanced categories: Added `Vocal Health` to posts 09, 11, 12, 14; Added `Performance` to post 05; Changed post 19 from Technique to Performance
- Standardized tags across all posts: `voice coaching` → `vocal coaching`, `resonance` → `vocal resonance`, `authenticity` → `authentic voice`, `vocal techniques` → `vocal technique`
- Added local SEO tags (`olympia wa`) to posts 08, 22, 24
- Improved SEO descriptions for posts with weak or overly long descriptions
- All descriptions optimized for 120–160 character range

**Blog Landing Page — Interactive Category Filtering:**
- Converted static category cards to clickable `<button>` filter elements
- Added post count badges on each category card (computed from actual data)
- Added `data-categories` JSON attributes to each post card
- Client-side JavaScript filtering: click category → filter posts, click again → show all
- Active state styling: navy background, white text, gold count badge
- Filter indicator bar with "× Show all" clear button
- No-results fallback message
- Smooth scroll to posts grid when filtering

### Category Distribution (Final)
| Category | Count | Posts |
|----------|-------|-------|
| Technique | 13 | 04, 05, 06, 07, 09, 10, 11, 12, 14, 18, 20, 21, 23 |
| Vocal Health | 8 | 03, 09, 11, 12, 14, 20, 21, 22 |
| Performance | 7 | 01, 05, 08, 13, 15, 19, 22 |
| Mindset & Practice | 7 | 02, 08, 13, 15, 16, 17, 24 |
| For Professionals | 5 | 06, 16, 17, 19, 24 |

### Untracked Files / Images — STATUS FOR NEXT SESSION

**41 Untracked Images in `public/images/`:**
These are images from earlier sessions that are NOT referenced by any source file in the codebase. The site uses differently-named optimized WebP versions instead. A discussion was started in a previous session about which might be useful (placement on site pages, vocal health section, etc.) but it was **not memorialized** in handoff docs and the decision context was lost.

**Action needed next session:** Review these 41 images with Ted to decide:
- Which to place on site pages (vocal health, workshops, etc.)
- Which are redundant/unused and should be removed
- Whether any should replace current images

The images include original source photos (PNG/JPG), various WebP conversions, and stock/promotional images. Run `git status` to see the full list.

**Other Untracked/Modified Files:**
- `HANDOFF_INVENTORY_SESSION.md`, `BRIEFING_FROM_INVENTORY_SESSION.md`, `HANDOFF_RESOURCE_INVENTORY.md` — Docs from the Feb 7 inventory session. Reference material, not code.
- `src/pages/index.astro` — Has a modified Elfsight review widget ID (changed from `67a14...` to `67a03...`). This appears to be an intentional update Ted made.
- Several core files (BaseLayout, global.css, components) show as modified with line-ending changes only (CRLF normalization). No functional changes.

**Recommendation:** Commit the handoff docs and the index.astro widget change in a cleanup commit. The 41 unused images should NOT be committed until Ted decides what to do with them.

### Git State
- **Build:** Clean — 42 pages, zero errors
- **All session work pushed to GitHub:** `a9bd0ef` → `78c1677` → `5473361` → `94604ba` → `877a11d`
- **Remaining uncommitted:** CLAUDE.md, README.md, index.astro (Elfsight widget ID change), tsconfig.json, favicon.svg, docs/ folder — these are pre-existing modifications from earlier sessions, not from Feb 16 work. Review and commit in next session.

### What's Next

**Ted's Near-Term Priorities (updated Feb 16):**

1. **CMS for Site Independence (Ted's #1):**
   - Ted needs an easy way to change/modify the site, especially the blog (adding new posts).
   - Decap CMS is the leading candidate — provides a GUI editor that commits to GitHub.
   - This is a **critical enabler** — Ted should be able to add blog posts without a developer session.

2. **E-Commerce for Digital Products:**
   - Vocal Fit will be sold from the site. Need to choose and integrate a payment/delivery solution.
   - Lemonsqueezy chosen as platform. Also relevant for any future products Ted wants to sell.
   - Once live, update the Vocal Fit section on vocal-health.astro to link to the store.

3. **41 Untracked Images:**
   - Review with Ted for placement/removal decisions (see notes below).

**Completed This Session (Feb 16):**
- [x] Blog system fully built and deployed (24 posts, SEO, filtering) — commit `78c1677`
- [x] Vocal Health page — all 4 placeholders replaced with real content — commit `94604ba`
- [x] Handoff docs + backlog updated — commits `5473361`, `877a11d`

**Blog Enhancements (Tier 2):**
- [ ] Related posts section on individual blog post pages
- [ ] Pagination on blog landing if post count grows

**Site-wide (from backlog):**
- [ ] Track AI referral traffic in GA4
- [ ] Remaining hero images for text-only hero pages

---

## Session: February 21, 2026 - Session 12 (Shop, Intonation Lab, Breadcrumbs, BlogPosting Schema)

### Completed This Session

**Shop Hub Page (`/shop`):**
- New shop page with 5 products displayed: 3 live (AVF book, PASS Profile, Intonation Lab), 2 coming-soon (Vocal Fit LOW, Vocal Fit HIGH)
- Nav and footer updated with Shop link

**Intonation Lab Product Page (`/intonation-lab`):**
- Full product page with hero section, features breakdown, pricing details, and FAQ accordion
- Nav and footer updated with Intonation Lab link

**Homepage Ecosystem Section:**
- Added Intonation Lab card to the ecosystem grid
- Updated to 3x2 grid layout

**BlogPosting JSON-LD Schema:**
- BlogPosting structured data added to `BlogPostLayout.astro`
- Auto-applies to all 24 blog posts
- Includes headline, datePublished, author, publisher, image, description

**Breadcrumb Navigation + Schema:**
- Created `Breadcrumb.astro` component with visual breadcrumb navigation
- BreadcrumbList JSON-LD schema included in the component
- Deployed on all 17 interior pages and all 24 blog posts

**CLAUDE.md Updated:**
- Page count updated to 18 route pages (was 16)
- Session 12 added to session log

**Git:**
- 3 commits pushed to GitHub (shop + intonation lab, screenshots, breadcrumbs + schema)
- Build: 42 pages clean (18 route pages + 24 blog posts)

### What's Next

**Immediate priorities:**
- [ ] **Related posts on blog pages** — Add related posts section to individual blog post pages
- [ ] **CMS (Decap CMS)** — Ted's #1 near-term priority for site independence
- [ ] **E-Commerce (Lemonsqueezy)** — Needed for Vocal Fit digital product sales

**Tier 2:**
- [ ] Per-page OG images
- [ ] Remaining hero images for text-only hero pages
- [ ] Track AI referral traffic in GA4
