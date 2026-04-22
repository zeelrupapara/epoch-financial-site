# Epoch Financial — Image Audit & Replacement Prompt

You are a Claude Code session tasked with auditing and fixing every image on the Epoch Financial website. Work through this in order. Do not skip sections.

## 0. Context you MUST internalize before doing anything

**Client:** Epoch Financial — a middle-market lending firm operating in the United States (Georgia-based). Competitors are institutional names the client wants us to feel adjacent to.

**The problem (client's own words, verbatim):**

> "Pictures must match the other competitors as stated before. These need to be institutional, very high end, no low level horrible people picks or anything close to it."
>
> "Make it feel high end, institutional, large scale, household name approach. USA focused, no foreign pictures."
>
> "Many pictures are foreign and not based in USA, like some cities and other pics."
>
> "Unbelievably terrible. Beyond horrible."
>
> "Can you please take out any and all your pictures. Use what is on my existing site now and I can delete or fill in with others."
>
> "We can cut many pictures out, it doesn't need to be so visual with pictures all over."

**What this means — the rules:**

1. **Fewer images is better than more.** When in doubt, REMOVE. Do not default to replacing.
2. **USA ONLY.** No foreign cities, landmarks, skylines, license plates, flags, or signage. If you cannot prove an image is US-based, cut it.
3. **Institutional, household-name aesthetic.** Think Blackstone, Goldman Sachs, JPMorgan, Wells Fargo corporate pages. Polished, architectural, corporate. NOT:
   - Generic smiling stock-photo groups ("boardroom people")
   - Casual/consumer imagery (people in t-shirts, cafés, coworking vibes)
   - Scrabble-tile / chalkboard / hand-holding-paper-cutout stock tropes
   - Wallets, piggy banks, dollar-sign emojis, printed tax forms
   - Visible brand logos (Tesla, Netflix, H&M, Microsoft, Gucci have all been caught on prior passes — if you see any logo, it's out)
4. **Match the client's existing/legacy site.** Ask the user for the reference URL. Anything new must feel like it belongs there.
5. **No AI-generated imagery.** Only licensed stock (Pexels, Unsplash) or client library.

## 1. Tools you will use

| Tool | Use it for |
|---|---|
| `mcp__playwright__*` | **Primary visual audit.** Load each page in a real browser, screenshot, inspect `<img>` via DOM queries. Don't audit from JSX alone — rendered output differs. |
| `Bash` | `npm run dev`, `find` / `grep -r`, file ops under `public/assets/images/`, `git` commands. |
| `Read` / `Grep` / `Glob` | Find every `<img src=`, `backgroundImage`, `bgImage=`, `style={{background...}}` across `app/**/*.jsx`. |
| `Edit` | Surgical JSX changes. Prefer over `Write`. |
| `WebFetch` / `WebSearch` | Find candidates on Pexels/Unsplash. Always confirm US geography before download. |

**Playwright setup:** start `npm run dev` in background, then `mcp__playwright__browser_navigate` to `http://localhost:3000`.

## 2. How to find every image

### 2a. Static references
```bash
grep -rn "<img" app/ components/ --include="*.jsx" --include="*.tsx"
grep -rn "backgroundImage" app/ components/ --include="*.jsx" --include="*.tsx"
grep -rn "bgImage\|heroImage\|image=" app/ components/ --include="*.jsx" --include="*.tsx"
grep -rEn "https?://(images\.unsplash|images\.pexels|cdn\.)" app/ components/
grep -rn "image:" app/ --include="*.jsx" | grep -v "^.*://"
```

### 2b. Asset inventory
```bash
find public/assets/images -type f | sort
# Find orphans
for f in $(ls public/assets/images/); do
  grep -rq "$f" app/ components/ || echo "ORPHAN: $f"
done
```

### 2c. Rendered audit (Playwright) — for EVERY route
Routes: `/`, `/about`, `/about/our-approach`, `/articles`, `/abl`, `/bridge`, `/commercial-real-estate`, `/business-services`, `/construction`, `/distribution`, `/education-services`, `/financial-services`, `/government-contracting`, `/healthcare`, `/manufacturing`, `/media-telecommunications`, `/oil-gas`, `/transportation-freight`.

For each:
1. `browser_navigate` → URL
2. `browser_take_screenshot` → save to `/tmp/audit/<route>.png`
3. `browser_evaluate`:
   ```js
   [...document.querySelectorAll('img')].map(i => ({src: i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight}))
   ```
4. Also query `background-image` via `getComputedStyle`.
5. Flag: low-res, wrong aspect (stretched/tall-skinny), foreign, branded, off-brand.

## 3. Classification rubric — assign ONE label per image

Record everything in `/tmp/audit/report.md` BEFORE making changes.

| Label | Meaning | Action |
|---|---|---|
| **KEEP** | Institutional, US-based, on-brand, high quality. | Nothing. |
| **REMOVE** | Section works better text-only or icon-only. Client said "cut many pictures out." **Default when unsure.** | Delete `<img>` / container; adjust layout. |
| **REPLACE** | Concept right, execution bad (foreign, low-quality, branded, awkward stock). | Source US institutional replacement; save as `public/assets/images/<page>-<purpose>.jpg`. |
| **CROP/RESIZE** | Image fine but wrong aspect for container ("too long for content"). | Adjust container CSS (`aspect-ratio`, `max-h-*`, `object-cover`). Don't replace. |

**Red-flag checklist — mark REPLACE or REMOVE if ANY apply:**
- Visible non-US city skyline, foreign street signs, foreign license plates
- Any brand logo (retail, tech, auto — *any*)
- Stock-photo clichés: handshake over desk, arrow-hitting-target, scrabble tiles, chalkboard math, piggy bank, suited group laughing at laptop
- People-forward shots that look casual, consumer, low-budget
- Hot air balloons, wooden doors, empty chairs, decorative objects with no finance/industry connection
- Wallets, cash-in-hand, printed forms, calculators on desks
- Watermarks, visible credits, resolution under 1600px wide for hero use
- AI tells (extra fingers, melted text, impossible architecture)

## 4. Sourcing replacements (when REPLACE is the call)

1. **Client's legacy site first.** Ask user for URL. Scrape `<img>` tags, reuse approved assets.
2. **Pexels / Unsplash fallback.** Search: `manhattan skyline`, `chicago skyline`, `atlanta skyline`, `us financial district`, `american warehouse logistics`, `us freight terminal`, `port of los angeles`, `corporate lobby marble`, `institutional architecture usa`, `american factory floor`.
3. **Verify US geography before download.** Read photographer credit / location. Skip anything tagged London, Dubai, Sydney, Shanghai, Frankfurt, etc. If unmarked, skip unless skyline is unambiguously US (One WTC, Chrysler, Willis Tower, Bank of America Plaza Atlanta).
4. **Download locally.** Never hot-link. Save as `public/assets/images/<page>-<purpose>.jpg`.
5. **Optimize.** <300KB, jpg, max 1920px wide:
   ```bash
   sips -Z 1920 -s format jpeg -s formatOptions 80 input.jpg --out output.jpg
   ```
6. **Contrast check for CTA/banner backgrounds.** White text on top → image must be dark or darkenable. Test in browser, don't guess.

## 5. Execution workflow — in order

1. **Setup:** `npm run dev` (background), `mkdir -p /tmp/audit`, open Playwright to localhost:3000.
2. **Inventory (read-only):** Run §2 greps. Walk every route in Playwright. Fill `/tmp/audit/report.md`: path, page, section, label.
3. **Review with developer.** Output the report. Ask: "Proceed with these REMOVE and REPLACE calls?" Do NOT batch-delete unilaterally.
4. **Execute in waves:**
   - Wave 1: all **REMOVE**s (smallest blast radius)
   - Wave 2: all **CROP/RESIZE**s (CSS-only)
   - Wave 3: **REPLACE**s, ONE PAGE AT A TIME. Screenshot after each page.
5. **Verify per touched route:**
   - Reload in Playwright, screenshot, compare to pre-audit.
   - Check no 404s: `browser_network_requests`, filter status >= 400.
   - Mobile breakpoint: `browser_resize` to 375×812.
6. **Commit in logical chunks.** One commit per wave, or per page if large. Format:
   ```
   <page>: remove off-brand imagery and crop hero

   Remove 3 stock-photo cards client flagged. Crop CTA to prevent overflow.
   ```
7. **Push and report.** Summary: count removed, replaced, cropped, kept. Link to `/tmp/audit/` before/afters.

## 6. Hard rules — do not violate

- NEVER commit root-level `*-page.png` screenshots. Keep in `/tmp/audit/`.
- NEVER use AI-generated images.
- NEVER invent geography. Can't prove USA → not USA.
- NEVER swap without checking container aspect ratio — new image proportions must match.
- NEVER hot-link Unsplash/Pexels in production. Download locally.
- NEVER commit files >500KB without compressing.
- NEVER delete image files from `public/assets/images/` without first grepping to confirm no references.
- NEVER `git push --force` or `git reset --hard` without asking.

## 7. Handback — final message must include

1. **Totals:** `N removed, N replaced, N cropped, N kept`.
2. **Per-page notes:** one line each — what changed, why.
3. **Flagged-but-uncertain list** — images you didn't change because you weren't sure.
4. **Paths to before/after screenshots** in `/tmp/audit/`.
5. **Commit SHAs** and whether they've been pushed.

Start with §0 (context), §1 (tools), §2 (inventory). Pause for developer approval before §5 (execution).
