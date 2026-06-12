#!/usr/bin/env node
// One-time codemod: replaces each page's hardcoded `export const metadata = {...};`
// with `export const metadata = seoMetadata("<route>");` and adds the import.
// Verbatim values now come from seo.yaml via lib/seo.js.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const IMPORT_LINE = 'import { seoMetadata } from "@/lib/seo";';

const PAGES = {
  "/": "app/page.jsx",
  "/about": "app/about/page.jsx",
  "/about/our-approach": "app/about/our-approach/page.jsx",
  "/articles": "app/articles/page.jsx",
  "/blog": "app/blog/page.jsx",
  "/commercial-real-estate": "app/commercial-real-estate/page.jsx",
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

function replaceMetadataBlock(source, route, file) {
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
        let end = i + 1;
        if (source[end] === ";") end++;
        return source.slice(0, idx) + `export const metadata = seoMetadata("${route}");` + source.slice(end);
      }
    }
  }
  throw new Error(`unbalanced metadata object in ${file}`);
}

let changed = 0;
for (const [route, file] of Object.entries(PAGES)) {
  const path = join(ROOT, file);
  let source = readFileSync(path, "utf8");
  if (source.includes('seoMetadata("')) {
    console.log(`SKIP (already wired) ${file}`);
    continue;
  }
  source = replaceMetadataBlock(source, route, file);
  if (!source.includes(IMPORT_LINE)) {
    // insert after the last top-of-file import
    const importMatches = [...source.matchAll(/^import .*$/gm)];
    const last = importMatches[importMatches.length - 1];
    const insertAt = last.index + last[0].length;
    source = source.slice(0, insertAt) + "\n" + IMPORT_LINE + source.slice(insertAt);
  }
  writeFileSync(path, source);
  changed++;
  console.log(`WIRED ${file} -> seoMetadata("${route}")`);
}
console.log(`\n${changed} pages wired`);
