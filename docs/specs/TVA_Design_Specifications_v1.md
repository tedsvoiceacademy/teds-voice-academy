# TED'S VOICE ACADEMY â€” DESIGN SPECIFICATIONS
## Comprehensive Visual Reference for Website Build

**Document Purpose:** Authoritative design reference for building the Ted's Voice Academy website. Contains all visual specifications, brand identities, assets, and layout guidance.

**Created:** January 25, 2026 (Session 9)
**For Use By:** Claude (AI builder)
**Website URL:** www.tedsvoiceacademy.com

---

## CRITICAL: THREE DISTINCT VISUAL IDENTITIES

This website contains **three separate brand identities** that must remain visually distinct:

1. **Ted's Voice Academy (TVA)** â€” Parent brand (most pages)
2. **AVF Section** â€” Sub-brand echoing the book cover design
3. **PASS Profile Section** â€” Sub-brand echoing PASS Profile branding

**Rule:** Do NOT collapse these into one generic style. Each has its own color palette, and the sub-brand sections should feel like extensions of their respective product brands while remaining cohesive with the parent site.

---

## BRAND 1: TED'S VOICE ACADEMY (PARENT BRAND)

### Color Palette

| Role | Color Name | Hex Code | Usage |
|------|------------|----------|-------|
| Primary Background | Deep Navy/Midnight Blue | #0a1628 to #1a2d4d | Hero sections, header, footer |
| Accent (Primary) | Bright Gold | #d4a84b | CTAs, highlights, important elements |
| Accent (Secondary) | Warm Gold/Champagne | #c9a962 | Secondary highlights, hover states |
| Text (Primary) | White | #ffffff | Body text on dark backgrounds |
| Text (Secondary) | Cream | #f5f0e1 | Softer text, subheads on dark |
| Light Background | Off-White/Cream | #faf8f5 | Content sections needing contrast |
| Dark Text | Charcoal | #2a2a2a | Body text on light backgrounds |

### Typography (Recommendations)

| Element | Font Suggestion | Weight | Notes |
|---------|-----------------|--------|-------|
| Headlines | Modern serif or clean sans | 600-700 | Professional, warm, not aggressive |
| Body | Highly readable sans-serif | 400 | Clean, accessible |
| Accent/Taglines | Can match headlines | 500 | "Master Your Voice" tagline |

**Design Philosophy:**
- Professional and elevated, not generic or template-feeling
- Human connection first, selling second
- Clean, warm, confident presentation
- Dark backgrounds for hero/impact sections
- Light backgrounds for content-heavy reading sections

### Logo

**File:** Teds_Voice_Academy_GD_HR_BRIGHT_GOLD.png
**Usage:** Header (links to home), footer
**Behavior:** On scroll, header becomes sticky with slightly reduced height

---

## BRAND 2: AVF SECTION (SUB-BRAND)

### Purpose
Echo the book cover design to reinforce brand recognition. This section should feel like an extension of the book's visual world.

### Color Palette

| Role | Color Name | Hex Code | Usage |
|------|------------|----------|-------|
| Background | Rich Teal | #1a6b7c to #2d8a9b | Section backgrounds (textured, not flat) |
| Headlines/Titles | Amber Gold | #d4a039 | All headings, book title display |
| Body Text | Cream | #f0e8d4 | All body copy |
| Accent | Same Amber Gold | #d4a039 | CTAs, links |

### Typography

| Element | Font | Weight | Notes |
|---------|------|--------|-------|
| Main Title ("AVF:") | Cinzel (Google Font) | 700 | Classic Roman serif, matches book cover |
| Subtitles | Cormorant Garamond Italic | 400 | Elegant, matches book subtitle treatment |
| Body | Clean sans-serif | 400 | Readable on teal background |

### Key Visual Assets

| Asset | File Path | Usage |
|-------|-----------|-------|
| Book Cover | /mnt/project/ASSET_1B____Complete_cover.png | Hero, product display |
| Five Pillars Diagram | /mnt/project/1_CG_AVf_Pillars.png | Pillars section (MUST use exactly) |
| Eight Dials Diagram | /mnt/project/2_CG_AVF_Dials.png | Dials section (MUST use exactly) |
| Book Photo (table) | /mnt/project/Front_of_book_on_table.png | Lifestyle/context shots |
| Book Photo (alt) | /mnt/project/book_photo.png | Alternative book display |
| Square Promo | /mnt/project/ASSET_3___SQUARE_PROMOTIONAL_CROP.png | Social/card format |
| Back Cover | /mnt/project/Back_of_book.png | If showing full book |

### Design Notes
- Background should have textured/mottled quality, not flat solid color
- When displaying book title, match cover typography exactly (Cinzel, amber gold)
- Diagrams (Pillars, Dials) are dogma-level â€” display exactly as provided, no modifications

---

## BRAND 3: PASS PROFILE SECTION (SUB-BRAND)

### Purpose
Echo the PASS Profile branding. Reinforce the "communication fingerprint" concept visually.

### Color Palette

