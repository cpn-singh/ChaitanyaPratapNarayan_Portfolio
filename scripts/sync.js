import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { portfolioData } from '../src/data/portfolioData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const p = portfolioData.personal;
const c = portfolioData.contact;
const s = portfolioData.socials;

console.log(`[SYNC] Propagating portfolio data for ${p.fullName} across codebase...`);

const htmlFiles = [
  'index.html',
  'contact/index.html',
  'development/index.html',
  'agentic-ai/index.html',
  'rag/index.html',
  'data-analysis/index.html',
  'privacy-policy/index.html',
  'terms-of-use/index.html'
];

for (const rel of htmlFiles) {
  const filePath = path.join(ROOT_DIR, rel);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Contact info
  content = content.replace(/mailto:[^"']+/g, `mailto:${c.email}`);
  content = content.replace(/tel:[^"']+/g, `tel:${c.phone}`);
  content = content.replace(/P\s*:\s*\+91[0-9\s]+/g, c.displayPhone);
  content = content.replace(/[a-zA-Z0-9._%+-]+@gmail\.com/g, c.email);

  // Social URLs
  content = content.replace(/https:\/\/github\.com\/[a-zA-Z0-9_-]+/g, s.github);
  content = content.replace(/https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?/g, s.linkedin);
  content = content.replace(/https:\/\/cpn-resume\.vercel\.app\/?/g, s.resumeUrl);

  // Address
  content = content.replace(/Maujpur,\s*Delhi,\s*India/gi, p.location);

  // SVG Titles
  content = content.replace(/<text x="395" y="44"[^>]*>.*?<\/text>/g, `<text x="395" y="44" fill="#FFFFFF" font-family="'Century Gothic', 'Josefin Sans', 'Futura', sans-serif" font-weight="300" font-size="22" letter-spacing="0.32em" text-anchor="middle">${p.brandTitle}</text>`);
  content = content.replace(/<text x="395" y="62"[^>]*>.*?<\/text>/g, `<text x="395" y="62" fill="#8ADEE5" font-family="'Josefin Sans', 'Century Gothic', sans-serif" font-weight="300" font-size="8" letter-spacing="0.52em" text-anchor="middle" opacity="0.8">PYTHON FULL STACK &amp; FRONTEND DEVELOPER</text>`);

  // Copyright
  content = content.replace(/©\s*2026\s*[^|<]+(?:\|[^<]+)?/g, `© 2026 ${p.fullName} | ${p.role} - All rights reserved`);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[SYNC] Updated ${rel}`);
}

// Update sitemap-index.xml
const sitemapPath = path.join(ROOT_DIR, 'sitemap-index.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://chaitanya-portfolio20.vercel.app/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://chaitanya-portfolio20.vercel.app/development/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://chaitanya-portfolio20.vercel.app/rag/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://chaitanya-portfolio20.vercel.app/agentic-ai/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://chaitanya-portfolio20.vercel.app/data-analysis/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://chaitanya-portfolio20.vercel.app/contact/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>`;
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
  console.log('[SYNC] Updated sitemap-index.xml');
}

console.log('[SYNC] Complete! All code and pages are synchronized with src/data/portfolioData.js.');
