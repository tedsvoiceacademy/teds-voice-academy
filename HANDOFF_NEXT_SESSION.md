# SESSION HANDOFF — Ted's Voice Academy

**Date written:** February 5, 2026
**Written by:** Claude Code session 9 (Opus 4.5)
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

---

## Prioritized To-Do List — Session 10

Ted approved these items at the end of Session 9. They are ready to implement with no further discussion needed:

### Quick Wins (All Approved — Just Do Them)

1. **Update robots.txt for AI crawlers** — Add explicit Allow directives for GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Amazonbot. ~15 minutes.

2. **Create llms.txt file** — New file at `public/llms.txt` that tells AI search engines what the site is about in clean Markdown. Ted loved this idea. ~1 hour.

3. **Image optimization (automated batch)** — Convert all PNG images in `public/images/` to WebP format programmatically. Ted specifically asked if this could be automated (yes). The two award photos are already WebP. ~30 min.

4. **Rename award photos** — Current names work but could be cleaner:
   - `Business-Rate-Award-2025.webp` → `award-businessrate-top3-vocal-instructor-2025.webp`
   - `Ted-Lacey-Entrepreneur-OTY-2025---Trophy.webp` → `award-lacey-chamber-entrepreneur-of-year-2025.webp`
   Then add them to the About page.

5. **Add award photos to About page** — Display both awards with captions:
   - BusinessRate Top 3 Vocal Instructor, State of Washington (Google Reviews, July 2025)
   - Lacey South Sound Chamber Entrepreneur of the Year 2025

### Ready After Quick Wins

6. **Organizations & affiliations on About page** — Ted wants to scrape from tedsvoice.com "Proudly Connected With These Professional Associations" section. The old site didn't render via fetch (JavaScript-rendered). **Ted needs to provide the list of organizations.** From Session 9 context/screenshots, the known ones are:
   - BNI (Business Network International)
   - BRING! (Business Referrals and Interactive Networking Group)
   - Thurston County Chamber
   - Lacey South Sound Chamber
   - NATS (National Association of Teachers of Singing)
   - Barbershop Harmony Society
   - Evergreen District (Barbershop)
   - Mixed Barbershop (Harmony Association)
   **Ted needs to confirm this list and provide any logo files.** Alternatively, link to their websites and use text/badges instead of logos.

7. **Course + Service schema markup** — Add schema.org Course structured data to Singing, Speaking, Ensembles pages. Add Service schema listing each offering. Unlocks rich search results.

8. **OG default image** — Create a branded 1200x630px image for social media sharing previews. Currently referenced in BaseLayout but file doesn't exist. **Ted said he doesn't understand this yet — explanation was provided in Session 9:** When someone shares a link on social media/text, the platform shows a preview card with an image. That's the OG image.

### GEO/SEO Research (COMPLETED — Results Ready)

A comprehensive GEO/SEO strategy report was produced in Session 9. Key findings:

**Top GEO Recommendations:**
1. Create `llms.txt` file (approved — see quick wins above)
2. Update robots.txt for AI crawlers (approved — see quick wins above)
3. Write "answer capsule" summaries on key service pages (2-3 sentences AI engines can quote)
4. Add statistics, credentials, and verifiable facts throughout the site
5. Build multi-platform presence (YouTube, LinkedIn, Reddit)
6. Publish original content about the AVF Framework on the blog
7. Add publish/update dates to all content pages
8. Track AI referral traffic in GA4

**Top SEO Recommendations:**
1. Claim/optimize Google Business Profile (THE most important local SEO action)
2. Add Course + Service schema markup
3. Add Review/AggregateRating schema (when reviews exist)
4. Create OG images for social sharing
5. Internal linking strategy across all 16 pages
6. Voice search optimization (conversational Q&A content)
7. Self-host fonts (eliminate external DNS lookups)
8. Build review collection system
9. Add breadcrumb schema + visual breadcrumbs
10. Optimize for long-tail keywords

**Blog Content Strategy (12 topics prioritized):**
- Tier 1 (publish first): How to choose a voice teacher, Singing lessons for adults, What to expect at first lesson, Vocal health care, Voice teacher vs vocal coach
- Tier 2 (build depth): The AVF Framework explained, Vocal warmups for beginners, Musical theatre audition prep, Can you teach yourself to sing?, Speaking with confidence
- Tier 3 (local authority): Best performance venues in Olympia/Lacey, Singing groups in South Sound area

Ted said: "I will definitely want to fully maximize SEO (and GEO if useful) potential" and wants to start blog content in the next few days.

### Visual Polish (Ted Wants These ASAP)

These are discussion items — need collaborative exploration before implementation:
- Hero parallax effect
- Background textures & visual richness
- Section dividers, iconography
- Pull quotes/callout boxes
- Scroll-triggered animations
- Varied section layouts

**Approach:** Research best practices for text-heavy coaching/education sites. Show Ted reference examples. Get approval on specific design changes, then implement.

---

