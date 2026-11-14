// Centralized Structured Dataset for Kala Yatra – Interactive Indian Art Explorer

export const REGIONS = [
  { id: 'all', label: 'All Regions' },
  { id: 'North India', label: 'North India' },
  { id: 'South India', label: 'South India' },
  { id: 'East India', label: 'East India' },
  { id: 'West India', label: 'West India' },
  { id: 'Central India', label: 'Central India' },
];

export const ART_CATEGORIES = [
  { id: 'all', label: 'All Art Forms' },
  { id: 'Folk Art', label: 'Folk Art' },
  { id: 'Tribal Art', label: 'Tribal Art' },
  { id: 'Classical Art', label: 'Classical Art' },
  { id: 'Miniature Painting', label: 'Miniature Painting' },
  { id: 'Mural Art', label: 'Mural Art' },
];

export const STATES = [
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    tagline: 'Where ancient cave traditions meet vibrant tribal expression.',
    region: 'West India',
    coordinates: [19.7515, 75.7139],
    capital: 'Mumbai',
    historicalLocations: ['Ajanta Caves', 'Ellora Caves', 'Palghar & Dahanu (Warli Region)', 'Elephanta'],
    culturalIntroduction: 'Maharashtra bridges ancient monolithic rock-cut cave heritage with living indigenous tribal cultures. Along the Sahyadri range, the Warli community has painted rhythmic geometric communion with nature on mud walls for centuries, while the deep basalt cliffs of the Deccan cradled the world-renowned Buddhist frescoes of Ajanta.',
    artFormIds: ['warli', 'ajanta'],
    heroImage: '/art/warli.svg'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    tagline: "The spiritual heartland of Mithila's sacred double-line geometry.",
    region: 'East India',
    coordinates: [25.0961, 85.3131],
    capital: 'Patna',
    historicalLocations: ['Madhubani', 'Jitwarpur', 'Ranti', 'Nalanda'],
    culturalIntroduction: 'Bihar is home to Mithila, one of the ancient cradles of Indian civilization and devotional arts. In village homes around Madhubani, generations of women artists have transformed ritual mud walls and domestic chambers into spiritual tapestries using twigs, fingers, and organic plant pigments.',
    artFormIds: ['madhubani'],
    heroImage: '/art/madhubani.svg'
  },
  {
    id: 'odisha',
    name: 'Odisha',
    tagline: 'Home of the Jagannath cult and sacred palm-leaf chitrakars.',
    region: 'East India',
    coordinates: [20.9517, 85.0985],
    capital: 'Bhubaneswar',
    historicalLocations: ['Puri', 'Raghurajpur Heritage Village', 'Konark', 'Dhauli'],
    culturalIntroduction: 'Odisha is an ocean of sacred temple aesthetics. From the ancient chitrakar families of Raghurajpur who etch palm leaves with iron styluses to the monumental cloth scrolls painted for the Lord Jagannath temple in Puri, Odishan art is a living spiritual sadhana.',
    artFormIds: ['pattachitra'],
    heroImage: '/art/pattachitra.svg'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    tagline: 'Land of grand Chola architecture and 22-carat gold Tanjore icons.',
    region: 'South India',
    coordinates: [11.1271, 78.6569],
    capital: 'Chennai',
    historicalLocations: ['Thanjavur', 'Madurai', 'Kanchipuram', 'Mahabalipuram'],
    culturalIntroduction: 'Tamil Nadu is synonymous with divine majesty and classical discipline. Under the Chola, Nayak, and Maratha rulers of Thanjavur, icon painting attained an extraordinary level of opulence, combining raised three-dimensional gesso relief with shimmering 22-carat gold leaf and precious stones.',
    artFormIds: ['tanjore'],
    heroImage: '/art/tanjore.svg'
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    tagline: 'Cradle of bamboo-pen temple scrolls and natural dye printing.',
    region: 'South India',
    coordinates: [15.9129, 79.7400],
    capital: 'Amaravati',
    historicalLocations: ['Srikalahasti', 'Machilipatnam', 'Pedana', 'Lepakshi'],
    culturalIntroduction: 'Andhra Pradesh nurtured the peerless craft of Kalamkari—the art of drawing with a sharp bamboo reed (kalam) and painting with organic river-washed vegetable dyes. Supported by the Vijayanagara Empire and Golconda Sultanate, its freehand scrolls and floral chintz textiles captivated courts worldwide.',
    artFormIds: ['kalamkari'],
    heroImage: '/art/kalamkari.svg'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    tagline: 'Desert realm of singing bards, epic scrolls, and royal court miniatures.',
    region: 'North India',
    coordinates: [27.0238, 74.2179],
    capital: 'Jaipur',
    historicalLocations: ['Jaipur', 'Shahpura', 'Bhilwara', 'Udaipur', 'Jodhpur'],
    culturalIntroduction: 'Rajasthan is a vibrant tapestry of heroic balladry and royal refinement. Its folk artists unroll seventy-foot painted cloth scrolls (Phad) before nomadic pastoralists by firelight, while its royal ateliers developed some of the most emotionally intense miniature schools in world art.',
    artFormIds: ['phad', 'rajasthani-miniature'],
    heroImage: '/art/phad.svg'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    tagline: 'Himalayan valleys where poetry and Radha-Krishna devotion bloom in miniature.',
    region: 'North India',
    coordinates: [31.1048, 77.1734],
    capital: 'Shimla',
    historicalLocations: ['Kangra Valley', 'Guler', 'Basohli', 'Chamba'],
    culturalIntroduction: 'Nestled in the shadows of the snow-clad Dhauladhar mountains, Himachal Pradesh fostered the lyrical Pahari miniature tradition. In the Kangra Valley, court painters translated Jayadeva’s Gita Govinda into tender, pastel landscapes where blooming trees mirror the divine romance of Radha and Krishna.',
    artFormIds: ['kangra'],
    heroImage: '/art/kangra.svg'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    tagline: 'Imperial grandeur of Vijayanagara monoliths and delicate Mysore gesso.',
    region: 'South India',
    coordinates: [15.3173, 75.7139],
    capital: 'Bengaluru',
    historicalLocations: ['Mysuru (Mysore)', 'Hampi (Vijayanagara)', 'Badami', 'Aihole'],
    culturalIntroduction: 'Karnataka has been home to mighty empires that carved poetry into stone and illuminated sacred manuscripts with gold. From the colossal granite ruins of Hampi to the serene courtly paintings of Mysore patronized by the Wodeyars, its art is marked by meditative elegance.',
    artFormIds: ['mysore'],
    heroImage: '/art/mysore.svg'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    tagline: 'Arid land of nomadic embroideries and the magical castor-oil thread of Rogan.',
    region: 'West India',
    coordinates: [22.2587, 71.1924],
    capital: 'Gandhinagar',
    historicalLocations: ['Nirona (Kutch)', 'Bhuj', 'Patan', 'Somnath'],
    culturalIntroduction: 'Gujarat is celebrated for its extraordinary living craft resilience. In the salt plains and desert villages of Kutch, generations of Khatri artisans have kept alive the rare art of Rogan—painting intricate floral symmetrical designs with boiled castor oil and a blunt metal stylus without ever touching the fabric directly.',
    artFormIds: ['rogan'],
    heroImage: '/art/rogan.svg'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    tagline: 'Vibrant storytelling through forty-foot crimson scrolls and Nakashi masks.',
    region: 'South India',
    coordinates: [18.1124, 79.0193],
    capital: 'Hyderabad',
    historicalLocations: ['Cheriyal', 'Warangal', 'Golconda', 'Pochampally'],
    culturalIntroduction: 'Telangana preserves ancient narrative scroll painting traditions through the hereditary Nakashi artist lineages of Cheriyal village. Painted on khadi cloth treated with tamarind seed paste and framed in crimson red, these scrolls served wandering bards singing rural community legends.',
    artFormIds: ['cheriyal'],
    heroImage: '/art/cheriyal.svg'
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    tagline: 'Epicenter of the nationalist art renaissance and Kalighat temple patuas.',
    region: 'East India',
    coordinates: [22.9868, 87.8550],
    capital: 'Kolkata',
    historicalLocations: ['Kolkata', 'Kalighat', 'Shantiniketan', 'Bishnupur'],
    culturalIntroduction: 'Bengal stands at the historic crossroads of folk street painting and modern nationalist revival. Around the 19th-century Kalighat temple, patuas created rapid, fluid brush-drawings satirizing colonial society, while in the early 20th century, Abanindranath Tagore founded the Bengal School of Art.',
    artFormIds: ['kalighat', 'bengal-school'],
    heroImage: '/art/kalighat.svg'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    tagline: 'Heart of India echoing with Paleolithic rock art and vibrant Gond nature spirits.',
    region: 'Central India',
    coordinates: [22.9734, 78.6569],
    capital: 'Bhopal',
    historicalLocations: ['Bhimbetka Caves', 'Mandla & Dindori (Gond Region)', 'Sanchi', 'Khajuraho'],
    culturalIntroduction: 'Madhya Pradesh holds some of humanity’s oldest creative marks. In the rock shelters of Bhimbetka, prehistoric artists painted wildlife thirty millennia ago, while the indigenous Gond community paints trees, birds, and spirits using their signature visual language of rhythmic dots and dashes.',
    artFormIds: ['gond', 'bhimbetka'],
    heroImage: '/art/gond.svg'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    tagline: 'Lush coastal realm of Panchavarna temple murals and sacred Kathakali aesthetics.',
    region: 'South India',
    coordinates: [10.8505, 76.2711],
    capital: 'Thiruvananthapuram',
    historicalLocations: ['Mattancherry Palace (Kochi)', 'Padmanabhapuram', 'Guruvayur', 'Thrissur'],
    culturalIntroduction: 'Kerala’s artistic heritage is intimately woven into the sanctums of its temples and royal palaces. Using the Panchavarna (five natural sacred colors), traditional mural masters executed grand mythological frescoes of Lord Shiva, Vishnu, and celestial dancers with elaborate Kathakali-style crowns and sweeping fish-shaped eyes.',
    artFormIds: ['kerala-mural'],
    heroImage: '/art/kerala-mural.svg'
  }
];

