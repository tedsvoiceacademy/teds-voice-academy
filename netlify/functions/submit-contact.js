// netlify/functions/submit-contact.js
// TVA Forms → Notion CRM
// Deploys to: https://tedsvoiceacademy.com/.netlify/functions/submit-contact
//
// Handles ALL form submissions: contact, workshop, newsletter, lead magnets
// Each form sends a "channel" field to identify the source.
//
// Required env variables in Netlify dashboard:
//   NOTION_API_KEY     — your Notion integration token
//   NOTION_DATABASE_ID — your TVA Contacts database ID
//
// TVA Contacts Database ID: 86748c8782c24266a8c53b9b2cc07ff1

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || "86748c8782c24266a8c53b9b2cc07ff1";
const NOTION_API_KEY = process.env.NOTION_API_KEY;

// Maps form values to Notion select option labels
const INTEREST_MAP = {
  singing: "Singing Coaching",
  speaking: "Speaking Coaching",
  ensemble: "Ensemble Coaching",
  workshops: "Workshops",
  avf: "AVF Book",
  pass: "PASS Profile",
  general: "General Inquiry",
};

const SOURCE_MAP = {
  "web-search": "Web Search",
  "social-media": "Social Media",
  referral: "Referral (add details in Notes)",
  amazon: "Amazon / AVF Book",
  networking: "Networking Event (add event name in Notes)",
  workshop: "Workshop",
  direct: "Direct Contact (email/phone/messenger)",
  other: "Other",
};

const EXPERIENCE_MAP = {
  beginner: "Beginner",
  some: "Some Experience",
  experienced: "Experienced",
  professional: "Professional",
};

// Build Notion payload based on which form submitted
function buildPayload(formData) {
  const channel = formData.channel || "Website Contact Form";

  switch (channel) {
    case "Workshop Inquiry":
      return buildWorkshopPayload(formData);
    case "Newsletter Signup":
      return buildNewsletterPayload(formData);
    case "Lead Magnet Download":
      return buildLeadMagnetPayload(formData);
    default:
      return buildContactPayload(formData);
  }
}

// --- Contact Form (existing) ---
function buildContactPayload(formData) {
  const {
    name = "",
    email = "",
    phone = "",
    interest = "",
    experience = "",
    source = "",
    goals = "",
    format = "",
    additional = "",
  } = formData;

  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0] || name.trim();
  const lastName = nameParts.slice(1).join(" ");

  const notesParts = [];
  if (goals) notesParts.push(`Goals: ${goals}`);
  if (format) notesParts.push(`Preferred format: ${format}`);
  if (additional) notesParts.push(`Additional notes: ${additional}`);
  const notes = notesParts.join("\n\n");

  const notionInterest = INTEREST_MAP[interest] || "General Inquiry";
  const notionSource = SOURCE_MAP[source] || "Other";
  const notionExperience = EXPERIENCE_MAP[experience] || undefined;

  return {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      "First Name": { title: [{ text: { content: firstName } }] },
      "Last Name": { rich_text: [{ text: { content: lastName } }] },
      Email: { email: email || null },
      Phone: { phone_number: phone || null },
      Status: { select: { name: "New" } },
      "Contact Channel": { select: { name: "Website Contact Form" } },
      "Interested In": { select: { name: notionInterest } },
      "How They Found Me": { select: { name: notionSource } },
      ...(notionExperience && {
        "Experience Level": { select: { name: notionExperience } },
      }),
      ...(notes && {
        Notes: { rich_text: [{ text: { content: notes } }] },
      }),
      "Next Action": {
        rich_text: [{ text: { content: "Reply to website inquiry" } }],
      },
    },
  };
}

// --- Workshop Inquiry Form ---
function buildWorkshopPayload(formData) {
  const {
    "contact-name": contactName = "",
    organization = "",
    email = "",
    phone = "",
    "workshop-interest[]": workshopInterest = "",
    "group-size": groupSize = "",
    timeframe = "",
    details = "",
  } = formData;

  const nameParts = contactName.trim().split(/\s+/);
  const firstName = nameParts[0] || contactName.trim();
  const lastName = nameParts.slice(1).join(" ");

  const notesParts = [];
  if (organization) notesParts.push(`Organization: ${organization}`);
  if (workshopInterest) notesParts.push(`Workshop interest: ${workshopInterest}`);
  if (groupSize) notesParts.push(`Group size: ${groupSize}`);
  if (timeframe) notesParts.push(`Timeframe: ${timeframe}`);
  if (details) notesParts.push(`Details: ${details}`);
  const notes = notesParts.join("\n\n");

  return {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      "First Name": { title: [{ text: { content: firstName } }] },
      "Last Name": { rich_text: [{ text: { content: lastName } }] },
      Email: { email: email || null },
      Phone: { phone_number: phone || null },
      Status: { select: { name: "New" } },
      "Contact Channel": { select: { name: "Workshop Inquiry" } },
      "Interested In": { select: { name: "Workshops" } },
      "How They Found Me": { select: { name: "Web Search" } },
      ...(notes && {
        Notes: { rich_text: [{ text: { content: notes } }] },
      }),
      "Next Action": {
        rich_text: [{ text: { content: "Reply to workshop inquiry" } }],
      },
    },
  };
}

// --- Newsletter Signup (blog + footer) ---
function buildNewsletterPayload(formData) {
  const {
    "first-name": firstName = "",
    email = "",
    source: formSource = "",
  } = formData;

  const noteSource = formSource === "footer" ? "Footer newsletter signup" : "Blog newsletter signup";

  return {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      "First Name": { title: [{ text: { content: firstName || "(subscriber)" } }] },
      Email: { email: email || null },
      Status: { select: { name: "New" } },
      "Contact Channel": { select: { name: "Newsletter Signup" } },
      "Interested In": { select: { name: "General Inquiry" } },
      "How They Found Me": { select: { name: "Web Search" } },
      Notes: { rich_text: [{ text: { content: noteSource } }] },
      "Next Action": {
        rich_text: [{ text: { content: "Added via newsletter signup" } }],
      },
    },
  };
}

// --- Lead Magnet Download (audition checklist, etc.) ---
function buildLeadMagnetPayload(formData) {
  const {
    "first-name": firstName = "",
    email = "",
    magnet = "",
  } = formData;

  const magnetName = magnet || "Audition Readiness Checklist";

  return {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      "First Name": { title: [{ text: { content: firstName || "(subscriber)" } }] },
      Email: { email: email || null },
      Status: { select: { name: "New" } },
      "Contact Channel": { select: { name: "Lead Magnet Download" } },
      "Interested In": { select: { name: "Singing Coaching" } },
      "How They Found Me": { select: { name: "Web Search" } },
      Notes: { rich_text: [{ text: { content: `Downloaded: ${magnetName}` } }] },
      "Next Action": {
        rich_text: [{ text: { content: "Follow up — downloaded lead magnet" } }],
      },
    },
  };
}

// --- Main handler ---
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let formData;
  try {
    if (event.headers["content-type"]?.includes("application/json")) {
      formData = JSON.parse(event.body);
    } else {
      formData = Object.fromEntries(new URLSearchParams(event.body));
    }
  } catch {
    return { statusCode: 400, body: "Invalid form data" };
  }

  const notionPayload = buildPayload(formData);

  try {
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify(notionPayload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Notion API error:", error);
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, notionError: true }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, notionError: true }),
    };
  }
};
