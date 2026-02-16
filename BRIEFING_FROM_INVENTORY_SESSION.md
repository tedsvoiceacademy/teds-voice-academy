# Briefing: Resource Inventory Session — February 7, 2026

**For:** Main build session thread
**From:** Dedicated inventory/file organization session
**Purpose:** Inform you about what was done, what's available, and what Ted decided

---

## What Happened

Ted had accumulated resource files across 4 folders sitting in the parent project directory (one level above the code repo): Vocal Fit audio/images/PDFs, warm-up documents, vocal health materials, and miscellaneous items like workshop slides and an audition checklist. A dedicated session was run to inventory all of it, get Ted's decisions, and organize everything so it's ready for you to use when the time comes.

**98 files** were inventoried. About 30 were duplicates that got eliminated. The rest were renamed (SEO-friendly kebab-case, no spaces or emojis), images were converted to optimized WebP, and everything was sorted into a clean folder structure.

---

## New Folder Structure

The old 4 folders (`Vocal Fit/`, `WARM UPS/`, `Additional Vocal Health files and resources/`, `Other - miscellaneous/`) have been **deleted**. Everything now lives in 5 new folders at the same level (parent directory, alongside the code repo):

| Folder | What's In It | Your Concern Level |
|--------|-------------|-------------------|
| **WEBSITE-READY/** | 43 files — images, MP3s, PDFs, and documents that Ted has approved for website use | **High** — this is what you'll pull from when building new features |
| **TEACHING-ONLY/** | 16 files — Ted's offline teaching materials, studio policies | **Low** — not for the website now. Future members-only site. |
| **CONTENT-SOURCES/** | 4 files — workshop slides, video scripts, voice classification reference | **Low** — reference material that may inform copy but isn't directly published |
| **RECREATE-IN-AI/** | 3 files — anatomy/posture diagrams with useful concepts but unclear copyright | **None right now** — Ted will recreate these with AI tools when he's ready |
| **DO-NOT-USE/** | 4 files — copyrighted images confirmed unsafe to publish | **None** — these exist only so Ted can review and delete them |

The full file-by-file inventory with sizes, descriptions, and recommended uses is in **`HANDOFF_RESOURCE_INVENTORY.md`** inside the code repo. That's the detailed reference when you need specifics.

---

## Ted's Key Decisions

These came out of direct conversation during the inventory session:

1. **Vocal Fit is a digital product.** Ted wants to sell the MP3 warm-up bundles online. No free samples. **Platform: Lemonsqueezy** (chosen for lower fees and automatic sales tax handling). The store page should be designed to accommodate future products beyond Vocal Fit.

2. **Audition Checklist = lead magnet.** A branded 3-page PDF covering 7 audition types. Ted wants it offered as a free email-gated download on the site. Good for list building.

3. **SOVT content for Vocal Health Hub.** Ted has 4+ documents about SOVT exercises that map to the "SOVT Tools & Techniques" placeholder on vocal-health.astro. However — Ted wants the **section designed first**, then he'll revise his handouts to match the web format. Don't just dump the documents onto the page.

4. **Studio Policies stay offline.** Not for the public site. They'll go on a future members-only area for enrolled/onboarding students.

5. **Workshop slides inform website copy.** The AVF Workshop slide deck can be used as a reference when enhancing workshop descriptions, but the materials themselves aren't published. Possible future workshop participant login area.

6. **Anatomy images need AI recreation.** The concepts (body alignment for singing, vocal tract cross-section, posture comparison) are valuable for educational content, but the source images are copyrighted. Ted will recreate them using AI tools.

---

## Things That Might Affect Your Work

### Vocal Fit Store Page
When this gets built, the assets are ready:
- 7 optimized WebP images in `WEBSITE-READY/vocal-fit/images/` (the logo has transparency)
- 18 MP3 files in `audio-low/` and `audio-high/` (9 tracks each)
- 4 companion PDFs in `pdfs/`
- **Critical:** The MP3s total ~243MB. They cannot go in the Git repo or Netlify's public/ folder. They must be uploaded to Lemonsqueezy for delivery.
- Ted still needs to decide: pricing, product descriptions, and the exact page URL (`/store`, `/resources`, etc.)

### Vocal Health Hub Placeholders
There are now 6 source documents in `WEBSITE-READY/vocal-health-content/` that map to the "coming soon" sections. But Ted explicitly said to design the section structure first, get his approval, and then he'll revise the source material to fit. This is a collaborative content development process, not a straight file-to-page conversion.

### Page Content Sources
6 documents in `WEBSITE-READY/page-content-sources/` can inform specific pages or become blog posts. The speaking-related docs (essential speaking warmup, resonance development) map to the Speaking page. The singing docs (fundamentals, essential daily warmup) map to the Singing page or blog. The practicing guidelines doc is a natural blog post.

### Workshop Logo
A new optimized WebP workshop logo (`WEBSITE-READY/tva-workshop-logo.webp`, 155KB) is available for the Workshops page if you want to use it.

### Vocal Fit Branding Question
VOCAL-FIT has its own logo with green/teal coloring. The site already has sub-brand color schemes for AVF (teal) and PASS Profile (dark teal/green). You may want to discuss with Ted whether Vocal Fit needs its own color scheme or fits under one of the existing ones. This wasn't resolved in the inventory session — it's a design decision for the build sessions.

---

## What's NOT in This Session's Scope

This inventory session only organized files and recorded decisions. No website code was written, no pages were built, no CSS was touched. Everything in the `teds-voice-academy-main/` code repo is exactly as you left it.

---

## If You Need More File Organization Work

If during the build process you discover that:
- Files need further renaming, reformatting, or optimization
- Additional resource files Ted adds need to be inventoried and sorted
- The folder structure needs adjusting
- Source documents need to be reviewed or compared in more detail

...feel free to let Ted know that a follow-up inventory session would be the right place to handle it, rather than interrupting the build flow. Ted knows this is a separate thread and can spin one up.

---

*This briefing was produced at the end of the inventory session. The detailed file-by-file reference is `HANDOFF_RESOURCE_INVENTORY.md` in the code repo.*
