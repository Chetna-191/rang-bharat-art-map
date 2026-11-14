import React, { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin, Palette, ArrowRight } from 'lucide-react';
import { STATES, ART_FORMS } from '../data/indianArtData';

export default function SearchBar({ onSelectState, onSelectArtForm, className = '' }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Compute suggestions based on query
  const q = query.trim().toLowerCase();

  const matchedStates = q ? STATES.filter((s) => 
    s.name.toLowerCase().includes(q) ||
    s.tagline.toLowerCase().includes(q) ||
    s.historicalLocations.some(loc => loc.toLowerCase().includes(q))
  ) : [];

  const matchedArtForms = q ? ART_FORMS.filter((a) =>
    a.name.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.originLocation.toLowerCase().includes(q) ||
    a.shortDescription.toLowerCase().includes(q) ||
    a.stateName.toLowerCase().includes(q)
  ) : [];

  const hasResults = matchedStates.length > 0 || matchedArtForms.length > 0;

  const handleStateClick = (state) => {
    setQuery('');
    setIsOpen(false);
    onSelectState(state);
  };

  const handleArtClick = (art) => {
    setQuery('');
    setIsOpen(false);
    onSelectArtForm(art);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      
      {/* Search Input Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-royal-plum">
          <Search className="w-5 h-5 text-royal-plum" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search by state (e.g. Maharashtra), art form (e.g. Warli), or historical site..."
          className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border-2 border-gold/40 focus:border-royal-plum text-lavender-charcoal text-sm placeholder:text-lavender-dim focus:outline-none focus:ring-2 focus:ring-royal-violet/20 shadow-sm transition-all"
        />

        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-lavender-dim hover:text-royal-plum"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Autocomplete Suggestions Dropdown */}
      {isOpen && query.trim() !== '' && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-gold/40 shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto animate-fadeIn">
          
          {!hasResults ? (
            <div className="p-6 text-center text-sm text-lavender-muted">
              No states or art forms found matching <span className="font-semibold text-royal-plum">"{query}"</span>. Try searching "Warli", "Madhubani", "Odisha", or "Kalamkari".
            </div>
          ) : (
            <div className="divide-y divide-lavender-border">
              
              {/* Matched States Section */}
              {matchedStates.length > 0 && (
                <div className="p-2">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-royal-plum font-serif">
                    States & Regions ({matchedStates.length})
                  </div>
                  {matchedStates.map((st) => (
                    <button
                      key={st.id}
                      onClick={() => handleStateClick(st)}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-lavender-light transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-royal-main text-gold flex items-center justify-center font-serif border border-gold/40">
                          <MapPin className="w-4 h-4 text-gold-light" />
                        </div>
                        <div>
                          <div className="font-serif font-bold text-sm text-royal-deep group-hover:text-royal-plum transition-colors">
                            {st.name}
                          </div>
                          <div className="text-[11px] text-lavender-muted">
                            {st.region} • {st.artFormIds.length} Art Form{st.artFormIds.length > 1 ? 's' : ''}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-royal-plum/40 group-hover:text-royal-plum group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              )}

              {/* Matched Art Forms Section */}
              {matchedArtForms.length > 0 && (
                <div className="p-2">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-gold-rich font-serif">
                    Art Traditions ({matchedArtForms.length})
                  </div>
                  {matchedArtForms.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => handleArtClick(art)}
                      className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-lavender-light transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold-rich flex items-center justify-center border border-gold/40">
                          <Palette className="w-4 h-4 text-gold-rich" />
                        </div>
                        <div>
                          <div className="font-serif font-bold text-sm text-royal-deep group-hover:text-royal-plum transition-colors">
                            {art.name}
                          </div>
                          <div className="text-[11px] text-lavender-muted">
                            {art.stateName} • <span className="text-royal-plum font-semibold">{art.category}</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gold/60 group-hover:text-gold-rich group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              )}

            </div>
          )}

        </div>
      )}

    </div>
  );
}
