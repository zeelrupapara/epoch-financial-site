import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

// seo.yaml is the single SEO contract for this site. It is the ONLY file the
// SEO autopilot ever edits. Head-only scope: title/description/keywords/og/schema.
// Parsed once per server process; pages are statically prerendered so this runs at build.
let contract;
function loadContract() {
  if (!contract) {
    const file = path.join(process.cwd(), "seo.yaml");
    contract = yaml.load(fs.readFileSync(file, "utf8"));
  }
  return contract;
}

// Returns a Next.js `metadata` object for the route, in the exact shape the
// pages previously hardcoded. Throws on unknown routes so a typo cannot
// silently ship a page with no meta.
export function seoMetadata(route) {
  const entry = loadContract().pages?.[route];
  if (!entry) throw new Error(`seo.yaml has no entry for route "${route}"`);
  const meta = {};
  if (entry.canonical) meta.alternates = { canonical: entry.canonical };
  if (entry.title) meta.title = entry.title;
  if (entry.description) meta.description = entry.description;
  if (entry.keywords) meta.keywords = entry.keywords;
  if (entry.og) meta.openGraph = entry.og;
  if (entry.twitter) meta.twitter = entry.twitter;
  return meta;
}

// Per-page JSON-LD blocks (FAQPage / BreadcrumbList / Service). Empty until the
// optimizer adds them; consumed by <JsonLd route>.
export function seoSchema(route) {
  return loadContract().pages?.[route]?.schema ?? null;
}
