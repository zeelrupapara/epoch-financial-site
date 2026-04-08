const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

// Gzip/Brotli compression — all responses
app.use(compression({ level: 6 }));

// Cache static assets (images, fonts) for 1 year
app.use('/assets', express.static(path.join(ROOT, 'assets'), {
  maxAge: '1y',
  immutable: true,
}));

// Serve HTML pages with short cache (revalidate on deploy)
app.use(express.static(ROOT, {
  extensions: ['html'],
  maxAge: '10m',
}));

// Clean URL fallback: /ar-financing → /ar-financing/index.html
app.use((req, res) => {
  const tryPath = path.join(ROOT, req.path, 'index.html');
  res.sendFile(tryPath, (err) => {
    if (err) res.status(404).send('Not Found');
  });
});

app.listen(PORT, () => {
  console.log(`EPOCH Financial — running on http://localhost:${PORT}`);
});
