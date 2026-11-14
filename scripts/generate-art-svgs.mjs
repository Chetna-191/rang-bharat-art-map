// Script to generate all 20 authentic Indian art SVG templates in public/art/
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/art');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const svgs = {};

// 1. Warli Tribal Painting
svgs['warli.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="warliBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#843926" />
      <stop offset="70%" stop-color="#692819" />
      <stop offset="100%" stop-color="#4B1B10" />
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#warliBg)" />
  <rect x="24" y="24" width="752" height="552" fill="none" stroke="#F5EFE6" stroke-width="4" />
  <rect x="34" y="34" width="732" height="532" fill="none" stroke="#F5EFE6" stroke-width="1.5" stroke-dasharray="8,6" />

  <!-- Sun & Moon -->
  <g transform="translate(110, 100)">
    <circle cx="0" cy="0" r="28" fill="#F5EFE6" />
    <path d="M0,-38 L0,-50 M0,38 L0,50 M-38,0 L-50,0 M38,0 L50,0 M-27,-27 L-36,-36 M27,27 L36,36 M-27,27 L-36,36 M27,-27 L36,-36" stroke="#F5EFE6" stroke-width="3" stroke-linecap="round" />
  </g>
  <g transform="translate(690, 100)">
    <path d="M-15,-25 A 30 30 0 1 0 25 25 A 24 24 0 1 1 -15 -25 Z" fill="#F5EFE6" />
  </g>

  <!-- Sacred Tree of Life -->
  <g transform="translate(140, 500)">
    <line x1="0" y1="0" x2="0" y2="-230" stroke="#F5EFE6" stroke-width="7" />
    <polygon points="0,-250 -35,-200 35,-200" fill="#F5EFE6" />
    <polygon points="0,-200 -55,-150 55,-150" fill="#F5EFE6" />
    <polygon points="0,-150 -70,-100 70,-100" fill="#F5EFE6" />
    <polygon points="0,-100 -85,-50 85,-50" fill="#F5EFE6" />
  </g>

  <!-- Central Tarpa Musician -->
  <g transform="translate(420, 310)">
    <circle cx="0" cy="-35" r="9" fill="#F5EFE6" />
    <polygon points="0,-26 -14,-7 14,-7" fill="#F5EFE6" />
    <polygon points="0,12 -14,-7 14,-7" fill="#F5EFE6" />
    <line x1="-7" y1="12" x2="-12" y2="36" stroke="#F5EFE6" stroke-width="3" />
    <line x1="7" y1="12" x2="12" y2="36" stroke="#F5EFE6" stroke-width="3" />
    <path d="M6,-18 L48,-42 L52,-36 L10,-12 Z" fill="#F5EFE6" />
    <path d="M48,-46 C60,-40 60,-25 45,-25 Z" fill="#F5EFE6" />
  </g>

  <!-- Concentric Dancers (Inner Ring) -->
  <g stroke="#F5EFE6" stroke-width="2.5" fill="#F5EFE6">
    ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => {
      const rad = (deg * Math.PI) / 180;
      const x = 420 + Math.cos(rad) * 90;
      const y = 310 + Math.sin(rad) * 90;
      return `<g transform="translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${deg + 90}) scale(0.65)">
        <circle cx="0" cy="-28" r="8" fill="#F5EFE6" />
        <polygon points="0,-20 -12,-4 12,-4" fill="#F5EFE6" />
        <polygon points="0,12 -12,-4 12,-4" fill="#F5EFE6" />
        <line x1="-6" y1="12" x2="-10" y2="30" stroke="#F5EFE6" stroke-width="3" />
        <line x1="6" y1="12" x2="10" y2="30" stroke="#F5EFE6" stroke-width="3" />
        <line x1="-12" y1="-4" x2="-22" y2="-12" stroke="#F5EFE6" stroke-width="3" />
        <line x1="12" y1="-4" x2="22" y2="-12" stroke="#F5EFE6" stroke-width="3" />
      </g>`;
    }).join('')}

    <!-- Outer Ring Dancers -->
    ${[15, 37.5, 60, 82.5, 105, 127.5, 150, 172.5, 195, 217.5, 240, 262.5, 285, 307.5, 330, 352.5].map(deg => {
      const rad = (deg * Math.PI) / 180;
      const x = 420 + Math.cos(rad) * 165;
      const y = 310 + Math.sin(rad) * 165;
      return `<g transform="translate(${x.toFixed(1)}, ${y.toFixed(1)}) rotate(${deg + 90}) scale(0.7)">
        <circle cx="0" cy="-28" r="8" fill="#F5EFE6" />
        <polygon points="0,-20 -12,-4 12,-4" fill="#F5EFE6" />
        <polygon points="0,12 -12,-4 12,-4" fill="#F5EFE6" />
        <line x1="-6" y1="12" x2="-10" y2="30" stroke="#F5EFE6" stroke-width="3" />
        <line x1="6" y1="12" x2="10" y2="30" stroke="#F5EFE6" stroke-width="3" />
        <line x1="-12" y1="-4" x2="-22" y2="-12" stroke="#F5EFE6" stroke-width="3" />
        <line x1="12" y1="-4" x2="22" y2="-12" stroke="#F5EFE6" stroke-width="3" />
      </g>`;
    }).join('')}
  </g>

  <!-- Village Animals and Hut -->
  <g transform="translate(640, 480)">
    <polygon points="0,-80 -55,0 55,0" fill="none" stroke="#F5EFE6" stroke-width="4" />
    <rect x="-45" y="0" width="90" height="60" fill="none" stroke="#F5EFE6" stroke-width="4" />
    <line x1="-45" y1="30" x2="45" y2="30" stroke="#F5EFE6" stroke-width="2" />
  </g>
