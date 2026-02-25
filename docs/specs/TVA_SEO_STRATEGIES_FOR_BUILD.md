# TED'S VOICE ACADEMY â€” COMPREHENSIVE SEO STRATEGIES FOR BUILD
## Everything That Should Be Baked Into the Website From Day One

**Document Purpose:** Actionable SEO implementation instructions for Claude Code. Covers strategies NOT already addressed in `TVA_SEO_Meta_Content_v1.md` (meta tags, basic schema, internal linking) or `local-seo-plan.md` (ongoing local SEO workflow). This document fills the remaining gaps so the site launches with a complete SEO foundation.

**Created:** February 3, 2026
**Status:** READY FOR IMPLEMENTATION
**Companion Files:** `TVA_SEO_Meta_Content_v1.md`, `local-seo-plan.md`

---

## HOW TO USE THIS DOCUMENT

Claude Code should treat this as an implementation checklist. Each section describes WHAT to build and WHY it matters. Where code or markup is needed, examples are provided. Cross-references to existing project files are noted where relevant.

Priority levels:
- **CRITICAL** â€” Must be in place at launch
- **HIGH** â€” Should be in place at launch; acceptable to add within first week
- **MEDIUM** â€” Implement within first month
- **LOW** â€” Nice-to-have; implement when convenient

---

## TABLE OF CONTENTS

