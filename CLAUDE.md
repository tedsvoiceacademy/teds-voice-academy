# CLAUDE.md — Ted's Voice Academy Website Project

## Project Overview

You are continuing development on the Ted's Voice Academy (TVA) website — a professional voice coaching business run by Ted Chamberlain in Lacey, Washington. The site is **fully built (18 route pages + 24 blog posts = 42 pages)** and **live on Netlify**.

**CRITICAL WORKFLOW RULE:** Do NOT implement changes without Ted's explicit approval. Present recommendations, discuss, get the green light, then implement. This applies to everything — quick fixes, visual changes, SEO tweaks, all of it.

**Also read these files:**
- `PROJECT_BACKLOG.md` — living to-do list with all open items, organized by priority tier
- `HANDOFF_NEXT_SESSION.md` — verified current state, known bugs, what was/wasn't done last session
- `HANDOFF_RESOURCE_INVENTORY.md` — **complete resource file map** (images, MP3s, PDFs, docs). Produced by dedicated inventory session Feb 7, 2026. Contains Ted's decisions on every file, organized folder structure, and build action items for digital products, lead magnets, and Vocal Health Hub content.

**Live Site:** https://tedsvoiceacademy.com
**GitHub:** https://github.com/tedsvoiceacademy/teds-voice-academy
**Framework:** Astro
**Hosting:** Netlify (auto-deploys from GitHub)

---

## Current Status

### All 18 Pages Complete
| Page | File | Status |
|------|------|--------|
| Homepage | `src/pages/index.astro` | ✅ Complete — Rapid Reviews carousel (Feb 5), Intonation Lab ecosystem card (Feb 21) |
| Contact | `src/pages/contact.astro` | ✅ Complete — Google Maps embed, Netlify form |
| Singing | `src/pages/singing.astro` | ✅ Complete |
| Speaking | `src/pages/speaking.astro` | ✅ Complete |
| Ensembles | `src/pages/ensembles.astro` | ✅ Complete |
| About | `src/pages/about.astro` | ✅ Complete — Person schema |
| Pricing | `src/pages/pricing.astro` | ✅ Complete |
| AVF | `src/pages/avf.astro` | ✅ Complete — Book schema + FAQ accordion |
| PASS Profile | `src/pages/pass-profile.astro` | ✅ Complete — FAQ accordion |
| Workshops | `src/pages/workshops.astro` | ✅ Complete — workshop inquiry form (Netlify) |
| Vocal Health Hub | `src/pages/vocal-health.astro` | ✅ Complete — All 4 sections live (Feb 16) |
| Blog | `src/pages/blog/index.astro` | ✅ Complete — Landing page + 24 individual posts via [...slug].astro |
| FAQ | `src/pages/faq.astro` | ✅ Complete — 15 Q&As with FAQPage schema, accordion pattern |
| Success | `src/pages/success.astro` | ✅ Complete — Form submission thank-you page (noIndex) |
| Privacy | `src/pages/privacy.astro` | ✅ Complete — Privacy policy page |
| Terms | `src/pages/terms.astro` | ✅ Complete — Terms of service page |
| **Shop** | `src/pages/shop.astro` | ✅ **New Feb 21** — Product catalog (5 products), ItemList schema |
| **Intonation Lab** | `src/pages/intonation-lab.astro` | ✅ **New Feb 21** — Full product page, SoftwareApplication + FAQPage schema |

### SEO & Analytics Infrastructure (Feb 4-5, 2026)
- `public/robots.txt` — crawler directives + sitemap reference (URL fixed to bare domain Feb 5)
- `@astrojs/sitemap` integration — auto-generates sitemap with all 18 pages
- **LocalBusiness JSON-LD** in BaseLayout (every page) — includes sameAs social profiles (URLs fixed to bare domain Feb 5)
- **Person schema** on About page, **Book schema** on AVF page
- **FAQPage schema** on FAQ, AVF, and PASS pages
- All meta titles/descriptions aligned with `docs/specs/TVA_SEO_Meta_Content_v1.md`
- **GA4 tracking** — Measurement ID `G-ZDX6WPT6CZ` in BaseLayout.astro `<head>` (scripts use `is:inline` directive)
- **Google Search Console** — Verified for tedsvoiceacademy.com, sitemap submitted
- **Privacy policy** updated to disclose GA4 usage (Feb 5, 2026)

