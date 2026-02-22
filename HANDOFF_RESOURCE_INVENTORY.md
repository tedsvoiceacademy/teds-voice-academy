# RESOURCE INVENTORY & FILE MAP — Ted's Voice Academy

**Date completed:** February 7, 2026
**Session type:** Dedicated inventory session (separate from main build sessions)
**Produced by:** Claude Code inventory session

---

## How to Use This File

This document is the **definitive resource map** for all of Ted's content files that live alongside the code repo. Main build sessions should reference this file to know:

1. What files exist and where they are
2. What Ted has approved for website use
3. What's ready to implement vs. what needs Ted's further input
4. Technical details (formats, sizes, optimization status)

**File locations are relative to:**
`H:\OneDrive\AI Projects\TVA AI Projects\TVA Webstie 4.0\teds-voice-academy-main\`

The code repo is at:
`teds-voice-academy-main\` (nested subfolder)

---

## Folder Structure Overview

```
teds-voice-academy-main/              ← Parent project folder
├── teds-voice-academy-main/          ← Code repo (Astro site) — DO NOT MODIFY from this map
├── WEBSITE-READY/                    ← Files approved for use on the website
│   ├── vocal-fit/                    ← Vocal Fit digital product assets
│   │   ├── images/                   ← Optimized WebP logos & marketing graphics
│   │   ├── audio-low/               ← 9 LOW range MP3 warm-up tracks
│   │   ├── audio-high/              ← 9 HIGH range MP3 warm-up tracks
│   │   └── pdfs/                    ← Companion guides & exercise PDFs
│   ├── lead-magnets/                ← Free downloadable resources (email-gated)
│   ├── vocal-health-content/        ← Source docs for Vocal Health Hub sections
│   ├── page-content-sources/        ← Docs that inform specific page content / blog posts
│   └── tva-workshop-logo.webp       ← Workshop page branding asset
├── TEACHING-ONLY/                   ← Ted's offline teaching materials (NOT for website)
│   ├── warm-ups/                    ← Warm-up routines for students
│   ├── curricula/                   ← Curriculum documents
│   └── tva-studio-policies.pdf      ← Studio policies (future members-only site)
├── CONTENT-SOURCES/                 ← Reference material that may inform future website copy
│   ├── avf-workshop-slides-complete.pdf / .docx
│   ├── vocal-warmup-video-scripts.docx
│   └── voice-classification-ranges-tessituras.docx
├── RECREATE-IN-AI/                  ← Useful visual concepts — need AI recreation before use
│   ├── concept-body-alignment-for-singing.webp
│   ├── concept-posture-comparison.jpg
│   └── concept-vocal-tract-cross-section.png
└── DO-NOT-USE/                      ← Copyrighted images — cannot publish on website
    ├── copyrighted-istock-vocal-cords.jpg
    ├── copyrighted-cenveo-larynx.jpg
    ├── copyrighted-unknown-larynx.jpeg
    └── copyrighted-scraped-anatomy.webp