| Role | Color Name | Hex Code | Usage |
|------|------------|----------|-------|
| Primary | Deep Teal/Blue | #1a4a5c | Primary backgrounds, "PASS" text |
| Secondary | Emerald Green | #2d8b6e | Accents, "PROFILE" text |
| Accent | Bright Green | #3db58c | CTAs, highlights, hover states |
| Text (on dark) | White/Light | #ffffff | Body text |
| Background (light option) | Light teal tint | #e8f4f6 | Content sections if needed |

### Typography
- "PASS" appears in Deep Teal/Blue (#1a4a5c)
- "PROFILE" appears in Emerald/Bright Green (#2d8b6e or #3db58c)
- This echoes the logo treatment

### Key Visual Assets

| Asset | File Path | Usage |
|-------|-----------|-------|
| PASS Profile Logo | /mnt/project/PASS_Profile_3_Logo1.png | Hero, section headers |
| Sample Reports | /mnt/project/TEDs_PASS_Profile_3_0_1222026.pdf | Reference only (don't display publicly) |
| | /mnt/project/Frankie_PASS_profile_3_0_1222026.pdf | Reference only |
| | /mnt/project/TAMMY_PASS_Profile_3_0_1232026.pdf | Reference only |

### Key Visual Concept
- Fingerprint-inside-speech-bubble icon (from logo) â€” reinforces "communication fingerprint" metaphor
- Can use fingerprint motif as subtle background pattern or accent element

---

## NAVIGATION STRUCTURE

### Desktop Header

**Layout:** Logo (left) | Main Nav (center-left) | Accent CTAs (right)

**Main Nav Items (left to right):**
Singing, Speaking, Ensembles, About, Pricing, Workshops, Vocal Health, Blog

**Right Side:**
- PASS Profile (accent color â€” use PASS green #3db58c)
- Get Started (primary CTA â€” use TVA gold #d4a84b)

### Mobile Menu Order

1. Singing
2. Speaking
3. Ensembles
4. About
5. Pricing
6. Workshops
7. Vocal Health
8. Blog
9. PASS Profile
10. AVF
11. Contact

### Header Behavior
- Sticky on scroll
- Slightly reduced height when scrolling
- No transparency tricks
- Logo always links to homepage

---

## PAGE LAYOUT PATTERNS

### Hero Sections

**Homepage Hero:**
- Two-column layout (desktop): text left, Ted's photo right
- Stacked layout (mobile): text, then photo
- Dark TVA background (#0a1628)
- No animation gimmicks

**Sub-page Heroes:**
- Can be shorter than homepage
- Headline + brief intro
- Consistent dark background treatment

### Content Sections

**Pattern A: Dark Background**
- Use for impact, CTAs, testimonials
- TVA navy (#0a1628 to #1a2d4d)
- Gold accents (#d4a84b)
- White/cream text

**Pattern B: Light Background**
- Use for content-heavy sections, forms, detailed information
- Off-white/cream (#faf8f5)
- Charcoal text (#2a2a2a)
- Gold accents for links/highlights

**Pattern C: Sub-brand Sections**
- AVF pages: Rich teal background with amber/cream
- PASS pages: Deep teal/green palette

### Card Patterns

**Service Cards (Three Paths, Ecosystem Showcase):**
- Consistent sizing within a row
- Clear visual hierarchy: icon/image â†’ headline â†’ description â†’ CTA
- Hover state: subtle lift or border highlight

---

## BUTTON STYLES

### Primary CTA
- Background: Bright Gold (#d4a84b)
- Text: Dark (navy or charcoal)
- Hover: Slightly darker gold or subtle glow
- Usage: "Get Started," "Contact Me," main conversion actions

### Secondary CTA
- Background: Transparent with gold border
- Text: Gold (#d4a84b) or white depending on background
- Hover: Fill with gold, text goes dark
- Usage: "Learn More," secondary actions

### PASS-specific CTA
- Background: Bright Green (#3db58c)
- Text: White or dark
- Usage: "Get Your Profile," PASS-related actions

### AVF-specific CTA
- Background: Amber Gold (#d4a039)
- Text: Dark (navy or teal)
- Usage: "Get Your Copy," "Order on Amazon"

---

## FORM STYLING

### Contact/Onboarding Form
- Clean, spacious layout
- Labels above fields (not placeholder-only)
- Clear required field indicators
- Gold accent on focus states
- Error states in warm red (not harsh)
- Success confirmation clear and friendly

### Form Fields Reference (Contact Page)
| Field | Type | Required |
|-------|------|----------|
| Name | Text | Yes |
| Email | Email | Yes |
| Phone | Phone | No |
| I'm interested in... | Checkbox (Singing/Speaking/Ensemble) | Yes |
| Experience level | Dropdown | Yes |
| Tell me about your goals | Textarea | Yes |
| How did you hear about me? | Dropdown | No |
| Preferred lesson format | Radio (In-person/Virtual/Either) | No |
| Anything else? | Textarea | No |

---

## IMAGE ASSETS INVENTORY

### Ted Photos
- **Needed:** Professional headshot for hero, about page, contact
- **Style:** Warm, approachable, professional
- **Note:** Check with Ted for available photos

### Book/Product Images
| Description | File |
|-------------|------|
| AVF Complete Cover | ASSET_1B____Complete_cover.png |
| AVF Square Promo | ASSET_3___SQUARE_PROMOTIONAL_CROP.png |
| Book on Table | Front_of_book_on_table.png |
| Book Photo | book_photo.png |
| Back Cover | Back_of_book.png |

### Diagrams (Dogma-Level â€” Use Exactly)
| Description | File |
|-------------|------|
| Five Pillars | 1_CG_AVf_Pillars.png |
| Eight Dials | 2_CG_AVF_Dials.png |

### Logos
| Description | File |
|-------------|------|
| TVA Logo (Gold) | Teds_Voice_Academy_GD_HR_BRIGHT_GOLD.png |
| PASS Profile Logo | PASS_Profile_3_Logo1.png |

### Background Images (AVF Landing Page Reference)
| Description | File |
|-------------|------|
| Hero Background | AVF_Hero_Background.png |
| Core Principles BG | AVF_3_Core_Principles_Background.png |
| Who It's For BG | AVF_6_Who_its_for_background.png |
| Final Section BG | AVF_Final_Section_background.png |

### Other
| Description | File |
|-------------|------|
| Business Card | Business_card_3_0.png |
| Gemini Image | Gemini_Generated_Image_fjej12fjej12fjej.png |

---

## RESPONSIVE BEHAVIOR

### Breakpoints (Suggested)
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

### Key Responsive Rules
- Hero: Two-column â†’ stacked
- Navigation: Full nav â†’ hamburger menu
- Cards: 3-across â†’ 2-across â†’ stacked
- Forms: Full width on mobile with adequate touch targets
- Images: Scale appropriately, don't crop important content

---

## TECHNICAL REQUIREMENTS

### Integrations Needed
1. **Contact Form** â€” Form handling (Formspree, Netlify Forms, or similar)
2. **Google Maps** â€” Embed on Contact page (Studio: 4204 Lorna Ct SE, Lacey, WA 98503)
3. **Email Capture** â€” Interest list system (can be post-launch)
4. **Digital Product Delivery** â€” Secure purchase/download for Vocal Fit (Phase 2)
5. **External Links:**
   - Amazon (AVF book): https://www.amazon.com/dp/B0GD2SH8J5
   - PASS Platform: pass.tedsvoiceacademy.com

### SEO Requirements
- LocalBusiness schema markup
- Proper heading hierarchy (H1 â†’ H2 â†’ H3)
- Alt text on all images
- Meta titles and descriptions for each page
- Local SEO optimization for Lacey/Olympia, WA area

### Performance
- Optimize images (compress PNGs, use WebP where supported)
- Lazy load below-fold images
- Minimize render-blocking resources

---

## CONTENT FILES REFERENCE

All approved copy files are in /mnt/project/:

| Page | File |
|------|------|
| Homepage | TVA_Homepage_Copy_Forward_Light_v3.md |
| Singing | TVA_Singing_Page_Forward_Light_v2.md |
| Speaking | TVA_Speaking_Page_Forward_Light_v2.md |
| Ensembles | TVA_Ensembles_Page_Forward_Light_v2.md |
| About | TVA_About_Page_Forward_Light_v5.md |
| AVF Section | TVA_AVF_Section_Forward_Light_v1.md |
| PASS Profile | TVA_PASS_Profile_Section_Forward_Light_v2.md |
| Contact | TVA_Contact_Page_Forward_Light_v1.md |
| Pricing | TVA_Pricing_Page_Forward_Light_v2.md |
| Blog | TVA_Blog_Page_Forward_Light_v2.md |
| Workshops | TVA_Workshops_Page_Forward_Light_v1.md |
| Vocal Health Hub | TVA_Vocal_Health_Hub_Forward_Light_v1.md |

### Supporting Documents
| Document | File |
|----------|------|
| Forward Light Style Guide | Style_guide_for_website.txt |
| Blog Writing Style Guide | TVA_Blog_Writing_Style_Guide_v2.md |
| PASS Profile Description | PASS_Profile_3_Comprehensive_Description.md |
| AVF Book Manuscript | The_Adaptive_Voice_Framework__AVF__V1_0_Complete.pdf |

---

## STYLE GUIDE SUMMARY (FORWARD LIGHT)

### Writing Voice
- First person: "I/me" (Ted IS the business â€” never "we/us")
- 8th grade reading level
- Plain words: "help" over "facilitate"
- Warm, direct, genuine

### Critical Rule: NO CONTRAST FRAMING
**Never use:**
- "It's not about X, it's about Y"
- "Not just X, but Y"

**Instead:** State the positive directly. Trust it to stand on its own.

### Terminology
| Avoid | Use Instead |
|-------|-------------|
| "hold," "posture" | "body alignment," "body organization" |
| "blend" (ensembles) | "unity," "voice matching" |
| "Method" (for AVF) | "Framework" |
| "we/us" | "I/me" |
| "certified voice therapist" | "speech-language pathologist" |
| "weaknesses" (PASS) | "distinctive features," "valleys" |

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| v1 | 2026-01-25 | Initial comprehensive design specifications compiled from Sessions 1-9 |
