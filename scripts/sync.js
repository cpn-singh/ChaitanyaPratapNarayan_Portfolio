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

console.log(`[SYNC] Synchronizing portfolio for ${p.fullName} across all pages...`);

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

  // Contact info & Socials
  content = content.replace(/mailto:[^"'<>]+/g, `mailto:${c.email}`);
  content = content.replace(/[a-zA-Z0-9._%+-]+@gmail\.com/g, c.email);
  content = content.replace(/tel:\+?[0-9]+/g, `tel:${c.phone}`);
  content = content.replace(/\+91\s*[0-9\s]{10,12}/g, c.displayPhone);
  content = content.replace(/https:\/\/github\.com\/[a-zA-Z0-9_-]+/g, s.github);
  content = content.replace(/github\.com\/[a-zA-Z0-9_-]+/g, s.githubDisplay);
  content = content.replace(/https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?/g, s.linkedin);
  content = content.replace(/linkedin\.com\/in\/[a-zA-Z0-9_-]+/g, s.linkedinDisplay);
  content = content.replace(/https:\/\/cpn-resume\.vercel\.app\/?/g, s.resumeUrl);

  // SVG Titles (Homepage & Footers)
  content = content.replace(/<text x="155\.5" y="88"[^>]*>.*?<\/text>/g, `<text x="155.5" y="88" fill="#FFFFFF" font-family="'Century Gothic', 'Josefin Sans', 'Futura', sans-serif" font-weight="300" font-size="14" letter-spacing="0.22em" text-anchor="middle">${p.brandTitle}</text>`);
  content = content.replace(/<text x="155\.5" y="108"[^>]*>.*?<\/text>/g, `<text x="155.5" y="108" fill="#8ADEE5" font-family="'Josefin Sans', 'Century Gothic', sans-serif" font-weight="300" font-size="6.5" letter-spacing="0.38em" text-anchor="middle" opacity="0.8">${p.role.toUpperCase()}</text>`);
  content = content.replace(/<text x="395" y="44"[^>]*>.*?<\/text>/g, `<text x="395" y="44" fill="#FFFFFF" font-family="'Century Gothic', 'Josefin Sans', 'Futura', sans-serif" font-weight="300" font-size="20" letter-spacing="0.30em" text-anchor="middle">${p.brandTitle}</text>`);
  content = content.replace(/<text x="395" y="62"[^>]*>.*?<\/text>/g, `<text x="395" y="62" fill="#8ADEE5" font-family="'Josefin Sans', 'Century Gothic', sans-serif" font-weight="300" font-size="7.5" letter-spacing="0.45em" text-anchor="middle" opacity="0.8">${p.role.toUpperCase()}</text>`);

  // Subpage SVGs (Mobile & Desktop)
  content = content.replace(/<text x="142\.5" y="76"[^>]*>.*?<\/text>/g, `<text x="142.5" y="76" fill="#FFFFFF" font-family="'Century Gothic', 'Josefin Sans', 'Futura', sans-serif" font-weight="300" font-size="12" letter-spacing="0.20em" text-anchor="middle">${p.brandTitle}</text>`);
  content = content.replace(/<text x="142\.5" y="94"[^>]*>.*?<\/text>/g, `<text x="142.5" y="94" fill="#8ADEE5" font-family="'Josefin Sans', 'Century Gothic', sans-serif" font-weight="300" font-size="6" letter-spacing="0.35em" text-anchor="middle" opacity="0.8">${p.role.toUpperCase()}</text>`);
  content = content.replace(/<text x="460" y="50"[^>]*>.*?<\/text>/g, `<text x="460" y="50" fill="#FFFFFF" font-family="'Century Gothic', 'Josefin Sans', 'Futura', sans-serif" font-weight="300" font-size="20" letter-spacing="0.25em" text-anchor="middle">${p.brandTitle}</text>`);
  content = content.replace(/<text x="460" y="70"[^>]*>.*?<\/text>/g, `<text x="460" y="70" fill="#8ADEE5" font-family="'Josefin Sans', 'Century Gothic', sans-serif" font-weight="300" font-size="7" letter-spacing="0.45em" text-anchor="middle" opacity="0.8">${p.role.toUpperCase()}</text>`);
  content = content.replace(/<text x="168" y="25"[^>]*>.*?<\/text>/g, `<text x="168" y="25" fill="#FFFFFF" font-family="'Century Gothic', 'Josefin Sans', 'Futura', sans-serif" font-weight="300" font-size="11" letter-spacing="0.20em" text-anchor="middle">${p.brandTitle}</text>`);

  // Copyright
  content = content.replace(/©\s*2026\s*[^|<]+(?:\|[^<]+)?/g, `© 2026 ${p.fullName} | ${p.role} - All rights reserved`);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`[SYNC] Updated ${rel}`);
}

console.log('[SYNC] Successfully completed synchronization.');
