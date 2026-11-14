import React from 'react';
import { MapPin, RotateCcw } from 'lucide-react';
import { REGIONS, STATES } from '../data/indianArtData';

export default function StateExplorer({
  states = STATES,
  selectedState,
  onSelectState,
  selectedRegion,
  onSelectRegion,
  onResetSelection
}) {
  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-gold/40 shadow-lavender-card space-y-4 relative overflow-hidden">
      
      {/* Decorative Gold Filigree */}
      <div className="absolute top-2 right-4 text-gold/25 text-3xl font-serif select-none pointer-events-none">
        ❧
      </div>

      {/* Top Header & Region Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-lavender-borderGold/50 pb-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-royal-plum" />
          <span className="font-serif font-bold text-sm uppercase tracking-wider text-royal-deep">
            Filter by Cultural Region:
          </span>
        </div>

        {/* Region Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {REGIONS.map((reg) => {
            const isSelected = selectedRegion === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => onSelectRegion(reg.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-serif transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-royal-main via-royal-plum to-gold-rich text-white shadow-md font-bold'
                    : 'bg-lavender-light text-lavender-charcoal border border-lavender-border hover:border-gold hover:text-royal-plum'
                }`}
              >
                {reg.label}
              </button>
            );
          })}

          {selectedState && (
            <button
              onClick={onResetSelection}
              className="ml-auto px-3 py-1 rounded-full text-xs text-terracotta hover:bg-terracotta/10 border border-terracotta/40 font-medium flex items-center gap-1 transition-colors"
              title="Reset state selection"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* State Buttons Illustrated Grid */}
      <div className="flex flex-wrap gap-2.5 pt-1">
        {states.map((st) => {
          const isSelected = selectedState && selectedState.id === st.id;
          return (
            <button
              key={st.id}
              onClick={() => onSelectState(st)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-serif transition-all duration-300 flex items-center gap-2.5 ${
                isSelected
                  ? 'bg-gradient-to-r from-gold via-gold-light to-gold text-royal-deep font-bold shadow-gold-glow ring-2 ring-gold scale-105'
                  : 'bg-white border-2 border-lavender-borderGold/60 hover:border-gold text-lavender-charcoal hover:text-royal-plum hover:bg-lavender-light hover:scale-[1.02]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-royal-deep animate-pulse' : 'bg-gold'}`} />
              <span className="tracking-wide">{st.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans font-bold ${
                isSelected ? 'bg-royal-deep/15 text-royal-deep' : 'bg-lavender-light text-royal-plum border border-lavender-border'
              }`}>
                {st.artFormIds.length} {st.artFormIds.length === 1 ? 'Art' : 'Arts'}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