</svg>`;

// 2. Madhubani / Mithila Painting
svgs['madhubani.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="mithilaBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBF4E4" />
      <stop offset="100%" stop-color="#EFE2C6" />
    </linearGradient>
    <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#1D2A44" stroke-width="1.2" />
    </pattern>
  </defs>

  <!-- Handmade Paper Texture Base -->
  <rect width="800" height="600" fill="url(#mithilaBg)" />

  <!-- Double-Line Ornate Border -->
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#1D2A44" stroke-width="4" />
  <rect x="35" y="35" width="730" height="530" fill="none" stroke="#B83B26" stroke-width="3" />
  <rect x="45" y="45" width="710" height="510" fill="none" stroke="#1D2A44" stroke-width="2" />

  <!-- Border Floral / Geometric Motifs -->
  ${[60, 140, 220, 300, 380, 460, 540, 620, 700].map(x => `
    <circle cx="${x}" cy="35" r="5" fill="#E59B27" stroke="#1D2A44" stroke-width="1.5" />
    <circle cx="${x}" cy="565" r="5" fill="#E59B27" stroke="#1D2A44" stroke-width="1.5" />
  `).join('')}

  <!-- Majestic Mithila Peacock (Mayura) -->
  <g transform="translate(420, 330)">
    <!-- Radiating Tail Feathers -->
    ${[-60, -45, -30, -15, 0, 15, 30, 45, 60, 75, 90].map(angle => `
      <g transform="rotate(${angle})">
        <path d="M0,0 C-40,-120 -80,-200 0,-240 C80,-200 40,-120 0,0" fill="#2E7D5B" stroke="#1D2A44" stroke-width="3" />
        <path d="M0,-60 C-25,-120 -40,-180 0,-210 C40,-180 25,-120 0,-60" fill="#E59B27" stroke="#1D2A44" stroke-width="2" />
        <circle cx="0" cy="-180" r="14" fill="#B83B26" stroke="#1D2A44" stroke-width="2" />
        <circle cx="0" cy="-180" r="7" fill="#1D2A44" />
      </g>
    `).join('')}

    <!-- Peacock Body -->
    <path d="M-40,60 C-80,0 -60,-80 0,-90 C40,-90 60,-50 40,20 C30,60 0,80 -40,60 Z" fill="#205B82" stroke="#1D2A44" stroke-width="4" />
    
    <!-- Fine Cross-Hatching (Kachni Style) -->
    <path d="M-25,40 C-50,0 -40,-60 0,-70 C25,-70 40,-40 25,10 Z" fill="url(#hatch)" stroke="#1D2A44" stroke-width="1.5" opacity="0.6" />

    <!-- Neck & Head with Crown (Kalgi) -->
    <path d="M-10,-85 C-20,-130 -10,-160 15,-170 C30,-175 40,-160 30,-140 C20,-120 15,-100 15,-80 Z" fill="#205B82" stroke="#1D2A44" stroke-width="3.5" />
    <!-- Beak -->
    <polygon points="35,-168 55,-165 35,-160" fill="#E59B27" stroke="#1D2A44" stroke-width="2" />
    <!-- Eye (Distinctive Fish-Shape / Almond) -->
    <ellipse cx="22" cy="-162" rx="7" ry="5" fill="#FFFFFF" stroke="#1D2A44" stroke-width="2" />
    <circle cx="24" cy="-162" r="3" fill="#1D2A44" />
    <!-- Crest / Kalgi -->
    <path d="M12,-175 Q5,-195 0,-200 M18,-177 Q20,-202 24,-208 M22,-175 Q32,-195 40,-200" stroke="#1D2A44" stroke-width="2.5" fill="none" />
    <circle cx="0" cy="-200" r="4" fill="#B83B26" />
    <circle cx="24" cy="-208" r="4" fill="#E59B27" />
    <circle cx="40" cy="-200" r="4" fill="#2E7D5B" />

    <!-- Claws / Perch -->
    <path d="M-15,70 L-25,110 M-10,75 L0,110 M20,65 L15,110 M25,70 L35,110" stroke="#1D2A44" stroke-width="4" stroke-linecap="round" />
  </g>

  <!-- Sacred Twin Fish (Matsya) Motif -->
  <g transform="translate(140, 160)">
    <path d="M-50,0 C-20,-30 40,-20 70,0 C40,20 -20,30 -50,0 Z" fill="#E59B27" stroke="#1D2A44" stroke-width="3" />
    <polygon points="-50,0 -80,-20 -70,0 -80,20" fill="#B83B26" stroke="#1D2A44" stroke-width="2" />
    <circle cx="45" cy="-3" r="5" fill="#FFFFFF" stroke="#1D2A44" stroke-width="2" />
    <circle cx="47" cy="-3" r="2" fill="#1D2A44" />
    <line x1="-10" y1="-18" x2="-10" y2="18" stroke="#1D2A44" stroke-width="2" />
    <line x1="10" y1="-16" x2="10" y2="16" stroke="#1D2A44" stroke-width="2" />
    <line x1="30" y1="-12" x2="30" y2="12" stroke="#1D2A44" stroke-width="2" />
  </g>

  <!-- Radiant Mithila Sun God -->
  <g transform="translate(680, 130)">
    <circle cx="0" cy="0" r="32" fill="#B83B26" stroke="#1D2A44" stroke-width="3" />
    <!-- Sun Facial Features -->
    <ellipse cx="-10" cy="-5" rx="5" ry="3.5" fill="#FFFFFF" stroke="#1D2A44" stroke-width="1.5" />
    <ellipse cx="10" cy="-5" rx="5" ry="3.5" fill="#FFFFFF" stroke="#1D2A44" stroke-width="1.5" />
    <circle cx="-10" cy="-5" r="2" fill="#1D2A44" />
    <circle cx="10" cy="-5" r="2" fill="#1D2A44" />
    <path d="M-10,12 Q0,20 10,12" stroke="#1D2A44" stroke-width="2" fill="none" />
    <circle cx="0" cy="2" r="3" fill="#E59B27" />
    <!-- Rays -->
    ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => `
      <line x1="${(Math.cos(a * Math.PI / 180) * 36).toFixed(1)}" y1="${(Math.sin(a * Math.PI / 180) * 36).toFixed(1)}" x2="${(Math.cos(a * Math.PI / 180) * 48).toFixed(1)}" y2="${(Math.sin(a * Math.PI / 180) * 48).toFixed(1)}" stroke="#E59B27" stroke-width="3" stroke-linecap="round" />
    `).join('')}
  </g>

  <!-- Sacred Lotus (Kamala) at base -->
  <g transform="translate(180, 480)">
    <path d="M0,0 C-30,-50 -60,-20 0,-80 C60,-20 30,-50 0,0" fill="#B83B26" stroke="#1D2A44" stroke-width="3" />
    <path d="M0,0 C-50,-20 -80,10 -30,-40" fill="#2E7D5B" stroke="#1D2A44" stroke-width="2" />
    <path d="M0,0 C50,-20 80,10 30,-40" fill="#2E7D5B" stroke="#1D2A44" stroke-width="2" />
  </g>
</svg>`;

