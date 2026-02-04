# SESSION HANDOFF — Ted's Voice Academy

**Date written:** February 4, 2026
**Written by:** Claude Code session 4 (Opus 4.5)

---

## Start Here

1. Read `CLAUDE.md` — project rules, design system, content rules, structure
2. Read `PROJECT_BACKLOG.md` — the living to-do list with all open items
3. Read this file — for current state and session-specific context

---

## Verified Current State (as of Feb 4, 2026)

### Git & Deploy
- **GitHub repo:** https://github.com/tedsvoiceacademy/teds-voice-academy
- **Latest pushed commit:** `bb43afd` on `main` branch (VotS Facebook link fix — Feb 4)
- **Local changes:** In sync with remote. All changes committed and pushed.
- **Local project path:** `teds-voice-academy-main/teds-voice-academy-main/`
- **Netlify auto-deploy URL:** https://deft-baklava-b2eb2e.netlify.app/
- **Build status:** Clean — `npm run build` succeeds, 13 pages built (12 original + new FAQ page)
- **Git auth:** Configured — `git config` has Ted's name/email, repo access works via HTTPS

### All 13 Pages — Built & Verified
All pages build cleanly. The new FAQ page is at `/faq`.

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | Clean — meta tags updated |
| Singing | `/singing` | Clean — meta tags updated |
| Speaking | `/speaking` | Clean — meta tags updated |
| Ensembles | `/ensembles` | Clean — meta tags updated |
| About | `/about` | Clean — meta tags, Person schema, ensembles section, memberOf schema |
| Pricing | `/pricing` | Clean — meta tags updated |
| Contact | `/contact` | Clean — meta tags updated |
| AVF | `/avf` | Clean — meta tags, Book schema, FAQ section + FAQ schema |
| PASS Profile | `/pass-profile` | Clean — meta tags, FAQ section + FAQ schema |
| Workshops | `/workshops` | Clean — title deduplication fix |
| Vocal Health | `/vocal-health` | Clean — title deduplication fix |
| Blog | `/blog` | Clean — title deduplication fix |
| **FAQ (NEW)** | `/faq` | **New page** — 15 Q&As with FAQPage schema markup |

### Known Bugs
None currently.

### Dependencies Changed This Session
- **Added:** `@astrojs/sitemap@3.2.1` (sitemap generation integration)

### Environment
- **Platform:** Windows
- **Git:** v2.52.0
- **GitHub CLI (`gh`):** Not installed — use standard `git` commands
- **Node/npm:** Available (Astro project)
- **Browser tools:** Claude in Chrome MCP available for visual testing

---

## Priority #1 for Next Session: Domain Cutover

Ted wants `www.tedsvoiceacademy.com` pointing to this Netlify site as the very first task.

### What We Know
- **Current state:** `tedsvoiceacademy.com` currently redirects to `tedsvoice.com` (hosted on Webwave)
- **Goal:** `www.tedsvoiceacademy.com` → Netlify (this new Astro site)
- **Important:** Do NOT disable the old `tedsvoice.com` Webwave site. Ted needs it alive for blog scraping purposes. Just stop the redirect from `tedsvoiceacademy.com` → `tedsvoice.com`.
- **Netlify auto-deploy URL:** https://deft-baklava-b2eb2e.netlify.app/

### What Needs Clarification From Ted
- Where is `tedsvoiceacademy.com` registered? (GoDaddy? Namecheap? Webwave itself?)
- Does Ted have access to the domain registrar's DNS settings?
- Is the redirect from `tedsvoiceacademy.com` → `tedsvoice.com` configured at the registrar level (DNS) or inside Webwave?
- Does Ted want both `tedsvoiceacademy.com` AND `www.tedsvoiceacademy.com` pointing to Netlify?

### Steps Once We Have Answers
1. Add custom domain in Netlify dashboard (Settings → Domain management)
2. Update DNS records at registrar (A record or CNAME depending on setup)
3. Enable HTTPS/SSL via Netlify (automatic with Let's Encrypt)
4. Remove the old redirect from `.com` → `.com` Webwave
5. Verify site loads at custom domain
6. Update `astro.config.mjs` `site` field if needed (currently `https://www.tedsvoiceacademy.com`)
7. Verify sitemap and robots.txt reference correct domain

---

## What Sessions 3 & 4 Accomplished (Feb 4, 2026)

### SEO Foundation
1. Created `public/robots.txt` with sitemap reference
2. Installed `@astrojs/sitemap` — auto-generates `sitemap-index.xml` with all 13 pages
3. Added **LocalBusiness JSON-LD** structured data to BaseLayout (appears on all pages)
4. Added **Person schema** to About page (via head slot)
5. Added **Book schema** to AVF page (via head slot)
6. Added **sameAs** social profile URLs to LocalBusiness schema
7. **Fixed title tag duplication** — 9 pages had double site name appended. All fixed.
8. Aligned all page titles and descriptions with SEO spec document

### FAQ Sections (3 total)
9. Created new `/faq` page — 15 Q&As, full FAQPage schema markup
10. Added AVF FAQ section (6 Q&As) to AVF page with FAQPage schema
11. Added PASS FAQ section (6 Q&As) to PASS Profile page with FAQPage schema
12. Added FAQ link to footer navigation

### Social Media
13. Added social media icon links to footer (Facebook, Instagram, YouTube, LinkedIn, Alignable)
14. Added `sameAs` social profile URLs to LocalBusiness schema for SEO

### Ensemble Links
15. Added "My Ensembles" section to footer: Voices of the Sound (website + Facebook icon) and Hot Notes (Facebook)
16. Added "On stage with my ensembles" section to About page with descriptions and links
17. Updated Person schema on About page with `memberOf` for both ensembles
18. Heart of the Sound deferred — no online presence yet

---

## What Was NOT Done (and Why)

- **Domain cutover** — Deferred to next session as first priority. Ted clarified: keep old tedsvoice.com alive for blog scraping, just point tedsvoiceacademy.com to Netlify.
- **Heart of the Sound links** — No online presence yet. Will add when Ted has URLs.
- **OG default image** — BaseLayout references `/images/og-default.jpg` but file doesn't exist. Needs 1200x630px branded image. Tier 2.
- **Visual verification** — Pages build cleanly but haven't been visually spot-checked on the live Netlify URL yet.

---

## Suggested Next Steps

1. **Domain cutover** — Connect `www.tedsvoiceacademy.com` to Netlify (Ted's #1 priority)
2. **Visually verify** the FAQ page, social links, ensemble links on the live site
3. Whatever Ted wants from the backlog (award photos, Rapid Reviews, testimonials, etc.)

---

## How to Write the Next Handoff

When ending a session, create/update this file with:

1. **Verified facts only** — don't copy planned actions as if they happened. State what was actually done and confirmed.
2. **Git state** — latest commit hash, whether local and remote are in sync, any uncommitted changes.
3. **Known bugs** — anything discovered but not fixed.
4. **What was done** — brief list of accomplishments.
5. **What was NOT done and why** — so the next session doesn't waste time on already-decided deferrals.
6. **Suggested priorities** — what makes sense to do next.
7. **Update PROJECT_BACKLOG.md** — move completed items, add new discoveries, adjust tiers if needed.
8. **Update CLAUDE.md** — if any structural or status changes happened.

---

*This handoff replaces the previous version. Keep updating it at the end of each session.*
