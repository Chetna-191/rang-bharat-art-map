import React from 'react';
import { Palette, MapPin, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_ART_FORMS } from '../data/artLocations';
import ArtworkImage from './ArtworkImage';

export default function ArtFormsGallery({ onExploreArtForm }) {
  return (
    <section id="art-forms" className="py-20 bg-heritage-ivory/60 border-t border-b border-heritage-sand relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-heritage-sand/80 border border-heritage-gold/40 text-heritage-maroonDark text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Palette className="w-3.5 h-3.5 text-heritage-terracotta" />
            <span>Master Traditions of India</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-heritage-maroonDark tracking-tight heritage-border-bottom pb-4">
            Explore Sacred & Folk Art Forms
          </h2>

          <p className="text-sm sm:text-base text-heritage-earth/80 leading-relaxed font-sans pt-2">
            From the earthen mud walls of Mithila and the tribal rhythm of Warli, to the gold leaf panels of Thanjavur and the delicate hills of Kangra. Select an art form to journey straight to its geographical cradle on the interactive map.
          </p>
        </div>

        {/* Art Form Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {FEATURED_ART_FORMS.map((art) => (
            <div
              key={art.id}
              className="group rounded-2xl bg-heritage-cream border border-heritage-sand hover:border-heritage-gold/80 shadow-heritage hover:shadow-heritage-lg transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-heritage-sand/40">
                <ArtworkImage
                  src={art.image}
                  alt={art.name}
                  fallbackTitle={art.name}
                  category={art.state}
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-500"
                />

                {/* State Badge on Image */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-heritage-earthDark/80 backdrop-blur-sm text-heritage-cream text-xs font-medium border border-white/20">
                    <MapPin className="w-3 h-3 text-heritage-gold" />
                    <span>{art.state}</span>
                  </span>
                </div>

                {/* Traditional Motifs Watermark */}
                <div className="absolute bottom-2 right-2 text-heritage-gold/20 font-serif text-2xl select-none pointer-events-none group-hover:text-heritage-gold/40 transition-colors">
                  ❂
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-heritage-maroonDark group-hover:text-heritage-terracotta transition-colors leading-snug">
                    {art.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-heritage-earth/80 mt-2 leading-relaxed">
                    {art.description}
                  </p>
                </div>

                {/* Explore Art Action Button */}
                <button
                  onClick={() => onExploreArtForm(art.targetLocationId)}
                  className="w-full py-2.5 px-4 rounded-xl font-serif font-semibold text-xs uppercase tracking-wider bg-heritage-ivory text-heritage-maroonDark border border-heritage-gold/50 group-hover:bg-gradient-to-r group-hover:from-heritage-maroon group-hover:to-heritage-terracotta group-hover:text-heritage-cream group-hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
                >
                  <Compass className="w-3.5 h-3.5 text-heritage-terracotta group-hover:text-heritage-gold group-hover:rotate-45 transition-all" />
                  <span>Explore Art on Map</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-serif text-heritage-terracotta italic">
            ✦ Each traditional art form is intimately shaped by its regional geography, minerals, river silt, and cultural memories ✦
          </p>
        </div>

      </div>
    </section>
  );
}

