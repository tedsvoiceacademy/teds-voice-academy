# TVA Claude Code Folder Contents Checklist

## What Goes In Your Project Folder

When you start Claude Code, it will have access to all files in the folder you specify. Here's what should be there:

---

## 1. REQUIRED: The CLAUDE.md File

Place the `CLAUDE.md` file in the **root** of your project folder. Claude Code automatically reads this file for project context.

**Location:** `/teds-voice-academy/CLAUDE.md`

---

## 2. REQUIRED: Clone the GitHub Repository

If you haven't already, clone your existing repo. This brings in all the code that's already been built.

```bash
git clone https://github.com/tedsvoiceacademy/teds-voice-academy
```

This will create a `teds-voice-academy` folder with all the existing Astro code.

---

## 3. REQUIRED: Copy Files (Page Content)

Create a `/docs` folder inside your project and include all these files:

### Page Copy (Forward Light versions)
- [ ] `TVA_Homepage_Copy_Forward_Light_v3.md`
- [ ] `TVA_Singing_Page_Forward_Light_v2.md`
- [ ] `TVA_Speaking_Page_Forward_Light_v2.md`
- [ ] `TVA_Ensembles_Page_Forward_Light_v2.md`
- [ ] `TVA_About_Page_Forward_Light_v5.md` (note: v5, not v4)
- [ ] `TVA_AVF_Section_Forward_Light_v1.md`
- [ ] `TVA_PASS_Profile_Section_Forward_Light_v2.md`
- [ ] `TVA_Contact_Page_Forward_Light_v1.md`
- [ ] `TVA_Pricing_Page_Forward_Light_v2.md`
- [ ] `TVA_Blog_Page_Forward_Light_v2.md`
- [ ] `TVA_Workshops_Page_Forward_Light_v1.md`
- [ ] `TVA_Vocal_Health_Hub_Forward_Light_v1.md`

### Style Guides
- [ ] `Style_guide_for_website.txt` (Forward Light writing style)
- [ ] `TVA_Blog_Writing_Style_Guide_v2.md`

### Design & Technical Specs
- [ ] `TVA_Design_Specifications_v1.md`
- [ ] `TVA_Design_Direction_Brief_v1.md`
- [ ] `TVA_Technical_Requirements_v1.md`
- [ ] `TVA_SEO_Meta_Content_v1.md`

### Reference (Optional but Helpful)
- [ ] `PASS_Profile_3_Comprehensive_Description.md`
- [ ] `TVA_SESSION_14_HANDOFF.md` (latest handoff doc)

---

## 4. REQUIRED: Image Assets

Create a folder: `/docs/images/` (or place in `public/images/` if adding directly to repo)

### Dogma-Level Images (MUST include exactly as-is)
- [ ] `1_CG_AVf_Pillars.png` — Five Pillars diagram
- [ ] `2_CG_AVF_Dials.png` — Eight Dials diagram
- [ ] `ASSET_1B____Complete_cover.png` — AVF book cover
- [ ] `PASS_Profile_3_Logo1.png` — PASS Profile logo

### Other Key Images
- [ ] `Teds_Voice_Academy_GD_HR_BRIGHT_GOLD.png` — TVA logo
- [ ] `Front_of_book_on_table.png` — Book lifestyle photo
- [ ] `book_photo.png` — Alternative book photo

### Ted's Photos (if you have them ready)
- [ ] Homepage hero photo
- [ ] About page headshot
- [ ] Contact page photo
- [ ] Blog author bio photo

---

## 5. OPTIONAL: Reference Materials

These are helpful for context but not strictly required:

### If Working on AVF Content
- [ ] `The_Adaptive_Voice_Framework__AVF__V1_0_Complete.pdf` — The book manuscript (primary authority)
- [ ] `AVF_BOOK_LANDING_PAGE_MASTER_RESOURCE.md`

### Sample PASS Reports (for reference only)
- [ ] `TEDs_PASS_Profile_3_0_1222026.pdf`
- [ ] Sample reports show what the assessment produces

---

## Folder Structure When Complete

```
teds-voice-academy/                    # Root project folder
├── CLAUDE.md                          # Claude Code instructions (ROOT LEVEL)
├── docs/                              # Documentation folder
│   ├── copy/                          # All the _Forward_Light_ files
│   │   ├── TVA_Homepage_Copy_Forward_Light_v3.md
│   │   ├── TVA_Singing_Page_Forward_Light_v2.md
│   │   └── ... (all page copy files)
│   ├── specs/                         # Specifications
│   │   ├── TVA_Design_Specifications_v1.md
│   │   ├── TVA_Technical_Requirements_v1.md
│   │   └── Style_guide_for_website.txt
│   └── images/                        # Source images (if not in public/)
│       ├── 1_CG_AVf_Pillars.png
│       ├── 2_CG_AVF_Dials.png
│       └── ... (other images)
├── src/                               # Astro source (from GitHub clone)
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/                            # Public assets
│   └── images/                        # Images already uploaded to site
├── astro.config.mjs
├── package.json
└── ... (other Astro files)
```

---

## How to Download Files from This Claude Project

1. In the Claude.ai web interface, go to your project
2. Click on "Project knowledge" in the sidebar
3. Click on each file you need
4. Download them to your local machine
5. Organize them in the folder structure above

---

## Quick Verification Checklist

Before starting Claude Code, verify:

- [ ] `CLAUDE.md` is in the root of the project folder
- [ ] You can run `npm run dev` and see the site locally
- [ ] All Forward Light copy files are accessible
- [ ] Design spec files are accessible
- [ ] Dogma-level images are present
- [ ] You have Git configured and can push to the repo

---

## Notes

- **The GitHub repo already has the built pages** — you're NOT starting from scratch
- **Claude Code will read the CLAUDE.md automatically** — it contains all the critical rules
- **Keep files organized** — Claude Code works better when it can find things easily
- **Images that are already on the live site** don't need to be re-added; they're in the repo's `public/images/` folder

---

*Created: February 2026*
