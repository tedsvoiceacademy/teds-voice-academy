# PROJECT_BACKLOG.md — Ted's Voice Academy

This is the living project list for the TVA website. Items move between tiers as priorities shift. New items get added as Ted's vision develops.

**How this works:**
- **Tier 1** = Must happen before launch (or is blocking something)
- **Tier 2** = Should happen soon after launch (high value)
- **Tier 3** = Future improvements (good ideas, no rush)
- **Discussion items** = Need conversation before they become tasks
- **Waiting on Ted** = Blocked until Ted provides content, assets, or decisions

---

## Tier 1 — Before Launch

- [x] **Fix About page em dash encoding** — Fixed Feb 3, 2026. Commit `937d63a`.
- [x] **SEO foundation** — robots.txt, sitemap (via @astrojs/sitemap), LocalBusiness schema, page-specific schemas (Person, Book, FAQ), meta tag alignment with SEO spec. Done Feb 4, 2026.
- [x] **FAQ sections** — Dedicated FAQ page (TVA general), plus FAQ sections on AVF and PASS pages, all with FAQPage schema markup. Done Feb 4, 2026.
- [x] **Social media links** — Facebook, Instagram, YouTube, LinkedIn, Alignable added to footer + sameAs in schema. Done Feb 4, 2026.
- [x] **Ensemble links** — Voices of the Sound + Hot Notes added to footer and About page. Person schema updated with memberOf. Heart of the Sound deferred (no online presence yet). Done Feb 4, 2026.
- [ ] **Domain cutover** — Switch tedsvoiceacademy.com DNS to point to Netlify. Requires: clarifying current setup (tedsvoiceacademy.com currently redirects to tedsvoice.com on Webwave). Coordinate with Ted on registrar access and Webwave settings.

---

## Tier 2 — Soon After Launch

