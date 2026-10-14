import { promises as dns } from "node:dns";
import disposableDomains from "disposable-email-domains";

const DISPOSABLE = new Set(disposableDomains);

// Free webmail providers. Blocked only when BLOCK_FREE_EMAIL_DOMAINS=true,
// since whether a Gmail lead is worth a reply is a business decision.
const FREE_WEBMAIL = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "yahoo.co.in", "ymail.com",
  "hotmail.com", "hotmail.co.uk", "outlook.com", "live.com", "msn.com", "aol.com",
  "icloud.com", "me.com", "mac.com", "protonmail.com", "proton.me", "pm.me",
  "zoho.com", "yandex.com", "yandex.ru", "mail.com", "gmx.com", "gmx.de", "mail.ru",
  "rediffmail.com", "qq.com", "163.com", "126.com",
]);

const SYNTAX = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

const mxCache = new Map(); // domain -> { ok, expires }
const MX_TTL_MS = 10 * 60 * 1000;

async function domainAcceptsMail(domain) {
  const cached = mxCache.get(domain);
  if (cached && cached.expires > Date.now()) return cached.ok;
  let ok = false;
  try {
    const mx = await dns.resolveMx(domain);
    ok = Array.isArray(mx) && mx.length > 0;
  } catch {
    ok = false;
  }
  if (!ok) {
    // RFC 5321 fallback: a domain with no MX but an A/AAAA record can still receive mail.
    try {
      const a = await dns.resolve4(domain);
      ok = a.length > 0;
    } catch {
      try {
        const aaaa = await dns.resolve6(domain);
        ok = aaaa.length > 0;
      } catch {
        ok = false;
      }
    }
  }
  mxCache.set(domain, { ok, expires: Date.now() + MX_TTL_MS });
  return ok;
}

/**
 * Validates a submitted email address.
 * Returns { ok: true, email, domain } or { ok: false, reason, message }.
 * `message` is safe to show to the user.
 */
export async function validateEmail(raw) {
  const email = String(raw ?? "").trim().toLowerCase();
  if (!email || email.length > 254 || !SYNTAX.test(email)) {
    return { ok: false, reason: "syntax", message: "Please enter a valid email address." };
  }
  const domain = email.split("@")[1];

  if (DISPOSABLE.has(domain)) {
    return {
      ok: false,
      reason: "disposable",
      message: "Temporary or disposable email addresses are not accepted. Please use your business email.",
    };
  }

  if (process.env.BLOCK_FREE_EMAIL_DOMAINS === "true" && FREE_WEBMAIL.has(domain)) {
    return {
      ok: false,
      reason: "free-webmail",
      message: "Please use your business email address so our team can verify your company.",
    };
  }

  if (!(await domainAcceptsMail(domain))) {
    return {
      ok: false,
      reason: "no-mx",
      message: "That email domain cannot receive mail. Please check the address and try again.",
    };
  }

  return { ok: true, email, domain };
}
