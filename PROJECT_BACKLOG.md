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

## Approved Quick Wins (Session 10 — No Discussion Needed)

These were discussed and approved by Ted at the end of Session 9. Implement immediately.

- [x] **Update robots.txt for AI crawlers** — DONE (Session 9, commit `a854277`). Explicit Allow for GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Amazonbot.
- [x] **Create llms.txt file** — DONE (Session 9, commit `a854277`). `public/llms.txt` with full site summary for AI search engines.
- [ ] **Image optimization (automated batch)** — Convert all PNG images in `public/images/` to WebP. Two award photos already WebP. ~30 min automated.
- [ ] **Rename award photos** — Clean up file names for web-friendliness, then add to About page with captions.
- [ ] **Add award photos to About page** — Display both awards (BusinessRate Top 3 Vocal Instructor 2025, Lacey Chamber Entrepreneur of the Year 2025).

---

## Tier 1 — High-Value Additions

### GEO/SEO Implementation (Research DONE — Session 9)

Full research report completed. Ted said "I will definitely want to fully maximize SEO (and GEO if useful) potential."

**Quick GEO/SEO wins (approved or ready to discuss):**
- [ ] **Course + Service schema markup** — Add to Singing, Speaking, Ensembles pages. Unlocks rich search results.
- [ ] **Answer capsule summaries** — Add 2-3 sentence summaries at top of each service page for AI engines to quote.
- [ ] **Add publish/update dates** — Display dates on all content pages with `<time>` tags.
- [ ] **Track AI referral traffic in GA4** — Custom channel grouping for ChatGPT, Perplexity, etc.
- [ ] **Google Business Profile** — Ask Ted if he has one. If not, this is THE #1 local SEO action. Set up and fully optimize.
- [ ] **Internal linking strategy** — Every page links to 2-3 related pages contextually.
- [ ] **Self-host fonts** — Download Inter + Playfair Display, serve from own domain. Eliminates external DNS lookups.
- [ ] **Breadcrumb schema + visual breadcrumbs** — Add BreadcrumbList schema and breadcrumb navigation to interior pages.
- [ ] **Review collection system** — Create process for requesting Google reviews from students.

