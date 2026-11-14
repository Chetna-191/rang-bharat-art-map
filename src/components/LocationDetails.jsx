import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Palette, 
  BookOpen, 
  Users, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  Layers, 
  Share2, 
  Check,
  ExternalLink 
} from 'lucide-react';
import ArtworkImage from './ArtworkImage';

export default function LocationDetails({ location, onClose, onLocateOnMap }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Reset active image and expansion when location changes
  useEffect(() => {
    setActiveImageIndex(0);
    setIsExpanded(false);
  }, [location?.id]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!location) return null;

  const currentGallery = location.gallery && location.gallery.length > 0 
    ? location.gallery 
    : [location.primaryImage];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-heritage-earthDark/60 backdrop-blur-sm flex justify-end transition-opacity duration-300">
      
      {/* Clickable Backdrop Scrim */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Slide-over Content Container */}
      <div className="relative w-full max-w-2xl bg-heritage-cream min-h-full shadow-2xl border-l border-heritage-gold/40 flex flex-col z-10 animate-slide-left">
        
        {/* Sticky Header with Actions */}
        <div className="sticky top-0 z-20 bg-heritage-cream/95 backdrop-blur-md px-6 py-4 border-b border-heritage-sand flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-heritage-terracotta" />
            <span className="text-xs uppercase font-serif tracking-widest text-heritage-maroonDark font-semibold">
              Heritage Dossier
            </span>
            <span className="text-heritage-gold">/</span>
            <span className="text-xs font-medium text-heritage-earth/70">
              {location.region}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-heritage-sand/50 text-heritage-earth/80 transition-colors"
              title="Share Location"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-heritage-maroon hover:text-heritage-gold transition-colors text-heritage-earthDark"
              title="Close (Esc)"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          
          {/* Main Visual Gallery Showcase */}
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden border border-heritage-gold/40 shadow-heritage relative group">
              <ArtworkImage
                src={currentGallery[activeImageIndex]}
                alt={location.name}
                fallbackTitle={location.name}
                category={location.category}
                aspectRatio="aspect-[16/10]"
              />

              {/* State & Period Overlay Badges */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-heritage-maroonDark/85 backdrop-blur-sm text-heritage-gold text-xs font-semibold uppercase tracking-wider border border-heritage-gold/30">
                  {location.state}
                </span>
                <span className="px-3 py-1 rounded-full bg-heritage-earthDark/80 backdrop-blur-sm text-heritage-cream text-xs font-medium border border-white/20">
                  {location.category}
                </span>
              </div>
            </div>

            {/* Thumbnail Switcher if multiple images exist */}
            {currentGallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {currentGallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx 
                        ? 'border-heritage-terracotta ring-2 ring-heritage-gold shadow-md' 
                        : 'border-heritage-sand opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`View ${idx + 1}`} 
                      className="w-full h-full object-cover" 
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title and Style Header */}
          <div className="border-b border-heritage-sand pb-5">
            <div className="flex items-center gap-2 text-heritage-terracotta font-serif text-sm font-semibold mb-1">
              <Palette className="w-4 h-4" />
              <span>{location.artStyle}</span>
            </div>

            <h2 className="text-3xl font-serif font-extrabold text-heritage-maroonDark leading-tight">
              {location.name}
            </h2>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-3 text-xs sm:text-sm text-heritage-earth">
              <div className="flex items-center gap-1.5 text-heritage-maroon">
                <MapPin className="w-4 h-4 text-heritage-terracotta" />
                <span className="font-semibold">{location.location}, {location.state}</span>
              </div>
              <div className="flex items-center gap-1.5 text-heritage-earth/80">
                <Calendar className="w-4 h-4 text-heritage-goldDark" />
                <span>{location.period}</span>
              </div>
            </div>

            <p className="mt-4 text-heritage-earth/90 text-sm sm:text-base leading-relaxed italic border-l-2 border-heritage-terracotta pl-3 bg-heritage-sand/20 py-2 rounded-r-lg">
              "{location.shortDescription}"
            </p>
          </div>

          {/* Historical Background */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-lg text-heritage-maroonDark flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-heritage-terracotta" />
              <span>Historical Background</span>
            </h3>
            <p className="text-sm leading-relaxed text-heritage-earth/90">
              {location.historicalBackground}
            </p>
          </div>

          {/* Cultural Significance */}
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-lg text-heritage-maroonDark flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-heritage-gold" />
              <span>Cultural & Spiritual Significance</span>
            </h3>
            <p className="text-sm leading-relaxed text-heritage-earth/90">
              {location.culturalSignificance}
            </p>
          </div>

          {/* Two-Column Grid: Artists & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Famous Artists & Communities */}
            <div className="p-4 rounded-xl bg-heritage-ivory border border-heritage-sand/80 space-y-1.5">
              <h4 className="font-serif font-bold text-sm text-heritage-maroon flex items-center gap-2">
                <Users className="w-4 h-4 text-heritage-terracotta" />
                <span>Masters & Communities</span>
              </h4>
              <p className="text-xs sm:text-sm text-heritage-earth leading-relaxed">
                {location.famousArtists}
              </p>
            </div>

            {/* Materials & Techniques */}
            <div className="p-4 rounded-xl bg-heritage-ivory border border-heritage-sand/80 space-y-1.5">
              <h4 className="font-serif font-bold text-sm text-heritage-maroon flex items-center gap-2">
                <Layers className="w-4 h-4 text-heritage-terracotta" />
                <span>Materials & Techniques</span>
              </h4>
              <p className="text-xs sm:text-sm text-heritage-earth leading-relaxed">
                {location.materialsAndTechniques}
              </p>
            </div>

          </div>

          {/* Important Artworks & Examples */}
          <div className="p-4 rounded-xl bg-heritage-sand/30 border border-heritage-gold/40 space-y-2">
            <h4 className="font-serif font-bold text-sm text-heritage-maroonDark flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-heritage-gold" />
              <span>Important Artworks & Exemplars</span>
            </h4>
            <p className="text-sm text-heritage-earth font-medium">
              {location.importantArtworks}
            </p>
          </div>

          {/* Expandable "Discover More" Section */}
          <div className="pt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full py-3 px-4 rounded-xl bg-heritage-cream border border-heritage-gold/50 text-heritage-maroonDark hover:bg-heritage-sand/40 font-serif font-semibold text-sm flex items-center justify-between transition-colors shadow-xs"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-heritage-terracotta" />
                <span>{isExpanded ? 'Hide Detailed Archive' : 'Discover More – Curatorial Notes & Preservation'}</span>
              </span>
              {isExpanded ? <ChevronUp className="w-4 h-4 text-heritage-terracotta" /> : <ChevronDown className="w-4 h-4 text-heritage-terracotta" />}
            </button>

            {isExpanded && (
              <div className="mt-3 p-4 rounded-xl bg-heritage-ivory/90 border border-heritage-gold/30 text-xs sm:text-sm text-heritage-earth space-y-3 animate-fadeIn">
                <p>
                  <strong>Geographic Alignment:</strong> Located at latitude {location.coordinates[0]}° N, longitude {location.coordinates[1]}° E. The natural landscape, availability of river silts, mineral stones, and regional climate played a foundational role in how this art developed and was conserved across centuries.
                </p>
                <p>
                  <strong>Living Continuity:</strong> Many hereditary families today continue these age-old techniques without synthetic additives, preserving India’s intangible cultural heritage recognized by craft councils and UNESCO frameworks.
                </p>
                <div className="pt-2 border-t border-heritage-sand flex items-center justify-between text-[11px] text-heritage-terracotta font-serif">
                  <span>Archived under: {location.category}</span>
                  <span>Kala Yatra Curatorial Project</span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Footer Quick Action Bar */}
        <div className="sticky bottom-0 bg-heritage-cream/95 backdrop-blur-md p-4 border-t border-heritage-sand flex items-center gap-3">
          <button
            onClick={() => {
              if (onLocateOnMap) onLocateOnMap(location);
            }}
            className="flex-1 py-3 px-4 rounded-xl font-serif font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-heritage-maroon to-heritage-terracotta text-heritage-cream shadow-md hover:brightness-110 flex items-center justify-center gap-2 transition-all"
          >
            <Compass className="w-4 h-4 text-heritage-gold" />
            <span>Locate on Map</span>
          </button>

          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl text-xs font-semibold text-heritage-earthDark bg-heritage-sand/50 hover:bg-heritage-sand transition-colors"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}

