import React from 'react';
import { Compass, MapPin, Sparkles, Palette, ArrowRight, ShieldCheck, Landmark } from 'lucide-react';
import ArtworkImage from './ArtworkImage';

export default function HeroSection({ onExploreMapClick, onExploreArtFormsClick }) {
  const stats = [
    { value: '20+', label: 'Art Destinations', sub: 'Across 12+ States', icon: MapPin },
    { value: '15+', label: 'Traditional Art Forms', sub: 'Murals, Folk & Classical', icon: Palette },
    { value: '5+', label: 'Cultural Regions', sub: 'North to South, East to West', icon: Landmark },
  ];

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden bg-mandala-pattern">
      {/* Decorative Traditional Corner Accents */}
      <div className="absolute top-20 left-4 text-heritage-gold/20 select-none text-7xl font-serif pointer-events-none hidden lg:block">
        ❦
      </div>
      <div className="absolute top-20 right-4 text-heritage-gold/20 select-none text-7xl font-serif pointer-events-none hidden lg:block">
        ❧
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-heritage-sand/70 border border-heritage-gold/40 text-heritage-maroonDark text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-heritage-terracotta" />
              <span>Interactive Cultural Odyssey</span>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base font-serif italic text-heritage-terracotta tracking-wide">
              "Every Place Has a Story. Every Art Has a Soul."
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-heritage-maroonDark leading-[1.15] tracking-tight">
              Explore India's <br className="hidden sm:inline" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-heritage-terracotta via-heritage-maroon to-heritage-gold">
                Artistic Heritage
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-heritage-earth/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Travel across the Indian subcontinent through its sacred cave murals, living tribal motifs, courtly miniatures, and vibrant folk canvases. Trace how geography, local soil, sacred beliefs, and generational masters shaped the world's most diverse artistic traditions.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreMapClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-serif font-semibold text-base uppercase tracking-wider bg-gradient-to-r from-heritage-maroon to-heritage-terracotta text-heritage-cream shadow-heritage-lg hover:shadow-heritage-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 border border-heritage-gold/30 group"
              >
                <Compass className="w-5 h-5 text-heritage-gold group-hover:rotate-90 transition-transform duration-500" />
                <span>Explore the Map</span>
                <ArrowRight className="w-4 h-4 text-heritage-gold/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreArtFormsClick}
                className="w-full sm:w-auto px-7 py-4 rounded-full font-serif font-semibold text-base text-heritage-maroonDark bg-heritage-ivory border-2 border-heritage-gold/60 hover:bg-heritage-sand/40 hover:border-heritage-terracotta transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Palette className="w-4 h-4 text-heritage-terracotta" />
                <span>Discover Art Forms</span>
              </button>
            </div>

            {/* Statistics Banner */}
            <div className="pt-8 border-t border-heritage-sand/80 grid grid-cols-3 gap-2 sm:gap-6">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center lg:items-start p-3 rounded-2xl bg-white/40 border border-heritage-sand/60 backdrop-blur-xs">
                    <div className="flex items-center gap-1.5 text-heritage-terracotta mb-1">
                      <Icon className="w-4 h-4" />
                      <span className="font-display font-extrabold text-2xl sm:text-3xl text-heritage-maroon">
                        {item.value}
                      </span>
                    </div>
                    <span className="font-serif font-bold text-xs sm:text-sm text-heritage-earthDark">
                      {item.label}
                    </span>
                    <span className="text-[10px] sm:text-xs text-heritage-earth/70 hidden sm:block">
                      {item.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-heritage-terracotta/30 via-heritage-gold/20 to-heritage-maroon/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Artwork Card */}
              <div className="rounded-3xl bg-heritage-cream border-2 border-heritage-gold/50 shadow-heritage-lg p-3 sm:p-4 overflow-hidden relative">
                <div className="relative rounded-2xl overflow-hidden border border-heritage-sand/80 shadow-inner group">
                  <ArtworkImage
                    src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80"
                    alt="Madhubani Traditional Painting"
                    fallbackTitle="Madhubani Folk Painting"
                    category="Mithila Heritage"
                    aspectRatio="aspect-[4/3]"
                  />

                  {/* Artwork Overlay Badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-heritage-earthDark/90 via-heritage-earthDark/60 to-transparent p-4 text-heritage-cream">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-heritage-gold">
                          Featured Art Tradition
                        </span>
                        <h4 className="font-serif font-bold text-lg text-heritage-cream">
                          Madhubani / Mithila Painting
                        </h4>
                        <p className="text-xs text-heritage-sand/90">
                          Bihar • Natural dyes on handmade paper
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-heritage-gold/20 backdrop-blur-sm border border-heritage-gold/40 flex items-center justify-center text-heritage-gold font-serif">
                        ❂
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="mt-3 flex items-center justify-between text-xs text-heritage-earth/80 px-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    Living Intangible Cultural Heritage
                  </span>
                  <span className="font-serif italic text-heritage-terracotta">
                    Kala Yatra Digital Archive
                  </span>
                </div>
              </div>

              {/* Floating Mini Accent Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-heritage-cream/95 backdrop-blur-md p-3.5 rounded-2xl border border-heritage-gold/50 shadow-heritage items-center gap-3 max-w-xs animate-bounce-subtle">
                <div className="w-10 h-10 rounded-xl bg-heritage-terracotta text-heritage-cream flex items-center justify-center font-bold font-serif text-lg">
                  20
                </div>
                <div className="text-xs">
                  <p className="font-bold text-heritage-maroonDark">Curated Art Hubs</p>
                  <p className="text-heritage-earth/70">From Ajanta to Tanjore & Kutch</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

