# Abhi Kumar Gurjar Portfolio Clone

An exact 1:1 clone of [abhigurjar.vercel.app](https://abhigurjar.vercel.app/) preserving all visual identity, dark theme (`#051723`), 3D WebGL scenes, Three.js shaders, KTX2/Basis transcoders, GSAP ScrollTrigger animations, sound effects, typography, assets, and sub-pages.

## Project Structure

```
├── index.html                           # Main Landing Page
├── agentic-ai/index.html                # Agentic AI Page
├── contact/index.html                   # Contact Page
├── data-analysis/index.html             # Data Analysis Page
├── development/index.html               # Full-Stack Development Page
├── privacy-policy/index.html            # Privacy Policy Page
├── rag/index.html                       # RAG Architecture Page
├── terms-of-use/index.html              # Terms of Use Page
├── Abhi_Kumar_Gurjar_CV_Updated.pdf     # Resume / CV Document
├── sitemap-index.xml                    # Sitemap Index
├── _astro/                              # JavaScript bundles, CSS stylesheets, images & icons
├── assets/
│   ├── fonts/                           # Century Gothic & Josefin Sans WOFF / WOFF2
│   ├── models/                          # 3D GLB Models (homepage, capital, maritime, trading, etc.)
│   ├── sounds/                          # Background audio (sound.mp3)
│   └── textures/                        # WebP textures, lightmaps & environment maps (.exr)
├── libs/basis/                          # Basis WebAssembly Transcoder (.js & .wasm)
├── server.js                            # Local HTTP development server
├── vercel.json                          # Vercel deployment configuration
└── package.json                         # Project metadata and scripts
```

## Running Locally

To run the portfolio locally:

```bash
# Using Node.js directly
node server.js

# Or using npm
npm start
# or
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel
Simply import or run:
```bash
npx vercel
```
The included `vercel.json` ensures clean routing and directory indexing automatically.