**Larger GEO/SEO efforts:**
- [ ] **Add statistics, credentials, verifiable facts** throughout site copy (needs Ted's input — years experience, number of students, certifications)
- [ ] **Multi-platform presence** — YouTube vocal tip videos, LinkedIn articles, Reddit answers in r/singing
- [ ] **Voice search optimization** — Conversational Q&A content targeting "how much do voice lessons cost in Lacey WA?" etc.
- [ ] **Long-tail keyword optimization** — Target specific queries throughout site content

### Blog System + Content (Ted's #1 post-launch priority)
Ted is scraping 24 blog posts from the old tedsvoice.com Webwave site. Blog stays visible in nav (Ted's decision, Feb 5 session 8).

**Blog content strategy from GEO/SEO research (12 prioritized topics):**
- Tier 1: How to choose a voice teacher, Singing lessons for adults, What to expect at first lesson, Vocal health care, Voice teacher vs vocal coach
- Tier 2: The AVF Framework explained, Vocal warmups for beginners, Musical theatre audition prep, Can you teach yourself to sing?, Speaking with confidence
- Tier 3: Best performance venues in Olympia/Lacey, Singing groups in South Sound area

Ted said he'll get to blog content "in the next few days."

- [ ] **Blog individual post system** — Build blog post template/layout, routing (`/blog/[slug]`), and index page. Currently only a landing page with category cards.
- [ ] **Import 24 scraped blog posts** — Convert Ted's scraped content into publishable posts.
- [ ] **Blog post SEO** — Each post needs: unique title/description, BlogPosting schema, OG tags.
- [ ] **CMS for content updates** — Decap CMS for Ted to update any part of the site independently. Critical enabler for Ted's independence.

### Other Tier 1 Items
- [ ] **OG images for social sharing** — Default + per-page branded 1200x630px images. Currently referenced in BaseLayout but file doesn't exist. Ted now understands what this is (explained in Session 9).
- [ ] **Looker Studio weekly email** — Deferred until GA4 has data. Set up "TVA Website Weekly Performance Overview" report.
- [ ] **Email newsletter system** — Buttondown recommended. Connects to existing newsletter signup forms.
- [ ] **Form notification email formatting** — Netlify form emails are plain/ugly. Needs serverless function or third-party integration.

---

## Tier 2 — Important Additions

- [ ] **Organizations & affiliations on About page** — Display professional associations Ted belongs to. Known list (needs Ted's confirmation):
  - BNI, BRING!, Thurston County Chamber, Lacey South Sound Chamber, NATS, Barbershop Harmony Society, Evergreen District, Mixed Barbershop
  - Need: Ted to confirm list + provide logos or approve text-only approach
- [ ] **Coaching & performance photos** — Photos of Ted coaching, students performing, etc. throughout the site.
- [ ] **Restructure Vocal Health Hub** — Minimize "coming soon" placeholders. Reorganize to lead with completed content.
- [ ] **Add Review/AggregateRating schema** — When Google reviews exist, add to LocalBusiness markup. Star ratings in search results dramatically increase CTR.
- [ ] **Event schema on Workshops page** — When specific workshops are scheduled, add Event structured data.

---

## Tier 3 — Cosmetic / Visual Polish (Ted Wants ASAP)

Ted explicitly said he wants to get to these as soon as possible. These need collaborative exploration — not solo implementation.

- [ ] **Hero parallax effect** — Subtle (~15%) parallax scrolling on hero sections across pages.
- [ ] **Background texture & visual richness** — Gradients, subtle textures, background images.
- [ ] **Section dividers** — Decorative lines, shapes, or transitions between sections.
- [ ] **Iconography** — Icons for feature lists, benefits, service descriptions.
- [ ] **Pull quotes / callout boxes** — Highlighted callout boxes for key statements.
- [ ] **Scroll-triggered animations** — Subtle fade-ins, slide-ins as you scroll.
- [ ] **Varied section layouts** — Move beyond always-centered text: side-by-side, offset, cards.
- [ ] **Digital product delivery for Vocal Fit** — Gumroad or Lemonsqueezy. Blocked until product defined.
- [ ] **Members-only section** — Approach TBD.

---

## Discussion Items

These need conversation between Ted and the dev before they become concrete tasks.

### 1. Visual Engagement & Page Design (HIGH PRIORITY — Ted's Session 6 Direction)

**The issue:** The site is intentionally text-heavy, which is right for an information-rich coaching business. But visually, the pages can feel dry — lots of text blocks on solid color backgrounds, similar layouts page after page. Ted wants it to be **more engaging** without being gimmicky.

**Ted's direction (Feb 4, 2026):** Ted wants to explore best practices and ideas for improving the visual look. This should be a collaborative exploration.

**Next step:** Research best practices for text-heavy coaching/education sites. Show Ted reference examples. Get approval on specific design changes, then implement one at a time.

### 2. SEO / GEO Strategy (RESEARCH DONE — Session 9)

Full research completed. See Tier 1 GEO/SEO section above for the prioritized action plan. Ted is committed to fully maximizing SEO/GEO potential.

**Priority order (effort-to-impact ratio):**
1. Google Business Profile (ask Ted if he has one)
2. robots.txt update for AI crawlers ✅ approved
3. llms.txt file ✅ approved
4. Review collection system
5. Course + Service schema
6. Answer capsules on service pages
7. Publish/update dates on pages
8. AI traffic tracking in GA4
9. Blog content (Tier 1 posts)
10. Internal linking strategy

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

### Blog Content Development Prompt (NEW — from GEO/SEO Research)

```
I'm Ted Chamberlain, owner of Ted's Voice Academy (tedsvoiceacademy.com). I need help writing blog posts for my website. Here's what you need to know:

**My writing style:** I use my "Forward Light" voice — positive framing, 8th grade reading level, kind and direct. First person (I/me) only, never "we/us." No contrast constructions ("not X, but Y"). Specific encouragement, not vague hype. Like a trusted mentor sharing something useful.

**Blog post structure:** Each post should have:
- Clear H1 title (with target keyword)
- An "answer capsule" in the first paragraph (2-3 sentences that directly answer the question a searcher would ask — this is what AI search engines quote)
- H2 subheadings breaking up the content
- Bullet points where appropriate
- 1,000-1,500 words
- A call-to-action linking to the relevant service page on my site
- Publish date displayed

**My business context:** I'm a voice coach in Lacey, Washington (South Sound / Olympia area). I teach singing, speaking, and ensemble coaching. I created the Adaptive Voice Framework (AVF) — a five-pillar approach to vocal development. I also created the PASS Profile, a vocal assessment tool.

**Priority topics (from my SEO research):**
1. How to Choose a Voice Teacher: What to Look For
2. Singing Lessons for Adults: It's Never Too Late to Start
3. What to Expect at Your First Singing Lesson
4. Vocal Health: How to Take Care of Your Singing Voice
5. The Difference Between a Voice Teacher and a Vocal Coach

Let's start with topic [NUMBER]. I'll share my perspective and expertise, and you help me shape it into an engaging, SEO-optimized blog post in my Forward Light style.
```

---

## Waiting on Ted

These items are blocked until Ted provides content, assets, or makes a decision.

### Blog Content
- [ ] **24 scraped blog posts** — Ted is scraping from old tedsvoice.com Webwave site.

### Vocal Health Hub Content
The page structure is built. These sections have "coming soon" placeholders:
- [ ] **Home Care & Remedies** — gargle recipes, tea recommendations, lozenge guidance
- [ ] **SOVT Tools & Techniques** — exercises with instructions, recommended tools
- [ ] **Vocal Fit** — product descriptions, format details, pricing
- [ ] **Articles & Resources** — featured articles, external resource links

### Other Content Needed
- [ ] **Organization logos/confirmation** — Professional associations for About page. Ted needs to confirm the list and provide logos or approve text-only approach.
- [ ] **Coaching/performance photos** — Images of Ted coaching, students performing
- [ ] **Heart of the Sound quartet URL** — Deferred. No online presence yet.
- [ ] **Google Business Profile status** — Does Ted have one? If not, this is the #1 local SEO action.
- [ ] **Stats & credentials for GEO** — Years of experience, number of students coached, certifications, performance milestones

---

## Completed

- [x] Build all 16 pages including FAQ, Privacy, Terms (Jan-Feb 2026)
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
- [x] Ensemble links: Voices of the Sound + Hot Notes in footer and About page (Feb 4, 2026)
- [x] Domain cutover: tedsvoiceacademy.com → Netlify, SSL provisioned (Feb 4, 2026)
- [x] Fixed redirect loop: removed conflicting redirect from netlify.toml (Feb 4, 2026)
- [x] Fixed all 4 Netlify forms — form-detect.html, success.astro, action="/success" (Feb 5, 2026 — Session 7)
- [x] Email notifications configured for all forms (Feb 5, 2026 — Session 7)
- [x] Comprehensive 21-item site audit (Feb 5, 2026 — Session 7)
- [x] Fixed robots.txt sitemap URL (www → bare domain) (Feb 5, 2026 — Session 8)
- [x] Fixed LocalBusiness schema URLs (www → bare domain) (Feb 5, 2026 — Session 8)
- [x] Removed broken favicon PNG references (Feb 5, 2026 — Session 8)
- [x] Replaced placeholder testimonials with Rapid Reviews carousel (Feb 5, 2026 — Session 8)
- [x] FAQ accordion pattern on FAQ/AVF/PASS pages (Feb 5, 2026 — Session 8)
- [x] Card height fix across 5 pages (Feb 5, 2026 — Session 8)
- [x] Privacy Policy page created (Feb 5, 2026 — Session 8)
- [x] Terms of Service page created (Feb 5, 2026 — Session 8)
- [x] AVF dials image updated (Feb 5, 2026 — Session 8)
- [x] Analytics decision: GA4 + Search Console + Looker Studio (Feb 5, 2026 — Session 8)
- [x] **Hero eyebrow sizing** — "MASTER YOUR VOICE" bumped from 1rem to 1.25rem (Feb 5, 2026 — Session 9)
- [x] **GA4 tracking live** — Measurement ID G-ZDX6WPT6CZ in BaseLayout.astro (Feb 5, 2026 — Session 9)
- [x] **Google Search Console** — Verified for tedsvoiceacademy.com, sitemap submitted (Feb 5, 2026 — Session 9)
- [x] **Privacy policy updated for GA4** — Disclosed Google Analytics usage (Feb 5, 2026 — Session 9)
- [x] **Contact form tone review** — H1 softened, fields made optional, warmer copy (Feb 5, 2026 — Session 9)
- [x] **GEO/SEO research** — Comprehensive strategy report with 8 GEO recs, 10 SEO improvements, 12 blog topics, schema additions (Feb 5, 2026 — Session 9)

---

*Last updated: February 5, 2026 (Session 9)*
