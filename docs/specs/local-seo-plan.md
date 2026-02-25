# Local SEO Domination Plan
## A Complete Workflow for Claude Pro Chat & Claude Code

---

## How to Use This Plan

This plan is organized into **three phases**: Research & Audit, Content & Optimization, and Ongoing Maintenance. Each phase contains specific tasks with ready-to-use prompts.

**Where to run each prompt:**
- **Claude Pro Chat** â€” strategy, writing, analysis, keyword brainstorming
- **Claude Code** â€” file creation, data processing, schema generation, spreadsheet building, automation scripts
- **Claude in Chrome (Cowork)** â€” live site crawling, competitor page analysis, visual audits

**Before you start:** Export these data files if you have them. They make everything dramatically more effective.
- Google Search Console â†’ Performance report (CSV)
- Google Business Profile Insights (screenshot or export)
- Google Analytics â†’ Landing pages report (CSV)
- Any Ahrefs/SEMrush exports you have (CSV)

---

## PHASE 1: Research & Audit

### 1.1 â€” Business Baseline Extraction

**Tool:** Claude in Chrome (Cowork)
**Why this matters:** You need a clean, structured snapshot of your own site before comparing to anyone else.

```
Visit [YOUR_WEBSITE_URL]. Extract and organize into a structured table:

1. Business name, address, phone, hours (NAP+H)
2. Every distinct service listed (with the URL where each appears)
3. Every city or area mentioned as a service area
4. Trust signals: reviews count, certifications, years in business, awards, guarantees
5. Calls to action used (what they say and where they appear)
6. Whether the site has a blog, FAQ page, or resource section

Do not summarize. List everything you find exactly as it appears on the site.
```

**Then in Claude Pro Chat:**

```
Here is my business baseline [paste output]. Identify:
- Services I offer but don't have dedicated pages for
- Cities I serve but don't mention on service pages
- Trust signals I'm missing compared to a typical top-ranking local business
- Any NAP inconsistencies between pages
```

---

### 1.2 â€” Competitor Deep Dive (One at a Time)

**Tool:** Claude in Chrome (Cowork)
**Why one at a time:** Cramming three competitors into one prompt produces shallow results. Depth beats speed here.

```
Visit [COMPETITOR_URL]. Extract:

1. Full list of service pages (URL + page title for each)
2. Cities and neighborhoods mentioned across the site
3. Trust signals: review count, badges, certifications, partnerships, media mentions
4. Blog topics (list the 10 most recent post titles)
5. Schema types visible in page source (right-click > View Source > search for "schema" and "application/ld+json")
6. Internal linking pattern: how do they connect service pages to location pages?
7. Calls to action: what language do they use, how prominent are they?

Organize as a structured report.
```

Repeat for each competitor, then combine in Claude Pro Chat:

```
Here are my three competitor reports [paste all three]. Compare them against my baseline [paste baseline]. Build a comparison matrix showing:

- Services they cover that I don't have pages for
- Locations they target that I'm missing
- Trust signals they display that I lack
- Content types they publish that I don't
- Where I'm already stronger than them

Rank the gaps by likely impact on local search rankings: High / Medium / Low.
```

---

### 1.3 â€” Google Search Console Analysis (Your Single Best Data Source)

**Tool:** Claude Code or Claude Pro Chat with file upload
**Why this matters:** GSC tells you exactly what Google already associates with your site. This is where real low-hanging fruit lives â€” not in brainstormed keyword lists.

Export: GSC â†’ Performance â†’ Pages â†’ Export CSV (last 6 months)
Export: GSC â†’ Performance â†’ Queries â†’ Export CSV (last 6 months)

```
I'm uploading my Google Search Console data (queries and pages, last 6 months).
Analyze and produce three deliverables:

1. QUICK WINS: Queries where I rank positions 4-20 with 50+ impressions.
   Sort by impressions descending. For each, note the landing page and
   suggest whether to optimize that page or create a new one.

2. CANNIBALIZATION CHECK: Find queries where multiple pages from my site
   compete for the same keyword. Flag these as consolidation opportunities.

3. CONTENT GAPS: Queries where I get impressions but very low CTR (under 2%).
   These suggest my title tags and meta descriptions aren't compelling
   for what people are searching.

Output as a spreadsheet with three tabs.
```

---

### 1.4 â€” Full Technical SEO Audit

**Tool:** Claude in Chrome (Cowork) for crawling, then Claude Code for schema generation

**Part A â€” On-Page Technical Check:**

