# TVA WEBSITE â€” SESSION 14 HANDOFF
## For Continuing the Build in Session 15

**Date:** January 30, 2026
**Session:** 14
**Status:** 9 pages built, 3 remaining + homepage image fix needed

---

## WHAT GOT DONE THIS SESSION

### Pages Built/Updated âœ…
| Page | File | Status | Notes |
|------|------|--------|-------|
| PASS Profile | `pass-profile.astro` | Ready/Uploaded | Colors match pass.tedsvoiceacademy.com |
| About | `about.astro` | Ready/Uploaded | Updated with headshot image reference |

### Images Processed âœ…
- `pass-profile-logo.png` â€” Made background transparent (was black)
- `pass-bubble.png` â€” Cleaned up transparency

### Image Upload Chart Created âœ…
Ted uploaded all required images to GitHub:
- `hero-ted.png` â€” Homepage hero
- `ted-headshot.png` â€” About page, homepage "about me"
- `avf-book-cover.png`, `avf-pillars.png`, `avf-dials.png`, `avf-book-photo.png` â€” AVF page
- `pass-profile-logo.png`, `pass-bubble.png` â€” PASS Profile page

---

## CRITICAL: HOMEPAGE IMAGE FIX NEEDED

The homepage (`index.astro`) still has **placeholder text** instead of actual images in two locations:

### Location 1: Hero Section
**Find:** `<div class="image-placeholder">Ted's Photo</div>` (or similar)
**Replace with:**
```html
<img src="/images/hero-ted.png" alt="Ted Chamberlain, voice coach" class="hero-photo" />
```

### Location 2: "A bit about me" Section
**Find:** Another `Ted's Photo` placeholder
**Replace with:**
```html
<img src="/images/ted-headshot.png" alt="Ted Chamberlain" class="about-photo" />
```

### Add CSS (in the `<style>` section):
```css
.hero-photo {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.about-photo {
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  border: 3px solid var(--color-gold-bright);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
```

**RECOMMENDED:** Pull the actual index.astro from GitHub, make edits, provide complete file to Ted.

---

## PAGES STATUS

### Complete & Deployed (9)
| # | Page | File | URL | Status |
|---|------|------|-----|--------|
| 1 | Homepage | `index.astro` | / | ðŸŸ¡ Needs image fix |
| 2 | Contact | `contact.astro` | /contact | ðŸŸ¡ Needs Google Maps embed |
| 3 | Singing | `singing.astro` | /singing | âœ… Complete |
| 4 | Speaking | `speaking.astro` | /speaking | âœ… Complete |
| 5 | Ensembles | `ensembles.astro` | /ensembles | âœ… Complete |
| 6 | About | `about.astro` | /about | âœ… Complete (verify headshot shows) |
| 7 | Pricing | `pricing.astro` | /pricing | âœ… Complete |
| 8 | AVF | `avf.astro` | /avf | âœ… Complete (verify images show) |
| 9 | PASS Profile | `pass-profile.astro` | /pass-profile | âœ… Complete (verify) |

### Remaining to Build (3)
| Page | Copy File | Priority | Notes |
|------|-----------|----------|-------|
| Workshops | `TVA_Workshops_Page_Forward_Light_v1.md` | HIGH | |
| Vocal Health Hub | `TVA_Vocal_Health_Hub_Forward_Light_v1.md` | HIGH | Hub structure, medical disclaimers |
| Blog | `TVA_Blog_Page_Forward_Light_v2.md` | MEDIUM | Landing page only |

---

## DOMAIN SETUP PLAN

Ted has two domains:
- **tedsvoiceacademy.com** â€” Primary domain, has SEO value
- **tedsvoice.com** â€” Currently hosts webwave site

### Recommended Setup:
1. **tedsvoiceacademy.com** â†’ Point to Netlify (new site)
2. **tedsvoice.com** â†’ 301 redirect to tedsvoiceacademy.com

### Steps for Domain Setup:
1. In Netlify: Go to Domain Settings â†’ Add custom domain â†’ tedsvoiceacademy.com
2. Netlify will provide DNS instructions (either change nameservers OR add CNAME/A records)
3. At domain registrar: Update DNS per Netlify instructions
4. Set up tedsvoice.com to 301 redirect to tedsvoiceacademy.com
5. Wait for DNS propagation (can take up to 48 hours, usually faster)
6. Netlify auto-provisions SSL certificate

### SEO Considerations:
- 301 redirects pass SEO value
- All canonical URLs should use tedsvoiceacademy.com
- Update any hardcoded URLs in the site
- Submit new sitemap to Google Search Console

---

## CRITICAL BUILD RULES (MUST FOLLOW)

### 1. Layout Import â€” MUST USE:
```astro
import Layout from '../layouts/BaseLayout.astro';
```
NOT `Layout.astro` â€” the file is named `BaseLayout.astro`