1. FAQ Sections on Key Pages
2. Generative Engine Optimization (GEO)
3. Additional Schema Markup (Beyond What's in SEO Meta Doc)
4. E-E-A-T Signal Implementation
5. Content Structure for AI Overviews & Featured Snippets
6. Voice Search Optimization
7. Topical Authority & Content Clustering
8. Semantic HTML Best Practices
9. Breadcrumb Navigation
10. URL Structure & Canonical Strategy
11. XML Sitemap Enhancements
12. Accessibility as SEO
13. Performance Budget & Core Web Vitals
14. 404 Page & Error Handling
15. Review & Testimonial Strategy
16. Content Freshness Signals
17. Brand Mention & Citation Building
18. Open Graph & Social Sharing (Supplements Existing)
19. Analytics & Search Console Setup
20. Robots.txt Refinements

---

## 1. FAQ SECTIONS ON KEY PAGES

**Priority:** HIGH
**Why it matters:** FAQ sections remain one of the highest-value SEO tactics in 2026. Even though Google restricted FAQ rich results to government/health sites in 2023, FAQ content still drives visibility through People Also Ask boxes, featured snippets, voice search answers, and AI Overview citations. Well-structured Q&A content is exactly the format AI systems pull from when generating answers.

### Where to Add FAQs

Add a dedicated FAQ section to these pages:

| Page | Number of FAQs | Focus |
|------|---------------|-------|
| Singing | 5-6 | Common questions prospective singing students ask |
| Speaking | 5-6 | Common questions about speaking coaching |
| Ensembles | 4-5 | Questions choir directors/ensemble leaders ask |
| AVF (Book) | 5-6 | Questions about the book, the framework, who it's for |
| PASS Profile | 4-5 | Questions about the assessment, how it works, who uses it |
| Pricing | 4-5 | Questions about cost, packages, what's included |
| Workshops | 4-5 | Questions about format, availability, custom workshops |
| Vocal Health Hub | 5-6 | Common vocal health questions (high search volume) |

### FAQ Content Guidelines

- Write questions the way real people would type them into Google (conversational, specific)
- Keep answers concise but complete â€” 40-80 words per answer is the sweet spot for featured snippets
- Naturally incorporate target keywords from `TVA_SEO_Meta_Content_v1.md` into both questions and answers
- Include location keywords where natural ("voice lessons in Lacey, WA")
- Each answer should be genuinely helpful, not a sales pitch (Google penalizes promotional FAQ content)
- Link to relevant pages within answers where it adds value (supports internal linking strategy)
- Write in Forward Light style â€” positive framing, accessible language, first person where appropriate

### Sample FAQs by Page

**Singing Page:**
- "How do I know if voice lessons are right for me?"
- "What styles of singing do you teach?"
- "Do I need any experience before starting singing lessons?"
- "How long does it take to see improvement in my singing?"
- "What happens during a first singing lesson?"
- "Do you offer online singing lessons?"

**Speaking Page:**
- "Can a speaking coach really help me sound more confident?"
- "What's the difference between a speaking coach and a speech therapist?"
- "How do voice lessons help with public speaking?"
- "Do you work with people who are nervous about presenting?"
- "What kinds of professionals benefit from speaking coaching?"

**AVF Book Page:**
- "Who is The Adaptive Voice Framework written for?"
- "Do I need a music background to understand this book?"
- "What makes this book different from other vocal technique books?"
- "Can I use the book on its own or do I need a coach?"
- "What are the Five Pillars of the Adaptive Voice Framework?"
- "Where can I buy The Adaptive Voice Framework?"

**Vocal Health Hub:**
- "How do I know if my voice is healthy?"
- "What should I do if my voice feels tired after speaking all day?"
- "How much water should I drink for vocal health?"
- "When should I see a doctor about my voice?"
- "Are vocal warm-ups really necessary?"
- "Can vocal damage be reversed?"

### FAQ Schema Markup

Even though FAQ rich results are limited, FAQ schema still helps search engines and AI systems understand the Q&A structure. Apply FAQPage schema to pages with genuine FAQ sections (not marketing pages with fake FAQs).

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if voice lessons are right for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voice lessons are for anyone who wants to understand and improve how they use their voice. Whether you sing, speak professionally, or just want more confidence, lessons help you build skills that last. No experience is needed to get started."
      }
    },
    {
      "@type": "Question",
      "name": "What styles of singing do you teach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I teach all styles. My approach builds a well-balanced voice first, then applies that foundation to whatever genre you love â€” classical, pop, musical theater, jazz, folk, or anything else. Good singing is good singing; the rest is just notes."
      }
    }
  ]
}
```

**Implementation note:** Combine FAQPage schema with the existing page-specific schema (e.g., LocalBusiness on service pages, Book on AVF page). Multiple schema types on one page is perfectly valid and recommended.

---

## 2. GENERATIVE ENGINE OPTIMIZATION (GEO)

**Priority:** HIGH
**Why it matters:** AI search tools (Google AI Overviews, ChatGPT, Perplexity, Claude) are increasingly how people find information. In 2026, optimizing for AI citation is becoming as important as optimizing for traditional rankings. For a niche authority like Ted, GEO is especially promising â€” LLMs favor clear, expert, well-structured content from genuine practitioners.

### Content Structure for LLM Comprehension

LLMs parse and cite content that is clearly organized and semantically unambiguous. Apply these principles across all pages:

**Clear entity definitions:** Every page should make it immediately clear WHAT the page is about, WHO is behind it, and WHERE the service is offered. Don't bury the lede.

Example (good): "Ted's Voice Academy offers private singing lessons in Lacey, Washington, for students of all experience levels and genres."

Example (less good): "Welcome to a journey of vocal discovery where every voice finds its true path..."

**Factual, citable statements:** Include specific, quotable facts that LLMs can extract and cite:
- "40 years of teaching experience"
- "Author of The Adaptive Voice Framework, a 674-page guide to vocal technique"
- "Located in Lacey, Washington, serving the South Puget Sound region"
- "Teaches singing, speaking, and ensemble coaching"
- "Framework built on Five Pillars: Body, Breath, Phonation, Resonance, and Expression"

**Direct answers to common questions:** When content answers a question (especially in FAQ sections and the Vocal Health Hub), state the answer clearly in the first sentence, then elaborate. This matches how LLMs extract information.

### Entity Consistency

Use consistent terminology everywhere so AI systems build a clear entity profile:
- Always "Ted's Voice Academy" (not "TVA" or "the Academy" on first reference)
- Always "The Adaptive Voice Framework" for the book/framework
- Always "PASS Profile" for the assessment
- Always "Lacey, Washington" or "Lacey, WA" (not just "Lacey" without state)
- Always "Five Pillars" and "Eight Dials" (capital, consistent naming)

### Structured Data for Entity Graph

The existing LocalBusiness, Person, and Book schema in `TVA_SEO_Meta_Content_v1.md` already support entity understanding. The additional schema types in Section 3 below strengthen this further.

### Brand Mention Optimization

LLMs reference brands they've seen mentioned across multiple credible sources. See Section 17 (Brand Mention & Citation Building) for strategies.

---

## 3. ADDITIONAL SCHEMA MARKUP

**Priority:** CRITICAL
**Why it matters:** The existing `TVA_SEO_Meta_Content_v1.md` includes LocalBusiness, Person, and Book schema. These additional types complete the picture and are especially important for AI search comprehension in 2026.

### WebSite Schema (add to every page via global layout)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ted's Voice Academy",
  "url": "https://www.tedsvoiceacademy.com",
  "description": "Voice coaching for singing, speaking, and ensembles in Lacey, Washington",
  "publisher": {
    "@type": "Person",
    "name": "Ted",
    "jobTitle": "Voice Coach"
  }
}
```

### BreadcrumbList Schema (add to all interior pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.tedsvoiceacademy.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Singing Lessons",
      "item": "https://www.tedsvoiceacademy.com/singing"
    }
  ]
}
```

### Service Schema (add to Singing, Speaking, Ensembles pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Private Singing Lessons",
  "description": "One-on-one singing lessons for all styles and skill levels, building well-balanced vocal technique through the Adaptive Voice Framework.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ted's Voice Academy"
  },
  "areaServed": [
    { "@type": "City", "name": "Lacey", "addressRegion": "WA" },
    { "@type": "City", "name": "Olympia", "addressRegion": "WA" },
    { "@type": "City", "name": "Tumwater", "addressRegion": "WA" }
  ],
  "serviceType": "Voice Coaching"
}
```

