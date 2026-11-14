/**
 * Rang Bharat: An Interactive Art Map of India
 * Data File: Contains 18 culturally verified Indian art destinations
 * with geographical coordinates, historical context, materials, artists, and images.
 */

var ART_LOCATIONS = [
  {
    id: 'bhimbetka',
    name: 'Bhimbetka Rock Shelters',
    state: 'Madhya Pradesh',
    coordinates: [22.9372, 77.6133],
    artStyle: 'Prehistoric Rock Art',
    period: 'c. 10,000 BCE – 8,000 BCE (Upper Paleolithic to Mesolithic)',
    eraCategory: 'Prehistoric & Ancient',
    category: 'Cave and Ancient',
    categoryColor: '#B8860B', // Antique Gold
    description: 'The Bhimbetka Rock Shelters showcase some of the earliest traces of human artistic expression on the Indian subcontinent. Nestled in the sandstone cliffs of the Vindhya Range, over 750 rock shelters feature dynamic wall paintings depicting hunting expeditions, communal dancing, and wild fauna. The rhythmic linear figures illustrate the profound connection prehistoric hunter-gatherers felt with their surrounding ecosystem.',
    history: 'Discovered in 1957 by Indian archaeologist Dr. V. S. Wakankar, these caves preserve continuous human habitation layers across millennia. Early hunter-gatherers created these murals as ritual markers and celebratory records of successful game hunts. The paintings survived thousands of years inside natural rock overhangs protected from monsoon storms and direct harsh sunlight, earning Bhimbetka UNESCO World Heritage status in 2003.',
    artists: 'Prehistoric indigenous hunter-gatherer clans and ancestral tribal communities of the Vindhya region.',
    artworks: 'The Zoo Rock frieze (depicting 252 animals across 16 species), the Boar with Horns, and the Dancing Stick Figures.',
    materials: 'Natural mineral pigments including red haematite (iron oxide), manganese ore, charcoal, and plant sap mixed with animal fat applied with split bamboo twigs.',
    funFact: 'Some paintings here were layered across 10,000 years, meaning prehistoric artists painted over the works of ancestors without erasing their contours.',
    images: [
      {
        url: 'images/bhimbetka-1.jpg',
        caption: 'Ancestral Hunting & Wildlife Murals at Rock Shelter 8, Bhimbetka',
        credit: 'Wikimedia Commons • CC BY-SA 4.0'
      },
      {
        url: 'art/bhimbetka.svg',
        caption: 'High-contrast illustration of prehistoric stick figures and horned beasts',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'ajanta',
    name: 'Ajanta Caves',
    state: 'Maharashtra',
    coordinates: [20.5519, 75.7033],
    artStyle: 'Buddhist Cave Murals',
    period: '2nd Century BCE – 5th Century CE (Satavahana & Vakataka Dynasties)',
    eraCategory: 'Classical & Murals',
    category: 'Cave and Ancient',
    categoryColor: '#B8860B',
    description: 'Carved into the sheer horseshoe-shaped basalt cliffs of the Waghur River gorge, the Ajanta Caves house the crowning masterpieces of ancient Indian classical mural painting. The murals illustrate the spiritual narratives of the Jataka tales, recording previous incarnations of Gautama Buddha. The artwork is world-renowned for its exquisite calligraphic brushwork, serene facial expressions, and graceful body postures.',
    history: 'The caves were excavated in two major phases: the early Hinayana phase under the Satavahana dynasty, followed by a magnificent Mahayana golden age under Vakataka Emperor Harishena during the late 5th century CE. With the decline of dynastic patronage, dense Deccan jungle enveloped the canyon for centuries until British cavalry officer John Smith accidentally rediscovered Cave 10 during a tiger hunt in 1819.',
    artists: 'Monastic Buddhist guilds and royal court ateliers patronized by Emperor Harishena and royal minister Varahadeva.',
    artworks: 'Bodhisattva Padmapani holding the blue lotus (Cave 1), Bodhisattva Vajrapani, and the Mahajanaka Jataka royal court procession.',
    materials: 'Tempera on mud-plaster (clay, cow dung, and rice husks) coated with fine lime slip. Painted with cinnabar, yellow ochre, malachite green, lamp black, and imported Afghan lapis lazuli.',
    funFact: 'The blue pigment used in Padmapani’s sacred lotus is crushed lapis lazuli, which had to be brought over 2,000 miles from Badakhshan via the ancient Silk Route.',
    images: [
      {
        url: 'images/ajanta-1.jpg',
        caption: 'Classical fresco murals inside Cave 1, Ajanta',
        credit: 'Wikimedia Commons • Public Domain'
      },
      {
        url: 'art/ajanta.svg',
        caption: 'Bodhisattva Padmapani holding the sacred blue lotus',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'ellora',
    name: 'Ellora Caves',
    state: 'Maharashtra',
    coordinates: [20.0268, 75.1793],
    artStyle: 'Rock-Cut Architecture & Sculptures',
    period: '6th – 10th Century CE (Rashtrakuta & Yadava Dynasties)',
    eraCategory: 'Classical & Murals',
    category: 'Cave and Ancient',
    categoryColor: '#B8860B',
    description: 'Ellora represents the pinnacle of monolithic rock-cut art in world history, featuring 34 monumental cave temples carved side by side out of the Charanandri hills. Uniquely harmonious, the complex integrates Hindu, Buddhist, and Jain sanctuaries celebrating religious tolerance and creative fraternity. Its crowning jewel, the Kailasa Temple (Cave 16), is the largest monolithic rock excavation on Earth.',
    history: 'Constructed primarily under the patronage of the Rashtrakuta King Krishna I in the 8th century CE, the Kailasa temple was chiseled vertically from top to bottom out of a single basalt mountain. Over 200,000 tonnes of volcanic rock were removed by hand over several decades without modern machinery. Later caves feature Jain Digambara shrines patronized by Yadava kings in the 9th and 10th centuries.',
    artists: 'Guilds of master stone sculptors (sthapathis) and Rashtrakuta royal stone carvers.',
    artworks: 'The Kailasa Temple (Cave 16), Ravana Shaking Mount Kailash relief, and the monolithic Dhwajasthambha victory pillars.',
    materials: 'Intact Deccan volcanic trap basalt rock, carved using iron chisels, heavy sledgehammers, and timber scaffolding, originally surfaced in white lime plaster.',
    funFact: 'Unlike conventional buildings assembled from ground to roof, Kailasa Temple was sculpted strictly from top to bottom, meaning sculptors had zero room for architectural error.',
    images: [
      {
        url: 'images/ellora-1.jpg',
        caption: 'Monolithic rock-cut grandeur of the Kailasa Temple (Cave 16), Ellora',
        credit: 'Wikimedia Commons • CC BY-SA 4.0'
      },
      {
        url: 'art/ellora.svg',
        caption: 'Carved stone sanctum and elephant friezes at Ellora',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'madhubani',
    name: 'Madhubani / Mithila',
    state: 'Bihar',
    coordinates: [26.3540, 86.0710],
    artStyle: 'Madhubani / Mithila Painting',
    period: 'Ancient Vedic Roots; documented from 14th Century CE to present',
    eraCategory: 'Folk & Tribal',
    category: 'Folk and Tribal',
    categoryColor: '#9B7EDE', // Lavender-Purple
    description: 'Madhubani painting, also known as Mithila art, is a vibrant folk tradition practiced by women in the rural Mithila region of northern Bihar. Characterized by intricate two-dimensional geometric line drawings, the art uses double outlines filled with hatching, dots, and vibrant plant dyes. Murals traditionally adorned the mud walls of bridal chambers (Kohbar Ghar) to invoke fertility and cosmic harmony.',
    history: 'Legend traces the origin of Mithila art to King Janaka, who commissioned village artists to decorate his kingdom for the marriage of his daughter Sita to Lord Rama. For generations, the technique was passed down maternally from mothers to daughters on freshly plastered mud walls. Following the devastating Bihar earthquake of 1934, British officer William G. Archer discovered these wall treasures, introducing them to global acclaim.',
    artists: 'Renowned master painters include Sita Devi, Ganga Devi, Mahasundari Devi, and contemporary artist Dulari Devi.',
    artworks: 'The sacred Kohbar bridal chamber design, Radha-Krishna in forest groves, Sun and Moon deities, and Tree of Life.',
    materials: 'Handmade paper or cotton cloth treated with cow dung and rice paste. Natural pigments from turmeric, marigold, indigo, soot, and crushed leaves applied with matchsticks and bamboo pens.',
    funFact: 'In Madhubani paintings, artists never leave blank empty space; any gap is deliberately filled with floral patterns, stylized birds, fish, or sacred geometric symbols.',
    images: [
      {
        url: 'images/madhubani-1.jpg',
        caption: 'Traditional Madhubani depiction of sacred rituals and floral symbolism',
        credit: 'Wikimedia Commons • CC BY-SA 3.0'
      },
      {
        url: 'art/madhubani.svg',
        caption: 'Double-lined fish and lotus motifs symbolizing vitality and prosperity',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'warli',
    name: 'Warli Region, Dahanu',
    state: 'Maharashtra',
    coordinates: [19.9975, 73.0850],
    artStyle: 'Warli Tribal Painting',
    period: 'c. 2,500 BCE – 10th Century CE origin; thriving living tradition',
    eraCategory: 'Folk & Tribal',
    category: 'Folk and Tribal',
    categoryColor: '#9B7EDE',
    description: 'Warli painting is an ancestral indigenous art form created by the Warli tribe residing along the Sahyadri mountains of northern Maharashtra. The visual vocabulary is remarkably minimalist, employing only circles, triangles, and squares derived from elemental observations of nature. Unlike classical court painting, Warli art eschews religious mythologies in favor of social life, agricultural cycles, and the sacred spirit of the forest.',
    history: 'Rooted in Neolithic customs, Warli art was traditionally created by married women (Savasinis) to decorate mud huts during marriage ceremonies and the harvest festival. The central icon is often Palghat, the mother goddess of fertility. In the 1970s, visionary artist Jivya Soma Mashe revolutionized the tradition by painting on canvas and paper, transforming a ritualistic home craft into an internationally celebrated contemporary art movement.',
    artists: 'Jivya Soma Mashe (Padma Shri), Balu Mashe, and Rajesh Chaitya Vangad.',
    artworks: 'The Tarpa Dance (where villagers clasp hands in an expanding spiral around a horn blower), Mother Goddess Palghat, and the Harvest Mandala.',
    materials: 'Sun-dried red mud and cow dung plastered walls. White pigment made of ground rice flour blended with water and acacia babool gum, painted with chewed bamboo twigs.',
    funFact: 'In the iconic Warli Tarpa dance, dancers never turn their backs to the musician; their spiral movements symbolize the endless cycle of life and cosmic seasons.',
    images: [
      {
        url: 'images/warli-1.jpg',
        caption: 'Authentic Warli tribal painting showing village harvest celebration and Tarpa circle',
        credit: 'Wikimedia Commons • CC BY-SA 4.0'
      },
      {
        url: 'art/warli.svg',
        caption: 'Minimalist white rice paste figures in sacred agricultural communion',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'pattachitra',
    name: 'Puri & Raghurajpur',
    state: 'Odisha',
    coordinates: [19.8135, 85.8312],
    artStyle: 'Odisha Pattachitra',
    period: '12th Century CE – Present (Ganga & Gajapati Dynasties)',
    eraCategory: 'Classical & Murals',
    category: 'Folk and Tribal',
    categoryColor: '#9B7EDE',
    description: 'Pattachitra is a classical scroll painting tradition deeply intertwined with the cult of Lord Jagannath in Puri, Odisha. Derived from the Sanskrit words "Patta" (cloth) and "Chitra" (painting), it features bold line work, expressive almond-shaped eyes, and richly ornamented floral borders. Raghurajpur, a designated heritage craft village near Puri, preserves entire multigenerational families of hereditary Chitrakar painters.',
    history: 'The tradition emerged around the 12th century CE to serve temple liturgies. During the annual "Anavasara" period, when the sanctum idols of Jagannath, Balabhadra, and Subhadra are ritually bathed and secluded from public view, temporary Pattachitra paintings (Anasara Pati) are worshipped in their place. Chitrakars received royal patronage and land grants from Ganga dynasty kings to maintain these sacred traditions.',
    artists: 'Master Chitrakar lineages including Jagannath Mahapatra, Sarat Chandra Mahapatra, and Apanna Mahapatra.',
    artworks: 'Dashavatara (ten incarnations of Vishnu), Kanchi Abhiyan, Krishna Leela scrolls, and intricate Tala Pattachitra (palm-leaf etchings).',
    materials: 'Patti canvas made of cotton layered with tamarind seed paste and powdered limestone. Colors prepared from conch shells, lampblack, cinnabar (Hingula), and orpiment (Haritala).',
    funFact: 'To protect paintings from moisture and insects, artists apply a transparent glaze made of melted pine resin (Gaukalam) over the completed cloth canvas.',
    images: [
      {
        url: 'images/pattachitra-1.jpg',
        caption: 'Traditional Odisha Pattachitra depicting divine epics of Lord Jagannath and Krishna',
        credit: 'Wikimedia Commons • CC BY-SA 3.0'
      },
      {
        url: 'art/pattachitra.svg',
        caption: 'Intricate scroll borders and almond-eyed deities of Puri',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'kalamkari',
    name: 'Srikalahasti & Machilipatnam',
    state: 'Andhra Pradesh',
    coordinates: [13.7498, 79.6984],
    artStyle: 'Kalamkari Textile Art',
    period: '10th Century CE – Present (Chola, Vijayanagara & Golconda Sultanates)',
    eraCategory: 'Medieval & Court',
    category: 'Textile Art',
    categoryColor: '#4B2E83', // Deep Purple
    description: 'Kalamkari is an ancient textile art practiced in Andhra Pradesh, renowned for its organic dye craftsmanship. Named from the Persian words "Kalam" (bamboo pen) and "Kari" (craftsmanship), the art thrives in two distinct regional schools: Srikalahasti, where temples scrolls are drawn freehand with fine bamboo pens, and Machilipatnam, known for hand-carved wooden block printing under maritime trade patronage.',
    history: 'Ancient traveling minstrels and Chitrakattis carried painted Kalamkari cloths to narrate mythological epics to village gatherings. Under the patronages of Vijayanagara emperors in Srikalahasti, artists illustrated temple canopies with Ramayana and Mahabharata scenes. Later, the Golconda Sultans and European trading companies (Dutch and British Coromandel trade) commissioned floral "Tree of Life" chintz patterns for international export.',
    artists: 'Generational artisans of Srikalahasti including Jonnalagadda Gurappa Chetty (Padma Shri) and Niranjan Chetty.',
    artworks: 'The Tree of Life (Ayush Vriksha), Ramayana Epic temple canopies, and Dashavatara wall hangings.',
    materials: 'Unbleached khadi cotton treated with buffalo milk and myrobalan seed extract. Colored with natural madder root, fermented indigo, rusted iron juice, and pomegranate rind.',
    funFact: 'Buffalo milk is essential to Kalamkari: its natural fats prevent liquid vegetable dyes from bleeding into adjacent fabric fibers during freehand pen drawing.',
    images: [
      {
        url: 'images/kalamkari-1.jpg',
        caption: 'Freehand Kalamkari fabric depicting divine temple epics and celestial lotuses',
        credit: 'Wikimedia Commons • CC BY-SA 4.0'
      },
      {
        url: 'art/kalamkari.svg',
        caption: 'Bamboo pen linework and river-washed botanical madder dyes',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'tanjore',
    name: 'Thanjavur',
    state: 'Tamil Nadu',
    coordinates: [10.7870, 79.1378],
    artStyle: 'Tanjore Painting',
    period: '16th – 18th Century CE (Nayaka & Maratha Dynasties)',
    eraCategory: 'Classical & Murals',
    category: 'Classical and Court',
    categoryColor: '#D4AF37', // Gold
    description: 'Tanjore painting is a lavish classical South Indian devotional art form originating in the historic temple capital of Thanjavur. Celebrated for its opulent surface relief work (gesso), the paintings are embellished with genuine 22-carat gold foil and inset with Jaipur gemstones or cut glass. The figures feature plump, radiant cherubic faces, serene almond eyes, and rich jewel-toned drapery housed inside ornate gilded archways.',
    history: 'The style emerged in the late 16th century following the fall of the Vijayanagara Empire, when skilled artisan guilds migrated to the court of the Thanjavur Nayakas. It reached its zenith under Maratha rulers, particularly King Serfoji II (1798–1832), who commissioned royal portraits, temple icons, and palace frescoes. Paintings were placed in puja rooms of wealthy merchant and royal homes to glimmer under oil lamps.',
    artists: 'Hereditary Raju and Naidu artisan communities of Thanjavur and Tiruchirappalli.',
    artworks: 'Balakrishna (Baby Krishna) with butter pot, Rama Pattabhishekam (coronation of Lord Rama), and Goddess Gajalakshmi.',
    materials: 'Teakwood wooden boards layered with unbleached cotton and Arabic gum-chalk gesso paste. Embellished with 22-carat beaten gold leaves and semi-precious gems.',
    funFact: 'The pure 22-carat gold leaf used in authentic Tanjore paintings never oxidizes or tarnishes; vintage Tanjore panels from two centuries ago still gleam with pristine luster.',
    images: [
      {
        url: 'images/tanjore-1.jpg',
        caption: 'Classical Tanjore icon embellished with raised gesso relief and 22-carat gold leaf',
        credit: 'Wikimedia Commons • Public Domain'
      },
      {
        url: 'art/tanjore.svg',
        caption: 'Balakrishna seated under gilded temple arches with royal gemstone insets',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'mysore',
    name: 'Mysuru',
    state: 'Karnataka',
    coordinates: [12.2958, 76.6394],
    artStyle: 'Mysore Traditional Painting',
    period: '17th – 19th Century CE (Wadiyar Dynasty)',
    eraCategory: 'Classical & Murals',
    category: 'Classical and Court',
    categoryColor: '#D4AF37',
    description: 'Mysore painting is a graceful classical South Indian painting school closely related to Tanjore art, yet distinct in its subdued elegance and understated aesthetic. It is characterized by delicate, expressive brush lines, soft muted color harmonies, and low-relief gesso work. Unlike the heavy jewel insets of Tanjore, Mysore paintings emphasize delicate anatomical contours, lyrical drapery folds, and meditative emotional restraint.',
    history: 'Tracing its lineage to the Vijayanagara court, the school blossomed under the royal patronage of the Wadiyar dynasty in Mysore. Following the Fourth Anglo-Mysore War and the defeat of Tipu Sultan, Maharaja Mummadi Krishnaraja Wadiyar III (1799–1868) revived the school by commissioning royal treatises, temple panels, and the monumental illustrated encyclopedic manuscript "Sritattvanidhi" at the Jaganmohan Palace.',
    artists: 'Hereditary court painters including Silpi Siddalingaswamy and royal Chitragars of the Mysore court atelier.',
    artworks: 'Rajarajeshwari, Ganesha Vidhana, Goddess Chamundeshwari, and illuminated folios of the Sritattvanidhi.',
    materials: 'Paper mounted on wooden panels coated with white lead and gamboge gum. Gesso made of white lead and makki paste, covered with ultra-thin gold foil.',
    funFact: 'The gesso relief work in Mysore paintings is much lower and subtler than Tanjore art; it is deliberately kept thin to highlight intricate brushwork rather than sculptural weight.',
    images: [
      {
        url: 'images/mysore-1.jpg',
        caption: 'Serene courtly portrait of Goddess Saraswati in classical Mysore painting style',
        credit: 'Wikimedia Commons • Public Domain'
      },
      {
        url: 'art/mysore.svg',
        caption: 'Understated gold foil leaf and graceful courtly postures of the Wadiyar era',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'pichwai',
    name: 'Nathdwara',
    state: 'Rajasthan',
    coordinates: [24.9318, 73.8214],
    artStyle: 'Pichwai Painting',
    period: '17th Century CE – Present (Pushtimarg Vaishnavite Tradition)',
    eraCategory: 'Classical & Murals',
    category: 'Classical and Court',
    categoryColor: '#D4AF37',
    description: 'Pichwai paintings are large, devotional textile hanging scrolls crafted to hang behind the sacred deity of Shrinathji (a seven-year-old manifestation of Lord Krishna) at the temple of Nathdwara in southern Rajasthan. The word "Pichwai" literally translates from Sanskrit to "that which hangs at the back" (pichh meaning back, and wai meaning hanging). The artworks celebrate divine seasons, flowering Kadamba trees, playful cows, and nocturnal lotus groves.',
    history: 'The tradition began in 1672 when the idol of Shrinathji was moved from Govardhan near Mathura to Mewar to shield it from Mughal destruction, finding sanctuary under Maharana Raj Singh of Mewar. Pushtimarg temple rituals dictate that the backdrop must change according to seasonal celebrations, solstices, and religious festivals, prompting local artisan communities to produce specialized sacred tapestries throughout the year.',
    artists: 'The hereditary Pushtimarg temple artisan families of the Adi-Gaur and Jangid Brahmin communities.',
    artworks: 'Sharad Purnima Raas Leela (full autumn moon dance), Annakoot Utsav, and Kamal Talai (lotus pond with celestial cows).',
    materials: 'Heavy handspun cotton cloth starched with rice water. Natural earth and mineral pigments mixed with gum, accented with pure liquid silver and gold leaf highlights.',
    funFact: 'A single elaborate Sharad Purnima Pichwai can take master artisans up to four months to complete, requiring hundreds of thousands of individual gold leaf brushstrokes for the moonlight halo.',
    images: [
      {
        url: 'images/pichwai-1.jpg',
        caption: 'Historic Pichwai hanging scroll showing Shrinathji surrounded by Gopis and lotus blossoms',
        credit: 'Wikimedia Commons • CC BY-SA 4.0'
      },
      {
        url: 'art/pichwai.svg',
        caption: 'Kamal Talai lotus pond and sacred white cows honoring Lord Krishna',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'phad',
    name: 'Bhilwara & Shahpura',
    state: 'Rajasthan',
    coordinates: [25.3476, 74.6408],
    artStyle: 'Phad Scroll Painting',
    period: '10th Century CE origin; expanded 14th – 18th Century CE',
    eraCategory: 'Folk & Tribal',
    category: 'Folk and Tribal',
    categoryColor: '#9B7EDE',
    description: 'Phad is a magnificent thirty-foot portable scroll painting tradition native to the Bhilwara district of Rajasthan. These colorful scrolls depict the heroic epic lives of local folk deities, primarily Pabuji and Devnarayan. Used as mobile temples, the scrolls are carried across desert villages by traditional singing bards known as Bhopas and Bhopis, who perform all-night musical narrative ceremonies under starlit desert skies.',
    history: 'Practiced exclusively for centuries by the Joshi clan of the Chhipa community, Phad paintings served communities who lacked access to conventional brick-and-mortar temple sanctums. At dusk, the Bhopa unfurls the thirty-foot scroll, plays the two-stringed Ravanahatha violin, while his wife (the Bhopi) shines an oil lamp onto the corresponding visual panel described in their sung poetry.',
    artists: 'Pioneered by the Joshi family of Shahpura, including Shrilal Joshi (Padma Shri), Pradip Mukherjee, and Prakash Joshi.',
    artworks: 'Pabuji Ki Phad (epic of folk hero Pabuji and his black mare Dhemi Chhari) and Devnarayan Ki Phad.',
    materials: 'Handwoven khadi cloth stiffened with boiled tamarind seed paste and wheat flour, burnished with a cowrie shell. Natural colors of indigo, cinnabar, lampblack, and yellow orpiment.',
    funFact: 'Before a new Phad scroll is commenced, artists conduct a sacred puja and begin painting by applying the very first brushstroke of divine eyes only after an auspicious planetary hour.',
    images: [
      {
        url: 'images/phad-1.jpg',
        caption: 'Historic Phad epic narrative cloth scroll illustrating Rajasthani folk heroes and warriors',
        credit: 'Wikimedia Commons • Public Domain'
      },
      {
        url: 'art/phad.svg',
        caption: 'Dynamic battle cavalcades and nomadic bardic storytelling in vermilion and ochre',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'mughal',
    name: 'Agra & Delhi Imperial Courts',
    state: 'Uttar Pradesh & Delhi',
    coordinates: [27.1767, 78.0081],
    artStyle: 'Mughal Miniature Painting',
    period: '16th – 18th Century CE (Mughal Empire: Akbar, Jahangir & Shah Jahan)',
    eraCategory: 'Medieval & Court',
    category: 'Classical and Court',
    categoryColor: '#D4AF37',
    description: 'Mughal miniature painting was a sophisticated imperial court art that synthesized Persian decorative elegance with indigenous Indian vitality and European three-dimensional perspective. Characterized by astonishingly minute brush details, luminous jewel-like colors, and atmospheric depth, the miniatures illustrated court chronicles, royal biographies, scientific flora, exotic fauna, and introspective royal portraiture.',
    history: 'Established when Mughal Emperor Humayun returned from Persian exile in 1555 accompanied by Persian master painters Mir Sayyid Ali and Abd al-Samad. Under Emperor Akbar, a grand royal atelier (Karkhana) employed hundreds of Hindu and Muslim artists working collaboratively on epics like the Hamzanama. Under Jahangir, the style shifted toward psychological portraiture and nature studies, while Shah Jahan introduced formal symmetry and gold borders.',
    artists: 'Imperial masters including Basawan, Daswanth, Ustad Mansur (the royal naturalist), Bishandas, and Govardhan.',
    artworks: 'Baburnama and Akbarnama folios, Ustad Mansur’s Siberian Crane and Dodo, and Jahangir Holding the Portrait of Akbar.',
    materials: 'Burnished handmade Wasli paper made of layered hemp and jute. Paints made of crushed pearls, pure gold dust, lapis lazuli, malachite, and cinnabar applied with single-hair squirrel brushes.',
    funFact: 'Master painters used ultra-fine paintbrushes crafted from a single hair plucked from the throat of a newborn Himalayan squirrel to paint eyelashes and individual strands of pearls.',
    images: [
      {
        url: 'images/mughal-1.jpg',
        caption: 'Intricately illuminated imperial court miniature showing royal reception and musicians',
        credit: 'Wikimedia Commons • Public Domain'
      },
      {
        url: 'art/mughal.svg',
        caption: 'Ornate floral Hasliya margins and royal court durbar perspectives in burnished gold',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'kangra',
    name: 'Kangra Valley',
    state: 'Himachal Pradesh',
    coordinates: [32.0998, 76.2691],
    artStyle: 'Kangra Pahari Miniature',
    period: 'Late 18th – 19th Century CE (Katoch Dynasty / Raja Sansar Chand)',
    eraCategory: 'Medieval & Court',
    category: 'Classical and Court',
    categoryColor: '#D4AF37',
    description: 'Kangra painting is universally considered the most lyrical, romantic, and poetic school of Indian miniature art. Flourishing in the verdant valleys of Himachal Pradesh beneath the snow-capped Dhauladhar mountains, the paintings are celebrated for their soft porcelain skin tones, graceful female beauty, flowing transparent draperies, and lush pastoral landscapes blooming with flowering creepers and hill streams.',
    history: 'When the Mughal court declined after the sack of Delhi in 1739, skilled painters migrated to the hill states of Punjab and Himachal. The school reached sublime heights under the enlightened patronage of Raja Sansar Chand of Kangra (reigned 1775–1823), an ardent devotee of Lord Krishna. His court ateliers produced hundreds of folios visualizing the divine romance of Radha and Krishna through sensitive emotional lyricism.',
    artists: 'Nainsukh’s nephew lineage, notably master artists Manaku, Purkhu, and Fattu of Guler and Kangra.',
    artworks: 'Illustrations of Jayadeva’s Gita Govinda, Rasikapriya, Bhagavata Purana, and the Baramasa (twelve seasons).',
    materials: 'Sialkoti handmade paper. Natural mineral and vegetable dyes derived from hill stones, marigolds, and wild indigo, heightened with beaten pure gold powder.',
    funFact: 'Kangra artists captured natural twilight and thunderstorm effects so delicately that European art historians compared their landscapes to Italian Renaissance masterworks.',
    images: [
      {
        url: 'images/kangra-1.jpg',
        caption: 'Romantic Pahari miniature folio depicting Radha and Krishna under flowering hill groves',
        credit: 'Wikimedia Commons • Public Domain'
      },
      {
        url: 'art/kangra.svg',
        caption: 'Subtle porcelain skin tones and rhythmic pastoral valleys of the Dhauladhar foothills',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'kalighat',
    name: 'Kolkata (Kalighat)',
    state: 'West Bengal',
    coordinates: [22.5726, 88.3639],
    artStyle: 'Kalighat Painting & Modern Bengal Movement',
    period: '19th Century CE to Early 20th Century CE',
    eraCategory: 'Modern & Revival',
    category: 'Modern',
    categoryColor: '#7C3AED', // Royal Violet
    description: 'Kalighat painting originated around the famous 19th-century Kali Temple of Kolkata as a bold urban folk art movement. Practiced by rural scroll painters (Patuas) who migrated to the colonial metropolis, the style is defined by swift calligraphic brushstrokes, shaded contours creating volume, and satirical social commentary. It represents one of India’s earliest transitions from rural temple craft to modern urban art.',
    history: 'During the 1800s, British Calcutta became the bustling colonial capital. Around Kalighat temple, Patuas produced inexpensive souvenirs on factory-made paper for temple pilgrims. Beyond portraying Goddess Kali and Shiva, artists created biting satirical cartoons mocking the "Babu culture"—wealthy Westernized Bengali elites who aped British mannerisms. In the 20th century, modernists like Jamini Roy drew direct inspiration from Kalighat’s bold simplicity.',
    artists: 'The Patua artisan lineages of Kalighat, and modern pioneer Jamini Roy who adapted its visual idiom.',
    artworks: 'Goddess Kali standing on Lord Shiva, Babu with Hookah and Courtesan, Cat with Prawn in Mouth, and Ravana battling Jatayu.',
    materials: 'Cheap mill-made paper. Inexpensive water-based gouache and lampblack applied with broad goat-hair flat brushes, creating rapid gradation shading in single sweeps.',
    funFact: 'Kalighat painters could complete an entire finished painting in under ten minutes; their rapid brush technique prefigured 20th-century European expressionism by decades.',
    images: [
      {
        url: 'images/kalighat-1.jpg',
        caption: 'Bold calligraphic Kalighat brush drawing of Goddess Kali with swift contour shading',
        credit: 'Wikimedia Commons • Public Domain'
      },
      {
        url: 'art/kalighat.svg',
        caption: 'Satirical urban Patua line drawings and iconic Bengali mythological iconography',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'gond',
    name: 'Mandla & Dindori',
    state: 'Madhya Pradesh',
    coordinates: [22.5986, 80.3712],
    artStyle: 'Gond Tribal Art',
    period: 'Ancestral folklore roots; recognized as contemporary art from 1980s',
    eraCategory: 'Folk & Tribal',
    category: 'Folk and Tribal',
    categoryColor: '#9B7EDE',
    description: 'Gond art is an enchanting tribal expression practiced by the Gond Pradhan community inhabiting the dense Sal forests of central India. Built on the spiritual belief that "viewing a good image begets good fortune", artists fill silhouettes of trees, birds, and forest spirits with signature micro-patterns of repeating dots, dashes, and geometric waves. Every clan or artist develops a distinctive personal signature pattern.',
    history: 'Historically, Gond Pardhans were the bardic storytellers who sang oral genealogies of Gond kings accompanied by the Bana violin, painting village mud walls (Digna) for protection. In 1981, legendary Indian modernist J. Swaminathan discovered seventeen-year-old Jangarh Singh Shyam painting a temple wall in Patangarh. Swaminathan brought him to Bharat Bhavan in Bhopal, igniting the global contemporary Jangarh Kalam movement.',
    artists: 'Jangarh Singh Shyam (founding pioneer), Bhajju Shyam (Excellence in Book Design Bologna), and Venkat Raman Singh Shyam.',
    artworks: 'The Life of the Mahua Tree, Flying Deer, The London Jungle Book series, and Bada Dev the Forest Deity.',
    materials: 'Historically painted on mud walls with charcoal, geru (red mud), and chui mitti (white clay). Today painted on handmade paper and canvas using acrylic pigments and fine liner pens.',
    funFact: 'In Gond philosophy, everything possesses a living soul (animism): a tree is not merely wood; it is an active sacred shelter harboring spirits, birds, and ancient ancestors.',
    images: [
      {
        url: 'images/gond-1.jpg',
        caption: 'Contemporary Gond painting by Jangarh Singh Shyam depicting wildlife and spirit trees',
        credit: 'Wikimedia Commons • CC BY-SA 4.0'
      },
      {
        url: 'art/gond.svg',
        caption: 'Rhythmic textured infill patterns of dots and waves celebrating sacred nature',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'cheriyal',
    name: 'Cheriyal Village, Siddipet',
    state: 'Telangana',
    coordinates: [17.7946, 79.1706],
    artStyle: 'Cheriyal Scroll Painting',
    period: '12th Century CE origin; revitalized in Kakatiya & Qutb Shahi eras',
    eraCategory: 'Medieval & Court',
    category: 'Folk and Tribal',
    categoryColor: '#9B7EDE',
    description: 'Cheriyal scroll painting is a rare and ancient narrative scroll tradition native to the village of Cheriyal in Telangana. Created as long vertical scrolls reaching forty to sixty feet, they feature sequential comic-book style panels depicting legends of Telangana caste communities, local heroes, and Hindu epics. The artwork is instantly identifiable by its blazing crimson red background and expressive, stylized theatrical figures.',
    history: 'The art was created by the hereditary Nakashi artist community exclusively for the wandering storytelling bards known as Kaki Padagollu. The bards carried the long scrolls in cylindrical wooden boxes from village to village, unrolling them scene by scene while singing ballad poems with rhythm sticks. Nakashi artisans also sculpt three-dimensional wooden and sawdust masks representing village deities.',
    artists: 'D. Vaikuntam Nakash (National Award Winner), D. Rakesh Nakash, and the hereditary Nakashi families of Cheriyal.',
    artworks: 'Markandeya Purana scrolls, Krishna Leela narrative panels, and traditional brightly painted wooden Nakashi masks.',
    materials: 'Khadi cloth treated with a paste of tamarind seeds, white clay, and tree gum. Painted with natural pigments made from sea conch, turmeric, indigo, and red cinnabar stone.',
    funFact: 'Cheriyal scrolls were historically designed as functional visual aids for theater; each panel includes decorative painted floral frames that indicated when the singer should pause.',
    images: [
      {
        url: 'images/cheriyal-1.jpg',
        caption: 'Authentic Cheriyal narrative scroll painting on brilliant crimson red background',
        credit: 'Wikimedia Commons • CC BY-SA 4.0'
      },
      {
        url: 'art/cheriyal.svg',
        caption: 'Theatrical Nakashi figures, expressive eyes, and epic narrative sequence panels',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'thangka',
    name: 'Ladakh & Sikkim Monasteries',
    state: 'Ladakh & Sikkim',
    coordinates: [34.1526, 77.5771],
    artStyle: 'Tibetan-Himalayan Thangka Painting',
    period: '8th – 12th Century CE to present',
    eraCategory: 'Classical & Murals',
    category: 'Classical and Court',
    categoryColor: '#D4AF37',
    description: 'Thangka is an intricate Himalayan Buddhist scroll painting mounted on precious silk brocade, serving as a visual meditation aid and teaching tool in monastic Gompas across Ladakh, Sikkim, and the Tibetan plateau. Constructed according to strict geometric grid guidelines laid down in Buddhist iconometry texts (Iconometric Iconometry), Thangkas portray serene Buddhas, compassionate Bodhisattvas, and dynamic wrathful protector deities.',
    history: 'Developing alongside Tantric Vajrayana Buddhism from the 8th century CE, Thangkas were painted by monk artists as acts of personal devotional merit. Because trans-Himalayan monastic travelers moved between remote mountain valleys on foot and yak-back, scroll paintings could be rolled up safely inside protective silk flaps without cracking, making them ideal mobile meditation altars.',
    artists: 'Monastic lamas and master Thangka artists trained in monastic schools of Hemis, Thiksey, and Rumtek monasteries.',
    artworks: 'The Bhavachakra (Wheel of Life), Medicine Buddha, Padmasambhava (Guru Rinpoche), and Green Tara.',
    materials: 'Linen or cotton cloth treated with yak-hide glue and gesso, burnished smooth with conch shells. Painted with ground mineral pigments (gold dust, lapis, cinnabar, malachite) and bordered in Chinese silk brocade.',
    funFact: 'Before a master painter draws the sacred eyes of the central Buddha figure, a specialized consecration ritual (Spreading the Eyes) is performed under auspicious planetary alignments.',
    images: [
      {
        url: 'images/thangka-1.jpg',
        caption: 'Tibetan Buddhist Thangka scroll painting framed in ornate golden silk brocade',
        credit: 'Wikimedia Commons • Public Domain'
      },
      {
        url: 'art/thangka.svg',
        caption: 'Meditative geometric proportions and celestial Mandalas of Himalayan monasteries',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  },
  {
    id: 'kerala_mural',
    name: 'Padmanabhapuram Palace & Mattancherry',
    state: 'Kerala',
    coordinates: [8.2508, 77.3275],
    artStyle: 'Kerala Temple Mural Painting',
    period: '15th – 18th Century CE (Travancore & Cochin Dynasties)',
    eraCategory: 'Classical & Murals',
    category: 'Classical and Court',
    categoryColor: '#D4AF37',
    description: 'Kerala mural painting is an exquisite classical fresco tradition that adorns the inner sanctum walls of Kerala temples and royal wooden palaces such as Padmanabhapuram and Mattancherry. Defined by dramatic visual vigor, flowing decorative contours, and expressive classical Mudras (hand gestures), the murals adhere strictly to the "Panchavarna" rule: an ancient artistic canon using solely five sacred earth colors.',
    history: 'Influenced by ancient Pallava and Chola cave art, Kerala murals flowered into an independent regional style from the 15th to 18th centuries under the patronage of the Zamorin of Calicut and the Kings of Travancore. Master artists drew upon Sanskrit iconographic texts like the "Tantrasamucchaya" and "Chitrasutra" to paint vast narrative epics illustrating the dance of Shiva and the avatars of Vishnu.',
    artists: 'Hereditary temple muralists and contemporary masters trained at the Institute of Mural Painting in Guruvayur.',
    artworks: 'Anantasayanam (Vishnu reclining on the serpent Ananta), Nataraja at Ettumanoor temple, and the Royal Ramayana frescoes of Mattancherry Palace.',
    materials: 'Fine lime plaster washed with tender coconut water. Traditional Panchavarna five-color palette: Yellow ochre, Red ochre, Lampblack, White (lime), and Blue/Green (neelam & eravikkara leaf juice).',
    funFact: 'Plaster walls were washed repeatedly with tender coconut water and seasoned with neem leaves for weeks before painting; this ensured the lime resisted fungal decay in Kerala’s humid monsoon climate.',
    images: [
      {
        url: 'images/kerala_mural-1.jpg',
        caption: 'Panchavarna classical mural painting depicting divine coronation and sacred temple mudras',
        credit: 'Wikimedia Commons • Public Domain'
      },
      {
        url: 'art/kerala-mural.svg',
        caption: 'Five sacred earth colors and dramatic stylized facial curves of Travancore palace frescoes',
        credit: 'Rang Bharat Digital Humanities Archive'
      }
    ]
  }
];

// Timeline Era milestones
var TIMELINE_ERAS = [
  {
    id: 'era-prehistoric',
    name: 'Prehistoric & Ancient Caves',
    range: '10,000 BCE – 5th Century CE',
    color: '#B8860B',
    description: 'Earliest rock shelter paintings and monolithic Buddhist cave murals.',
    locations: ['bhimbetka', 'ajanta', 'ellora']
  },
  {
    id: 'era-classical',
    name: 'Classical & Temple Murals',
    range: '6th – 15th Century CE',
    color: '#9B7EDE',
    description: 'Sacred temple scrolls, monastery frescoes, and devotional idol backdrops.',
    locations: ['pattachitra', 'kerala_mural', 'thangka']
  },
  {
    id: 'era-medieval',
    name: 'Medieval & Royal Courts',
    range: '16th – 18th Century CE',
    color: '#D4AF37',
    description: 'Gold-leaf icons, court miniatures, botanical dyes, and illuminated folios.',
    locations: ['mughal', 'tanjore', 'mysore', 'pichwai', 'kangra', 'kalamkari', 'cheriyal']
  },
  {
    id: 'era-folk',
    name: 'Folk & Living Traditions',
    range: 'Ancestral Origins to Present',
    color: '#C9B8F0',
    description: 'Indigenous tribal expressions, rural wedding murals, and nomadic bardic scrolls.',
    locations: ['warli', 'madhubani', 'phad', 'gond']
  },
  {
    id: 'era-modern',
    name: 'Modern & Cultural Revival',
    range: '19th Century – Modern Day',
    color: '#7C3AED',
    description: 'Urban bazaar Patua satire, Bengal Renaissance, and international recognition.',
    locations: ['kalighat']
  }
];

// Did You Know? Trivia Cards
var DID_YOU_KNOW_FACTS = [
  {
    title: 'Edible Pigments & Living Chemistry',
    icon: '🌾',
    text: 'Warli artists make their durable white paint by chewing fresh rice flour with water and acacia gum; Pichwai masters grind natural lapis lazuli and silver leaf, while Kalamkari fabric is soaked in fatty buffalo milk to stop mineral dyes from bleeding across cotton threads.'
  },
  {
    title: 'Top-Down Monolithic Engineering',
    icon: '🏛️',
    text: 'The Kailasa Temple at Ellora Caves was chiseled from the top of a volcanic basalt cliff downward. Master sculptors removed over 200,000 tonnes of rock without any internal pillars or supports, making any structural miscalculation irreversible.'
  },
  {
    title: 'Ancient Multi-Mile Trade Routes for Color',
    icon: '💎',
    text: 'The celestial blue pigment used to paint Bodhisattva Padmapani holding the lotus at Ajanta is crushed lapis lazuli. It was transported over 2,000 miles across treacherous Silk Route mountain passes from Badakhshan (Afghanistan) to the Deccan gorge.'
  },
  {
    title: 'The Single-Hair Squirrel Brush',
    icon: '🖌️',
    text: 'Imperial Mughal miniature court painters utilized single-hair brushes crafted from the throat of newborn Himalayan squirrels. This allowed them to paint individual pearl highlights, feather veins, and micro-calligraphy visible only under magnification.'
  }
];

// Filter Categories
var CATEGORIES = [
  { id: 'all', label: 'All Traditions' },
  { id: 'Cave and Ancient', label: 'Cave & Ancient' },
  { id: 'Classical and Court', label: 'Classical & Court' },
  { id: 'Folk and Tribal', label: 'Folk & Tribal' },
  { id: 'Textile Art', label: 'Textile Art' },
  { id: 'Modern', label: 'Modern & Revival' }
];

// Export for browser script tag or module systems
if (typeof window !== 'undefined') {
  window.ART_LOCATIONS = ART_LOCATIONS;
  window.TIMELINE_ERAS = TIMELINE_ERAS;
  window.DID_YOU_KNOW_FACTS = DID_YOU_KNOW_FACTS;
  window.CATEGORIES = CATEGORIES;
}
