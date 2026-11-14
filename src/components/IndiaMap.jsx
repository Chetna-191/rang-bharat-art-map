import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { ZoomIn, ZoomOut, Maximize2, RotateCcw, MapPin, Sparkles } from 'lucide-react';
import { STATES } from '../data/indianArtData';

export default function IndiaMap({
  states = STATES,
  selectedState,
  onSelectState,
  onResetSelection,
  className = ''
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersGroupRef = useRef(null);
  const markerMapRef = useRef(new Map());

  // Center on India
  const INDIA_CENTER = [22.8, 80.5];
  const INDIA_ZOOM = 5;

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: INDIA_CENTER,
        zoom: INDIA_ZOOM,
        minZoom: 4,
        maxZoom: 13,
        zoomControl: false,
        attributionControl: true,
      });

      // OpenStreetMap with Royal Lavender & Golden Cartography filter
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersGroupRef.current = markersGroup;
      mapInstanceRef.current = map;

      // Handle map resizing
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

  // Update Markers when states or selectedState changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersGroupRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();
    markerMapRef.current.clear();

    states.forEach((st) => {
      const isSelected = selectedState && selectedState.id === st.id;

      // Custom artistic marker HTML with royal lavender body, gold trim, and pulsating rings
      const markerHtml = `
        <div class="state-map-pin ${isSelected ? 'active-state' : ''}" style="position: relative; width: 42px; height: 42px;">
          ${isSelected ? '<div class="lavender-map-pulse"></div>' : ''}
          <div style="
            width: 40px;
            height: 40px;
            background: ${isSelected 
              ? 'radial-gradient(circle at 35% 35%, #F59E0B, #B45309)' 
              : 'radial-gradient(circle at 35% 35%, #7C3AED, #3B1358)'};
            border: 2.5px solid ${isSelected ? '#FFF2C6' : '#D4AF37'};
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(126, 34, 206, 0.4), 0 0 16px rgba(212, 175, 55, ${isSelected ? '0.95' : '0.6'});
            transition: all 0.3s ease;
          ">
            <span style="
              transform: rotate(45deg);
              color: ${isSelected ? '#FFFFFF' : '#FFF2C6'};
              font-family: serif;
              font-weight: bold;
              font-size: 14px;
              user-select: none;
            ">❂</span>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-state-div-icon',
        html: markerHtml,
        iconSize: [42, 42],
        iconAnchor: [21, 40],
        popupAnchor: [0, -36],
      });

      const marker = L.marker(st.coordinates, { icon: customIcon });

      // Custom Royal Lavender & Gold Leaflet Popup
      const popupHtml = `
        <div style="min-width: 250px; max-width: 300px; font-family: 'Inter', sans-serif;">
          <div style="height: 105px; width: 100%; background: #2A114B; position: relative; overflow: hidden;">
            <img 
              src="${st.heroImage}" 
              alt="${st.name}" 
              style="width: 100%; height: 100%; object-fit: cover; opacity: 0.95;" 
            />
            <div style="position: absolute; top: 8px; left: 8px; background: rgba(36, 14, 64, 0.92); color: #FFF2C6; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 6px; text-transform: uppercase; border: 1px solid rgba(212, 175, 55, 0.6); box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
              ${st.region}
            </div>
          </div>
          <div style="padding: 14px 16px; background: #FFFFFF; color: #2D1B44;">
            <div style="font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 700; color: #3E196B; line-height: 1.2;">
              ${st.name}
            </div>
            <div style="font-size: 11px; color: #B45309; font-style: italic; margin-top: 4px; line-height: 1.35; font-weight: 500;">
              "${st.tagline}"
            </div>
            <div style="font-size: 11px; color: #624C78; margin-top: 8px; border-top: 1px dashed rgba(212, 175, 55, 0.35); padding-top: 6px;">
              Indigenous Traditions: <strong style="color: #7C3AED;">${st.artFormIds.length} Master Forms</strong>
            </div>
            <button 
              id="state-popup-btn-${st.id}" 
              style="
                width: 100%;
                margin-top: 12px;
                background: linear-gradient(135deg, #3E196B, #6B21A8);
                color: #FFFFFF;
                border: 1.5px solid #D4AF37;
                border-radius: 12px;
                padding: 10px 12px;
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                cursor: pointer;
                box-shadow: 0 4px 14px rgba(126, 34, 206, 0.3);
                transition: all 0.2s;
              "
            >
              Explore State Art Forms →
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 320 });

      marker.on('popupopen', () => {
        const btn = document.getElementById(`state-popup-btn-${st.id}`);
        if (btn) {
          btn.onclick = () => {
            onSelectState(st);
          };
        }
      });

      marker.on('click', () => {
        onSelectState(st);
      });

      marker.addTo(markersGroup);
      markerMapRef.current.set(st.id, marker);
    });

    // If selectedState is passed, fly to it and open its popup
    if (selectedState) {
      const marker = markerMapRef.current.get(selectedState.id);
      if (marker) {
        map.flyTo(selectedState.coordinates, 7, {
          animate: true,
          duration: 1.2,
        });
        setTimeout(() => {
          marker.openPopup();
        }, 1250);
      }
    }
  }, [states, selectedState]);

  // Controls
  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();

  const handleResetMap = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(INDIA_CENTER, INDIA_ZOOM);
    }
    if (onResetSelection) {
      onResetSelection();
    }
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-lavender-card bg-white ${className}`}>
      
      {/* Top Left Status Badge */}
      <div className="absolute top-4 left-4 z-[400] flex flex-wrap items-center gap-2 pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-gold/40 shadow-sm flex items-center gap-2 text-xs font-semibold text-royal-deep">
          <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
          <span>Royal Lavender Cartography</span>
          <span className="text-gold/60">|</span>
          <span className="text-royal-plum font-bold">{states.length} Active Hubs</span>
        </div>

        {selectedState && (
          <button
            onClick={handleResetMap}
            className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-terracotta/60 text-terracotta hover:bg-terracotta hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Map</span>
          </button>
        )}
      </div>

      {/* Floating Map Actions */}
      <div className="absolute top-4 right-4 z-[400] flex flex-col gap-2 pointer-events-auto">
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-gold/40 text-royal-deep shadow-md hover:bg-lavender-light flex items-center justify-center transition-transform hover:scale-105"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4 text-royal-plum" />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-gold/40 text-royal-deep shadow-md hover:bg-lavender-light flex items-center justify-center transition-transform hover:scale-105"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4 text-royal-plum" />
        </button>
        <button
          onClick={handleResetMap}
          className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-gold/40 text-royal-deep shadow-md hover:bg-lavender-light flex items-center justify-center transition-transform hover:scale-105"
          title="Fit All India"
        >
          <Maximize2 className="w-4 h-4 text-gold-rich" />
        </button>
      </div>

      {/* Leaflet Map Canvas with Royal Lavender & Golden Tint Cartography */}
      <div
        ref={mapContainerRef}
        className="w-full h-[540px] sm:h-[620px] lg:h-[680px] z-0 lavender-gold-tiles"
        role="region"
        aria-label="Interactive Map of India"
      />

      {/* Bottom Cultural Hint Bar */}
      <div className="absolute bottom-4 inset-x-4 z-[400] pointer-events-none">
        <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-gold/40 shadow-md max-w-xl mx-auto flex items-center justify-between text-xs text-lavender-charcoal pointer-events-auto">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Click any glowing gold pin to load its indigenous art traditions.</span>
          </span>
          <span className="font-serif italic text-gold-rich font-semibold hidden sm:inline ml-2">
            28+ Regional Hubs
          </span>
        </div>
      </div>

    </div>
  );
}
