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
- [x] **Image optimization (automated batch)** — DONE (Session 10, commit `62def96`). All 9 PNGs converted to WebP. 84% size reduction (7.5MB to 1.2MB). All src references updated.
- [x] **Rename award photos** — DONE (Session 10, commit `62def96`). SEO-friendly filenames.
- [x] **Add award photos to About page** — DONE (Session 10, commit `62def96`). Awards grid with captions + Person schema award data.

---

## Tier 1 — High-Value Additions

### GEO/SEO Implementation (Research DONE — Session 9)

Full research report completed. Ted said "I will definitely want to fully maximize SEO (and GEO if useful) potential."

**Quick GEO/SEO wins (approved or ready to discuss):**
- [x] **Course + Service schema markup** — DONE (Session 10, commit `fed84fe`). Course + Service JSON-LD on Singing, Speaking, Ensembles pages.
- [x] **Answer capsule summaries** — DONE (Session 13). 2-3 sentence GEO summaries on 7 pages: Singing, Speaking, Ensembles, Pricing, Workshops, AVF, PASS Profile.
- [x] **Add publish/update dates** — DONE (Session 13). `<time>` tags with `.page-date` styling on 10 content pages.
- [x] **Track AI referral traffic in GA4** — DONE (Session 15). Custom `ai_referral` event tracking in BaseLayout.astro. Ted needs to create Custom Channel Group in GA4 Admin.
- [ ] **Google Business Profile optimization** — Ted confirmed he has one for tedsvoiceacademy.com and has done good work on it. Wants to maximize it further.
- [x] **Internal linking strategy** — DONE (Session 13). 2-3 contextual cross-links added to 10 pages.
- [x] **Self-host fonts** — DONE (Session 13). Inter (4 weights) + Playfair Display (4 weights) + Cinzel (3 weights) + Cormorant Garamond (4 weights) self-hosted as WOFF2. Google Fonts CDN completely removed.
- [x] **Breadcrumb schema + visual breadcrumbs** — DONE (Session 12). Breadcrumb.astro component + BreadcrumbList schema on all 17 interior pages + blog posts.
- [ ] **Review collection system** — Create process for requesting Google reviews from students.
- [ ] **Local citation / NAP consistency audit** — Verify business name, address, phone are identical across all directories (Alignable, Chamber of Commerce, Google Business Profile, Facebook, etc.). Inconsistent NAP hurts local search rankings. (Added Session 15 from cross-reference audit.)

