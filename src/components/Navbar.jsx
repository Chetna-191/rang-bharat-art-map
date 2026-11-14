import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, MapPin, Sparkles } from 'lucide-react';

export default function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'explore-india', label: 'Explore India' },
    { id: 'art-collections', label: 'Art Collections' },
    { id: 'about', label: 'About' },
  ];

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gold/30' 
          : 'bg-lavender-lightest/85 backdrop-blur-sm py-4 border-b border-lavender-borderGold/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Gold Embellishment */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-royal-main to-royal-deep text-gold flex items-center justify-center font-serif font-bold text-xl border-2 border-gold shadow-gold-glow group-hover:scale-105 transition-transform">
              ❂
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-lavender-gold leading-none">
                KALA YATRA
              </span>
              <span className="text-[10px] font-serif text-gold-rich font-semibold tracking-widest uppercase mt-0.5">
                Royal Lavender & Golden Heritage
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="px-4 py-2 rounded-full text-sm font-medium text-lavender-charcoal hover:text-royal-plum hover:bg-lavender-light transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleLinkClick('explore-india')}
              className="btn-royal-primary ml-3 px-5 py-2.5 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #240E40 0%, #581C87 50%, #B45309 100%)',
                color: '#FFF2C6',
                borderColor: '#D4AF37',
                borderWidth: '1.5px',
                borderStyle: 'solid',
              }}
            >
              <Compass className="w-3.5 h-3.5 text-gold-light animate-spin-slow" />
              <span style={{ color: '#FFF2C6' }}>Launch Explorer</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-royal-plum hover:bg-lavender-light transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gold/30 shadow-2xl px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-lavender-charcoal hover:bg-lavender-light hover:text-royal-plum transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('explore-india')}
              className="btn-royal-primary w-full py-3 rounded-xl text-xs font-serif font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #240E40 0%, #581C87 50%, #B45309 100%)',
                color: '#FFF2C6',
                borderColor: '#D4AF37',
                borderWidth: '1.5px',
                borderStyle: 'solid',
              }}
            >
              <Compass className="w-4 h-4 text-gold-light" />
              <span style={{ color: '#FFF2C6' }}>Launch Explorer</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