Repeat for Speaking and Ensemble coaching with appropriate descriptions.

### EducationalOrganization Schema (supplementary, About page)

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Ted's Voice Academy",
  "description": "Voice coaching studio offering singing, speaking, and ensemble instruction in Lacey, Washington",
  "url": "https://www.tedsvoiceacademy.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4204 Lorna Ct SE",
    "addressLocality": "Lacey",
    "addressRegion": "WA",
    "postalCode": "98503"
  },
  "founder": {
    "@type": "Person",
    "name": "Ted"
  }
}
```

### Event Schema (Workshops page â€” add when specific events are scheduled)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "AVF Workshop: Singer Track",
  "description": "Hands-on workshop exploring the Adaptive Voice Framework for singers",
  "organizer": {
    "@type": "LocalBusiness",
    "name": "Ted's Voice Academy"
  },
  "location": {
    "@type": "Place",
    "name": "Ted's Voice Academy",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lacey",
      "addressRegion": "WA"
    }
  },
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
}
```

**Note:** Only add Event schema when you have confirmed dates. For the initial "interest collection" phase, omit Event schema and use the Service schema on the Workshops page instead.

### Article Schema (Blog posts â€” apply via blog post template)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post Title]",
  "author": {
    "@type": "Person",
    "name": "Ted",
    "url": "https://www.tedsvoiceacademy.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ted's Voice Academy",
    "url": "https://www.tedsvoiceacademy.com"
  },
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "image": "[featured image URL]",
  "description": "[meta description]"
}
```

### Implementation Approach

Use a centralized Astro component or layout partial for schema that appears on every page (WebSite, LocalBusiness). Use page-specific frontmatter or props for page-specific schema (Service, Book, FAQPage, Article, Event). This keeps schema maintainable and consistent.

---

## 4. E-E-A-T SIGNAL IMPLEMENTATION

**Priority:** HIGH
**Why it matters:** Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness) is the primary lens through which Google evaluates content quality. For a voice coaching business built on personal expertise, E-E-A-T is a massive natural advantage â€” but only if the signals are visible to search engines.

### Experience Signals (show you've DONE this work)

- **Credentials bar** on homepage (already in copy): "Four decades of teaching â€¢ Award-winning performer â€¢ Recognized among Washington's top vocal instructors" â€” keep this visible and crawlable (not buried in an image)
- **About page** should clearly state years of experience, specific accomplishments, performance history, and teaching background â€” this content exists in the v5 About page copy
- **Testimonials** with real names, roles, and specific outcomes (see Section 15)
- **Blog posts** should reference real teaching experiences and real student scenarios (anonymized)
- **Vocal Health Hub** content should explicitly note "based on 40 years of teaching experience" or similar qualifiers

### Expertise Signals (show you KNOW this domain)

- The AVF book is the single strongest expertise signal â€” link to it from every service page and ensure Book schema is implemented
- Blog content should demonstrate deep knowledge, not surface-level advice
- Vocal Health Hub content should be thorough and well-sourced (link to medical sources where appropriate, with clear notes that Ted is not a medical professional)
- PASS Profile demonstrates systematic, research-backed methodology
- Use the correct technical terminology throughout (aligned with Ted's philosophy: "body alignment" not "posture," "unity" not "blend")

### Authoritativeness Signals (show others RECOGNIZE your expertise)

- Display any media mentions, conference appearances, or professional affiliations
- Amazon book listing link (already planned)
- Professional association memberships if applicable
- Any awards or recognition
- Inbound links from other sites (ongoing effort â€” see Section 17)

### Trustworthiness Signals (show you're SAFE to do business with)

- **HTTPS** â€” already handled by Netlify
- **Privacy Policy page** â€” MUST be present at launch (see below)
- **Terms of Service** â€” recommended at launch
- **Clear contact information** on every page (footer NAP)
- **Physical address** displayed (already in Contact page)
- **Professional headshot** â€” already in use
- **Consistent NAP** across website, Google Business Profile, and all directories

### Privacy Policy & Terms Pages

**Priority: CRITICAL (Privacy Policy) / HIGH (Terms of Service)**

Create minimal but legitimate pages:

**Privacy Policy** should cover:
- What data is collected (contact forms, email signups)
- How data is used (to respond to inquiries, provide services)
- Third-party services used (Netlify Forms, Google Analytics, Google Maps)
- Contact information for privacy questions
- Cookie usage (if any analytics are used)

**Terms of Service** should cover:
- Website usage terms
- Intellectual property (especially re: AVF book content)
- Limitation of liability
- Governing jurisdiction (Washington state)

These pages don't need heavy design â€” simple text pages are fine. But they MUST exist for trustworthiness signals. Add links in the site footer.

---

## 5. CONTENT STRUCTURE FOR AI OVERVIEWS & FEATURED SNIPPETS

**Priority:** HIGH
**Why it matters:** Google AI Overviews now appear for a substantial percentage of queries. They preferentially cite content that is clearly structured, factually specific, and directly answers questions. Featured snippets (the "answer box" above organic results) similarly favor concise, well-organized content.

### Formatting Principles

**Lead with the answer.** For any content that answers a question (FAQ sections, Vocal Health Hub articles, blog posts), put the direct answer in the first 1-2 sentences of the section, then elaborate.

**Use clear heading hierarchy.** Structure content with H2s and H3s that describe what the section covers. Search engines use headings to understand content organization.

Good: `<h2>How Singing Lessons Work</h2>`
Bad: `<h2>A Journey of Discovery</h2>`

**Use descriptive subheadings as questions where appropriate.** Especially in educational content (Vocal Health Hub, blog), structure subheadings as questions real people ask:
- "What causes vocal fatigue?"
- "How often should I warm up my voice?"
- "What's the difference between head voice and chest voice?"

**Concise answer paragraphs.** For featured snippet optimization, keep the paragraph directly following an H2/H3 question to 40-60 words. This is the ideal length Google pulls for featured snippets.

**Definition format for key concepts.** When introducing AVF concepts (Five Pillars, Eight Dials, etc.), use a clear "X is Y" definition format:

"Body alignment is the first pillar of the Adaptive Voice Framework. It refers to how you hold and position your body to support efficient vocal production."

### Table and List Optimization

Where content naturally involves comparisons or lists, use proper HTML tables or lists. Google and AI systems extract these formats readily:
- Service comparison tables on Pricing page
- Pillar/Dial summaries on AVF page
- "What to expect" lists on service pages

---

## 6. VOICE SEARCH OPTIMIZATION

**Priority:** MEDIUM
**Why it matters:** Voice search queries are conversational, longer, and question-based. They align naturally with FAQ content and well-structured educational material â€” both of which Ted's site has in abundance.

### Implementation

- FAQ sections (Section 1) are the primary voice search asset
- Use natural, conversational language in headings and content (already aligned with Forward Light style)
- Include location in natural phrasing: "If you're looking for a voice coach near Olympia..." rather than keyword-stuffed phrasing
- Ensure mobile page speed is excellent (voice searches are overwhelmingly mobile)
- The Vocal Health Hub is a particularly strong voice search target â€” people ask health questions verbally

No special technical implementation needed beyond the FAQ sections and content structure already described. Voice search optimization is primarily a content strategy, not a technical one.

---

## 7. TOPICAL AUTHORITY & CONTENT CLUSTERING

**Priority:** MEDIUM (structure now, content fills over time)
**Why it matters:** Google rewards sites that demonstrate comprehensive coverage of a topic. Topical authority means having multiple interlinked pages that cover a subject from different angles, establishing you as THE resource for that topic.

### Ted's Natural Topic Clusters

Ted's site already has strong natural clusters. Make sure these are connected through internal links:

**Cluster 1: Singing**
- Pillar: /singing (service page)
- Supporting: Blog posts about singing technique, genre-specific tips, student stories
- Supporting: Vocal Health Hub (caring for the singing voice)
- Supporting: AVF page (the framework behind the teaching)

**Cluster 2: Speaking**
- Pillar: /speaking (service page)
- Supporting: Blog posts about presentation skills, professional communication
- Supporting: PASS Profile (communication assessment)
- Supporting: Vocal Health Hub (voice care for speakers)

**Cluster 3: Vocal Knowledge**
- Pillar: /vocal-health (hub page)
- Supporting: Individual vocal health articles
- Supporting: AVF page (understanding the voice)
- Supporting: Blog posts on voice science topics

**Cluster 4: The Adaptive Voice Framework**
- Pillar: /avf (book/framework page)
- Supporting: Blog posts explaining individual pillars or dials
- Supporting: Service pages (how AVF applies to singing/speaking/ensembles)

### Internal Linking Implementation

The internal linking strategy in `TVA_SEO_Meta_Content_v1.md` covers basic page-to-page links. Extend this with:

- Every blog post should link to at least one service page and one other blog post
- Vocal Health Hub articles should cross-reference each other and link to relevant service pages
- Use descriptive anchor text (not "click here" or "learn more" â€” use "singing lessons in Lacey" or "how the Adaptive Voice Framework works")
- Add a "Related Content" or "You Might Also Like" section at the bottom of blog posts

---

## 8. SEMANTIC HTML BEST PRACTICES

**Priority:** CRITICAL
**Why it matters:** Proper semantic HTML helps search engines and AI systems understand content structure, hierarchy, and meaning. It's also essential for accessibility (which itself is an SEO factor).

### Required Elements

**One `<h1>` per page.** Should match the page topic and include the primary keyword.

**Logical heading hierarchy.** Never skip levels (don't go from H1 to H3). Use:
- H1: Page title
- H2: Major sections
- H3: Subsections within H2s
- H4: Rarely needed; use for sub-subsections

**Semantic page structure:**
```html
<header> â€” Site header/navigation
<nav> â€” Primary navigation
<main> â€” Primary page content (one per page)
  <article> â€” Self-contained content blocks
  <section> â€” Thematic groupings within main
  <aside> â€” Supplementary content (sidebar, callouts)