```

---

## TED'S DECISIONS (Recorded February 7, 2026)

| # | Topic | Decision |
|---|-------|----------|
| 1 | **Vocal Fit digital product** | YES — sell MP3 bundles online via **Lemonsqueezy**. No free samples. Build a store/resources page that can accommodate future products too. |
| 2 | **SOVT docs → Vocal Health Hub** | YES — use as source material, but design the section structure first. Ted will revise handouts to match the website design before content goes live. |
| 3 | **Audition Checklist lead magnet** | YES — offer as free email-gated PDF download on the site. |
| 4 | **Studio Policies on site** | NO — keep for enrolled/onboarding students only. Will go on future members-only site. |
| 5 | **Workshop slides inform site copy** | YES — use to inform workshop descriptions on the website. Materials themselves stay offline (possible future workshop participant login area). |
| 6 | **Anatomy/posture diagrams** | Concepts are useful. Ted will recreate needed ones in AI. Copyrighted originals cannot be used. |
| 7 | **Warm-up docs for website** | YES — prioritized list created (see Page Content Sources section below). |
| 8 | **Digital product platform** | **Lemonsqueezy** for Vocal Fit MP3 downloads — lower fees (5% + 50¢ vs Gumroad's 10%), automatic sales tax handling. **Riser Placement App** uses Stripe + Supabase + Netlify instead (same as Intonation Lab) — better copy-protection via authenticated web app. |

---

## WEBSITE-READY: Detailed File Inventory

### vocal-fit/images/ — Optimized Product Graphics

All images converted from original PNGs to WebP (quality 80, max 800px wide). The Vocal Fit logo has transparency (alpha channel preserved).

| File | Size | Description | Use On |
|------|------|-------------|--------|
| `vocal-fit-logo.webp` | 16KB | Full logo: green circle icon + "VOCAL-FIT" + "Vocal Conditioning" + acronym tagline. **Has transparency.** | Store/product page hero, anywhere Vocal Fit is referenced |
| `vocal-fit-logo-hq.webp` | 22KB | Same logo, higher quality (90) for flexibility | Use if standard version looks soft at larger sizes |
| `vocal-fit-icon.webp` | 47KB | Circular icon with curved "VOCAL-FIT" text — compact version | Cards, thumbnails, small references |
| `vocal-fit-banner.webp` | 13KB | Wide banner: female split-face + logo + male split-face | Product page banner, promotional sections |
| `vocal-fit-hero-composite.webp` | 39KB | Complete marketing image: both split faces + logo + "Revitalize Your Voice" tagline + benefits text | Hero section for product page |
| `vocal-fit-aging-voice-female.webp` | 36KB | Split-face female: elderly singer / young singer (AI-generated) | Product marketing, "aging voice" messaging |
| `vocal-fit-aging-voice-male.webp` | 36KB | Split-face male: elderly singer / young singer (AI-generated) | Product marketing, "aging voice" messaging |

**Original PNGs have been deleted.** These optimized WebPs are the source of truth.

### vocal-fit/audio-low/ — LOW Range Warm-Up Tracks

9 MP3 files for lower voice ranges. **Total: ~118MB.** These are the product files to be sold via Lemonsqueezy.

| File | Size | Content |
|------|------|---------|
| `vocal-fit-complete-warmup-low.mp3` | 38MB | Full warm-up sequence (all exercises combined) |
| `vocal-fit-01-humming-low.mp3` | 9.4MB | Exercise 1: Humming 15 seconds various pitches |
| `vocal-fit-02-hung-ee-uh-low.mp3` | 4.2MB | Exercise 2: Hung-ee-uh |
| `vocal-fit-03-slow-glissando-low.mp3` | 5.7MB | Exercise 3: Slow Glissando over a 5th |
| `vocal-fit-04-intermittent-lip-trill-low.mp3` | 6.4MB | Exercise 4: Intermittent Lip Trill |
| `vocal-fit-05-balanced-onset-arpeggio-low.mp3` | 4.7MB | Exercise 5: Balanced Onset Arpeggio |
| `vocal-fit-06-dynamic-training-low.mp3` | 38MB | Exercise 6: Dynamic Training |
| `vocal-fit-07-lip-trill-glissando-low.mp3` | 6.8MB | Exercise 7: Lip Trill Glissando |
| `vocal-fit-08-demo-track-low.mp3` | 4.9MB | Exercise 8: Demo Track for Vocal Conditioning |

### vocal-fit/audio-high/ — HIGH Range Warm-Up Tracks

9 MP3 files for higher voice ranges. **Total: ~125MB.** Same exercises, higher range.

| File | Size | Content |
|------|------|---------|
| `vocal-fit-complete-warmup-high.mp3` | 37MB | Full warm-up sequence (all exercises combined) |
| `vocal-fit-01-humming-high.mp3` | 9.5MB | Exercise 1: Humming 15 seconds various pitches |
| `vocal-fit-02-hung-ee-uh-high.mp3` | 4.2MB | Exercise 2: Hung-ee-uh |
| `vocal-fit-03-slow-glissando-high.mp3` | 4.7MB | Exercise 3: Slow Glissando over a 5th |
| `vocal-fit-04-intermittent-lip-trill-high.mp3` | 6.5MB | Exercise 4: Intermittent Lip Trill |
| `vocal-fit-05-balanced-onset-arpeggio-high.mp3` | 4.7MB | Exercise 5: Balanced Onset Arpeggio |
| `vocal-fit-06-dynamic-training-high.mp3` | 38MB | Exercise 6: Dynamic Training |
| `vocal-fit-07-lip-trill-glissando-high.mp3` | 11MB | Exercise 7: Lip Trill Glissando |
| `vocal-fit-08-demo-track-high.mp3` | 4.9MB | Exercise 8: Demo Track for Vocal Conditioning |

**IMPORTANT FOR BUILD SESSION:** MP3 files total ~243MB. They are **too large for Git/Netlify static hosting**. They must be delivered through Lemonsqueezy (or similar platform). Do NOT add these to the Git repo or public/ folder.

### vocal-fit/pdfs/ — Companion Guides

| File | Size | Description | Status |
|------|------|-------------|--------|
| `vocal-fit-warmup-companion-guide.pdf` | 5.5MB | Main companion PDF for the warm-up exercises (included in both LOW and HIGH folders originally) | Ready — include with product purchase |
| `vocal-fit-conditioning-exercises.pdf` | 493KB | Exercise guide (Feb 2016 original) | Ted to review — may be older version of v2 |
| `vocal-fit-conditioning-exercises-v2.pdf` | 280KB | Exercise guide (Feb 2024, appears newer) | Ted to review — may supersede original |
| `vocal-fit-maturing-voices-modifications.pdf` | 312KB | Modifications for aging/maturing voices | High value — could be upsell or bonus with purchase |

### lead-magnets/ — Free Downloadable Resources

| File | Size | Description | Implementation |
|------|------|-------------|---------------|
| `tva-audition-readiness-checklist.pdf` | 3.8KB | 3-page branded PDF covering 7 audition types (General, Classical/Operatic, Musical Theatre, Pop/Contemporary, A Cappella/Choral, Commercial/Jingle/Studio, College/Conservatory, Competition) plus Audition Day Emergency Kit | Email-gated download. Could live on Singing page, a dedicated resources section, or blog post about audition prep. |

### vocal-health-content/ — Source Docs for Vocal Health Hub

These documents map to the "coming soon" placeholder sections on `vocal-health.astro`. Ted wants to **design the section structure first**, then revise these handouts to match, before content goes live.

| File | Size | Maps To (on vocal-health.astro) | Quality Notes |
|------|------|---------------------------------|---------------|
| `sovt-exercises-comprehensive.docx` | 380KB | **SOVT Tools & Techniques** section | Most comprehensive SOVT doc — primary source |
| `sovt-exercise-routines.docx` | 290KB | **SOVT Tools & Techniques** section | Exercise routines companion to above |
| `tva-basic-sovt-warmup-guide.docx` | 396KB | **SOVT Tools & Techniques** section | TVA-branded beginner SOVT guide |
| `straw-phonation-guide.docx` | 12KB | **SOVT Tools & Techniques** section | Straw phonation tube sizing — specific SOVT subtopic |
| `stretching-for-singers.pdf` | 446KB | **Home Care & Remedies** or standalone section | Physical preparation content |
| `tension-release-warmups.docx` | 2.6MB | **Home Care & Remedies** section | Tension release and relaxation exercises |

### page-content-sources/ — Docs That Inform Specific Pages or Blog Posts

These are source documents that can inform website copy or become blog posts. Listed in priority order.

| File | Size | Recommended Use | Target Page |
|------|------|----------------|-------------|
| `essential-speaking-daily-warmup.docx` | 129KB | Blog post or Speaking page resource | speaking.astro or blog |
| `speaking-resonance-development.docx` | 13KB | Speaking page content enrichment | speaking.astro |
| `singing-fundamentals-adult-edition.docx` | 91KB | Blog post: "Singing Lessons for Adults" | blog or singing.astro |
| `essential-basic-daily-warmup.docx` | 1.1MB | Blog post or Singing page resource | singing.astro or blog |
| `practicing-guidelines-singers.docx` | 120KB | Blog post: "Practice Tips for Singers" | blog |
| `sovt-quick-warmup.docx` | 7.9KB | Quick reference for SOVT blog post | blog |

### tva-workshop-logo.webp (155KB)

Converted from PNG. Gold circular TVA logo with "WORKSHOPS - Vocal Training" text. Use on the Workshops page.

---

## TEACHING-ONLY: Files NOT for the Website

These are Ted's offline teaching materials. They stay in this folder for Ted's personal use. They will eventually move to a **members-only site** when that's built.

### warm-ups/ (14 files)

| File | Size | Description |
|------|------|-------------|
| `avf-barbershop-chorus-warmup-22min.docx` | 14KB | AVF Barbershop Chorus 22-minute routine |
| `avf-daily-warmup.docx` | 27KB | AVF-based daily warm-up routine |
| `avf-stage1-somatic-awareness-warmup.docx` | 11KB | AVF Stage 1: Somatic Awareness session |
| `daily-vocal-warmup-basic.docx` | 9.1KB | Basic daily vocal warm-up |
| `early-morning-warmup-guide.docx` | 1.1MB | Early morning specific routine |
| `exercises-general-collection.docx` | 108KB | General exercise collection |
| `find-your-voice-instruction-guide.docx` | 24KB | Student instruction guide |
| `personalized-warmup-routine-template.docx` | 383KB | Customizable routine template |
| `tva-baritone-daily-warmup.docx` | 397KB | Voice-type specific (baritone) |
| `tva-basic-vocal-warmup-sequence.docx` | 675KB | Basic vocal warm-up sequence |
| `tva-core-singing-warmup-sequence.docx` | 988KB | Core singing warm-up sequence |
| `tva-musical-theater-warmup.docx` | 122KB | Musical theater warm-up |
| `tva-universal-vocal-reset-conditioning.docx` | 1.5MB | Universal vocal reset and conditioning |
| `vocal-warmup-exercises-resonance.docx` | 10KB | Resonance exercises |

### curricula/ (1 file)

| File | Size | Description |
|------|------|-------------|
| `curriculum-vocal-training-church-singers.docx` | 12KB | Church singer vocal training curriculum |

### Root (1 file)

| File | Size | Description |
|------|------|-------------|
| `tva-studio-policies.pdf` | 147KB | 3-page studio policies (lesson details, $320/mo flagship package, conduct, recitals, liability, termination). For enrolled/onboarding students. Future members-only site. |

---

## CONTENT-SOURCES: Reference Material for Future Content

These files can inform website copy but are not directly published.

| File | Size | Description | Potential Use |
|------|------|-------------|--------------|
| `avf-workshop-slides-complete.pdf` | 5.0MB | Full AVF Workshop Series slide deck | Inform expanded workshop descriptions on workshops.astro |
| `avf-workshop-slides-complete.docx` | 149KB | Same slides in Word format | Editable version if needed |
| `vocal-warmup-video-scripts.docx` | 308KB | Video scripts for warm-up series | Source material for future YouTube content / blog posts |
| `voice-classification-ranges-tessituras.docx` | 290KB | Voice classification reference chart | Could become a blog post or educational resource |

---

## RECREATE-IN-AI: Visual Concepts Needing Original Art

These images contain useful educational concepts but cannot be used directly on the website due to unclear or copyrighted origins. Ted should recreate them using AI image generation to get clean, on-brand, fully-owned illustrations.

| File | Concept | Suggested Prompt Direction |
|------|---------|---------------------------|
| `concept-body-alignment-for-singing.webp` | Labeled skeleton showing ideal singing posture: soft gaze, level chin, shoulders back, lifted sternum, pelvis tucked, knees soft, feet hip-distance | "Clean anatomical line drawing of ideal singing posture, labeled diagram, professional educational style" |
| `concept-posture-comparison.jpg` | 4 posture types side by side (ideal → sway back) | "Four skeleton posture comparison diagrams showing correct vs incorrect singing alignment" |
| `concept-vocal-tract-cross-section.png` | Cross-section showing nasal cavity, hard/soft palate, tongue, epiglottis, pharynx, vocal cords, larynx, trachea | "Labeled cross-section diagram of the human vocal tract, educational medical illustration style" |

**Where to use on site:** Vocal Health Hub, Singing page, or future educational blog posts.

---

## DO-NOT-USE: Copyrighted Images

These are confirmed copyrighted and **must never be published** on the website.

| File | Why |
|------|-----|
| `copyrighted-istock-vocal-cords.jpg` | iStock watermarked stock photo |
| `copyrighted-cenveo-larynx.jpg` | Cenveo Publisher Services textbook illustration |
| `copyrighted-unknown-larynx.jpeg` | Medical illustration, unknown copyright holder |
| `copyrighted-scraped-anatomy.webp` | Web-scraped image (PageSpeed filename) |

**Recommendation:** Delete this folder entirely once Ted has reviewed. These files serve no purpose.

---

## DUPLICATE FILES REMOVED

The following duplicate files were identified and eliminated during reorganization:

| What | Count | Action Taken |
|------|-------|-------------|
| Vocal Fit LOW MP3s duplicated in WARM UPS/ | 9 MP3s + 1 PDF | Kept Vocal Fit/ originals, deleted WARM UPS/ copies |
| Vocal Fit HIGH MP3s duplicated in WARM UPS/ | 9 MP3s + 1 PDF | Kept Vocal Fit/ originals, deleted WARM UPS/ copies |
| All 7 files in Additional Vocal Health/ | 7 .docx files | Entire folder was redundant (exact copies of WARM UPS/ files) |
| Core Singing Warm-Up Sequence(1).docx | 1 .docx | Duplicate of non-(1) version |
| VOCAL-FIT Warm-Up.pdf (top-level in WARM UPS/) | 1 PDF | Same as copies inside LOW/HIGH subfolders |
| AVF Workshop slides (.docx duplicate of .pdf) | 1 .docx | Kept both formats in CONTENT-SOURCES/ for flexibility |

**Total duplicate files eliminated: ~30 files**

---

## BUILD SESSION ACTION ITEMS

When the main build sessions are ready to implement features using these resources, here's what to do:

### Priority 1: Vocal Fit Store Page (New Page)
- **Page:** `/store` or `/resources` (name TBD with Ted)
- **Platform:** Lemonsqueezy for MP3 delivery + payment processing
- **Assets ready:** All images in `WEBSITE-READY/vocal-fit/images/` (optimized WebP)
- **Products:** LOW bundle (9 tracks), HIGH bundle (9 tracks), Combined bundle (18 tracks)
- **Companion PDFs:** Include `vocal-fit-warmup-companion-guide.pdf` with purchase
- **Bonus/upsell:** `vocal-fit-maturing-voices-modifications.pdf`
- **MP3 hosting:** Upload to Lemonsqueezy (NOT to Git/Netlify — 243MB total)
- **Ted needs to decide:** Pricing for each bundle, product descriptions in Forward Light voice
- **Design note:** Page should accommodate future digital products beyond Vocal Fit
- **Branding:** VOCAL-FIT uses green (#1a6b7c area) — may need its own sub-brand colors like AVF and PASS have. Discuss with Ted.

### Priority 2: Audition Checklist Lead Magnet
- **Asset ready:** `WEBSITE-READY/lead-magnets/tva-audition-readiness-checklist.pdf`
- **Implementation:** Email-gated download (visitor provides email → gets PDF)
- **Placement options:** Singing page, Workshops page, dedicated resources section, or blog post
- **Integration:** Ties into newsletter/email list building (Buttondown when set up)
- **Ted needs to decide:** Where on the site to feature it

### Priority 3: Vocal Health Hub — Fill Placeholder Sections
- **Source docs:** Everything in `WEBSITE-READY/vocal-health-content/`
- **Process:** Design section structure first → Ted revises handouts → build content
- **SOVT section:** 4 source documents available (comprehensive exercises, routines, basic guide, straw phonation)
- **Home Care section:** stretching-for-singers.pdf + tension-release-warmups.docx
- **Ted needs to decide:** Review and revise source docs to website quality

### Priority 4: Page Content Enrichment / Blog Posts
- **Source docs:** Everything in `WEBSITE-READY/page-content-sources/`
- **Speaking page:** essential-speaking-daily-warmup.docx + speaking-resonance-development.docx
- **Singing page:** singing-fundamentals-adult-edition.docx + essential-basic-daily-warmup.docx
- **Blog posts:** practicing-guidelines-singers.docx, sovt-quick-warmup.docx
- **Process:** Ted reviews docs → Claude adapts to Forward Light web copy → build

### Priority 5: Workshop Page Enhancement
- **Asset ready:** `WEBSITE-READY/tva-workshop-logo.webp` (155KB, optimized)
- **Content source:** `CONTENT-SOURCES/avf-workshop-slides-complete.pdf` — use to inform expanded workshop descriptions
- **Workshop logo:** Can be placed on workshops.astro

### Future: Members-Only Site
- **All files in TEACHING-ONLY/** will eventually move to a members-only area
- **Studio Policies** specifically for enrolled/onboarding students
- **Workshop materials** possibly behind participant login
- **Architecture TBD** — not in scope for current build sessions

### Future: AI-Recreated Educational Images
- **Reference images in RECREATE-IN-AI/** — Ted recreates using AI tools
- **Target pages:** Vocal Health Hub, Singing page, educational blog posts
- **Concepts:** Body alignment for singing, posture comparison, vocal tract anatomy

---

## Technical Notes for Build Sessions

### Image Optimization Already Done
All images in WEBSITE-READY/ have been processed through sharp:
- Format: WebP
- Quality: 80 (standard) or 90 (HQ variant)
- Max width: 800px
- Vocal Fit logo: **has transparency** (alpha channel preserved)
- Workshop logo: converted from 1.1MB PNG to 155KB WebP

### File Naming Convention
All files follow SEO-friendly kebab-case naming:
- No spaces, no special characters, no emojis
- Descriptive names with relevant keywords
- MP3s include track number and range suffix (e.g., `vocal-fit-03-slow-glissando-low.mp3`)

### MP3 File Sizes (Critical)
- LOW range total: ~118MB
- HIGH range total: ~125MB
- Combined: ~243MB
- **These CANNOT go in the Git repo or Netlify's public/ folder**
- Must use external delivery (Lemonsqueezy)

---

*This inventory was completed February 7, 2026. All file operations (rename, convert, reorganize, delete) have been executed. The new folder structure is live and the 4 original resource folders have been deleted.*