// 3. Kalamkari
svgs['kalamkari.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="kalamBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F2E8D3" />
      <stop offset="100%" stop-color="#E5D6BB" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#kalamBg)" />

  <!-- Botanical Border -->
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#2B1E16" stroke-width="5" />
  <rect x="35" y="35" width="730" height="530" fill="none" stroke="#8A2424" stroke-width="3" />

  <!-- The Sacred Tree of Life (Kalpavriksha) -->
  <g transform="translate(400, 520)">
    <!-- Mighty Gnarled Trunk with Natural Iron-Black Outlines -->
    <path d="M-25,0 C-40,-80 -15,-150 -35,-230 C-45,-270 -80,-300 -120,-320 M-10,-160 C10,-220 50,-260 90,-290 M-20,-240 C-10,-310 10,-370 20,-430 M25,0 C15,-70 30,-140 15,-200 C50,-240 120,-270 180,-290" stroke="#2B1E16" stroke-width="12" fill="none" stroke-linecap="round" />
    
    <!-- Rich Curving Foliage Branches in Madder Red & Indigo -->
    <g fill="#8A2424" stroke="#2B1E16" stroke-width="2.5">
      <!-- Flowering Leaves -->
      <path d="M-120,-320 C-180,-320 -190,-380 -130,-370 C-100,-365 -90,-330 -120,-320 Z" />
      <path d="M90,-290 C150,-290 170,-340 120,-360 C80,-350 70,-310 90,-290 Z" />
      <path d="M20,-430 C-30,-480 30,-510 60,-460 C70,-430 40,-410 20,-430 Z" />
      <path d="M-35,-230 C-90,-230 -110,-200 -70,-180 C-40,-170 -30,-210 -35,-230 Z" />
      <path d="M15,-200 C70,-190 90,-160 50,-150 C20,-140 10,-180 15,-200 Z" />
    </g>

    <!-- Indigo Blue Lotus Blossoms -->
    <g fill="#234B68" stroke="#2B1E16" stroke-width="2.5">
      <path d="M-150,-350 C-170,-390 -130,-410 -110,-380 C-100,-360 -130,-340 -150,-350 Z" />
      <path d="M140,-310 C180,-330 190,-290 160,-270 C140,-260 120,-290 140,-310 Z" />
      <path d="M-10,-460 C-20,-500 20,-510 30,-480 C30,-450 0,-440 -10,-460 Z" />
    </g>

    <!-- Kalamkari Birds (Hamsa / Parrot) -->
    <g transform="translate(-80, -280) scale(0.8)">
      <path d="M0,0 C-30,-30 -20,-70 20,-60 C50,-50 60,-20 40,10 C10,40 -20,30 0,0 Z" fill="#DDA135" stroke="#2B1E16" stroke-width="3" />
      <polygon points="40,-45 70,-50 45,-35" fill="#8A2424" stroke="#2B1E16" stroke-width="2" />
      <circle cx="25" cy="-45" r="4" fill="#FFFFFF" stroke="#2B1E16" stroke-width="1.5" />
      <circle cx="27" cy="-45" r="1.5" fill="#2B1E16" />
      <!-- Tail Plumes -->
      <path d="M-20,10 C-60,30 -80,10 -100,40 C-70,50 -40,30 -10,20 Z" fill="#234B68" stroke="#2B1E16" stroke-width="2.5" />
    </g>

    <g transform="translate(100, -240) scale(-0.7, 0.7)">
      <path d="M0,0 C-30,-30 -20,-70 20,-60 C50,-50 60,-20 40,10 C10,40 -20,30 0,0 Z" fill="#DDA135" stroke="#2B1E16" stroke-width="3" />
      <polygon points="40,-45 70,-50 45,-35" fill="#8A2424" stroke="#2B1E16" stroke-width="2" />
      <circle cx="25" cy="-45" r="4" fill="#FFFFFF" stroke="#2B1E16" stroke-width="1.5" />
      <circle cx="27" cy="-45" r="1.5" fill="#2B1E16" />
      <path d="M-20,10 C-60,30 -80,10 -100,40 C-70,50 -40,30 -10,20 Z" fill="#234B68" stroke="#2B1E16" stroke-width="2.5" />
    </g>

    <!-- Deer at Tree Base -->
    <g transform="translate(-160, -40) scale(0.9)">
      <path d="M0,0 C20,-20 60,-20 80,0 L70,40 L60,40 L65,10 L15,10 L10,40 L0,40 Z" fill="#DDA135" stroke="#2B1E16" stroke-width="2.5" />
      <path d="M0,0 C-10,-20 -5,-40 10,-45 C20,-45 25,-30 15,-15 Z" fill="#DDA135" stroke="#2B1E16" stroke-width="2.5" />
      <!-- Antlers -->
      <path d="M8,-45 Q15,-65 25,-60 M12,-52 Q5,-60 2,-55" stroke="#2B1E16" stroke-width="2" fill="none" />
    </g>
  </g>
</svg>`;

// 4. Pattachitra
svgs['pattachitra.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="pattaBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#A5261E" />
      <stop offset="100%" stop-color="#5E0F0B" />
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#pattaBg)" />

  <!-- Intricate Red & Gold Temple Floral Border -->
  <rect x="20" y="20" width="760" height="560" fill="none" stroke="#DCA233" stroke-width="8" />
  <rect x="36" y="36" width="728" height="528" fill="none" stroke="#FAF5EB" stroke-width="3" />
  <rect x="46" y="46" width="708" height="508" fill="none" stroke="#DCA233" stroke-width="2" stroke-dasharray="10,6" />

  <!-- Triad of Puri: Jagannath (Center/Right), Balabhadra (Left), Subhadra (Center) -->
  
  <!-- Lord Balabhadra (White Face) -->
  <g transform="translate(220, 290)">
    <!-- Ornate Crown (Kirita Mukuta) -->
    <path d="M-60,-80 L0,-160 L60,-80 Z" fill="#DCA233" stroke="#111" stroke-width="3" />
    <circle cx="0" cy="-160" r="10" fill="#A5261E" stroke="#DCA233" stroke-width="2" />
    <!-- White Face -->
    <ellipse cx="0" cy="0" rx="70" ry="75" fill="#FAF5EB" stroke="#111" stroke-width="5" />
    <!-- Iconic Large Round Eyes -->
    <ellipse cx="-28" cy="-5" rx="22" ry="22" fill="#A5261E" stroke="#111" stroke-width="2" />
    <ellipse cx="-28" cy="-5" rx="18" ry="18" fill="#FAF5EB" />
    <circle cx="-28" cy="-5" r="9" fill="#111" />
    <ellipse cx="28" cy="-5" rx="22" ry="22" fill="#A5261E" stroke="#111" stroke-width="2" />
    <ellipse cx="28" cy="-5" rx="18" ry="18" fill="#FAF5EB" />
    <circle cx="28" cy="-5" r="9" fill="#111" />
    <!-- Sacred Tilak & Mouth -->
    <path d="M-15,-40 C-10,-55 10,-55 15,-40 C0,-45 -10,-45 -15,-40" fill="#A5261E" />
    <path d="M-30,42 Q0,65 30,42 Q0,48 -30,42 Z" fill="#A5261E" stroke="#111" stroke-width="2" />
  </g>

  <!-- Goddess Subhadra (Yellow Face) -->
  <g transform="translate(400, 310)">
    <path d="M-40,-70 L0,-140 L40,-70 Z" fill="#DCA233" stroke="#111" stroke-width="2.5" />
    <circle cx="0" cy="-140" r="8" fill="#A5261E" />
    <ellipse cx="0" cy="0" rx="45" ry="58" fill="#F4B938" stroke="#111" stroke-width="4" />
    <!-- Oval Lotus Eyes -->
    <ellipse cx="-16" cy="-4" rx="12" ry="15" fill="#FAF5EB" stroke="#111" stroke-width="2" />
    <circle cx="-16" cy="-4" r="6" fill="#111" />
    <ellipse cx="16" cy="-4" rx="12" ry="15" fill="#FAF5EB" stroke="#111" stroke-width="2" />
    <circle cx="16" cy="-4" r="6" fill="#111" />
    <!-- Smile -->
    <path d="M-16,32 Q0,45 16,32" stroke="#A5261E" stroke-width="3" fill="none" />
  </g>

  <!-- Lord Jagannath (Black Face with Fiery Red Lips & Round Eyes) -->
  <g transform="translate(580, 290)">
    <!-- Ornate Golden Mukuta -->
    <path d="M-65,-80 L0,-165 L65,-80 Z" fill="#DCA233" stroke="#111" stroke-width="3" />
    <circle cx="0" cy="-165" r="12" fill="#A5261E" stroke="#DCA233" stroke-width="2" />
    <!-- Deep Black Face -->
    <ellipse cx="0" cy="0" rx="75" ry="78" fill="#1C1818" stroke="#FAF5EB" stroke-width="4" />
    <!-- Huge Sacred Round Eyes -->
    <circle cx="-30" cy="-5" r="26" fill="#A5261E" />
    <circle cx="-30" cy="-5" r="22" fill="#FAF5EB" />
    <circle cx="-30" cy="-5" r="11" fill="#111" />
    <circle cx="30" cy="-5" r="26" fill="#A5261E" />
    <circle cx="30" cy="-5" r="22" fill="#FAF5EB" />
    <circle cx="30" cy="-5" r="11" fill="#111" />
    <!-- Distinctive Sacred Tilak -->
    <path d="M-18,-42 C-10,-60 10,-60 18,-42 C0,-48 -10,-48 -18,-42" fill="#FAF5EB" />
    <circle cx="0" cy="-35" r="6" fill="#A5261E" />
    <!-- Big Crescent Red Smile -->
    <path d="M-36,44 Q0,74 36,44 Q0,50 -36,44 Z" fill="#A5261E" stroke="#FAF5EB" stroke-width="2.5" />
  </g>

  <!-- Title Ribbon -->
  <g transform="translate(400, 520)">
    <rect x="-160" y="-20" width="320" height="40" rx="6" fill="#241410" stroke="#DCA233" stroke-width="2" />
    <text x="0" y="6" font-family="'Playfair Display', serif" font-size="18" font-weight="bold" fill="#DCA233" text-anchor="middle">
      Puri Jagannath Pattachitra
    </text>
  </g>
</svg>`;

// 5. Tanjore Painting (Navaneetha Krishna with 22k Gold Foil Arch)
svgs['tanjore.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="tanjoreBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#4E0F14" />
      <stop offset="80%" stop-color="#2D0609" />
      <stop offset="100%" stop-color="#1A0204" />
    </radialGradient>
    <linearGradient id="goldLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE77A" />
      <stop offset="40%" stop-color="#E2B134" />
      <stop offset="80%" stop-color="#B88014" />
      <stop offset="100%" stop-color="#E9C149" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#tanjoreBg)" />

  <!-- Teak Wood Gilded Frame -->
  <rect x="20" y="20" width="760" height="560" fill="none" stroke="url(#goldLeaf)" stroke-width="14" />
  <rect x="36" y="36" width="728" height="528" fill="none" stroke="#1A0204" stroke-width="3" />

  <!-- Grand Ornate Temple Prabhavali Arch (Gesso Relief with Rubies & Emeralds) -->
  <g transform="translate(400, 80)">
    <!-- Main Arch Curve -->
    <path d="M-220,440 L-220,160 C-220,-20 220,-20 220,160 L220,440" fill="none" stroke="url(#goldLeaf)" stroke-width="28" />
    <!-- Arch Carvings (Kirtimukha at apex) -->
    <circle cx="0" cy="-30" r="30" fill="url(#goldLeaf)" stroke="#5A1A05" stroke-width="2" />
    <circle cx="0" cy="-30" r="14" fill="#A81822" stroke="url(#goldLeaf)" stroke-width="2" />
    <!-- Pillars with Jewels -->
    ${[-220, 220].map(px => `
      <circle cx="${px}" cy="100" r="8" fill="#187834" stroke="url(#goldLeaf)" stroke-width="2" />
      <circle cx="${px}" cy="200" r="8" fill="#A81822" stroke="url(#goldLeaf)" stroke-width="2" />
      <circle cx="${px}" cy="300" r="8" fill="#187834" stroke="url(#goldLeaf)" stroke-width="2" />
      <circle cx="${px}" cy="400" r="8" fill="#A81822" stroke="url(#goldLeaf)" stroke-width="2" />
    `).join('')}
  </g>

  <!-- Infant Lord Krishna (Navaneetha Krishna) -->
  <g transform="translate(400, 310)">
    <!-- Glowing Halo (Prabhavali Aura) -->
    <circle cx="0" cy="-70" r="85" fill="none" stroke="url(#goldLeaf)" stroke-width="8" stroke-dasharray="10,6" />
    <circle cx="0" cy="-70" r="70" fill="#2E4F74" opacity="0.3" />

    <!-- Cute Plump Face -->
    <circle cx="0" cy="-60" r="54" fill="#8FB4D6" stroke="#2B4660" stroke-width="3" />
    <!-- Crown with Peacock Feather -->
    <path d="M-35,-105 L0,-155 L35,-105 Z" fill="url(#goldLeaf)" stroke="#5A1A05" stroke-width="2" />
    <!-- Peacock Feather (Mor Pankh) -->
    <ellipse cx="20" cy="-160" rx="16" ry="24" fill="#187834" stroke="url(#goldLeaf)" stroke-width="2" />
    <ellipse cx="20" cy="-160" rx="9" ry="14" fill="#245199" />
    <ellipse cx="20" cy="-160" rx="4" ry="7" fill="#E2B134" />
    <!-- Eyes, Tilak, Smile -->
    <ellipse cx="-18" cy="-62" rx="9" ry="6" fill="#FFF" stroke="#2B4660" stroke-width="1.5" />
    <circle cx="-16" cy="-62" r="3.5" fill="#111" />
    <ellipse cx="18" cy="-62" rx="9" ry="6" fill="#FFF" stroke="#2B4660" stroke-width="1.5" />
    <circle cx="16" cy="-62" r="3.5" fill="#111" />
    <path d="M-5,-90 L0,-70 L5,-90 Z" fill="#FFF" />
    <circle cx="0" cy="-80" r="3" fill="#A81822" />
    <path d="M-12,-40 Q0,-25 12,-40" stroke="#A81822" stroke-width="3.5" fill="none" stroke-linecap="round" />

    <!-- Golden Necklaces & Gem-Encrusted Garlands -->
    <path d="M-35,-25 C-30,45 30,45 35,-25" fill="none" stroke="url(#goldLeaf)" stroke-width="12" />
    <circle cx="0" cy="35" r="9" fill="#A81822" stroke="url(#goldLeaf)" stroke-width="2" />

    <!-- Plump Baby Body in Crawling / Butter Pot Pose -->
    <ellipse cx="0" cy="50" rx="60" ry="50" fill="#8FB4D6" stroke="#2B4660" stroke-width="3" />
    <!-- Butter Pot (Makhan Matki) -->
    <circle cx="75" cy="55" r="38" fill="url(#goldLeaf)" stroke="#5A1A05" stroke-width="3" />
    <path d="M50,30 Q75,10 100,30" stroke="url(#goldLeaf)" stroke-width="4" fill="none" />
    <path d="M60,35 Q75,25 90,35" fill="#FAF5EB" stroke="#DCA233" stroke-width="1.5" />
    <!-- Baby Hand in Pot -->
    <ellipse cx="45" cy="35" rx="14" ry="12" fill="#8FB4D6" stroke="#2B4660" stroke-width="2" />
  </g>
</svg>`;

// 6. Mysore Painting (Goddess Saraswati with Veena)
svgs['mysore.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="mysoreBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7EEDC" />
      <stop offset="100%" stop-color="#E2CCA6" />
    </linearGradient>
    <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5D061" />
      <stop offset="100%" stop-color="#C29424" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#mysoreBg)" />
  <!-- Delicate Mysore Palace Cusped Arch -->
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#684A22" stroke-width="4" />
  <path d="M60,550 L60,200 Q200,60 400,60 Q600,60 740,200 L740,550" fill="none" stroke="url(#goldTrim)" stroke-width="10" />

  <!-- Goddess Saraswati -->
  <g transform="translate(400, 310)">
    <!-- White Lotus Seat (Padmasana) -->
    <g transform="translate(0, 170)">
      <path d="M0,0 C-70,-30 -140,20 -180,0 C-120,40 -60,40 0,30 C60,40 120,40 180,0 C140,20 70,-30 0,0" fill="#FFFFFF" stroke="#D6A53A" stroke-width="3" />
      <path d="M0,0 C-40,-50 -80,-10 -110,-30 C-70,-10 -40,10 0,15 C40,10 70,-10 110,-30 C80,-10 40,-50 0,0" fill="#FFF5E5" stroke="#D6A53A" stroke-width="2" />
    </g>

    <!-- Glowing Halo -->
    <circle cx="0" cy="-90" r="60" fill="none" stroke="url(#goldTrim)" stroke-width="4" stroke-dasharray="6,4" />

    <!-- Royal Face & Crown -->
    <ellipse cx="0" cy="-80" rx="36" ry="42" fill="#FCEAD0" stroke="#7A4D1A" stroke-width="2.5" />
    <!-- Ornate Mysore Gold Mukuta -->
    <path d="M-28,-115 L0,-175 L28,-115 Z" fill="url(#goldTrim)" stroke="#5E380D" stroke-width="2" />
    <circle cx="0" cy="-175" r="7" fill="#A82020" />
    <!-- Serene Eyes & Sacred Tilak -->
    <ellipse cx="-14" cy="-82" rx="7" ry="4" fill="#FFF" stroke="#333" stroke-width="1.2" />
    <circle cx="-13" cy="-82" r="2.5" fill="#222" />
    <ellipse cx="14" cy="-82" rx="7" ry="4" fill="#FFF" stroke="#333" stroke-width="1.2" />
    <circle cx="15" cy="-82" r="2.5" fill="#222" />
    <circle cx="0" cy="-95" r="3" fill="#A82020" />
    <path d="M-8,-62 Q0,-55 8,-62" stroke="#A82020" stroke-width="2" fill="none" />

    <!-- White & Gold Silk Saree Drapery -->
    <path d="M-45,-20 C-60,70 -80,140 -90,170 L90,170 C80,140 60,70 45,-20 Z" fill="#FFFDF8" stroke="#D6A53A" stroke-width="3" />
    <path d="M-20,-10 L-70,165 M20,-10 L70,165" stroke="url(#goldTrim)" stroke-width="5" />

    <!-- The Classical Musical Veena -->
    <g transform="rotate(-30) translate(-30, 20)">
      <ellipse cx="-90" cy="0" rx="35" ry="32" fill="#824718" stroke="#3D1D05" stroke-width="3" />
      <rect x="-90" y="-8" width="220" height="16" rx="6" fill="#A86128" stroke="#3D1D05" stroke-width="2.5" />
      <circle cx="130" cy="0" r="18" fill="url(#goldTrim)" stroke="#3D1D05" stroke-width="2" />
      <line x1="-80" y1="-3" x2="120" y2="-3" stroke="#F5D061" stroke-width="1.5" />
      <line x1="-80" y1="3" x2="120" y2="3" stroke="#F5D061" stroke-width="1.5" />
    </g>

    <!-- Sacred Swan (Hamsa) at left -->
    <g transform="translate(-180, 110) scale(0.7)">
      <path d="M0,0 C-30,-20 -40,-60 -10,-60 C10,-60 20,-30 40,-20 C60,-10 70,20 40,30 C10,40 -10,20 0,0 Z" fill="#FFFFFF" stroke="#8A6529" stroke-width="2.5" />
      <polygon points="-10,-60 -35,-55 -15,-50" fill="#D6A53A" stroke="#8A6529" stroke-width="1.5" />
      <circle cx="-10" cy="-55" r="2" fill="#111" />
    </g>
  </g>
</svg>`;

// 7. Kangra Miniature Painting (Radha & Krishna in Pahari Grove)
svgs['kangra.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="skyHills" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FCE1BE" />
      <stop offset="35%" stop-color="#D7E7C8" />
      <stop offset="70%" stop-color="#7EA665" />
      <stop offset="100%" stop-color="#3D6832" />
    </linearGradient>
  </defs>
  <!-- Pahari Landscape with Lush Rolling Hills -->
  <rect width="800" height="600" fill="url(#skyHills)" />
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#7A1D1D" stroke-width="8" />
  <rect x="35" y="35" width="730" height="530" fill="none" stroke="#DFB250" stroke-width="3" />

  <!-- Meandering River Yamuna with Lotus Petals -->
  <path d="M0,450 C200,430 350,520 800,460 L800,600 L0,600 Z" fill="#4B8196" opacity="0.9" />
  <path d="M100,500 C250,480 320,530 500,510" stroke="#86B2C4" stroke-width="2" fill="none" />

  <!-- Blossoming Kadamba & Willow Trees -->
  <g transform="translate(140, 320)">
    <path d="M0,0 C-10,-80 15,-140 0,-210 M-5,-90 C-40,-130 -60,-170 -40,-220 M10,-120 C50,-150 70,-190 50,-240" stroke="#4A301D" stroke-width="9" fill="none" stroke-linecap="round" />
    <!-- Dense Green Foliage with White Blossom Dots -->
    <circle cx="0" cy="-220" r="50" fill="#2E5928" />
    <circle cx="-40" cy="-220" r="40" fill="#3D7033" />
    <circle cx="45" cy="-230" r="45" fill="#3D7033" />
    ${[[-20,-220], [10,-240], [-40,-200], [30,-210], [5,-190]].map(([x,y]) => `
      <circle cx="${x}" cy="${y}" r="3.5" fill="#FFF" />
      <circle cx="${x}" cy="${y}" r="1.5" fill="#D84A4A" />
    `).join('')}
  </g>

  <!-- Divine Couple: Radha & Krishna -->
  <g transform="translate(450, 320)">
    <!-- Golden Canopy / Pavilion Umbrella -->
    <path d="M-80,-140 Q0,-190 80,-140 Z" fill="#DFB250" stroke="#7A1D1D" stroke-width="3" />
    <line x1="0" y1="-140" x2="0" y2="120" stroke="#DFB250" stroke-width="5" />

    <!-- Lord Krishna (Shyama / Blue Hued) -->
    <g transform="translate(-25, 0)">
      <ellipse cx="0" cy="-70" rx="18" ry="24" fill="#75A6C2" stroke="#1D3E54" stroke-width="1.8" />
      <!-- Golden Peetambar Dhoti & Mukuta -->
      <path d="M-12,-92 L0,-125 L12,-92 Z" fill="#E8BD3A" stroke="#7A1D1D" stroke-width="1.5" />
      <!-- Peacock Feather -->
      <ellipse cx="6" cy="-130" rx="7" ry="11" fill="#2A6B39" stroke="#E8BD3A" stroke-width="1" />
      <circle cx="6" cy="-130" r="3" fill="#1C3879" />
      <!-- Flute (Bansuri) -->
      <line x1="-30" y1="-50" x2="35" y2="-40" stroke="#DFB250" stroke-width="3.5" stroke-linecap="round" />
      <path d="M-20,-40 C-25,20 -30,60 -35,100 L15,100 C15,60 10,20 5,-40 Z" fill="#E8BD3A" stroke="#8A6715" stroke-width="2" />
    </g>

    <!-- Radha (Fair Complexioned in Crimson Odhani) -->
    <g transform="translate(45, 10)">
      <ellipse cx="0" cy="-65" rx="16" ry="22" fill="#F7DECE" stroke="#7A3926" stroke-width="1.8" />
      <!-- Flowing Transparent Crimson Odhani / Dupatta -->
      <path d="M-8,-80 C10,-100 35,-60 30,50 L-10,50 Z" fill="#A82329" opacity="0.85" stroke="#DFB250" stroke-width="1.5" />
      <circle cx="-5" cy="-67" r="1.5" fill="#111" />
      <path d="M-6,-56 Q0,-52 6,-56" stroke="#A82329" stroke-width="1.5" fill="none" />
      <!-- Lotus Flower in Hand -->
      <circle cx="-25" cy="-35" r="7" fill="#E06982" />
    </g>
  </g>
</svg>`;

// 8. Rogan Art (Kutch Symmetrical Tree of Life)
svgs['rogan.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="roganFabric" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#18233C" />
      <stop offset="70%" stop-color="#0E1626" />
      <stop offset="100%" stop-color="#070C15" />
    </radialGradient>
  </defs>
  <!-- Deep Indigo/Black Fabric Ground -->
  <rect width="800" height="600" fill="url(#roganFabric)" />

  <!-- Intricate Fine Castor-Oil Thread Borders -->
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#F4B728" stroke-width="4" />
  <rect x="35" y="35" width="730" height="530" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="6,4" />
  <rect x="45" y="45" width="710" height="510" fill="none" stroke="#E25822" stroke-width="2.5" />

  <!-- Symmetrical Rogan "Tree of Life" -->
  <g transform="translate(400, 480)">
    <!-- Base Floral Urn / Mound -->
    <path d="M-60,0 C-40,-30 40,-30 60,0 Z" fill="#F4B728" stroke="#FFFFFF" stroke-width="2" />
    <!-- Central Symmetrical Stylized Trunk -->
    <line x1="0" y1="0" x2="0" y2="-320" stroke="#F4B728" stroke-width="7" stroke-linecap="round" />

    <!-- Symmetrical Curving Branches & Paisley Rosettes -->
    ${[
      { y: -70, rx: 70, ry: 40, col: '#E25822' },
      { y: -130, rx: 110, ry: 60, col: '#F4B728' },
      { y: -190, rx: 140, ry: 80, col: '#FFFFFF' },
      { y: -250, rx: 110, ry: 60, col: '#E25822' },
      { y: -300, rx: 70, ry: 40, col: '#F4B728' },
    ].map((b, idx) => `
      <!-- Left Branch -->
      <path d="M0,${b.y} C-${b.rx * 0.5},${b.y} -${b.rx},${b.y - 20} -${b.rx},${b.y - b.ry}" stroke="${b.col}" stroke-width="3.5" fill="none" stroke-linecap="round" />
      <circle cx="-${b.rx}" cy="${b.y - b.ry}" r="9" fill="${b.col}" stroke="#FFFFFF" stroke-width="1.5" />
      <circle cx="-${b.rx}" cy="${b.y - b.ry}" r="4" fill="#0E1626" />

      <!-- Right Mirror Branch -->
      <path d="M0,${b.y} C${b.rx * 0.5},${b.y} ${b.rx},${b.y - 20} ${b.rx},${b.y - b.ry}" stroke="${b.col}" stroke-width="3.5" fill="none" stroke-linecap="round" />
      <circle cx="${b.rx}" cy="${b.y - b.ry}" r="9" fill="${b.col}" stroke="#FFFFFF" stroke-width="1.5" />
      <circle cx="${b.rx}" cy="${b.y - b.ry}" r="4" fill="#0E1626" />
    `).join('')}

    <!-- Apex Symmetrical Crown Flower -->
    <g transform="translate(0, -340)">
      <circle cx="0" cy="0" r="16" fill="#F4B728" stroke="#FFFFFF" stroke-width="2" />
      <circle cx="0" cy="0" r="7" fill="#E25822" />
      <path d="M0,-16 C-12,-32 12,-32 0,-16 Z" fill="#FFFFFF" stroke="#F4B728" stroke-width="1.5" />
    </g>
  </g>
</svg>`;

// 9. Cheriyal Scroll Painting (Telangana Nakashi)
svgs['cheriyal.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="cheriyalBg" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#C52323" />
      <stop offset="80%" stop-color="#A51616" />
      <stop offset="100%" stop-color="#700C0C" />
    </radialGradient>
  </defs>
  <!-- Characteristic Fiery Crimson-Red Ground -->
  <rect width="800" height="600" fill="url(#cheriyalBg)" />

  <!-- Distinctive White and Yellow Leaf/Flower Border -->
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#F3DC46" stroke-width="6" />
  <rect x="35" y="35" width="730" height="530" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="8,6" />

  <!-- Narrative Panel Figures (Bard & Folk Hero) -->
  <g transform="translate(300, 310)">
    <!-- Stylized Nakashi Figure (Warrior / Hero) -->
    <!-- Large Round Head with Huge Expressive Eyes -->
    <circle cx="0" cy="-90" r="42" fill="#EAB680" stroke="#111" stroke-width="3" />
    <!-- Giant Almond Eye (Nakashi trademark) -->
    <ellipse cx="14" cy="-94" rx="18" ry="11" fill="#FFFFFF" stroke="#111" stroke-width="2.5" />
    <circle cx="16" cy="-94" r="5.5" fill="#111" />
    <!-- Curled Mustache & Tilak -->
    <path d="M-10,-72 Q15,-60 30,-75" stroke="#111" stroke-width="4.5" fill="none" stroke-linecap="round" />
    <path d="M-4,-118 L2,-100 L8,-118 Z" fill="#F3DC46" stroke="#111" stroke-width="1.5" />
    <!-- Grand Folk Turban (Pagadi) with Gold Ornaments -->
    <path d="M-45,-110 C-30,-160 50,-155 45,-105 Z" fill="#256B9E" stroke="#111" stroke-width="3" />
    <circle cx="10" cy="-145" r="9" fill="#F3DC46" stroke="#111" stroke-width="2" />

    <!-- Traditional Angavastram & Dhoti -->
    <path d="M-35,-45 L40,-45 L30,120 L-25,120 Z" fill="#F3DC46" stroke="#111" stroke-width="3" />
    <line x1="-2" y1="-45" x2="-2" y2="120" stroke="#C52323" stroke-width="4" />
    <!-- Sword in Hand -->
    <line x1="30" y1="0" x2="110" y2="-60" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
    <circle cx="30" cy="0" r="8" fill="#F3DC46" stroke="#111" stroke-width="2" />
  </g>

  <!-- Narrative Tree and Village Hut -->
  <g transform="translate(620, 260)">
    <circle cx="0" cy="0" r="75" fill="#297A4C" stroke="#111" stroke-width="3" />
    <path d="M0,75 L0,200" stroke="#4A2612" stroke-width="12" />
    <circle cx="-25" cy="-20" r="6" fill="#F3DC46" />
    <circle cx="25" cy="20" r="6" fill="#F3DC46" />
    <circle cx="30" cy="-30" r="6" fill="#FFFFFF" />
  </g>
</svg>`;

// 10. Bengal School of Art (Abanindranath Tagore Wash / Jamini Roy)
svgs['bengal.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bengalWash" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F2DEB8" />
      <stop offset="50%" stop-color="#E2B77B" />
      <stop offset="100%" stop-color="#9C6B38" />
    </linearGradient>
  </defs>
  <!-- Translucent Japanese-Indian Water Wash Background -->
  <rect width="800" height="600" fill="url(#bengalWash)" />
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#523214" stroke-width="4" opacity="0.7" />

  <!-- Spiritual Icon: Bharat Mata / Lyrical Indian Mother -->
  <g transform="translate(400, 310)">
    <!-- Soft Diffused Halo -->
    <circle cx="0" cy="-90" r="75" fill="#FFF6DF" opacity="0.45" />

    <!-- Serene Saffron-Clad Figure -->
    <!-- Head in Calm Profile/Contemplation -->
    <ellipse cx="0" cy="-80" rx="34" ry="42" fill="#E8BD8D" stroke="#523214" stroke-width="2" />
    <ellipse cx="8" cy="-84" rx="8" ry="4" fill="#523214" />
    <path d="M-5,-62 Q0,-58 8,-62" stroke="#A3352B" stroke-width="2" fill="none" />
    
    <!-- Flowing Saffron/Gerua Ascetic Robes -->
    <path d="M-60,-20 C-80,60 -100,160 -110,210 L110,210 C100,160 80,60 60,-20 Z" fill="#D6752C" stroke="#7A390F" stroke-width="3" opacity="0.9" />

    <!-- Four Sacred Symbolic Hands -->
    <!-- Hand 1: Sacred Vedas/Scriptures -->
    <g transform="translate(-80, 20)">
      <rect x="-15" y="-10" width="30" height="20" rx="3" fill="#FAF5EB" stroke="#523214" stroke-width="2" />
      <line x1="-10" y1="0" x2="10" y2="0" stroke="#A3352B" stroke-width="1.5" />
    </g>
    <!-- Hand 2: Paddy / Sheaf of Corn (Annada) -->
    <g transform="translate(-70, 90)">
      <path d="M0,0 Q-20,-40 -40,-30 M0,0 Q-30,-20 -50,-10" stroke="#DFB83F" stroke-width="3" fill="none" />
    </g>
    <!-- Hand 3: White Khadi Cloth -->
    <g transform="translate(80, 20)">
      <path d="M-10,-5 Q10,15 25,-5 L30,20 L-5,20 Z" fill="#FFFFFF" stroke="#523214" stroke-width="1.5" />
    </g>
    <!-- Hand 4: Sacred Japa Mala Beads -->
    <g transform="translate(70, 90)">
      <circle cx="0" cy="0" r="14" fill="none" stroke="#7A390F" stroke-width="3" stroke-dasharray="4,3" />
    </g>

    <!-- Floating Water Lilies at Feet -->
    <path d="M-40,210 Q0,195 40,210" stroke="#523214" stroke-width="3" fill="none" />
  </g>
</svg>`;

// 11. Ajanta Caves (Bodhisattva Padmapani)
svgs['ajanta.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="ajantaWall" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#9E764E" />
      <stop offset="60%" stop-color="#734F2C" />
      <stop offset="100%" stop-color="#482F18" />
    </radialGradient>
  </defs>
  <!-- Weathered Ancient Cave Plaster Texture -->
  <rect width="800" height="600" fill="url(#ajantaWall)" />
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#331E0D" stroke-width="6" opacity="0.8" />

  <!-- Bodhisattva Padmapani (Cave 1) -->
  <g transform="translate(420, 310)">
    <!-- Graceful Sinuous Tribhanga Pose -->
    <ellipse cx="0" cy="-90" rx="42" ry="52" fill="#C59B6A" stroke="#3D230F" stroke-width="2.5" />
    <!-- Pearl & Gem Tiara (Crown) -->
    <path d="M-40,-130 C-20,-170 20,-170 40,-130 Z" fill="#DFB548" stroke="#3D230F" stroke-width="2" />
    <circle cx="0" cy="-160" r="7" fill="#256B9E" />
    <!-- Half-Closed Meditative Compassionate Eyes -->
    <path d="M-22,-86 Q-12,-80 -2,-86" stroke="#3D230F" stroke-width="3" fill="none" />
    <path d="M12,-86 Q22,-80 32,-86" stroke="#3D230F" stroke-width="3" fill="none" />
    <!-- Sacred Tilak & Serene Lip Curve -->
    <path d="M-10,-55 Q5,-48 20,-55" stroke="#873522" stroke-width="2.5" fill="none" />

    <!-- Slender Torso with Sacred Thread (Yajnopavita) -->
    <path d="M-45,-40 C-30,40 -25,120 -20,200 L40,200 C30,120 40,40 50,-40 Z" fill="#BA8D59" stroke="#3D230F" stroke-width="2.5" />
    <path d="M-30,-30 C0,40 10,120 -15,190" stroke="#DFB548" stroke-width="3" fill="none" />

    <!-- The Famous Blue Lotus (Utpala) in Right Hand -->
    <g transform="translate(90, 40)">
      <path d="M0,0 Q20,-30 40,-80" stroke="#3A6332" stroke-width="4" fill="none" />
      <!-- Radiant Blue Lotus Petals -->
      <path d="M40,-80 C20,-120 60,-130 50,-90 Z" fill="#2A6B99" stroke="#1D3E54" stroke-width="1.5" />
      <path d="M40,-80 C10,-100 20,-140 40,-110 Z" fill="#4B8EB8" stroke="#1D3E54" stroke-width="1.5" />
      <path d="M40,-80 C50,-130 80,-110 55,-90 Z" fill="#3D7DAB" stroke="#1D3E54" stroke-width="1.5" />
    </g>
  </g>
</svg>`;

// 12. Ellora Caves (Monolithic Kailash Temple)
svgs['ellora.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="rockBasalt" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4F4640" />
      <stop offset="50%" stop-color="#3A322C" />
      <stop offset="100%" stop-color="#241E1A" />
    </linearGradient>
  </defs>
  <!-- Deccan Basalt Rock Quarry Wall -->
  <rect width="800" height="600" fill="url(#rockBasalt)" />
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#D19C4C" stroke-width="3" opacity="0.6" />

  <!-- Monolithic Kailash Shikhara & Mandapa Carved Out of Rock -->
  <g transform="translate(400, 480)">
    <!-- Massive Rock Plinth with Carved Elephants -->
    <rect x="-260" y="-80" width="520" height="80" fill="#2E2722" stroke="#1A1410" stroke-width="3" />
    <!-- Elephant Reliefs at Base -->
    ${[-180, -90, 0, 90, 180].map(x => `
      <g transform="translate(${x}, -40) scale(0.6)">
        <ellipse cx="0" cy="0" rx="35" ry="25" fill="#483D35" stroke="#1A1410" stroke-width="2" />
        <path d="M25,0 C40,10 35,30 20,35" stroke="#483D35" stroke-width="7" fill="none" />
      </g>
    `).join('')}

    <!-- Pillared Mandapa Hall -->
    <rect x="-180" y="-180" width="360" height="100" fill="#3D332B" stroke="#1A1410" stroke-width="3" />
    <!-- Carved Pillars -->
    ${[-150, -90, -30, 30, 90, 150].map(px => `
      <line x1="${px}" y1="-180" x2="${px}" y2="-80" stroke="#635447" stroke-width="12" />
    `).join('')}

    <!-- Towering Multi-Tiered Dravidian Shikhara (Vimana) -->
    <polygon points="0,-420 -80,-180 80,-180" fill="#483D35" stroke="#1A1410" stroke-width="3" />
    <!-- Horizontal Tiered Cornices -->
    <line x1="-30" y1="-340" x2="30" y2="-340" stroke="#7A6858" stroke-width="8" />
    <line x1="-50" y1="-260" x2="50" y2="-260" stroke="#7A6858" stroke-width="10" />
    <line x1="-70" y1="-190" x2="70" y2="-190" stroke="#7A6858" stroke-width="12" />
    <!-- Golden Kalasha Finial at Peak -->
    <circle cx="0" cy="-430" r="14" fill="#D19C4C" stroke="#1A1410" stroke-width="2" />
  </g>
</svg>`;

// 13. Jaipur Miniature Painting
svgs['jaipur.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#FAF1D9" />
  <!-- Royal Rajput Golden Floral Border (Hasyia) -->
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#B83A2A" stroke-width="10" />
  <rect x="40" y="40" width="720" height="520" fill="none" stroke="#DCA532" stroke-width="4" />

  <!-- Ornate Rajput Palace Marble Pavilion Arch -->
  <g transform="translate(400, 120)">
    <path d="M-220,380 L-220,120 Q-110,40 0,70 Q110,40 220,120 L220,380" fill="none" stroke="#DCA532" stroke-width="12" />
    <circle cx="0" cy="50" r="18" fill="#B83A2A" stroke="#DCA532" stroke-width="3" />
  </g>

  <!-- Krishna & Radha in Royal Court Garden -->
  <g transform="translate(400, 340)">
    <circle cx="-40" cy="-60" r="28" fill="#7EA4BD" stroke="#1E384D" stroke-width="2" />
    <path d="M-55,-90 L-40,-120 L-25,-90 Z" fill="#DCA532" stroke="#B83A2A" stroke-width="2" />
    <!-- Radha -->
    <circle cx="40" cy="-55" r="26" fill="#F7DCBE" stroke="#8A4A28" stroke-width="2" />
    <path d="M25,-80 C50,-95 70,-60 65,30 L15,30 Z" fill="#B83A2A" opacity="0.85" />
    <!-- Jali Screen Window at rear -->
    <rect x="-120" y="-140" width="60" height="90" fill="none" stroke="#DCA532" stroke-width="2" stroke-dasharray="4,4" />
    <rect x="60" y="-140" width="60" height="90" fill="none" stroke="#DCA532" stroke-width="2" stroke-dasharray="4,4" />
  </g>
</svg>`;

// 14. Udaipur / Mewar Miniature
svgs['udaipur.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <!-- Bold Vermilion Red & Saffron Blocks Characteristic of Mewar -->
  <rect width="800" height="600" fill="#B52B1E" />
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#F0B33A" stroke-width="8" />
  <rect x="40" y="40" width="720" height="240" fill="#EFA22F" opacity="0.85" />

  <!-- Lake Pichola Palace & Rajput Royal Procession -->
  <g transform="translate(400, 360)">
    <!-- Palace Pavilions with Domes (Chhatris) -->
    <g transform="translate(-180, -180)">
      <path d="M-40,0 Q0,-40 40,0 Z" fill="#FFF" stroke="#222" stroke-width="2" />
      <rect x="-30" y="0" width="60" height="40" fill="#FFF" stroke="#222" stroke-width="2" />
    </g>
    <g transform="translate(180, -180)">
      <path d="M-40,0 Q0,-40 40,0 Z" fill="#FFF" stroke="#222" stroke-width="2" />
      <rect x="-30" y="0" width="60" height="40" fill="#FFF" stroke="#222" stroke-width="2" />
    </g>

    <!-- Bold Mewar Royal Steed (Horse) & King -->
    <g transform="translate(0, 20)">
      <ellipse cx="0" cy="0" rx="90" ry="45" fill="#FFFDF8" stroke="#111" stroke-width="3" />
      <path d="M70,-20 Q120,-60 100,-90 Q70,-70 50,-40 Z" fill="#FFFDF8" stroke="#111" stroke-width="3" />
      <rect x="-20" y="-30" width="50" height="45" fill="#B52B1E" stroke="#F0B33A" stroke-width="3" />
      <!-- Legs -->
      <line x1="-50" y1="35" x2="-60" y2="100" stroke="#111" stroke-width="5" />
      <line x1="50" y1="35" x2="60" y2="100" stroke="#111" stroke-width="5" />
    </g>
  </g>
</svg>`;

// 15. Raghurajpur Palm Leaf Engraving (Talapatra Chitra)
svgs['raghurajpur.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="palmLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#EADBBA" />
      <stop offset="50%" stop-color="#D4C097" />
      <stop offset="100%" stop-color="#BFAF88" />
    </linearGradient>
  </defs>
  <!-- Slender Stitched Dried Palmyra Palm Leaves -->
  <rect width="800" height="600" fill="#2E1C0C" />
  
  <!-- Palm Leaf Strips Stitched with Thread -->
  ${[60, 160, 260, 360, 460].map(y => `
    <rect x="50" y="${y}" width="700" height="90" fill="url(#palmLeaf)" stroke="#523B20" stroke-width="2" rx="4" />
    <circle cx="90" cy="${y + 45}" r="5" fill="#2E1C0C" />
    <circle cx="710" cy="${y + 45}" r="5" fill="#2E1C0C" />
    <line x1="90" y1="${y}" x2="90" y2="${y + 90}" stroke="#917248" stroke-width="2" stroke-dasharray="4,4" />
    <line x1="710" y1="${y}" x2="710" y2="${y + 90}" stroke="#917248" stroke-width="2" stroke-dasharray="4,4" />
  `).join('')}

  <!-- Microscopic Incised Black Iron Stylus Engravings (Dashavatara Panels) -->
  ${[180, 320, 460, 600].map(x => `
    <g transform="translate(${x}, 305)">
      <rect x="-50" y="-70" width="100" height="140" fill="none" stroke="#2E1C0C" stroke-width="2" />
      <circle cx="0" cy="-35" r="20" fill="none" stroke="#2E1C0C" stroke-width="2" />
      <path d="M-25,10 Q0,50 25,10" stroke="#2E1C0C" stroke-width="2" fill="none" />
      <line x1="-40" y1="-60" x2="40" y2="-60" stroke="#2E1C0C" stroke-width="1" />
      <line x1="-40" y1="60" x2="40" y2="60" stroke="#2E1C0C" stroke-width="1" />
    </g>
  `).join('')}
</svg>`;

// 16. Machilipatnam Block-Printed Kalamkari
svgs['machilipatnam.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#F4EADB" />
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#1D2A3A" stroke-width="6" />

  <!-- Repeating Hand-Carved Teak Woodblock Rosettes & Arches -->
  ${[80, 200, 320, 440, 560, 680].map(x => `
    ${[90, 210, 330, 450].map(y => `
      <g transform="translate(${x}, ${y}) scale(0.65)">
        <circle cx="0" cy="0" r="45" fill="none" stroke="#8E2A2A" stroke-width="3" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="#1D2A3A" stroke-width="2" />
        <circle cx="0" cy="0" r="14" fill="#D69B2A" />
        ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `
          <ellipse cx="${Math.cos(a * Math.PI / 180) * 38}" cy="${Math.sin(a * Math.PI / 180) * 38}" rx="8" ry="5" transform="rotate(${a} ${Math.cos(a * Math.PI / 180) * 38} ${Math.sin(a * Math.PI / 180) * 38})" fill="#2E5572" />
        `).join('')}
      </g>
    `).join('')}
  `).join('')}
</svg>`;

// 17. Hampi Vijayanagara Stone Chariot & Granite Architecture
svgs['hampi.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <!-- Dramatic Deccan Blue Sky & Granite Hill Boulders -->
  <linearGradient id="hampiSky" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#4B779E" />
    <stop offset="50%" stop-color="#93B4CE" />
    <stop offset="100%" stop-color="#E2A66C" />
  </linearGradient>
  <rect width="800" height="600" fill="url(#hampiSky)" />

  <!-- Iconic Monolithic Stone Chariot (Vittala Temple) -->
  <g transform="translate(400, 480)">
    <!-- Granite Platform -->
    <rect x="-240" y="-60" width="480" height="60" fill="#736758" stroke="#3D352B" stroke-width="3" />

    <!-- Giant Carved Granite Wheels -->
    <g transform="translate(-140, -40)">
      <circle cx="0" cy="0" r="50" fill="#877A6A" stroke="#3D352B" stroke-width="4" />
      <circle cx="0" cy="0" r="18" fill="#544B3F" stroke="#3D352B" stroke-width="2" />
      ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `
        <line x1="0" y1="0" x2="${Math.cos(a * Math.PI / 180) * 50}" y2="${Math.sin(a * Math.PI / 180) * 50}" stroke="#3D352B" stroke-width="3" />
      `).join('')}
    </g>
    <g transform="translate(140, -40)">
      <circle cx="0" cy="0" r="50" fill="#877A6A" stroke="#3D352B" stroke-width="4" />
      <circle cx="0" cy="0" r="18" fill="#544B3F" stroke="#3D352B" stroke-width="2" />
      ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `
        <line x1="0" y1="0" x2="${Math.cos(a * Math.PI / 180) * 50}" y2="${Math.sin(a * Math.PI / 180) * 50}" stroke="#3D352B" stroke-width="3" />
      `).join('')}
    </g>

    <!-- Main Shrine Body & Carved Mandapa Pillars -->
    <rect x="-130" y="-220" width="260" height="160" fill="#877A6A" stroke="#3D352B" stroke-width="3" />
    <polygon points="0,-330 -140,-220 140,-220" fill="#6B6052" stroke="#3D352B" stroke-width="3" />
    <circle cx="0" cy="-340" r="12" fill="#D6A540" />
  </g>
</svg>`;

// 18. Varanasi Silk Brocade (Zari Weaving)
svgs['varanasi.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="silkRed" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#9C1726" />
      <stop offset="70%" stop-color="#730C18" />
      <stop offset="100%" stop-color="#45040C" />
    </radialGradient>
    <linearGradient id="goldZari" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE574" />
      <stop offset="50%" stop-color="#DEB638" />
      <stop offset="100%" stop-color="#A87F18" />
    </linearGradient>
  </defs>
  <!-- Rich Royal Crimson Katan Silk Base -->
  <rect width="800" height="600" fill="url(#silkRed)" />

  <!-- Ornate Woven Gold Zari Border (Jangla / Shikargah) -->
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="url(#goldZari)" stroke-width="12" />
  <rect x="42" y="42" width="716" height="516" fill="none" stroke="#FCE574" stroke-width="2" stroke-dasharray="6,4" />

  <!-- Royal Banarasi Kalka (Paisley) & Floral Jaal Motif -->
  <g transform="translate(400, 300)">
    <!-- Central Regal Paisley Motif -->
    <path d="M0,120 C-110,120 -150,-20 -50,-120 C-10,-160 30,-210 20,-240 C10,-260 -20,-240 -20,-220 C-20,-170 120,-80 120,40 C120,90 70,120 0,120 Z" fill="none" stroke="url(#goldZari)" stroke-width="8" />
    <!-- Intricate Floral Fills Inside Paisley -->
    <circle cx="0" cy="10" r="30" fill="none" stroke="url(#goldZari)" stroke-width="3" />
    <circle cx="0" cy="10" r="10" fill="url(#goldZari)" />
    <!-- Supplementary Corner Kalka Flowers -->
    ${[-220, 220].map(px => `
      <circle cx="${px}" cy="-140" r="36" fill="none" stroke="url(#goldZari)" stroke-width="3" />
      <circle cx="${px}" cy="140" r="36" fill="none" stroke="url(#goldZari)" stroke-width="3" />
    `).join('')}
  </g>
</svg>`;

// 19. Sanchi Buddhist Sculptures & Toranas
svgs['sanchi.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#E8D8BA" />
  <!-- The Great Stupa Dome with Torana Gateway -->
  <g transform="translate(400, 500)">
    <!-- Monumental Hemispherical Dome (Anda) -->
    <path d="M-280,0 C-280,-240 280,-240 280,0 Z" fill="#C2AB8A" stroke="#7A6546" stroke-width="4" />
    <!-- Square Railing (Harmika) & Three-Tiered Umbrella (Chhatra) -->
    <rect x="-40" y="-270" width="80" height="30" fill="#7A6546" stroke="#4A3B25" stroke-width="2" />
    <line x1="0" y1="-270" x2="0" y2="-340" stroke="#4A3B25" stroke-width="4" />
    <ellipse cx="0" cy="-330" rx="30" ry="7" fill="#7A6546" />
    <ellipse cx="0" cy="-315" rx="22" ry="5" fill="#7A6546" />
    <ellipse cx="0" cy="-300" rx="14" ry="4" fill="#7A6546" />

    <!-- Carved Stone Torana (Gateway) in Foreground -->
    <g transform="translate(0, 0)">
      <!-- Twin Pillars -->
      <rect x="-140" y="-320" width="24" height="320" fill="#D6C09C" stroke="#4A3B25" stroke-width="3" />
      <rect x="116" y="-320" width="24" height="320" fill="#D6C09C" stroke="#4A3B25" stroke-width="3" />
      <!-- Three Curved Architraves with Spiral Terminals -->
      ${[-300, -250, -200].map(y => `
        <rect x="-180" y="${y}" width="360" height="24" rx="12" fill="#D6C09C" stroke="#4A3B25" stroke-width="3" />
        <circle cx="-170" cy="${y + 12}" r="8" fill="#4A3B25" />
        <circle cx="170" cy="${y + 12}" r="8" fill="#4A3B25" />
      `).join('')}
    </g>
  </g>
</svg>`;

// 20. Khajuraho Temple Sculptures (Nagara Spire & Celestial Dancers)
svgs['khajuraho.svg'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="khajurahoStone" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#E5AF71" />
      <stop offset="70%" stop-color="#C58742" />
      <stop offset="100%" stop-color="#8C541D" />
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#khajurahoStone)" />
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#54300E" stroke-width="5" />

  <!-- Soaring Nagara Shikhara Spire of Kandariya Mahadeva -->
  <g transform="translate(320, 520)">
    <!-- Base Platform (Jagati) -->
    <rect x="-180" y="-80" width="360" height="80" fill="#784414" stroke="#3D2005" stroke-width="3" />
    <!-- Horizontal Carved Sculptural Bands -->
    <polygon points="0,-450 -130,-80 130,-80" fill="#A86728" stroke="#3D2005" stroke-width="3" />
    ${[-380, -320, -260, -200, -140].map(y => `
      <line x1="-${(520 + y) * 0.28}" y1="${y}" x2="${(520 + y) * 0.28}" y2="${y}" stroke="#54300E" stroke-width="8" />
    `).join('')}
    <!-- Ribbed Amalaka and Golden Kalasha -->
    <ellipse cx="0" cy="-455" rx="22" ry="9" fill="#D69B4B" stroke="#3D2005" stroke-width="2" />
    <circle cx="0" cy="-470" r="8" fill="#F0C06E" />
  </g>

  <!-- Celestial Dancer (Surasundari / Apsara) Sculptural Relief at Right -->
  <g transform="translate(620, 310)">
    <ellipse cx="0" cy="-90" rx="30" ry="38" fill="#F0C06E" stroke="#54300E" stroke-width="2.5" />
    <!-- Classical Tribhanga Stance Curve -->
    <path d="M-20,-55 C0,-20 -30,50 10,130" stroke="#F0C06E" stroke-width="32" fill="none" stroke-linecap="round" />
    <!-- Elaborate Stone Jewelry & Beaded Girdle (Mekhala) -->
    <path d="M-25,10 Q5,30 35,10" stroke="#54300E" stroke-width="4" fill="none" />
    <circle cx="5" cy="-95" r="4" fill="#54300E" />
    <path d="M-10,-72 Q5,-65 20,-72" stroke="#54300E" stroke-width="2.5" fill="none" />
  </g>
</svg>`;

// Write all SVGs to public/art/
for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(outDir, filename), content.trim());
  console.log('Created ' + filename);
}
console.log('All 20 authentic SVGs successfully generated in public/art/!');