<footer> â€” Site footer
```

**Structured content elements:**
- Use `<address>` for contact information in footer
- Use `<time datetime="...">` for any dates (blog post dates, event dates)
- Use `<figure>` and `<figcaption>` for images with captions
- Use `<blockquote>` for testimonials

**Navigation landmarks:**
- `<nav aria-label="Main navigation">` for primary nav
- `<nav aria-label="Breadcrumb">` for breadcrumbs
- `<nav aria-label="Footer navigation">` for footer links

---

## 9. BREADCRUMB NAVIGATION

**Priority:** HIGH
**Why it matters:** Breadcrumbs provide clear navigation hierarchy for users and search engines. They can appear in search results and help AI systems understand site structure. Combined with BreadcrumbList schema (Section 3), they're a dual-purpose SEO asset.

### Implementation

Add visual breadcrumbs to all interior pages (not the homepage). Format:

`Home > Singing Lessons`
`Home > Resources > Vocal Health`
`Home > Blog > [Post Title]`

### Technical Requirements

- Use an ordered list (`<ol>`) inside a `<nav aria-label="Breadcrumb">` element
- Each item should be a link except the current page
- Add BreadcrumbList schema (JSON-LD, see Section 3)
- Style them subtly â€” they're a navigation aid, not a visual focal point
- Place them consistently at the top of the content area, below the site header

### Breadcrumb Map

| Page | Breadcrumb Path |
|------|----------------|
| Singing | Home > Singing Lessons |
| Speaking | Home > Speaking Coaching |
| Ensembles | Home > Ensemble Coaching |
| About | Home > About |
| AVF | Home > The Adaptive Voice Framework |
| PASS Profile | Home > PASS Profile |
| Pricing | Home > Pricing |
| Contact | Home > Contact |
| Workshops | Home > Workshops |
| Vocal Health Hub | Home > Vocal Health |
| Vocal Health Article | Home > Vocal Health > [Article Title] |
| Blog | Home > Blog |
| Blog Post | Home > Blog > [Post Title] |

---

## 10. URL STRUCTURE & CANONICAL STRATEGY

**Priority:** CRITICAL
**Why it matters:** Clean, descriptive URLs are a basic ranking factor and improve click-through rates from search results. Canonical tags prevent duplicate content issues.

### URL Rules

- All lowercase
- Hyphens for word separation (never underscores)
- No trailing slashes (choose one pattern and be consistent â€” Astro default is no trailing slash)
- Short and descriptive
- Include primary keyword where natural
- No dates in blog post URLs (keeps them evergreen for content refreshes)

### URL Map

| Page | URL |
|------|-----|
| Homepage | / |
| Singing | /singing |
| Speaking | /speaking |
| Ensembles | /ensembles |
| About | /about |
| AVF | /avf |
| PASS Profile | /pass-profile |
| Pricing | /pricing |
| Contact | /contact |
| Workshops | /workshops |
| Vocal Health Hub | /vocal-health |
| Vocal Health Article | /vocal-health/[article-slug] |
| Blog Index | /blog |
| Blog Post | /blog/[post-slug] |
| Privacy Policy | /privacy |
| Terms of Service | /terms |

### Canonical Tags

Add `<link rel="canonical" href="https://www.tedsvoiceacademy.com/[path]">` to every page. This:
- Prevents duplicate content if pages are accessible with/without trailing slashes
- Establishes the www version as canonical (consistent with `TVA_SEO_Meta_Content_v1.md`)
- Prevents parameter-based duplicates (e.g., UTM tracking codes)

### WWW vs. Non-WWW

Pick one and redirect the other. The SEO meta doc uses `www.tedsvoiceacademy.com`, so:
- Canonical: `https://www.tedsvoiceacademy.com`
- Redirect: `https://tedsvoiceacademy.com` â†’ `https://www.tedsvoiceacademy.com`
- Configure in Netlify redirects file or `netlify.toml`

