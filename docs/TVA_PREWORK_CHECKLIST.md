# TVA Pre-Work Checklist: Before Starting Claude Code

Complete these items BEFORE your first Claude Code session to ensure smooth progress.

---

## PART 1: Technical Setup (Required)

### Install Prerequisites
- [ ] **Node.js** (version 18 or higher) — Download from https://nodejs.org
- [ ] **Git** — Download from https://git-scm.com
- [ ] **VS Code** (recommended) — Download from https://code.visualstudio.com
- [ ] **Claude Code CLI** — Follow Anthropic's installation instructions

### Clone and Test the Repository
```bash
# Clone your repo
git clone https://github.com/tedsvoiceacademy/teds-voice-academy

# Navigate into the folder
cd teds-voice-academy

# Install dependencies
npm install

# Start the dev server
npm run dev
```

**Verify:** You should see your site running at `http://localhost:4321`

- [ ] Site runs locally without errors
- [ ] You can see existing pages (Homepage, About, etc.)

### Verify GitHub Access
- [ ] You can push changes to the repository
- [ ] You know your GitHub credentials (or have them saved)

---

## PART 2: Decisions Needed (Choose Before Starting)

### Decision 1: Content Management System (CMS)
**Question:** How do you want to update site content after launch?

**Options:**
| Option | Pros | Cons | Recommended? |
|--------|------|------|--------------|
| **A: Decap CMS** | Visual editor at /admin, free, no coding | Initial setup required | ✅ Yes |
| **B: Ask Claude** | No setup, just chat | Requires AI session each time | For rare updates |
| **C: Edit files directly** | Full control | Requires GitHub navigation | If comfortable |

**Your choice:** _________________

### Decision 2: Email Newsletter Service
**Question:** How do you want to manage your email list?

**Options:**
| Option | Cost | Pros | Cons |
|--------|------|------|------|
| **Buttondown** | $9/mo | Simple, clean, creator-friendly | Basic automation |
| **ConvertKit** | $15/mo+ | Good automation, creator-focused | More complex |
| **Mailchimp** | Free-$13/mo | Familiar, robust | Gets expensive |
| **Netlify Forms only** | Free | Zero cost | Manual list management |

**Recommendation:** Start with Buttondown or Netlify Forms. Upgrade later if needed.

**Your choice:** _________________

### Decision 3: Digital Product Delivery (Vocal Fit)
**Question:** When you're ready to sell Vocal Fit products, which platform?

**Options:**
| Option | Fees | Pros | Cons |
|--------|------|------|------|
| **Gumroad** | 10% + payment fees | Simple, trusted, handles everything | Higher fees |
| **Lemonsqueezy** | 5% + payment fees | Modern, good UX, tax handling | Newer |
| **Stripe + custom** | 2.9% + $0.30 | Full control, lowest fees | More dev work |

**Recommendation:** Gumroad or Lemonsqueezy for simplicity. This is Phase 2 — can decide later.

**Your choice:** _________________

### Decision 4: Analytics
**Question:** How do you want to track website traffic?

**Options:**
| Option | Cost | Pros | Cons |
|--------|------|------|------|
| **Google Analytics 4** | Free | Comprehensive, powerful | Complex, privacy concerns |
| **Plausible** | $9/mo | Simple, privacy-friendly, no cookies | Less detailed |
| **None for now** | Free | No setup | No data |

**Recommendation:** Plausible for simplicity and privacy, or GA4 if you want comprehensive data.

**Your choice:** _________________

### Decision 5: Members-Only Section Approach
**Question:** How should the future members-only section work?

**Options:**
| Option | Description | Complexity |
|--------|-------------|------------|
| **External platform** | Use Teachable, Podia, etc. — link from TVA site | Low |
| **Memberstack + site** | Password-protected pages on TVA site | Medium |
| **Custom Auth0** | Full custom authentication | High |

**Note:** This is Phase 2+. You can defer this decision, but knowing your direction helps planning.

**Your choice (or "Defer"):** _________________

---

## PART 3: Content Preparation

### Photos Still Needed
Check if these are ready and accessible:

