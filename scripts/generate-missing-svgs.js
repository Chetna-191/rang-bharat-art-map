// generate-missing-svgs.js
import fs from 'fs';

const pichwaiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="pichwaiBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E0D36"/>
      <stop offset="50%" stop-color="#2D114B"/>
      <stop offset="100%" stop-color="#4B2E83"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0D77B"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#B8860B"/>
    </linearGradient>
  </defs>
  <rect width="600" height="450" fill="url(#pichwaiBg)"/>
  <!-- Ornate Floral Border -->
  <rect x="18" y="18" width="564" height="414" fill="none" stroke="url(#goldGrad)" stroke-width="3" stroke-dasharray="10,6"/>
  <rect x="28" y="28" width="544" height="394" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <!-- Central Shrinathji Kadamba Tree & Lotus Pond -->
  <circle cx="300" cy="210" r="130" fill="none" stroke="url(#goldGrad)" stroke-width="2"/>
  <path d="M300,90 Q340,150 300,210 Q260,150 300,90" fill="#D4AF37" opacity="0.85"/>
  <circle cx="300" cy="210" r="60" fill="#240E40" stroke="url(#goldGrad)" stroke-width="3"/>
  <!-- Shrinathji Divine Eyes & Tilak -->
  <ellipse cx="282" cy="205" rx="12" ry="6" fill="#FFF2C6"/>
  <circle cx="282" cy="205" r="4" fill="#1E0D36"/>
  <ellipse cx="318" cy="205" rx="12" ry="6" fill="#FFF2C6"/>
  <circle cx="318" cy="205" r="4" fill="#1E0D36"/>
  <path d="M300,180 L300,225 M292,192 Q300,202 308,192" fill="none" stroke="#E67E22" stroke-width="2.5"/>
  <!-- Sacred Cows & Blooming Lotuses -->
  <g fill="url(#goldGrad)" opacity="0.9">
    <ellipse cx="140" cy="320" rx="35" ry="20"/>
    <circle cx="115" cy="310" r="14"/>
    <ellipse cx="460" cy="320" rx="35" ry="20"/>
    <circle cx="485" cy="310" r="14"/>
    <path d="M140,320 L135,350 M155,320 L155,350 M445,320 L445,350 M465,320 L465,350" stroke="#D4AF37" stroke-width="3"/>
    <!-- Lotus Blossoms -->
    <circle cx="300" cy="360" r="18" fill="#F0D77B"/>
    <path d="M280,360 Q300,335 320,360 Q300,385 280,360" fill="#D4AF37"/>
  </g>
  <text x="300" y="420" font-family="'Playfair Display', Georgia, serif" font-size="16" font-weight="bold" fill="#F0D77B" text-anchor="middle" letter-spacing="3">NATHDWARA PICHWAI TRADITION</text>
</svg>`;

const mughalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="mughalBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#240E40"/>
      <stop offset="50%" stop-color="#3B1358"/>
      <stop offset="100%" stop-color="#1A0D33"/>
    </linearGradient>
    <linearGradient id="hasliyaGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF2C6"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#996515"/>
    </linearGradient>
  </defs>
  <rect width="600" height="450" fill="url(#mughalBg)"/>
  <!-- Hasliya Floral Foliated Border -->
  <rect x="20" y="20" width="560" height="410" fill="none" stroke="url(#hasliyaGold)" stroke-width="6"/>
  <rect x="34" y="34" width="532" height="382" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- Symmetrical Mughal Arch (Mehrab) -->
  <path d="M120,400 L120,200 Q120,100 300,80 Q480,100 480,200 L480,400 Z" fill="#1E0D36" stroke="url(#hasliyaGold)" stroke-width="3"/>
  <!-- Durbar Throne & Royal Canopy -->
  <path d="M220,180 L380,180 L300,120 Z" fill="url(#hasliyaGold)"/>
  <rect x="250" y="240" width="100" height="80" rx="8" fill="#3E196B" stroke="#D4AF37" stroke-width="2"/>
  <circle cx="300" cy="225" r="22" fill="#F0D77B"/>
  <!-- Royal Falcon / Hawk Motif -->
  <path d="M290,260 Q300,240 310,260 Q325,270 300,285 Q275,270 290,260" fill="url(#hasliyaGold)"/>
  <!-- Symmetrical Floral Vines -->
  <g stroke="url(#hasliyaGold)" stroke-width="1.5" fill="none">
    <path d="M60,100 Q100,120 70,160 Q110,180 80,240 Q120,300 80,360"/>
    <path d="M540,100 Q500,120 530,160 Q490,180 520,240 Q480,300 520,360"/>
  </g>
  <text x="300" y="420" font-family="'Playfair Display', Georgia, serif" font-size="16" font-weight="bold" fill="#F0D77B" text-anchor="middle" letter-spacing="3">MUGHAL COURT MINIATURE ATELIER</text>
</svg>`;

const thangkaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="thangkaBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A0D33"/>
      <stop offset="50%" stop-color="#2D114B"/>
      <stop offset="100%" stop-color="#140826"/>
    </linearGradient>
    <linearGradient id="silkGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF2C6"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#B8860B"/>
    </linearGradient>
  </defs>
  <rect width="600" height="450" fill="url(#thangkaBg)"/>
  <!-- Silk Brocade Border Frame -->
  <rect x="22" y="22" width="556" height="406" fill="none" stroke="url(#silkGold)" stroke-width="4"/>
  <rect x="36" y="36" width="528" height="378" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
  <!-- Concentric Mandala Geometry -->
  <circle cx="300" cy="210" r="125" fill="#240E40" stroke="url(#silkGold)" stroke-width="2"/>
  <circle cx="300" cy="210" r="95" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="6,4"/>
  <polygon points="300,115 395,210 300,305 205,210" fill="none" stroke="url(#silkGold)" stroke-width="2"/>
  <polygon points="300,125 385,210 300,295 215,210" fill="none" stroke="#F0D77B" stroke-width="1"/>
  <!-- Meditating Buddha / Bodhisattva Silhouette -->
  <circle cx="300" cy="180" r="22" fill="#F0D77B"/>
  <path d="M265,245 Q300,215 335,245 L345,260 Q300,270 255,260 Z" fill="url(#silkGold)"/>
  <!-- Double Dorje (Vajra) Cross -->
  <path d="M285,210 L315,210 M300,195 L300,225" stroke="#FFF2C6" stroke-width="3"/>
  <!-- Eight Auspicious Symbols Accents -->
  <circle cx="160" cy="140" r="14" fill="none" stroke="url(#silkGold)" stroke-width="1.5"/>
  <circle cx="440" cy="140" r="14" fill="none" stroke="url(#silkGold)" stroke-width="1.5"/>
  <circle cx="160" cy="280" r="14" fill="none" stroke="url(#silkGold)" stroke-width="1.5"/>
  <circle cx="440" cy="280" r="14" fill="none" stroke="url(#silkGold)" stroke-width="1.5"/>
  <text x="300" y="420" font-family="'Playfair Display', Georgia, serif" font-size="16" font-weight="bold" fill="#F0D77B" text-anchor="middle" letter-spacing="3">HIMALAYAN THANGKA MEDITATION SCROLL</text>
</svg>`;

fs.writeFileSync('art/pichwai.svg', pichwaiSvg);
fs.writeFileSync('art/mughal.svg', mughalSvg);
fs.writeFileSync('art/thangka.svg', thangkaSvg);

fs.writeFileSync('public/art/pichwai.svg', pichwaiSvg);
fs.writeFileSync('public/art/mughal.svg', mughalSvg);
fs.writeFileSync('public/art/thangka.svg', thangkaSvg);

console.log('Successfully generated missing SVGs for Pichwai, Mughal, and Thangka!');
