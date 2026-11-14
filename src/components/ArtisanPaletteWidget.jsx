import React, { useState } from 'react';
import { Sparkles, Palette, ArrowRight, Layers, Eye } from 'lucide-react';

const PIGMENTS = [
  {
    name: 'Rice Flour & Babool Gum',
    hindi: 'चावल का लेप (Chawal Paste)',
    artForm: 'Warli Painting',
    artId: 'warli',
    colorHex: '#FDFBF7',
    borderCol: '#D4AF37',
    textColor: '#3E196B',
    origin: 'Maharashtra Sahyadri',
    story: 'Freshly ground unpolished rice flour blended with natural gum from the acacia babool tree. Painted on red mud walls using chewed bamboo sticks.',
    tradition: 'Tribal Harvest Rituals'
  },
  {
    name: 'Boiled Castor Oil Gel',
    hindi: 'रोगन जेल (Rogan Paste)',
    artForm: 'Rogan Art',
    artId: 'rogan',
    colorHex: '#E25822',
    borderCol: '#F59E0B',
    textColor: '#FFFFFF',
    origin: 'Kutch, Gujarat',
    story: 'Pure castor oil boiled continuously for two days until it transforms into an elastic gel. Drawn in mid-air with a blunt stylus without touching the cloth.',
    tradition: 'Rare Khatri Family Craft'
  },
  {
    name: '22-Carat Pure Gold Leaf',
    hindi: 'स्वर्ण वर्क (Swarna Varak)',
    artForm: 'Tanjore Painting',
    artId: 'tanjore',
    colorHex: '#E5B842',
    borderCol: '#B45309',
    textColor: '#240E40',
    origin: 'Thanjavur, Tamil Nadu',
    story: 'Ultra-thin beaten pure gold foil laid over raised gesso relief made of limestone and gum. Shimmers under temple oil lamp light without tarnishing.',
    tradition: 'Chola & Maratha Royal Icons'
  },
  {
    name: 'True Fermented Indigo',
    hindi: 'नील (Natural Neel)',
    artForm: 'Kalamkari & Madhubani',
    artId: 'kalamkari',
    colorHex: '#1E3D59',
    borderCol: '#7C3AED',
    textColor: '#FFFFFF',
    origin: 'Andhra Pradesh & Bihar',
    story: 'Fermented leaves of the Indigofera plant providing deep celestial blues for Krishna, peacock feathers, and sacred waters washed in flowing rivers.',
    tradition: 'Sacred Textile Dyes'
  },
  {
    name: 'Pulverized Conch Shell',
    hindi: 'शंख भस्म (Shankha White)',
    artForm: 'Pattachitra Painting',
    artId: 'pattachitra',
    colorHex: '#FAF4E8',
    borderCol: '#B45309',
    textColor: '#3E196B',
    origin: 'Puri, Odisha',
    story: 'Sacred sea conch shells roasted over charcoal fire and ground with pestles into an ethereal white pigment for Lord Balabhadra and temple scrolls.',
    tradition: 'Jagannath Temple Sadhana'
  },
  {
    name: 'Crushed Lapis Lazuli',
    hindi: 'लाजवर्त (Lajward)',
    artForm: 'Ajanta Cave Paintings',
    artId: 'ajanta',
    colorHex: '#1D4B75',
    borderCol: '#D4AF37',
    textColor: '#FFFFFF',
    origin: 'Ancient Trade Routes',
    story: 'A precious semi-precious blue mineral brought via Silk Route passes to the Ajanta gorge to paint the blue lotus of Bodhisattva Padmapani.',
    tradition: 'Classical Buddhist Murals'
  }
];

export default function ArtisanPaletteWidget({ onSelectArtById }) {
  const [selectedPigment, setSelectedPigment] = useState(PIGMENTS[0]);

  return (
    <div className="rounded-3xl p-6 sm:p-8 bg-white border-2 border-gold/40 shadow-lavender-card relative overflow-hidden">
      
      {/* Corner Filigree */}
      <div className="absolute top-3 right-4 text-gold/25 text-3xl font-serif select-none pointer-events-none">
        ❦
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-lavender-borderGold/50 pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-widest text-royal-plum font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5 text-gold-rich" />
            <span>Material Chemistry of Heritage</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-lavender-gold">
            The Artisan's Living Alchemy
          </h3>
          <p className="text-xs sm:text-sm text-lavender-muted mt-0.5">
            Discover how natural minerals, boiled seeds, and conch shells created India's permanent artistic palette.
          </p>
        </div>

        <div className="text-xs font-serif italic text-gold-light bg-royal-main px-3.5 py-1.5 rounded-xl border border-gold/40 shadow-xs w-fit">
          ✦ 100% Organic Earth Pigments
        </div>
      </div>

      {/* Swatches Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {PIGMENTS.map((pigment, idx) => {
          const isSelected = selectedPigment.name === pigment.name;
          return (
            <button
              key={idx}
              onClick={() => setSelectedPigment(pigment)}
              className={`p-3.5 rounded-2xl border-2 transition-all text-left flex flex-col justify-between h-28 relative ${
                isSelected 
                  ? 'border-gold ring-2 ring-gold scale-105 shadow-gold-glow bg-lavender-light' 
                  : 'border-lavender-border hover:border-gold hover:bg-lavender-light/50 bg-white'
              }`}
            >
              {/* Circular Color Swatch */}
              <div 
                className="w-8 h-8 rounded-full border-2 shadow-xs mb-2 transition-transform hover:scale-110"
                style={{ backgroundColor: pigment.colorHex, borderColor: pigment.borderCol }}
              />

              <div>
                <h5 className="font-serif font-bold text-xs text-royal-deep leading-tight line-clamp-1">
                  {pigment.name.split(' ')[0]}
                </h5>
                <span className="text-[10px] text-royal-plum font-semibold block truncate">
                  {pigment.artForm}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Pigment Spotlight Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-lavender-light/70 border-2 border-gold/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="flex items-start gap-4">
          <div 
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 shadow-md flex-shrink-0 flex items-center justify-center font-serif text-lg font-bold"
            style={{ 
              backgroundColor: pigmentColorStyle(selectedPigment.colorHex), 
              borderColor: selectedPigment.borderCol,
              color: selectedPigment.textColor
            }}
          >
            ❂
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif italic text-royal-plum font-bold">
                {selectedPigment.hindi}
              </span>
              <span className="text-gold font-bold">•</span>
              <span className="text-xs text-lavender-muted font-medium">
                {selectedPigment.origin}
              </span>
            </div>
            <h4 className="font-serif font-bold text-lg sm:text-xl text-royal-deep">
              {selectedPigment.name}
            </h4>
            <p className="text-xs sm:text-sm text-lavender-charcoal/85 leading-relaxed max-w-2xl">
              {selectedPigment.story}
            </p>
          </div>
        </div>

        <button
          onClick={() => onSelectArtById(selectedPigment.artId)}
          className="flex-shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-royal-main via-royal-plum to-gold-rich text-white hover:shadow-gold-glow text-xs font-serif font-semibold uppercase tracking-wider flex items-center gap-2 transition-all border border-gold/40 shadow-sm"
        >
          <span>Explore {selectedPigment.artForm}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}

function pigmentColorStyle(color) {
  return color;
}
