# TED'S VOICE ACADEMY â€” TECHNICAL REQUIREMENTS
## Specifications for Website Build & Integrations

**Document Purpose:** Comprehensive technical requirements for building the Ted's Voice Academy website. Covers forms, integrations, e-commerce, hosting, and all functional specifications.

**Created:** January 25, 2026 (Session 10)
**Status:** DRAFT â€” Ready for Ted's review
**Website URL:** www.tedsvoiceacademy.com

---

## EXECUTIVE SUMMARY

### Core Technical Needs

| Category | Requirement | Priority |
|----------|-------------|----------|
| Form Handling | Contact/onboarding form submission | Critical |
| Maps | Google Maps embed on Contact page | Critical |
| External Links | Amazon (AVF), PASS platform | Critical |
| Email Capture | Interest list / newsletter signup | High |
| Analytics | Traffic and conversion tracking | High |
| E-commerce | Vocal Fit digital product delivery | Phase 2 |
| Content Management | Easy updates for Ted | High |
| Performance | Fast load times, mobile-optimized | High |
| Security | SSL, form protection | Critical |

### Recommended Tech Stack

For a site of this scope with Ted's needs (easy content updates, reliable form handling, good performance), I recommend:

**Option A: Static Site + Services (Recommended)**
- Framework: Astro, Next.js, or Eleventy
- Hosting: Netlify or Vercel (free tier adequate)
- Forms: Netlify Forms or Formspree
- CMS: Decap CMS (formerly Netlify CMS) or manual markdown
- E-commerce (Phase 2): Gumroad, Lemonsqueezy, or Stripe

**Option B: Website Builder**
- Platform: Webflow, Squarespace, or Framer
- Built-in forms, hosting, CMS
- E-commerce: Built-in or Gumroad integration
- Less flexible but easier for Ted to maintain directly

**My Recommendation:** Option A with Astro + Netlify. Gives full design control, excellent performance, and free/low-cost operation. I (Claude) can build and maintain it easily.

---

## FORM SPECIFICATIONS

### Contact/Onboarding Form

**Location:** Contact page (`/contact`)

**Purpose:** Primary lead capture and client onboarding

#### Form Fields

| Field | Type | Required | Validation | Notes |
|-------|------|----------|------------|-------|
| Name | text | Yes | Min 2 chars | Full name, single field |
| Email | email | Yes | Valid email format | Primary contact method |
| Phone | tel | No | Valid phone format | Optional but encouraged |
| Interested In | checkbox group | Yes (min 1) | At least one selected | Singing, Speaking, Ensemble |
| Experience Level | select dropdown | Yes | Must select | Options below |
| Goals | textarea | Yes | Min 20 chars | "Tell me about your voice goals" |
| How Did You Hear | select dropdown | No | â€” | Attribution tracking |
| Preferred Format | radio group | No | â€” | In-person, Virtual, Either |
| Anything Else | textarea | No | Max 1000 chars | Open field |

#### Experience Level Options

```
- Complete beginner
- Some experience (1-3 years)
- Intermediate (3-10 years)
- Advanced/Professional
- Returning after a break
```

#### How Did You Hear Options

```
- Google search
- Referral from friend/colleague
- Social media
- Found the AVF book
- PASS Profile
- Other
```

#### Preferred Format Options

```
- In-person (Lacey, WA studio)
- Virtual (video call)
- Either works for me
```

#### Form Behavior

| Behavior | Specification |
|----------|---------------|
| Submission | AJAX (no page reload) |
| Success State | Inline confirmation message |
| Success Message | "Thank you, [Name]! I've received your message and will be in touch within 1-2 business days. I look forward to learning about your voice goals." |
| Error State | Inline field errors + summary |
| Spam Protection | Honeypot field + rate limiting |
| Data Destination | Email to ted@tedsvoiceacademy.com |
| Backup Storage | Form service dashboard (Netlify/Formspree) |

#### Email Notification Template

When form is submitted, Ted receives:

```
Subject: New Voice Coaching Inquiry from [Name]

NEW INQUIRY RECEIVED
====================

Name: [Name]
Email: [Email]
Phone: [Phone or "Not provided"]

INTERESTED IN:
[âœ“] Singing
[âœ“] Speaking
[ ] Ensemble

Experience Level: [Selection]

GOALS:
[Goals textarea content]

How they heard about you: [Selection or "Not specified"]
Preferred format: [Selection or "Not specified"]

Additional notes:
[Anything else content or "None"]

---
Submitted: [Date/Time]
Form: Contact Page
```

---

