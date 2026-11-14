/**
 * Rang Bharat: An Interactive Art Map of India
 * Client-Side JavaScript Application
 * Interactivity: Leaflet Map, Side Panel / Bottom Sheet, Image Carousel,
 * Category Filters, Search Autocomplete, Gallery Grid, and Timeline Strip.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure data is loaded from window or global scope
  const locations = (typeof window !== 'undefined' && window.ART_LOCATIONS) || (typeof ART_LOCATIONS !== 'undefined' ? ART_LOCATIONS : []);
  const eras = (typeof window !== 'undefined' && window.TIMELINE_ERAS) || (typeof TIMELINE_ERAS !== 'undefined' ? TIMELINE_ERAS : []);
  const facts = (typeof window !== 'undefined' && window.DID_YOU_KNOW_FACTS) || (typeof DID_YOU_KNOW_FACTS !== 'undefined' ? DID_YOU_KNOW_FACTS : []);
  const categories = (typeof window !== 'undefined' && window.CATEGORIES) || (typeof CATEGORIES !== 'undefined' ? CATEGORIES : []);

  if (!locations.length) {
    console.error('Rang Bharat: No locations data found in data.js');
    return;
  }

  // --- State Variables ---
  let map = null;
  let markersLayer = null;
  let activeMarkerId = null;
  let currentCategory = 'all';
  let searchQuery = '';
  const markerMap = new Map();

  // Carousel State for active location
  let currentCarouselIndex = 0;
  let activeLocationObj = null;

  // DOM Elements
  const mapElement = document.getElementById('map');
  const sidePanel = document.getElementById('detailSidePanel');
  const panelCloseBtn = document.getElementById('panelCloseBtn');
  const panelContent = document.getElementById('panelContent');
  const searchInput = document.getElementById('mapSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const filterPillsContainer = document.getElementById('categoryFilterPills');
  const galleryGrid = document.getElementById('galleryGrid');
  const timelineScroll = document.getElementById('timelineScroll');
  const factsGrid = document.getElementById('factsGrid');
  const resetMapBtn = document.getElementById('resetMapBtn');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const navbar = document.getElementById('mainNavbar');

  // Center of India
  const INDIA_CENTER = [22.8, 79.5];
  const INDIA_ZOOM = 5;

  // =========================================================================
  // 1. Initialize Map
  // =========================================================================
  function initMap() {
    if (!mapElement) return;

    if (typeof L === 'undefined') {
      console.warn('Rang Bharat: Leaflet library is still loading, retrying in 200ms...');
      setTimeout(initMap, 200);
      return;
    }

    map = L.map('map', {
      center: INDIA_CENTER,
      zoom: INDIA_ZOOM,
      minZoom: 4,
      maxZoom: 13,
      zoomControl: true,
      attributionControl: true
    });

    // Soft Light Tile Layer: CartoDB Positron
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    markersLayer = L.layerGroup().addTo(map);

    renderMarkers();

    // Ensure map tiles calculate correct geometry after render
    setTimeout(() => {
      if (map) map.invalidateSize();
    }, 300);
  }

  // =========================================================================
  // 2. Render Map Markers
  // =========================================================================
  function renderMarkers() {
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();
    markerMap.clear();

    const filtered = getFilteredLocations();

    filtered.forEach((loc) => {
      const isSelected = activeMarkerId === loc.id;

      // Custom Gold Pin HTML with Lavender Halo
      const markerHtml = `
        <div class="custom-gold-marker ${isSelected ? 'is-active' : ''}" id="map-pin-${loc.id}">
          ${isSelected ? '<div class="marker-pulse-ring"></div>' : ''}
          <div class="marker-pin-inner ${isSelected ? 'active' : ''}">
            <span class="marker-pin-icon">❂</span>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'leaflet-custom-marker-div',
        html: markerHtml,
        iconSize: [42, 42],
        iconAnchor: [21, 40],
        popupAnchor: [0, -36]
      });

      const marker = L.marker(loc.coordinates, { icon: customIcon });

      // Compact, elegant popup
      const popupHtml = `
        <div class="map-popup-card">
          <span class="popup-badge">${loc.category}</span>
          <h4 class="popup-title">${loc.artStyle}</h4>
          <p class="popup-location">📍 ${loc.name}, ${loc.state}</p>
          <button class="popup-btn" onclick="window.RangBharat.selectLocation('${loc.id}')">
            Explore Details & Images →
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 280 });

      marker.on('click', () => {
        selectLocation(loc.id);
      });

      marker.addTo(markersLayer);
      markerMap.set(loc.id, marker);
    });

    // Update gallery grid whenever filters change
    renderGalleryGrid(filtered);
  }

  // =========================================================================
  // 3. Selection & Side Panel (Bottom Sheet on Mobile)
  // =========================================================================
  function selectLocation(id) {
    const loc = locations.find((l) => l.id === id);
    if (!loc) return;

    activeMarkerId = id;
    activeLocationObj = loc;
    currentCarouselIndex = 0;

    // Smooth fly-to with slight offset to accommodate side panel
    const isMobile = window.innerWidth <= 768;
    const targetZoom = isMobile ? 6 : 7;
    map.flyTo(loc.coordinates, targetZoom, {
      duration: 1.1,
      easeLinearity: 0.25
    });

    // Re-render markers to update active pulse ring
    renderMarkers();

    // Populate and open side panel
    populateSidePanel(loc);
    sidePanel.classList.add('open');

    // Smooth scroll on mobile if clicked from gallery
    if (isMobile) {
      sidePanel.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function closeSidePanel() {
    activeMarkerId = null;
    activeLocationObj = null;
    sidePanel.classList.remove('open');
    renderMarkers();
  }

  // =========================================================================
  // 4. Populate Side Panel Content & Carousel
  // =========================================================================
  function populateSidePanel(loc) {
    let imagesHtml = '';
    let indicatorsHtml = '';

    if (loc.images && loc.images.length > 0) {
      loc.images.forEach((img, idx) => {
        const isActive = idx === 0 ? 'active' : '';
        imagesHtml += `
          <div class="carousel-slide ${isActive}" data-slide-index="${idx}">
            <img 
              src="${img.url}" 
              alt="${img.caption}" 
              loading="lazy" 
              onerror="window.RangBharat.handleImageError(this, '${loc.artStyle}')" 
            />
            <div class="carousel-caption-overlay">
              <p class="caption-text">${img.caption}</p>
              <p class="credit-text">Source: ${img.credit}</p>
            </div>
          </div>
        `;
        indicatorsHtml += `
          <span class="carousel-dot ${isActive}" onclick="window.RangBharat.goToCarouselSlide(${idx})"></span>
        `;
      });
    }

    panelContent.innerHTML = `
      <!-- Header Meta -->
      <div class="meta-tags-grid">
        <div class="meta-tag-item">
          <span class="meta-label">Tradition</span>
          <span class="meta-val">${loc.artStyle}</span>
        </div>
        <div class="meta-tag-item">
          <span class="meta-label">Period / Era</span>
          <span class="meta-val">${loc.period}</span>
        </div>
      </div>

      <!-- Image Carousel -->
      <div class="panel-carousel-container" id="panelCarousel">
        ${imagesHtml}
        ${loc.images && loc.images.length > 1 ? `
          <button class="carousel-btn prev" onclick="window.RangBharat.prevCarouselSlide()" aria-label="Previous image">‹</button>
          <button class="carousel-btn next" onclick="window.RangBharat.nextCarouselSlide()" aria-label="Next image">›</button>
          <div class="carousel-indicators">${indicatorsHtml}</div>
        ` : ''}
      </div>

      <!-- Description -->
      <div class="panel-block">
        <div class="panel-block-title">
          <span class="title-icon">📖</span>
          <h4>About the Art Form</h4>
        </div>
        <p class="panel-block-content">${loc.description}</p>
      </div>

      <!-- Historical Context -->
      <div class="panel-block">
        <div class="panel-block-title">
          <span class="title-icon">🏛️</span>
          <h4>Historical Context & Patrons</h4>
        </div>
        <p class="panel-block-content">${loc.history}</p>
      </div>

      <!-- Artists & Lineages -->
      <div class="panel-block">
        <div class="panel-block-title">
          <span class="title-icon">👥</span>
          <h4>Master Artists & Communities</h4>
        </div>
        <p class="panel-block-content">${loc.artists}</p>
      </div>

      <!-- Key Artworks -->
      <div class="panel-block">
        <div class="panel-block-title">
          <span class="title-icon">🖼️</span>
          <h4>Famous Artworks & Motifs</h4>
        </div>
        <p class="panel-block-content">${loc.artworks}</p>
      </div>

      <!-- Materials & Techniques -->
      <div class="panel-block">
        <div class="panel-block-title">
          <span class="title-icon">🎨</span>
          <h4>Materials & Traditional Techniques</h4>
        </div>
        <p class="panel-block-content">${loc.materials}</p>
      </div>

      <!-- Did You Know? -->
      ${loc.funFact ? `
        <div class="panel-trivia-box">
          <h5><span>✨</span> Did You Know?</h5>
          <p>"${loc.funFact}"</p>
        </div>
      ` : ''}
    `;

    // Update panel header title
    document.getElementById('panelPlaceName').textContent = loc.name;
    document.getElementById('panelStateName').textContent = `${loc.state} • ${loc.category}`;
  }

  // Carousel Controls
  function goToCarouselSlide(index) {
    if (!activeLocationObj || !activeLocationObj.images) return;
    const slides = document.querySelectorAll('#panelCarousel .carousel-slide');
    const dots = document.querySelectorAll('#panelCarousel .carousel-dot');

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentCarouselIndex = index;

    slides.forEach((s, idx) => s.classList.toggle('active', idx === currentCarouselIndex));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === currentCarouselIndex));
  }

  function nextCarouselSlide() {
    goToCarouselSlide(currentCarouselIndex + 1);
  }

  function prevCarouselSlide() {
    goToCarouselSlide(currentCarouselIndex - 1);
  }

  // Image Error Fallback Handler
  function handleImageError(imgElement, artName) {
    const parent = imgElement.parentElement;
    if (!parent) return;

    imgElement.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.className = 'image-fallback';
    fallback.innerHTML = `
      <span class="fallback-icon">🎨</span>
      <p>${artName}</p>
      <span style="font-size: 0.7rem; color: #F0D77B; margin-top: 4px;">Rang Bharat Visual Archive</span>
    `;
    parent.appendChild(fallback);
  }

  // =========================================================================
  // 5. Filtering & Search Logic
  // =========================================================================
  function getFilteredLocations() {
    return locations.filter((loc) => {
      // Category filter
      const matchesCategory = currentCategory === 'all' || loc.category === currentCategory;

      // Search query filter (matches place, state, art style, artists, materials)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        loc.name.toLowerCase().includes(q) ||
        loc.state.toLowerCase().includes(q) ||
        loc.artStyle.toLowerCase().includes(q) ||
        loc.description.toLowerCase().includes(q) ||
        loc.artists.toLowerCase().includes(q) ||
        loc.materials.toLowerCase().includes(q)
      );

      return matchesCategory && matchesSearch;
    });
  }

  function renderCategoryPills() {
    if (!filterPillsContainer) return;

    filterPillsContainer.innerHTML = '';

    categories.forEach((cat) => {
      const count = cat.id === 'all'
        ? locations.length
        : locations.filter((l) => l.category === cat.id).length;

      const btn = document.createElement('button');
      btn.className = `filter-pill ${currentCategory === cat.id ? 'active' : ''}`;
      btn.innerHTML = `${cat.label} <span class="pill-count">${count}</span>`;
      btn.onclick = () => {
        currentCategory = cat.id;
        renderCategoryPills();
        renderMarkers();
      };
      filterPillsContainer.appendChild(btn);
    });
  }

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderMarkers();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      renderMarkers();
    });
  }

  // Reset Map View
  if (resetMapBtn) {
    resetMapBtn.addEventListener('click', () => {
      currentCategory = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      renderCategoryPills();
      map.flyTo(INDIA_CENTER, INDIA_ZOOM);
      closeSidePanel();
    });
  }

  // =========================================================================
  // 6. Art Styles Gallery Grid
  // =========================================================================
  function renderGalleryGrid(items) {
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    if (!items.length) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--glass-bg); border-radius: var(--radius-lg); border: var(--glass-border);">
          <p style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--purple-deep);">No art styles found matching "${searchQuery}"</p>
          <p style="font-size: 0.85rem; color: #644B84; margin-top: 0.5rem;">Try resetting your search or choosing another cultural category.</p>
        </div>
      `;
      return;
    }

    items.forEach((loc) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      const mainImg = loc.images && loc.images[0] ? loc.images[0].url : 'art/warli.svg';

      card.innerHTML = `
        <div class="card-image-box">
          <img 
            src="${mainImg}" 
            alt="${loc.artStyle}" 
            loading="lazy" 
            onerror="window.RangBharat.handleImageError(this, '${loc.artStyle}')" 
          />
          <span class="card-category-tag">${loc.category}</span>
          <span class="card-state-tag">${loc.state}</span>
        </div>
        <div class="card-body">
          <div>
            <h3 class="card-art-title">${loc.artStyle}</h3>
            <p class="card-place-name">📍 ${loc.name}</p>
            <p class="card-snippet">${loc.description}</p>
          </div>
          <button class="card-footer-btn">
            <span>Explore on Map</span>
            <span>→</span>
          </button>
        </div>
      `;

      card.addEventListener('click', () => {
        // Scroll to map
        const mapSection = document.getElementById('map-section');
        if (mapSection) {
          mapSection.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
          selectLocation(loc.id);
        }, 400);
      });

      galleryGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 7. Timeline Strip Section
  // =========================================================================
  function renderTimeline() {
    if (!timelineScroll) return;

    timelineScroll.innerHTML = '';

    eras.forEach((era) => {
      const card = document.createElement('div');
      card.className = 'timeline-era-card';

      const locChipsHtml = era.locations.map((locId) => {
        const l = locations.find((item) => item.id === locId);
        return l ? `<span class="era-loc-chip">${l.artStyle.split(' ')[0]}</span>` : '';
      }).join('');

      card.innerHTML = `
        <span class="era-period-range">${era.range}</span>
        <h4 class="era-name">${era.name}</h4>
        <p class="era-desc">${era.description}</p>
        <div class="era-locations-list">${locChipsHtml}</div>
      `;

      // Clicking an era highlights its locations
      card.addEventListener('click', () => {
        const firstLocId = era.locations[0];
        const mapSection = document.getElementById('map-section');
        if (mapSection) mapSection.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          if (firstLocId) selectLocation(firstLocId);
        }, 400);
      });

      timelineScroll.appendChild(card);
    });
  }

  // =========================================================================
  // 8. Did You Know? Facts Grid
  // =========================================================================
  function renderFacts() {
    if (!factsGrid) return;

    factsGrid.innerHTML = '';

    facts.forEach((fact) => {
      const card = document.createElement('div');
      card.className = 'fact-card';
      card.innerHTML = `
        <span class="fact-icon-large">${fact.icon}</span>
        <h4>${fact.title}</h4>
        <p>${fact.text}</p>
      `;
      factsGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 9. Navbar Scroll & Back to Top Button
  // =========================================================================
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky transparent to glass navbar
    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollPos > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (panelCloseBtn) {
    panelCloseBtn.addEventListener('click', closeSidePanel);
  }

  // Escape key to close panel
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidePanel.classList.contains('open')) {
      closeSidePanel();
    }
  });

  // =========================================================================
  // 10. Start All Components
  // =========================================================================
  initMap();
  renderCategoryPills();
  renderTimeline();
  renderFacts();

  // Expose global methods for inline HTML events
  window.RangBharat = {
    selectLocation,
    closeSidePanel,
    goToCarouselSlide,
    nextCarouselSlide,
    prevCarouselSlide,
    handleImageError
  };
});
