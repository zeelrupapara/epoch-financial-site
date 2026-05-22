import { Resend } from "resend";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL || "tatenhan@epochfinancial.com";
const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL || "EPOCH Financial <noreply@epochfinancial.com>";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderRows(payload) {
  return Object.entries(payload)
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;text-transform:capitalize">${escapeHtml(
          k
        )}</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");
}

function notificationHtml({ subject, payload }) {
  return `<!doctype html><html><body style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#111827;background:#f3f4f6;padding:24px">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:8px;padding:24px;border:1px solid #e5e7eb">
      <h2 style="margin:0 0 8px;color:#11375f">${escapeHtml(subject)}</h2>
      <p style="margin:0 0 16px;color:#4b5563">A new submission was received from the EPOCH Financial website.</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${renderRows(payload)}</table>
      <p style="margin:24px 0 0;color:#6b7280;font-size:12px">Sent from epochfinancial.com</p>
    </div></body></html>`;
}

function autoReplyHtml({ name }) {
  const safeName = escapeHtml(name || "there");
  return `<!doctype html><html><body style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#111827;background:#f3f4f6;padding:24px">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:8px;padding:24px;border:1px solid #e5e7eb">
      <h2 style="margin:0 0 12px;color:#11375f">Thank you for contacting EPOCH Financial</h2>
      <p style="margin:0 0 12px">Hi ${safeName},</p>
      <p style="margin:0 0 12px">Thank you for reaching out. We've received your message and a member of our team will get back to you shortly.</p>
      <p style="margin:0 0 12px">In the meantime, feel free to explore our financing solutions at <a href="https://epochfinancial.com" style="color:#11375f">epochfinancial.com</a>.</p>
      <p style="margin:24px 0 0">Regards,<br/>EPOCH Financial Team</p>
    </div></body></html>`;
}

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { payload = {}, subject, replyTo } = body;

  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "Missing payload" }, { status: 400 });
  }
  if (!payload.email || !/^\S+@\S+\.\S+$/.test(String(payload.email))) {
    return Response.json({ error: "Valid email is required" }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const finalSubject = subject || "New contact submission — EPOCH Financial";

  try {
    await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      subject: finalSubject,
      html: notificationHtml({ subject: finalSubject, payload }),
      replyTo: replyTo || payload.email,
    });

    await resend.emails.send({
      from: CONTACT_FROM,
      to: [String(payload.email)],
      subject: "Thank you for contacting EPOCH Financial",
      html: autoReplyHtml({
        name: payload.name || payload.Name || payload.contactName || payload.fullName,
      }),
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { error: "Email delivery failed", detail: String(err?.message || err) },
      { status: 502 }
    );
  }
}