---

## 11. XML SITEMAP ENHANCEMENTS

**Priority:** CRITICAL
**Why it matters:** The sitemap tells search engines which pages exist and their relative importance. Astro can auto-generate this, but it should be configured properly.

### Sitemap Configuration

Use `@astrojs/sitemap` integration. Configure with:

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.tedsvoiceacademy.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        // Add any pages not auto-discovered
      ],
      filter: (page) => 
        // Exclude utility pages
        !page.includes('/thank-you') &&
        !page.includes('/404')
    }),
  ],
});
```

### Priority Weighting

Set higher priority for the most important pages:

| Page | Priority | Change Frequency |
|------|----------|-----------------|
| Homepage | 1.0 | weekly |
| Singing | 0.9 | monthly |
| Speaking | 0.9 | monthly |
| Ensembles | 0.8 | monthly |
| AVF | 0.9 | monthly |
| PASS Profile | 0.8 | monthly |
| About | 0.7 | monthly |
| Contact | 0.6 | yearly |
| Pricing | 0.8 | monthly |
| Workshops | 0.8 | weekly |
| Vocal Health Hub | 0.9 | weekly |
| Blog Index | 0.8 | weekly |
| Blog Posts | 0.7 | monthly |
| Privacy/Terms | 0.1 | yearly |

### Submission

After launch:
1. Verify site in Google Search Console
2. Submit sitemap URL: `https://www.tedsvoiceacademy.com/sitemap-index.xml`
3. Also submit in Bing Webmaster Tools
4. Monitor for crawl errors in both platforms

