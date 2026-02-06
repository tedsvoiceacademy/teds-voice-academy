/**
 * generate-og-image.mjs
 * Generates the default OG social sharing image (1200x630) for Ted's Voice Academy.
 * Run: node scripts/generate-og-image.mjs
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUTPUT = resolve(ROOT, 'public/images/og-default.jpg');

// Load the noise texture for grain effect
const noisePath = resolve(ROOT, 'public/images/noise-texture.png');

// Design: Navy background with gold text, grain texture overlay
// Using SVG for precise text rendering with web-safe fallback fonts
const svgText = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#162744;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background gradient -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Gold accent line top -->
  <rect x="100" y="160" width="120" height="4" rx="2" fill="#d4a84b"/>

  <!-- Main title -->
  <text x="100" y="230" fill="#d4a84b" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="bold">Ted's Voice Academy</text>

  <!-- Tagline line 1 -->
  <text x="100" y="310" fill="#f5f0e8" font-family="'Segoe UI', Arial, sans-serif" font-size="32" font-weight="400">Singing Lessons · Speaking Coaching</text>

  <!-- Tagline line 2 -->
  <text x="100" y="360" fill="#f5f0e8" font-family="'Segoe UI', Arial, sans-serif" font-size="32" font-weight="400">Ensemble Training</text>

  <!-- Location -->
  <text x="100" y="440" fill="rgba(245,240,232,0.7)" font-family="'Segoe UI', Arial, sans-serif" font-size="24">Lacey, Washington · In-Person &amp; Virtual</text>

  <!-- Gold accent line bottom -->
  <rect x="100" y="480" width="80" height="3" rx="1.5" fill="#d4a84b"/>

  <!-- Website URL -->
  <text x="100" y="540" fill="rgba(212,168,75,0.8)" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="600">tedsvoiceacademy.com</text>

  <!-- Decorative gold corner accent (top right) -->
  <rect x="1050" y="40" width="110" height="3" rx="1.5" fill="rgba(212,168,75,0.4)"/>
  <rect x="1157" y="40" width="3" height="80" rx="1.5" fill="rgba(212,168,75,0.4)"/>

  <!-- Decorative gold corner accent (bottom left) -->
  <rect x="40" y="587" width="3" height="0" rx="1.5" fill="rgba(212,168,75,0.3)"/>
</svg>`;

async function generate() {
  // Create the base image from SVG
  const base = sharp(Buffer.from(svgText));

  // Load noise texture and tile it to 1200x630
  let noiseBuffer;
  try {
    const noiseRaw = readFileSync(noisePath);
    const noiseMeta = await sharp(noiseRaw).metadata();
    // Tile the noise texture across the full image
    noiseBuffer = await sharp(noiseRaw)
      .resize(200, 200, { fit: 'fill' })
      .toBuffer();
  } catch (e) {
    console.warn('Noise texture not found, generating without grain.');
    noiseBuffer = null;
  }

  let result = base;

  if (noiseBuffer) {
    // Create a tiled noise layer at 1200x630
    // sharp doesn't tile natively, so we'll create a repeating pattern via SVG
    const tiledNoiseSvg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="noise" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <image href="data:image/png;base64,${readFileSync(noisePath).toString('base64')}" width="200" height="200"/>
        </pattern>
      </defs>
      <rect width="1200" height="630" fill="url(#noise)" opacity="0.08"/>
    </svg>`;

    const noiseLayer = await sharp(Buffer.from(tiledNoiseSvg))
      .png()
      .toBuffer();

    result = sharp(await base.png().toBuffer())
      .composite([{ input: noiseLayer, blend: 'screen' }]);
  }

  // Output as JPEG (best for OG images)
  await result
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(OUTPUT);

  console.log(`OG image generated: ${OUTPUT}`);
}

generate().catch(console.error);
