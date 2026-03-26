// netlify/functions/sync-notion-to-kit.js
// One-way sync: Notion TVA Contacts → Kit (ConvertKit)
// Deploys to: https://tedsvoiceacademy.com/.netlify/functions/sync-notion-to-kit
//
// Reads all contacts from Notion where Contact Channel = "Newsletter Signup",
// checks each against Kit, and subscribes any that aren't already there.
// Idempotent — safe to run repeatedly. Kit deduplicates by email.
//
// Can be triggered:
//   1. Manual: visit the URL above (GET request)
//   2. Scheduled: Netlify scheduled function (see exports.config below)
//   3. CLI: curl https://tedsvoiceacademy.com/.netlify/functions/sync-notion-to-kit
//
// Required env variables in Netlify dashboard:
//   NOTION_API_KEY     — Notion integration token
//   NOTION_DATABASE_ID — TVA Contacts database ID (default below)
//   KIT_API_KEY        — Kit (ConvertKit) V3 API key
//   KIT_FORM_ID        — Kit form ID (default below)

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || "86748c8782c24266a8c53b9b2cc07ff1";
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_FORM_ID = process.env.KIT_FORM_ID || "9235936";

// Fetch all "Newsletter Signup" contacts from Notion (handles pagination)
async function getNotionSubscribers() {
  const subscribers = [];
  let cursor = undefined;
  let hasMore = true;

  while (hasMore) {
    const body = {
      filter: {
        property: "Contact Channel",
        select: { equals: "Newsletter Signup" },
      },
      page_size: 100,
    };
    if (cursor) body.start_cursor = cursor;

    const res = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Notion API error (${res.status}): ${err}`);
    }

    const data = await res.json();

    for (const page of data.results) {
      const props = page.properties;
      const email = props.Email?.email;
      if (!email) continue; // skip contacts without email

      const firstName =
        props["First Name"]?.title?.[0]?.plain_text || "";

      subscribers.push({ email, firstName });
    }

    hasMore = data.has_more;
    cursor = data.next_cursor;
  }

  return subscribers;
}

// Subscribe a single contact to Kit form. Kit deduplicates by email —
// if already subscribed, it just updates the record (no duplicate created).
async function subscribeToKit(email, firstName) {
  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: KIT_API_KEY,
        email,
        first_name: firstName,
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Kit API error for ${email} (${res.status}): ${err}`);
  }

  return res.json();
}

exports.handler = async (event) => {
  // Allow both GET (browser/cron) and POST
  if (event.httpMethod !== "GET" && event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Validate env vars
  if (!NOTION_API_KEY) {
    return { statusCode: 500, body: "Missing NOTION_API_KEY env variable" };
  }
  if (!KIT_API_KEY) {
    return { statusCode: 500, body: "Missing KIT_API_KEY env variable" };
  }

  try {
    // Step 1: Get all newsletter subscribers from Notion
    const subscribers = await getNotionSubscribers();

    // Step 2: Subscribe each to Kit (Kit deduplicates, so this is safe)
    let synced = 0;
    let errors = 0;
    const errorDetails = [];

    for (const sub of subscribers) {
      try {
        await subscribeToKit(sub.email, sub.firstName);
        synced++;
      } catch (err) {
        errors++;
        errorDetails.push(`${sub.email}: ${err.message}`);
      }
    }

    const result = {
      success: true,
      timestamp: new Date().toISOString(),
      notionContacts: subscribers.length,
      synced,
      errors,
      ...(errorDetails.length > 0 && { errorDetails }),
    };

    console.log("Sync complete:", JSON.stringify(result));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result, null, 2),
    };
  } catch (err) {
    console.error("Sync failed:", err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};

// Netlify Scheduled Function — runs daily at 6 AM Pacific (1 PM UTC)
// Free tier supports scheduled functions. Remove this to disable auto-sync.
exports.config = {
  schedule: "0 13 * * *",
};
