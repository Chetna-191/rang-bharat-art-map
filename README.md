# 🎨 Rang Bharat: An Interactive Art Map of India

**"A journey through the colours of Indian art"**

A beautiful, responsive, single-page web application built for an **Interactive Art Map college assignment**. It maps the geographic spread and influence of 18 key Indian art traditions across historical eras, featuring real artwork images, student-friendly descriptions, historical patron contexts, materials, and artists.

---

## 🏛️ Project Features

- **Interactive Leaflet Map**: Large geographical map with custom 22K gold pins (`❂`) and glowing lavender halos.
- **CartoDB Positron Cartography**: Soft, light map tile design that seamlessly matches the royal lavender & gold aesthetic.
- **Slide-out Detail Side Panel / Mobile Bottom Sheet**:
  - Place name, state, and cultural category.
  - Multi-image carousel with previous/next controls, dot indicators, and image credits.
  - Student-friendly description (3–5 factual sentences).
  - Historical context, royal patrons, and evolution (3–5 factual sentences).
  - Master artists & hereditary communities.
  - Famous artworks & key motifs.
  - Traditional materials & techniques.
  - "Did You Know?" curiosity trivia box.
- **Dynamic Category Filtering**: Instant filtering by *All, Cave & Ancient, Classical & Court, Folk & Tribal, Textile Art,* and *Modern & Revival*.
- **Instant Search Bar**: Live filtering by location, state, art style, artist, or materials with a one-click clear button.
- **Art Styles Gallery Grid**: Cards for all 18 locations with hover lift; clicking any card flies the map directly to that location.
- **Interactive Era Timeline**: Scrollable mini-timeline from Prehistoric (10,000 BCE) to Modern Revival.
- **"Did You Know?" Section**: 4 captivating facts in gold-bordered glassmorphic cards.
- **Image Error Fallback**: Graceful lavender-gold gradient card if any network or image fails.
- **Accessible & Responsive**: Keyboard navigable (Escape key closes panel), mobile-optimized bottom sheet, and floating gold "Back to top" button.

---

## 🚀 How to Run the Project

This project uses **Plain HTML, CSS, and Vanilla JavaScript with ZERO build step required**.

### Option 1: Open Directly in Any Browser (Easiest)
Simply double-click `index.html` or right-click `index.html` → **Open with** → **Google Chrome** (or Edge/Firefox/Safari).
Everything works directly from the local filesystem!

### Option 2: Run with VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Run with Vite / Local HTTP Server
If you prefer running a local development server:
```bash
# Using npx serve
npx serve .

# Or using Vite (if Node.js is installed)
npm run dev
```
Open **`http://localhost:3000`** in your browser.

---

## 📁 How to Add or Edit a Location in `data.js`

All location data is stored in **`data.js`** inside the `ART_LOCATIONS` array. 

To add a new art tradition, open `data.js` and add an object following this structure:

```javascript
{
  id: 'unique-id',                          // e.g. 'patachitra-bengal'
  name: 'City / Region Name',               // e.g. 'Pingla, Paschim Medinipur'
  state: 'State Name',                      // e.g. 'West Bengal'
  coordinates: [22.2850, 87.5850],          // [Latitude, Longitude]
  artStyle: 'Style Name',                   // e.g. 'Bengal Patachitra'
  period: 'Time Period',                    // e.g. '13th Century CE – Present'
  eraCategory: 'Folk & Tribal',             // One of TIMELINE_ERAS
  category: 'Folk and Tribal',              // One of CATEGORIES
  categoryColor: '#9B7EDE',                 // Hex color for the pin
  description: '3-5 sentences describing the visual style and themes.',
  history: '3-5 sentences explaining origins, royal patrons, and evolution.',
  artists: 'Master artists or hereditary lineages.',
  artworks: 'Famous masterworks or recurring motifs.',
  materials: 'Traditional pigments, paper/cloth, and brushes used.',
  funFact: 'An interesting piece of trivia for the student.',
  images: [
    {
      url: 'images/your-image.jpg',         // Local path or URL
      caption: 'Descriptive artwork caption',
      credit: 'Wikimedia Commons • CC BY-SA 4.0'
    }
  ]
}
```

Save the file and refresh your browser—the new marker, gallery card, and timeline connections will appear automatically!

---

## 🎨 Color Palette & Design Tokens

- **Lavender Shades**: `#F5F0FF` (lightest), `#E6E0F8`, `#C9B8F0`, `#9B7EDE`, `#4B2E83` (deep purple for text).
- **Gold Shades**: `#D4AF37` (22k Antique Gold), `#F0D77B` (light gold), `#B8860B` (deep gold).
- **Typography**: *"Playfair Display"* (headings), *"Poppins"* (body text).
- **Textures**: Traditional Indian Jaali and floral mandala overlays.

---

## 📜 Credits & Licensing

- **Course**: Indian Art History & Cultural Cartography (College Assignment CO1)
- **Map Library**: [Leaflet.js](https://leafletjs.com/) (OpenStreetMap contributors & CARTO)
- **Imagery**: Freely licensed educational photos via [Wikimedia Commons](https://commons.wikimedia.org)
- **Created by**: [Student / Team Name]
