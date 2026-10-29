import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.bin': 'application/octet-stream',
  '.wasm': 'application/wasm',
  '.exr': 'image/x-exr',
  '.xml': 'application/xml; charset=utf-8'
};

// --- Live Reload SSE Clients ---
const liveReloadClients = new Set();

function broadcastReload() {
  const message = `data: reload\n\n`;
  for (const client of liveReloadClients) {
    try {
      client.write(message);
    } catch {
      liveReloadClients.delete(client);
    }
  }
}

// Watch directory for changes with debounce
let debounceTimer = null;
const IGNORED_PREFIXES = ['.git', 'node_modules', '.idea', '.vscode', 'dist', 'assets', 'libs', '_astro', 'scratch'];
const WATCHED_EXTENSIONS = ['.html', '.css'];

try {
  fs.watch(ROOT, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    const normalized = filename.replace(/\\/g, '/');
    if (IGNORED_PREFIXES.some(ignored => normalized.startsWith(ignored) || normalized.includes('/' + ignored + '/'))) {
      return;
    }
    const ext = path.extname(normalized).toLowerCase();
    if (!WATCHED_EXTENSIONS.includes(ext)) {
      return;
    }
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      console.log(`[LiveReload] Change detected in ${filename}. Reloading browser...`);
      broadcastReload();
    }, 250);
  });
  console.log('[LiveReload] Active - watching HTML and CSS changes.');
} catch (err) {
  console.warn('[LiveReload] Watcher warning:', err.message);
}

const LIVERELOAD_SCRIPT = `
<!-- LiveReload Script injected by server.js -->
<script>
(function() {
  let source;
  function connect() {
    source = new EventSource('/__livereload');
    source.onmessage = function(e) {
      if (e.data === 'reload') {
        console.log('[LiveReload] Change detected, reloading page...');
        window.location.reload();
      }
    };
    source.onerror = function() {
      source.close();
      setTimeout(connect, 1000);
    };
  }
  connect();
})();
</script>
`;

const server = http.createServer((req, res) => {
  // SSE Live Reload endpoint
  if (req.url === '/__livereload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    res.write(': connected\n\n');
    liveReloadClients.add(res);

    req.on('close', () => {
      liveReloadClients.delete(res);
    });
    return;
  }

  // Set CORS and strict zero-cache headers for instant updates
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  let reqPath = decodeURI(req.url.split('?')[0]);
  let filePath = path.join(ROOT, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.setHeader('Content-Type', contentType);

  // If HTML, inject LiveReload script before closing body/html
  if (ext === '.html') {
    try {
      let content = fs.readFileSync(filePath, 'utf-8');
      if (content.includes('</body>')) {
        content = content.replace('</body>', `${LIVERELOAD_SCRIPT}\n</body>`);
      } else if (content.includes('</html>')) {
        content = content.replace('</html>', `${LIVERELOAD_SCRIPT}\n</html>`);
      } else {
        content += LIVERELOAD_SCRIPT;
      }
      res.end(content);
    } catch {
      fs.createReadStream(filePath).pipe(res);
    }
  } else {
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`LiveReload active - any file edit or revert will instantly refresh Chrome.`);
});
