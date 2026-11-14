import React, { useState, useEffect } from 'react';
import { Compass, Palette, ArrowDown, Sparkles, ChevronRight } from 'lucide-react';

const HERO_SHOWCASE = [
  {
    id: 'warli',
    title: 'Warli Tribal Painting',
    state: 'Maharashtra',
    tag: 'Ancestral Geometry',
    image: '/art/warli.svg',
    quote: 'White rice paste circles honoring nature, harvest, and the eternal Tarpa spiral.'
  },
  {
    id: 'madhubani',
    title: 'Madhubani Painting',
    state: 'Bihar',
    tag: 'Mithila Double-Line',
    image: '/art/madhubani.svg',
    quote: 'Sacred wedding chambers filled with radiating peacocks, fish, and sun deities.'
  },
  {
    id: 'tanjore',
    title: 'Tanjore Sacred Art',
    state: 'Tamil Nadu',
    tag: '22-Carat Gold Relief',
    image: '/art/tanjore.svg',
    quote: 'Luminous baby Krishna embellished with pure gold leaf and Jaipur gemstones.'
  },
  {
    id: 'rogan',
    title: 'Kutch Rogan Art',
    state: 'Gujarat',
    tag: 'Castor Oil Alchemy',
    image: '/art/rogan.svg',
    quote: 'Miraculous threads of boiled castor paint sculpted in mid-air with an iron stylus.'
  }
];

export default function Hero({ onExploreMapClick, onDiscoverArtClick, onOpenQuiz }) {
  const [activeTab, setActiveTab] = useState(0);

  // Auto rotate showcase every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % HERO_SHOWCASE.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = HERO_SHOWCASE[activeTab];

  return (
    <section id="home" className="relative min-h-[94vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-lavender-shimmer">
      
      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-28 left-6 text-gold/20 select-none text-8xl font-serif pointer-events-none hidden lg:block">
        ❦
      </div>
      <div className="absolute top-28 right-6 text-gold/20 select-none text-8xl font-serif pointer-events-none hidden lg:block">
        ❧
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        
        {/* Sanskrit Cultural Invocation Shloka Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/90 border border-gold/50 shadow-sm text-xs font-serif text-royal-deep">
            <span className="text-gold font-bold">❂</span>
            <span className="font-semibold text-royal-plum italic">“कलानां प्रवरं चित्रं धर्मकामार्थमोक्षदम्”</span>
            <span className="text-gold">•</span>
            <span className="text-lavender-muted text-[11px] hidden sm:inline">“Art is supreme among all heritage, granting virtue and liberation”</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal-main text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-light" />
              <span>Royal Lavender & Golden Gallery</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-royal-deep leading-[1.14] tracking-tight">
              Discover the Soul of <br className="hidden sm:inline" />
              <span className="text-lavender-gold relative inline-block">
                Indian Art
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-gold via-royal-plum to-transparent rounded-full" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-lavender-charcoal/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Journey through India's states, discover their artistic traditions, and explore the stories behind centuries of creativity in an illuminated royal palette.
            </p>

            {/* High-Contrast CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreMapClick}
                className="btn-royal-primary w-full sm:w-auto px-8 py-4 rounded-full font-serif font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-3 cursor-pointer group shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #240E40 0%, #581C87 50%, #B45309 100%)',
                  color: '#FFF2C6',
                  borderColor: '#D4AF37',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                }}
              >
                <Compass className="w-5 h-5 text-gold-light group-hover:rotate-90 transition-transform duration-500 flex-shrink-0" />
                <span className="font-bold tracking-wider" style={{ color: '#FFF2C6' }}>Explore the Map</span>
              </button>

              <button
                onClick={onOpenQuiz}
                className="btn-royal-secondary w-full sm:w-auto px-7 py-4 rounded-full font-serif font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-sm hover:scale-[1.02]"
                style={{
                  background: '#FFFFFF',
                  color: '#240E40',
                  borderColor: '#D4AF37',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                }}
              >
                <Sparkles className="w-4 h-4 text-royal-plum group-hover:rotate-12 transition-transform flex-shrink-0" />
                <span className="font-bold" style={{ color: '#240E40' }}>Match Your Soul Art</span>
              </button>
            </div>

            {/* Showcase Quick Selector Tabs */}
            <div className="pt-4 border-t border-lavender-borderGold">
              <span className="text-[11px] font-serif uppercase tracking-wider text-royal-main block mb-2 font-bold">
                Featured Living Masterpieces:
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {HERO_SHOWCASE.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-serif transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === idx
                        ? 'bg-gradient-to-r from-gold to-gold-light text-royal-deep font-bold shadow-gold-glow scale-105 border border-gold'
                        : 'bg-white border border-lavender-border hover:border-gold text-lavender-charcoal hover:text-royal-plum'
                    }`}
                  >
                    <span>{item.title.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Visual Element: Dynamic Living Canvas Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Ornate Gilded Lavender Frame */}
              <div className="p-3.5 bg-white rounded-3xl border-2 border-gold/40 shadow-lavender-card hover:shadow-lavender-card-hover transition-all duration-300 relative overflow-hidden group">
                
                {/* Visual Artwork Showcase */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-lavender-mist border border-lavender-border">
                  <img
                    key={current.id}
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-all duration-700 animate-fadeIn"
                  />

                  {/* Top State Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-royal-deep/90 backdrop-blur-sm text-gold-light text-xs font-semibold uppercase tracking-wider border border-gold/40 shadow-sm">
                      {current.state}
                    </span>
                  </div>

                  {/* Overlay Cultural Badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-royal-deep via-royal-deep/75 to-transparent p-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-light">
                      {current.tag}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-white leading-snug">
                      {current.title}
                    </h4>
                    <p className="text-xs text-lavender-lightest/90 italic mt-0.5 line-clamp-1">
                      "{current.quote}"
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive Strip */}
                <div className="mt-3 flex items-center justify-between text-xs text-lavender-muted px-2">
                  <button
                    onClick={onExploreMapClick}
                    className="flex items-center gap-1 text-royal-plum hover:text-gold-rich font-serif font-bold transition-colors cursor-pointer"
                  >
                    <span>Locate on Map</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gold-rich" />
                  </button>
                  <span className="font-serif italic text-gold-rich font-semibold">
                    ✦ Authentic Vector Archive
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Small Scroll Indicator */}
      <div className="text-center pt-6 pb-2">
        <button
          onClick={onExploreMapClick}
          className="inline-flex flex-col items-center text-xs text-lavender-muted hover:text-royal-plum transition-colors gap-1 group cursor-pointer"
        >
          <span className="font-serif uppercase tracking-widest text-[10px] font-semibold">Scroll to Map Explorer</span>
          <ArrowDown className="w-4 h-4 text-gold group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Statistics Strip Below Hero */}
      <div className="border-t border-gold/30 bg-white/90 backdrop-blur-xs py-5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            <div className="flex flex-col items-center justify-center p-2">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-royal-main">
                28+ States & UTs
              </span>
              <span className="text-xs text-lavender-muted font-medium mt-0.5">
                Covering Regional Artistic Hubs
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 border-y md:border-y-0 md:border-x border-lavender-borderGold">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-terracotta">
                20+ Featured Art Traditions
              </span>
              <span className="text-xs text-lavender-muted font-medium mt-0.5">
                Folk, Tribal, Classical & Murals
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-gold-rich">
                Centuries of Heritage
              </span>
              <span className="text-xs text-lavender-muted font-medium mt-0.5">
                From Prehistoric Caves to Living Masters
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
