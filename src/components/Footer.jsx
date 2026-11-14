import React from 'react';
import { Compass, Sparkles, MapPin, Layers, Heart } from 'lucide-react';
import { STATES } from '../data/indianArtData';

export default function Footer({ onNavigateToSection, onSelectState }) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'explore-india', label: 'Explore India (Interactive Map)' },
    { id: 'art-collections', label: 'Art Collections Gallery' },
    { id: 'about', label: 'About Us & Cultural Legacy' },
  ];

  return (
    <footer className="bg-royal-deep text-lavender-mist pt-16 pb-12 border-t-2 border-gold/50 relative overflow-hidden">
      
      {/* Top Gold Trim */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-terracotta via-gold to-royal-violet" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-royal-main/80">
          
          {/* Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-royal-main text-gold flex items-center justify-center font-serif font-bold text-xl border-2 border-gold shadow-gold-glow">
                ❂
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-gold-light">
                KALA YATRA
              </span>
            </div>

            <p className="text-sm font-serif italic text-gold">
              "Every Place Has a Story. Every Art Has a Soul."
            </p>

            <p className="text-xs sm:text-sm text-lavender-mist/80 leading-relaxed font-sans max-w-sm">
              An interactive digital museum and cartographic explorer dedicated to connecting the geography of India with its timeless cave murals, courtly miniatures, and living folk traditions in an illuminated royal palette.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-gold-light">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      if (onNavigateToSection) onNavigateToSection(link.id);
                    }}
                    className="hover:text-gold-light transition-colors flex items-center gap-1.5 group text-lavender-mist/85"
                  >
                    <span className="text-gold group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick State Access */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-gold-light">
              Explore Featured States
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {STATES.slice(0, 10).map((st) => (
                <button
                  key={st.id}
                  onClick={() => {
                    if (onSelectState) onSelectState(st);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-royal-main/80 hover:bg-gold-rich text-white border border-gold/30 hover:border-gold text-[11px] transition-colors"
                >
                  {st.name}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-lavender-dim pt-2">
              Select any state to jump straight to its art traditions on the map.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-lavender-dim gap-4">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">KALA YATRA</strong>. All rights reserved. Created for educational and cultural discovery.
          </p>

          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <span>Interactive Map powered by</span>
            <a 
              href="https://www.openstreetmap.org/copyright" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gold-light hover:underline font-medium"
            >
              OpenStreetMap
            </a>
            <span>& Leaflet.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
