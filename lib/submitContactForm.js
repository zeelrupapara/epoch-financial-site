const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/tatenhan@epochfinancial.com";

export async function submitContactForm(payload, { subject, replyTo } = {}) {
  const body = {
    ...payload,
    _subject: subject || "New contact submission — EPOCH Financial",
    _template: "table",
    _captcha: "false",
    ...(replyTo ? { _replyto: replyTo } : {}),
  };

  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success === "false") {
    throw new Error(data.message || "Submission failed");
  }
  return data;
}
