#!/usr/bin/env node
// Zero-change proof tool for the seo.yaml refactor.
//
//   node scripts/diff-snapshot.mjs snapshot http://localhost:3210 /tmp/seo-before
//   node scripts/diff-snapshot.mjs compare /tmp/seo-before /tmp/seo-after
//
// compare asserts, per route:
//   - <body> byte-identical after stripping <script> tags and normalizing /_next/ build hashes
//   - head SEO tags (title, description, keywords, canonical, og:*) value-identical
import { mkdirSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export const ROUTES = [
  "/",
  "/about",
  "/about/our-approach",
  "/articles",
  "/blog",
  "/commercial-real-estate",
  "/contact",
  "/financial-services",
  "/financial-services/accounts-receivable-financing",
  "/financial-services/asset-based-lending",
  "/financial-services/bridge-financing",
  "/industries",
  "/industries/business-services",
  "/industries/commercial-construction-financing",
  "/industries/cpg-financing",
  "/industries/distribution-logistics-financing",
  "/industries/education-services",
  "/industries/energy-infrastructure-financing",
  "/industries/financial-services",
  "/industries/government-contract-financing",
  "/industries/healthcare-financing",
  "/industries/manufacturing-financing",
  "/industries/media-telecommunications-financing",
  "/industries/oil-gas-financing",
  "/industries/technology-financing",
  "/industries/transportation-freight-financing",
  "/middle-market-private-credit-georgia",
  "/privacy-policy",
];

const slug = (route) => (route === "/" ? "home" : route.replace(/^\//, "").replaceAll("/", "__"));

function extractHeadSeo(html) {
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const out = {};
  out.title = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
  const metas = [...head.matchAll(/<meta\s+([^>]+?)\/?>(?!<\/meta>)/gi)];
  for (const [, attrs] of metas) {
    const name = attrs.match(/(?:name|property)="([^"]+)"/i)?.[1];
    const content = attrs.match(/content="([^"]*)"/i)?.[1];
    if (!name) continue;
    if (/^(description|keywords|og:|twitter:)/i.test(name)) out[name.toLowerCase()] = content ?? "";
  }
  out.canonical = head.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? "";
  return out;
}

function normalizedBody(html) {
  let body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  body = body.replace(/<script\b[\s\S]*?<\/script>/gi, ""); // runtime chunks & JSON-LD excluded from visual diff
  body = body.replace(/\/_next\/[^"' )]+/g, "/_next/X");    // build-hash noise
  return body.trim();
}

async function snapshot(baseUrl, outDir) {
  mkdirSync(outDir, { recursive: true });
  for (const route of ROUTES) {
    const res = await fetch(baseUrl + route, { redirect: "follow" });
    if (!res.ok) throw new Error(`${route} -> HTTP ${res.status}`);
    writeFileSync(join(outDir, slug(route) + ".html"), await res.text());
    process.stdout.write(".");
  }
  console.log(`\nsnapshot: ${ROUTES.length} routes -> ${outDir}`);
}

function compare(beforeDir, afterDir) {
  let failures = 0;
  for (const route of ROUTES) {
    const f = slug(route) + ".html";
    const before = readFileSync(join(beforeDir, f), "utf8");
    const after = readFileSync(join(afterDir, f), "utf8");

    const bodyB = normalizedBody(before);
    const bodyA = normalizedBody(after);
    if (bodyB !== bodyA) {
      failures++;
      console.error(`BODY DIFF  ${route}  (${bodyB.length} vs ${bodyA.length} bytes)`);
    }

    const headB = extractHeadSeo(before);
    const headA = extractHeadSeo(after);
    for (const key of new Set([...Object.keys(headB), ...Object.keys(headA)])) {
      if ((headB[key] ?? "") !== (headA[key] ?? "")) {
        failures++;
        console.error(`HEAD DIFF  ${route}  ${key}:\n  before: ${headB[key]}\n  after:  ${headA[key]}`);
      }
    }
  }
  if (failures) {
    console.error(`\nFAILED: ${failures} differences across ${ROUTES.length} routes`);
    process.exit(1);
  }
  console.log(`PASS: ${ROUTES.length} routes — bodies identical, head SEO values identical`);
}

const [mode, a, b] = process.argv.slice(2);
if (mode === "snapshot") await snapshot(a, b);
else if (mode === "compare") compare(a, b);
else {
  console.error("usage: diff-snapshot.mjs snapshot <baseUrl> <outDir> | compare <beforeDir> <afterDir>");
  process.exit(1);
}