```
Visit [YOUR_URL]. For the homepage and 3 main service pages, check:

1. Title tag (exact text and character count)
2. Meta description (exact text and character count)
3. H1 tag (exact text â€” flag if missing or duplicated)
4. H2 tags (list all)
5. Image alt tags (list first 10 images â€” note any missing alts)
6. Page load: does anything visibly delay rendering?
7. Mobile: resize the browser to phone width â€” does the layout break?
8. Internal links: how many links point to other pages on the site from this page?

Report findings as a table. Flag issues as CRITICAL / IMPORTANT / MINOR.
```

**Part B â€” Schema Audit & Generation:**

```
Visit [YOUR_URL]. Open page source. Search for all instances of
"application/ld+json" and any schema markup.

Report:
1. EXISTING SCHEMA: List each type found, whether it validates
   (check against schema.org specs), and rate as USEFUL / INCOMPLETE / BROKEN.

2. MISSING SCHEMA (check for each):
   - LocalBusiness (with full NAP, hours, geo coordinates, service area)
   - Service (for each distinct service offered)
   - FAQ (if there's a FAQ section on any page)
   - Review / AggregateRating
   - BreadcrumbList
   - WebPage and WebSite

   Rate each missing item as HIGH / MEDIUM / LOW priority for local SEO.

3. For each HIGH priority item, generate clean JSON-LD with placeholder
   values clearly marked as [REPLACE]. No explanations â€” just the code.
```

---

### 1.5 â€” Real Keyword Research (Data-Driven, Not Guessing)

**Tool:** Claude Pro Chat
**Important context:** Claude cannot access live search volume data. These prompts produce *strategic keyword frameworks* that you then validate with actual tools (Google Keyword Planner is free, or use Ahrefs/SEMrush if you have them).

**Part A â€” High-Intent Local Keywords:**

```
I'm a [SERVICE TYPE] in [CITY, STATE]. Generate a keyword framework organized
by search intent:

1. EMERGENCY / URGENT (10 keywords)
   Pattern: "emergency [service] [city]", "[service] near me now"

2. READY TO BUY (15 keywords)
   Pattern: "[service] [city] cost", "best [service] in [city]",
   "hire [service] [neighborhood]"

3. COMPARING OPTIONS (10 keywords)
   Pattern: "[service A] vs [service B] [city]", "[service] reviews [city]"

4. RESEARCHING (10 keywords)
   Pattern: "how much does [service] cost in [city]",
   "do I need [service] for [situation]"

5. NEIGHBORHOOD-SPECIFIC (10 keywords)
   Use these real neighborhoods/areas: [LIST YOUR SERVICE AREA NEIGHBORHOODS]

For each keyword, note whether it should map to an existing page type
(service page, location page, blog post, FAQ) or needs a new page.
```

**Part B â€” If you have Ahrefs/SEMrush data:**

Export your competitor's top pages as CSV, then:

```
I'm uploading a CSV export of my competitor's top organic pages from
[Ahrefs/SEMrush]. Analyze and produce:

1. Their top 20 pages by estimated traffic, with target keywords
2. Which of these keywords I should realistically target
   (flag any where the top results are all major national brands)
3. A prioritized list: EASY (low competition + high intent),
   MEDIUM, HARD
4. For each EASY keyword, suggest a specific page type and title tag

Output as a spreadsheet.
```

---

## PHASE 2: Content & Optimization

### 2.1 â€” Service Page Optimization

**Tool:** Claude Pro Chat (strategy) â†’ Claude Code (document generation)

```
I offer [SERVICE] in [CITY]. My current page title is "[CURRENT TITLE]"
and the page currently covers: [BRIEF DESCRIPTION OF CURRENT CONTENT].

My target keyword from research is: [TARGET KEYWORD]

Write an optimized service page outline that includes:

1. Recommended title tag (under 60 characters, keyword + city + brand)
2. Recommended meta description (under 155 characters, includes CTA)
3. H1 heading
4. Page structure with H2s that naturally incorporate related keywords
5. A FAQ section with 5 questions real customers ask about this service
   (written as they'd actually type them into Google)
6. Internal links to suggest: which other pages on my site should
   this page link to, and which should link back to it?
7. A compelling CTA section

Write at a 7th-grade reading level. Sound like a knowledgeable local
professional, not a marketing agency. No fluff, no filler paragraphs.
```

---

### 2.2 â€” Location Pages (If You Serve Multiple Areas)

**Tool:** Claude Pro Chat

