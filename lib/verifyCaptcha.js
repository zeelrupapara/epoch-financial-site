// Server-side Cloudflare Turnstile verification.
// Falls back to Cloudflare's public "always passes" test secret when
// TURNSTILE_SECRET_KEY is not configured, so forms keep working in dev and
// previews. Production must set the real secret.
const TEST_SECRET = "1x0000000000000000000000000000000AA";

export async function verifyCaptcha(token, remoteIp) {
  if (!token || typeof token !== "string") {
    return { ok: false, reason: "missing-token" };
  }
  const secret = process.env.TURNSTILE_SECRET_KEY || TEST_SECRET;
  if (secret === TEST_SECRET && process.env.NODE_ENV === "production") {
    console.warn("[captcha] TURNSTILE_SECRET_KEY not set; using Cloudflare test secret (always passes).");
  }
  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });
    const data = await res.json();
    return { ok: Boolean(data.success), reason: (data["error-codes"] || []).join(",") };
  } catch (err) {
    return { ok: false, reason: "verify-request-failed" };
  }
}
