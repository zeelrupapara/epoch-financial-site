#!/usr/bin/env node
// Build gate for seo.yaml — runs in `prebuild`. If this fails, `next build` fails,
// and Vercel keeps the previous deploy live. This is what makes autopilot commits safe.
//
// HARD rules (build-breaking): valid YAML · whitelisted keys only · sane length caps ·
// every route must exist in app/ · FAQ shape valid.
// SOFT rules (warnings): SEO ideal bands (title 25–65, desc 70–165) · cross-page duplicates.
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";

const ROOT = process.cwd();
const PAGE_KEYS = new Set(["title", "description", "keywords", "canonical", "og", "twitter", "schema"]);
const SCHEMA_KEYS = new Set(["faq", "breadcrumb"]);
const errors = [];
const warnings = [];

let doc;
try {
  doc = yaml.load(readFileSync(join(ROOT, "seo.yaml"), "utf8"));
} catch (e) {
  console.error(`seo.yaml: invalid YAML — ${e.message}`);
  process.exit(1);
}

if (doc?.version !== 1) errors.push("version must be 1");
if (!doc?.pages || typeof doc.pages !== "object") errors.push("missing pages map");

const seenTitles = new Map();
const seenDescriptions = new Map();

for (const [route, entry] of Object.entries(doc?.pages ?? {})) {
  const where = `pages["${route}"]`;

  if (!route.startsWith("/")) errors.push(`${where}: route must start with /`);
  const appDir = route === "/" ? "app" : join("app", ...route.split("/").filter(Boolean));
  if (!existsSync(join(ROOT, appDir, "page.jsx")) && !existsSync(join(ROOT, appDir, "page.tsx"))) {
    errors.push(`${where}: no app route exists at ${appDir}/page.jsx`);
  }

  for (const key of Object.keys(entry ?? {})) {
    if (!PAGE_KEYS.has(key)) errors.push(`${where}: unknown key "${key}" (whitelist: ${[...PAGE_KEYS].join(", ")})`);
  }

  const title = entry?.title ?? "";
  const desc = entry?.description ?? "";
  if (title.length < 10 || title.length > 120) errors.push(`${where}: title length ${title.length} outside hard bounds 10–120`);
  else if (title.length < 25 || title.length > 65) warnings.push(`${where}: title ${title.length}ch outside SEO ideal 25–65`);
  if (desc.length < 40 || desc.length > 300) errors.push(`${where}: description length ${desc.length} outside hard bounds 40–300`);
  else if (desc.length < 70 || desc.length > 165) warnings.push(`${where}: description ${desc.length}ch outside SEO ideal 70–165`);
  if ((entry?.keywords ?? "").length > 1200) errors.push(`${where}: keywords longer than 1200 chars`);
  if (entry?.canonical && entry.canonical !== route) warnings.push(`${where}: canonical "${entry.canonical}" differs from route`);

  if (seenTitles.has(title)) warnings.push(`${where}: duplicate title with ${seenTitles.get(title)}`);
  else seenTitles.set(title, route);
  if (seenDescriptions.has(desc)) warnings.push(`${where}: duplicate description with ${seenDescriptions.get(desc)}`);
  else seenDescriptions.set(desc, route);

  if (entry?.schema) {
    for (const key of Object.keys(entry.schema)) {
      if (!SCHEMA_KEYS.has(key)) errors.push(`${where}: unknown schema key "${key}"`);
    }
    if (entry.schema.faq) {
      if (!Array.isArray(entry.schema.faq)) errors.push(`${where}: schema.faq must be a list`);
      else
        for (const [i, item] of entry.schema.faq.entries()) {
          if (!item?.q || !item?.a) errors.push(`${where}: schema.faq[${i}] needs q and a`);
          else if (item.a.length < 40 || item.a.length > 600) errors.push(`${where}: schema.faq[${i}].a length ${item.a.length} outside 40–600`);
        }
    }
    if (entry.schema.breadcrumb && entry.schema.breadcrumb !== "auto") errors.push(`${where}: schema.breadcrumb must be "auto"`);
  }
}

for (const w of warnings) console.warn(`WARN  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`ERROR ${e}`);
  console.error(`\nseo.yaml validation FAILED: ${errors.length} error(s). Build aborted — previous deploy stays live.`);
  process.exit(1);
}
console.log(`seo.yaml OK: ${Object.keys(doc.pages).length} pages, ${warnings.length} warning(s)`);