## Verified Current State (as of Feb 5, 2026)

### Git & Deploy
- **GitHub repo:** https://github.com/tedsvoiceacademy/teds-voice-academy
- **Latest pushed commit:** `a854277` on `main` branch
- **Session 9 commits:** `ad66433`, `8f1a8cd`, `8de3d77`, `609912d`, `40666b6`, `453719e`, `a854277`
- **Local project path:** `H:\OneDrive\AI Projects\TVA AI Projects\TVA Webstie 4.0\teds-voice-academy-main\teds-voice-academy-main\`
- **Live site:** https://tedsvoiceacademy.com
- **Netlify URL:** https://deft-baklava-b2eb2e.netlify.app/
- **Build status:** Clean — 16 pages built

### What's Live (16 Pages)
Homepage, Contact, Singing, Speaking, Ensembles, About, Pricing, AVF, PASS Profile, Workshops, Vocal Health Hub, Blog, FAQ, Success, Privacy, Terms

### Analytics (NEW — Session 9)
- **GA4:** Live, Measurement ID `G-ZDX6WPT6CZ`. Script in BaseLayout.astro `<head>` with `is:inline` directive.
- **Google Search Console:** Verified for tedsvoiceacademy.com (URL prefix method, auto-verified via same Google account). Sitemap submitted (`sitemap-index.xml`).
- **Looker Studio:** Deferred — needs a few days of GA4 data first.
- **Note:** GA4 Realtime wasn't showing Ted as active user at end of Session 9. Likely propagation delay or ad blocker. Should be working by now — verify.

### Netlify Forms — WORKING
- **Form Detection:** Enabled in Netlify UI
- **Forms detected:** contact, workshop-inquiry, blog-newsletter, newsletter-footer
- **Email notifications:** Configured to ted@tedsvoiceacademy.com for all forms
- **Success page:** `/success` — branded thank-you page with gold checkmark
- **Key files:** `public/form-detect.html`, `src/pages/success.astro`

### Images in public/images/
- `avf-book-cover.png`, `avf-book-photo.png`, `avf-pillars.png`, `avf-dials.png` (updated Session 8)
- `hero-ted.png`, `pass-bubble.png`, `pass-profile-logo.png`, `ted-headshot.png`, `tva-logo.png`
- **NEW:** `Business-Rate-Award-2025.webp`, `Ted-Lacey-Entrepreneur-OTY-2025---Trophy.webp` (Ted added, already WebP)

### Domain Setup — WORKING
- **Domain registrar:** Squarespace (registration only)
- **DNS management:** Netlify DNS
- **Primary domain:** `tedsvoiceacademy.com` (bare domain, no www)
- **www redirect:** `www.tedsvoiceacademy.com` -> redirects to bare domain
- **SSL:** Let's Encrypt, auto-renews

### Environment
- **Platform:** Windows
- **Git:** v2.52.0
- **GitHub CLI (`gh`):** Not installed — use standard `git` commands
- **Node/npm:** Available (Astro project)
- **Ted's Google account:** ted@tedsvoiceacademy.com (Google Business Standard)

---

## What Session 9 Accomplished (Feb 5, 2026)

### Hero Eyebrow Sizing (Commit `ad66433`)
- "MASTER YOUR VOICE" eyebrow text bumped from `1rem` to `1.25rem`
- H1 left unchanged at `clamp(2rem, 4vw + 1rem, 3rem)`
- CLAUDE.md hero pattern updated to match

### GA4 Setup (Commits `ad66433`, `8f1a8cd`)
- Added gtag.js snippet to BaseLayout.astro `<head>` section
- Fixed missing `is:inline` directive on script tag (Astro was bundling/stripping the external src)
- Measurement ID: `G-ZDX6WPT6CZ`

### Google Search Console (No commit — external setup)
- Verified tedsvoiceacademy.com via URL prefix method
- Auto-verified due to same Google account as GA4
- Sitemap `sitemap-index.xml` submitted
- Search Console was processing data at end of session

### Privacy Policy Update (Commit `ad66433`)
- Updated "Information collected automatically" section to disclose Google Analytics
- Updated "What I Don't Do" cookies section
- Added Google Analytics to Third-Party Services list

### Contact Form Tone Review (Commit `609912d`)
- H1: "Get Started" → "Let me know how I can help"
- Subtitle: warmed up to "I'd love to hear what you're working on..."
- Interest checkboxes: made optional (removed required)
- Experience level: made optional
- Goals label: "What are you hoping to work on? *" → "What's on your mind?" (optional)
- Kept optional "Anything else I should know?" freeform box
- Meta title "Contact & Schedule Lessons" kept for SEO value

### Handoff Doc Updates (Commits `8de3d77`, `40666b6`)
- Incremental updates after GA4/Search Console and contact form tasks

### GEO/SEO Research (No commit — research output)
- Comprehensive strategy report produced with 8 GEO recommendations, 10 SEO improvements, schema additions, and 12-topic blog content strategy
- Ted reviewed and approved several quick-win items for next session

### GEO Quick Wins Implemented (Commit `a854277`)
- robots.txt updated with explicit Allow for 7 AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Amazonbot)
- llms.txt created at `public/llms.txt` — clean Markdown summary of TVA for AI search engines

### Handoff Doc Final Update (Commit `453719e`)
- Complete rewrite of HANDOFF_NEXT_SESSION.md, PROJECT_BACKLOG.md, CLAUDE.md for Session 9

---

## What Was NOT Done (and Why)

- **Looker Studio weekly email** — Deferred until GA4 has data (give it a few days)
- ~~**robots.txt AI crawler update**~~ — DONE (late Session 9, commit `a854277`)
- ~~**llms.txt creation**~~ — DONE (late Session 9, commit `a854277`)
- **Image optimization** — Approved but ran out of session time
- **Award photo rename + About page integration** — Approved but ran out of session time
- **Organizations/affiliations** — Ted needs to confirm the list (couldn't scrape from old site)
- **Visual polish items** — Need collaborative exploration session
- **Form notification email formatting** — Acknowledged, needs Netlify serverless function
- **Blog system** — Blocked on Ted's 24 scraped posts + blog post template build
- **GA4 Realtime verification** — Not confirmed working at session end

---

## First Thing Next Session

### Immediate (No Discussion Needed — Already Approved):
1. ~~**Update robots.txt**~~ — DONE (commit `a854277`)
2. ~~**Create llms.txt**~~ — DONE (commit `a854277`)
3. **Image optimization** — Batch convert PNGs to WebP
4. **Rename + add award photos to About page**

### After Quick Wins:
5. **Organizations on About page** — Get Ted's confirmed list
6. **Course + Service schema** — Add to service pages
7. **OG default image** — Design branded 1200x630px image

### Discussion Topics:
8. **Visual polish** — Show Ted reference sites, get approval on specific changes
9. **Google Business Profile** — Ask Ted if he has one; if not, help set up (highest-impact local SEO action)

---

## First Prompt for Session 10

```
I'm Ted Chamberlain. Read these three files first, in order:
1. CLAUDE.md
2. HANDOFF_NEXT_SESSION.md
3. PROJECT_BACKLOG.md

