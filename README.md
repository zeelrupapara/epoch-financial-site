# EPOCH Financial — Static Site

Senior secured working capital solutions website. Four pages, fully static HTML/CSS with Tailwind CDN.

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `index.html` | Home |
| `/ar-financing/` | `ar-financing/index.html` | Accounts Receivable Financing |
| `/abl/` | `abl/index.html` | Asset Based Lending |
| `/bridge/` | `bridge/index.html` | Bridge Loans |

## Local Development

```bash
npm install
npm start
# → http://localhost:3000
```

Runs an Express server with gzip compression, clean URLs, and cache headers.

## Deploy to Vercel

### Option 1: CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login (one-time)
vercel login

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub (auto-deploy)

1. Push to GitHub:
   ```bash
   git add -A && git commit -m "ready for deploy"
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `epoch-financial-site` repository
4. Framework preset: **Other**
5. Build command: leave empty
6. Output directory: `.` (root)
7. Click **Deploy**

Every push to `main` will auto-deploy to production.

### What `vercel.json` does

- `cleanUrls` — strips `.html` from URLs automatically
- `trailingSlash` — adds trailing `/` for consistency
- `headers` — 1-year immutable cache on assets, 10-min cache on HTML

### Custom Domain

```bash
vercel domains add yourdomain.com
```

Or add it in the Vercel dashboard under **Settings → Domains**.

## Project Structure

```
epoch-financial-site/
├── index.html                 # Home page
├── ar-financing/index.html    # AR Financing page
├── abl/index.html             # ABL page
├── bridge/index.html          # Bridge Loans page
├── assets/
│   ├── images/                # Page images (19 files)
│   └── logo/                  # Logo variants (9 files)
├── server.js                  # Local dev server (Express)
├── vercel.json                # Vercel deployment config
└── package.json
```