---

## 12. ACCESSIBILITY AS SEO

**Priority:** HIGH
**Why it matters:** Accessibility and SEO share many of the same technical foundations. Accessible sites tend to rank better because they have clean HTML, good heading structure, descriptive alt text, and proper link text â€” all things search engines value.

### Checklist

**Images:**
- Every image MUST have an `alt` attribute (guidelines in `TVA_SEO_Meta_Content_v1.md`)
- Decorative images get `alt=""` (empty but present)
- Informative images get descriptive alt text including relevant keywords where natural
- Never use `alt="image"` or `alt="photo"`

**Links:**
- All links must have descriptive text (never just "click here" or "read more")
- External links should open in new tabs with `target="_blank" rel="noopener noreferrer"`
- Skip navigation link at top of page (`<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>`)

**Color & Contrast:**
- Maintain WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text)
- Don't rely on color alone to convey information

**Forms:**
- All form fields must have associated `<label>` elements
- Error messages must be clear and associated with the relevant field
- Required fields must be indicated

**Keyboard Navigation:**
- All interactive elements must be reachable and operable via keyboard
- Focus indicators must be visible
- Tab order must be logical

**ARIA:**
- Use ARIA labels on navigation landmarks (see Section 8)
- Use `aria-current="page"` on the active navigation item
- Use `role="img"` on SVG graphics with `aria-label`

---

## 13. PERFORMANCE BUDGET & CORE WEB VITALS

**Priority:** CRITICAL
**Why it matters:** Page speed is a direct ranking factor. Core Web Vitals are part of Google's ranking algorithm. Astro's static output gives Ted a natural advantage here â€” don't squander it with unoptimized images or heavy scripts.

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Largest Contentful Paint (LCP) | < 2.0s | Time for main content to appear |
| Interaction to Next Paint (INP) | < 200ms | Replaced FID in March 2024 |
| Cumulative Layout Shift (CLS) | < 0.1 | Visual stability |
| Total page weight | < 1.5MB | All resources combined |
| Time to First Byte (TTFB) | < 200ms | Server response time (Netlify CDN handles this) |

### Image Optimization (Biggest Impact)

- Use Astro's built-in `<Image>` component for automatic optimization
- Serve WebP format with JPEG fallback
- Set explicit `width` and `height` on all images to prevent layout shift
- Lazy-load images below the fold: `loading="lazy"`
- Eagerly load hero images: `loading="eager"` with `fetchpriority="high"`
- Compress hero images to < 200KB; all other images to < 150KB
- Use responsive `srcset` for different screen sizes

### Font Optimization

- Preload critical fonts: `<link rel="preload" href="/fonts/playfair-display.woff2" as="font" type="font/woff2" crossorigin>`
- Use `font-display: swap` to prevent invisible text during load
- Only load the font weights actually used (Playfair Display: 400, 700; Inter: 400, 500, 600)
- Self-host fonts rather than loading from Google Fonts (eliminates third-party request)

### Script & Style Optimization

- Astro handles most of this automatically with static output
- Defer non-critical JavaScript: Google Maps, analytics
- Inline critical CSS (Astro does this by default)
- Minimize third-party scripts (each one adds load time and potential CLS)

### Lazy-Load Google Maps

The Contact page Google Maps embed should be lazy-loaded to avoid impacting page performance:

```html
<iframe 
  src="https://www.google.com/maps/embed?..." 
  loading="lazy"
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  referrerpolicy="no-referrer-when-downgrade"
  title="Ted's Voice Academy location in Lacey, Washington">
</iframe>
```

---

## 14. 404 PAGE & ERROR HANDLING

**Priority:** HIGH
**Why it matters:** A custom 404 page retains visitors who hit broken links, reduces bounce rate, and presents a professional impression. It's also an opportunity to guide users back to useful content.

### Custom 404 Page Requirements

- Match site design (header, footer, navigation intact)
- Friendly, Forward Light tone: "That page seems to have lost its voice. Let's find what you're looking for."
- Include search or navigation options
- Link to homepage, main service pages, and contact page
- Keep it lightweight (no heavy images or scripts)
- Do NOT include a redirect â€” the page must return a 404 status code

### Redirect Strategy

Create a `_redirects` file (or Netlify `netlify.toml` rules) for any known old URLs from the previous webwave site that should redirect to new pages. This preserves any existing search engine authority.

```
# Netlify redirects
/old-singing-page    /singing    301
/old-about           /about      301
# Add more as needed based on old site URL structure
```