- [ ] **Award photos on About page** — Photos/images of Ted's awards and recognitions.
- [ ] **Rapid Reviews carousel** — Integrate Google Reviews carousel from Rapid Reviews (Ted's review management service).
- [ ] **Coaching & performance photos** — Photos of Ted coaching, students performing, etc. throughout the site.
- [ ] **Organizations & affiliations** — Display professional organizations Ted belongs to (About page).
- [ ] **Specific testimonials** — Replace placeholder testimonials with real, named quotes from clients.
- [ ] **CMS for content updates** — Ted needs to update any part of the site easily without coding. Decap CMS (formerly Netlify CMS) is the leading candidate — free, works with GitHub, visual editor. This is a critical enabler for Ted's independence.
- [ ] **Analytics setup** — GA4 or Plausible. Need Ted's preference (Plausible is simpler/privacy-friendly; GA4 is free and more powerful).
- [ ] **OG images for social sharing** — When someone shares a TVA link on social media, it should show a branded preview image instead of nothing. Default OG image referenced in BaseLayout but file doesn't exist yet.
- [ ] **Blog individual post system** — Currently only a landing page with category cards. Need actual blog post pages. Best implemented alongside CMS.
- [ ] **Email newsletter system** — Buttondown recommended. Connects to the newsletter signup forms already built into Footer and Blog page.

---

## Tier 3 — Future / Phase 2

- [ ] **Hero parallax effect** — Subtle (~15%) parallax scrolling on hero sections across pages. Adds depth and visual polish.
- [ ] **Background texture & visual richness** — Explore gradients, subtle textures, and background images to add engagement. Requires collaborative session with Ted to balance aesthetic preferences with professional best practices. See Discussion Items below for full scope.
- [ ] **Digital product delivery for Vocal Fit** — Gumroad or Lemonsqueezy for selling/delivering digital products. Blocked until Vocal Fit product is defined.
- [ ] **Members-only section** — Approach TBD. Could be simple password-protected pages, or a full membership platform.

---

## Discussion Items

These need conversation between Ted and the dev before they become concrete tasks. They may span multiple sessions to explore.

### Visual Richness & Page Design (includes Texture + Parallax)

**The issue:** The site is intentionally text-heavy, which is right for an information-rich coaching business. But visually, the pages can feel dry — lots of text blocks on solid color backgrounds, similar layouts page after page.

**Ted's direction (Feb 4, 2026):** Ted wants to explore adding "texture" to backgrounds/colors — gradients, actual texture, subtle background images. The goal is engagement without sacrificing professionalism. This should be a collaborative exploration where Ted can evaluate options against his aesthetic tastes. Also wants subtle (~15%) parallax on hero sections.

**Possible directions to explore:**
- Subtle background textures or gradients to break up flat color sections
- Section dividers (decorative lines, shapes, or transitions between sections)
- Iconography for feature lists, benefits, service descriptions
- Pull quotes or highlighted callout boxes for key statements
- Strategic photography — Ted teaching, studio shots, performance moments
- Varied section layouts (not always centered text — try side-by-side, offset, cards)
- Scroll-triggered animations (subtle fade-ins, slide-ins as you scroll down)
- Whitespace and rhythm adjustments between sections
- Parallax scrolling on hero images (~15%)
- CSS texture overlays, gradient variations, subtle background patterns

**Next step:** Look at reference sites together in a future session. Ted identifies what feels right for the brand, then we translate that into specific design changes.

---

## Waiting on Ted

These items are blocked until Ted provides content, assets, or makes a decision.

### Vocal Health Hub Content
The page structure is built. These sections have intro copy with "coming soon" placeholders:

- [ ] **Home Care & Remedies** — gargle recipes, tea recommendations, lozenge guidance, supplement recommendations
- [ ] **SOVT Tools & Techniques** — explanation of mechanics, recommended exercises with instructions, recommended tools
- [ ] **Vocal Fit** — product descriptions, format details, pricing
- [ ] **Articles & Resources** — featured articles, external resource links

### Other Content Needed
- [ ] **Real testimonials** — actual client quotes with permission to publish
- [ ] **Award photos** — images of awards/recognitions for About page
- [ ] **Coaching/performance photos** — images of Ted coaching, students performing
- [ ] **Organization logos/names** — professional organizations Ted belongs to
- [x] **Social media profile URLs** — for footer social links (Done Feb 4: Facebook, Instagram, YouTube, LinkedIn, Alignable)
- [x] **Voices of the Sound URL** — Done Feb 4. Website + Facebook added to footer and About page.
- [x] **Hot Notes quartet URL** — Done Feb 4. Facebook added to footer and About page.
- [ ] **Heart of the Sound quartet URL** — Deferred. No online presence yet. Add when available.

---

## Completed

- [x] Build all 12 pages (Jan-Feb 2026)
- [x] Google Maps embed on Contact page (Feb 3, 2026)
- [x] Workshop inquiry form — Netlify Forms (Feb 3, 2026)
- [x] Blog newsletter signup form (Feb 3, 2026)
- [x] Push code to GitHub (verified Feb 3, 2026)
- [x] Verify all 12 pages live on Netlify (Feb 3, 2026)
- [x] Fix About page em dash/en dash encoding (Feb 3, 2026)
- [x] Create PROJECT_BACKLOG.md and improved HANDOFF_NEXT_SESSION.md (Feb 3, 2026)
- [x] SEO foundation: robots.txt, @astrojs/sitemap, LocalBusiness JSON-LD, Person/Book schemas, meta tag alignment (Feb 4, 2026)
- [x] FAQ page + AVF FAQ section + PASS FAQ section with FAQPage schema markup (Feb 4, 2026)
- [x] Footer updated with FAQ link (Feb 4, 2026)
- [x] Fixed title tag duplication across all pages (BaseLayout was double-appending site name) (Feb 4, 2026)
- [x] Social media links added to footer: Facebook, Instagram, YouTube, LinkedIn, Alignable (Feb 4, 2026)
- [x] Social profile sameAs URLs added to LocalBusiness schema for SEO (Feb 4, 2026)
- [x] Ensemble links: Voices of the Sound + Hot Notes added to footer and About page, Person schema updated with memberOf (Feb 4, 2026)

---

*Last updated: February 4, 2026*
