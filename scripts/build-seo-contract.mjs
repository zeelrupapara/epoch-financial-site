#!/usr/bin/env node
// One-time seeder: extracts the hardcoded `export const metadata = {...}` from every
// static page.jsx VERBATIM and writes seo.yaml. Does not modify any page.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";

const ROOT = process.cwd();

// route -> page file (blog/articles [slug] pages stay data.js-driven, not in the contract)
const PAGES = {
  "/": "app/page.jsx",
  "/about": "app/about/page.jsx",
  "/about/our-approach": "app/about/our-approach/page.jsx",
  "/articles": "app/articles/page.jsx",
  "/blog": "app/blog/page.jsx",
  "/commercial-real-estate": "app/commercial-real-estate/page.jsx",
  // "/contact" is a "use client" page — cannot export metadata; inherits layout defaults. Excluded from the contract.
  "/financial-services": "app/financial-services/page.jsx",
  "/financial-services/accounts-receivable-financing": "app/financial-services/accounts-receivable-financing/page.jsx",
  "/financial-services/asset-based-lending": "app/financial-services/asset-based-lending/page.jsx",
  "/financial-services/bridge-financing": "app/financial-services/bridge-financing/page.jsx",
  "/industries": "app/industries/page.jsx",
  "/industries/business-services": "app/industries/business-services/page.jsx",
  "/industries/commercial-construction-financing": "app/industries/commercial-construction-financing/page.jsx",
  "/industries/cpg-financing": "app/industries/cpg-financing/page.jsx",
  "/industries/distribution-logistics-financing": "app/industries/distribution-logistics-financing/page.jsx",
  "/industries/education-services": "app/industries/education-services/page.jsx",
  "/industries/energy-infrastructure-financing": "app/industries/energy-infrastructure-financing/page.jsx",
  "/industries/financial-services": "app/industries/financial-services/page.jsx",
  "/industries/government-contract-financing": "app/industries/government-contract-financing/page.jsx",
  "/industries/healthcare-financing": "app/industries/healthcare-financing/page.jsx",
  "/industries/manufacturing-financing": "app/industries/manufacturing-financing/page.jsx",
  "/industries/media-telecommunications-financing": "app/industries/media-telecommunications-financing/page.jsx",
  "/industries/oil-gas-financing": "app/industries/oil-gas-financing/page.jsx",
  "/industries/technology-financing": "app/industries/technology-financing/page.jsx",
  "/industries/transportation-freight-financing": "app/industries/transportation-freight-financing/page.jsx",
  "/middle-market-private-credit-georgia": "app/middle-market-private-credit-georgia/page.jsx",
  "/privacy-policy": "app/privacy-policy/page.jsx",
};

export function extractMetadataObject(source, file) {
  const marker = "export const metadata =";
  const idx = source.indexOf(marker);
  if (idx === -1) throw new Error(`no metadata export in ${file}`);
  const start = source.indexOf("{", idx);
  let depth = 0;
  for (let i = start; i < source.length; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") {
      depth--;
      if (depth === 0) {
        const objText = source.slice(start, i + 1);
        // metadata objects are pure literals (strings/objects) — safe to evaluate
        return { obj: new Function(`return (${objText});`)(), startIdx: idx, endIdx: i + 1 };
      }
    }
  }
  throw new Error(`unbalanced metadata object in ${file}`);
}

const pages = {};
for (const [route, file] of Object.entries(PAGES)) {
  const source = readFileSync(join(ROOT, file), "utf8");
  const { obj } = extractMetadataObject(source, file);
  const entry = {};
  if (obj.title) entry.title = obj.title;
  if (obj.description) entry.description = obj.description;
  if (obj.keywords) entry.keywords = obj.keywords;
  if (obj.alternates?.canonical) entry.canonical = obj.alternates.canonical;
  if (obj.openGraph) entry.og = obj.openGraph;
  if (obj.twitter) entry.twitter = obj.twitter;
  pages[route] = entry;
  console.log(`${route}  title:${(obj.title || "").length}ch  desc:${(obj.description || "").length}ch`);
}

const contract = {
  version: 1,
  // No `content:` key exists in v1 — the schema cannot express visible changes.
  pages,
};

writeFileSync(join(ROOT, "seo.yaml"), yaml.dump(contract, { lineWidth: 1000, quotingType: '"' }));
console.log(`\nseo.yaml written with ${Object.keys(pages).length} pages`);