export const ART_FORMS = [
  // 1. Warli Painting
  {
    id: 'warli',
    name: 'Warli Painting',
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    category: 'Tribal Art',
    originLocation: 'Palghar & Thane District',
    period: 'Ancient Roots (Circa 10th Century CE)',
    heroImage: '/art/warli.svg',
    shortDescription: 'Ancestral geometric tribal painting in white rice paste celebrating harmony between humankind, agrarian cycles, and Mother Nature.',
    originAndHistory: 'Warli painting originated with the indigenous Warli Adivasi tribe inhabiting the northern Sahyadri range of Maharashtra. Traditionally, it was an unwritten, oral heritage passed down through women (suvasinis) who painted the mud walls of village huts during weddings and harvest festivals to invite the blessing of the fertility goddess Palaghata. In the 1970s, master artist Jivya Soma Mashe brought the art onto handmade paper and canvas, winning global acclaim.',
    culturalSignificance: 'Warli art is not iconographic; it does not portray mythological gods. Instead, it is an everyday sacred veneration of Mother Earth (Dharti Mata), trees, domestic animals, and human solidarity. The iconic spiral Tarpa dance symbolizes the cyclical nature of time and life—having no beginning and no end.',
    artisticCharacteristics: 'The visual vocabulary relies on elemental geometric forms: the circle represents the sun and moon; the triangle represents mountains and conical trees; the square denotes a sacred enclosure (chauk). Human and animal figures are formed by two intersecting triangles meeting at the tip, symbolizing cosmic balance and dynamic motion.',
    materialsUsed: 'A simple white paste created by grinding unpolished rice into fine flour mixed with water and binding gum from the babool tree. Painted onto walls coated with cow dung and red ochre mud (geru). Chewed bamboo twigs (baharu) serve as fine brushes.',
    paintingTechniques: 'Walls are freshly plastered with red-brown earth. Dancers and narrative scenes are drawn directly without preliminary pencil sketches. The concentric spiral of dancers is painted from the central Tarpa player outwards, creating an organic rhythm of village celebration.',
    famousThemes: 'The Tarpa circular dance, Lagna Chowk (marriage ritual square), Muthi (rice sheaf harvest blessing), hunting, farming, bullock carts, and community ceremonies.',
    importantArtists: 'Jivya Soma Mashe (Padma Shri, father of contemporary Warli art), Balu Mashe, Rajesh Chaitya Vangad, and the women suvasini community of Dahanu.',
    gallery: [
      { url: '/art/warli.svg', caption: 'Tarpa Dance & Sacred Tree of Life', detail: 'Concentric circles of Warli villagers dancing around the central Tarpa trumpeter on a terracotta mud wall.' },
      { url: '/art/warli.svg', caption: 'Lagna Chowk (Wedding Square)', detail: 'Sacred fertility square painted by suvasinis with goddess Palaghata at the center.' },
      { url: '/art/warli.svg', caption: 'Harvest Celebration & Forest Flora', detail: 'Depicting village agrarian cycles, sacred deer, peacocks, and thatched tribal huts.' },
      { url: '/art/warli.svg', caption: 'Warli Geometric Figures in Motion', detail: 'Twin inverted triangles creating the dynamic kinetic human body in celebration.' },
    ],
    didYouKnow: [
      'Warli art does not depict deities, but rather nature, daily harvest, and community fellowship.',
      'Jivya Soma Mashe was awarded the Padma Shri in 2011 for elevating this tribal wall art into the international art gallery canon.',
      'The Tarpa is a trumpet-like wind instrument made of dried gourd and bamboo played exclusively by village men.'
    ],
    relatedArtIds: ['gond', 'madhubani', 'bhimbetka']
  },

  // 2. Ajanta Cave Paintings
  {
    id: 'ajanta',
    name: 'Ajanta Cave Paintings',
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    category: 'Mural Art',
    originLocation: 'Ajanta Caves, Aurangabad District',
    period: '2nd Century BCE – 5th Century CE (Satavahana & Vakataka Dynasties)',
    heroImage: '/art/ajanta.svg',
    shortDescription: 'Masterpieces of classical Buddhist mural painting carved into crescent-shaped canyon cliffs, famed for the graceful Bodhisattva Padmapani.',
    originAndHistory: 'Carved into the sheer horseshoe rock cliffs of the Waghur river gorge in two phases: the early Hinayana phase under the Satavahana dynasty (2nd century BCE) and the grand Mahayana phase under Vakataka Emperor Harishena (5th century CE). Shrouded by dense jungle after being abandoned, they were rediscovered in 1819 by British officer John Smith.',
    culturalSignificance: 'Represents the supreme golden age of ancient Indian classical painting. The murals illustrate the life of Gautama Buddha and Jataka tales, embodying sublime compassion, spiritual detachment, courtly elegance, and rhythmic sensual grace.',
    artisticCharacteristics: 'Exquisite calligraphic line-work, three-quarter facial profiles, graceful tribhanga poses, delicate pearl tiaras, and translucent drapery that seamlessly blends spiritual transcendence with courtly opulence.',
    materialsUsed: 'Clay plaster mixed with cow dung, rice husks, and organic fiber applied over chisel-dressed basalt rock. Finished with a fine lime slip. Natural earth pigments: yellow ochre, red ochre, lamp black, malachite green, and precious lapis lazuli imported from Badakhshan.',
    paintingTechniques: 'True tempera mural painting. Pigments mixed with animal glue and gum were applied onto a dried lime-coated mud plaster layer, followed by gentle burnishing with smooth agate river stones to achieve an enamel-like glow.',
    famousThemes: 'Bodhisattva Padmapani holding the blue lotus (Cave 1), Bodhisattva Vajrapani, Mahajanaka Jataka, Shibi Jataka, and the Parinirvana of Buddha (Cave 26).',
    importantArtists: 'Monastic guilds and royal court ateliers under the direct patronage of Vakataka Emperor Harishena and his royal minister Varahadeva.',
    gallery: [
      { url: '/art/ajanta.svg', caption: 'Bodhisattva Padmapani (Cave 1)', detail: 'The iconic Bodhisattva holding the blue lotus with meditative downcast eyes and pearl crown.' },
      { url: '/art/ajanta.svg', caption: 'Celesial Apsaras & Gandharvas', detail: 'Flying celestial nymphs painted on cave ceiling arches with diaphanous silk scarves.' },
      { url: '/art/ajanta.svg', caption: 'Mahajanaka Jataka Narrative Frieze', detail: 'Ornate courtly palace scenes showing dancers, musicians, and renunciation of worldly wealth.' },
      { url: '/art/ajanta.svg', caption: 'Horseshoe Canyon Rock-Cut Facade', detail: 'The monumental cliff architecture housing 30 excavated Buddhist sanctuaries.' },
    ],
    didYouKnow: [
      'The blue pigment used in Padmapani’s lotus is lapis lazuli, which had to be imported all the way from the mountains of Afghanistan.',
      'The caves were lost to human memory for nearly 1,000 years until a British hunting party spotted an arched cave facade in 1819.',
      'Ajanta murals are not true Italian frescoes (fresco buono) but dry tempera on mud-lime plaster.'
    ],
    relatedArtIds: ['kerala-mural', 'bhimbetka', 'bengal-school']
  },

  // 3. Madhubani Painting
  {
    id: 'madhubani',
    name: 'Madhubani Painting',
    stateId: 'bihar',
    stateName: 'Bihar',
    category: 'Folk Art',
    originLocation: 'Madhubani & Mithila Region',
    period: 'Ancient Folk Roots (Documented since 14th c. / 1934 Discovery)',
    heroImage: '/art/madhubani.svg',
    shortDescription: 'Intricate Mithila folk painting distinguished by double-line borders, fish-scale textures, vibrant natural dyes, and epics of divine love.',
    originAndHistory: 'Originating mythologically when King Janaka commissioned artists to paint his palace for his daughter Sita’s wedding to Lord Rama. Practiced exclusively by women in Mithila across five styles: Bharni, Kachni, Tantrik, Godna, and Gobar. The wider world discovered it following the 1934 Bihar earthquake when British officer William G. Archer found murals in shattered homes.',
    culturalSignificance: 'Acts as sacred ritual protection. Painted inside the Kohbar Ghar (the wedding chamber) to bless newlyweds with fertility, health, and cosmic balance. Every animal and flower carries profound symbolic meaning.',
    artisticCharacteristics: 'Double-line contours filled with fine cross-hatching (kachni). Flattened perspective where no space is left empty (horror vacui), filled instead with birds, peacocks, lotus blossoms, and radiating solar wheels.',
    materialsUsed: 'Handmade paper or mud-plastered walls. Pigments extracted from nature: turmeric for yellow, soot for lamp black, indigo for blue, aparajita flowers for violet, and palash for bright red. Bamboo twigs wrapped in cotton serve as pens.',
    paintingTechniques: 'Double black outlines are drawn freehand with bamboo nips. In Kachni style, surfaces are filled exclusively with parallel hatch lines; in Bharni style, vibrant solid mineral colors fill the enclosed contours.',
    famousThemes: 'Kohbar Ghar wedding murals, Radha-Krishna Ras Leela, Rama-Sita wedding, the sacred Fish (Matsya), and the Sun and Moon deities.',
    importantArtists: 'Jagdamba Devi (first Padma Shri in 1975), Mahasundari Devi, Sita Devi, Baua Devi, and Dulari Devi.',
    gallery: [
      { url: '/art/madhubani.svg', caption: 'The Royal Mithila Peacock (Mayura)', detail: 'Magnificent peacock plumage with double-line kachni hatching and lotus blossoms.' },
      { url: '/art/madhubani.svg', caption: 'Twin Sacred Fish (Matsya Yugma)', detail: 'A symbol of fertility, water prosperity, and divine auspiciousness in Mithila weddings.' },
      { url: '/art/madhubani.svg', caption: 'Radiant Mithila Sun God (Surya)', detail: 'Intricately stylized facial features radiating solar energy with natural vermilion and turmeric.' },
      { url: '/art/madhubani.svg', caption: 'Kohbar Ghar Nuptial Mandala', detail: 'The traditional wedding wall chamber designed to bless the bridal bed with abundance.' },
    ],
    didYouKnow: [
      'In 2012, local artists painted Madhubani trees along highways in Bihar, successfully preventing timber poachers from felling them because trees with sacred deities are never cut!',
      'Madhubani painting was done strictly on mud walls until the 1960s drought when paper was introduced to help women sell art for drought relief.',
      'The five distinct castes of Mithila historically created five distinct stylistic variations.'
    ],
    relatedArtIds: ['pattachitra', 'warli', 'kalamkari']
  },

  // 4. Pattachitra Painting
  {
    id: 'pattachitra',
    name: 'Pattachitra Painting',
    stateId: 'odisha',
    stateName: 'Odisha',
    category: 'Folk Art',
    originLocation: 'Puri & Raghurajpur',
    period: '12th Century CE (Jagannath Temple Tradition)',
    heroImage: '/art/pattachitra.svg',
    shortDescription: 'Sacred cloth and palm-leaf scroll painting rooted in the Jagannath cult, adorned with decorative floral borders and rhythmic classical stances.',
    originAndHistory: 'Inseparably tied to the worship rituals of the Jagannath Temple in Puri. During the annual "Anavasara" fortnight—when the temple idols are secluded for 14 days after their ceremonial bath (Snana Yatra)—three monumental Pattachitra paintings (Anasar Pati) take their place on the sanctum altar.',
    culturalSignificance: 'Pattachitra is a spiritual discipline for the hereditary chitrakar community of Raghurajpur. Every artwork follows strict iconographic rules set down in ancient Sanskrit Shilpa Shastras, illustrating the Dashavatara and Krishna Leela.',
    artisticCharacteristics: 'Bold flowing brush outlines, large lotus-shaped circular eyes, stylized classical Odissi dance postures, dramatic saturated crimson and ochre backgrounds, and ornate floral creeper borders (ankura).',
    materialsUsed: 'Pattas (canvases) made by bonding layers of cotton fabric with tamarind seed gum and soft chalk powder, burnished with river stones. Natural colours: conch-shell white, hingula red, haritala yellow, and lamp black.',
    paintingTechniques: 'The cloth is seasoned with tamarind paste until it hardens like leather. The master chitrakar draws the border first, defines the central deities with red outline, paints the base colors, adds fine black calligraphic finishing, and seals the painting with tree resin (jaula).',
    famousThemes: 'Jagannath Triad (Jagannath, Balabhadra, Subhadra), Kanchi Abhiyan, Krishna Leela, Dashavatara, and Kaliya Dalan.',
    importantArtists: 'Hereditary chitrakar mahapatras of Puri, Jagannath Mahapatra, and Guru Kelucharan Mohapatra (who hailed from Raghurajpur).',
    gallery: [
      { url: '/art/pattachitra.svg', caption: 'The Puri Jagannath Triad', detail: 'Lord Jagannath, Balabhadra, and Goddess Subhadra with their iconic round lotus eyes and golden mukutas.' },
      { url: '/art/pattachitra.svg', caption: 'Dashavatara (Ten Incarnations of Vishnu)', detail: 'Intricate circular composition depicting the cosmic incarnations from Matsya to Kalki.' },
      { url: '/art/pattachitra.svg', caption: 'Talapatra Chitra (Palm Leaf Etching)', detail: 'Fine black incised lines etched with iron lekhani on dried, cured palmyra palm leaves.' },
      { url: '/art/pattachitra.svg', caption: 'Krishna Leela & Ornate Floral Borders', detail: 'Classical Odissi postures framed by intricate botanical creepers in natural mineral colors.' },
    ],
    didYouKnow: [
      'In the heritage village of Raghurajpur near Puri, every single household has been actively practicing Pattachitra for centuries.',
      'Traditional chitrakars test the smoothness of the prepared cloth canvas by checking if a coin placed on it will slide off easily.',
      'The conch shell white pigment used in Pattachitra is made by burning and pulverizing authentic sea conches into microscopic powder.'
    ],
    relatedArtIds: ['kalamkari', 'tanjore', 'cheriyal']
  },

  // 5. Tanjore Painting
  {
    id: 'tanjore',
    name: 'Tanjore Painting',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    category: 'Classical Art',
    originLocation: 'Thanjavur & Tiruchirappalli',
    period: '16th – 18th Century CE (Nayak & Maratha Rulers)',
    heroImage: '/art/tanjore.svg',
    shortDescription: 'Luminous devotional icon paintings distinguished by raised three-dimensional gesso relief, genuine 22-carat gold foil, and glittering gemstones.',
    originAndHistory: 'Flourished under the Nayaks of Thanjavur and achieved supreme luxury under Maratha King Serfoji II (1798–1832). The Raju community of Thanjavur and Naidus of Madurai perfected this royal court and temple devotional art.',
    culturalSignificance: 'Created primarily for home shrines (puja rooms) and temples. The sparkling 22k gold foil illuminates in dim oil lamp light, creating a celestial aura around the smiling, plump-faced baby Krishna.',
    artisticCharacteristics: 'Central iconic deity framed beneath an ornate cusped prabhavali arch, plump round faces, large almond eyes, high three-dimensional gesso relief for jewelry and pillars, encrusted with semi-precious stones and gold foil.',
    materialsUsed: 'Jackfruit or teak wood board pasted with muslin cloth. Gesso paste prepared from powdered limestone (sukka) and gum Arabic. Embellished with 22-carat pure gold leaf and inlaid Jaipur semi-precious stones or glass cutwork.',
    paintingTechniques: 'Muslin is glued to wood with tamarind paste. The sketch is made, followed by relief work using thick sukka limestone paste applied with a stylus. Gold foil is carefully pressed over relief sections, and the divine face is illuminated with vibrant gouache paints.',
    famousThemes: 'Navaneetha Krishna (Baby Krishna holding butter pot), Rama Pattabhishekam, Brihadeeswara Shiva, Goddess Gajalakshmi, and Saraswati.',
    importantArtists: 'C. Raja Raja Varma, traditional Raju and Naidu artisan guilds of Thanjavur, and contemporary masters of the Serfoji lineage.',
    gallery: [
      { url: '/art/tanjore.svg', caption: 'Navaneetha Krishna with Butter Pot', detail: 'Baby Krishna with peacock feather crown, diamond necklaces, and raised 22k gold relief arch.' },
      { url: '/art/tanjore.svg', caption: 'Ornate Temple Prabhavali Arch', detail: 'Intricate gesso relief embedded with simulated emeralds and rubies beneath an auspicious Kirtimukha.' },
      { url: '/art/tanjore.svg', caption: 'Goddess Gajalakshmi Iconography', detail: 'The goddess of wealth flanked by twin royal elephants showering lotus blossoms.' },
      { url: '/art/tanjore.svg', caption: 'Rama Pattabhishekam Coronation', detail: 'Grand multi-figure coronation of Lord Rama with Sita, Lakshmana, and Hanuman in gold leaf.' },
    ],
    didYouKnow: [
      'Genuine Tanjore paintings use real 22-carat gold foil that never tarnishes or fades even after 100 years.',
      'The baby Krishna in Tanjore painting is intentionally depicted with plump, cherubic cheeks to represent contentment and divine innocence.',
      'Tanjore paintings were traditionally inspected in oil lamp light to observe how the gold foil reflected candlelight.'
    ],
    relatedArtIds: ['mysore', 'pattachitra', 'kerala-mural']
  },

  // 6. Kalamkari Painting
  {
    id: 'kalamkari',
    name: 'Kalamkari Painting',
    stateId: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    category: 'Textile Art',
    originLocation: 'Srikalahasti & Machilipatnam',
    period: '14th – 17th Century CE (Vijayanagara & Golconda)',
    heroImage: '/art/kalamkari.svg',
    shortDescription: 'Ancient bamboo-pen drawn and block-printed cotton art celebrating temple narratives and the sacred Tree of Life in rich organic dyes.',
    originAndHistory: 'Deriving its name from the Persian "kalam" (pen) and "kari" (craftmanship). Two great schools emerged: Srikalahasti, where sacred epics were drawn entirely freehand for temple backdrops, and Machilipatnam, where delicate wooden blocks created botanical chintz for global spice trade routes.',
    culturalSignificance: 'Served as visual storytelling scrolls in temple sanctums and halls. Wandering bards recited tales of the Mahabharata, Ramayana, and Puranas in front of these mammoth, narrative-painted textile canopies.',
    artisticCharacteristics: 'Flowing organic lines drawn with iron mordant, earthy brick reds from madder roots, deep indigos, warm yellows from pomegranate peel, and intricate floral Tree of Life compositions.',
    materialsUsed: 'Unbleached cotton (kora cloth) treated with buffalo milk and myrobalan seed extract. Outlines drawn with bamboo quills wrapped with wool. Organic dyes derived from alum, iron rust, indigo, and madder roots.',
    paintingTechniques: 'Involves up to 23 laborious stages: bleaching in river water, treating with milk to prevent bleeding, freehand pen sketching in fermented jaggery-iron solution, boiling in madder vats, and hand-painting yellow and blue.',
    famousThemes: 'Tree of Life (Kalpavriksha) with birds and deer, Ramayana temple scrolls, Krishna Leela, Shiva-Parvati Kalyanam, and Persian floral mihrabs.',
    importantArtists: 'J. Niranjan, Jonnalagadda Gurappa Chetty (Padma Shri), Pitchuka Srinivas (Pedana block print lineage).',
    gallery: [
      { url: '/art/kalamkari.svg', caption: 'The Sacred Tree of Life (Kalpavriksha)', detail: 'Curving organic branches adorned with blooming indigo lotuses, singing birds, and resting deer.' },
      { url: '/art/kalamkari.svg', caption: 'Srikalahasti Freehand Temple Banners', detail: 'Epic narrative panels drawn freehand with bamboo quill and organic river-washed dyes.' },
      { url: '/art/kalamkari.svg', caption: 'Machilipatnam Teak Woodblock Print', detail: 'Repeating botanical chintz patterns hand-stamped with multi-piece carved woodblocks.' },
      { url: '/art/kalamkari.svg', caption: 'Hamsa (Sacred Swan) & Lotus Pond', detail: 'Intricate textile border motifs showcasing natural indigo and madder red dyes.' },
    ],
    didYouKnow: [
      'Buffalo milk is an indispensable ingredient in Kalamkari; its fat and protein content prevent natural inks from bleeding into cotton fibers.',
      'The flowing river water of the Swarnamukhi river in Srikalahasti has a specific mineral content that makes the vegetable colors permanently vibrant.',
      'Kalamkari textiles were traded as far as Britain, Persia, and Japan during the 17th-century spice and silk trade.'
    ],
    relatedArtIds: ['pattachitra', 'cheriyal', 'warli']
  },

  // 7. Phad Painting
  {
    id: 'phad',
    name: 'Phad Painting',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    category: 'Folk Art',
    originLocation: 'Shahpura & Bhilwara',
    period: 'Circa 10th Century CE (Joshi Family Tradition)',
    heroImage: '/art/phad.svg',
    shortDescription: 'Long narrative cloth scrolls of folk deities sung and performed by itinerant Bhopa storytellers across desert villages.',
    originAndHistory: 'Originating among the Joshi painter community of Shahpura and Bhilwara in Rajasthan. These scrolls, often 30 to 70 feet in length, depict the life and miracles of local deified folk heroes Pabuji and Devnarayan, carried from village to village by Bhopa priest-singers.',
    culturalSignificance: 'Phad is a mobile portable temple (chalta-firta mandir). At dusk, the Bhopa priest sings epic verses and plays the Ravanahatha violin while his wife, the Bhopi, illuminates the painted scenes with an oil lantern.',
    artisticCharacteristics: 'Crowded narrative compositions with multiple scenes occurring simultaneously. The scale of human figures indicates their social and divine rank. Outlines are bold black; colors are applied in specific traditional stages: yellow, green, brown, red, and blue.',
    materialsUsed: 'Handwoven khadi cloth stiffened with boiled wheat starch and rice water, then burnished with a smooth agate stone (mohra). Colors are made from powdered minerals mixed with tree gum and water.',
    paintingTechniques: 'The cloth is stretched and burnished until glossy. The master painter begins by drawing in light yellow, paints the characters in hierarchical order, adds red clothing, and performs a sacred ceremony when opening the eyes (aankh kholna) of the central deity.',
    famousThemes: 'Pabuji Ki Phad (the epic of folk deity Pabuji protecting cows), Devnarayan Ki Phad, and Krishna Leela.',
    importantArtists: 'Shree Lal Joshi (Padma Shri), Pradip Mukherjee, Prakash Joshi, and the hereditary Joshi families of Bhilwara.',
    gallery: [
      { url: '/art/phad.svg', caption: 'Pabuji on Mare Kesar Kalmi', detail: 'The folk hero Pabuji mounted on his famous black mare with spear in hand and royal red turban.' },
      { url: '/art/phad.svg', caption: 'The Mobile Temple Scroll (Phad)', detail: 'A continuous visual tapestry where every inch narrates community heroics and divine miracles.' },
      { url: '/art/phad.svg', caption: 'Bhopa Storyteller with Ravanahatha', detail: 'Priest-singers performing folk ballads before the illuminated cloth scroll in desert villages.' },
      { url: '/art/phad.svg', caption: 'Architectural Pavilions & Battle Scenes', detail: 'Stylized Rajasthani forts, Rajput warriors, camels, and galloping cavalry in mineral pigments.' },
    ],
    didYouKnow: [
      'A Phad is considered an alive, holy shrine; when it becomes old or worn, it is ritually retired by submerging it in the holy waters of Lake Pushkar.',
      'For centuries, the Joshi family kept the technique strictly confidential, never teaching daughters for fear they would share the secrets with their in-laws.',
      'Pabuji Ki Phad scrolls can measure over 30 feet in length and contain hundreds of individual painted human and animal figures.'
    ],
    relatedArtIds: ['cheriyal', 'rajasthani-miniature', 'pattachitra']
  },

  // 8. Rajasthani Miniature Painting
  {
    id: 'rajasthani-miniature',
    name: 'Rajasthani Miniature Painting',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    category: 'Miniature Painting',
    originLocation: 'Jaipur, Mewar (Udaipur), Kishangarh & Marwar',
    period: '16th – 18th Century CE (Rajput Royal Courts)',
    heroImage: '/art/jaipur.svg',
    shortDescription: 'Regal court paintings with glowing gold leaf, intricate architectural vistas, and refined portraiture patronized by Rajput rulers.',
    originAndHistory: 'Flourished across Rajput principalities (Mewar, Dhundhar/Jaipur, Marwar, Kishangarh, Bundi). Artists fused indigenous Indian manuscript traditions with Persian and Mughal court precision in royal ateliers known as Suratkhana.',
    culturalSignificance: 'Celebrated classical literary and devotional masterpieces: Ragamala (musical notes personified as gods), Rasikapriya, and the Gita Govinda. The famous Radha of Kishangarh (Bani Thani) represents the ideal of Indian feminine beauty.',
    artisticCharacteristics: 'Luminous colors made from ground semi-precious stones, microscopic detail, fine wasli borders with golden floral scrollwork, dramatic lotus-petal eyes, and architectural marble pavilions.',
    materialsUsed: 'Handmade wasli paper (multiple sheets layered and burnished). Brushes made from squirrel hair. Pure gold and silver foil (varaq), ground lapis lazuli, cinnabar vermilion, malachite green, and conch shell.',
    paintingTechniques: 'Wasli paper is burnished with agate until it reflects like ivory. Fine preparatory drawing is done with a burnt twig. Ground minerals are layered, burnished with shell, and outlined with single-hair squirrel brushes.',
    famousThemes: 'Ragamala musical melodies, Rasikapriya poetry, royal court darbars, tiger hunts, and Krishna-Radha romance.',
    importantArtists: 'Sahibram, Sahibdin, Nihal Chand (master of Kishangarh Bani Thani), and Manaku.',
    gallery: [
      { url: '/art/jaipur.svg', caption: 'Jaipur Court Miniature Pavilion', detail: 'Royal marble arch with cusped Rajput pavilions, Krishna-Radha romance, and golden borders.' },
      { url: '/art/udaipur.svg', caption: 'Mewar School Royal Cavalcade', detail: 'Vibrant vermilion and saffron backgrounds depicting royal Mewar processions and lake palaces.' },
      { url: '/art/jaipur.svg', caption: 'Bani Thani (The Indian Mona Lisa)', detail: 'Exaggerated arched eyebrows, sharp nose, and transparent odhani of the Kishangarh school.' },
      { url: '/art/udaipur.svg', caption: 'Ragamala Musical Illustrated Folio', detail: 'Classical melodies visualised as divine personifications in royal gardens.' },
    ],
    didYouKnow: [
      'Paintbrushes for fine miniature work were made from the hairs plucked gently from the tails of mountain squirrels.',
      'The famous Bani Thani painting of Kishangarh was declared India’s national postal stamp in 1973.',
      'Colors like vermilion and lapis lazuli never fade because they are pure ground mineral stones rather than synthetic chemical dyes.'
    ],
    relatedArtIds: ['kangra', 'phad', 'mysore']
  },

  // 9. Kangra Miniature Painting
  {
    id: 'kangra',
    name: 'Kangra Miniature Painting',
    stateId: 'himachal-pradesh',
    stateName: 'Himachal Pradesh',
    category: 'Miniature Painting',
    originLocation: 'Kangra Valley & Guler',
    period: 'Mid-18th – 19th Century CE (Maharaja Sansar Chand)',
    heroImage: '/art/kangra.svg',
    shortDescription: 'The pinnacle of Pahari hill painting, celebrated for lyricism, flowering landscapes, delicate female grace, and the divine romance of Radha-Krishna.',
    originAndHistory: 'Developed when master painters migrating from Mughal courts found sanctuary in the Himalayan foothills of Guler and Kangra under the patronage of Maharaja Sansar Chand (1775–1823), infusing the hills with romantic Vaishnava bhakti poetry.',
    culturalSignificance: 'Regarded as one of the world\'s most refined court painting traditions. Every landscape detail—blooming kadamba trees, meandering streams, lightning flashes in rain clouds—mirrors human emotion (bhava).',
    artisticCharacteristics: 'Soft pastoral colors, rhythmic fluid lines, naturalistic Himalayan topography, tender feminine facial profiles, and nocturnal groves filled with blossoming white blossoms.',
    materialsUsed: 'Sialkoti handmade paper. Brushes crafted from the hair of squirrel tails. Colors prepared from ground pearls, lapis lazuli, natural ochres, and pure gold illumination.',
    paintingTechniques: 'Sketches are made on paper, primed with white slip, painted with translucent mineral watercolors, burnished with polished agate stones, and illuminated with microscopic gold detailing.',
    famousThemes: 'Jayadeva’s Gita Govinda, Bhagavata Purana, Nala Damayanti narrative folios, and Baramasa (Songs of the Twelve Seasons).',
    importantArtists: 'Nainsukh of Guler, his brother Manaku, master painters Fattu and Purkhu.',
    gallery: [
      { url: '/art/kangra.svg', caption: 'Radha & Krishna in Pahari Grove', detail: 'The divine couple sheltered beneath a golden pavilion surrounded by rolling green Himalayan hills.' },
      { url: '/art/kangra.svg', caption: 'Gita Govinda Lyrical Poetry Folio', detail: 'Meandering river Yamuna, blooming kadamba trees, and pastel evening skies in Kangra Valley.' },
      { url: '/art/kangra.svg', caption: 'Abhisarika Nayika (Heroine in Night Storm)', detail: 'The brave heroine braving serpents and rain to meet her beloved, reflecting human devotion.' },
      { url: '/art/kangra.svg', caption: 'Baramasa: Song of the Seasons', detail: 'Illustrations capturing the twelve months of the Indian calendar through weather and romance.' },
    ],
    didYouKnow: [
      'Maharaja Sansar Chand was so passionate about painting that he commissioned thousands of folios illustrating Jayadeva’s poems.',
      'Nainsukh is considered by world art historians to be one of the greatest individual artists in Indian history.',
      'Unlike Mughal miniatures which focused on imperial politics, Kangra miniatures focused on landscape, poetry, and divine love.'
    ],
    relatedArtIds: ['rajasthani-miniature', 'mysore', 'tanjore']
  },

  // 10. Mysore Painting
  {
    id: 'mysore',
    name: 'Mysore Painting',
    stateId: 'karnataka',
    stateName: 'Karnataka',
    category: 'Classical Art',
    originLocation: 'Mysuru (Mysore)',
    period: '14th – 19th Century CE (Wodeyar Dynasty)',
    heroImage: '/art/mysore.svg',
    shortDescription: 'Elegantly muted sacred art known for delicate brushwork, graceful expressions, and delicate low-relief gold foil without heavy gemstone inlay.',
    originAndHistory: 'Emerged from the Vijayanagara tradition following the fall of Hampi in 1565. Revitalized under the Wodeyar dynasty of Mysore, especially Maharaja Mummadi Krishnaraja Wodeyar III (1794–1868), who patronized numerous scriptural illustrated manuscripts.',
    culturalSignificance: 'Focuses on spiritual serenity (shanta rasa) and anatomical grace. Unlike Tanjore painting, the gesso relief is kept subtle and low, emphasizing nuanced brushwork and expressive facial features.',
    artisticCharacteristics: 'Delicate graceful line-work, muted pastel color palettes, subtle low-relief gesso work on jewelry, and serene, compassionate deity expressions.',
    materialsUsed: 'Cartridge paper mounted on cloth or wood. Makki paste (zinc oxide, white lead, and Arabic gum) for low relief. Ultra-thin pure gold foil and subdued vegetable/mineral watercolors.',
    paintingTechniques: 'The base is prepared with paper mounted on wood. Makki paste is applied with a brush for delicate low-relief jewelry. Thin gold foil is laid over the relief, followed by painstaking watercolor shading for faces.',
    famousThemes: 'Goddess Saraswati with Veena, Chamundeshwari, Rajarajeshwari, Shiva Tandava, and Sritattvanidhi illustrated encyclopedias.',
    importantArtists: 'K. Venkatappa, B. Sundaram, and traditional Chitragara artisan families.',
    gallery: [
      { url: '/art/mysore.svg', caption: 'Goddess Saraswati Playing the Veena', detail: 'Seated on a white lotus with classical Veena, serene halo, and subtle Mysore gold gesso jewelry.' },
      { url: '/art/mysore.svg', caption: 'Chamundeshwari Slaying Mahishasura', detail: 'The patron goddess of Mysore seated victorious with divine weapons and sacred lion.' },
      { url: '/art/mysore.svg', caption: 'Sritattvanidhi Manuscript Illuminations', detail: 'Encyclopedic treatise on sacred iconography and classical ragas commissioned by the Wodeyars.' },
      { url: '/art/mysore.svg', caption: 'Cusped Mysore Palace Arch & Swan', detail: 'Delicate royal architecture framing serene devotional figures in soft pastel colors.' },
    ],
    didYouKnow: [
      'Mysore painting uses much thinner gold foil than Tanjore painting, focusing more on delicate brush shading than heavy raised relief.',
      'Maharaja Mummadi Krishnaraja Wodeyar III wrote the nine-volume illustrated treatise Sritattvanidhi containing over 1,500 miniature illustrations.',
      'The white relief paste called makki was traditionally prepared using zinc oxide mixed with edible gum arabic.'
    ],
    relatedArtIds: ['tanjore', 'kangra', 'rajasthani-miniature']
  },

  // 11. Rogan Art
  {
    id: 'rogan',
    name: 'Rogan Art',
    stateId: 'gujarat',
    stateName: 'Gujarat',
    category: 'Textile Art',
    originLocation: 'Nirona Village, Kutch',
    period: 'Over 300 Years of Family Lineage',
    heroImage: '/art/rogan.svg',
    shortDescription: 'A rare and hypnotic art where boiled castor oil paste is sculpted into colorful threads with a metal stylus without ever touching the fabric directly.',
    originAndHistory: 'Originated in Persia and brought to the arid Kutch region of Gujarat over 300 years ago. Preserved exclusively by the Khatri family of Nirona village, who rescued it from near extinction through sheer dedication.',
    culturalSignificance: 'Presented as state gifts to world leaders, Rogan art captures the vibrant botanical spirit of Gujarat. The symmetrical "Tree of Life" motif is created by painting one half of the fabric and folding it to produce an exact mirror impression.',
    artisticCharacteristics: 'Intricate thread-like elastic paint lines, kaleidoscopic geometric symmetry, vibrant yellow, orange, and white pigments against deep navy or black fabric grounds.',
    materialsUsed: 'Castor oil boiled continuously for two days until it transforms into a thick, elastic gel (rogan). Mixed with mineral and stone pigments, warmed in the palm, and guided using a 6-inch blunt iron stylus onto dark silk or cotton.',
    paintingTechniques: 'The artisan places a small lump of colored castor paste in his palm, works it with the iron stylus until it strings into fine threads, and spins it onto fabric in mid-air. The cloth is folded in half to create a perfect mirror image.',
    famousThemes: 'The Rogan Tree of Life, peacock rosettes, floral bridal lehengas, and wall hangings.',
    importantArtists: 'Padma Shri Abdul Gafur Khatri, Sumar Khatri, and the Khatri artisan lineage of Nirona.',
    gallery: [
      { url: '/art/rogan.svg', caption: 'The Symmetrical Rogan Tree of Life', detail: 'Hypnotic castor-oil thread motifs on dark navy fabric with radiating floral rosettes.' },
      { url: '/art/rogan.svg', caption: 'The Mid-Air Stylus Technique', detail: 'Artisan drawing intricate elastic paint threads without ever touching the stylus to the fabric.' },
      { url: '/art/rogan.svg', caption: 'Mirror Impression Folding', detail: 'Folding the cloth in half while the castor gel is wet to imprint an exact symmetrical duplicate.' },
      { url: '/art/rogan.svg', caption: 'Traditional Kutch Bridal Panels', detail: 'Intricate botanical borders created for bridal ghagras in Nirona village.' },
    ],
    didYouKnow: [
      'Prime Minister Narendra Modi presented a Rogan Tree of Life painting to US President Barack Obama during his state visit.',
      'Only one family in the entire world—the Khatri family of Nirona—knows how to brew the castor oil paste for Rogan art.',
      'The word "Rogan" comes from Persian, meaning oil or varnish.'
    ],
    relatedArtIds: ['kalamkari', 'warli', 'cheriyal']
  },

  // 12. Cheriyal Scroll Painting
  {
    id: 'cheriyal',
    name: 'Cheriyal Scroll Painting',
    stateId: 'telangana',
    stateName: 'Telangana',
    category: 'Folk Art',
    originLocation: 'Cheriyal Village, Siddipet',
    period: '15th – 17th Century CE (Kakatiya & Golconda era)',
    heroImage: '/art/cheriyal.svg',
    shortDescription: 'Vibrant narrative scroll paintings extending up to 40 feet on fiery crimson backgrounds, used by wandering bards to tell epic folklore.',
    originAndHistory: 'A stylized version of Nakashi art indigenous to Cheriyal village in Telangana. Traditionally commissioned by the itinerant Kaki Padigela and community bards, who unrolled continuous scrolls accompanied by music, dance, and dolls.',
    culturalSignificance: 'Functions as an ancient graphic novel of rural Telangana, illustrating community legends, epics like Mahabharata, and caste histories in dynamic visual panels.',
    artisticCharacteristics: 'Fiery crimson-red backgrounds, oversized expressive almond eyes, prominent noses, dynamic action stances, and decorative leaf borders separating narrative episodes.',
    materialsUsed: 'Khadi cloth treated with tamarind seed paste, white mud (sudha mati), and rice starch. Natural mineral colors: geru (crimson), ramraj (yellow), lamp soot, and sea shell white, painted with squirrel hair brushes.',
    paintingTechniques: 'Khadi canvas is layered with tamarind gum and chalk. Outlines are sketched in light colors, followed by solid crimson background fill. Figures are outlined in bold black calligraphic strokes.',
    famousThemes: 'Markandeya Purana, Krishna Leela continuous scrolls, Mahabharata, and Cheriyal sawdust & tamarind seed folk masks.',
    importantArtists: 'D. Vaikuntam Nakash (National Awardee), D. Dhanalaxmi, and the Nakashi artisan lineage of Cheriyal.',
    gallery: [
      { url: '/art/cheriyal.svg', caption: 'Cheriyal Narrative Scroll Panel', detail: 'Folk hero with giant expressive eyes and royal blue turban framed against fiery crimson red.' },
      { url: '/art/cheriyal.svg', caption: 'Village Storytelling Performance', detail: 'Itinerant bards unrolling the forty-foot cloth scroll accompanied by folk singing and puppetry.' },
      { url: '/art/cheriyal.svg', caption: 'Traditional Nakashi Masks', detail: 'Lightweight folk masks molded from tamarind seed paste, sawdust, and natural pigments.' },
      { url: '/art/cheriyal.svg', caption: 'Episodes from Rural Epics', detail: 'Panel-by-panel graphic narrative of caste legends, village celebrations, and divine deeds.' },
    ],
    didYouKnow: [
      'A complete traditional Cheriyal scroll could take over a year to paint and stretched up to 40 to 50 feet in length.',
      'The red background is intentionally painted using natural "geru" (red earth) to capture the fiery emotion and energy of village storytelling.',
      'Today, Cheriyal artists also make miniature single-panel paintings and famous sawdust masks so the art survives modern times.'
    ],
    relatedArtIds: ['phad', 'pattachitra', 'kalamkari']
  },

  // 13. Kalighat Painting
  {
    id: 'kalighat',
    name: 'Kalighat Painting',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    category: 'Folk Art',
    originLocation: 'Kalighat, Kolkata',
    period: '19th Century CE (Colonial Calcutta)',
    heroImage: '/art/kalighat.svg',
    shortDescription: 'Dynamic urban folk art born around the Kalighat temple, famous for bold sweeping brush lines, shaded contours, and witty social satire.',
    originAndHistory: 'Developed in the 19th century when rural scroll painters (patuas) migrated to colonial Calcutta and set up stalls outside the Kalighat Kali temple. They sold quick, cheap, mass-produced watercolor prints to temple pilgrims and urban travelers.',
    culturalSignificance: 'Kalighat art was both sacred and secular. While it depicted Goddess Kali and Hindu deities, it achieved legendary status for satirizing the decadent Westernized "Babu" culture of 19th-century Calcutta.',
    artisticCharacteristics: 'Minimalist backgrounds, bold fluid single-stroke calligraphic brush contours, sweeping graduated washes for shading, voluptuous rounded figures, and wry humor.',
    materialsUsed: 'Cheap mill-made paper, animal glue, and organic watercolors. Broad flat squirrel-hair and goat-hair brushes designed for rapid, fluid application.',
    paintingTechniques: 'The master artist sketched rapid fluid brush outlines with Chinese ink or lampblack, followed by a wet wash along the contours that gave rounded figures three-dimensional volume.',
    famousThemes: 'Goddess Kali, Cat with a Prawn (satirizing hypocritical ascetics), Babu combing his hair, and Ramayana folios.',
    importantArtists: 'Traditional 19th-century patuas (Nibarun Ghosh, Kali Charan Ghosh) and modern artists inspired by it like Jamini Roy.',
    gallery: [
      { url: '/art/kalighat.svg', caption: 'Sacred Cat with Prawn (Bilai Chingri)', detail: 'Famous satirical motif mocking hypocritical holy men feasting on freshwater prawns.' },
      { url: '/art/kalighat.svg', caption: 'Goddess Kali of Kalighat', detail: 'Fierce depiction of Mother Kali with protruding red tongue, garland of skulls, and bold brush lines.' },
      { url: '/art/kalighat.svg', caption: 'Babu Culture of 19th-Century Calcutta', detail: 'Satirizing wealthy dandies with pleated dhotis, curled hair, and musical instruments.' },
      { url: '/art/kalighat.svg', caption: 'The Voluptuous Patua Style', detail: 'Mastery of continuous fluid contour brushwork that inspired modern master Jamini Roy.' },
    ],
    didYouKnow: [
      'Kalighat paintings were the world’s earliest urban pop art, sold outside temples for mere annas (pennies) to common pilgrims.',
      'Modern master Jamini Roy rejected Western academic oil painting to model his world-famous modernist style directly on Kalighat lines.',
      'Many famous Kalighat paintings are preserved in the Victoria and Albert Museum in London, collected by colonial travelers in the 1800s.'
    ],
    relatedArtIds: ['bengal-school', 'pattachitra', 'madhubani']
  },

  // 14. Bengal School of Art
  {
    id: 'bengal-school',
    name: 'Bengal School of Art',
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    category: 'Classical Art',
    originLocation: 'Kolkata & Shantiniketan',
    period: 'Late 19th – Early 20th Century CE',
    heroImage: '/art/bengal.svg',
    shortDescription: 'A revolutionary nationalist renaissance blending classical Indian frescoes, folklore, and Japanese wash techniques to define modern Indian art.',
    originAndHistory: 'Founded in early 20th-century Calcutta by Abanindranath Tagore and E. B. Havell as a conscious resistance against British colonial academic realism. Coincided with the Swadeshi movement, seeking inspiration in Ajanta murals and Mughal miniatures.',
    culturalSignificance: 'Forged the first modern pan-Indian visual identity, celebrating national spiritual heritage, folklore, and everyday Indian life with lyrical poetic sensibility.',
    artisticCharacteristics: 'Soft atmospheric watercolor wash, hazy edges, contemplative expressions, muted earthy tones, and delicate Indian spiritual iconography.',
    materialsUsed: 'Fine handmade paper, layered watercolor washes, Chinese ink, and fine camel-hair brushes.',
    paintingTechniques: 'The famous "wash technique" developed with Japanese masters Kakuzo Okakura and Yokoyama Taikan: paper was soaked in water, painted with light watercolor, washed again, and repeated multiple times.',
    famousThemes: 'Bharat Mata (1905) by Abanindranath Tagore, Journey’s End, Buddha and Sujata, and Santhal village life.',
    importantArtists: 'Abanindranath Tagore, Nandalal Bose, Asit Kumar Haldar, Jamini Roy, and Gaganendranath Tagore.',
    gallery: [
      { url: '/art/bengal.svg', caption: 'Bharat Mata (Abanindranath Tagore, 1905)', detail: 'Four-armed maternal icon holding sacred scriptures, paddy sheaf, white cloth, and prayer beads.' },
      { url: '/art/bengal.svg', caption: 'Translucent Japanese-Indian Wash Technique', detail: 'Atmospheric layers of watercolor soaked and washed to create dream-like spiritual radiance.' },
      { url: '/art/bengal.svg', caption: 'Nandalal Bose Shantiniketan Frescoes', detail: 'Murals celebrating village craftspeople, farmers, and Indian constitutional heritage.' },
      { url: '/art/bengal.svg', caption: 'Nationalist Renaissance Awakening', detail: 'Reclaiming indigenous Indian aesthetics away from European Victorian academic realism.' },
    ],
    didYouKnow: [
      'Nandalal Bose, a leading pioneer of the Bengal School, was commissioned to illustrate the original calligraphed Constitution of India.',
      'Abanindranath Tagore was the nephew of Nobel Laureate Rabindranath Tagore.',
      'The iconic Bharat Mata painting was created during the 1905 anti-partition Swadeshi protests in Bengal.'
    ],
    relatedArtIds: ['kalighat', 'ajanta', 'kangra']
  },

  // 15. Gond Art
  {
    id: 'gond',
    name: 'Gond Art',
    stateId: 'madhya-pradesh',
    stateName: 'Madhya Pradesh',
    category: 'Tribal Art',
    originLocation: 'Mandla, Dindori & Betul Districts',
    period: 'Ancient Tribal Roots / Modern Paper Era (1980s)',
    heroImage: '/art/gond.svg',
    shortDescription: 'Mesmerizing dot-and-line tribal paintings of animals, sacred Mahua trees, and nature spirits from the Gond Pardhan community.',
    originAndHistory: 'Practiced by the Gond Adivasi tribe of central India, one of the largest indigenous communities in the country. Traditionally, women decorated house mud walls (digna). In the 1980s, young Gond artist Jangarh Singh Shyam was discovered in Patangarh village, pioneering modern Gond art on paper and canvas.',
    culturalSignificance: 'Gond philosophy believes that viewing a good image brings good fortune (bhittichitra). Everything in nature—animals, trees, hills, rivers—is inhabited by a sacred spirit (jeev).',
    artisticCharacteristics: 'Intricate fill patterns consisting of rhythmic dots, dashes, fish scales, and fine parallel lines that create movement and texture within bold animal and tree outlines.',
    materialsUsed: 'Traditionally charcoal, colored soil (chuna, ramraj, geru), and cow dung. Contemporary Gond artists use fine acrylic paints and archival paper.',
    paintingTechniques: 'The artist sketches the main silhouette of a deer, bird, or tree, and then fills the interior with an individual signature rhythm of microscopic dots, dashes, or waves.',
    famousThemes: 'Sacred Mahua and Banyan trees, spotted deer (Chital), birds, peacocks, flying snakes, and tribal village folklore.',
    importantArtists: 'Jangarh Singh Shyam (pioneer of the Jangarh Kalam school), Venkat Raman Singh Shyam, Bhajju Shyam (author of The London Jungle Book), and Durga Bai Vyam.',
    gallery: [
      { url: '/art/gond.svg', caption: 'Gond Barasingha & Sacred Mahua Tree', detail: 'The graceful spotted deer beneath a curving tree filled with signature rhythmic dots and dashes.' },
      { url: '/art/gond.svg', caption: 'Jangarh Kalam Contemporary Mastery', detail: 'Vibrant acrylics on canvas showcasing the spiritual interconnectedness of all living beings.' },
      { url: '/art/gond.svg', caption: 'The Tree of Life & Forest Spirits', detail: 'Birds and woodland creatures sheltered within the cosmic branches of Central India.' },
      { url: '/art/gond.svg', caption: 'Traditional Digna Geometric Patterns', detail: 'Auspicious geometric designs traditionally painted by Gond women on house mud floors.' },
    ],
    didYouKnow: [
      'Every master Gond artist develops their own unique signature texture pattern (e.g. Jangarh used dots, Bhajju uses fish scales, Durga Bai uses waves).',
      'Gond artist Bhajju Shyam wrote and illustrated the celebrated book "The London Jungle Book" depicting London through Gond tribal art.',
      'Gonds believe that trees are the central pillars supporting heaven and earth.'
    ],
    relatedArtIds: ['warli', 'bhimbetka', 'madhubani']
  },

  // 16. Bhimbetka Rock Art
  {
    id: 'bhimbetka',
    name: 'Bhimbetka Rock Art',
    stateId: 'madhya-pradesh',
    stateName: 'Madhya Pradesh',
    category: 'Mural Art',
    originLocation: 'Bhimbetka Caves, Raisen District',
    period: 'Upper Paleolithic to Medieval (10,000 BCE – 1,000 CE)',
    heroImage: '/art/bhimbetka.svg',
    shortDescription: 'Prehistoric rock shelter cave paintings in red ochre and kaolin white depicting mammoth bisons, early human hunters, and ancient rituals.',
    originAndHistory: 'Discovered in 1957 by renowned Indian archaeologist Dr. V. S. Wakankar. The 750 rock shelters in the Vindhyan sandstone cliffs preserve continuous human creative artistic traces spanning thirty thousand years.',
    culturalSignificance: 'A UNESCO World Heritage site representing humanity’s earliest visual expressions in South Asia. Shows the birth of human creativity, hunting culture, communal dances, and early animal domestication.',
    artisticCharacteristics: 'Linear stick-figure hunters with bows and spears, monumental silhouettes of giant bisons, rhinoceroses, and wild boars, painted in dynamic motion.',
    materialsUsed: 'Natural red ochre (hematite / geru), manganese black, and kaolin white, mixed with water, animal fat, and tree sap that bonded chemically into the sandstone rock.',
    paintingTechniques: 'Mineral stones were crushed and mixed with animal fat. Painted on rock shelter ceilings and walls with fingers, fibrous twigs, or animal hair brushes.',
    famousThemes: 'The "Zoo Rock" with giant wildlife, hunting scenes, riders on horses and elephants, community ritual dances, and animal combats.',
    importantArtists: 'Anonymous prehistoric hunter-gatherers and ancestral communities over multiple millennia.',
    gallery: [
      { url: '/art/bhimbetka.svg', caption: 'Prehistoric Giant Boar & Bison', detail: 'The monumental silhouette of an ancient wild beast confronting stick-figure hunters in Auditorium Cave.' },
      { url: '/art/bhimbetka.svg', caption: 'Hunters with Bows and Spears', detail: 'Dynamic stick-figure hunters in white kaolin pigment capturing the vitality of Paleolithic life.' },
      { url: '/art/bhimbetka.svg', caption: 'The Iconic Zoo Rock Shelter', detail: 'Over 40 species of wildlife including elephants, tigers, and deers painted across successive eras.' },
      { url: '/art/bhimbetka.svg', caption: 'Vindhyan Sandstone Cave Shelters', detail: 'Ancient natural rock formations near Bhopal that sheltered early humans for 30,000 years.' },
    ],
    didYouKnow: [
      'The paintings at Bhimbetka have survived for over 10,000 years because the minerals reacted chemically with the sandstone surface to form a permanent natural glaze.',
      'Dr. V. S. Wakankar discovered the caves accidentally from a train window when he noticed peculiar rock formations resembling rock shelters he had studied in Europe.',
      'The name Bhimbetka is derived from "Bhimbaitka," meaning the sitting place of Bhima from the Mahabharata.'
    ],
    relatedArtIds: ['warli', 'gond', 'ajanta']
  },

  // 17. Kerala Mural Painting
  {
    id: 'kerala-mural',
    name: 'Kerala Mural Painting',
    stateId: 'kerala',
    stateName: 'Kerala',
    category: 'Mural Art',
    originLocation: 'Mattancherry Palace (Kochi) & Padmanabhapuram',
    period: '9th – 18th Century CE (Chera & Travancore Periods)',
    heroImage: '/art/kerala-mural.svg',
    shortDescription: 'Glorious Panchavarna temple murals in five sacred natural colors depicting deities with Kathakali-style crowns and sweeping lotus eyes.',
    originAndHistory: 'Emerged as an integral part of Kerala’s temple and palace architecture between the 9th and 18th centuries CE. Spectacular examples survive at the Mattancherry Dutch Palace in Kochi and Padmanabhapuram Palace.',
    culturalSignificance: 'Deeply intertwined with Kerala’s temple rituals and Sanskrit theater. The deities share the dramatic mudras, elaborate makeup, and imposing headgear (kireedam) of Kathakali and Koodiyattam classical theater.',
    artisticCharacteristics: 'Panchavarna color system (five sacred natural hues), rounded voluptuous divine figures, fish-shaped eyes extending to the ears, high ornamental crowns, and absence of realistic shadows.',
    materialsUsed: 'Panchavarna pigments: red (laterite stone), yellow (yellow ochre), green (eroor plant leaf juice), black (oil lamp soot), and white (lime). Applied on coconut-treated lime plaster walls with bamboo or grass brushes.',
    paintingTechniques: 'The wall is treated with lime plaster seasoned with tender coconut water. Outlines are sketched in yellow, reinforced in red, filled with mineral colors, and outlined with bold black calligraphic strokes.',
    famousThemes: 'Anantasayanam (Lord Vishnu reclining on serpent Adishesha), Shiva Tandava, Gajasamhara, and Krishna playing the flute.',
    importantArtists: 'Traditional royal sthapathis, Mammiyoor Krishnankutty Nair (pioneer of the Guruvayur Devaswom Institute of Mural Painting).',
    gallery: [
      { url: '/art/kerala-mural.svg', caption: 'Panchavarna Divine Headgear & Eyes', detail: 'Kathakali-style ornate kireedam crown and dramatic eyes extending to the ears in sacred green.' },
      { url: '/art/kerala-mural.svg', caption: 'Lord Shiva Tandava at Mattancherry', detail: 'The cosmic dance of Lord Shiva with multiple arms and celestial drummer attendants.' },
      { url: '/art/kerala-mural.svg', caption: 'Anantasayanam Vishnu at Padmanabhaswamy', detail: 'Lord Vishnu serenely reclining on the coiled cosmic serpent Adishesha.' },
      { url: '/art/kerala-mural.svg', caption: 'The Five Sacred Natural Colors (Panchavarna)', detail: 'Red, yellow, green, black, and white prepared from laterite stone, ochres, and leaf juices.' },
    ],
    didYouKnow: [
      'Kerala murals use strictly five colors known as the Panchavarna, representing the five sacred elements of earth, water, fire, air, and ether.',
      'Plaster for Kerala murals was traditionally cured with tender coconut water and banana plant sap for months to make it fungus-proof.',
      'The murals at Mattancherry Palace in Kochi cover over 300 square meters of temple and bedchamber walls.'
    ],
    relatedArtIds: ['tanjore', 'ajanta', 'pattachitra']
  }
];
