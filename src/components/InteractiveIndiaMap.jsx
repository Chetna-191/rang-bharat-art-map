import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { ZoomIn, ZoomOut, Maximize2, Layers, MapPin, Eye, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/artLocations';

// Category color mappings for custom artistic pins
const CATEGORY_COLORS = {
  'Folk Art': { bg: '#B5532F', border: '#E87D56', text: '#FAF6EE' },
  'Tribal Art': { bg: '#2F7D4F', border: '#5BB37D', text: '#FAF6EE' },
  'Classical Miniature': { bg: '#6D1F2B', border: '#C99738', text: '#FAF6EE' },
  'Temple & Architecture': { bg: '#8A5A2B', border: '#D4AF37', text: '#FAF6EE' },
  'Textile & Craft': { bg: '#A87400', border: '#FFC83B', text: '#FAF6EE' },
  'Modern Revival': { bg: '#1F5B66', border: '#4E9CA8', text: '#FAF6EE' },
};

export default function InteractiveIndiaMap({
  locations,
  selectedLocation,
  onSelectLocation,
  className = ''
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersGroupRef = useRef(null);
  const markerMapRef = useRef(new Map());
  const [activeTileType, setActiveTileType] = useState('osm');

  // Default India coordinates
  const INDIA_CENTER = [22.8, 82.0];
  const INDIA_ZOOM = 5;

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Create map instance
      const map = L.map(mapContainerRef.current, {
        center: INDIA_CENTER,
        zoom: INDIA_ZOOM,
        minZoom: 4,
        maxZoom: 14,
        zoomControl: false, // Custom controls
        attributionControl: true,
      });

      // Default OpenStreetMap Tiles
      const osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      });
      osmTiles.addTo(map);

      // Create a layer group for markers
      const markersGroup = L.layerGroup().addTo(map);
      markersGroupRef.current = markersGroup;
      mapInstanceRef.current = map;

      // Invalidate size to ensure proper rendering
      setTimeout(() => {
        map.invalidateSize();
      }, 250);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Markers whenever filtered locations change or selectedLocation changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersGroupRef.current;
    if (!map || !markersGroup) return;

    // Clear previous markers
    markersGroup.clearLayers();
    markerMapRef.current.clear();

    locations.forEach((loc) => {
      const isSelected = selectedLocation && selectedLocation.id === loc.id;
      const theme = CATEGORY_COLORS[loc.category] || { bg: '#C85A32', border: '#D4AF37', text: '#FAF6EE' };

      // Custom artistic marker HTML
      const markerHtml = `
        <div class="custom-art-pin ${isSelected ? 'active-marker' : ''}" style="position: relative; width: 36px; height: 36px;">
          ${isSelected ? '<div class="pulse-animation"></div>' : ''}
          <div style="
            width: 34px;
            height: 34px;
            background: radial-gradient(circle at 30% 30%, ${theme.border}, ${theme.bg});
            border: 2px solid ${isSelected ? '#FFD700' : '#FAF6EE'};
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.35);
            transition: all 0.3s ease;
          ">
            <span style="
              transform: rotate(45deg);
              color: ${theme.text};
              font-family: serif;
              font-weight: bold;
              font-size: 13px;
              line-height: 1;
              user-select: none;
            ">❂</span>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-art-div-icon',
        html: markerHtml,
        iconSize: [36, 36],
        iconAnchor: [18, 34],
        popupAnchor: [0, -32],
      });

      const marker = L.marker(loc.coordinates, { icon: customIcon });

      // Custom Popup HTML
      const popupContent = `
        <div style="min-width: 220px; max-width: 280px; font-family: 'Inter', sans-serif;">
          <div style="
            height: 100px; 
            width: 100%; 
            background: linear-gradient(135deg, ${theme.bg}, #3D2D24);
            position: relative;
            overflow: hidden;
          ">
            <img 
              src="${loc.primaryImage}" 
              alt="${loc.name}" 
              style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;"
              onerror="this.style.display='none'"
            />
            <div style="
              position: absolute; 
              top: 8px; 
              left: 8px; 
              background: rgba(0,0,0,0.6); 
              color: #FAF6EE; 
              font-size: 10px; 
              padding: 2px 6px; 
              border-radius: 4px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            ">
              ${loc.state}
            </div>
          </div>
          
          <div style="padding: 12px 14px; background: #FAF6EE;">
            <div style="font-size: 11px; color: ${theme.bg}; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
              ${loc.artStyle}
            </div>
            <div style="font-family: 'Playfair Display', serif; font-size: 15px; font-weight: 700; color: #4A1018; margin: 2px 0 6px 0; line-height: 1.2;">
              ${loc.name}
            </div>
            <div style="font-size: 11px; color: #555; line-height: 1.35; margin-bottom: 10px;">
              ${loc.location} • <span style="color: #8A5A2B;">${loc.period}</span>
            </div>
            <button 
              id="popup-btn-${loc.id}" 
              style="
                width: 100%; 
                background: linear-gradient(to right, #6A1A24, #C85A32); 
                color: #FAF6EE; 
                border: none; 
                border-radius: 8px; 
                padding: 7px 10px; 
                font-size: 12px; 
                font-weight: 600; 
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.15);
              "
            >
              <span>Explore Full Story</span>
              <span>→</span>
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'heritage-custom-popup',
      });

      // Handle Popup Button Click
      marker.on('popupopen', () => {
        const btn = document.getElementById(`popup-btn-${loc.id}`);
        if (btn) {
          btn.onclick = () => {
            onSelectLocation(loc);
          };
        }
      });

      marker.on('click', () => {
        onSelectLocation(loc);
      });

      marker.addTo(markersGroup);
      markerMapRef.current.set(loc.id, marker);
    });

    // If a location is selected, fly to it and open its popup
    if (selectedLocation) {
      const marker = markerMapRef.current.get(selectedLocation.id);
      if (marker) {
        map.flyTo(selectedLocation.coordinates, 8, {
          animate: true,
          duration: 1.2,
        });
        setTimeout(() => {
          marker.openPopup();
        }, 1250);
      }
    }
  }, [locations, selectedLocation]);

  // Map Controls
  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      if (locations.length > 0) {
        const bounds = L.latLngBounds(locations.map((loc) => loc.coordinates));
        mapInstanceRef.current.fitBounds(bounds, {
          padding: [50, 50],
          maxZoom: 7,
          animate: true,
        });
      } else {
        mapInstanceRef.current.flyTo(INDIA_CENTER, INDIA_ZOOM);
      }
    }
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden border-2 border-heritage-gold/50 shadow-heritage-lg bg-heritage-sand/30 ${className}`}>
      
      {/* Map Header Overlay Bar */}
      <div className="absolute top-3 left-3 z-[400] flex flex-wrap items-center gap-2 pointer-events-auto">
        <div className="bg-heritage-cream/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-heritage-gold/50 shadow-sm flex items-center gap-2 text-xs font-semibold text-heritage-maroonDark">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Interactive Cultural Map</span>
          <span className="text-heritage-gold">|</span>
          <span className="text-heritage-terracotta">{locations.length} Sites</span>
        </div>
      </div>

      {/* Floating Zoom & Control Actions */}
      <div className="absolute top-3 right-3 z-[400] flex flex-col gap-1.5 pointer-events-auto">
        <button
          onClick={handleZoomIn}
          className="w-9 h-9 rounded-xl bg-heritage-cream/95 backdrop-blur-md border border-heritage-gold/50 text-heritage-earthDark shadow-md hover:bg-heritage-sand/50 flex items-center justify-center transition-all hover:scale-105"
          title="Zoom In"
          aria-label="Zoom In"
        >
          <ZoomIn className="w-4 h-4 text-heritage-terracotta" />
        </button>

        <button
          onClick={handleZoomOut}
          className="w-9 h-9 rounded-xl bg-heritage-cream/95 backdrop-blur-md border border-heritage-gold/50 text-heritage-earthDark shadow-md hover:bg-heritage-sand/50 flex items-center justify-center transition-all hover:scale-105"
          title="Zoom Out"
          aria-label="Zoom Out"
        >
          <ZoomOut className="w-4 h-4 text-heritage-terracotta" />
        </button>

        <button
          onClick={handleResetView}
          className="w-9 h-9 rounded-xl bg-heritage-cream/95 backdrop-blur-md border border-heritage-gold/50 text-heritage-earthDark shadow-md hover:bg-heritage-sand/50 flex items-center justify-center transition-all hover:scale-105"
          title="Fit All Locations in India"
          aria-label="Fit All Locations in India"
        >
          <Maximize2 className="w-4 h-4 text-heritage-maroon" />
        </button>
      </div>

      {/* Actual Leaflet Map Canvas Container */}
      <div
        ref={mapContainerRef}
        className="w-full h-[500px] sm:h-[580px] lg:h-[650px] z-0"
        role="region"
        aria-label="Interactive Map of India Art Destinations"
      />

      {/* Bottom Map Legend */}
      <div className="absolute bottom-3 left-3 right-3 z-[400] pointer-events-none">
        <div className="bg-heritage-cream/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-heritage-gold/40 shadow-heritage max-w-2xl mx-auto pointer-events-auto">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-serif font-bold text-heritage-maroon flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
              <span>Tradition Color Key:</span>
            </span>

            <div className="flex flex-wrap items-center gap-3">
              {Object.entries(CATEGORY_COLORS).map(([cat, theme]) => (
                <div key={cat} className="flex items-center gap-1.5 text-[11px] font-medium text-heritage-earth">
                  <span
                    className="w-3 h-3 rounded-full border border-white shadow-xs inline-block"
                    style={{ backgroundColor: theme.bg }}
                  />
                  <span>{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