Project path: H:\OneDrive\AI Projects\TVA AI Projects\TVA Webstie 4.0\teds-voice-academy-main\teds-voice-academy-main\

Then:
1. Start with the approved quick wins: robots.txt AI crawlers, llms.txt creation, image optimization (batch PNG→WebP), and award photo rename + About page integration.
2. After quick wins, let's work on the organizations/affiliations for the About page.
3. Then Course + Service schema markup on the service pages.
4. After those are done, I want to start on visual polish items — show me reference sites and specific recommendations.

Important workflow reminders:
- Present your recommendation → discuss → get my explicit approval → then implement
- Update handoff docs after each significant task
- Track token usage and ensure clean handoff before running out
```

---

## Files Modified in Session 9

| File | Change | Commit |
|------|--------|--------|
| `src/pages/index.astro` | Hero eyebrow font-size 1rem → 1.25rem | `ad66433` |
| `src/layouts/BaseLayout.astro` | GA4 tracking script added + is:inline fix | `ad66433`, `8f1a8cd` |
| `src/pages/privacy.astro` | Updated for GA4 disclosure | `ad66433` |
| `src/pages/contact.astro` | Tone softening (H1, subtitle, optional fields) | `609912d` |
| `CLAUDE.md` | Hero eyebrow pattern updated | `ad66433` |
| `HANDOFF_NEXT_SESSION.md` | Multiple incremental updates | `8de3d77`, `40666b6`, `453719e` |
| `PROJECT_BACKLOG.md` | Multiple incremental updates | `8de3d77`, `40666b6`, `453719e` |
| `public/robots.txt` | Added AI crawler directives | `a854277` |
| `public/llms.txt` | CREATED — AI search engine summary | `a854277` |

---

## DNS Reference (MANAGED BY NETLIFY DNS)

DNS is managed by Netlify, NOT Squarespace. To view/edit DNS records, go to Netlify DNS panel for tedsvoiceacademy.com.

**Important records:**
| Host | Type | Data | Purpose |
|------|------|------|---------|
| `@` | A/ALIAS | (Netlify managed) | Bare domain -> Netlify site |
| `www` | CNAME | (Netlify managed) | www -> Netlify site |
| `pass` | CNAME | `cheery-elf-ded263.netlify.app` | PASS Profile app |
| `@` | MX | (5 Google MX records) | Email — DO NOT TOUCH |
| Various | TXT | DKIM, DMARC, SPF records | Email auth — DO NOT TOUCH |

**CRITICAL:** Do NOT add redirect rules in `netlify.toml` between bare and www domains. This caused an infinite redirect loop in session 6. Netlify domain settings handle this automatically.

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

---

*This handoff replaces the previous version. Keep updating it at the end of each session.*
