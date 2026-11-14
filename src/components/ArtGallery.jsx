import React, { useState, useMemo } from 'react';
import { Palette, Filter, Sparkles, Layers } from 'lucide-react';
import ArtFormCard from './ArtFormCard';
import { ART_FORMS, ART_CATEGORIES } from '../data/indianArtData';

export default function ArtGallery({ onSelectArtForm }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter artworks by category
  const filteredArtworks = useMemo(() => {
    if (selectedCategory === 'all') return ART_FORMS;
    return ART_FORMS.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="art-collections" className="py-20 sm:py-28 bg-lavender-shimmer border-t border-b border-lavender-borderGold/50 relative bg-lavender-jaali">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal-main text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/40 shadow-xs">
            <Palette className="w-3.5 h-3.5 text-gold-light" />
            <span>Curated Permanent Collections</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-lavender-gold tracking-tight editorial-line-gold pb-2">
            Explore India's Living Art Traditions
          </h2>

          <p className="text-sm sm:text-base text-lavender-charcoal/85 leading-relaxed font-sans pt-2">
            An editorial anthology celebrating India’s ancestral indigenous forms, sacred temple frescoes, courtly miniatures, and nomadic scrolls in an illuminated royal palette.
          </p>

          {/* Category Filter Chips */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {ART_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = cat.id === 'all' 
                ? ART_FORMS.length 
                : ART_FORMS.filter(a => a.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-serif transition-all duration-300 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-royal-main via-royal-plum to-gold-rich text-white font-bold shadow-md scale-105 border border-gold/40'
                      : 'bg-white text-lavender-charcoal border-2 border-lavender-borderGold/60 hover:border-gold hover:text-royal-plum hover:bg-lavender-light'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-lavender-light text-royal-plum'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredArtworks.map((art) => (
            <ArtFormCard
              key={art.id}
              art={art}
              onSelectArtForm={onSelectArtForm}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
