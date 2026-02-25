# TVA Contact & Lead System â€” Session Handoff

## Session Summary

This session established the strategic foundation and complete schema for a lightweight CRM system to capture and manage contacts across all Ted's Voice Academy touchpoints. The system is designed to grow with the business while remaining simple to use day-to-day.

---

## Strategic Decisions Made

### Platform Choice: Airtable

**Why Airtable over Google Sheets:**
- Relational database power with spreadsheet-friendly interface
- Multiple filtered views of the same data (no duplicating or complex pivot tables)
- Built-in forms that can replace or supplement Netlify Forms
- Mobile app for on-the-go entry
- Clear upgrade path as business scales

**Pricing Reality:**
- **Free tier:** 1,000 records/base, 1 GB attachments, 100 automations/month, up to 5 editors
- **Team tier:** $20/user/month (annual) â€” 50,000 records/base
- Form submissions don't count as users (only editors do)
- Ted is the only editor, so Free tier works indefinitely until volume exceeds 1,000 contacts

### Data Entry Points Identified

1. **Website Forms:**
   - General contact/inquiry form
   - Workshop interest form
   - (Potentially) Service-specific inquiry forms

2. **Manual Entry Channels:**
   - Direct email inquiries
   - Meta Messenger conversations
   - Phone calls
   - Business card scanning (via Business Card Pro Android app â†’ Excel export â†’ Airtable import)
   - Referral introductions

### Design Philosophy

- **Simple over comprehensive** â€” Ted is new to CRM; system must be quick and non-burdensome
- **Notes field does heavy lifting** â€” Most context lives in free-form notes rather than structured fields
- **Capture enough to segment** â€” Can answer "who's interested in workshops?" or "who came from networking?"
- **Build for future, use for now** â€” Schema supports growth without requiring complexity today

---

## Finalized Schema

### Core Fields (Every Contact)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| First Name | Text | Yes | |
| Last Name | Text | Yes | |
| Email | Email | Yes | |
| Phone | Phone | No | |
| Date Added | Date/time | Auto | When record was created |

### Source Tracking

**Contact Channel** (Single select â€” how they entered the system)
- Website Form
- Direct Email
- Meta Messenger
- Phone Call
- Business Card / Networking
- Referral Introduction
- Workshop Attendee
- Other

**Discovery Source** (Single select â€” how they originally found TVA)
- Web Search
- Social Media
- Referral
- Amazon / AVF Book
- Networking Event
- Workshop
- Unknown

**Referral Detail** (Text) â€” Optional specifics like "Referred by Jane Smith" or "Olympia Chamber mixer"

### Interest Tracking

**Primary Interest** (Single select)
- Singing Coaching
- Speaking Coaching
- Ensemble Coaching
- Workshops
- AVF Book
- PASS Profile
- General Inquiry

**Secondary Interests** (Multi-select â€” same options as above)

### Status Tracking (Simplified)

| Status | When to Use |
|--------|-------------|
| New | Just came in, not yet contacted |
| Contacted | You've reached out, ball's in their court |
| In Conversation | Active dialogue happening |
| Active Client | Currently working together |
| Past Client | Engagement completed |
| Inactive | Went cold, no longer pursuing |

### Activity Tracking (Minimal)

| Field | Type | Purpose |
|-------|------|---------|
| Last Contact | Date | When you last touched base |
| Next Action | Text | Quick reminder ("Follow up Tuesday", "Send workshop info") |
| Notes | Long text | Running notes, conversation history, everything else |

### Conditional Fields (Based on Primary Interest)

**For All Coaching Interests (Singing, Speaking, Ensemble):**
- Experience Level (Single select): Beginner, Some Experience, Experienced, Professional

**For Ensemble Coaching:**
- Ensemble Type (Single select): Choir, Worship Team, A Cappella, Corporate Group, Other
- Role (Single select): Director, Member, Administrator

**For Workshops:**
- Workshop Interest (Multi-select): Singing Technique, Speaking Skills, Ensemble/Team Building, Vocal Health, Custom/Private
- Preferred Format (Single select): In-Person, Virtual, Either

**For PASS Profile:**
- Organization Name (Text)

**For AVF Book:**
- Book Inquiry Type (Single select): Bulk Order, Book Club, Speaking Request, Media/Press, General

### Views (Dashboard Filters)

| View Name | Filter Logic | Purpose |
|-----------|--------------|---------|
| Inbox | Status = "New" | See who just came in |
| Follow-Up Needed | Status = "Contacted" AND Last Contact > 7 days | Don't let leads go cold |
| Active Conversations | Status = "In Conversation" | Current dialogues |
| My Clients | Status = "Active Client" | Current client roster |
| Everyone | No filter | Master list |

---

## Integration Points

### Business Card Pro (Android App)

Ted's existing workflow for networking contacts:
1. Scan cards into Business Card Pro app
2. Export to Microsoft Excel (confirmed available in app)
3. Import Excel file into Airtable
4. Bulk-tag imported records with Contact Channel = "Business Card / Networking"
5. Add Referral Detail with event name if relevant

### Website Forms

Two approaches possible:
1. **Netlify Forms â†’ Zapier â†’ Airtable** (keeps current form infrastructure)
2. **Airtable Forms directly** (simpler, everything in one place)

Decision deferred to next session based on what works best during build.

---

## Next Session Objectives

### Primary Goal: Build the Airtable Base (Turnkey)

Ted prefers a turnkey approach â€” Claude builds, Ted uses.

**Deliverables:**
1. Create Airtable base with all fields configured
2. Set up all views (Inbox, Follow-Up Needed, Active Conversations, My Clients, Everyone)
3. Create at least one intake form (general inquiry) as template
4. Provide clear instructions for:
   - How to manually add a contact
   - How to import from Excel (for business card batches)
   - How to use each view
   - How to connect website forms (Netlify â†’ Airtable or Airtable forms)

### Secondary Considerations

- Determine if Airtable forms will replace or supplement Netlify Forms
- Map website form fields to Airtable schema
- Consider mobile workflow for quick entry after networking

---

## Technical Notes

- Ted has an Airtable account (has used it before, comfortable with the interface)
- Website is on Netlify with existing contact form using Netlify Forms
- Primary domain: tedsvoiceacademy.com
- GitHub integration for deployment

---

## Open Questions for Next Session

1. Does Ted want to use Airtable's native forms on the website, or keep Netlify Forms and connect via Zapier?
2. Should there be separate forms for different inquiry types (coaching vs. workshop vs. general) or one unified form with a "What brings you here?" dropdown?
3. Does Ted have a Zapier account? (Relevant if connecting Netlify Forms to Airtable)

---

## First Prompt for Next Session

```
I'm continuing work on my TVA Contact & Lead System. Last session, we finalized the complete schema for a lightweight CRM in Airtable. This session, I'd like you to build the Airtable base for me (turnkey approach).

Please review TVA_CRM_CONTACT_SYSTEM_HANDOFF.md in the project files for the full schema and context.

Key points:
- All fields, options, and views are defined in the handoff document
- I prefer a turnkey build â€” you create it, I use it
- I have an existing Airtable account and am comfortable with the interface
- I'm new to CRM systems, so simplicity and ease of daily use is critical

Questions to address as we build:
1. Should I use Airtable's native forms on my website, or keep Netlify Forms and connect via Zapier?
2. One unified inquiry form or separate forms for different purposes?

Let's build this system.
```

---

*Document created: January 31, 2026*
