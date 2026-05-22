# SEO Migration — `seo-overhaul` branch

This branch restores search visibility after the WordPress → Next.js
migration. It is intended for SEO review before merging to `master`.

## Background

The previous site was WordPress (Yoast SEO, Contact Form 7). It had **82
published blog posts + 11 pages**. The new Next.js site shipped with only
**11 blog posts** and no `robots.txt` / `sitemap.xml`, so a large number of
ranked URLs began returning 404 after DNS cut over to the new site.

All redirect and content data in this branch was pulled directly from the
**live WordPress database** (posts table, postmeta/Yoast, and the Redirection
plugin's rule table) — it is real data, not guesses.

## What this branch changes

| Area | Change |
|------|--------|
| Canonical origin | `https://www.epochfinancial.com` set as `metadataBase` |
| `robots.txt` | Added (`app/robots.js`) — allows all, disallows `/api/`, links sitemap |
| `sitemap.xml` | Added (`app/sitemap.js`) — all pages + 82 blog posts + articles |
| Canonical tags | Added to all 25 pages + dynamic blog/article routes |
| OpenGraph / Twitter | Added sitewide defaults + per-article tags |
| Structured data | `FinancialService` + `WebSite` sitewide; `BlogPosting` per post |
| 404 page | Branded `app/not-found.jsx` with internal links (noindex) |
| Redirects | 174 legacy WordPress URLs → new URLs (301), in `next.config.js` |
| Blog content | **71 missing blog posts restored** from the WordPress database |
| Blog images | 71 featured images restored to `public/assets/images/blog/wp/` |

## Redirects (`next.config.js`)

- **11 page redirects** — renamed top-level pages
  (`/contact-us` → `/contact`, `/business-loans` → `/financial-services`,
  `/terms-condition` → `/privacy-policy`, etc.)
- **163 blog redirects** — legacy post slugs and bare `/slug` paths →
  current `/blog/<slug>`, derived from the WordPress Redirection plugin's
  enabled 301 rules plus the published-post inventory.
- Trailing-slash normalization (`/page/` → `/page`) is automatic in Next.js
  (`trailingSlash: false`), matching the client URL spec.

## Restored blog posts

71 posts were rebuilt from the WordPress `post_content`:

- HTML converted to the site's `paragraph` / `heading` / `subheading` /
  `list` block format
- Titles, slugs, publish dates, excerpts, featured images preserved
- Yoast meta titles, descriptions and focus keywords carried over
- Categories inferred from post topic (see `categorize()` in the migration)

`/blog` now lists all 82 posts and `/blog/<slug>` resolves for every legacy
post URL.

## Industry & service URL restructure

Per the client's "New URLs" table, industry and service pages were moved to
nested paths:

- **14 industry pages** → `/industries/<slug>` (e.g. `/healthcare` →
  `/industries/healthcare-financing`)
- **3 service pages** → `/financial-services/<slug>` (e.g. `/ar-financing`
  → `/financial-services/accounts-receivable-financing`)

All route directories, internal links, navigation, per-page canonical URLs
and the sitemap were updated. Each old flat URL 301s to its new location
(16 redirects in `next.config.js` → `structureRedirects`).

Notes for review:

- **`/commercial-real-estate`** is unchanged — it is not listed in the new
  URL table. Confirm whether it should also move under `/industries/`.
- **Energy / Infrastructure** (`/industries/energy-infrastructure-financing/`)
  is listed in the table but has no existing page/content — not created.
  Needs content before it can be published.
- **Trailing slashes** — the client table shows trailing slashes
  (`/industries/business-services/`). The site uses `trailingSlash: false`
  (matching the earlier URL doc, which said to strip them). Trailing-slash
  URLs still resolve via automatic 308. Flip `trailingSlash` in
  `next.config.js` if trailing slashes must be canonical.

## Open items for SEO review

1. **Google Sheet mapping** — the client's "New URLs" doc references a
   separate Google Sheet with detailed old→new mappings. It was not
   available. Cross-check the 174 redirects here against that sheet and add
   anything missing.
2. **URL structure** — the client doc proposes nesting industry pages under
   `/industries/...`. This branch keeps the current **flat** URLs
   (`/healthcare`, `/business-services`, …). Flat URLs are SEO-fine; if the
   nested structure is required, that is a follow-up.
3. **www 301** — confirm the non-www → www redirect in Vercel domain
   settings is a permanent **308**, not a temporary 307.
4. **Restored post categories** — inferred by keyword; verify against the
   intended taxonomy.
5. **Google Search Console** — after merge: submit the new `sitemap.xml`
   and consider the "Change of Address" / re-indexing request.
6. **Per-post images** — restored images live under
   `/assets/images/blog/wp/`; optimize/rename if desired for consistency
   with the curated articles.

## After merge — deployment checklist

- [ ] Confirm `sitemap.xml` and `robots.txt` resolve on production
- [ ] Submit sitemap in Google Search Console
- [ ] Spot-check 10–15 legacy URLs return 301 to the right destination
- [ ] Verify canonical tags render the `www` host
- [ ] Request re-indexing of key pages
