import React from 'react';
import { MapPin, Landmark, ArrowLeft, Sparkles, Layers } from 'lucide-react';
import ArtFormCard from './ArtFormCard';
import { ART_FORMS } from '../data/indianArtData';

export default function StateDetails({ state, onSelectArtForm, onBackToMap }) {
  if (!state) return null;

  // Filter art forms specifically belonging to this selected state
  const stateArtForms = ART_FORMS.filter((a) => state.artFormIds.includes(a.id));

  return (
    <section className="mt-12 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border-2 border-gold/40 shadow-lavender-card animate-fadeIn relative overflow-hidden">
      
      {/* Decorative Gold Filigree Watermark */}
      <div className="absolute top-4 right-6 text-gold/20 text-7xl font-serif select-none pointer-events-none">
        ❦
      </div>

      {/* Top Breadcrumb / Back Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-lavender-borderGold/50 gap-4">
        <button
          onClick={onBackToMap}
          className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-royal-deep hover:text-royal-plum transition-colors py-2 px-4 rounded-xl bg-lavender-light hover:bg-lavender-mist border border-lavender-borderGold/60 shadow-xs w-fit"
        >
          <ArrowLeft className="w-4 h-4 text-gold-rich" />
          <span>Back to All States</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-medium text-lavender-muted">
          <span>Home</span>
          <span>›</span>
          <span>Explore India</span>
          <span>›</span>
          <span className="font-serif font-bold text-royal-plum">{state.name}</span>
        </div>
      </div>

      {/* State Hero Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-8 border-b border-lavender-borderGold/50">
        
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal-main text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/40 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-gold-light" />
            <span>{state.region} • Capital: {state.capital}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-lavender-gold uppercase tracking-tight">
            {state.name}
          </h2>

          <p className="text-lg sm:text-xl font-serif italic text-gold-rich font-semibold leading-relaxed">
            "{state.tagline}"
          </p>

          <p className="text-sm sm:text-base text-lavender-charcoal/85 leading-relaxed font-sans max-w-3xl">
            {state.culturalIntroduction}
          </p>

          {/* Historical Centers */}
          <div className="pt-2">
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-royal-main block mb-2">
              Key Historical & Craft Centers:
            </span>
            <div className="flex flex-wrap gap-2">
              {state.historicalLocations.map((loc, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-lavender-light text-royal-deep text-xs font-serif font-medium border border-lavender-border hover:border-gold flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <Landmark className="w-3.5 h-3.5 text-terracotta" />
                  <span>{loc}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* State Artwork Preview Card */}
        <div className="lg:col-span-4">
          <div className="p-3 bg-white rounded-3xl border-2 border-gold/40 shadow-lavender-card hover:shadow-lavender-card-hover aspect-[4/3] relative overflow-hidden group transition-all duration-300">
            <div className="rounded-2xl overflow-hidden w-full h-full bg-lavender-mist relative">
              <img
                src={state.heroImage}
                alt={state.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-royal-deep via-royal-deep/80 to-transparent p-3 text-gold-light text-xs font-serif">
                <span>{state.name} Traditional Masterwork</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Associated Art Forms Section */}
      <div className="pt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-gold-rich font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-rich" />
              <span>Living Cultural Traditions</span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-royal-deep flex items-center gap-2">
              <span>Indigenous Art Forms of {state.name}</span>
            </h3>
            <p className="text-xs sm:text-sm text-lavender-muted mt-1 max-w-2xl">
              The regional geography, mud soils, and dynastic patrons of {state.name} gave birth to these distinctive artistic expressions.
            </p>
          </div>

          <span className="px-4 py-1.5 rounded-full bg-royal-main text-gold-light text-xs font-serif font-bold shadow-gold-glow self-start sm:self-auto border border-gold/40">
            {stateArtForms.length} Master Tradition{stateArtForms.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Dynamic Art Form Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {stateArtForms.map((art) => (
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
