import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function staticAssetsPlugin() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      // 1. Copy 3D models, textures, sounds, fonts to dist/assets
      copyDir(resolve(__dirname, 'assets'), resolve(__dirname, 'dist/assets'));
      // 2. Copy KTX2 Basis transcoder to dist/libs
      copyDir(resolve(__dirname, 'libs'), resolve(__dirname, 'dist/libs'));
      // 3. Copy sitemap if exists
      const sitemap = resolve(__dirname, 'sitemap-index.xml');
      if (fs.existsSync(sitemap)) {
        fs.copyFileSync(sitemap, resolve(__dirname, 'dist/sitemap-index.xml'));
      }
      // 4. Copy resume PDF if exists
      const pdf = resolve(__dirname, 'Abhi_Kumar_Gurjar_CV_Updated.pdf');
      if (fs.existsSync(pdf)) {
        fs.copyFileSync(pdf, resolve(__dirname, 'dist/Abhi_Kumar_Gurjar_CV_Updated.pdf'));
      }
    }
  };
}

export default defineConfig({
  plugins: [staticAssetsPlugin()],
  server: {
    port: 3000,
    open: false,
    host: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        development: resolve(__dirname, 'development/index.html'),
        stateApis: resolve(__dirname, 'state-apis/index.html'),
        frontend3D: resolve(__dirname, '3d-frontend/index.html'),
        webPlatforms: resolve(__dirname, 'web-platforms/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy/index.html'),
        termsOfUse: resolve(__dirname, 'terms-of-use/index.html'),
        agenticAi: resolve(__dirname, 'agentic-ai/index.html'),
        dataAnalysis: resolve(__dirname, 'data-analysis/index.html'),
        rag: resolve(__dirname, 'rag/index.html')
      }
    }
  }
});