```
I'm a [SERVICE TYPE] based in [HOME CITY] and I also serve:
[LIST OF CITIES/NEIGHBORHOODS].

For each location, I need a unique page â€” NOT a copy-paste with the
city name swapped in. For each location page, provide:

1. Title tag and meta description
2. A content angle unique to that area (what's different about
   serving that location â€” distance, common issues there,
   local landmarks or context that proves you know the area)
3. H2 structure
4. 3 location-specific FAQ questions
5. Suggested internal links

Start with [FIRST CITY] as a complete example, then provide outlines
for the remaining locations.
```

---

### 2.3 â€” Google Business Profile Content Strategy

**Tool:** Claude Pro Chat
**Reality check:** GBP posts are a *supporting* signal, not a ranking lever. Their main value is improving engagement and conversion when someone finds your profile. Approach them that way.

```
I'm a [SERVICE TYPE] in [CITY]. My Google Business Profile needs
a consistent posting strategy.

Create a 30-day GBP content calendar with 10 posts (roughly every 3 days):

Requirements for each post:
- Post type: specify Update, Offer, or Event
- Under 300 words (most engagement comes from 150-250 words)
- Include one relevant keyword naturally (not stuffed)
- Include a specific CTA with button type (BOOK, CALL, LEARN_MORE, ORDER)
- 3 posts should mention specific local landmarks, streets, or neighborhoods
- 2 posts should be seasonal or timely
- 2 posts should highlight a specific service with a soft educational angle
- 1 post should highlight a customer win (template for me to fill in details)
- 2 posts should address common customer questions

For each post, suggest an image concept I could easily photograph or create.
Do NOT include hashtags â€” they don't help on GBP.
```

---

### 2.4 â€” Blog Content That Actually Ranks

**Tool:** Claude Pro Chat (topics and outlines) â†’ Claude Code (full drafts as documents)

```
Based on the content gaps and keyword research we've done, recommend
10 blog post topics that meet ALL of these criteria:

1. Answers a question my ideal customer actually searches for
2. Has local relevance (not generic national content)
3. None of my competitors have covered it well
4. Can naturally link to one of my service pages
5. Fits one of these proven formats: how-to guide, cost guide,
   comparison, checklist, or local resource guide

For each topic, provide:
- Suggested title (under 60 chars)
- Target keyword
- Search intent (informational, commercial, navigational)
- Brief content angle (2 sentences)
- Which service page it should link to
- Estimated word count needed to compete

Prioritize by: estimated impact Ã— ease of creation.
```

---

### 2.5 â€” Internal Linking Strategy

**Tool:** Claude in Chrome (Cowork) â†’ Claude Pro Chat

```
Crawl [YOUR_WEBSITE_URL] and map every internal link on the site.
For each page, list:
- The page URL and title
- Every internal link on that page (URL + anchor text)
- How many internal links point TO this page from other pages

Organize as a spreadsheet-style table.
```

Then in Claude Pro Chat:

```
Here's my internal link map [paste output]. Identify:

1. ORPHAN PAGES: pages with fewer than 2 internal links pointing to them
2. OVER-LINKED PAGES: pages linked from everywhere (usually homepage)
   that dilute link value
3. MISSING CONTEXTUAL LINKS: service pages that should link to related
   blog posts or location pages but don't
4. ANCHOR TEXT ISSUES: links using "click here" or generic text instead
   of descriptive keyword-relevant anchors

Provide a specific action list: "On [page URL], add a link to [target URL]
with anchor text [suggested anchor]."
```

---

## PHASE 3: Ongoing Maintenance & Monitoring

### 3.1 â€” Monthly Review Audit

**Tool:** Claude in Chrome (Cowork) â€” run monthly

```
Search Google for "[MY BUSINESS NAME] reviews" and check my profiles
on Google, Yelp, and any industry-specific review sites.

Report:
1. Total review count on each platform
2. Average rating on each platform
3. Date of most recent review on each
4. For my 5 most recent Google reviews: summarize the main praise
   and any complaints
5. Compare my review count and rating to [COMPETITOR 1] and [COMPETITOR 2]

Flag if any competitor has gained more than 10 reviews in the past month.
```

**Then in Claude Pro Chat:**

```
Based on this review audit [paste output], draft:
1. Response templates for 3 common positive review themes
2. Response templates for 2 common complaint themes
   (acknowledge, don't argue, offer resolution offline)
3. A simple process I can follow to consistently request reviews
   from satisfied customers (email template + timing suggestion)
```

---

### 3.2 â€” Quarterly Content Refresh

**Tool:** Claude Pro Chat with GSC data upload

```
I'm uploading my latest Google Search Console data (last 3 months)
and comparing to the previous period.

Identify:
1. Pages that DROPPED in average position (losing ground)
2. Pages that GAINED impressions but position stayed flat
   (opportunity to push higher)
3. New queries appearing that I don't have dedicated content for
4. Pages with declining CTR (may need title/description refresh)

For each issue, recommend a specific action:
update content, improve title tag, add internal links,
create new page, or consolidate with another page.
```

