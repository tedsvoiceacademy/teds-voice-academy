# PROJECT_BACKLOG.md — Ted's Voice Academy

**Site status: LAUNCHED** (Feb 4, 2026)
**Live at:** https://tedsvoiceacademy.com

This is the living project list for the TVA website. Items move between tiers as priorities shift. New items get added as Ted's vision develops.

**IMPORTANT: All items require Ted's review and approval before implementation begins.** Present recommendations, discuss, get the green light, then implement. No exceptions.

**How this works:**
- **Tier 1** = High-value additions (content, SEO, functionality)
- **Tier 2** = Important but not urgent (photos, testimonials, integrations)
- **Tier 3** = Cosmetic / visual polish (design refinements, animations)
- **Discussion items** = Need conversation before they become tasks
- **Waiting on Ted** = Blocked until Ted provides content, assets, or decisions

---

## Ready to Implement Next

These items have been discussed and approved by Ted. They're ready to go when session time allows.

- [x] **Hero eyebrow sizing** — "MASTER YOUR VOICE" bumped from `1rem` to `1.25rem` (16px→20px). H1 unchanged. (Session 9)
- [x] **GA4 + Google Search Console** — GA4 live (G-ZDX6WPT6CZ). Search Console verified, sitemap submitted. Privacy policy updated. (Session 9)
- [ ] **Looker Studio weekly email** — Deferred until GA4 has a few days of data. Will set up "TVA Website Weekly Performance Overview" report.

---

## Tier 1 — High-Value Additions

