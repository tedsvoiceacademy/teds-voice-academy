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

## Quick Technical Fixes (from Session 7 Audit)

These are small, high-confidence fixes found during the comprehensive site audit. Each is a few lines of code, but still needs Ted's approval before implementation.

- [ ] **Fix robots.txt sitemap URL** — References `www.tedsvoiceacademy.com` but canonical domain is bare `tedsvoiceacademy.com`. One-line change.
- [ ] **Fix LocalBusiness schema URLs** — In BaseLayout.astro, `image` and `url` fields use `www.tedsvoiceacademy.com` instead of bare domain. Two-line change.
- [ ] **Fix broken favicon PNG references** — BaseLayout.astro links to `favicon-32x32.png`, `favicon-16x16.png`, and `apple-touch-icon.png` that don't exist. Options: generate PNGs from existing SVG, or remove the broken tags.
- [ ] **Remove or replace placeholder testimonials** — Homepage shows three fake "coming soon" testimonial cards. Options: remove section until real quotes exist, or replace with different social proof.
- [ ] **Fix Privacy/Terms dead links** — Footer links to Privacy Policy and Terms of Service pages that don't exist. Options: create basic pages or remove the links.

---

## Tier 1 — High-Value Additions

### Blog System + Content (Ted's #1 post-launch priority)
Ted is scraping 24 blog posts from the old tedsvoice.com Webwave site. He's already working on this in separate Claude chat sessions.

- [ ] **Blog individual post system** — Build blog post template/layout, routing (`/blog/[slug]`), and index page that lists real posts. Currently only a landing page with category cards.
- [ ] **Import 24 scraped blog posts** — Convert Ted's scraped content into publishable posts. Ensure proper formatting, meta tags, and schema markup on each.
- [ ] **Blog post SEO** — Each post needs: unique title/description meta tags, article schema markup (or BlogPosting), OG tags for social sharing.
- [ ] **CMS for content updates** — Ted needs to update any part of the site easily without coding. Decap CMS (formerly Netlify CMS) is the leading candidate — free, works with GitHub, visual editor. This is a critical enabler for Ted's independence. Best implemented alongside or right after blog posts.

### SEO Enhancements (ongoing — apply with every change)
- [ ] **OG images for social sharing** — When someone shares a TVA link on social media, it should show a branded preview image instead of nothing. Default OG image referenced in BaseLayout but file doesn't exist yet. Need 1200x630px branded image.
- [ ] **Analytics setup** — GA4 or Plausible. Need Ted's preference (Plausible is simpler/privacy-friendly; GA4 is free and more powerful). Critical for tracking what's working.
- [ ] **Google Search Console** — Submit sitemap, monitor indexing, track search performance. Domain is now live — this should happen ASAP.
- [ ] **Email newsletter system** — Buttondown recommended. Connects to the newsletter signup forms already built into Footer and Blog page. Captures leads from blog traffic.
- [ ] **GEO (Generative Engine Optimization)** — Research and implement best practices for appearing in AI-generated search results (ChatGPT, Google AI Overview, etc.). This is an emerging field — needs research session to identify what applies to TVA. See Discussion Items.
- [ ] **Form notification email formatting** — Ted specifically requested this (session 7). Netlify form notification emails are plain/ugly. Explore formatting options.

---

## Tier 2 — Important Additions

