// Lightweight anti-spam checks for the contact API.
// None of these need external services, so they cost nothing and add no
// friction for real visitors.

// ---- Rate limiting -------------------------------------------------------
// In-memory sliding window per IP. Vercel keeps a function instance warm for
// a while, so this throttles bursts from one address effectively, though a
// cold start resets it. Good enough as a baseline; swap the store for
// Upstash/KV if a distributed limit is ever needed.
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = Number(process.env.CONTACT_RATE_LIMIT || 3);
const hits = new Map(); // ip -> [timestamps]

export function rateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= MAX_PER_WINDOW) {
    hits.set(ip, list);
    return true;
  }
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) {
    // keep memory bounded
    for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  }
  return false;
}

// ---- Honeypot + timing ---------------------------------------------------
// Forms send `_hp` (a hidden field humans never see) and `_t` (ms timestamp
// when the form was rendered). Bots fill the honeypot or submit instantly.
const MIN_FILL_MS = 3000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

export function looksAutomated({ honeypot, startedAt }) {
  if (honeypot && String(honeypot).trim() !== "") return "honeypot";
  const t = Number(startedAt);
  if (!Number.isFinite(t) || t <= 0) return "no-timestamp";
  const age = Date.now() - t;
  if (age < MIN_FILL_MS) return "too-fast";
  if (age > MAX_FORM_AGE_MS) return "stale";
  return null;
}

// ---- Content heuristics --------------------------------------------------
// Rejects the obvious: link-stuffed messages, SEO/crypto pitches, and text
// that is mostly non-Latin script on an English-only B2B site.
const SPAM_PHRASES = [
  /\bseo services?\b/i,
  /\bbacklinks?\b/i,
  /\bguest post/i,
  /\bweb ?design services?\b/i,
  /\bcrypto(currency)?\b.*\b(invest|profit|wallet)\b/i,
  /\bbitcoin\b.*\b(invest|profit|wallet)\b/i,
  /\bviagra\b|\bcialis\b|\bcasino\b|\bporn\b/i,
  /\bincrease (your )?(traffic|ranking|sales) (by|with)\b/i,
  /\bwe (can|will) (rank|boost) your (site|website)\b/i,
  /\bbuy (followers|likes|views)\b/i,
];

export function contentLooksSpammy(payload) {
  const text = Object.values(payload || {})
    .filter((v) => typeof v === "string")
    .join("\n");
  if (!text) return null;

  const links = (text.match(/https?:\/\/|www\./gi) || []).length;
  if (links >= 3) return "too-many-links";

  for (const re of SPAM_PHRASES) if (re.test(text)) return "spam-phrase";

  const letters = text.replace(/[^\p{L}]/gu, "");
  if (letters.length >= 20) {
    const cyrillic = (letters.match(/[Ѐ-ӿ]/g) || []).length;
    const cjk = (letters.match(/[぀-ヿ一-鿿가-힯]/g) || []).length;
    if ((cyrillic + cjk) / letters.length > 0.5) return "non-latin";
  }
  return null;
}
