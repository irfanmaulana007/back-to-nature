'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export interface MapMarker {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  info?: {
    name: string;
    location: string;
    elevation: number;
    difficulty: string;
    description: string;
  };
}

interface GoogleMapProps {
  className?: string;
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markers?: MapMarker[];
  onMarkerClick?: (marker: MapMarker) => void;
}

export default function GoogleMap({
  className = '',
  center = { lat: -2.5489, lng: 118.0149 }, // Default to Indonesia center
  zoom = 5,
  markers = [],
  onMarkerClick,
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  useEffect(() => {
    const initMap = async () => {
      // Only initialize if map doesn't exist yet
      if (mapInstanceRef.current) return;

      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
          version: 'weekly',
          libraries: ['places', 'marker'],
        });

        const { Map, InfoWindow } = await loader.importLibrary('maps');
        const { AdvancedMarkerElement } = await loader.importLibrary('marker');

        if (!mapRef.current) return;

        // Create map with provided center and zoom
        const map = new Map(mapRef.current, {
          center,
          zoom,
          mapId: 'INDONESIA_MOUNTAINS_MAP',
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
          styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{ color: '#ffffff' }, { lightness: 17 }],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [
                { color: '#ffffff' },
                { lightness: 29 },
                { weight: 0.2 },
              ],
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }, { lightness: 18 }],
            },
            {
              featureType: 'road.local',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }, { lightness: 16 }],
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{ color: '#dedede' }, { lightness: 21 }],
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [
                { visibility: 'on' },
                { color: '#ffffff' },
                { lightness: 16 },
              ],
            },
            {
              elementType: 'labels.text.fill',
              stylers: [
                { saturation: 36 },
                { color: '#333333' },
                { lightness: 40 },
              ],
            },
            {
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.fill',
              stylers: [{ color: '#fefefe' }, { lightness: 20 }],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [
                { color: '#fefefe' },
                { lightness: 17 },
                { weight: 1.2 },
              ],
            },
          ],
        });

        // Store map instance
        mapInstanceRef.current = map;

        // Add map click handler to close the card
        map.addListener('click', () => {
          setSelectedMarker(null);
        });

        // Create markers from props
        markers.forEach((markerData) => {
          const marker = new AdvancedMarkerElement({
            map,
            position: markerData.position,
            title: markerData.title,
          });

          // Create custom marker content
          const markerContent = document.createElement('div');
          markerContent.className = 'mountain-marker';
          markerContent.innerHTML = `
            <div class="relative">
              <div class="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 transition-opacity duration-200">
                ${markerData.title}
              </div>
            </div>
          `;

          marker.content = markerContent;

          // Add hover effect
          markerContent.addEventListener('mouseenter', () => {
            const tooltip = markerContent.querySelector('.absolute');
            if (tooltip) {
              tooltip.classList.remove('opacity-0');
              tooltip.classList.add('opacity-100');
            }
          });

          markerContent.addEventListener('mouseleave', () => {
            const tooltip = markerContent.querySelector('.absolute');
            if (tooltip) {
              tooltip.classList.remove('opacity-100');
              tooltip.classList.add('opacity-0');
            }
          });

          // Add click event
          markerContent.addEventListener('click', (event) => {
            // Prevent event propagation to avoid triggering map click
            event.stopPropagation();

            if (onMarkerClick) {
              onMarkerClick(markerData);
            } else {
              // Show marker details in floating card
              setSelectedMarker(markerData);
            }
          });

          // Store marker reference
          markersRef.current.push(marker);
        });

        setIsLoaded(true);
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Failed to load map. Please check your API key.');
      }
    };

    initMap();
  }, []); // Only run once on mount

  // Separate effect to handle marker updates
  useEffect(() => {
    if (!isLoaded || !mapInstanceRef.current) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => {
      marker.map = null;
    });
    markersRef.current = [];

    // Add new markers
    markers.forEach((markerData) => {
      if (!mapInstanceRef.current) return;

      const marker = new (
        window as any
      ).google.maps.marker.AdvancedMarkerElement({
        map: mapInstanceRef.current,
        position: markerData.position,
        title: markerData.title,
      });

      // Create custom marker content
      const markerContent = document.createElement('div');
      markerContent.className = 'mountain-marker';
      markerContent.innerHTML = `
        <div class="relative">
          <div class="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 transition-opacity duration-200">
            ${markerData.title}
          </div>
        </div>
      `;

      marker.content = markerContent;

      // Add hover effect
      markerContent.addEventListener('mouseenter', () => {
        const tooltip = markerContent.querySelector('.absolute');
        if (tooltip) {
          tooltip.classList.remove('opacity-0');
          tooltip.classList.add('opacity-100');
        }
      });

      markerContent.addEventListener('mouseleave', () => {
        const tooltip = markerContent.querySelector('.absolute');
        if (tooltip) {
          tooltip.classList.remove('opacity-100');
          tooltip.classList.add('opacity-0');
        }
      });

      // Add click event
      markerContent.addEventListener('click', (event) => {
        // Prevent event propagation to avoid triggering map click
        event.stopPropagation();

        if (onMarkerClick) {
          onMarkerClick(markerData);
        } else {
          // Show marker details in floating card
          setSelectedMarker(markerData);
        }
      });

      // Store marker reference
      markersRef.current.push(marker);
    });
  }, [markers, isLoaded, onMarkerClick]);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center h-96 bg-gray-100 rounded-lg ${className}`}
      >
        <div className="text-center">
          <p className="text-red-500 mb-2">{error}</p>
          <p className="text-sm text-gray-600">
            Please add your Google Maps API key to the environment variables.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg" />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        )}

        {/* Left Side Marker Detail Panel */}
        {selectedMarker && selectedMarker.info && (
          <div className="absolute left-2 top-2 bottom-2 p-2 rounded-lg z-10 w-80 bg-white shadow-2xl border-r border-gray-200 overflow-hidden">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-2 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">
                {selectedMarker.info.name}
              </h3>
              <button
                onClick={() => setSelectedMarker(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="h-full overflow-y-auto">
              <div className="p-4">
                {/* Mountain image placeholder */}
                <div className="w-full h-24 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-6 h-6 mx-auto mb-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs">Mountain Image</p>
                  </div>
                </div>

                {/* Details section */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <svg
                        className="w-3 h-3 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-gray-500">Location</span>
                      <p className="text-sm text-gray-700">
                        {selectedMarker.info.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-gray-500">Elevation</span>
                      <p className="text-sm text-gray-700">
                        {selectedMarker.info.elevation.toLocaleString()} m
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                      <svg
                        className="w-3 h-3 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-gray-500">Difficulty</span>
                      <p className="text-sm text-gray-700">
                        {selectedMarker.info.difficulty}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description section */}
                <div>
                  <h4 className="text-xs font-medium text-gray-500 mb-2">
                    About this Mountain
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                    {selectedMarker.info.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
