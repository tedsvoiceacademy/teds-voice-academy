# CLAUDE.md — Ted's Voice Academy Website Project

## Project Overview

You are continuing development on the Ted's Voice Academy (TVA) website — a professional voice coaching business run by Ted Chamberlain in Lacey, Washington. The site is **fully built (13 pages)** and **live on Netlify**.

**Also read these files:**
- `PROJECT_BACKLOG.md` — living to-do list with all open items, organized by priority tier
- `HANDOFF_NEXT_SESSION.md` — verified current state, known bugs, what was/wasn't done last session

**Live Site:** https://deft-baklava-b2eb2e.netlify.app/
**GitHub:** https://github.com/tedsvoiceacademy/teds-voice-academy
**Framework:** Astro
**Hosting:** Netlify (auto-deploys from GitHub)

---

## Current Status

### All 13 Pages Complete
| Page | File | Status |
|------|------|--------|
| Homepage | `src/pages/index.astro` | ✅ Complete |
| Contact | `src/pages/contact.astro` | ✅ Complete — Google Maps embed |
| Singing | `src/pages/singing.astro` | ✅ Complete |
| Speaking | `src/pages/speaking.astro` | ✅ Complete |
| Ensembles | `src/pages/ensembles.astro` | ✅ Complete |
| About | `src/pages/about.astro` | ✅ Complete — Person schema |
| Pricing | `src/pages/pricing.astro` | ✅ Complete |
| AVF | `src/pages/avf.astro` | ✅ Complete — Book schema + FAQ section |
| PASS Profile | `src/pages/pass-profile.astro` | ✅ Complete — FAQ section |
| Workshops | `src/pages/workshops.astro` | ✅ Complete — workshop inquiry form |
| Vocal Health Hub | `src/pages/vocal-health.astro` | ✅ Complete — 4 sections have "coming soon" placeholders awaiting Ted's content |
| Blog | `src/pages/blog.astro` | ✅ Complete — landing page; no individual post system yet |
| **FAQ** | `src/pages/faq.astro` | ✅ **New Feb 4** — 15 Q&As with FAQPage schema |

### SEO Infrastructure (added Feb 4, 2026)
- `public/robots.txt` — crawler directives + sitemap reference
- `@astrojs/sitemap` integration — auto-generates sitemap with all 13 pages
- **LocalBusiness JSON-LD** in BaseLayout (every page) — includes sameAs social profiles
- **Person schema** on About page, **Book schema** on AVF page
- **FAQPage schema** on FAQ, AVF, and PASS pages
- All meta titles/descriptions aligned with `docs/specs/TVA_SEO_Meta_Content_v1.md`

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

### 5. Hero Section Pattern
```css
.hero-eyebrow {
  display: block;
  font-size: 1rem;
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
│   │   └── faq.astro             # ✅ New Feb 4, 2026
│   └── styles/
│       └── global.css            # Design tokens
├── public/
│   ├── images/                   # Image assets
│   └── robots.txt                # ✅ New Feb 4, 2026
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

## Forms Implementation

### Contact Form (already built, using Netlify Forms)
```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <p class="hidden"><input name="bot-field" /></p>
  <!-- Form fields -->
</form>
```

### Workshop Inquiry Form (Netlify Forms)
On `/workshops` page. Form name: `workshop-inquiry`. Fields: contact name, organization, email, phone, workshop interest (checkboxes), group size (select), preferred timeframe, details (textarea).

### Blog Newsletter Form (Netlify Forms)
On `/blog` page. Form name: `blog-newsletter`. Fields: first name, email.

### Newsletter Signup (already in Footer)
Already implemented in Footer.astro using Netlify Forms.

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
- [ ] Domain cutover (tedsvoiceacademy.com → Netlify)
- [x] Commit and push Feb 4 changes to GitHub — DONE (commit `bb0b04a`)

**For the full project backlog, see `PROJECT_BACKLOG.md`.**

### Content Still Needed from Ted (for Vocal Health Hub)
- [ ] Home Care & Remedies: gargle recipes, tea recommendations, lozenge guidance, supplement recommendations
- [ ] SOVT Tools & Techniques: explanation of mechanics, recommended exercises with instructions, recommended tools
- [ ] Vocal Fit: product descriptions, format details, pricing
- [ ] Articles & Resources: featured articles, external resource links

### Post-Launch / Phase 2
- [ ] Analytics setup (GA4 or Plausible)
- [ ] CMS for easy content updates (Decap CMS recommended)
- [ ] Digital product delivery for Vocal Fit (Gumroad or Lemonsqueezy)
- [ ] Email newsletter system (Buttondown recommended)
- [ ] Members-only section (approach TBD)
- [ ] Real testimonials (currently placeholders)
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

---

*Last updated: February 4, 2026*
*Project started: January 2026*