### Interest List / Email Signup Form

**Locations:** 
- Footer (all pages) â€” minimal version
- Blog page â€” contextual version
- Vocal Health Hub â€” contextual version

**Purpose:** Build email list for updates, blog posts, future offerings

#### Minimal Version (Footer)

| Field | Type | Required |
|-------|------|----------|
| Email | email | Yes |
| First Name | text | No (optional) |

**CTA Button:** "Stay Connected" or "Get Voice Tips"

**Success Message:** "You're in! Watch your inbox for voice insights and updates."

#### Contextual Version (Blog)

| Field | Type | Required |
|-------|------|----------|
| Email | email | Yes |
| First Name | text | Yes |
| Interests | checkbox | No |

**Interest Options:**
- Singing tips
- Speaking & communication
- Vocal health
- All of the above

**CTA Button:** "Subscribe"

#### Email List Service Options

| Service | Pros | Cons | Cost |
|---------|------|------|------|
| Buttondown | Simple, clean, cheap | Less automation | $9/mo |
| ConvertKit | Creator-focused, good automation | More complex | $15/mo+ |
| Mailchimp | Familiar, robust | Expensive at scale | Free to $13/mo |
| Netlify Forms + manual | Zero cost | Manual management | Free |

**Recommendation:** Start with Buttondown or Netlify Forms. Upgrade if/when list grows beyond 1000 subscribers.

---

### Workshop Inquiry Form

**Location:** Workshops page (`/workshops`)

**Purpose:** Capture organization/group inquiries for workshop bookings

#### Form Fields

| Field | Type | Required |
|-------|------|----------|
| Contact Name | text | Yes |
| Organization | text | Yes |
| Email | email | Yes |
| Phone | tel | No |
| Workshop Interest | checkbox group | Yes |
| Group Size | select | Yes |
| Preferred Timeframe | text | No |
| Tell Me More | textarea | Yes |

#### Workshop Interest Options

```
- Vocal Health for Professionals
- Communication & Presence
- Team Voice (ensemble/choir)
- Custom Workshop
```

#### Group Size Options

```
- Small (5-15 people)
- Medium (15-30 people)
- Large (30-50 people)
- Very Large (50+)
- Not sure yet
```

---

## GOOGLE MAPS INTEGRATION

### Contact Page Map

**Location:** Contact page, below or beside contact form

**Address to Display:**
```
Ted's Voice Academy
4204 Lorna Ct SE
Lacey, WA 98503
```

#### Implementation Options

**Option A: Static Map Image (Recommended for performance)**
- Use Google Static Maps API
- Generate image at build time
- Link to Google Maps for directions
- No JavaScript required
- Fastest load time

**Option B: Embedded Interactive Map**
- Use Google Maps Embed API
- Interactive pan/zoom
- Slightly slower load
- More engaging

#### Embed Code (Option B)

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.XXX!2d-122.XXX!3d47.XXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xXXX%3A0xXXX!2s4204%20Lorna%20Ct%20SE%2C%20Lacey%2C%20WA%2098503!5e0!3m2!1sen!2sus!4vXXXXXX"
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

**Note:** Replace XXX values with actual coordinates. Generate proper embed URL from Google Maps.

#### Map Styling

- Use dark/desaturated map style to match site aesthetic
- Or use default Google styling for familiarity
- Ensure adequate contrast for accessibility

#### Directions Link

Include text link below map:
```html
<a href="https://www.google.com/maps/dir/?api=1&destination=4204+Lorna+Ct+SE,+Lacey,+WA+98503" target="_blank" rel="noopener">
  Get Directions â†’
</a>
```

---

## EXTERNAL LINKS & INTEGRATIONS

### AVF Book (Amazon)

**Link:** `https://www.amazon.com/dp/B0GD2SH8J5`

**Usage Locations:**
- AVF section hero CTA
- AVF section "Get Your Copy" buttons
- About page mention
- Footer (optional)

**Link Behavior:**
- Opens in new tab (`target="_blank"`)
- Include `rel="noopener noreferrer"` for security
- Track clicks in analytics (event tracking)

**Button Text Options:**
- "Get Your Copy on Amazon"
- "Order on Amazon"
- "Available on Amazon"

---

### PASS Profile Platform

**Link:** `https://pass.tedsvoiceacademy.com`

**Usage Locations:**
- PASS Profile section hero CTA
- PASS section "Get Your Profile" buttons
- Navigation (accent button)
- About page mention

**Link Behavior:**
- Opens in new tab
- Track clicks in analytics

