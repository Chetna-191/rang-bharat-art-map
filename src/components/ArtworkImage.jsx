import React, { useState } from 'react';
import { Palette, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function ArtworkImage({ 
  src, 
  alt = 'Indian Art Form', 
  className = '', 
  fallbackTitle = 'Traditional Art Form',
  category = 'Indian Heritage',
  aspectRatio = 'aspect-[16/10]' 
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-heritage-sand/40 ${aspectRatio} ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-heritage-sand/50 animate-pulse flex items-center justify-center">
          <div className="text-heritage-gold flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-spin" />
            <span className="text-xs uppercase tracking-widest font-serif">Loading Artwork...</span>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
      ) : (
        /* Artistic Indian Heritage Motif Fallback */
        <div className="absolute inset-0 bg-gradient-to-br from-heritage-maroonDark via-heritage-maroon to-heritage-terracottaDark p-6 flex flex-col justify-between text-heritage-cream select-none">
          <div className="flex justify-between items-start">
            <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-heritage-gold/20 text-heritage-gold border border-heritage-gold/30">
              {category}
            </span>
            <div className="w-8 h-8 rounded-full border border-heritage-gold/40 flex items-center justify-center text-heritage-gold">
              ❂
            </div>
          </div>
          
          <div className="my-auto text-center px-4">
            <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-heritage-gold/10 border border-heritage-gold/30 flex items-center justify-center text-heritage-gold">
              <Palette className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg text-heritage-goldLight drop-shadow leading-snug">
              {fallbackTitle || alt}
            </h4>
            <p className="text-xs text-heritage-sand/80 mt-1">Authentic Traditional Art Tradition</p>
          </div>

          <div className="flex items-center justify-between text-[11px] text-heritage-sand/60 border-t border-heritage-gold/20 pt-2">
            <span>Kala Yatra Heritage</span>
            <span>Discover India</span>
          </div>
        </div>
      )}

      {/* Subtle overlay gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-heritage-earthDark/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

