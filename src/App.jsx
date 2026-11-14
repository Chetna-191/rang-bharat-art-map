import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndiaMap from './components/IndiaMap';
import StateExplorer from './components/StateExplorer';
import StateDetails from './components/StateDetails';
import ArtFormDetails from './components/ArtFormDetails';
import ArtGallery from './components/ArtGallery';
import SearchBar from './components/SearchBar';
import ArtisanPaletteWidget from './components/ArtisanPaletteWidget';
import ArtQuizModal from './components/ArtQuizModal';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { STATES, ART_FORMS } from './data/indianArtData';
import { Compass, MapPin, Sparkles, Layers } from 'lucide-react';

export default function App() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedArt, setSelectedArt] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [quizOpen, setQuizOpen] = useState(false);

  // Filter states by region
  const filteredStates = useMemo(() => {
    if (selectedRegion === 'all') return STATES;
    return STATES.filter((s) => s.region === selectedRegion);
  }, [selectedRegion]);

  // Handler: Selecting a state
  const handleSelectState = (state) => {
    setSelectedArt(null);
    setSelectedState(state);

    // Scroll to state section
    setTimeout(() => {
      const el = document.getElementById('state-details-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Handler: Selecting an art form
  const handleSelectArt = (art) => {
    // Ensure parent state is synchronized for breadcrumb navigation
    const parentState = STATES.find((s) => s.id === art.stateId);
    if (parentState) {
      setSelectedState(parentState);
    }
    setSelectedArt(art);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Select Art form by string ID (for widget cross-links)
  const handleSelectArtById = (artId) => {
    const art = ART_FORMS.find((a) => a.id === artId);
    if (art) {
      handleSelectArt(art);
    }
  };

  // Handler: Back from art form view to state view
  const handleBackToState = () => {
    setSelectedArt(null);
    setTimeout(() => {
      const el = document.getElementById('explore-india');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handler: Back to home/all states
  const handleBackToAllStates = () => {
    setSelectedArt(null);
    setSelectedState(null);
  };

  // Navigation handlers
  const handleScrollToExplore = () => {
    const el = document.getElementById('explore-india');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToArtCollections = () => {
    const el = document.getElementById('art-collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId) => {
    setSelectedArt(null);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-lavender-lightest text-lavender-charcoal font-sans flex flex-col selection:bg-gold/40 selection:text-royal-deep">
      {/* 1. Global Navigation Bar */}
      <Navbar onNavigate={handleNavigateSection} />

      {/* Main Content View */}
      <main className="flex-1">
        
        {/* If an art form is selected, show the Complete Art Form Exploration Page */}
        {selectedArt ? (
          <ArtFormDetails
            art={selectedArt}
            onBackToState={handleBackToState}
            onSelectRelatedArt={handleSelectArt}
            onNavigateHome={handleBackToAllStates}
          />
        ) : (
          /* Normal Explorer Flow */
          <>
            {/* 2. Full-Screen Hero Section */}
            <Hero
              onExploreMapClick={handleScrollToExplore}
              onDiscoverArtClick={handleScrollToArtCollections}
              onOpenQuiz={() => setQuizOpen(true)}
            />

            {/* 3. MAIN FEATURE: Interactive India Map & State Explorer */}
            <section id="explore-india" className="py-16 sm:py-24 bg-lavender-shimmer border-t border-lavender-borderGold/50 relative bg-lavender-jaali">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal-main text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/40 shadow-xs">
                    <Compass className="w-3.5 h-3.5 text-gold-light" />
                    <span>Geographic Cartography</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-lavender-gold tracking-tight editorial-line-gold pb-3">
                    Interactive Map of India
                  </h2>

                  <p className="text-sm sm:text-base text-lavender-charcoal/80 leading-relaxed font-sans pt-2">
                    Select any state marker on the map or choose from the regional explorer below. The platform will dynamically load and highlight that state's indigenous art traditions in an illuminated royal palette.
                  </p>
                </div>

                {/* Working Search Bar with Autocomplete */}
                <div className="max-w-2xl mx-auto">
                  <SearchBar
                    onSelectState={handleSelectState}
                    onSelectArtForm={handleSelectArt}
                  />
                </div>

                {/* State Explorer Controls (Region Chips & State Selector) */}
                <StateExplorer
                  states={filteredStates}
                  selectedState={selectedState}
                  onSelectState={handleSelectState}
                  selectedRegion={selectedRegion}
                  onSelectRegion={setSelectedRegion}
                  onResetSelection={handleBackToAllStates}
                />

                {/* The Interactive Leaflet Map */}
                <IndiaMap
                  states={filteredStates}
                  selectedState={selectedState}
                  onSelectState={handleSelectState}
                  onResetSelection={handleBackToAllStates}
                />

                {/* Dynamic State Details Section (Opens when state is selected) */}
                {selectedState && (
                  <div id="state-details-section">
                    <StateDetails
                      state={selectedState}
                      onSelectArtForm={handleSelectArt}
                      onBackToMap={handleBackToAllStates}
                    />
                  </div>
                )}

                {/* Creative Feature: The Artisan's Living Alchemy Widget */}
                <div className="pt-6">
                  <ArtisanPaletteWidget
                    onSelectArtById={handleSelectArtById}
                  />
                </div>

              </div>
            </section>

            {/* 4. Art Collections Gallery ("Explore India's Living Art Traditions") */}
            <ArtGallery
              onSelectArtForm={handleSelectArt}
            />

            {/* 5. About Section ("Preserving India's Artistic Legacy") */}
            <AboutSection />
          </>
        )}

      </main>

      {/* 6. Footer */}
      <Footer
        onNavigateToSection={handleNavigateSection}
        onSelectState={handleSelectState}
      />

      {/* 7. Interactive Discovery Quiz Modal ("Match Your Soul Art") */}
      <ArtQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectArtForm={handleSelectArt}
      />

    </div>
  );
}
