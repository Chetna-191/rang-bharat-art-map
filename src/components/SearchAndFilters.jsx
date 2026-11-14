import React from 'react';
import { Search, RotateCcw, MapPin, Filter, Layers, X } from 'lucide-react';
import { REGIONS, CATEGORIES } from '../data/artLocations';

export default function SearchAndFilters({
  searchQuery,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  selectedCategory,
  onCategoryChange,
  onResetFilters,
  totalCount,
  filteredCount,
}) {
  const hasActiveFilters = searchQuery.trim() !== '' || selectedRegion !== 'all' || selectedCategory !== 'all';

  return (
    <div className="bg-heritage-ivory/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-heritage-sand shadow-heritage mb-6">
      
      {/* Search Input Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-5">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-heritage-terracotta">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by location (e.g. Madhubani, Ajanta), state, or art style..."
            className="w-full pl-11 pr-10 py-3 rounded-xl bg-heritage-cream border border-heritage-gold/50 text-heritage-earthDark placeholder-heritage-earth/50 text-sm focus:outline-none focus:ring-2 focus:ring-heritage-terracotta focus:border-transparent transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-heritage-earth/60 hover:text-heritage-maroon"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results Counter and Reset Button */}
        <div className="flex items-center justify-between md:justify-end gap-3">
          <div className="text-xs sm:text-sm font-medium text-heritage-earth/80">
            Showing <span className="font-bold text-heritage-maroon">{filteredCount}</span> of {totalCount} art locations
          </div>

          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-heritage-maroonDark bg-heritage-sand/60 hover:bg-heritage-terracotta hover:text-heritage-cream transition-colors duration-200 border border-heritage-gold/40 shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Sections */}
      <div className="space-y-3.5 pt-3 border-t border-heritage-sand/70">
        
        {/* Region Filter Chips */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-heritage-maroon uppercase tracking-wider min-w-[100px]">
            <MapPin className="w-3.5 h-3.5 text-heritage-terracotta" />
            <span>Region:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {REGIONS.map((region) => {
              const isSelected = selectedRegion === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => onRegionChange(region.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-heritage-maroon text-heritage-gold shadow-sm font-semibold ring-1 ring-heritage-gold'
                      : 'bg-heritage-cream text-heritage-earth border border-heritage-sand hover:border-heritage-gold hover:bg-heritage-sand/30'
                  }`}
                >
                  {region.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-heritage-maroon uppercase tracking-wider min-w-[100px]">
            <Layers className="w-3.5 h-3.5 text-heritage-terracotta" />
            <span>Tradition:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-heritage-terracotta text-heritage-cream shadow-sm font-semibold ring-1 ring-heritage-goldLight'
                      : 'bg-heritage-cream text-heritage-earth border border-heritage-sand hover:border-heritage-gold hover:bg-heritage-sand/30'
                  }`}
                >
                  {cat.color && (
                    <span 
                      className="w-2 h-2 rounded-full inline-block" 
                      style={{ backgroundColor: cat.color }} 
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

