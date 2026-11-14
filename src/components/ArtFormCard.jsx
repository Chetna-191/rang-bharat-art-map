import React from 'react';
import { Palette, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function ArtFormCard({ art, onSelectArtForm, className = '' }) {
  if (!art) return null;

  return (
    <div className={`group rounded-3xl bg-white border-2 border-lavender-borderGold/60 hover:border-gold shadow-lavender-card hover:shadow-lavender-card-hover transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-1.5 relative ${className}`}>
      
      {/* Decorative Golden Corner Filigree */}
      <div className="absolute top-2 right-2 text-gold/30 text-xl font-serif pointer-events-none group-hover:text-gold transition-colors z-20">
        ❦
      </div>

      {/* Large Artwork Image Container with Gilded Frame Accent */}
      <div className="relative aspect-[4/3] bg-lavender-mist overflow-hidden border-b border-lavender-borderGold/40">
        <img
          src={art.heroImage}
          alt={art.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-95"
        />

        {/* Category & State Tag */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-3 py-1 rounded-full bg-royal-main/90 backdrop-blur-sm text-gold-light text-xs font-semibold uppercase tracking-wider border border-gold/40 shadow-xs">
            {art.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-royal-plum text-xs font-serif font-bold border border-gold/40 shadow-xs">
            {art.stateName}
          </span>
        </div>

        {/* Traditional Motif Overlay Watermark */}
        <div className="absolute bottom-2 right-2 text-gold/30 font-serif text-3xl select-none pointer-events-none group-hover:text-gold/60 transition-colors">
          ❂
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-gold-rich font-semibold mb-1.5">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gold-rich" />
            <span className="truncate">{art.originLocation}</span>
          </div>

          <h3 className="font-serif font-bold text-xl text-royal-deep group-hover:text-royal-plum transition-colors leading-snug">
            {art.name}
          </h3>

          <p className="text-xs sm:text-sm text-lavender-charcoal/80 mt-2.5 leading-relaxed line-clamp-3">
            {art.shortDescription}
          </p>
        </div>

        {/* View Art Details Button */}
        <button
          onClick={() => onSelectArtForm(art)}
          className="w-full py-3 px-4 rounded-xl font-serif font-semibold text-xs uppercase tracking-wider bg-lavender-light text-royal-deep border border-lavender-borderGold group-hover:bg-gradient-to-r group-hover:from-royal-main group-hover:to-gold-rich group-hover:text-white group-hover:border-gold transition-all duration-300 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
        >
          <Palette className="w-3.5 h-3.5 text-royal-plum group-hover:text-gold-light transition-colors" />
          <span>View Complete Dossier</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}
