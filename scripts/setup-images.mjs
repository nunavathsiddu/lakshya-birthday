import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 22 Curated High-End Editorial & Romantic Photographs (Unsplash IDs)
const images = [
  {
    name: 'hero.jpg',
    label: 'Lakshya Hero Portrait',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'lakshya.jpg',
    label: 'Lakshya Dedicated Portrait',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'couple-01.jpg',
    label: 'The Beginning / First Memory',
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'couple-02.jpg',
    label: 'Sunset by Waterfront',
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'couple-03.jpg',
    label: 'City Lights and Stolen Looks',
    url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'couple-04.jpg',
    label: 'Walking Hand in Hand',
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'couple-05.jpg',
    label: 'Quiet Morning Embrace',
    url: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-01.jpg',
    label: 'Golden Hour Symphony',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-02.jpg',
    label: 'Unfiltered Radiant Laughter',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-03.jpg',
    label: 'Midnight Roadtrip Under Stars',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-04.jpg',
    label: 'Coffee & Rainy Afternoon',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-05.jpg',
    label: 'Dressed in Starlight Evening',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-06.jpg',
    label: 'The Sweetest Candid Smile',
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-07.jpg',
    label: 'Ocean Breeze & Warm Sand',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-08.jpg',
    label: 'Under the Autumn Canopy',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-09.jpg',
    label: 'Cozy Bookstore Hideaway',
    url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-10.jpg',
    label: 'Dessert Date Whispers',
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-11.jpg',
    label: 'Fairy Lights at Midnight',
    url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-12.jpg',
    label: 'Mountain Vista Lookout',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-13.jpg',
    label: 'Spontaneous Dancing in Rain',
    url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-14.jpg',
    label: 'Twilight Rooftop Whispers',
    url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'memory-15.jpg',
    label: 'Lakshya Birthday Toast',
    url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=85',
  },
];

function generateLuxurySvg(name, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500" width="1200" height="1500">
  <defs>
    <radialGradient id="lux-bg-${name.replace(/[^a-z0-9]/gi, '')}" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#4a0e1c" />
      <stop offset="50%" stop-color="#161120" />
      <stop offset="100%" stop-color="#08070b" />
    </radialGradient>
    <linearGradient id="gold-border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d4af37" />
      <stop offset="50%" stop-color="#f4acb7" />
      <stop offset="100%" stop-color="#aa8222" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#lux-bg-${name.replace(/[^a-z0-9]/gi, '')})" />
  <rect x="40" y="40" width="1120" height="1420" rx="30" fill="none" stroke="url(#gold-border)" stroke-width="2" opacity="0.35" />
  <rect x="60" y="60" width="1080" height="1380" rx="20" fill="none" stroke="#f4acb7" stroke-width="1" opacity="0.15" stroke-dasharray="8,8" />
  
  <!-- Subtle filigree corners -->
  <circle cx="100" cy="100" r="15" fill="none" stroke="#d4af37" stroke-width="1.5" opacity="0.4" />
  <circle cx="1100" cy="100" r="15" fill="none" stroke="#d4af37" stroke-width="1.5" opacity="0.4" />
  <circle cx="100" cy="1400" r="15" fill="none" stroke="#d4af37" stroke-width="1.5" opacity="0.4" />
  <circle cx="1100" cy="1400" r="15" fill="none" stroke="#d4af37" stroke-width="1.5" opacity="0.4" />

  <!-- Center Emblem -->
  <circle cx="600" cy="650" r="220" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.3" />
  <circle cx="600" cy="650" r="205" fill="none" stroke="#f4acb7" stroke-width="1" opacity="0.25" stroke-dasharray="6,6" />
  <text x="600" y="630" fill="#fdfbf7" font-family="Georgia, 'Times New Roman', serif" font-size="44" text-anchor="middle" letter-spacing="8">LAKSHYA</text>
  <text x="600" y="685" fill="#d4af37" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" text-anchor="middle" letter-spacing="6">${label.toUpperCase()}</text>
  <text x="600" y="735" fill="#f4acb7" font-family="monospace" font-size="16" text-anchor="middle" opacity="0.8">/public/images/${name}</text>
  
  <text x="600" y="1320" fill="#fdfbf7" font-family="Georgia, serif" font-size="20" text-anchor="middle" font-style="italic" opacity="0.6">Replace this file with your photograph</text>
</svg>`;
}

async function downloadImages() {
  console.log('Verifying & setting up all 22 photo slots in public/images/ ...');
  for (const item of images) {
    const dest = path.join(imagesDir, item.name);
    // If file already exists and is non-empty, keep it
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`✓ Existing photo slot ready: ${item.name} (${Math.round(fs.statSync(dest).size / 1024)} KB)`);
      continue;
    }

    try {
      console.log(`Downloading ${item.name}...`);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(item.url, { signal: controller.signal });
      clearTimeout(timeout);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(arrayBuffer));
      console.log(`✓ Saved ${item.name} (${Math.round(arrayBuffer.byteLength / 1024)} KB)`);
    } catch (err) {
      console.log(`Notice: Could not fetch ${item.name} (${err.message}). Generating high-end luxury vector SVG placeholder...`);
      fs.writeFileSync(dest, generateLuxurySvg(item.name, item.label));
      console.log(`✓ Created luxury fallback for ${item.name}`);
    }
  }
  console.log('All 22 photo slots are ready in public/images/');
}

downloadImages();
