/**
 * generate-og-pages.mjs
 * Generates per-page OG social sharing images (1200x630) for Ted's Voice Academy.
 * Run: node scripts/generate-og-pages.mjs
 */

import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = resolve(ROOT, 'public/images/og');
const noisePath = resolve(ROOT, 'public/images/noise-texture.png');

// Page definitions: slug, title (gold), subtitle (cream), accent color
const pages = [
  { slug: 'singing', title: 'Singing Lessons', subtitle: 'Build a voice you can trust', accent: '#d4a84b' },
  { slug: 'speaking', title: 'Speaking Coaching', subtitle: 'Communicate with clarity and presence', accent: '#d4a84b' },
  { slug: 'ensembles', title: 'Ensemble Coaching', subtitle: 'Find your voice together', accent: '#d4a84b' },
  { slug: 'about', title: 'About Ted', subtitle: '40 years of voice expertise', accent: '#d4a84b' },
  { slug: 'pricing', title: 'Pricing & Packages', subtitle: 'Flexible options for every voice', accent: '#d4a84b' },
  { slug: 'contact', title: 'Contact', subtitle: 'Start your voice journey today', accent: '#d4a84b' },
  { slug: 'avf', title: 'The Adaptive Voice Framework', subtitle: "The owner's manual your voice never came with", accent: '#d4a039' },
  { slug: 'pass-profile', title: 'PASS Profile', subtitle: 'Discover your communication fingerprint', accent: '#3db58c' },
  { slug: 'intonation-lab', title: 'Intonation Lab', subtitle: 'Train your ear to sing in perfect tune', accent: '#d4a84b' },
  { slug: 'vocal-health', title: 'Vocal Health', subtitle: 'Your voice deserves good care', accent: '#d4a84b' },
  { slug: 'workshops', title: 'Workshops', subtitle: 'Teaching voice from the inside out', accent: '#d4a84b' },
  { slug: 'shop', title: 'Shop', subtitle: 'Tools for every voice', accent: '#d4a84b' },
  { slug: 'blog', title: 'Blog', subtitle: 'Ideas, insights, and practical guidance', accent: '#d4a84b' },
  { slug: 'faq', title: 'FAQ', subtitle: 'Your questions answered', accent: '#d4a84b' },
];

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function makeSvg({ title, subtitle, accent }) {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  // Shorter titles get bigger font
  const titleSize = safeTitle.length > 28 ? 52 : 60;

  return `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#162744;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background gradient -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Gold accent line -->
  <rect x="100" y="180" width="120" height="4" rx="2" fill="${accent}"/>

  <!-- Page title -->
  <text x="100" y="${180 + 20 + titleSize}" fill="${accent}" font-family="Georgia, 'Times New Roman', serif" font-size="${titleSize}" font-weight="bold">${safeTitle}</text>

  <!-- Subtitle -->
  <text x="100" y="${180 + 30 + titleSize + 50}" fill="#f5f0e8" font-family="'Segoe UI', Arial, sans-serif" font-size="30" font-weight="400">${safeSubtitle}</text>

  <!-- Site name -->
  <text x="100" y="440" fill="rgba(245,240,232,0.6)" font-family="'Segoe UI', Arial, sans-serif" font-size="24">Ted's Voice Academy</text>

  <!-- Location -->
  <text x="100" y="480" fill="rgba(245,240,232,0.45)" font-family="'Segoe UI', Arial, sans-serif" font-size="20">Lacey, Washington</text>

  <!-- Bottom accent line -->
  <rect x="100" y="510" width="80" height="3" rx="1.5" fill="${accent}" opacity="0.6"/>

  <!-- Website URL -->
  <text x="100" y="560" fill="${accent}" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="600" opacity="0.8">tedsvoiceacademy.com</text>

  <!-- Corner accents -->
  <rect x="1050" y="40" width="110" height="3" rx="1.5" fill="${accent}" opacity="0.3"/>
  <rect x="1157" y="40" width="3" height="80" rx="1.5" fill="${accent}" opacity="0.3"/>
</svg>`;
}

async function generate() {
  mkdirSync(OUT_DIR, { recursive: true });

  // Prepare noise overlay once
  let noiseLayer = null;
  try {
    const tiledNoiseSvg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="noise" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <image href="data:image/png;base64,${readFileSync(noisePath).toString('base64')}" width="200" height="200"/>
        </pattern>
      </defs>
      <rect width="1200" height="630" fill="url(#noise)" opacity="0.08"/>
    </svg>`;
    noiseLayer = await sharp(Buffer.from(tiledNoiseSvg)).png().toBuffer();
  } catch (e) {
    console.warn('Noise texture not found, generating without grain.');
  }

  for (const page of pages) {
    const svg = makeSvg(page);
    let pipeline = sharp(Buffer.from(svg));

    if (noiseLayer) {
      const base = await pipeline.png().toBuffer();
      pipeline = sharp(base).composite([{ input: noiseLayer, blend: 'screen' }]);
    }

    const outPath = resolve(OUT_DIR, `og-${page.slug}.jpg`);
    await pipeline.jpeg({ quality: 90, mozjpeg: true }).toFile(outPath);
    console.log(`  ✓ ${outPath}`);
  }

  console.log(`\nGenerated ${pages.length} OG images in ${OUT_DIR}`);
}

generate().catch(console.error);
