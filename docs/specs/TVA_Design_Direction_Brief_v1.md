# TED'S VOICE ACADEMY â€” DESIGN DIRECTION BRIEF
## Authoritative Visual Direction for Website Build

**Document Purpose:** This brief provides the definitive design direction for building the Ted's Voice Academy website. It captures aesthetic philosophy, visual patterns, interaction behaviors, and implementation guidance. This document, combined with TVA_Design_Specifications_v1.md, gives the builder everything needed to create a cohesive, professional website.

**Created:** January 25, 2026 (Session 10)
**Status:** APPROVED by Ted
**For Use By:** Claude (AI builder) in future sessions

---

## THE DESIGN PHILOSOPHY: "ELEVATED STUDIO"

### Core Concept

The Ted's Voice Academy website embodies the **"Elevated Studio"** aesthetic â€” like walking into a beautifully designed private voice studio. The space is refined but not cold. Personal but not amateur. Substantial but not overwhelming.

### The Challenge This Solves

Ted's business occupies a unique position:
- **Depth of expertise:** 40 years experience, 675-page published framework, proprietary assessment tool
- **Personal delivery:** One-on-one coaching, direct relationship with every client
- **Multiple pathways:** Singing, Speaking, Ensembles, plus authority pillars (AVF, PASS, Vocal Health)

Most websites sacrifice either warmth (going corporate) or authority (going casual). This design achieves both.

### The Visitor's Emotional Journey

| Stage | Visitor Feels | Design Creates This Through |
|-------|---------------|----------------------------|
| Arrival (Hero) | "This looks professional and substantial" | Dark, sophisticated hero with warm gold accents |
| Exploration (Content) | "This is inviting, I want to learn more" | Light backgrounds, readable content, clear pathways |
| Discovery (Services) | "There's real depth here" | Equal treatment of all service paths, rich detail |
| Trust (Authority) | "This person knows what they're doing" | AVF book, PASS Profile, credentials presented confidently |
| Action (Contact) | "I feel comfortable reaching out" | Warm invitation, easy access, personal tone |

---

## SITE COHESION: ONE WEBSITE, FLAVORED SECTIONS

### Critical Principle

