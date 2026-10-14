export async function submitContactForm(payload, { subject, replyTo, captchaToken } = {}) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ payload, subject, replyTo: replyTo || payload?.email, captchaToken }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || "Submission failed");
  }
  return data;
}
