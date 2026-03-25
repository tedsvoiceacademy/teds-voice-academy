// netlify/functions/submit-contact.js
// TVA Contact Form → Notion CRM
// Deploys to: https://tedsvoiceacademy.com/.netlify/functions/submit-contact
//
// Required env variable in Netlify dashboard:
//   NOTION_API_KEY  — your Notion integration token
//   NOTION_DATABASE_ID — your TVA Contacts database ID (see below)
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

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Parse the form body (supports both JSON and URL-encoded)
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

  // Destructure expected fields from contact.astro form
  const {
    name = "",
    email = "",
    phone = "",
    interest = "",
    experience = "",
    source = "",
    goals = "",       // "What are you hoping to work on?" textarea
    format = "",      // "Preferred lesson format" (goes into Notes)
    additional = "",  // "Additional notes" textarea
  } = formData;

  // Split name into first/last
  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0] || name.trim();
  const lastName = nameParts.slice(1).join(" ");

  // Build Notes field from all free-text inputs
  const notesParts = [];
  if (goals) notesParts.push(`Goals: ${goals}`);
  if (format) notesParts.push(`Preferred format: ${format}`);
  if (additional) notesParts.push(`Additional notes: ${additional}`);
  const notes = notesParts.join("\n\n");

  // Map form values → Notion option labels
  const notionInterest = INTEREST_MAP[interest] || "General Inquiry";
  const notionSource = SOURCE_MAP[source] || "Other";
  const notionExperience = EXPERIENCE_MAP[experience] || undefined;

  // Build Notion API payload
  const notionPayload = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      "First Name": {
        title: [{ text: { content: firstName } }],
      },
      "Last Name": {
        rich_text: [{ text: { content: lastName } }],
      },
      Email: { email: email || null },
      Phone: { phone_number: phone || null },
      Status: { select: { name: "New" } },
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

  // POST to Notion API
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
      // Temporarily exposing error for debugging — revert after testing
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, notionError: true, debug: error }),
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