**Integration Notes:**
- PASS platform is external/separate system
- No deep integration needed for website launch
- Future consideration: SSO or account linking (Phase 2+)

**Button Text:**
- "Get Your Profile"
- "Take the Assessment"
- "Discover Your Communication Style"

---

### Social Media Links (If Applicable)

**Potential Platforms:**
- YouTube (if Ted has channel)
- LinkedIn
- Facebook
- Instagram

**Implementation:**
- Icons in footer
- Open in new tabs
- Use official brand colors or monochrome icons

**Note:** Confirm which platforms Ted actively uses before including.

---

## E-COMMERCE: VOCAL FIT PRODUCTS (Phase 2)

### Overview

Vocal Fit is Ted's digital product brand for vocal conditioning routines. This is Phase 2 functionality but documenting requirements now.

### Product Types

| Product | Format | Delivery |
|---------|--------|----------|
| Early Morning Warm-Up | Video + PDF guide | Download |
| Aging Voices Routine | Video + PDF guide | Download |
| [Future routines] | Video + PDF guide | Download |

### Recommended Platforms

| Platform | Pros | Cons | Fees |
|----------|------|------|------|
| Gumroad | Simple, trusted, handles delivery | Limited customization | 10% + fees |
| Lemonsqueezy | Modern, good UX, tax handling | Newer platform | 5% + fees |
| Stripe + custom | Full control | More dev work | 2.9% + $0.30 |
| Teachable/Podia | Good for courses | Monthly fee | $39-79/mo |

**Recommendation:** Start with Gumroad or Lemonsqueezy. Minimal setup, handles payment processing, tax compliance, and file delivery. Embed purchase buttons on TVA website.

### Purchase Flow

1. User browses Vocal Fit section on TVA website
2. Clicks "Purchase" button
3. Redirects to Gumroad/Lemonsqueezy checkout (or modal)
4. Completes payment
5. Receives download link via email
6. Can re-download from platform account

### Website Integration

**Vocal Fit Section Structure:**
```
/vocal-health/vocal-fit (or /products/vocal-fit)
â”œâ”€â”€ Overview of Vocal Fit brand
â”œâ”€â”€ Product 1: Early Morning Warm-Up
â”‚   â”œâ”€â”€ Description
â”‚   â”œâ”€â”€ What's included
â”‚   â”œâ”€â”€ Price
â”‚   â””â”€â”€ [Buy Now] â†’ Gumroad
â”œâ”€â”€ Product 2: Aging Voices Routine
â”‚   â”œâ”€â”€ Description
â”‚   â”œâ”€â”€ What's included
â”‚   â”œâ”€â”€ Price
â”‚   â””â”€â”€ [Buy Now] â†’ Gumroad
â””â”€â”€ [Future products]
```

### Pricing Display

Display prices on TVA website. Example:
```
Early Morning Warm-Up Routine
$29

What's included:
â€¢ 15-minute guided video routine
â€¢ PDF quick-reference guide
â€¢ Lifetime access

[Get the Routine]
```

---

## ANALYTICS & TRACKING

### Recommended: Google Analytics 4 (GA4)

**Implementation:**
- Add GA4 tracking code to all pages
- Configure as first-party (better privacy compliance)
- Set up conversion events

### Key Events to Track

| Event | Trigger | Purpose |
|-------|---------|---------|
| `form_submit_contact` | Contact form submission | Lead tracking |
| `form_submit_newsletter` | Email signup | List growth |
| `form_submit_workshop` | Workshop inquiry | Lead tracking |
| `click_amazon_avf` | AVF Amazon link click | Book interest |
| `click_pass_platform` | PASS Profile link click | PASS interest |
| `click_phone` | Phone number click | Contact intent |
| `click_email` | Email link click | Contact intent |
| `page_scroll_50` | 50% page scroll | Engagement |
| `page_scroll_90` | 90% page scroll | Deep engagement |

### Privacy Compliance

- Include cookie consent banner (for EU visitors)
- Respect Do Not Track signals
- Option: Use privacy-friendly alternative (Plausible, Fathom) instead of GA4

### Alternative: Plausible Analytics

| Feature | Plausible | GA4 |
|---------|-----------|-----|
| Privacy | No cookies, GDPR compliant | Requires consent |
| Complexity | Simple dashboard | Complex but powerful |
| Cost | $9/mo | Free |
| Event tracking | Basic | Advanced |

**Recommendation:** GA4 for comprehensive tracking, or Plausible if privacy is priority and Ted wants simpler analytics.

---

## HOSTING & INFRASTRUCTURE

