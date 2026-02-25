# HANDOFF DOCUMENT & SESSION PROMPT CREATION GUIDE
## Master Template for Project Continuity Across Claude Chat Sessions

**Document Purpose:** This template provides instructions for creating comprehensive handoff documents and session prompts that ensure seamless project continuity across Claude chat sessions. The goal is maximum fidelityâ€”not efficiencyâ€”so that no context, decision, or nuance is lost between sessions.

**Philosophy:** Handoffs are the lifeblood of multi-session projects. A handoff document that's "too long" is far better than one that's incomplete. When in doubt, include it. The next session's Claude has no memoryâ€”only what's in the documents you provide.

---

## PART 1: HANDOFF DOCUMENT STRUCTURE

A complete handoff document should contain ALL of the following sections. Omit nothing. Add sections as the project requires.

### 1.1 Document Header

```markdown
# [PROJECT NAME] â€” [DOCUMENT TYPE] MASTER HANDOFF
## Comprehensive Reference Document for Chat Continuity

**Document Purpose:** [One sentence explaining what this document is for]

**Last Updated:** [Date] (Session [#])
**Project Status:** [Current phase and brief status]
**Key URL/Location:** [Primary project URL or location if applicable]
```

### 1.2 Critical First-Read Section

This section tells the next Claude what to do IMMEDIATELY upon starting. Include:

- What files to read first
- Source-of-truth hierarchy (what overrides what)
- Non-negotiable rules (voice, terminology, constraints)
- Where to find outstanding work

```markdown
## CRITICAL: READ THIS FIRST

When starting a new chat session for this project:

1. [First instruction]
2. [Second instruction]
3. [etc.]
```

### 1.3 Project Vision & Scope

Capture the big picture so Claude understands not just WHAT to do but WHY:

- What are we building and for whom?
- What is the desired outcome/end state?
- What is the design philosophy or guiding principle?
- Who are the target audiences?
- What makes this project unique or specific?

### 1.4 Project Structure

Visual or text representation of how the project is organized:

- Components/sections and their relationships
- Hierarchy of elements
- What belongs where
- What is connected vs. separate

### 1.5 Source-of-Truth Hierarchy

Explicit ranking of what sources override others:

```markdown
## SOURCE-OF-TRUTH HIERARCHY

**Primary Authority (highest):**
- [Document/source name]

**Secondary Authority:**
- [Document/source name]

**Reference-only (do not treat as authoritative unless promoted):**
- [Document/source name]
```

### 1.6 Locked Decisions

Decisions that have been made and should NOT be revisited without explicit instruction:

- Include the decision AND the rationale where helpful
- Group by category (branding, structure, terminology, etc.)
- Be specificâ€”vague locked decisions cause confusion

### 1.7 Style/Voice Requirements

Complete documentation of how content should sound:

- Voice characteristics
- Tone guidelines
- Reading level requirements
- Terminology rules (use X, avoid Y)
- Formatting preferences
- Reference to style guide files

### 1.8 Detailed Specifications

Project-specific details that must be accurate:

- Contact information
- Pricing/numbers
- Dates/timelines
- Technical specifications
- Names, titles, credentials
- Any factual content that must be consistent

### 1.9 Content/Work Status

Clear tracking of what's done, what's in progress, and what's pending:

```markdown
## [CONTENT TYPE] STATUS

| Item | Status | File/Location | Notes |
|------|--------|---------------|-------|
| [Item 1] | âœ… APPROVED | [filename] | |
| [Item 2] | â³ DRAFT | [filename] | Pending review |
| [Item 3] | âŒ NOT STARTED | | Awaiting input from [person] |
```

### 1.10 Project Files Inventory

Complete list of all project files with their purpose:

- Approved/final files
- Draft files
- Style guides and reference documents
- Visual assets
- Sample documents
- Anything that exists in the project

### 1.11 Outstanding Items

Explicit list of what still needs to be done:

