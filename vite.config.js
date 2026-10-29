import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
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
        termsOfUse: resolve(__dirname, 'terms-of-use/index.html')
      }
    }
  }
});