### 2. CSS Variable Names â€” CORRECT NAMES:
| Use This | NOT This |
|----------|----------|
| `--color-navy-deep` | `--color-navy` |
| `--color-gold-bright` | `--color-gold` |
| `--color-off-white` | `--color-light-bg` |

### 3. Sub-brand Colors:
**AVF Section:**
- `--color-avf-teal` (#1a6b7c)
- `--color-avf-amber` (#d4a039)

**PASS Section (matches pass.tedsvoiceacademy.com):**
- `--pass-dark` (#0a3d4d)
- `--pass-primary` (#0f4d5a)
- `--pass-accent` (#3db58c)

### 4. Hero Styling Pattern:
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

### 5. Content Rules:
- Copy is EXACT from `TVA_*_Forward_Light_*.md` files
- I/me pronouns only (Ted IS the business)
- Forward Light style throughout
- No contrast constructions ("not X, but Y")

---

## LINKS

- **Live Site:** https://deft-baklava-b2eb2e.netlify.app/
- **GitHub:** https://github.com/tedsvoiceacademy/teds-voice-academy
- **PASS Platform:** https://pass.tedsvoiceacademy.com
- **AVF on Amazon:** https://www.amazon.com/dp/B0GD2SH8J5

---

## CONTACT INFO (Quick Reference)

- **Address:** 4204 Lorna Ct SE, Lacey, WA 98503
- **Phone:** (253) 414-2267
- **Email:** ted@tedsvoiceacademy.com
- **PASS Email:** PASS@tedsvoiceacademy.com
- **AVF Email:** AVF@tedsvoiceacademy.com

---

## OUTSTANDING ITEMS

### High Priority
1. **Fix homepage images** â€” Replace "Ted's Photo" placeholders with actual images
2. **Build Workshops page** â€” Use `TVA_Workshops_Page_Forward_Light_v1.md`
3. **Build Vocal Health Hub** â€” Use `TVA_Vocal_Health_Hub_Forward_Light_v1.md`
4. **Domain setup** â€” Point tedsvoiceacademy.com to Netlify

### Medium Priority
5. **Build Blog landing page** â€” Use `TVA_Blog_Page_Forward_Light_v2.md`
6. **Google Maps embed** â€” Add real embed to Contact page
7. **Real testimonials** â€” Replace placeholders

### Lower Priority
8. **OG images** â€” Social sharing images for each page
9. **Analytics** â€” Google Analytics or similar
10. **Privacy Policy / Terms** â€” Currently placeholder links in footer

---

## VERIFICATION CHECKLIST

Before starting Session 15, Ted should verify on live site:
- [ ] About page shows Ted's headshot (not placeholder)
- [ ] PASS Profile page shows correctly with PASS colors
- [ ] AVF page shows all four images (cover, pillars, dials, book photo)
- [ ] Homepage still shows "Ted's Photo" placeholders (to be fixed)

---

## SESSION 15 STARTING PROMPT

Copy everything below the line into your new chat:

---

SESSION 15 â€” Ted's Voice Academy Website Build

I'm continuing the TVA website build. Please read `TVA_SESSION_14_HANDOFF.md` in the project files for full context before responding.

**CRITICAL FIRST TASK:**
Fix the homepage (index.astro) â€” it still has "Ted's Photo" placeholders instead of actual images. Pull the file from GitHub, update it with the image references per the handoff doc, and provide me the complete file.

**CRITICAL BUILD RULES (must follow every time):**
1. Layout import: `import Layout from '../layouts/BaseLayout.astro';`
2. CSS variables:
   * `--color-navy-deep` (not --color-navy)
   * `--color-gold-bright` (not --color-gold)
   * `--color-off-white` (not --color-light-bg)
3. Copy source: Use exact text from `TVA_*_Forward_Light_*.md` files
4. Pronouns: I/me only (Ted IS the business)
5. Hero styling: Use the corrected hero pattern from Session 13

**Current status:**
* 9 pages complete (homepage needs image fix)
* 3 pages remaining: Workshops, Vocal Health Hub, Blog

**After homepage fix, build in this order:**
1. Workshops page â€” `TVA_Workshops_Page_Forward_Light_v1.md`
2. Vocal Health Hub â€” `TVA_Vocal_Health_Hub_Forward_Light_v1.md`
3. Blog landing page â€” `TVA_Blog_Page_Forward_Light_v2.md`

**Links:**
* GitHub: https://github.com/tedsvoiceacademy/teds-voice-academy
* Live: https://deft-baklava-b2eb2e.netlify.app/

**Domain setup discussion needed:**
Once pages are complete, help me point tedsvoiceacademy.com to Netlify and set up tedsvoice.com as a 301 redirect.

Remember: Monitor token consumption. At 60-70%, stop and create handoff.

---

**END OF HANDOFF**
