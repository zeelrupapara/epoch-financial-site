import { Resend } from "resend";
import { Webhook } from "svix";

export const runtime = "nodejs";

// Resend delivery webhook.
// Setup: Resend dashboard → Webhooks → Add endpoint
//   URL:    https://www.epochfinancial.com/api/resend-webhook
//   Events: email.bounced, email.complained
// Then set RESEND_WEBHOOK_SECRET (the "whsec_…" signing secret) on Vercel.
//
// When the auto-reply we send to a lead bounces, the lead's address does not
// exist, so we tell the sales inbox the lead is invalid.

const CONTACT_TO = process.env.CONTACT_TO_EMAIL || "tatenhan@epochfinancial.com";
const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL || "EPOCH Financial <noreply@epochfinancial.com>";

function esc(v) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request) {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret) {
    return Response.json({ error: "Webhook not configured" }, { status: 503 });
  }

  const rawBody = await request.text();
  const headers = {
    "svix-id": request.headers.get("svix-id") ?? "",
    "svix-timestamp": request.headers.get("svix-timestamp") ?? "",
    "svix-signature": request.headers.get("svix-signature") ?? "",
  };

  let event;
  try {
    event = new Webhook(secret).verify(rawBody, headers);
  } catch {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  const type = event?.type;
  if (type !== "email.bounced" && type !== "email.complained") {
    return Response.json({ ok: true, ignored: type });
  }

  const data = event.data || {};
  const recipients = Array.isArray(data.to) ? data.to : [data.to].filter(Boolean);
  const subject = data.subject || "";

  // Only act on the auto-replies we send to leads, never on our own
  // notification emails to the sales inbox.
  const isLeadAutoReply =
    subject.startsWith("Thank you for contacting EPOCH Financial") &&
    !recipients.map((r) => String(r).toLowerCase()).includes(CONTACT_TO.toLowerCase());
  if (!isLeadAutoReply) {
    return Response.json({ ok: true, ignored: "not-lead-autoreply" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: "Email service not configured" }, { status: 500 });

  const reason =
    type === "email.complained"
      ? "marked our reply as spam"
      : `bounced (${data.bounce?.type || "unknown"}${data.bounce?.subType ? ` / ${data.bounce.subType}` : ""})`;

  const html = `<!doctype html><html><body style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#111827;background:#f3f4f6;padding:24px">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:8px;padding:24px;border:1px solid #e5e7eb">
      <h2 style="margin:0 0 8px;color:#b91c1c">Lead email address is invalid</h2>
      <p style="margin:0 0 12px">The automatic reply to <strong>${esc(recipients.join(", "))}</strong> ${esc(reason)}.</p>
      <p style="margin:0 0 12px">This lead's email address most likely does not exist. Treat the earlier notification for this address as spam or a typo.</p>
      ${data.bounce?.message ? `<p style="margin:0;color:#6b7280;font-size:13px">Mail server said: ${esc(data.bounce.message)}</p>` : ""}
      <p style="margin:24px 0 0;color:#6b7280;font-size:12px">Sent from epochfinancial.com</p>
    </div></body></html>`;

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    subject: `Invalid lead email: ${recipients.join(", ")}`,
    html,
  });
  if (result?.error) {
    return Response.json({ error: result.error.message }, { status: 502 });
  }
  return Response.json({ ok: true });
}
