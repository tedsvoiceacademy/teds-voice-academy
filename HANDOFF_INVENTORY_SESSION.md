# INVENTORY SESSION HANDOFF — Ted's Voice Academy Resource Cataloging

**Date written:** February 6, 2026
**Written by:** Claude Code session 14c (Opus 4)
**Purpose:** Dedicated session to inventory, catalog, and plan usage for Ted's resource files

---

## Start Here

1. Read `CLAUDE.md` — project rules, design system, content rules
2. Read this file — for inventory scope and what's already known
3. The resource folders are in the **parent folder** (one level above the code repo):
   `H:\OneDrive\AI Projects\TVA AI Projects\TVA Webstie 4.0\teds-voice-academy-main\`

---

## What This Session Should Accomplish

1. **Full inventory** of every file across 4 resource folders
2. **Categorize** each item: ready for website, teaching material only, duplicate, or unclear
3. **Identify duplicates** between folders (Vocal Fit MP3s appear in both Vocal Fit/ and WARM UPS/)
4. **Plan what goes on the site** vs. stays as offline teaching resources
5. **Draft a Vocal Fit product page plan** — content structure, audio player approach, download delivery
6. **Map resources to existing pages** — which files fill the "coming soon" placeholders on Vocal Health Hub

---

## Resource Folders — Quick Inventory (from Session 14c)

### Vocal Fit/ (29 files)
**Location:** `H:\...\teds-voice-academy-main\Vocal Fit\`

**Graphics (4 files):**
- `1.png` — unknown
- `VOCAL-FIT  LOGO.png` — Vocal Fit logo with green circular icon and tagline "Vocal Optimization Conditioning for Agility and Longevity - Focused Integrative Training"
- `Vocal Fit Banner.png` — banner version
- `VOCAL-FIT Design.png` — design asset
- `Female old-young.png` — comparison graphic
- `Male old-youngpng.png` — comparison graphic

**PDFs (3 files):**
- `Vocal Conditioning Exercises _VOCAL-FIT_.docx.pdf`
- `VOCAL CONDITIONING EXERCISES.pdf`
- `Modifying the Vocal Conditioning Warm Up for maturing voices.pdf`

**Audio — LOW range (9 files in subfolder):**
- `00 Complete VOCAL-FIT Warm up.mp3` — full warm-up track
- `01 Humming 15 seconds various pitches.mp3`
- `02 Hung-ee-uh.mp3`
- `03 Slow Glissando over a 5th.mp3`
- `04 Intermittent Lip Trill.mp3`
- `05 Balanced Onset Arpeggio.mp3`
- `06 Dynamic Training (separate file).mp3`
- `07 Lip Trill Glissando.mp3`
- `08 Demo Track for Vocal Conditioning Warm Ups.mp3`
- `VOCAL-FIT Vocal Conditioning Warm-Up.pdf` — companion PDF

**Audio — HIGH range (9 files in subfolder):**
- Same 9 tracks as LOW, with "-high" suffix
- `VOCAL-FIT Vocal Conditioning Warm-Up.pdf` — companion PDF

### WARM UPS/ (21+ files)
**Location:** `H:\...\teds-voice-academy-main\WARM UPS\`
- AVF Barbershop Chorus warm-up
- Daily warm-ups
- SOVT exercises
- Musical Theater warm-up
- Baritone warm-up
- Universal Vocal Reset
- Practicing guidelines, video scripts
- **NOTE:** Appears to contain duplicates of the Vocal Fit LOW range MP3 set

### Additional Vocal Health files and resources/ (7+ files)
**Location:** `H:\...\teds-voice-academy-main\Additional Vocal Health files and resources\`
- SOVT exercises
- Straw phonation
- Resonance development
- Singing fundamentals
- Church singer curriculum
- Exercise guides

### Other - miscellaneous/ (12+ files)
**Location:** `H:\...\teds-voice-academy-main\Other - miscellaneous\`
- `AVF_Workshop_Series_COMPLETE_Locked_Slides.pdf` / `.docx` — full workshop slide deck
- `TedsVoiceAcademy_AuditionChecklist (1).pdf` — student resource
- `TVA Workshop Logo.png` — workshop branding
- `TVA_ Studio Policies.pdf` — studio policies document
- `(re)discover Your Voice/` subfolder — anatomy images (larynx, posture, body alignment)

---

## Key Questions for This Session

1. **Vocal Fit as a digital product:** Does Ted want to sell the MP3 warm-ups online? If yes, which delivery platform (Gumroad, Lemonsqueezy, etc.)? Does he want audio playback embedded on the page or download-only?

2. **Warm-ups on the site:** Should the warm-up PDFs be downloadable resources on the Vocal Health Hub or kept as teaching materials only?

3. **Vocal Health content:** Which of the Additional Vocal Health files map to the "coming soon" placeholder sections on vocal-health.astro? (Currently placeholders: Home Care & Remedies, SOVT Tools & Techniques, Vocal Fit, Articles & Resources)

4. **Workshop slides:** Is the AVF Workshop slide deck something that should inform website content, or is it strictly offline teaching material?

5. **Studio Policies:** Should these be published on the site (separate page or section of Terms)?

6. **Audition Checklist:** Could this be a free downloadable resource / lead magnet on the site?

7. **Duplicates:** Confirm the Vocal Fit LOW MP3s in WARM UPS/ are exact duplicates and can be consolidated.

---

## Related Website Pages

These existing pages have content that relates to the resource files:

- **vocal-health.astro** — Has 4 "coming soon" placeholder sections that could be filled with content from Additional Vocal Health files
- **workshops.astro** — AVF Workshop content; the slide deck in Other/ could inform this
- **Vocal Fit section** (currently on vocal-health.astro) — The Vocal Fit product needs its own page or prominent section

---

## Technical Considerations

- **MP3 hosting:** MP3 files are too large for Git/Netlify static hosting if being sold as a product. Need a delivery platform or CDN.
- **PDF downloads:** Small PDFs can be served from `public/` but consider whether they should be gated (email capture) or freely available.
- **Image processing:** Any images from these folders that go on the site need WebP conversion through the standard sharp pipeline (800px max, quality 80).

---

*This handoff is for a dedicated inventory session. The main development handoff is in HANDOFF_NEXT_SESSION.md.*
