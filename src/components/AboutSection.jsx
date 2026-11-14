import React from 'react';
import { BookOpen, ShieldCheck, Heart, Sparkles, Compass, Feather } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Geographical Determinism',
      desc: 'Local ecology dictated the artistic palette: iron-rich red mud in Warli, castor seeds in Kutch, river clay in Mithila, and Himalayan mountain flora in Kangra.',
      icon: Compass
    },
    {
      title: 'Living Ritual Traditions',
      desc: 'Indian art is not merely preserved behind museum glass; it actively sanctifies weddings, harvests, seasonal celebrations, and temple liturgies.',
      icon: Heart
    },
    {
      title: 'Preserving Intangible Legacy',
      desc: 'Generational lineages of chitrakars, sthapathis, and master weavers sustain India’s identity. Documenting their art fosters education and global appreciation.',
      icon: Feather
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden bg-lavender-mandala border-t border-lavender-borderGold/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal-main text-gold-light text-xs font-semibold uppercase tracking-widest border border-gold/40 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-gold-light" />
            <span>The Kala Yatra Mission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-lavender-gold tracking-tight editorial-line-gold pb-2">
            Preserving India's Artistic Legacy
          </h2>

          <p className="text-base sm:text-lg font-serif italic text-gold-rich font-semibold leading-relaxed pt-2">
            "India's artistic heritage is a reflection of its history, traditions, communities, and cultural diversity. From ancient cave paintings to vibrant folk traditions, every art form tells a unique story."
          </p>
        </div>

        {/* Narrative & Visual Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 leading-relaxed">
            <h3 className="font-serif font-bold text-2xl text-royal-deep">
              Why an Interactive Art History Explorer?
            </h3>
            <p className="text-sm sm:text-base text-lavender-charcoal/85">
              Indian art is intrinsically tied to place. By restoring geographic context to artistic heritage, <strong className="text-royal-plum">Kala Yatra</strong> enables students, scholars, and art lovers to discover why specific styles evolved in specific lands.
            </p>
            <p className="text-sm sm:text-base text-lavender-charcoal/85">
              When users view India through an interactive geographical lens, they trace how natural minerals, river silt, local flora, and dynastic patronage converged to produce distinct regional masterpieces—from the mud walls of the Sahyadri mountains to the gold-leaf sanctums of Thanjavur.
            </p>
            <div className="p-5 rounded-2xl bg-lavender-light border-2 border-gold/40 space-y-1.5 shadow-xs">
              <span className="font-serif font-bold text-xs uppercase tracking-wider text-royal-main block">
                Educational Objective:
              </span>
              <p className="text-xs sm:text-sm text-lavender-charcoal/85">
                Built as a cultural digital humanities initiative to foster deep cultural appreciation and support the preservation of India's living artisan communities.
              </p>
            </div>
          </div>

          {/* Visual Collage Column */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 p-3.5 bg-lavender-light rounded-3xl border-2 border-gold/40 shadow-lavender-card">
              <div className="rounded-2xl overflow-hidden aspect-square border-2 border-lavender-borderGold/60 hover:border-gold transition-colors">
                <img src="/art/madhubani.svg" alt="Madhubani" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border-2 border-lavender-borderGold/60 hover:border-gold transition-colors">
                <img src="/art/tanjore.svg" alt="Tanjore" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border-2 border-lavender-borderGold/60 hover:border-gold transition-colors">
                <img src="/art/kalamkari.svg" alt="Kalamkari" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border-2 border-lavender-borderGold/60 hover:border-gold transition-colors">
                <img src="/art/gond.svg" alt="Gond" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-lavender-borderGold/60 hover:border-gold shadow-sm hover:shadow-lavender-card-hover transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-royal-main text-gold flex items-center justify-center border border-gold/40 shadow-xs group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-gold-light" />
                </div>
                <h4 className="font-serif font-bold text-lg text-royal-deep group-hover:text-royal-plum transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-lavender-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
