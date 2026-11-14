import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/art');

const extraSvgs = {
  // 1. Gond Art (Madhya Pradesh) - Stylized Deer and Sacred Mahua Tree filled with signature dots and dashes
  'gond.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <radialGradient id="gondBg" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="#FDF8ED" />
        <stop offset="100%" stop-color="#EBE2CD" />
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#gondBg)" />
    <rect x="25" y="25" width="750" height="550" fill="none" stroke="#183D32" stroke-width="4" />
    <rect x="35" y="35" width="730" height="530" fill="none" stroke="#C49A53" stroke-width="2" stroke-dasharray="6,4" />

    <!-- Gond Sacred Tree of Life (Curved Organic Branches filled with dots) -->
    <g transform="translate(400, 520)">
      <path d="M0,0 C-30,-120 40,-240 10,-380 M-10,-140 C-110,-200 -160,-280 -140,-370 M10,-200 C110,-250 170,-320 140,-410" stroke="#183D32" stroke-width="14" fill="none" stroke-linecap="round" />
      <!-- Stylized Bird Perched on Tree -->
      <g transform="translate(20, -380)">
        <path d="M0,0 C30,-30 80,-20 90,10 C60,40 20,30 0,0 Z" fill="#B65D42" stroke="#183D32" stroke-width="3" />
        <circle cx="70" cy="-5" r="4" fill="#FFF" />
        <circle cx="71" cy="-5" r="2" fill="#183D32" />
        <path d="M90,10 L120,5 L95,20 Z" fill="#C49A53" />
      </g>
    </g>

    <!-- Iconic Gond Spotted Deer (Barasingha / Chital) -->
    <g transform="translate(260, 340)">
      <ellipse cx="0" cy="0" rx="95" ry="60" fill="#E88B43" stroke="#183D32" stroke-width="4" />
      <!-- Intricate Gond Dot-and-Line Pattern on Body -->
      ${[
        [-50, -20], [-20, -30], [10, -20], [40, -10],
        [-60, 10], [-30, 0], [0, 10], [30, 20], [60, 10],
        [-40, 30], [-10, 30], [20, 35]
      ].map(([x, y]) => `
        <circle cx="${x}" cy="${y}" r="6" fill="#FFF" stroke="#183D32" stroke-width="1.5" />
        <circle cx="${x}" cy="${y}" r="2" fill="#183D32" />
      `).join('')}

      <!-- Graceful Curved Neck & Head -->
      <path d="M80,-20 C120,-60 130,-110 110,-140 C95,-135 85,-110 65,-60 Z" fill="#E88B43" stroke="#183D32" stroke-width="4" />
      <ellipse cx="110" cy="-140" rx="18" ry="12" fill="#E88B43" stroke="#183D32" stroke-width="3" />
      <circle cx="114" cy="-142" r="3.5" fill="#183D32" />
      <!-- Magnificent Gond Branching Antlers -->
      <path d="M100,-150 C80,-190 70,-230 40,-250 M85,-180 C50,-200 40,-210 20,-215 M95,-165 C120,-210 140,-240 160,-260 M120,-200 C150,-210 170,-220 180,-230" stroke="#183D32" stroke-width="5" fill="none" stroke-linecap="round" />
      <!-- Slender Legs -->
      <line x1="-50" y1="50" x2="-60" y2="150" stroke="#183D32" stroke-width="6" stroke-linecap="round" />
      <line x1="-20" y1="55" x2="-25" y2="150" stroke="#183D32" stroke-width="6" stroke-linecap="round" />
      <line x1="40" y1="55" x2="45" y2="150" stroke="#183D32" stroke-width="6" stroke-linecap="round" />
      <line x1="70" y1="50" x2="75" y2="150" stroke="#183D32" stroke-width="6" stroke-linecap="round" />
    </g>
  </svg>`,

  // 2. Bhimbetka Rock Art (Madhya Pradesh) - Prehistoric Paleolithic Rock Shelter Cave Pictographs
  'bhimbetka.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <radialGradient id="rockShelter" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="#7A4E38" />
        <stop offset="60%" stop-color="#593220" />
        <stop offset="100%" stop-color="#381D10" />
      </radialGradient>
    </defs>
    <!-- Weathered Sandstone Rock Shelter Wall -->
    <rect width="800" height="600" fill="url(#rockShelter)" />
    <rect x="25" y="25" width="750" height="550" fill="none" stroke="#E5C79E" stroke-width="3" opacity="0.4" />

    <!-- Prehistoric Red Ochre (Geru) and Kaolin White Figures -->
    <!-- Giant Bison / Boar (Rock Shelter III F-24 Auditorium Cave) -->
    <g transform="translate(420, 290)">
      <!-- Massive Boar/Bison Body in Striated Red Ochre Silhouette -->
      <path d="M-180,20 C-170,-80 -60,-150 60,-130 C160,-110 200,-50 180,40 C140,80 -10,90 -120,70 Z" fill="#B34227" stroke="#E5C79E" stroke-width="3.5" />
      <!-- Interior Stick-Figure Geometry -->
      <line x1="-120" y1="-30" x2="120" y2="-30" stroke="#E5C79E" stroke-width="2.5" />
      <line x1="-100" y1="10" x2="100" y2="10" stroke="#E5C79E" stroke-width="2.5" />
      <!-- Horns & Snout -->
      <path d="M180,-50 Q230,-100 210,-120" stroke="#E5C79E" stroke-width="6" fill="none" stroke-linecap="round" />
      <ellipse cx="200" cy="-20" rx="20" ry="15" fill="#B34227" stroke="#E5C79E" stroke-width="2" />
      <!-- Sturdy Legs -->
      <line x1="-130" y1="65" x2="-140" y2="160" stroke="#B34227" stroke-width="12" stroke-linecap="round" />
      <line x1="-90" y1="70" x2="-95" y2="160" stroke="#B34227" stroke-width="10" stroke-linecap="round" />
      <line x1="100" y1="65" x2="105" y2="160" stroke="#B34227" stroke-width="12" stroke-linecap="round" />
      <line x1="140" y1="60" x2="145" y2="160" stroke="#B34227" stroke-width="10" stroke-linecap="round" />
    </g>

    <!-- Prehistoric Hunters with Bows & Spears (Stick Figures in White & Red) -->
    ${[
      { x: 160, y: 160, scale: 0.9 },
      { x: 260, y: 140, scale: 0.8 },
      { x: 640, y: 180, scale: 0.85 },
      { x: 680, y: 440, scale: 0.75 },
    ].map(h => `
      <g transform="translate(${h.x}, ${h.y}) scale(${h.scale})">
        <circle cx="0" cy="-45" r="9" fill="#F4EFE6" />
        <line x1="0" y1="-36" x2="0" y2="20" stroke="#F4EFE6" stroke-width="4.5" />
        <line x1="0" y1="20" x2="-18" y2="65" stroke="#F4EFE6" stroke-width="4" />
        <line x1="0" y1="20" x2="18" y2="65" stroke="#F4EFE6" stroke-width="4" />
        <!-- Drawn Bow and Arrow -->
        <path d="M15,-30 Q35,0 15,30" stroke="#F4EFE6" stroke-width="3" fill="none" />
        <line x1="25" y1="0" x2="-20" y2="0" stroke="#F4EFE6" stroke-width="2.5" />
      </g>
    `).join('')}
  </svg>`,

  // 3. Phad Painting (Rajasthan) - Long Devotional Scroll of Folk Deities (Pabuji Ki Phad)
  'phad.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#FAF1D8" />
    <!-- Starch-Treated Khadi Cloth Scroll Borders -->
    <rect x="20" y="20" width="760" height="560" fill="none" stroke="#A82B1C" stroke-width="12" />
    <rect x="36" y="36" width="728" height="528" fill="none" stroke="#DCA532" stroke-width="3" />

    <!-- Legendary Hero Pabuji Mounted on Black Mare Kesar Kalmi -->
    <g transform="translate(380, 310)">
      <!-- Majestic Black Mare (Kesar Kalmi) -->
      <ellipse cx="0" cy="40" rx="120" ry="60" fill="#1A1818" stroke="#A82B1C" stroke-width="3" />
      <!-- Arched Neck & Head -->
      <path d="M90,20 C140,-30 150,-80 130,-110 C100,-100 80,-60 60,-20 Z" fill="#1A1818" stroke="#A82B1C" stroke-width="3" />
      <!-- Red Saffron Saddle & Bridle (Zin) -->
      <rect x="-30" y="0" width="70" height="55" fill="#E84A28" stroke="#DCA532" stroke-width="3" />
      <line x1="-70" y1="90" x2="-80" y2="180" stroke="#1A1818" stroke-width="8" stroke-linecap="round" />
      <line x1="70" y1="90" x2="80" y2="180" stroke="#1A1818" stroke-width="8" stroke-linecap="round" />

      <!-- Pabuji in Royal Rajput Turban and Angrakha holding Lance/Spear -->
      <circle cx="-5" cy="-80" r="32" fill="#FCEAD2" stroke="#1A1818" stroke-width="2.5" />
      <!-- Large Characteristic Phad Eye -->
      <ellipse cx="8" cy="-84" rx="14" ry="8" fill="#FFF" stroke="#111" stroke-width="2" />
      <circle cx="10" cy="-84" r="4" fill="#111" />
      <!-- Royal Saffron Turban (Pagadi) with Plume -->
      <path d="M-35,-95 C-20,-140 40,-135 35,-95 Z" fill="#E84A28" stroke="#111" stroke-width="3" />
      <!-- Tall Royal Spear / Lance -->
      <line x1="-80" y1="120" x2="70" y2="-210" stroke="#DCA532" stroke-width="6" stroke-linecap="round" />
      <polygon points="70,-210 85,-240 60,-225" fill="#C49A53" stroke="#A82B1C" stroke-width="2" />
    </g>

    <!-- Narrative Architectural Pavilions on Sides -->
    <g transform="translate(110, 180)">
      <rect x="-50" y="-70" width="100" height="140" fill="#E84A28" stroke="#1A1818" stroke-width="3" />
      <polygon points="0,-110 -60,-70 60,-70" fill="#DCA532" stroke="#1A1818" stroke-width="3" />
    </g>
    <g transform="translate(670, 180)">
      <rect x="-50" y="-70" width="100" height="140" fill="#2E7D52" stroke="#1A1818" stroke-width="3" />
      <polygon points="0,-110 -60,-70 60,-70" fill="#DCA532" stroke="#1A1818" stroke-width="3" />
    </g>
  </svg>`,

  // 4. Kerala Mural Painting (Panchavarna temple mural with Lord Shiva / Krishna)
  'kerala-mural.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <radialGradient id="keralaBg" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="#E8982C" />
        <stop offset="70%" stop-color="#C26B18" />
        <stop offset="100%" stop-color="#8A3E09" />
      </radialGradient>
    </defs>
    <!-- Warm Ochre Temple Plaster Ground -->
    <rect width="800" height="600" fill="url(#keralaBg)" />

    <!-- Traditional Panchavarna Decorative Floral Border -->
    <rect x="25" y="25" width="750" height="550" fill="none" stroke="#2B1408" stroke-width="8" />
    <rect x="38" y="38" width="724" height="524" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="8,6" />

    <!-- Divine Kerala Mural Icon with Ornate Kireedam Crown and Large Fish Eyes -->
    <g transform="translate(400, 310)">
      <!-- Massive Radiant Aureole / Halo (Prabhamandala) -->
      <circle cx="0" cy="-60" r="130" fill="#C26B18" stroke="#2B1408" stroke-width="5" />
      <circle cx="0" cy="-60" r="115" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="10,6" />

      <!-- Glowing Green Divine Face (Satvik / Shiva / Krishna) -->
      <ellipse cx="0" cy="-50" rx="65" ry="75" fill="#3D8E5A" stroke="#2B1408" stroke-width="4" />

      <!-- Magnificent Layered Kerala Temple Crown (Kireedam) -->
      <path d="M-60,-110 L0,-240 L60,-110 Z" fill="#E8B528" stroke="#2B1408" stroke-width="4" />
      <ellipse cx="0" cy="-240" rx="14" ry="10" fill="#B32B1A" stroke="#2B1408" stroke-width="2" />
      <line x1="-35" y1="-150" x2="35" y2="-150" stroke="#2B1408" stroke-width="4" />
      <line x1="-48" y1="-185" x2="48" y2="-185" stroke="#2B1408" stroke-width="4" />

      <!-- Dramatic Classical Kathakali / Mural Eyes Extending to Ears -->
      <path d="M-55,-60 Q-28,-40 0,-55" stroke="#2B1408" stroke-width="3.5" fill="none" />
      <path d="M55,-60 Q28,-40 0,-55" stroke="#2B1408" stroke-width="3.5" fill="none" />
      <ellipse cx="-26" cy="-56" rx="18" ry="11" fill="#FFFFFF" stroke="#2B1408" stroke-width="2.5" />
      <circle cx="-26" cy="-56" r="6" fill="#2B1408" />
      <ellipse cx="26" cy="-56" rx="18" ry="11" fill="#FFFFFF" stroke="#2B1408" stroke-width="2.5" />
      <circle cx="26" cy="-56" r="6" fill="#2B1408" />
      <!-- Red Lips & Sacred Tilak -->
      <path d="M-18,-20 Q0,-5 18,-20 Q0,-12 -18,-20 Z" fill="#B32B1A" stroke="#2B1408" stroke-width="2" />

      <!-- Enormous Beaded Necklaces (Haaram) -->
      <path d="M-50,20 C-40,110 40,110 50,20" fill="none" stroke="#E8B528" stroke-width="18" />
      <path d="M-65,30 C-50,150 50,150 65,30" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-dasharray="10,6" />
    </g>
  </svg>`,

  // 5. Kalighat Painting (West Bengal Patua - Bold Fluid Contours, Cat with Prawn / Babu)
  'kalighat.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#F8F3E9" />
    <rect x="25" y="25" width="750" height="550" fill="none" stroke="#222" stroke-width="4" />

    <!-- Famous Kalighat Sacred Cat with Prawn (Bilai Prawn motif) / Babu Art -->
    <g transform="translate(400, 320)">
      <!-- Voluptuous Rounded Cat Body in Shaded Silver-Grey & Yellow Ochre -->
      <path d="M-110,140 C-160,80 -140,-40 -40,-80 C40,-110 130,-40 120,80 C110,150 20,170 -110,140 Z" fill="#E2C99D" stroke="#111" stroke-width="6" />
      
      <!-- Kalighat Trademark Shading (Wash along outline) -->
      <path d="M-30,-75 C30,-100 110,-40 100,60" stroke="#A88B5E" stroke-width="16" fill="none" opacity="0.6" stroke-linecap="round" />

      <!-- Cat Face with Vaishnava Tilak -->
      <ellipse cx="-40" cy="-60" rx="55" ry="45" fill="#E2C99D" stroke="#111" stroke-width="5" />
      <polygon points="-75,-95 -90,-140 -50,-105" fill="#E2C99D" stroke="#111" stroke-width="4" />
      <polygon points="-25,-105 10,-140 0,-95" fill="#E2C99D" stroke="#111" stroke-width="4" />

      <!-- Broad Bold Sweeping Eye Lines -->
      <ellipse cx="-55" cy="-65" rx="14" ry="9" fill="#FFF" stroke="#111" stroke-width="3" />
      <circle cx="-53" cy="-65" r="4.5" fill="#111" />
      <ellipse cx="-15" cy="-65" rx="14" ry="9" fill="#FFF" stroke="#111" stroke-width="3" />
      <circle cx="-17" cy="-65" r="4.5" fill="#111" />
      <!-- Yellow & Red Vaishnava Tilak on Forehead -->
      <path d="M-38,-100 L-32,-75 L-26,-100 Z" fill="#DCA532" stroke="#A82B1C" stroke-width="1.5" />

      <!-- Giant Freshwater Prawn (Chingri) Clutched in Jaws -->
      <g transform="translate(20, -10) rotate(-20)">
        <path d="M-60,0 C-20,-40 40,-40 90,0 C60,30 0,30 -60,0 Z" fill="#D94E34" stroke="#111" stroke-width="4" />
        <path d="M90,0 Q140,-10 160,20 Q120,20 90,0" fill="#D94E34" stroke="#111" stroke-width="3" />
        <circle cx="80" cy="-5" r="4" fill="#111" />
        <!-- Prawn Whiskers -->
        <path d="M90,-5 Q150,-40 180,-30" stroke="#111" stroke-width="2.5" fill="none" />
        <path d="M90,5 Q150,40 180,30" stroke="#111" stroke-width="2.5" fill="none" />
      </g>
    </g>
  </svg>`
};

for (const [filename, content] of Object.entries(extraSvgs)) {
  fs.writeFileSync(path.join(outDir, filename), content.trim());
  console.log('Created ' + filename);
}
console.log('Extra 5 authentic SVGs successfully generated!');