This is **ONE website** (Ted's Voice Academy) with **sections that have their own visual flavor**. It is NOT four separate websites stitched together.

Think of it like a well-designed book: one cover, one author, consistent layout throughout â€” but chapters might have different color-coded section dividers. You always know you're reading the same book.

### What STAYS CONSISTENT (Cohesion Layer)

These elements remain **identical across ALL pages**, including AVF and PASS sections:

| Element | Behavior |
|---------|----------|
| **Header** | TVA logo always visible, same navigation structure |
| **Footer** | Same TVA footer on every page |
| **Favicon** | ONE favicon (TVA) for entire site â€” never changes |
| **Navigation** | Identical menu items and behavior throughout |
| **Layout patterns** | Same structural approach (hero, cards, sections) |
| **Typography** | Playfair Display + Inter everywhere |
| **Component shapes** | Same border-radius, button shapes, spacing rhythm |
| **Motion patterns** | Same parallax, fade-in, hover behaviors |

### What CHANGES Per Section (Brand Flavor)

These elements adapt within section content areas:

| Element | How It Changes |
|---------|----------------|
| **Hero/content background colors** | Navy (TVA) â†’ Teal (AVF) â†’ Deep teal (PASS) |
| **Accent colors** | Gold (TVA) â†’ Amber (AVF) â†’ Green (PASS) |
| **Section-specific branding** | AVF book cover, PASS logo appear IN content |
| **CTA button colors** | Match section accent |
| **Subtle textures** | AVF gets textured teal, PASS may have fingerprint motif |

### User Journey Example

1. **Homepage** (TVA): Header=TVA, Hero=Navy/Gold, Footer=TVA, Favicon=TVA
2. **Clicks to AVF**: Header=**still TVA**, Hero=Teal with AVF book, Footer=**still TVA**, Favicon=**still TVA**
3. **Clicks to PASS**: Header=**still TVA**, Hero=Deep teal with PASS logo, Footer=**still TVA**, Favicon=**still TVA**
4. **Clicks to Singing**: Returns to navy/gold, clearly same site

### Favicon Specification

- **Single TVA favicon** used site-wide
- Based on TVA logo mark (simplified if needed)
- Must work at 16x16, 32x32, and 180x180 (Apple touch)
- Never changes based on section â€” favicons identify the SITE, not the page

### Analogy

Like a **department store**: always Nordstrom signage at entrance (header), different departments have their own displays and featured brands (sections), but you always know you're in Nordstrom. Your receipt says Nordstrom (footer).

---

## COLOR RHYTHM & APPLICATION

### The Dark/Light Rhythm

The site uses intentional alternation between dark and light sections to create visual breathing room and guide attention.

**Standard Page Rhythm:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  DARK HERO                      â”‚  â† Impact, arrival moment
â”‚  Deep Navy (#0a1628)            â”‚
â”‚  Gold accents, white/cream text â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  LIGHT CONTENT SECTION          â”‚  â† Readable, inviting
â”‚  Off-white (#faf8f5)            â”‚
â”‚  Charcoal text (#2a2a2a)        â”‚
â”‚  Gold accent links/highlights   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  DARK ACCENT SECTION            â”‚  â† Impact moment (CTA, testimonial)
â”‚  Deep Navy or gradient          â”‚
â”‚  Gold CTA button                â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  LIGHT CONTENT SECTION          â”‚  â† More detail, information
â”‚  Off-white background           â”‚
â”‚  Easy reading                   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  DARK FOOTER                    â”‚  â† Grounding, closure
â”‚  Deep Navy                      â”‚
â”‚  Navigation, contact info       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Why This Works

- **Dark sections** create "impact moments" â€” they signal importance and demand attention
- **Light sections** are "reading zones" â€” they invite exploration and feel welcoming
- **The alternation** prevents visual fatigue and creates natural content hierarchy
- **Gold accents** provide consistent warmth throughout both light and dark contexts

### Color Application Rules

| Context | Background | Text | Accents |
|---------|------------|------|---------|
| Hero sections | #0a1628 (navy) | #ffffff (white), #f5f0e1 (cream) | #d4a84b (gold) |
| Content sections | #faf8f5 (off-white) | #2a2a2a (charcoal) | #d4a84b (gold) |
| CTA/impact sections | #0a1628 to #1a2d4d (navy gradient) | #ffffff | #d4a84b |
| Footer | #0a1628 | #f5f0e1 (cream) | #d4a84b |
| AVF section | #1a6b7c (teal) | #f0e8d4 (cream) | #d4a039 (amber) |
| PASS section | #1a4a5c (deep teal) | #ffffff | #3db58c (bright green) |

---

## TYPOGRAPHY SYSTEM

### Font Pairing

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headlines (H1, H2) | Playfair Display | 600-700 | Page titles, section headers, impact text |
| Subheadlines (H3, H4) | Playfair Display | 500 | Subsection headers, card titles |
| Body Text | Inter | 400 | All paragraph content, descriptions |
| Body Emphasis | Inter | 600 | Bold text within paragraphs |
| UI Elements | Inter | 500 | Buttons, navigation, labels |
| Accent/Taglines | Playfair Display | 400 italic | Taglines, pull quotes |

### Why This Pairing

- **Playfair Display** (headlines): Modern serif with classic proportions. Conveys authority, tradition, and substance without feeling stuffy. The high contrast and elegant curves feel sophisticated but warm.
- **Inter** (body): Highly readable sans-serif designed for screens. Clean, professional, doesn't compete with headlines. Excellent at all sizes.

### Type Scale (Desktop)

| Element | Size | Line Height | Letter Spacing |
|---------|------|-------------|----------------|
| H1 (Page Title) | 48-56px | 1.1 | -0.02em |
| H2 (Section Header) | 36-40px | 1.2 | -0.01em |
| H3 (Subsection) | 24-28px | 1.3 | 0 |
| H4 (Card Title) | 20-22px | 1.3 | 0 |
| Body Large | 18px | 1.6 | 0 |
| Body Regular | 16px | 1.6 | 0 |
| Body Small | 14px | 1.5 | 0 |
| Caption/Label | 12-13px | 1.4 | 0.02em |

### Mobile Adjustments

- H1: Reduce to 36-40px
- H2: Reduce to 28-32px
- Body: Maintain 16px minimum for readability
- Increase line-height slightly (1.7 for body)

---

## MOTION & INTERACTION DESIGN

### Philosophy: Subtle With Purpose

Motion should feel like the site is *responding* to the visitor, not performing for them. Every animation serves a functional purpose: providing feedback, guiding attention, or creating depth.

### Approved Motion Patterns

| Element | Animation | Timing | Purpose |
|---------|-----------|--------|---------|
| Hero background | Gentle parallax (10-15% movement rate) | Continuous on scroll | Creates depth, rewards scrolling |
| Content sections | Fade-in + slight rise (20px) | 400-600ms, ease-out, triggered on scroll into view | Modern feel, reveals content progressively |
| Cards | Subtle lift (4-6px) + shadow increase on hover | 200ms, ease | Feedback, indicates interactivity |
| Buttons | Background color shift + subtle scale (1.02) on hover | 150ms, ease | Clear interaction feedback |
| Navigation links | Underline slide-in or color shift on hover | 200ms | Navigation feedback |
| Page transitions | Smooth scroll behavior | Native smooth-scroll | Polish, comfortable navigation |
| Images | Subtle scale (1.02-1.05) on hover where clickable | 300ms, ease | Indicates image is interactive |

### What to AVOID

- âŒ Autoplay videos
- âŒ Bouncing or pulsing elements
- âŒ Aggressive entrance animations
- âŒ Loading animations that delay content visibility
- âŒ Animations that trigger repeatedly on scroll
- âŒ Motion that continues when element is out of view
- âŒ Anything that says "look how clever this website is"

### Implementation Notes

- All animations should respect `prefers-reduced-motion` media query
- Parallax should be subtle â€” if someone notices "oh, parallax," it's too much
- Fade-ins should trigger once, not every time element scrolls into view
- Mobile: Reduce or eliminate parallax (performance), keep hover states for tap feedback

---

## COMPONENT PATTERNS

### Hero Section Pattern

**Structure:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                                                      â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”‚
â”‚  â”‚                     â”‚  â”‚                     â”‚   â”‚
â”‚  â”‚  HEADLINE           â”‚  â”‚                     â”‚   â”‚
â”‚  â”‚  Subhead text       â”‚  â”‚     PHOTO           â”‚   â”‚
â”‚  â”‚                     â”‚  â”‚     (environmental) â”‚   â”‚
â”‚  â”‚  [Primary CTA]      â”‚  â”‚                     â”‚   â”‚
â”‚  â”‚  [Secondary CTA]    â”‚  â”‚                     â”‚   â”‚
â”‚  â”‚                     â”‚  â”‚                     â”‚   â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â”‚
â”‚                                                      â”‚
â”‚           (scroll indicator or subtle arrow)         â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Desktop:** Two-column layout, text left (55-60%), photo right (40-45%)
**Mobile:** Stacked â€” headline/text first, photo below
**Background:** Deep navy (#0a1628) with subtle gradient or texture
**Photo treatment:** Environmental shot, can extend slightly beyond container or have soft fade at edges

### Service Card Pattern (Three Paths)

**Structure:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                     â”‚
â”‚      [ICON]         â”‚
â”‚                     â”‚
â”‚  Card Title         â”‚
â”‚                     â”‚
â”‚  Description text   â”‚
â”‚  that explains the  â”‚
â”‚  service offering   â”‚
â”‚                     â”‚
â”‚  [Learn More â†’]     â”‚
â”‚                     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Specifications:**
- Equal sizing within row (flex or grid)
- Subtle shadow: `0 4px 20px rgba(0,0,0,0.08)`
- Border-radius: 8-12px
- Padding: 32-40px
- Background: White or very light
- Hover: Lift + shadow increase + subtle border color (gold)
- Icon: Simple line icon or custom graphic, gold accent color
- CTA: Text link with arrow, gold color

### Testimonial Pattern

**Structure:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                                                      â”‚
â”‚         "Quote text in large, elegant type           â”‚
â”‚          that stands out from body content.          â”‚
â”‚          This creates visual break and social        â”‚
â”‚          proof in a sophisticated way."              â”‚
â”‚                                                      â”‚
â”‚                    â€” Name, Context                   â”‚
â”‚                                                      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Specifications:**
- Dark background section (impact moment)
- Quote in Playfair Display italic, larger size (24-28px)
- Cream or white text
- Optional: Subtle quotation mark graphic as background element (very low opacity)
- Attribution in smaller, regular weight

### CTA Section Pattern

**Structure:**
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                                                      â”‚
â”‚           Compelling headline here                   â”‚
â”‚                                                      â”‚
â”‚     Supporting text that encourages action           â”‚
â”‚                                                      â”‚
â”‚              [Primary CTA Button]                    â”‚
â”‚                                                      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Specifications:**
- Dark background (navy)
- Centered text alignment
- Generous vertical padding (80-120px)
- Gold CTA button
- Can include subtle background texture or pattern

---

## PHOTOGRAPHY DIRECTION

### Overall Style

Environmental, warm, authentic. Photos should feel like glimpses into a real voice coaching practice, not stock photography or overly produced marketing shots.

### Photo Treatment Guidelines

| Context | Treatment |
|---------|-----------|
| Hero photos | Can extend beyond container, soft edge fade acceptable |
| About page | Mix of formal portrait and candid/teaching moments |
| Service pages | Can reuse hero photo or show teaching context |
| Cards/thumbnails | Consistent aspect ratio, consistent treatment |
| Background use | Heavy blur or dark overlay if text overlays image |

### Technical Requirements

- Minimum resolution: 2000px on longest edge for hero images
- Format: WebP with JPEG fallback
- Compression: Quality 80-85 for photos
- All photos need proper alt text

### Photo Assignments (Reference)

| Page | Photo Type | Mood |
|------|------------|------|
| Homepage Hero | Professional, warm headshot/3/4 | "Welcome, I'm glad you're here" |
| About (Primary) | Author/expert portrait | "40 years of experience" |
| About (Secondary) | Teaching moment | "This is what working together looks like" |
| AVF Section | Scholarly, with books/library | "The author behind the framework" |
| Contact | Welcoming, in studio | "Come on in, let's talk" |
| Blog (Author bio) | Friendly thumbnail | "Someone you want to learn from" |

---

## SUB-BRAND SECTION TREATMENTS

### AVF Section

When visitors enter the AVF section, the visual environment shifts to echo the book cover design.

**Key Changes:**
- Background: Rich teal (#1a6b7c) with texture/mottling (not flat)
- Headlines: Amber gold (#d4a039) in Cinzel font (matches book cover)
- Body text: Cream (#f0e8d4)
- Book title treatment: Must match book cover exactly

**Transition:** The shift should feel intentional â€” like walking from the main studio into a library or study. Can use a gradient transition zone between parent brand and AVF section.

**Assets to use exactly as provided:**
- Five Pillars diagram: `/mnt/project/1_CG_AVf_Pillars.png`
- Eight Dials diagram: `/mnt/project/2_CG_AVF_Dials.png`

These are dogma-level â€” no modifications, recreations, or substitutions.

### PASS Profile Section

When visitors enter the PASS section, the visual environment shifts to echo the PASS Profile branding.

**Key Changes:**
- Background: Deep teal (#1a4a5c)
- Accent color: Bright green (#3db58c) for CTAs and highlights
- Logo treatment: "PASS" in deep teal, "PROFILE" in emerald/bright green

**Visual Motif:** The fingerprint-inside-speech-bubble concept from the logo can be used as subtle background pattern or accent element (low opacity).

**Transition:** Similar to AVF â€” intentional shift that feels like entering a distinct but related space.

---

## RESPONSIVE BEHAVIOR

### Breakpoints

| Breakpoint | Width | Name |
|------------|-------|------|
| Large Desktop | 1400px+ | xl |
| Desktop | 1200-1399px | lg |
| Small Desktop/Tablet Landscape | 992-1199px | md |
| Tablet Portrait | 768-991px | sm |
| Mobile | <768px | xs |

### Key Responsive Transformations

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero | Two-column | Two-column (narrower) | Stacked |
| Navigation | Full horizontal | Hamburger menu | Hamburger menu |
| Service cards | 3 across | 2 across | Stacked |
| Content sections | Wide with margins | Edge to edge with padding | Edge to edge, increased padding |
| Typography | Full scale | Slightly reduced | Mobile scale |
| Parallax | Active | Reduced | Disabled |

### Mobile-Specific Rules

- Minimum touch target: 44x44px
- Adequate spacing between interactive elements
- No hover-dependent information (all info accessible without hover)
- Forms: Full-width inputs, generous spacing
- Images: Responsive, don't crop important content

---

## HEADER & NAVIGATION

### Desktop Header

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  [LOGO]     Singing  Speaking  Ensembles  About  ...   [PASS] [Get Started] â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Specifications:**
- Height: 80px default, 64px when scrolled/sticky
- Background: Transparent on hero, solid navy when scrolled
- Logo: Links to home, adequate size (recognizable)
- Nav items: Inter font, 500 weight, 14-15px
- PASS button: Green accent (#3db58c), subtle outline or filled
- Get Started: Gold (#d4a84b), filled button

### Sticky Behavior

- Header becomes sticky on scroll
- Background transitions from transparent to solid navy
- Subtle shadow appears: `0 2px 10px rgba(0,0,0,0.1)`
- Height slightly reduces
- Transition: 300ms ease

### Mobile Header

- Logo left, hamburger menu icon right
- Menu opens as full-screen or slide-in overlay
- Dark background matching brand
- Navigation items stacked, generous touch targets
- Close button clearly visible

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

---

## FOOTER DESIGN

### Structure

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                                                                  â”‚
â”‚  [LOGO]                                                          â”‚
â”‚                                                                  â”‚
â”‚  Master Your Voice                                               â”‚
â”‚                                                                  â”‚
â”‚  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€  â”‚
â”‚                                                                  â”‚
â”‚  COACHING        RESOURCES       CONNECT                         â”‚
â”‚  Singing         AVF Book        Studio Address                  â”‚
â”‚  Speaking        PASS Profile    Phone                           â”‚
â”‚  Ensembles       Vocal Health    Email                           â”‚
â”‚  Pricing         Blog                                            â”‚
â”‚  Workshops                                                       â”‚
â”‚                                                                  â”‚
â”‚  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€  â”‚
â”‚                                                                  â”‚
â”‚  Â© 2026 Ted's Voice Academy. All rights reserved.               â”‚
â”‚                                                                  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Specifications:**
- Background: Deep navy (#0a1628)
- Text: Cream (#f5f0e1)
- Links: Cream, gold on hover
- Adequate padding: 60-80px vertical
- Column layout on desktop, stacked on mobile

---

## FORM DESIGN

### Visual Style

- Clean, spacious layout
- Labels above fields (not placeholder-only)
- Input background: White or very light
- Border: Light gray, gold on focus
- Border-radius: 4-6px
- Adequate padding inside inputs (12-16px)
- Clear required field indicators (asterisk or text)

### States

| State | Treatment |
|-------|-----------|
| Default | Light gray border (#d1d5db) |
| Focus | Gold border (#d4a84b), subtle glow |
| Error | Warm red border, error message below |
| Success | Green checkmark or border |
| Disabled | Muted background, reduced opacity |

### Buttons in Forms

- Submit button: Gold background, dark text
- Full width on mobile, right-aligned on desktop
- Clear loading state if submission takes time
- Success/confirmation message on submission

---

## ACCESSIBILITY REQUIREMENTS

### Color Contrast

- All text must meet WCAG AA standards minimum
- Body text on light backgrounds: #2a2a2a on #faf8f5 âœ“
- Body text on dark backgrounds: #ffffff on #0a1628 âœ“
- Gold accents: Verify contrast when used for text

### Interactive Elements

- Clear focus states for keyboard navigation
- Focus indicators visible on both light and dark backgrounds
- Skip-to-content link for screen readers
- All images have descriptive alt text

### Motion

- Respect `prefers-reduced-motion` media query
- No flashing or strobing content
- Animation not required to understand content

### Forms

- Labels programmatically associated with inputs
- Error messages clearly associated with fields
- Required fields clearly indicated

---

## IMPLEMENTATION CHECKLIST

### Before Build
- [ ] Photo assets finalized and optimized
- [ ] All copy files reviewed (TVA_*_Forward_Light_*.md)
- [ ] Color values confirmed
- [ ] Font files obtained (Google Fonts: Playfair Display, Inter)

### During Build
- [ ] Mobile-first or desktop-first approach documented
- [ ] Component library established
- [ ] Color variables/tokens set up
- [ ] Typography scale implemented
- [ ] Responsive breakpoints configured

### Quality Checks
- [ ] All pages match dark/light rhythm
- [ ] Animations are subtle and purposeful
- [ ] AVF section uses correct brand colors and fonts
- [ ] PASS section uses correct brand colors
- [ ] Forms are accessible and functional
- [ ] Mobile experience is smooth
- [ ] Page load performance acceptable
- [ ] All links functional

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| v1 | 2026-01-25 | Initial design direction brief created (Session 10) |

---

## RELATED DOCUMENTS

| Document | Purpose |
|----------|---------|
| TVA_Design_Specifications_v1.md | Detailed color codes, asset paths, technical specs |
| Style_guide_for_website.txt | Forward Light writing style |
| TVA_Homepage_Copy_Forward_Light_v3.md | Homepage content |
| [All other TVA_*_Forward_Light_*.md files] | Page content |

---

**END OF DESIGN DIRECTION BRIEF**