---

### 3.3 â€” Citation & NAP Consistency Check

**Tool:** Claude in Chrome (Cowork) â€” run quarterly

```
Search for "[MY BUSINESS NAME] [CITY]" and check the top 20 results
plus these specific directories:
- Google Business Profile
- Yelp
- Facebook
- Apple Maps (maps.apple.com)
- Bing Places
- Yellow Pages
- BBB
- Any industry-specific directories for [MY INDUSTRY]

For each listing found, record:
- Business name (exact)
- Address (exact)
- Phone number (exact)
- Website URL
- Hours listed

Flag ANY inconsistencies â€” even small ones like "St." vs "Street"
or a missing suite number. NAP consistency is a direct local ranking factor.
```

---

### 3.4 â€” AI Overview Monitoring

**Tool:** Claude in Chrome (Cowork) â€” run monthly

```
Search Google for my top 10 target keywords:
[LIST YOUR 10 MOST IMPORTANT KEYWORDS]

For each search:
1. Does an AI Overview appear? (Yes/No)
2. If yes, which websites are cited in the AI Overview?
3. Where does my site appear in the traditional results? (Position #)
4. Is there a local pack (map results)? Am I in it?
5. What featured snippets or "People Also Ask" boxes appear?

Report as a table. Flag any keyword where an AI Overview appears
and I'm NOT cited in it â€” these need content optimization to
match the question-answer format AI Overviews pull from.
```

---

### 3.5 â€” E-E-A-T Strengthening Checklist

**Tool:** Claude Pro Chat
**Run once, then revisit quarterly**

```
Review my website at [URL] against Google's E-E-A-T criteria
(Experience, Expertise, Authoritativeness, Trustworthiness)
for a local [SERVICE TYPE] business.

Score each element 1-5 and provide specific improvement actions:

EXPERIENCE:
- Do I show real project photos / before-after examples?
- Are there case studies or customer stories?
- Does content reflect hands-on knowledge vs. generic advice?

EXPERTISE:
- Is my professional background / credentials visible?
- Do service pages demonstrate deep knowledge of the topic?
- Are there author bios on blog content?

AUTHORITATIVENESS:
- Am I cited or linked to by other local businesses or organizations?
- Do I have industry certifications displayed?
- Is there press coverage or media mentions?

TRUSTWORTHINESS:
- Is there a clear privacy policy and terms of service?
- Are reviews and testimonials prominently displayed?
- Is the site secure (HTTPS)?
- Is contact information easy to find on every page?

For each score below 4, give me the single highest-impact action
I can take to improve it.
```

---

## Quick-Reference: What Goes Where

| Task | Best Tool | Frequency |
|------|-----------|-----------|
| Site crawling & data extraction | Claude in Chrome | As needed |
| Strategy, outlines, content briefs | Claude Pro Chat | Weekly |
| Schema JSON-LD generation | Claude Code | Once + updates |
| Spreadsheet creation from data | Claude Code | Monthly |
| Blog post drafts | Claude Code (.docx) | 2-4x/month |
| GSC data analysis | Claude Pro Chat (upload CSV) | Monthly |
| GBP post writing | Claude Pro Chat | Every 3 days |
| Technical audits | Claude in Chrome â†’ Chat | Quarterly |
| Review management | Claude Pro Chat | Weekly |
| Citation checks | Claude in Chrome | Quarterly |
| AI Overview monitoring | Claude in Chrome | Monthly |

---

## What This Plan Does NOT Cover (And What To Do About It)

**Backlink building:** Earning links from other websites is still a top ranking factor, but it requires outreach, relationship-building, and often PR work that AI can help write but can't execute. Consider joining your local Chamber of Commerce, sponsoring community events, and getting listed in industry directories as starting points.

**Google Ads / Paid Search:** This plan is organic SEO only. If you need immediate visibility while organic rankings build (3-6 months), a small Google Ads budget targeting your highest-intent keywords can bridge the gap.

**Website speed & Core Web Vitals:** These require developer-level technical work (image optimization, server configuration, code minification). Use Google's PageSpeed Insights to identify issues, then work with your web developer or hosting provider.

**Social media:** Social signals have minimal direct SEO impact, but an active social presence builds brand awareness that leads to more branded searches â€” which Google interprets as authority.

---

*Plan created for use with Claude Pro, Claude Code, and Claude in Chrome (Cowork).*
*Review and update this plan quarterly as search algorithms and AI features evolve.*