### Domain

**Primary:** `www.tedsvoiceacademy.com`
**Redirect:** `tedsvoiceacademy.com` â†’ `www.tedsvoiceacademy.com`

**DNS Requirements:**
- A record or CNAME pointing to host
- MX records for email (if using custom email)
- TXT records for verification (Google Search Console, etc.)

### SSL/HTTPS

- **Requirement:** HTTPS on all pages (mandatory)
- **Implementation:** Free via Let's Encrypt (auto-configured on Netlify/Vercel)
- **Force HTTPS:** Redirect all HTTP traffic to HTTPS

### Hosting Options

| Host | Type | Cost | Best For |
|------|------|------|----------|
| Netlify | Static/JAMstack | Free tier | Recommended |
| Vercel | Static/JAMstack | Free tier | Next.js sites |
| Cloudflare Pages | Static | Free tier | Performance focus |
| Webflow | All-in-one | $14-39/mo | If using Webflow |
| Traditional (Bluehost, etc.) | Shared hosting | $3-15/mo | WordPress sites |

**Recommendation:** Netlify free tier. Includes:
- Hosting
- SSL
- Form handling (Netlify Forms)
- Deploy previews
- CDN (global edge network)

### Performance Targets

| Metric | Target |
|--------|--------|
| Time to First Byte (TTFB) | < 200ms |
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total page size | < 2MB |
| Mobile PageSpeed score | > 90 |

---

## CONTENT MANAGEMENT

### Ted's Content Update Needs

| Content Type | Frequency | Complexity |
|--------------|-----------|------------|
| Blog posts | Weekly-monthly | Medium |
| Testimonials | Occasional | Low |
| Pricing | Rare | Low |
| Page copy | Rare | Low |
| Photos | Rare | Low |
| Events/workshops | Occasional | Low |

### CMS Options

**Option A: Headless CMS (Recommended)**

Use Decap CMS (formerly Netlify CMS) or Tina CMS:
- Web-based editor
- No coding required for content updates
- Git-based (version controlled)
- Free

**Editor Experience:**
1. Ted logs into admin panel (e.g., `tedsvoiceacademy.com/admin`)
2. Selects content type (Blog, Testimonials, etc.)
3. Edits in visual/markdown editor
4. Clicks "Publish"
5. Site rebuilds automatically (1-2 minutes)

**Option B: Manual + Claude**

For rare updates, Ted can:
1. Request changes via Claude chat
2. Claude updates markdown files
3. Changes deploy automatically

**Option C: Full CMS (WordPress, etc.)**

Not recommended unless Ted specifically wants WordPress. Adds complexity, security maintenance, and cost.

### Content Structure (Files)

```
/content
â”œâ”€â”€ /blog
â”‚   â”œâ”€â”€ 2026-01-15-first-post.md
â”‚   â”œâ”€â”€ 2026-01-22-second-post.md
â”‚   â””â”€â”€ ...
â”œâ”€â”€ /testimonials
â”‚   â”œâ”€â”€ testimonial-1.md
â”‚   â”œâ”€â”€ testimonial-2.md
â”‚   â””â”€â”€ ...
â”œâ”€â”€ /workshops
â”‚   â””â”€â”€ upcoming-events.md
â””â”€â”€ site-settings.json (pricing, contact info, etc.)
```

### Blog Post Format

```markdown
---
title: "Your Blog Post Title"
date: 2026-01-25
author: Ted
excerpt: "Brief description for listing pages"
tags: ["singing", "technique", "breathing"]
image: "/images/blog/post-image.jpg"
---

Blog content goes here in markdown...
```

---

## SECURITY REQUIREMENTS

### Form Security

| Measure | Implementation |
|---------|----------------|
| Honeypot field | Hidden field that bots fill, humans don't |
| Rate limiting | Max 5 submissions per IP per hour |
| Input validation | Server-side validation of all fields |
| Sanitization | Strip HTML/scripts from inputs |
| CAPTCHA | Optional reCAPTCHA if spam becomes issue |

### General Security

| Measure | Implementation |
|---------|----------------|
| HTTPS | Enforced on all pages |
| Content Security Policy | Restrict script sources |
| X-Frame-Options | Prevent clickjacking |
| Secure headers | X-Content-Type-Options, etc. |
| Dependency updates | Regular updates if using packages |

### Admin Access (If Using CMS)

- Strong password requirement
- Optional: 2FA for admin access
- Audit log of changes

---

## EMAIL CONFIGURATION

### Current Email

**Primary:** ted@tedsvoiceacademy.com