---

## 15. REVIEW & TESTIMONIAL STRATEGY

**Priority:** MEDIUM (structure now, populate over time)
**Why it matters:** Reviews are a major local SEO ranking factor and a powerful E-E-A-T trust signal. Even before Ted has a formal review collection system, the site structure should be ready.

### On-Site Testimonials

- Include a testimonials section on the homepage (placeholder structure already planned)
- Add service-specific testimonials on Singing, Speaking, and Ensembles pages
- Use real names and roles where permission is given (e.g., "Sarah M., soprano, community choir member")
- Mark up testimonials with Review schema when they include a rating, or use `<blockquote>` semantically

### Google Review Collection

- After launch, create a direct review link for Google Business Profile
- Consider adding a gentle CTA on the Contact/Thank You page: "If you've worked with me, I'd appreciate a Google review"
- Aim for 1-2 new reviews per month (consistency matters more than volume)

### Review Schema (when applicable)

If testimonials include star ratings:
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": { "@type": "Person", "name": "Sarah M." },
  "reviewBody": "...",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Ted's Voice Academy"
  }
}
```

---

## 16. CONTENT FRESHNESS SIGNALS

**Priority:** MEDIUM
**Why it matters:** Google rewards sites that demonstrate ongoing activity and expertise. A site that never changes signals abandonment. Regular updates signal relevance.

### Built-In Freshness Mechanisms

- **Blog:** The primary freshness engine. Even 1-2 posts per month keeps the site active in Google's eyes.
- **Vocal Health Hub:** Plan to add new articles quarterly.
- **"Last updated" dates:** Display on blog posts and Vocal Health Hub articles. Use `dateModified` in Article schema.
- **Homepage:** Include a "latest from the blog" or "what's new" section that automatically pulls recent content.
- **Seasonal content:** Blog posts tied to seasons (e.g., "Protecting Your Voice During Cold & Flu Season," "Summer Vocal Health Tips") give natural reasons for regular publication.

### Technical Implementation

- Blog post frontmatter should include both `publishDate` and `lastUpdated` fields
- Display both on the post: "Published [date] â€¢ Updated [date]"
- Article schema should include both `datePublished` and `dateModified`
- Auto-generated "Recent Posts" component on homepage pulls the 3 most recent entries

---

## 17. BRAND MENTION & CITATION BUILDING

**Priority:** LOW (ongoing effort, not a build task â€” but note the strategy)
**Why it matters:** In 2026, brand mentions across the web influence both traditional rankings and LLM citations. This isn't something to build into the site itself, but it's strategy Ted should be aware of.

### Post-Launch Actions (not site build tasks)

- Claim and optimize Google Business Profile (detailed in `local-seo-plan.md`)
- List in relevant directories: music teacher directories, Washington business directories, Chamber of Commerce
- Ensure Amazon author profile links back to tedsvoiceacademy.com
- Seek podcast guest appearances or local media coverage
- Engage in relevant online communities (vocal pedagogy forums, music education groups)
- Encourage other sites to mention/link to the AVF book
- If accepted for NW Voice Conference, ensure the listing links to the website

### What to Build Into the Site

- "As Featured In" or "Connect" section on About page (placeholder for future media mentions)
- Amazon link with proper `rel="noopener"` attributes (already planned)
- Social media links in footer when profiles are established

---

## 18. OPEN GRAPH & SOCIAL SHARING

**Priority:** HIGH
**Why it matters:** Open Graph (OG) tags control how the site appears when shared on social media, messaging apps, and AI chat tools. The existing `TVA_SEO_Meta_Content_v1.md` mentions OG tags but doesn't provide the implementation detail.

### Required Tags (every page)

```html
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Meta Description]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.tedsvoiceacademy.com/[path]">
<meta property="og:image" content="https://www.tedsvoiceacademy.com/images/og-default.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Ted's Voice Academy">
<meta property="og:locale" content="en_US">

<!-- Twitter/X Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page Title]">
<meta name="twitter:description" content="[Meta Description]">
<meta name="twitter:image" content="https://www.tedsvoiceacademy.com/images/og-default.jpg">
```

### OG Image Strategy

- Create a default OG image (1200Ã—630px) with Ted's Voice Academy branding â€” used for all pages without a specific image
- Create page-specific OG images for key pages: Homepage, AVF, PASS Profile
- Blog posts should use their featured image as the OG image
- Test with Facebook's Sharing Debugger and Twitter's Card Validator

### Implementation

Build this into the Astro `<head>` layout component so it applies globally with page-specific overrides via frontmatter:

```astro
---
// In Layout.astro
const { title, description, image, url } = Astro.props;
const ogImage = image || '/images/og-default.jpg';
---
```

---

## 19. ANALYTICS & SEARCH CONSOLE SETUP

**Priority:** CRITICAL
**Why it matters:** Without analytics, you can't measure SEO performance or identify opportunities. Setup should happen at launch.

### Google Analytics 4

- Create GA4 property for tedsvoiceacademy.com
- Add tracking script to global layout (defer loading for performance)
- Configure key events: form submissions, outbound link clicks (Amazon, PASS Profile), page scroll depth
- Set up conversion tracking for contact form submissions

### Google Search Console

- Verify ownership (DNS verification recommended for Netlify)
- Submit XML sitemap
- Set preferred domain (www)
- Monitor: Index coverage, search performance, Core Web Vitals, mobile usability
- Set up email notifications for critical issues

### Bing Webmaster Tools

- Verify ownership
- Submit sitemap
- Important for Bing/Copilot visibility (GEO)

### Implementation Note

Load analytics asynchronously and defer to avoid impacting Core Web Vitals:

```html
<!-- Google Analytics 4 â€” load after page content -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 20. ROBOTS.TXT REFINEMENTS