### Social Media Links (in Footer)
- Facebook: https://www.facebook.com/TedsVoiceAcademy
- Instagram: https://www.instagram.com/tedsvoiceacademy/
- YouTube: https://www.youtube.com/channel/UCCKU_rD5-_PgsHjNYOOgsRg
- LinkedIn: https://www.linkedin.com/in/ted-chamberlain-a18484280/
- Alignable: https://www.alignable.com/lacey-wa/teds-voice-academy

### Ensemble Links (in Footer + About Page)
- Voices of the Sound (chorus): https://www.voicesofthesound.org + https://www.facebook.com/VoicesoftheSound
- Hot Notes Quartet: https://www.facebook.com/hotnotesquartet
- Heart of the Sound (new chapter quartet): deferred — no online presence yet

---

## Critical Build Rules (MUST FOLLOW)

### 1. Layout Import
```astro
import Layout from '../layouts/BaseLayout.astro';
```
The file is named `BaseLayout.astro` — NOT `Layout.astro`.

### 2. CSS Variable Names — Use These Exact Names
| Correct | Incorrect |
|---------|-----------|
| `--color-navy-deep` | `--color-navy` |
| `--color-gold-bright` | `--color-gold` |
| `--color-off-white` | `--color-light-bg` |
| `--color-charcoal` | `--text-dark` |
| `--color-cream` | `--text-light` |

### 3. Three Distinct Visual Identities
This website has THREE brand color schemes. Do NOT collapse them:

**TVA Parent Brand (most pages):**
- Background: `--color-navy-deep` (#0a1628)
- Accent: `--color-gold-bright` (#d4a84b)
- Text: white/cream

**AVF Section:**
- Background: `--color-avf-teal` (#1a6b7c)
- Accent: `--color-avf-amber` (#d4a039)
- Text: cream (#f0e8d4)

**PASS Profile Section:**
- Background: `--pass-primary` (#0f4d5a)
- Accent: `--pass-accent` (#3db58c)
- Text: white

### 4. Content Rules
- **Copy is EXACT** from `TVA_*_Forward_Light_*.md` files — do not paraphrase
- **I/me pronouns ONLY** — Ted IS the business, never "we/us"
- **Forward Light style** — positive framing, 8th grade reading level
- **NO contrast constructions** — never write "not X, but Y" or "it's not about X, it's about Y"

### 5. No Domain Redirects in netlify.toml
**NEVER** add redirect rules between `tedsvoiceacademy.com` and `www.tedsvoiceacademy.com` in `netlify.toml`. Netlify domain settings handle this automatically. Adding manual redirects caused an infinite 301 loop in session 6.

### 6. Grain Texture Pattern (Session 11)
Grain is applied per-page in scoped `<style>` blocks — NOT via the `.has-grain` class in global.css (that's dead code).
```css
.hero {
  background:
    url('/images/noise-texture.png') repeat,
    linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-medium) 100%);
  background-size: 200px 200px, 100% 100%;
  background-blend-mode: soft-light, normal;
}
```
Only apply to dark sections (navy, teal, dark green). Never on cream/white/light sections.

### 7. Scroll Reveal System (Session 11)
CSS classes in `global.css` + IntersectionObserver in `BaseLayout.astro` (automatic on all pages).
- `.reveal` — fade up from 30px below
- `.reveal-left` / `.reveal-right` — slide from left/right
- `.reveal-stagger` on parent + `.reveal` on children — staggered entrance (0.1s increments)
- All respect `prefers-reduced-motion`

### 8. Hero Section Pattern
```css
.hero-eyebrow {
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-gold-bright);
  margin-bottom: 0.75rem;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw + 1rem, 3rem);
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}
```

---

## Project Structure

```
teds-voice-academy/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro      # THE layout file
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── singing.astro
│   │   ├── speaking.astro
│   │   ├── ensembles.astro
│   │   ├── about.astro
│   │   ├── pricing.astro
│   │   ├── contact.astro
│   │   ├── avf.astro
│   │   ├── pass-profile.astro
│   │   ├── workshops.astro
│   │   ├── vocal-health.astro
│   │   ├── blog.astro
│   │   ├── faq.astro             # ✅ New Feb 4, 2026
│   │   ├── success.astro         # ✅ New Feb 5, 2026 — form thank-you page
│   │   ├── privacy.astro         # ✅ New Feb 5, 2026 — Privacy policy (updated for GA4)
│   │   ├── terms.astro           # ✅ New Feb 5, 2026 — Terms of service
│   │   ├── shop.astro            # ✅ New Feb 21, 2026 — Product catalog
│   │   └── intonation-lab.astro  # ✅ New Feb 21, 2026 — Intonation Lab product page
│   └── styles/
│       └── global.css            # Design tokens
├── public/
│   ├── images/                   # Image assets
│   ├── robots.txt                # ✅ New Feb 4, 2026
│   └── form-detect.html          # ✅ New Feb 5, 2026 — Netlify form definitions
├── astro.config.mjs              # Includes @astrojs/sitemap
└── package.json
```

---

## Design System Summary

### Typography
| Element | Font | Weight |
|---------|------|--------|
| Headlines | Playfair Display | 700 |
| Body | Inter | 400 |
| Body emphasis | Inter | 600 |

### Color Reference
```css
/* TVA Parent Brand */
--color-navy-deep: #0a1628;
--color-navy-medium: #1a2d4d;
--color-gold-bright: #d4a84b;
--color-gold-hover: #e0b85c;
--color-off-white: #faf8f5;
--color-cream: #f5f0e1;
--color-charcoal: #2a2a2a;
--color-white: #ffffff;

/* AVF Sub-brand */
--color-avf-teal: #1a6b7c;
--color-avf-amber: #d4a039;
--color-avf-cream: #f0e8d4;

/* PASS Sub-brand */
--pass-dark: #0a3d4d;
--pass-primary: #0f4d5a;
--pass-accent: #3db58c;
--pass-accent-hover: #4cc99d;
--pass-light: #e8f4f6;
```

---

## Source-of-Truth Hierarchy

When content or visuals conflict, follow this priority:

1. **Highest:** The AVF book manuscript PDF (`The_Adaptive_Voice_Framework__AVF__V1_0_Complete.pdf`)
2. **Dogma-level visuals:** Must use exactly as provided, no modifications:
   - Book cover (`ASSET_1B____Complete_cover.png`)
   - Five Pillars diagram (`1_CG_AVf_Pillars.png`)
   - Eight Dials diagram (`2_CG_AVF_Dials.png`)
   - PASS Profile logo (`PASS_Profile_3_Logo1.png`)
3. **All other files:** Reference-only unless Ted says otherwise

---

## Key External Links

| Resource | URL |
|----------|-----|
| AVF Book (Amazon) | https://www.amazon.com/dp/B0GD2SH8J5 |
| PASS Profile Platform | https://pass.tedsvoiceacademy.com |
| Google Maps Directions | https://www.google.com/maps/dir/?api=1&destination=4204+Lorna+Ct+SE,+Lacey,+WA+98503 |

---

## Contact Information

| Field | Value |
|-------|-------|
| Business | Ted's Voice Academy |
| Owner | Ted Chamberlain |
| Address | 4204 Lorna Ct SE, Lacey, WA 98503 |
| Phone | (253) 414-2267 |
| Email | ted@tedsvoiceacademy.com |
| AVF Email | AVF@tedsvoiceacademy.com |
| PASS Email | PASS@tedsvoiceacademy.com |

---

## Forms Implementation (ALL WORKING — Feb 5, 2026)

All 4 forms use Netlify Forms with `action="/success"` redirecting to a branded thank-you page. Form Detection is enabled in Netlify UI. Email notifications go to ted@tedsvoiceacademy.com.

**Key file:** `public/form-detect.html` — Hidden HTML file containing all 4 form definitions for Netlify's build bot to detect. This is the officially recommended workaround for Astro + Netlify Forms.

### Contact Form
On `/contact` page. Form name: `contact`. Fields: name, email, phone, interest (checkboxes), experience (select), goals (textarea), referral (select), format (radio), additional (textarea).

### Workshop Inquiry Form
On `/workshops` page. Form name: `workshop-inquiry`. Fields: contact name, organization, email, phone, workshop interest (checkboxes), group size (select), preferred timeframe, details (textarea).

### Blog Newsletter Form
On `/blog` page. Form name: `blog-newsletter`. Fields: first name, email.

### Footer Newsletter Signup
In Footer.astro. Form name: `newsletter-footer`. Fields: email.

---

## Outstanding Technical Items

### Must Complete for Launch
- [x] Add Google Maps embed to Contact page — DONE (Feb 3, 2026)
- [x] Build Workshops page — DONE (Feb 3, 2026)
- [x] Build Vocal Health Hub page — DONE (Feb 3, 2026)
- [x] Build Blog landing page — DONE (Feb 3, 2026)
- [x] Push latest code to GitHub — DONE (verified Feb 3, 2026)
- [x] Fix About page em dash encoding bug — DONE (Feb 3, 2026)
- [x] SEO foundation (robots.txt, sitemap, schemas, meta tags) — DONE (Feb 4, 2026)
- [x] FAQ page + AVF/PASS FAQ sections — DONE (Feb 4, 2026)
- [x] Social media links in footer — DONE (Feb 4, 2026)
- [x] Domain cutover (tedsvoiceacademy.com → Netlify) — DONE (Feb 4, 2026). DNS managed by Netlify DNS. Custom domains + SSL configured. Redirect loop fixed (conflicting redirect in netlify.toml removed, commit `4a8b573`).
- [x] Commit and push Feb 4 changes to GitHub — DONE (commit `bb0b04a`)
- [x] Fix all Netlify forms (contact, workshop, blog newsletter, footer newsletter) — DONE (Feb 5, 2026, commits `932439e`, `f589218`)
- [x] Form email notifications to ted@tedsvoiceacademy.com — DONE (Feb 5, 2026)
- [x] Comprehensive site audit (21 items) — DONE (Feb 5, 2026)

**For the full project backlog, see `PROJECT_BACKLOG.md`.**

### Content Still Needed from Ted (for Vocal Health Hub)
- [ ] Home Care & Remedies: gargle recipes, tea recommendations, lozenge guidance, supplement recommendations
- [ ] SOVT Tools & Techniques: explanation of mechanics, recommended exercises with instructions, recommended tools
- [ ] Vocal Fit: product descriptions, format details, pricing
- [ ] Articles & Resources: featured articles, external resource links

### Post-Launch / Phase 2
- [x] Analytics setup — **GA4 live** (G-ZDX6WPT6CZ), **Google Search Console verified** (Feb 5, Session 9)
- [ ] Looker Studio weekly email report — deferred until GA4 has data
- [ ] GEO/SEO implementation — Research done (Session 9), multiple items approved. See PROJECT_BACKLOG.md.
- [ ] CMS for easy content updates (Decap CMS recommended)
- [ ] Digital product delivery for Vocal Fit (Gumroad or Lemonsqueezy)
- [ ] Email newsletter system (Buttondown recommended)
- [ ] Members-only section (approach TBD)
- [ ] OG images for social sharing
- [ ] Blog individual post system (CMS-driven)
- [ ] Vocal Health Hub: expand placeholder sections when Ted provides content

---

## Deployment Workflow

1. Make changes to files
2. Push to GitHub (main branch)
3. Netlify automatically builds and deploys (1-2 min)
4. Hard refresh browser to see changes

For Ted to upload files via GitHub web interface:
1. Navigate to file in GitHub
2. Click pencil icon to edit (or "Add file" → "Upload files")
3. Make changes or upload new file
4. Add commit message
5. Click "Commit changes"

---

## Working With Ted

### His Preferences
- Does NOT code
- Works best in small steps
- Requires clear checkpoints and explicit save points
- No assumptions about memory persistence
- "Ready-fire-aim" approach — get it live, then improve
- Checks in regularly on token usage to ensure smooth handoffs

### Update Process
Ted needs an **easy, quick, user-friendly way to update ANY part of the website** after launch — not just blog posts. This is a critical requirement. Plan for this in any CMS or content management decisions.

---

## Document Reference

### Copy Files (use exact text from these)
| Page | File |
|------|------|
| Homepage | `TVA_Homepage_Copy_Forward_Light_v3.md` |
| Singing | `TVA_Singing_Page_Forward_Light_v2.md` |
| Speaking | `TVA_Speaking_Page_Forward_Light_v2.md` |
| Ensembles | `TVA_Ensembles_Page_Forward_Light_v2.md` |
| About | `TVA_About_Page_Forward_Light_v5.md` |
| AVF | `TVA_AVF_Section_Forward_Light_v1.md` |
| PASS Profile | `TVA_PASS_Profile_Section_Forward_Light_v2.md` |
| Contact | `TVA_Contact_Page_Forward_Light_v1.md` |
| Pricing | `TVA_Pricing_Page_Forward_Light_v2.md` |
| Blog | `TVA_Blog_Page_Forward_Light_v2.md` |
| Workshops | `TVA_Workshops_Page_Forward_Light_v1.md` |
| Vocal Health | `TVA_Vocal_Health_Hub_Forward_Light_v1.md` |

### Specification Files
| Purpose | File |
|---------|------|
| Writing style | `Style_guide_for_website.txt` |
| Visual design | `TVA_Design_Specifications_v1.md` |
| Design direction | `TVA_Design_Direction_Brief_v1.md` |
| Technical specs | `TVA_Technical_Requirements_v1.md` |
| SEO content | `TVA_SEO_Meta_Content_v1.md` |
| Blog style | `TVA_Blog_Writing_Style_Guide_v2.md` |

---

## Quick Start for New Session

1. **Clone the repo** (if not already): `git clone https://github.com/tedsvoiceacademy/teds-voice-academy`
2. **Install dependencies**: `npm install`
3. **Run dev server**: `npm run dev`
4. **Check this file** for current status and build rules
5. **Reference copy files** for exact content to use

---

## Session Management

When nearing token limits (60-70% usage):
1. Stop current work at a clean checkpoint
2. Create handoff document capturing:
   - What was completed
   - What remains
   - Any issues encountered
   - Next steps
3. Provide clear starting prompt for next session

---

## Session Log

| Date | Session | What Was Done |
|------|---------|---------------|
| Jan 2026 | Sessions 1-10+ | Built 9 pages, Header, Footer, BaseLayout, global.css, all docs |
| Feb 3, 2026 | Session (Claude Code) | Built Workshops, Vocal Health Hub, Blog pages. Added Google Maps embed + Get Directions link to Contact page. All 12 pages verified locally. |
| Feb 3, 2026 | Session 2 (Claude Code) | Verified all code in sync with GitHub. Visual review of all 12 live pages. Discovered About page em dash bug. Created PROJECT_BACKLOG.md and improved HANDOFF_NEXT_SESSION.md. |
| Feb 4, 2026 | Session 3 (Claude Code) | SEO foundation (robots.txt, sitemap, LocalBusiness/Person/Book schemas, meta tag fixes). FAQ page + AVF/PASS FAQ sections with FAQPage schema. Social media links in footer + sameAs in schema. Title tag duplication fix across all pages. |
| Feb 4, 2026 | Session 4 (Claude Code) | Added ensemble links: Voices of the Sound + Hot Notes to footer and About page. Person schema updated with memberOf. |
| Feb 4, 2026 | Session 5 (Claude Code) | Domain cutover: added tedsvoiceacademy.com + www to Netlify, changed A record and www CNAME at Squarespace from Webwave to Netlify, SSL provisioned via Let's Encrypt. Old tedsvoice.com Webwave site left intact. Domain registered at Squarespace. |
| Feb 4, 2026 | Session 6 (Claude Code) | Fixed redirect loop: removed conflicting bare→www redirect from netlify.toml (commit `4a8b573`). Updated astro.config.mjs site URL to bare domain. Ted activated Netlify DNS. Verified MX, PASS subdomain, SSL intact. Site live at tedsvoiceacademy.com. |
| Feb 5, 2026 | Session 7 (Claude Code) | Fixed all 4 Netlify forms (broken since launch). Created form-detect.html + success.astro. Removed catch-all redirect + deprecated config from netlify.toml. Ted enabled Form Detection in Netlify UI. Email notifications configured. Comprehensive 21-item site audit. Findings captured in PROJECT_BACKLOG.md awaiting Ted's review/approval. |
| Feb 5, 2026 | Session 8 (Claude Code) | Fixed robots.txt + schema URLs (www→bare). Removed broken favicon PNGs. Replaced placeholder testimonials with Rapid Reviews carousel. FAQ accordion on FAQ/AVF/PASS pages. Card height fix across 5 pages. Created Privacy Policy + Terms of Service pages (16 pages total). AVF dials image updated. Ted decided: GA4 + Search Console + Looker Studio for analytics. Blog stays visible. |
| Feb 5, 2026 | Session 9 (Claude Code) | Hero eyebrow sizing (1rem→1.25rem). GA4 tracking live (G-ZDX6WPT6CZ) + is:inline fix. Google Search Console verified, sitemap submitted. Privacy policy updated for GA4. Contact form tone softened (H1, optional fields, warmer copy). Comprehensive GEO/SEO research report (8 GEO recs, 10 SEO improvements, 12 blog topics, schema additions). Ted approved quick wins: robots.txt AI crawlers, llms.txt, image optimization, award photos. |
| Feb 5, 2026 | Session 10 (Claude Code) | Image optimization (PNG→WebP, 84% reduction). Award photos on About page. Professional affiliations section (10 org logos). Ensemble logos on cards. Course + Service schema on 3 pages. PASS logo visibility fix. Card symmetry fix. Visual Polish Tier 1 (card hovers, gold accent lines, drop caps, pull quotes). Photos placed on 3 service pages. Visual Polish Tier 2 (grain textures initial, pull quotes on 6 pages). |
| Feb 5, 2026 | Session 11 (Claude Code) | Grain texture overhaul: replaced broken SVG feTurbulence with real PNG noise texture baked into CSS backgrounds (soft-light blend). Applied to ALL dark sections on ALL 16 pages. Scroll-triggered reveal animations (IntersectionObserver + CSS) on all 16 pages. Hero entrance animations on Homepage, About, AVF, PASS. Credentials bar blending on homepage. |
| Feb 21, 2026 | Session 12 (Claude Code) | Shop hub page (/shop) with 5 product cards + ItemList schema. Intonation Lab product page (/intonation-lab) with features, pricing, FAQ, SoftwareApplication schema. Nav/footer updated. Homepage ecosystem grid updated. BlogPosting JSON-LD on all 24 blog posts. Breadcrumb.astro component + BreadcrumbList schema on all 17 interior pages + 24 posts. Related posts algorithm on blog (categories 3x, tags 1x). 14 per-page OG images generated with sharp. llms.txt updated with new products + fixed PASS description. |

---

*Last updated: February 21, 2026 (Session 12)*
*Project started: January 2026*