### Blog System + Content (Ted's #1 post-launch priority)
Ted is scraping 24 blog posts from the old tedsvoice.com Webwave site. Blog stays visible in nav (Ted's decision, Feb 5 session 8).

- [ ] **Blog individual post system** — Build blog post template/layout, routing (`/blog/[slug]`), and index page that lists real posts. Currently only a landing page with category cards.
- [ ] **Import 24 scraped blog posts** — Convert Ted's scraped content into publishable posts. Ensure proper formatting, meta tags, and schema markup on each.
- [ ] **Blog post SEO** — Each post needs: unique title/description meta tags, article schema markup (or BlogPosting), OG tags for social sharing.
- [ ] **CMS for content updates** — Ted needs to update any part of the site easily without coding. Decap CMS (formerly Netlify CMS) is the leading candidate — free, works with GitHub, visual editor. This is a critical enabler for Ted's independence. Best implemented alongside or right after blog posts.

### SEO Enhancements (ongoing — apply with every change)
- [ ] **OG images for social sharing** — When someone shares a TVA link on social media, it should show a branded preview image instead of nothing. Default OG image referenced in BaseLayout but file doesn't exist yet. Need 1200x630px branded image.
- [ ] **Email newsletter system** — Buttondown recommended. Connects to the newsletter signup forms already built into Footer and Blog page. Captures leads from blog traffic.
- [ ] **GEO (Generative Engine Optimization)** — Research and implement best practices for appearing in AI-generated search results (ChatGPT, Google AI Overview, etc.). This is an emerging field — needs research session to identify what applies to TVA. See Discussion Items.
- [ ] **Form notification email formatting** — Ted specifically requested this (session 7). Netlify form notification emails are plain/ugly. Explore formatting options.

---

## Tier 2 — Important Additions

- [ ] **Award photos on About page** — Photos/images of Ted's awards and recognitions.
- [ ] **Coaching & performance photos** — Photos of Ted coaching, students performing, etc. throughout the site.
- [ ] **Organizations & affiliations** — Display professional organizations Ted belongs to (About page).
- [ ] **Image optimization** — All images are PNG. Converting to WebP/AVIF would improve load times. (Session 7 audit finding)
- [ ] **Restructure Vocal Health Hub** — Minimize visibility of "coming soon" placeholder sections. Reorganize to lead with completed content. (Session 7 audit finding)

---

## Tier 3 — Cosmetic / Visual Polish

- [ ] **Hero parallax effect** — Subtle (~15%) parallax scrolling on hero sections across pages. Adds depth and visual polish.
- [ ] **Background texture & visual richness** — Explore gradients, subtle textures, and background images to add engagement. Requires collaborative session with Ted. See Discussion Items below.
- [ ] **Digital product delivery for Vocal Fit** — Gumroad or Lemonsqueezy for selling/delivering digital products. Blocked until Vocal Fit product is defined.
- [ ] **Members-only section** — Approach TBD. Could be simple password-protected pages, or a full membership platform.

---

## Discussion Items

These need conversation between Ted and the dev before they become concrete tasks. They may span multiple sessions to explore.

**Reminder: Present options, discuss with Ted, get approval, THEN implement.**

### 1. Visual Engagement & Page Design (HIGH PRIORITY — Ted's Session 6 Direction)

**The issue:** The site is intentionally text-heavy, which is right for an information-rich coaching business. But visually, the pages can feel dry — lots of text blocks on solid color backgrounds, similar layouts page after page. Ted wants it to be **more engaging** without being gimmicky. Copy-heavy pages need visual balance.

**Ted's direction (Feb 4, 2026 — Session 6):** Ted wants to explore best practices and ideas for improving the visual look. The goal is engagement and visual variety that balances the deep content — drawing attention to the right things while allowing deeper dives. This should be a collaborative exploration. Ted is open to being educated on best practices.

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

**Next step:** Research best practices for text-heavy coaching/education sites. Look at reference sites together. Ted evaluates what feels right for the brand, then translate into specific design changes.

### 2. Contact Form — Is It Off-Putting?

**Ted's concern:** The contact form might feel too formal or commitment-heavy for casual inquiries. Someone browsing might think "if I fill this out, I'm signing up for something" and bail.

**Things to evaluate:**
- Review the current form fields and labels — are any unnecessary for a first touch?
- Add reassuring microcopy (e.g., "No pressure — just tell me what you're curious about" or "This is just a conversation starter")
- Consider the CTA button text — "Submit" feels formal; "Send Message" or "Let's Talk" feels lighter
- Look at what the form asks for vs. what's actually needed for a first inquiry
- Compare against best practices for service-based business contact forms
- Consider adding a "quick question" option that requires less commitment (e.g., just name + email + short message)

**Status: DONE (Session 9).** H1 softened, subtitle warmed up, interest/experience/goals made optional, goals label changed. Commit `609912d`. Form email formatting still a separate backlog item.

### 3. SEO / GEO Research

**Ted's question:** Are there great ways to improve SEO (or GEO — Generative Engine Optimization) that haven't been considered yet?

**Current SEO state (updated session 8):**
- robots.txt with correct sitemap URL (fixed Feb 5)
- @astrojs/sitemap integration — auto-generates sitemap with all 16 pages
- LocalBusiness JSON-LD with correct URLs (fixed Feb 5)
- Person schema on About page, Book schema on AVF page
- FAQPage schema on FAQ, AVF, PASS pages
- All meta titles/descriptions aligned
- Privacy Policy and Terms of Service pages created (Feb 5)
- Missing: OG images, analytics (GA4 approved), email newsletter

**Areas to research:**
- **GEO (Generative Engine Optimization)** — how to appear in AI-generated search results. Emerging best practices include clear entity definitions, structured data, authoritative content, and FAQ patterns.
- **Local SEO** — Google Business Profile optimization, local directories, review strategy
- **Content SEO** — Blog posts as organic traffic drivers, keyword research, internal linking strategy
- **Technical SEO** — Core Web Vitals, page speed, accessibility audit
- **Schema enhancements** — Review schema, Course schema for lessons, Event schema for workshops

**Action:** Research session to identify highest-impact opportunities. Present findings to Ted.

---

## Content Development Prompts

Ted develops content for certain sections in separate Claude chat sessions. These starting prompts ensure consistency with the site's voice and structure.

### Vocal Health Hub — Content Development Prompt

```
I'm Ted Chamberlain, owner of Ted's Voice Academy (tedsvoiceacademy.com). I need help developing content for the Vocal Health Hub section of my website. Here's what you need to know:

**My writing style:** I use my "Forward Light" voice — positive framing, 8th grade reading level, kind and direct. First person (I/me) only, never "we/us." No contrast constructions ("not X, but Y"). Specific encouragement, not vague hype. Like a trusted mentor sharing something useful.

**Medical disclaimer context:** I'm a voice teacher, not a medical professional. All content must be educational, not medical advice. I always recommend seeing a doctor for persistent issues.

**The page already has two completed sections:**
1. Foundations (hydration, rest, environment, vocal hygiene)
2. When Things Feel Off (fatigue, warning signs, when to seek help)

**I need to develop content for these 4 sections:**

1. **Home Care & Remedies** — Gargle recipes, tea recommendations, lozenge guidance, supplement recommendations. Things I personally use and recommend. Practical, specific, experience-based.

2. **SOVT Tools & Techniques** — Semi-Occluded Vocal Tract exercises. Explain what they are and why they work (in plain language). Recommended exercises with instructions. Tools I recommend (straw, lip trills, etc.)

3. **Vocal Fit** — My vocal conditioning routines. Structured warm-up, cool-down, and maintenance exercises for different needs and life stages. This may become a digital product eventually.

4. **Articles & Resources** — Featured articles I've written, plus links to helpful external resources on vocal health.

Let's work on one section at a time. I'll share what I know and you help me organize it into clear, web-friendly content that matches my Forward Light style. Which section should we start with?
```

### Vocal Health Hub — What to Bring to That Chat
- Your personal gargle recipes, tea preferences, lozenge brands
- SOVT exercises you teach regularly and how you explain them
- Your Vocal Fit routine structure (what exercises, what order, how long)
- Any articles you've already written on vocal health topics
- External resources you recommend to students

### Other Sections That Need Content Development

**Workshops page** — The page structure is built, but Ted may want to develop specific workshop descriptions, pricing, and schedules as they become available.

---

## Waiting on Ted

These items are blocked until Ted provides content, assets, or makes a decision.

### Blog Content
- [ ] **24 scraped blog posts** — Ted is scraping these from the old tedsvoice.com Webwave site. Already working on this in separate Claude sessions.

### Vocal Health Hub Content
The page structure is built. These sections have intro copy with "coming soon" placeholders:

- [ ] **Home Care & Remedies** — gargle recipes, tea recommendations, lozenge guidance, supplement recommendations
- [ ] **SOVT Tools & Techniques** — explanation of mechanics, recommended exercises with instructions, recommended tools
- [ ] **Vocal Fit** — product descriptions, format details, pricing
- [ ] **Articles & Resources** — featured articles, external resource links

### Other Content Needed
- [ ] **Award photos** — images of awards/recognitions for About page
- [ ] **Coaching/performance photos** — images of Ted coaching, students performing
- [ ] **Organization logos/names** — professional organizations Ted belongs to
- [ ] **Heart of the Sound quartet URL** — Deferred. No online presence yet. Add when available.

---

## Completed

- [x] Build all 13 pages including FAQ (Jan-Feb 2026)
- [x] Google Maps embed on Contact page (Feb 3, 2026)
- [x] Workshop inquiry form — Netlify Forms (Feb 3, 2026)
- [x] Blog newsletter signup form (Feb 3, 2026)
- [x] Push code to GitHub (verified Feb 3, 2026)
- [x] Verify all pages live on Netlify (Feb 3, 2026)
- [x] Fix About page em dash/en dash encoding (Feb 3, 2026)
- [x] Create PROJECT_BACKLOG.md and improved HANDOFF_NEXT_SESSION.md (Feb 3, 2026)
- [x] SEO foundation: robots.txt, @astrojs/sitemap, LocalBusiness JSON-LD, Person/Book schemas, meta tag alignment (Feb 4, 2026)
- [x] FAQ page + AVF FAQ section + PASS FAQ section with FAQPage schema markup (Feb 4, 2026)
- [x] Footer updated with FAQ link (Feb 4, 2026)
- [x] Fixed title tag duplication across all pages (Feb 4, 2026)
- [x] Social media links added to footer + sameAs in schema (Feb 4, 2026)
- [x] Ensemble links: Voices of the Sound + Hot Notes in footer and About page, Person schema memberOf (Feb 4, 2026)
- [x] Domain cutover: tedsvoiceacademy.com pointed to Netlify, SSL provisioned (Feb 4, 2026)
- [x] Fixed redirect loop: removed conflicting bare->www redirect from netlify.toml (Feb 4, 2026)
- [x] **Fixed all 4 Netlify forms** — contact, workshop-inquiry, blog-newsletter, newsletter-footer. Created form-detect.html, success.astro, added action="/success" to all forms, removed catch-all redirect and deprecated processing config from netlify.toml. Form Detection enabled in Netlify UI. (Feb 5, 2026 — Session 7)
- [x] **Email notifications configured** — All form submissions notify ted@tedsvoiceacademy.com (Feb 5, 2026 — Session 7)
- [x] **Comprehensive site audit** — 21-item findings report covering all 13 pages, SEO, technical config, visual design. Findings captured in this backlog. (Feb 5, 2026 — Session 7)
- [x] **Fixed robots.txt sitemap URL** — Changed www to bare domain (Feb 5, 2026 — Session 8)
- [x] **Fixed LocalBusiness schema URLs** — Changed www to bare domain in BaseLayout.astro (Feb 5, 2026 — Session 8)
- [x] **Removed broken favicon PNG references** — Deleted 3 broken link tags, kept working SVG (Feb 5, 2026 — Session 8)
- [x] **Replaced placeholder testimonials with Rapid Reviews carousel** — Integrated Google Reviews widget on homepage (Feb 5, 2026 — Session 8)
- [x] **FAQ accordion pattern** — Converted FAQ/AVF/PASS pages to `<details>/<summary>` with +/- indicators, brand-colored styling (Feb 5, 2026 — Session 8)
- [x] **Card height fix** — CSS flexbox equalization on singing, speaking, ensembles, pricing, index pages (Feb 5, 2026 — Session 8)
- [x] **Privacy Policy page created** — `/privacy` with comprehensive policy in Forward Light voice (Feb 5, 2026 — Session 8)
- [x] **Terms of Service page created** — `/terms` with full terms in Forward Light voice (Feb 5, 2026 — Session 8)
- [x] **AVF dials image updated** — Ted replaced `public/images/avf-dials.png` with new version (Feb 5, 2026 — Session 8)
- [x] **Analytics decision made** — GA4 + Google Search Console + Looker Studio (free), weekly email report (Feb 5, 2026 — Session 8)

---

*Last updated: February 5, 2026 (Session 8)*
