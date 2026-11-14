import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Palette, 
  BookOpen, 
  Sparkles, 
  Users, 
  Layers, 
  HelpCircle, 
  Check, 
  Share2, 
  Compass, 
  Landmark,
  Image as ImageIcon,
  Maximize2,
  X
} from 'lucide-react';
import { ART_FORMS, STATES } from '../data/indianArtData';

export default function ArtFormDetails({
  art,
  onBackToState,
  onSelectRelatedArt,
  onNavigateHome
}) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveGalleryIndex(0);
    setLightboxOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [art?.id]);

  if (!art) return null;

  const parentState = STATES.find((s) => s.id === art.stateId);

  // Lookup related art form objects
  const relatedArtObjects = (art.relatedArtIds || [])
    .map((rId) => ART_FORMS.find((a) => a.id === rId))
    .filter(Boolean);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="min-h-screen bg-lavender-shimmer text-lavender-charcoal py-10 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb & Back Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-lavender-borderGold/50 gap-4">
          <button
            onClick={onBackToState}
            className="inline-flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-royal-deep hover:text-royal-plum transition-colors py-2 px-4 rounded-xl bg-white border-2 border-gold/40 hover:border-gold shadow-xs w-fit font-bold"
          >
            <ArrowLeft className="w-4 h-4 text-gold-rich" />
            <span>Back to {parentState ? parentState.name : 'State View'}</span>
          </button>

          {/* Breadcrumb Navigation: Home > State > Art Form */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-lavender-muted">
            <button onClick={onNavigateHome} className="hover:text-royal-plum transition-colors">
              Home
            </button>
            <span>›</span>
            {parentState && (
              <>
                <button onClick={onBackToState} className="hover:text-royal-plum transition-colors">
                  {parentState.name}
                </button>
                <span>›</span>
              </>
            )}
            <span className="font-serif font-bold text-royal-plum">{art.name}</span>
          </nav>
        </div>

        {/* Header Block: Title, Badges, Origin */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-royal-main text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/40 shadow-xs">
              {art.category}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white text-royal-plum text-xs font-serif font-bold border border-gold/40 shadow-xs">
              {art.stateName}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-lavender-light text-gold-rich text-xs font-serif font-semibold border border-lavender-border">
              {art.period}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-lavender-gold leading-tight tracking-tight">
            {art.name}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-lavender-muted pt-1">
            <div className="flex items-center gap-1.5 text-gold-rich font-semibold">
              <MapPin className="w-4 h-4 text-gold-rich" />
              <span>Cradle: {art.originLocation}, {art.stateName}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-royal-plum" />
              <span>Period: {art.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-royal-plum font-semibold">
              <Sparkles className="w-4 h-4 text-gold-rich" />
              <span>Intangible Heritage Archive</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-lavender-charcoal/85 leading-relaxed italic border-l-4 border-gold pl-4 py-3 bg-white shadow-sm rounded-r-2xl">
            "{art.shortDescription}"
          </p>
        </header>

        {/* HERO IMAGE: Large, authentic artwork image with royal gilded frame */}
        <div className="p-3.5 bg-white rounded-3xl border-2 border-gold/40 shadow-lavender-card relative">
          <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden relative group bg-lavender-mist">
            <img
              src={art.heroImage}
              alt={art.name}
              className="w-full h-full object-cover opacity-95"
            />
            {/* Fullscreen Magnifier Overlay Button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute bottom-4 right-4 bg-royal-deep/90 hover:bg-royal-main text-gold-light px-4 py-2 rounded-xl text-xs font-serif font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md backdrop-blur-sm border border-gold/40 transition-transform hover:scale-105"
            >
              <Maximize2 className="w-3.5 h-3.5 text-gold-light" />
              <span>Enlarge Artwork</span>
            </button>
          </div>
          <div className="p-4 bg-white border-t border-lavender-border flex items-center justify-between text-xs text-lavender-muted">
            <span className="flex items-center gap-2 font-serif italic text-royal-plum font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-gold-rich" />
              <span>Authentic Masterwork Representation: {art.name}</span>
            </span>
            <span className="text-gold-rich font-bold">Kala Yatra Digital Archive</span>
          </div>
        </div>

        {/* 10 DETAILED CONTENT SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Main Dossier Column (8 Cols) */}
          <div className="md:col-span-8 space-y-10">
            
            {/* 1. Origin and History */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-royal-deep flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-gold-rich" />
                <span>1. Origin & Historical Background</span>
              </h2>
              <p className="text-sm sm:text-base text-lavender-charcoal/85 leading-relaxed pt-1">
                {art.originAndHistory}
              </p>
            </section>

            {/* 2. Cultural Significance */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-royal-deep flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-gold-rich" />
                <span>2. Cultural & Spiritual Significance</span>
              </h2>
              <p className="text-sm sm:text-base text-lavender-charcoal/85 leading-relaxed pt-1">
                {art.culturalSignificance}
              </p>
            </section>

            {/* 3. Artistic Characteristics */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-royal-deep flex items-center gap-2.5">
                <Palette className="w-5 h-5 text-gold-rich" />
                <span>3. Artistic Characteristics & Visual Language</span>
              </h2>
              <p className="text-sm sm:text-base text-lavender-charcoal/85 leading-relaxed pt-1">
                {art.artisticCharacteristics}
              </p>
            </section>

            {/* 4. Materials Used */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-royal-deep flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-gold-rich" />
                <span>4. Traditional Materials Used</span>
              </h2>
              <p className="text-sm sm:text-base text-lavender-charcoal/85 leading-relaxed pt-1">
                {art.materialsUsed}
              </p>
            </section>

            {/* 5. Painting Techniques */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-royal-deep flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-gold-rich" />
                <span>5. Painting Techniques & Execution Steps</span>
              </h2>
              <p className="text-sm sm:text-base text-lavender-charcoal/85 leading-relaxed pt-1">
                {art.paintingTechniques}
              </p>
            </section>

            {/* 6. Famous Themes */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-royal-deep flex items-center gap-2.5">
                <Landmark className="w-5 h-5 text-gold-rich" />
                <span>6. Famous Themes & Motifs</span>
              </h2>
              <p className="text-sm sm:text-base text-lavender-charcoal/85 leading-relaxed pt-1">
                {art.famousThemes}
              </p>
            </section>

            {/* 7. Important Artists and Communities */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-royal-deep flex items-center gap-2.5">
                <Users className="w-5 h-5 text-gold-rich" />
                <span>7. Master Artists & Hereditary Communities</span>
              </h2>
              <p className="text-sm sm:text-base text-lavender-charcoal/85 leading-relaxed pt-1">
                {art.importantArtists}
              </p>
            </section>

            {/* 8. Art Gallery (At least 4 relevant artwork images with captions) */}
            <section className="space-y-4 pt-6 border-t border-lavender-borderGold/50">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif font-bold text-royal-deep flex items-center gap-2.5">
                  <ImageIcon className="w-5 h-5 text-gold-rich" />
                  <span>8. Curated Art Gallery</span>
                </h2>
                <span className="text-xs font-serif text-royal-plum font-bold">
                  {art.gallery.length} Verified Masterworks
                </span>
              </div>

              {/* Main Gallery Display */}
              <div className="p-3 bg-white rounded-3xl border-2 border-gold/40 shadow-lavender-card aspect-[16/10] relative overflow-hidden group">
                <div className="rounded-2xl overflow-hidden w-full h-full relative bg-lavender-mist">
                  <img
                    src={art.gallery[activeGalleryIndex].url}
                    alt={art.gallery[activeGalleryIndex].caption}
                    className="w-full h-full object-cover transition-all duration-500 opacity-95"
                  />
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-3 right-3 bg-royal-deep/85 hover:bg-royal-main text-gold-light p-2.5 rounded-xl text-xs backdrop-blur-sm border border-gold/40 transition-transform hover:scale-105"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4 text-gold-light" />
                  </button>
                </div>
              </div>

              {/* Caption and Detail */}
              <div className="p-5 rounded-2xl bg-white border border-lavender-borderGold/60 space-y-1 shadow-xs">
                <h4 className="font-serif font-bold text-base text-royal-plum">
                  {art.gallery[activeGalleryIndex].caption}
                </h4>
                <p className="text-xs sm:text-sm text-lavender-charcoal/80 leading-relaxed">
                  {art.gallery[activeGalleryIndex].detail}
                </p>
              </div>

              {/* Thumbnail Switcher (4+ thumbnails) */}
              <div className="grid grid-cols-4 gap-3">
                {art.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`rounded-2xl overflow-hidden border-2 transition-all aspect-[4/3] relative bg-white ${
                      activeGalleryIndex === idx
                        ? 'border-gold ring-2 ring-gold scale-105 shadow-gold-glow'
                        : 'border-lavender-border opacity-70 hover:opacity-100 hover:border-gold/60'
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Column (4 Cols): Did You Know? & Explore Related Art */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Quick Summary Card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-gold/40 shadow-lavender-card space-y-3.5 text-xs">
              <span className="font-serif font-bold uppercase tracking-wider text-royal-plum block border-b border-lavender-borderGold/50 pb-2">
                Dossier Metadata
              </span>
              <div className="flex justify-between py-1 border-b border-lavender-border/40">
                <span className="text-lavender-muted">Tradition:</span>
                <span className="font-semibold text-royal-plum">{art.category}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-lavender-border/40">
                <span className="text-lavender-muted">Origin State:</span>
                <span className="font-semibold text-terracotta">{art.stateName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-lavender-border/40">
                <span className="text-lavender-muted">Region:</span>
                <span className="font-semibold text-royal-deep">{parentState?.region}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-lavender-muted">Timeline:</span>
                <span className="font-semibold text-gold-rich">{art.period}</span>
              </div>

              <button
                onClick={handleShare}
                className="w-full mt-3 py-2.5 px-3 rounded-xl bg-lavender-light hover:bg-lavender-mist text-royal-deep font-serif font-semibold text-xs border border-lavender-borderGold transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-royal-plum" />}
                <span>{copied ? 'Link Copied to Clipboard!' : 'Share Art Form'}</span>
              </button>
            </div>

            {/* 9. Did You Know? */}
            <div className="p-6 rounded-3xl bg-lavender-light/80 border-2 border-gold/40 shadow-sm space-y-3 relative overflow-hidden">
              <div className="absolute top-2 right-3 text-gold/25 text-3xl font-serif select-none pointer-events-none">
                ❂
              </div>

              <div className="flex items-center gap-2 text-royal-plum font-serif font-bold text-base">
                <HelpCircle className="w-5 h-5 text-gold-rich" />
                <span>9. Did You Know?</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-lavender-charcoal/85">
                {art.didYouKnow.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-rich font-bold text-sm leading-none">•</span>
                    <span className="leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 10. Explore Related Art */}
            <div className="p-6 rounded-3xl bg-white border-2 border-gold/40 shadow-lavender-card space-y-3.5">
              <div className="flex items-center gap-2 text-royal-deep font-serif font-bold text-base">
                <Palette className="w-5 h-5 text-gold-rich" />
                <span>10. Explore Related Traditions</span>
              </div>

              <p className="text-xs text-lavender-muted">
                Discover similar tribal, folk, or classical styles from neighboring states:
              </p>

              <div className="space-y-2.5 pt-1">
                {relatedArtObjects.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectRelatedArt(rel)}
                    className="w-full p-3 rounded-2xl border border-lavender-borderGold/60 hover:border-gold hover:bg-lavender-light transition-all text-left flex items-center gap-3 group shadow-xs"
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-lavender-mist border border-lavender-border">
                      <img
                        src={rel.heroImage}
                        alt={rel.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-xs text-royal-deep group-hover:text-royal-plum truncate transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-[11px] text-lavender-muted truncate">
                        {rel.stateName} • <span className="text-gold-rich font-semibold">{rel.category}</span>
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-royal-deep/92 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white hover:bg-lavender-light text-royal-deep transition-colors border-2 border-gold shadow-md"
            title="Close Lightbox"
          >
            <X className="w-6 h-6 text-royal-plum" />
          </button>
          <div className="max-w-4xl w-full space-y-4">
            <div className="rounded-2xl overflow-hidden max-h-[75vh] flex items-center justify-center bg-black/75 border-2 border-gold/40 shadow-2xl">
              <img
                src={art.gallery[activeGalleryIndex].url}
                alt={art.gallery[activeGalleryIndex].caption}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="text-center text-white">
              <h4 className="font-serif font-bold text-lg text-gold-light">
                {art.gallery[activeGalleryIndex].caption}
              </h4>
              <p className="text-xs text-lavender-lightest/80 max-w-xl mx-auto mt-1">
                {art.gallery[activeGalleryIndex].detail}
              </p>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}
