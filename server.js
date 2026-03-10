const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8001;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
};

const SPA_INDEX = path.join(ROOT, 'styleguide', 'index.html');

http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);

  // Redirect root to styleguide
  if (url === '/') {
    res.writeHead(301, { Location: '/styleguide/' });
    return res.end();
  }

  // Try to serve the file directly
  let file = path.join(ROOT, url);
  if (url.endsWith('/')) file = path.join(file, 'index.html');

  // Security: no path traversal
  if (!file.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end();
  }

  fs.stat(file, (err, stat) => {
    if (!err && stat.isFile()) {
      // Serve the actual file
      const ext = path.extname(file);
      fs.readFile(file, (readErr, data) => {
        if (readErr) { res.writeHead(500); return res.end(); }
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
      });
    } else if (url.startsWith('/styleguide')) {
      // SPA fallback for styleguide routes
      fs.readFile(SPA_INDEX, (readErr, data) => {
        if (readErr) { res.writeHead(500); return res.end(); }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  });
}).listen(PORT, () => console.log(`Serving on :${PORT}`));