- [ ] **Homepage hero photo** — Professional shot of Ted, warm and welcoming
- [ ] **About page primary photo** — Author/expert portrait
- [ ] **About page secondary photo** — Teaching moment (optional)
- [ ] **Contact page photo** — Welcoming, in-studio feel
- [ ] **Blog author bio thumbnail** — Smaller version for bylines

**Photo format:** PNG or JPG, minimum 2000px on longest edge for hero images

### Testimonials
Currently using placeholders. Do you have real testimonials ready?

- [ ] At least 2-3 client testimonials with names and context
- [ ] Permission to use their names on the website

### Google Maps Embed
Need the actual embed code for Contact page:

1. Go to Google Maps
2. Search: "4204 Lorna Ct SE, Lacey, WA 98503"
3. Click Share → Embed a map
4. Copy the iframe code

- [ ] Google Maps embed code ready

---

## PART 4: Account Setup (If Needed)

### If Using Decap CMS
No separate account needed — uses GitHub authentication.

### If Using Buttondown for Newsletter
- [ ] Create account at https://buttondown.email
- [ ] Note your API key (if needed for integration)

### If Using Google Analytics
- [ ] Create GA4 property at https://analytics.google.com
- [ ] Note your Measurement ID (G-XXXXXXXXXX)

### If Using Plausible
- [ ] Create account at https://plausible.io
- [ ] Add tedsvoiceacademy.com as a site
- [ ] Note your tracking script

---

## PART 5: Domain Preparation

### Current Situation
- **tedsvoiceacademy.com** — Your primary domain (has SEO value)
- **tedsvoice.com** — Currently hosts old webwave site
- **Live site** — Currently at deft-baklava-b2eb2e.netlify.app

### Before Domain Cutover
- [ ] Know where tedsvoiceacademy.com is registered (registrar name)
- [ ] Have login credentials for that registrar
- [ ] Understand: changing DNS may take up to 48 hours to propagate

### Domain Cutover Will Involve
1. In Netlify: Add tedsvoiceacademy.com as custom domain
2. At registrar: Update DNS records per Netlify instructions
3. Set up tedsvoice.com to 301 redirect

**Note:** Claude Code can guide you through this, but you'll need registrar access.

---

## PART 6: First Session Goals

What do you want to accomplish in your first Claude Code session?

**Suggested priority order:**

1. **Verify everything works** — Clone, run locally, make a small change
2. **Build Workshops page** — High priority, copy is ready
3. **Build Vocal Health Hub** — High priority, copy is ready  
4. **Add Google Maps** — Quick fix for Contact page
5. **Build Blog landing page** — Medium priority

**Your goals for first session:**
1. _________________
2. _________________
3. _________________

---

## PART 7: Quick Reference Card

### Key Links
| Resource | URL |
|----------|-----|
| GitHub Repo | https://github.com/tedsvoiceacademy/teds-voice-academy |
| Live Site | https://deft-baklava-b2eb2e.netlify.app |
| Netlify Dashboard | https://app.netlify.com (login with GitHub) |
| AVF on Amazon | https://www.amazon.com/dp/B0GD2SH8J5 |
| PASS Platform | https://pass.tedsvoiceacademy.com |

### Key Contacts/Info
| Item | Value |
|------|-------|
| Business Address | 4204 Lorna Ct SE, Lacey, WA 98503 |
| Phone | (253) 414-2267 |
| Primary Email | ted@tedsvoiceacademy.com |
| AVF Email | AVF@tedsvoiceacademy.com |
| PASS Email | PASS@tedsvoiceacademy.com |

---

## Completion Checklist

Before starting Claude Code, confirm:

**Technical:**
- [ ] Node.js installed
- [ ] Git installed  
- [ ] Repo cloned and runs locally
- [ ] Can push to GitHub

**Decisions Made:**
- [ ] CMS approach chosen (or "defer")
- [ ] Newsletter service chosen (or "defer")
- [ ] Analytics approach chosen (or "defer")

**Content Ready:**
- [ ] All copy files downloaded from Claude project
- [ ] Photos available (or know what's still needed)
- [ ] Dogma-level images downloaded

**Files Organized:**
- [ ] CLAUDE.md placed in project root
- [ ] Docs folder created with copy/specs/images

**You're ready to go!**

---

*Created: February 2026*
