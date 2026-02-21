/**
 * generate-apple-touch-icon.mjs
 * Generates a 180x180 PNG apple-touch-icon for Ted's Voice Academy.
 * Run: node scripts/generate-apple-touch-icon.mjs
 */

import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_PATH = resolve(ROOT, 'public/apple-touch-icon.png');

const svg = `
<svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#162744;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="180" height="180" fill="url(#bg)" rx="0" ry="0"/>

  <!-- Gold "TVA" text, centered -->
  <text
    x="90"
    y="102"
    text-anchor="middle"
    dominant-baseline="central"
    fill="#d4a84b"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="64"
    font-weight="bold"
    letter-spacing="4"
  >TVA</text>

  <!-- Thin gold accent line below text -->
  <rect x="50" y="130" width="80" height="2.5" rx="1.25" fill="#d4a84b" opacity="0.7"/>
</svg>`;

async function generate() {
  await sharp(Buffer.from(svg))
    .png()
    .toFile(OUT_PATH);

  console.log(`Apple touch icon generated: ${OUT_PATH}`);
}

generate().catch(console.error);
