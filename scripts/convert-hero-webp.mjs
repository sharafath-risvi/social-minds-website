// One-shot WebP conversion script for hero images
// Run: node scripts/convert-hero-webp.mjs

import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const heroDir = path.join(__dirname, '../public/hero');

// Files to convert — only our specific set
const targets = [
  { in: 'reel.png',      out: 'reel.webp'      },
  { in: 'studio.png',    out: 'studio.webp'    },
  { in: 'strategy.jpg',  out: 'strategy.webp'  },
  { in: 'analytics.jpg', out: 'analytics.webp' },
  { in: 'podcast.jpg',   out: 'podcast.webp'   },
  // Also convert meeting.png for completeness
  { in: 'meeting.png',   out: 'meeting.webp'   },
];

async function convert() {
  for (const { in: src, out: dest } of targets) {
    const inPath  = path.join(heroDir, src);
    const outPath = path.join(heroDir, dest);
    try {
      const info = await sharp(inPath)
        .webp({ quality: 87, effort: 4 })
        .toFile(outPath);
      const kb = (info.size / 1024).toFixed(1);
      console.log(`✅  ${dest}  →  ${kb} KB`);
    } catch (e) {
      console.error(`❌  ${src}: ${e.message}`);
    }
  }
  console.log('\nAll done.');
}

convert();