### Email Deliverability for Forms

Ensure form notification emails aren't marked as spam:
- Use form service's email delivery (Netlify, Formspree)
- Or configure SMTP with proper SPF/DKIM records
- Test email delivery to Ted's inbox

### Transactional Email (Phase 2)

For Vocal Fit purchases, email receipts, etc.:
- Use Gumroad/Lemonsqueezy's built-in email
- Or configure SendGrid/Postmark for custom transactional emails

---

## ACCESSIBILITY REQUIREMENTS (WCAG 2.1 AA)

### Technical Implementation

| Requirement | Implementation |
|-------------|----------------|
| Keyboard navigation | All interactive elements focusable and operable |
| Focus indicators | Visible focus states on all focusable elements |
| Alt text | Descriptive alt on all images |
| Form labels | All inputs have associated labels |
| Error messages | Programmatically associated with fields |
| Heading hierarchy | Logical H1 â†’ H2 â†’ H3 structure |
| Color contrast | 4.5:1 for body text, 3:1 for large text |
| Link purpose | Links describe destination (not "click here") |
| Skip link | "Skip to main content" for keyboard users |
| ARIA | Use where native HTML insufficient |

### Testing

- Test with keyboard only (no mouse)
- Test with screen reader (NVDA, VoiceOver)
- Run automated checks (axe, WAVE)
- Test color contrast ratios

---

## THIRD-PARTY SERVICES SUMMARY

### Required for Launch

| Service | Purpose | Cost |
|---------|---------|------|
| Netlify | Hosting + forms | Free |
| Google Maps | Contact page map | Free (with limits) |
| Google Analytics | Traffic tracking | Free |

### Optional / Recommended

| Service | Purpose | Cost |
|---------|---------|------|
| Decap CMS | Content editing | Free |
| Buttondown | Email newsletter | $9/mo |
| Plausible | Privacy-friendly analytics | $9/mo |

### Phase 2

| Service | Purpose | Cost |
|---------|---------|------|
| Gumroad | Digital product sales | 10% + fees |
| SendGrid | Transactional email | Free tier |

---

## DEVELOPMENT & DEPLOYMENT

### Development Workflow

1. Code changes made locally or via Claude
2. Push to GitHub repository
3. Netlify automatically builds and deploys
4. Preview URL generated for review
5. Merge to main branch â†’ production deploy

### Environments

| Environment | URL | Purpose |
|-------------|-----|---------|
| Production | www.tedsvoiceacademy.com | Live site |
| Preview | [auto-generated].netlify.app | Review changes |
| Local | localhost:3000 | Development |

### Deployment Checklist

Before going live:

- [ ] All pages render correctly
- [ ] Forms submit and Ted receives emails
- [ ] All links work (no 404s)
- [ ] Images optimized and loading
- [ ] Mobile responsive on all pages
- [ ] Analytics tracking confirmed
- [ ] SSL certificate active
- [ ] Redirects configured (non-www â†’ www)
- [ ] 404 page configured
- [ ] Favicon and meta images in place
- [ ] Google Search Console verified
- [ ] Google Business Profile URL updated
- [ ] Social media links verified
- [ ] Load time < 3 seconds
- [ ] Accessibility audit passed

---

## MAINTENANCE & UPDATES

### Regular Maintenance

| Task | Frequency |
|------|-----------|
| Content updates (blog) | As needed |
| Security updates | Monthly check |
| Backup verification | Monthly |
| Analytics review | Monthly |
| Broken link check | Quarterly |
| Performance audit | Quarterly |
| SSL certificate | Auto-renewed |

### Who Handles What

| Task | Handler |
|------|---------|
| Content updates | Ted (via CMS) or Claude |
| Technical fixes | Claude |
| Design changes | Claude |
| New features | Claude |
| Analytics review | Ted + Claude |

---

## FUTURE CONSIDERATIONS (Beyond Phase 2)

### Members-Only Section

- Authentication system needed
- Content gating
- Subscription management
- Options: Memberstack, Memberful, custom Auth0

### Course/Video Platform

- If Vocal Fit expands to full courses
- Options: Teachable, Podia, Kajabi, custom

### Booking/Scheduling Integration

- Online lesson scheduling
- Options: Calendly, Acuity, Cal.com
- Embed on Contact page or replace form

### Client Portal

- Lesson history, materials, progress tracking
- Significant development investment
- Evaluate if demand warrants

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| v1 | 2026-01-25 | Initial technical requirements (Session 10) |

---

**END OF TECHNICAL REQUIREMENTS DOCUMENT**