- Separate "immediate/before X" from "later/during Y"
- Mark completed items (don't delete themâ€”seeing progress helps)
- Include who/what is blocking items if applicable

### 1.12 Technical Decisions

For projects with technical components:

- Decisions already made
- Decisions still pending
- Options under consideration
- Constraints or requirements

### 1.13 Workflow Notes

How the human prefers to work:

- Working style preferences
- Communication preferences
- Checkpoint/save point preferences
- Any constraints (doesn't code, prefers small steps, etc.)

### 1.14 How to Use This Document

Instructions for the next session, including:

- Sample prompt to start the session
- Which files to upload
- How to keep the document current

### 1.15 Revision Log

Track what changed in each session:

```markdown
## REVISION LOG

| Date | Session | Changes Made |
|------|---------|--------------|
| [Date] | [#] | [Detailed description of changes] |
```

---

## PART 2: SESSION PROMPT STRUCTURE

The session prompt is what the human pastes into the new chat. It should be complete enough to orient Claude quickly but reference the handoff document for full details.

### 2.1 Prompt Template

```markdown
# SESSION [#] PROMPT â€” [Project Name]

Copy and paste everything below this line into your next chat:

---

I'm continuing the [Project Name] project. Please read [HANDOFF_DOCUMENT_NAME.md] â€” it contains all locked decisions, approved work, and current status.

Source-of-truth hierarchy (in priority order):
1. [Primary authority]
2. [Secondary authority]
3. [Reference materials]

**Current Status:**
- [Summary of what's complete]
- [Summary of what's in progress]
- [Summary of what's pending]

**Key reminders for this chat:**
- [Critical rule 1]
- [Critical rule 2]
- [Critical rule 3]
- [etc.]

**This session:** [State what you want to work on]

---

## FILES TO UPLOAD WITH THIS PROMPT

**Required:**
- [File 1]
- [File 2]

**Recommended (based on likely work):**
- [File 3] (if working on X)
- [File 4] (if working on Y)

---

## SUGGESTED NEXT STEPS (Pick one or more)

1. **[Task 1]** â€” [Brief description]
2. **[Task 2]** â€” [Brief description]
3. **[Task 3]** â€” [Brief description]

---

## QUICK REFERENCE

[Any frequently-needed details: contact info, pricing, key terms, etc.]
```

---

## PART 3: CREATION PROCESS

Follow this process when creating handoff documents and session prompts:

### Step 1: Review the Current Session

Before creating the handoff, review what happened in this session:

- What was accomplished?
- What decisions were made?
- What new information emerged?
- What files were created or modified?
- What is the current status of all work items?

### Step 2: Review the Previous Handoff Document

If one exists, read it completely to understand:

- What was already documented
- What needs to be updated
- What might be missing
- What could be clearer

### Step 3: Identify Gaps

Ask yourself:

- If I were a new Claude with no memory, what would I need to know?
- What assumptions am I making that should be explicit?
- What could go wrong if something isn't documented?
- What questions might arise that I should preemptively answer?

### Step 4: Write the Handoff Document

- Include ALL sections from Part 1 that are relevant
- Add new sections if the project requires them
- Update every section that has changed
- Don't delete historical informationâ€”mark it as complete or superseded
- Be explicit rather than implicit
- Be thorough rather than efficient

### Step 5: Write the Session Prompt

- Summarize current status clearly
- Include all critical reminders
- List required and recommended files
- Suggest logical next steps
- Include quick reference for common details

### Step 6: Verify Completeness

Use the checklist in Part 4 before finalizing.

---

## PART 4: COMPLETENESS CHECKLIST

Before finalizing any handoff, verify:

### Project Context
- [ ] Project vision and purpose documented
- [ ] Target audience(s) identified
- [ ] Design philosophy or guiding principles stated
- [ ] Project structure clearly mapped

### Source of Truth
- [ ] Hierarchy explicitly defined
- [ ] All authoritative sources listed
- [ ] Reference-only materials identified

### Decisions
- [ ] All locked decisions documented
- [ ] Rationale included where helpful
- [ ] Terminology rules explicit
- [ ] Style/voice requirements complete

### Status Tracking
- [ ] Every work item has a clear status
- [ ] File locations specified for all completed work
- [ ] Blockers or dependencies noted
- [ ] Outstanding items list is current

### Files
- [ ] All project files inventoried
- [ ] File purposes described
- [ ] Version numbers clear (v1, v2, etc.)
- [ ] Files to upload for next session specified

### Specifications
- [ ] All factual details accurate and current
- [ ] Contact information complete
- [ ] Pricing/numbers verified
- [ ] Dates and timelines current

### Process
- [ ] Workflow preferences documented
- [ ] How to use the document explained
- [ ] Revision log updated
- [ ] Session prompt created

### Quality
- [ ] Nothing assumed that should be explicit
- [ ] No vague language where specificity is possible
- [ ] New Claude could fully understand the project
- [ ] Human can verify accuracy of all content

---

## PART 5: CONTINUOUS IMPROVEMENT PROTOCOL

**This is critical.** Each handoff is an opportunity to improve the process itself.

### 5.1 During Each Session

As you work, note:

- What information was missing from the handoff that you needed?
- What was unclear or ambiguous?
- What questions arose that should have been pre-answered?
- What new categories of information emerged?
- What worked well that should be preserved?

### 5.2 At Handoff Creation Time

Before finalizing the handoff document:

1. **Review friction points:** What caused confusion or required clarification during this session? Add that information to the handoff.

2. **Identify new patterns:** Did this session reveal a new type of information that should be tracked? Add a section for it.

3. **Expand where needed:** If any section feels thin relative to its importance, expand it. More detail is better than less.

4. **Add examples:** Where a rule or guideline might be misunderstood, add concrete examples.

5. **Cross-reference:** If related information lives in multiple places, add cross-references so nothing is missed.

### 5.3 Questions to Ask

At the end of each session, ask:

- "What do I wish had been in the handoff document that wasn't?"
- "What will the next Claude need to know that isn't obvious?"
- "What mistake could be made if something isn't explicitly stated?"
- "What new decision or information from this session needs to be preserved?"

### 5.4 Improving This Template

This instruction template itself should evolve. When you discover something that should be standard in all handoffs:

1. Note it in the handoff document for the current project
2. Consider whether it should be added to THIS template
3. If yes, update this template with the improvement
4. Add a note to the Template Revision Log (below)

### 5.5 Template Revision Log

| Date | Change Made | Reason |
|------|-------------|--------|
| 2026-01-25 | Initial template created | Established baseline for TVA website project |
| | | |

---

## PART 6: ANTI-PATTERNS TO AVOID

Do NOT do these things:

### 6.1 Summarizing Instead of Documenting

âŒ "We discussed pricing and made some decisions."
âœ… "Pricing structure locked: Monthly Plan $320/month (recommended), Single Session $100, Flagship Series $400/4 sessions..."

### 6.2 Assuming Context

âŒ "Use the same style as before."
âœ… "Use Forward Light style: positive framing, no contrast framing, 8th grade reading level, I/me pronouns. See Style_guide_for_website.txt."

### 6.3 Vague Status

âŒ "Most pages are done."
âœ… "9 pages approved, 1 drafted pending approval, 2 not started. See Page Content Status table."

### 6.4 Missing the Why

âŒ "Don't use 'we/us.'"
âœ… "Don't use 'we/us' â€” Ted IS the business (sole proprietor), not a company with employees."

### 6.5 Efficiency Over Completeness

âŒ Trimming sections to make the document shorter
âœ… Including everything, even if the document is long

### 6.6 Forgetting to Update

âŒ Copying the previous handoff and only changing the date
âœ… Reviewing every section and updating what changed

---

## PART 7: QUICK-START FOR NEW PROJECTS

When starting a fresh project that will span multiple sessions:

1. **Create the handoff document early** â€” Don't wait until you "need" it. Start documenting from session 1.

2. **Establish source-of-truth immediately** â€” What files/sources are authoritative?

3. **Document decisions as they happen** â€” Don't rely on memory to capture them later.

4. **Create a status tracking system** â€” Know what's done, in progress, and pending.

5. **Define style/voice early** â€” Consistency requires early documentation.

6. **Inventory files as you create them** â€” Don't let the list grow without tracking.

7. **Ask about working preferences** â€” How does the human like to work? Document it.

---

**END OF TEMPLATE**

---

## USAGE NOTE

When requesting a handoff in future chats, you can say:

> "Please create the handoff document and session prompt following my HANDOFF_CREATION_TEMPLATE.md. Remember: completeness over efficiency, and look for opportunities to improve on what we've learned in this session."

Or simply:

> "Time for handoff. Use my handoff template. What improvements should we make based on this session?"