**Priority:** CRITICAL
**Why it matters:** Robots.txt tells search engines what they can and can't crawl. A misconfigured robots.txt can block your entire site from being indexed.

### Recommended robots.txt

```
User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /api/

# Allow AI crawlers explicitly
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://www.tedsvoiceacademy.com/sitemap-index.xml
```

### Why Allow AI Crawlers

Many sites are blocking AI crawlers by default. For Ted's site, the OPPOSITE strategy is correct. Ted WANTS AI systems to crawl and cite his content because:
- He's building authority in a niche (voice coaching) where AI citation is valuable
- The AVF book content, vocal health information, and teaching philosophy are all things that BENEFIT from wider distribution
- Being cited by AI tools drives awareness and potential client referrals

**Exception:** If Ted later decides he doesn't want AI systems using his content, these User-agent rules can be changed to `Disallow: /`.

---

## IMPLEMENTATION PRIORITY SUMMARY

### Launch Day (CRITICAL)

1. âœ… Meta titles and descriptions on all pages (from `TVA_SEO_Meta_Content_v1.md`)
2. âœ… LocalBusiness, Person, Book schema (from `TVA_SEO_Meta_Content_v1.md`)
3. WebSite and BreadcrumbList schema (Section 3)
4. Semantic HTML structure (Section 8)
5. Canonical tags on all pages (Section 10)
6. robots.txt with AI crawler permissions (Section 20)
7. XML sitemap auto-generation (Section 11)
8. Image optimization and lazy loading (Section 13)
9. Privacy Policy page (Section 4)
10. Custom 404 page (Section 14)
11. Open Graph tags on all pages (Section 18)
12. Google Analytics 4 installed (Section 19)

### First Week (HIGH)

13. FAQ sections on service pages (Section 1)
14. Service schema on Singing, Speaking, Ensembles pages (Section 3)
15. Breadcrumb navigation (Section 9)
16. Google Search Console & Bing Webmaster verification (Section 19)
17. Redirect rules for old site URLs (Section 14)
18. Accessibility audit pass (Section 12)
19. E-E-A-T signal review â€” credentials visible, author info present (Section 4)
20. Terms of Service page (Section 4)

### First Month (MEDIUM)

21. FAQ sections on remaining pages (Section 1)
22. Vocal Health Hub content structured for featured snippets (Section 5)
23. Blog post template with Article schema (Section 3)
24. "Recent Posts" component on homepage (Section 16)
25. Testimonial structure with schema (Section 15)
26. Internal linking audit against strategy (Section 7)

### Ongoing (LOW / CONTINUOUS)

27. Blog content publication (1-2x/month minimum)
28. Google Business Profile optimization (see `local-seo-plan.md`)
29. Review collection (Section 15)
30. Brand mention building (Section 17)
31. Content refresh and update cycle (Section 16)
32. Performance monitoring (Section 13)

---

## RELATIONSHIP TO EXISTING FILES

| This Document Covers | Existing File Covers |
|----------------------|---------------------|
| FAQ sections & schema | â€” (NEW) |
| GEO optimization | Mentioned in handoffs but not detailed |
| Additional schema types | `TVA_SEO_Meta_Content_v1.md` covers LocalBusiness, Person, Book |
| E-E-A-T implementation | â€” (NEW) |
| AI Overview optimization | â€” (NEW) |
| Breadcrumbs | â€” (NEW) |
| URL/canonical strategy | Partially in SEO meta doc |
| Sitemap configuration | Partially in SEO meta doc |
| Accessibility | â€” (NEW) |
| Performance budget | Core Web Vitals targets in SEO meta doc |
| 404 page | â€” (NEW) |
| Reviews/testimonials | â€” (NEW) |
| Content freshness | â€” (NEW) |
| Brand mentions | Partially in `local-seo-plan.md` |
| Open Graph details | Tags listed in SEO meta doc; implementation detail NEW |
| Analytics setup | â€” (NEW) |
| robots.txt with AI crawlers | â€” (NEW) |
| Privacy/Terms pages | â€” (NEW) |
| Voice search | â€” (NEW) |
| Topical authority | â€” (NEW) |

---

**END OF DOCUMENT**