- [ ] **Rapid Reviews carousel** — Integrate Google Reviews carousel from Rapid Reviews (Ted's review management service). Social proof for visitors.
- [ ] **Specific testimonials** — Replace placeholder testimonials with real, named quotes from clients.
- [ ] **Award photos on About page** — Photos/images of Ted's awards and recognitions.
- [ ] **Coaching & performance photos** — Photos of Ted coaching, students performing, etc. throughout the site.
- [ ] **Organizations & affiliations** — Display professional organizations Ted belongs to (About page).
- [ ] **Image optimization** — All images are PNG. Converting to WebP/AVIF would improve load times. (Session 7 audit finding)
- [ ] **Restructure Vocal Health Hub** — Minimize visibility of "coming soon" placeholder sections. Reorganize to lead with completed content. (Session 7 audit finding)
- [ ] **Hide Blog from nav or build blog system** — Blog page exists but has no posts. Either temporarily hide it or wait for content. (Session 7 audit finding)

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

### 2. Hero Section Sizing — Are the H1s Too Small?

**Ted's concern:** The "Master Your Voice" hero heading (and parallel headings on other pages) seems small. Is the current size right for best practice and TVA's needs?

**Current implementation:** `font-size: clamp(2rem, 4vw + 1rem, 3rem)` — scales from 32px to 48px depending on screen width.

**What to evaluate:**
- Compare against coaching/education industry norms
- Test larger sizes (e.g., `clamp(2.5rem, 5vw + 1rem, 4rem)`) and show Ted
- Consider whether the hero eyebrow text above the H1 is contributing to it feeling small
- Mobile vs desktop — does the size work well on both?
- Relationship between hero text size and the rest of the page hierarchy

**Action:** Show Ted 2-3 size options side by side. Let him pick. This is a quick change once decided.

### 3. Card Symmetry / Layout Issues

**Ted's observation:** On the Singing page, "Singers at Every Level" section — the 4 cards (Complete beginners, Developing singers, Experienced performers, Recovering voices) are not symmetrical and look off.

**Root cause:** Cards have different amounts of text content. "Complete beginners" and "Recovering voices" have more copy than "Developing singers" and "Experienced performers," making the cards different heights.

**Possible fixes:**
- CSS `min-height` to equalize card heights
- `display: grid` with `grid-template-rows: 1fr` to force equal height
- Edit copy to be more uniform in length
- Add visual elements (icons, images) to shorter cards to balance them
- **Audit ALL card sections across ALL pages** for this same issue

**Action:** This is likely a quick CSS fix. Audit all pages first, then fix globally.

### 4. FAQ Display — Collapsible Accordion Pattern

**Ted's idea:** Currently FAQs display with all answers visible. Would it be better to show just the questions, with answers hidden behind a click-to-expand (accordion) pattern?

**Pros of accordion:**
- Less overwhelming visually — visitors scan questions and click what's relevant
- Common UX pattern — visitors know how it works
- Reduces page length
- Better mobile experience

**Cons / considerations:**
- Hidden content may be less SEO-crawlable (though Google handles `<details>` well now)
- FAQPage schema needs to remain intact regardless
- Need to decide: apply to main FAQ page, AVF FAQ section, PASS FAQ section, or all three?

**Action:** Implement with HTML `<details>/<summary>` elements (no JS needed, accessible, SEO-friendly). Quick win — can do this in one session.

### 5. Contact Form — Is It Off-Putting?

**Ted's concern:** The contact form might feel too formal or commitment-heavy for casual inquiries. Someone browsing might think "if I fill this out, I'm signing up for something" and bail.

**Things to evaluate:**
- Review the current form fields and labels — are any unnecessary for a first touch?
- Add reassuring microcopy (e.g., "No pressure — just tell me what you're curious about" or "This is just a conversation starter")
- Consider the CTA button text — "Submit" feels formal; "Send Message" or "Let's Talk" feels lighter
- Look at what the form asks for vs. what's actually needed for a first inquiry
- Compare against best practices for service-based business contact forms
- Consider adding a "quick question" option that requires less commitment (e.g., just name + email + short message)

**Action:** Review form, propose specific changes, discuss with Ted before implementing.

### 6. Site-Wide Visual Audit

**Ted's direction:** Audit the entire site for visual inconsistencies, layout issues, and opportunities to improve engagement.

**Status (Session 7):** A comprehensive 21-item audit was conducted covering all 13 pages. Findings are captured throughout this backlog. The audit covered: source code review, rendered output analysis, CSS patterns, asset inventory, SEO configuration, and technical setup.

**Specific things still to check (visual, requires browser):**
- Card height symmetry across all pages (Singing, Speaking, etc.)
- Consistent spacing and visual rhythm between sections
- Are CTAs (buttons, links) prominent enough?
- Do sections that should draw attention actually draw attention?
- Are "deeper dive" sections (like detailed descriptions) visually distinct from headlines/intros?
- Mobile responsiveness of all layouts
- Image placement opportunities (where would a photo dramatically improve the page?)

**Action:** Walk through the live site with Ted using Claude in Chrome. Discuss findings and priorities together.

### 7. SEO / GEO Research

**Ted's question:** Are there great ways to improve SEO (or GEO — Generative Engine Optimization) that haven't been considered yet?

**Current SEO state:**
- robots.txt, sitemap, LocalBusiness/Person/Book schemas (with known URL mismatches to fix)
- FAQPage schema on FAQ, AVF, PASS pages
- Meta titles/descriptions on all 14 pages
- Missing: OG images, Google Search Console, analytics, email newsletter

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

**Testimonials** — When Ted has real client quotes with permission, these replace the current placeholders across the site. No separate Claude session needed — just provide the quotes and we'll place them.

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
- [ ] **Real testimonials** — actual client quotes with permission to publish
- [ ] **Award photos** — images of awards/recognitions for About page
- [ ] **Coaching/performance photos** — images of Ted coaching, students performing
- [ ] **Organization logos/names** — professional organizations Ted belongs to
- [ ] **Heart of the Sound quartet URL** — Deferred. No online presence yet. Add when available.
- [ ] **Analytics preference** — GA4 or Plausible? (needed before setup)

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

---

*Last updated: February 5, 2026 (Session 7)*
