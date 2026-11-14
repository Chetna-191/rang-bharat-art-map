import React, { useState } from 'react';
import { X, Sparkles, Compass, ArrowRight, RotateCcw, Heart, Palette } from 'lucide-react';
import { ART_FORMS } from '../data/indianArtData';

const QUESTIONS = [
  {
    title: '1. What emotional theme moves you deepest?',
    options: [
      { text: 'Earthly harmony, village harvest & sacred circles of nature', matchId: 'warli' },
      { text: 'Devotional majesty, 22-carat gold & shimmering temple deities', matchId: 'tanjore' },
      { text: 'Poetic romance, flowering hill streams & delicate courtly grace', matchId: 'kangra' },
      { text: 'Sacred epics, bamboo pens & organic river-washed fabrics', matchId: 'kalamkari' },
    ]
  },
  {
    title: '2. Which natural medium speaks to your tactile senses?',
    options: [
      { text: 'White rice paste painted on sun-dried red mud walls', matchId: 'warli' },
      { text: 'Vibrant turmeric, soot & marigold dyes with bamboo twigs', matchId: 'madhubani' },
      { text: 'Boiled castor oil threads drawn in mid-air with an iron stylus', matchId: 'rogan' },
      { text: 'Panchavarna natural mineral frescoes on coconut-water plaster', matchId: 'kerala-mural' },
    ]
  },
  {
    title: '3. Which geographical landscape would you love to walk through?',
    options: [
      { text: 'The misty Dhauladhar pine forests of the Kangra Valley', matchId: 'kangra' },
      { text: 'The palm-fringed chitrakar artisan village of Raghurajpur', matchId: 'pattachitra' },
      { text: 'The ancient rock-cut canyon cliffs of Ajanta Caves', matchId: 'ajanta' },
      { text: 'The desert dunes and nomadic singing bards of Rajasthan', matchId: 'phad' },
    ]
  }
];

export default function ArtQuizModal({ isOpen, onClose, onSelectArtForm }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [resultArt, setResultArt] = useState(null);

  if (!isOpen) return null;

  const handleOptionSelect = (option) => {
    const updated = [...selectedAnswers, option.matchId];
    setSelectedAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Pick matching art form or fallback
      const chosenId = option.matchId || updated[0] || 'warli';
      const matched = ART_FORMS.find(a => a.id === chosenId) || ART_FORMS[0];
      setResultArt(matched);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setResultArt(null);
  };

  const handleExploreResult = () => {
    if (resultArt) {
      onSelectArtForm(resultArt);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-royal-deep/80 backdrop-blur-md flex items-center justify-center p-4 transition-all">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl border-2 border-gold shadow-2xl p-6 sm:p-8 z-10 animate-fadeIn text-lavender-charcoal">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-lavender-light text-lavender-muted hover:text-royal-plum transition-colors"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!resultArt ? (
          /* Quiz Steps */
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs uppercase font-serif tracking-widest text-royal-plum font-bold">
                Cultural Match • Step {currentStep + 1} of {QUESTIONS.length}
              </span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-royal-deep leading-snug">
              {QUESTIONS[currentStep].title}
            </h3>

            <div className="space-y-3">
              {QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(opt)}
                  className="w-full p-4 rounded-2xl bg-lavender-light/50 border-2 border-lavender-borderGold/60 hover:border-gold hover:bg-lavender-light transition-all text-left flex items-center justify-between text-sm sm:text-base font-serif text-royal-deep group shadow-xs"
                >
                  <span className="group-hover:text-royal-plum transition-colors font-medium">{opt.text}</span>
                  <ArrowRight className="w-4 h-4 text-gold-rich group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Step Progress Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {QUESTIONS.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2.5 rounded-full transition-all ${
                    currentStep === idx ? 'w-6 bg-gold' : 'w-2.5 bg-lavender-border'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Match Result Screen */
          <div className="text-center space-y-6 py-2">
            <div className="w-16 h-16 rounded-full bg-royal-main text-gold-light border-2 border-gold flex items-center justify-center mx-auto text-2xl font-serif shadow-gold-glow">
              ❂
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-serif tracking-widest text-gold-rich font-bold">
                Your Soul Art Form Match
              </span>
              <h3 className="text-3xl font-serif font-extrabold text-lavender-gold">
                {resultArt.name}
              </h3>
              <p className="text-xs font-serif text-royal-plum font-semibold">
                {resultArt.originLocation}, {resultArt.stateName}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border-2 border-gold/40 aspect-[16/10] bg-lavender-mist shadow-md max-w-sm mx-auto">
              <img
                src={resultArt.heroImage}
                alt={resultArt.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-lavender-charcoal/80 italic max-w-md mx-auto leading-relaxed">
              "{resultArt.shortDescription}"
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleExploreResult}
                className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-royal-main via-royal-plum to-gold-rich text-white hover:shadow-gold-glow font-serif font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Compass className="w-4 h-4 text-gold-light" />
                <span>Explore This Art Form</span>
              </button>

              <button
                onClick={handleReset}
                className="py-3 px-5 rounded-full bg-white hover:bg-lavender-light text-royal-deep text-xs font-serif font-semibold transition-colors flex items-center justify-center gap-1.5 border-2 border-gold/40 shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5 text-gold-rich" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