**Larger GEO/SEO efforts:**
- [ ] **Add statistics, credentials, verifiable facts** throughout site copy (needs Ted's input — years experience, number of students, certifications)
- [ ] **Multi-platform presence** — YouTube vocal tip videos, LinkedIn articles, Reddit answers in r/singing
- [ ] **Voice search optimization** — Conversational Q&A content targeting "how much do voice lessons cost in Lacey WA?" etc.
- [ ] **Long-tail keyword optimization** — Target specific queries throughout site content

### Blog System + Content (Ted's #1 post-launch priority)
Blog stays visible in nav (Ted's decision, Feb 5 session 8).

- [x] **Blog individual post system** — ✅ DONE (Feb 16). Layout, dynamic routing, 24 posts, hero images, all deployed.
- [x] **Import 24 scraped blog posts** — ✅ DONE (Feb 16). All 24 posts converted with proper frontmatter, categories, tags.
- [x] **Blog SEO optimization** — ✅ DONE (Feb 16). Categories rebalanced, tags standardized, descriptions optimized 120-160 chars, local SEO terms added.
- [x] **Blog landing interactive filtering** — ✅ DONE (Feb 16). Category cards filter posts with JS toggle, count badges, active states.
- [x] **CMS for content updates** — DONE (Session 12). Decap CMS integrated. `public/admin/` with config.yml mapped to blog collection. Netlify Identity widget in BaseLayout. **Requires Netlify dashboard activation:** Enable Identity (invite-only), Enable Git Gateway, Invite ted@tedsvoiceacademy.com.
- [x] **BlogPosting schema** — DONE (Session 12). BlogPosting JSON-LD in BlogPostLayout.astro. Auto-applies to all 24 posts.

**Blog content strategy from GEO/SEO research (12 prioritized topics):**
- Tier 1: How to choose a voice teacher, Singing lessons for adults, What to expect at first lesson, Vocal health care, Voice teacher vs vocal coach
- Tier 2: The AVF Framework explained, Vocal warmups for beginners, Musical theatre audition prep, Can you teach yourself to sing?, Speaking with confidence
- Tier 3: Best performance venues in Olympia/Lacey, Singing groups in South Sound area

### Vocal Health Page — ✅ COMPLETE (Feb 16, 2026)
All 4 "coming soon" placeholders replaced with real content (commit `94604ba`):

1. [x] **Home Care & Remedies** — Ted's gargle recipe (8 ingredients), Dr. Gould's Gargle (clinical recipe), tea/honey tips
2. [x] **SOVT Tools & Techniques** — Why SOVT works, 4 exercises, 5-minute routine, straw guide, usage guidance
3. [x] **Vocal Fit** — Product preview (LOW/HIGH bundles, 8 exercises, companion PDF), "coming soon to store" with contact/newsletter links. **Still needs:** e-commerce integration (Lemonsqueezy) before it can be sold.
4. [x] **Articles & Resources** — 6 curated blog links + "Explore all articles" link to /blog

Source content: Ted's gargle PDFs from `H:\OneDrive\Ted's Voice Academy\Vocal Health\`, SOVT docs extracted from .docx files via PowerShell Word COM.

### Other Tier 1 Items
- [x] **OG default image for social sharing** — DONE (Session 13). Generated `og-default.jpg` (1200x630px). BaseLayout updated with absolute URLs.
- [x] **Per-page OG images** — DONE (Session 12). 14 branded OG images (1200x630) generated with sharp. All content pages wired with ogImage prop.
- [ ] **Looker Studio weekly email** — Deferred until GA4 has data. Set up "TVA Website Weekly Performance Overview" report.
- [ ] **Email newsletter system** — Buttondown recommended. Connects to existing newsletter signup forms.
- [ ] **Form notification email formatting** — Netlify form emails are plain/ugly. Needs serverless function or third-party integration.

---

## Tier 2 — Important Additions

- [x] **Organizations & affiliations on About page** — DONE (Session 10, commit `3c54db0`). 8 org logos + 2 ensemble logos. "Proudly connected with" section. All linked to websites. Person schema updated with 10 memberOf entries.
- [x] **Coaching & performance photos (partial)** — DONE (Sessions 14 + 14c). 3 inline photos placed (workshops, about, ensembles). 3 hero images placed (Singing, Speaking, Ensembles). Remaining pages (Workshops, Vocal Health, Pricing, Blog, FAQ, Contact) still have text-only heroes. Ted has `Ted Quartet coach.png` and `studio lesson2.png` ready for future use.
- [x] **Vocal Health Hub content** — ✅ DONE (Feb 16). All 4 "coming soon" placeholders replaced with real content.
- [ ] **Add Review/AggregateRating schema** — When Google reviews exist, add to LocalBusiness markup. Star ratings in search results dramatically increase CTR.
- [ ] **Event schema on Workshops page** — When specific workshops are scheduled, add Event structured data.

---

## Tier 3 — Cosmetic / Visual Polish (Ted Wants ASAP)

Ted explicitly said he wants to get to these as soon as possible. These need collaborative exploration — not solo implementation.

- [x] **Card hover enhancements** — DONE (Session 10, commit `f21a0ce`). Subtle lift + shadow on all card types.
- [x] **Gold accent lines under headings** — DONE (Session 10, commit `f21a0ce`). `.decorated-heading` utility with `--light` and `--left` variants.
- [x] **Drop caps on opening paragraphs** — DONE (Session 10, commit `f21a0ce`). `.drop-cap` utility with Playfair Display.
- [x] **Pull quotes / callout boxes** — CSS utilities DONE (Session 10, commit `f21a0ce`). Applied to 6 pages (Session 10, commit `2d6b9eb`).
- [x] **Background texture & visual richness** — DONE (Session 10 initial, **Session 11 overhaul**). Session 10's SVG approach didn't render in Astro scoped styles. Session 11: real PNG noise texture baked into CSS multiple backgrounds with `soft-light` blend. Applied to ALL dark sections on ALL 16 pages. Commit `6aae45e`.
- [x] **Scroll-triggered animations** — DONE (Session 11, commits `3f1042e`, `6aae45e`). `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-stagger` CSS utilities + IntersectionObserver. Applied to all 16 pages. `prefers-reduced-motion` respected.
- [x] **Hero entrance animations** — DONE (Session 11, commits `e8cee80`, `6aae45e`). CSS keyframe animations on pages with hero photos: Homepage, About, AVF, PASS Profile.
- [x] **Section dividers** — DONE (Session 13). `SectionDivider.astro` component with wave/curve/angle variants + gold accent stroke. Deployed on 12 pages at dark↔light section transitions.
- [x] **Iconography** — DONE (Session 14). 64 Lucide inline SVG icons across 10 pages. `.icon-inline` CSS utility in global.css.
- [ ] **Hero parallax effect** — CSS-only parallax on hero photos. Disabled on mobile. Ted interested but deferred.
- [x] **Varied section layouts** — DONE (Sessions 14c-15). Speaking: icon-emphasis cards + numbered step timeline. Workshops: session roadmap + checklist layout. Singing (Session 15): icon-emphasis cards + genre tile grid.
- [ ] **Digital product delivery for Vocal Fit** — Gumroad or Lemonsqueezy for MP3 delivery. Ted confirmed (Feb 16) this will be a purchased product — needs e-commerce setup. See "Waiting on Ted > E-Commerce" section. (Note: Riser Placement App uses Stripe/Supabase/Netlify instead — see E-Commerce section.)
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
1. Google Business Profile optimization (Ted has one — maximize it)
2. robots.txt update for AI crawlers ✅ DONE
3. llms.txt file ✅ DONE
4. Review collection system
5. Course + Service schema ✅ DONE
6. Answer capsules on service pages ✅ DONE (Session 13)
7. Publish/update dates on pages ✅ DONE (Session 13)
8. AI traffic tracking in GA4
9. Blog content (Tier 1 posts)
10. Internal linking strategy ✅ DONE (Session 13)

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
- [x] **24 scraped blog posts** — ✅ DONE (Feb 16). All imported, optimized, and live.

### Vocal Health Hub Content — ✅ COMPLETE (Feb 16)
All placeholder sections replaced with real content. Remaining work:
- [ ] **Vocal Fit e-commerce** — Product is described on the page, but needs e-commerce integration (Lemonsqueezy or similar) before it can be sold. Update store link when ready.

### E-Commerce / Digital Product Sales
- [ ] **Vocal Fit e-commerce** — Needed for Vocal Fit MP3 bundle sales. Options: Gumroad, Lemonsqueezy, Shopify Lite, or Stripe direct. Ted needs to decide approach + pricing.
- [ ] **Riser Placement App** — Will use **Stripe + Supabase + Netlify** (same architecture as Intonation Lab). NOT Lemonsqueezy. Being built in a separate chat. This approach provides better copy-protection via authenticated web app access rather than a self-contained download.

### Other Content Needed
- [x] **Organization logos/confirmation** — DONE (Session 10). Ted provided all logos. List confirmed and implemented.
- [ ] **Coaching/performance photos** — Images of Ted coaching, students performing
- [ ] **Heart of the Sound quartet URL** — Deferred. No online presence yet.
- [x] **Google Business Profile status** — Ted confirmed he has one and wants to maximize it. Discussion item for optimization.
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

- [x] **Image optimization** — All 9 PNGs converted to WebP, 84% size reduction (Feb 5, 2026 — Session 10)
- [x] **Award photos on About page** — Renamed, added to Credentials section with captions, Person schema updated (Feb 5, 2026 — Session 10)
- [x] **Professional affiliations on About page** — 8 org logos + 2 ensemble logos, linked to websites, Person schema memberOf expanded to 10 (Feb 5, 2026 — Session 10)
- [x] **Course + Service schema** — JSON-LD on Singing, Speaking, Ensembles pages. Course + Service types with provider, instructor, offers, area served (Feb 5, 2026 — Session 10)
- [x] **PASS logo visibility fix** — White card container on Speaking page for contrast against dark teal background (Feb 5, 2026 — Session 10)
- [x] **Card symmetry fix** — flex-grow on card paragraphs across Singing, Speaking, Ensembles, Blog pages. Homepage ecosystem grid tablet centering improved (Feb 5, 2026 — Session 10)
- [x] **Visual Polish Tier 1** — Card hovers, gold accent lines, drop caps, pull quote utilities in global.css. Applied to Homepage, Singing, Speaking, Ensembles (Feb 5, 2026 — Session 10)
- [x] **Photos placed on service pages** — 4 photos converted to WebP. Singing, Speaking, Ensembles pages now have intro section text+image grids (Feb 5, 2026 — Session 10)
- [x] **Visual Polish Tier 2** — SVG grain textures on navy sections (7 pages), pull quotes applied to key content (6 pages), section-accent-top utility (Feb 5, 2026 — Session 10)

- [x] **Grain texture overhaul** — Session 10's SVG feTurbulence approach didn't render in Astro. Session 11: real PNG noise texture baked into CSS backgrounds with soft-light blend across ALL 16 pages (Feb 5, 2026 — Session 11)
- [x] **Credentials bar blending** — Homepage credentials bar gradient + gold hairline flows from hero (Feb 5, 2026 — Session 11)
- [x] **Scroll-triggered reveal animations** — .reveal, .reveal-left, .reveal-right, .reveal-stagger CSS + IntersectionObserver on ALL 16 pages (Feb 5, 2026 — Session 11)
- [x] **Hero entrance animations** — CSS keyframe animations on Homepage, About, AVF, PASS Profile hero sections (Feb 5, 2026 — Session 11)

- [x] **Dead `.has-grain` CSS cleanup** — Removed ~35 lines of unused global CSS and `has-grain` class from 5 page HTMLs (Feb 5, 2026 — Session 13)
- [x] **OG default image** — Generated `og-default.jpg` (1200x630px) with sharp. BaseLayout absolute URL fix for og:image/twitter:image (Feb 5, 2026 — Session 13)
- [x] **Answer capsule summaries** — GEO-optimized summaries on 7 service/product pages (Feb 5, 2026 — Session 13)
- [x] **SectionDivider component** — SVG wave/curve/angle shapes with gold accent stroke. Deployed on 12 pages (Feb 5, 2026 — Session 13)
- [x] **About page beliefs grid fix** — Changed from auto-fit 3+1 orphan to 2×2 grid (Feb 5, 2026 — Session 13)
- [x] **Self-host fonts** — Inter + Playfair Display + Cinzel + Cormorant Garamond as WOFF2. Google Fonts CDN fully removed (Feb 5, 2026 — Session 13)
- [x] **Internal linking strategy** — 2-3 contextual cross-links added to 10 pages (Feb 5, 2026 — Session 13)
- [x] **Publish/update dates** — `<time>` tags with `.page-date` CSS on 10 content pages (Feb 5, 2026 — Session 13)

- [x] **.gitignore** — Created for node_modules, dist, .astro, .DS_Store (Feb 6, 2026 — Session 14)
- [x] **Card grid symmetry fixes** — Fixed orphan cards on 6 pages (singing, index, ensembles, pricing, blog, pass-profile). Replaced auto-fit with explicit column counts. Added "Show preparation" 6th card to ensembles (Feb 6, 2026 — Session 14)
- [x] **Photo placement** — Processed 3 photos to WebP, placed on workshops (Ted teaching), about (award ceremony), ensembles (chorus directing) (Feb 6, 2026 — Session 14)
- [x] **Lucide iconography** — 64 inline SVG icons across 10 pages. `.icon-inline` CSS utility. Icons on card H3 headings using currentColor stroke (Feb 6, 2026 — Session 14)
- [x] **Icon visibility fix** — Added explicit CSS width/height to `.icon-inline` to override global SVG reset. All 64 icons now render correctly (Feb 6, 2026 — Session 14b)
- [x] **Additional grid symmetry fixes** — speaking `.how-grid`, pass-profile `.differentiators` + `.applications-grid` changed to `repeat(2, 1fr)`. Pricing `.two-col` got explicit 2-col override (Feb 6, 2026 — Session 14b)
- [x] **Trademark symbols** — Added ™ to PASS Profile, AVF, Adaptive Voice Framework across 14 files (38 instances). Key headings + first body mention per page (Feb 6, 2026 — Session 14b)
- [x] **Hero images on service pages** — Added hero images to Singing, Speaking, Ensembles. Converted text-only heroes to hero-grid layout with entrance animations. Photos: hero-singing-lesson.webp (68KB), hero-speaking.webp (27KB), hero-ensembles.webp (79KB) (Feb 6, 2026 — Session 14c)

- [x] **Blog system complete** — 24 posts imported from scraped content. BlogPostLayout.astro, [...slug].astro routing, blog/index.astro landing page. 24 hero images in public/images/blog/. Build: 40 pages. (Feb 16, 2026)
- [x] **Blog SEO optimization** — Categories rebalanced (Vocal Health 4→8, Performance 5→7). Tags standardized across all 24 posts. Descriptions optimized for 120-160 chars with local SEO terms. (Feb 16, 2026)
- [x] **Blog interactive category filtering** — Category cards on blog landing page converted to JS-powered filter buttons with post counts, active states, filter indicator bar. (Feb 16, 2026)
- [x] **Vocal Health page — all placeholders replaced** — Home Care (gargle recipes, tea tips), SOVT (exercises, routine, straw guide), Vocal Fit (product preview), Articles (6 blog links). Source content from Ted's PDFs + .docx files. (Feb 16, 2026)

- [x] **Shop hub page** — New `/shop` page with 5 products (3 live, 2 coming-soon). Nav and footer updated. (Feb 21, 2026 — Session 12)
- [x] **Intonation Lab product page** — New `/intonation-lab` page with hero, features, pricing, FAQ. (Feb 21, 2026 — Session 12)
- [x] **BlogPosting schema** — BlogPosting JSON-LD in BlogPostLayout.astro. Auto-applies to all 24 posts. (Feb 21, 2026 — Session 12)
- [x] **Breadcrumb component + schema** — Breadcrumb.astro component with BreadcrumbList JSON-LD deployed on all 17 interior pages + 24 blog posts. (Feb 21, 2026 — Session 12)
- [x] **Homepage ecosystem grid updated** — Intonation Lab card added, 3x2 grid layout. (Feb 21, 2026 — Session 12)
- [x] **Related posts on blog** — Scoring algorithm (categories 3x, tags 1x) in [...slug].astro. Top 3 related posts shown on each of 24 blog posts. (Feb 21, 2026 — Session 12)
- [x] **Per-page OG images** — 14 branded social sharing images generated with sharp (1200x630). ogImage prop wired on all content pages. (Feb 21, 2026 — Session 12)
- [x] **llms.txt updated** — Added Intonation Lab + Shop sections and URLs. Fixed PASS Profile description. (Feb 21, 2026 — Session 12)
- [x] **Decap CMS integrated** — public/admin/ with Netlify Identity + Git Gateway backend. Blog collection mapped to existing schema. Requires Netlify dashboard activation. (Feb 21, 2026 — Session 12)
- [x] **www domain URL fix** — BaseLayout siteUrl fixed (www→bare). 12 www URLs in pass-profile schema fixed. PASS OG image switched to branded og-pass-profile.jpg. (Feb 21, 2026 — Session 12)
- [x] **PASS image optimization** — PASS + Voice-Brand Logo (877KB→186KB) and Team Dynamics Logo (2.3MB→183KB) converted to WebP. 88% total reduction. (Feb 21, 2026 — Session 12)
- [x] **noreferrer on all external links** — Added to about (11 links), avf (3), intonation-lab (6), shop (3), Footer (8). All target="_blank" links now have rel="noopener noreferrer". (Feb 21, 2026 — Session 12)
- [x] **Schema on remaining pages** — Service schema on Workshops, OfferCatalog on Pricing, WebPage on Vocal Health. All 18 route pages now have page-specific structured data. (Feb 21, 2026 — Session 12)
- [x] **404 page** — Branded error page with navy/gold design, quick links, CTAs. Netlify auto-serves for missing routes. (Feb 21, 2026 — Session 12)
- [x] **Lazy loading** — `loading="lazy" decoding="async"` on 27 below-fold images across 12 files. Hero images left eager for fast LCP. (Feb 21, 2026 — Session 12)
- [x] **Performance optimizations** — Preconnect hints for GA + Netlify Identity, font preloading for Inter 400 + Playfair Display 700, sitemap filter excluding /success/. (Feb 21, 2026 — Session 12)

---

*Last updated: February 21, 2026 (Session 12)*
