import mapboxgl from 'mapbox-gl';
import { comicStores, ComicStore, getUniqueRegions } from './storeData';
import { fetchGeocodeData, getMockCoordinates } from './geocodeService';

// Load Mapbox access token from environment variables
const MAPBOX_ACCESS_TOKEN = import.meta.env?.VITE_MAPBOX_ACCESS_TOKEN || '';
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

// DOM elements
const mapElement = document.getElementById('map') as HTMLElement;
const storeDetailsElement = document.getElementById('store-details') as HTMLElement;
const closeDetailsButton = document.getElementById('close-details') as HTMLElement;
const storeNameElement = document.getElementById('store-name') as HTMLElement;
const storeAddressElement = document.getElementById('store-address') as HTMLElement;
const storePhoneElement = document.getElementById('store-phone') as HTMLElement;
const storeWebsiteElement = document.getElementById('store-website') as HTMLAnchorElement;
const searchInput = document.getElementById('search') as HTMLInputElement;
const stateFilter = document.getElementById('state-filter') as HTMLSelectElement;

// Map initialization
let map: mapboxgl.Map;

// Store the active markers
let markers: { element: HTMLElement, store: ComicStore }[] = [];

// Initialize the map
function initMap() {
  try {
    // Check if WebGL is available
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      throw new Error('WebGL is not supported by your browser. Please try a different browser or check your graphics settings.');
    }
    
    // Create a comic book style map with global view
    map = new mapboxgl.Map({
      container: 'map',
      // Use a light style as our base, which we'll transform into a comic book style
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-20, 30], // Atlantic-centered view showing Americas, Europe, and parts of Asia/Africa
      zoom: 1.5,
      preserveDrawingBuffer: true, // Helps with some rendering issues
      antialias: true // Smoother lines
    });
    
    // Force map to fill container
    const resizeMap = () => {
      if (map) {
        setTimeout(() => map.resize(), 0);
      }
    };
    
    // Listen for any size changes
    window.addEventListener('resize', resizeMap);
    
    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl());

    // When the map finishes loading, add markers
    map.on('load', () => {
      // We'll skip complex map styling since it can cause issues
      // The comic book effect is now achieved through CSS on the container
      
      populateStateFilter();
      // Use the async geocoding function and load markers when done
      addGeocodeDataToStores().catch(error => {
        console.error('Error in geocoding process:', error);
        // Load markers anyway with whatever data we have
        loadStoreMarkers();
      });
    });
  } catch (error) {
    console.error('Failed to initialize map:', error);
    
    // Show error in map div
    if (mapElement) {
      mapElement.innerHTML = `
        <div class="map-error">
          <h3>Map failed to load</h3>
          <p>Please make sure you've entered a valid Mapbox access token.</p>
          <p>Error details: ${error instanceof Error ? error.message : String(error)}</p>
        </div>
      `;
    }
  }
}

// Populate the region filter dropdown
function populateStateFilter() {
  const regions = getUniqueRegions();
  
  // Clear existing options except the "All Regions" default option
  while (stateFilter.options.length > 1) {
    stateFilter.remove(1);
  }
  
  // Update the default option text
  if (stateFilter.options[0]) {
    stateFilter.options[0].textContent = 'All Regions';
  }
  
  regions.forEach(region => {
    const option = document.createElement('option');
    option.value = region;
    option.textContent = region;
    stateFilter.appendChild(option);
  });
}

// Add geocode data to stores
async function addGeocodeDataToStores() {
  const geocodingPromises = comicStores.map(async store => {
    // Try to get mock coordinates first (even if store already has position)
    // This ensures we use our carefully chosen mock coordinates
    const mockCoords = getMockCoordinates(store.name, store.state || store.country);
    if (mockCoords) {
      store.position = mockCoords;
      return;
    }
    
    // If no mock coordinates and no existing position, try to geocode the address
    if (!store.position) {
      const geocodeParts: string[] = [];
      if (store.address) geocodeParts.push(store.address);
      if (store.city) geocodeParts.push(store.city);
      if (store.state) geocodeParts.push(store.state);
      geocodeParts.push(store.country);
      
      const addressToGeocode = geocodeParts.join(', ');
      
      try {
        const coords = await fetchGeocodeData(addressToGeocode);
        if (coords) {
          store.position = coords;
          // Add a small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 200));
        } else {
          // Fallback positions by country/region
          const fallbacks: Record<string, [number, number]> = {
            "California": [-119.4179, 36.7783],
            "New York": [-75.9880, 42.8280],
            "Ontario": [-79.3832, 43.6532],
            "British Columbia": [-123.1207, 49.2827],
            "Alberta": [-115.0008, 54.5000],
            "New Jersey": [-74.5089, 40.0583],
            "USA": [-98.5795, 39.8283],
            "Canada": [-106.3468, 56.1304],
            "United Kingdom": [-1.1743, 52.3555],
            "Ireland": [-7.6921, 53.1424],
            "France": [2.3522, 46.6034],
            "Germany": [10.4515, 51.1657],
            "Netherlands": [5.2913, 52.1326],
            "Belgium": [4.4699, 50.5039],
            "Spain": [-3.7038, 40.4168],
            "Italy": [12.5674, 41.8719],
            "Australia": [133.7751, -25.2744],
            "New Zealand": [174.8860, -40.9006],
            "Japan": [138.2529, 36.2048],
            "Argentina": [-63.6167, -38.4161],
            "Mexico": [-102.5528, 23.6345],
            "Brazil": [-51.9253, -14.2350]
          };
          
          store.position = fallbacks[store.state || ''] || 
                          fallbacks[store.country] || 
                          [0, 20]; // World center fallback
        }
      } catch (error) {
        console.error(`Error geocoding ${store.name}:`, error);
        // Still assign a fallback position based on country
        const countryFallbacks: Record<string, [number, number]> = {
          "USA": [-98.5795, 39.8283],
          "Canada": [-106.3468, 56.1304],
          "United Kingdom": [-1.1743, 52.3555],
          "Japan": [138.2529, 36.2048],
          "Australia": [133.7751, -25.2744]
        };
        store.position = countryFallbacks[store.country] || [0, 20];
      }
    }
  });
  
  // Wait for all geocoding to complete
  await Promise.all(geocodingPromises);
  
  // Count stores with position
  const storesWithPosition = comicStores.filter(store => store.position).length;
  console.log(`Total stores: ${comicStores.length}, Stores with positions: ${storesWithPosition}`);
  
  // Load markers after geocoding is complete
  loadStoreMarkers();
}

// Filter stores based on search input and region filter
function filterStores(): ComicStore[] {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedRegion = stateFilter.value;
  
  return comicStores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm) ||
      store.city?.toLowerCase().includes(searchTerm) ||
      store.country.toLowerCase().includes(searchTerm);
    const matchesRegion = !selectedRegion || 
      store.state === selectedRegion || 
      store.country === selectedRegion;
    return matchesSearch && matchesRegion;
  });
}

// Add markers for all comic stores
function loadStoreMarkers() {
  // Clear existing markers
  markers.forEach(marker => {
    if (marker.element && marker.element.remove) {
      marker.element.remove();
    }
  });
  markers = [];

  const filteredStores = filterStores();
  // At this point all stores should have positions, but filter just in case
  const storesWithPosition = filteredStores.filter(store => store.position);
  
  console.log(`Creating markers for ${storesWithPosition.length} stores`);
  
  for (const store of storesWithPosition) {
    try {
      // Ensure position is valid
      if (!store.position || !Array.isArray(store.position) || store.position.length !== 2) {
        console.error(`Invalid position for store ${store.name}:`, store.position);
        continue;
      }
      
      // Create the popup - closeButton: false removes the 'x' from hover popups
      const locationParts = [store.city, store.state, store.country].filter(Boolean);
      const popup = new mapboxgl.Popup({ 
        offset: 25,
        closeButton: false,
        closeOnClick: false
      }).setHTML(`
        <h3>${store.name}</h3>
        ${locationParts.length > 0 ? `<p>${locationParts.join(', ')}</p>` : ''}
        ${store.description ? `<p class="store-description">${store.description}</p>` : ''}
      `);
      
      // Create marker options to customize the default marker
      const markerOptions = {
        color: '#FE111A',
        scale: 0.8,
        draggable: false
      };
      
      // Create the marker with the default Mapbox marker (more optimized) with custom color
      const markerObj = new mapboxgl.Marker(markerOptions)
        .setLngLat([store.position[0], store.position[1]])
        .addTo(map);
      
      // Get the marker element from the Mapbox marker
      const markerElement = markerObj.getElement();
      
      // Add custom class to style it
      markerElement.classList.add('kirby-marker');
      
      // Show popup on hover
      markerElement.addEventListener('mouseenter', () => {
        if (store.position) {
          popup.setLngLat([store.position[0], store.position[1]]);
          popup.addTo(map);
        }
      });
      
      // Hide popup on mouse leave
      markerElement.addEventListener('mouseleave', () => {
        popup.remove();
      });
      
      // Add click event listener to the marker to show detailed panel
      markerElement.addEventListener('click', () => {
        // First remove any popup that might be showing
        popup.remove();
        // Then show the detailed panel
        showStoreDetails(store);
      });
      
      // Store the marker for later reference
      markers.push({ 
        element: markerElement, 
        store
      } as any); // Use type assertion to handle markerObj
    } catch (error) {
      console.error(`Error creating marker for ${store.name}:`, error);
    }
  }
  
  // Fit map to markers if we have any
  if (markers.length > 0) {
    try {
      const bounds = new mapboxgl.LngLatBounds();
      
      // Add each marker position to the bounds
      markers.forEach(marker => {
        if (marker.store.position) {
          bounds.extend(marker.store.position as [number, number]);
        }
      });
      
      // Only fit bounds if we have valid bounds
      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, {
          padding: 50,
          maxZoom: 15
        });
      }
    } catch (error) {
      console.error('Error fitting bounds:', error);
    }
  }
  
  // Show info about how many stores are displayed
  const totalStores = filteredStores.length;
  const displayedStores = markers.length;
  
  // This could be displayed in a status bar or other UI element
  console.log(`Showing ${displayedStores} of ${totalStores} stores on map`);
}

// Show store details
function showStoreDetails(store: ComicStore) {
  storeNameElement.textContent = store.name;
  
  // Build location string with available parts
  const locationParts: string[] = [];
  if (store.address) locationParts.push(store.address);
  if (store.city) locationParts.push(store.city);
  if (store.state) locationParts.push(store.state);
  locationParts.push(store.country);
  
  if (locationParts.length > 0) {
    storeAddressElement.textContent = locationParts.join(', ');
    storeAddressElement.style.display = 'block';
  } else {
    storeAddressElement.style.display = 'none';
  }
  
  // Add Google Maps link
  const mapsLinkElement = document.getElementById('store-maps') as HTMLAnchorElement;
  if (mapsLinkElement) {
    // Build query from available location parts
    const queryParts: string[] = [];
    if (store.address) queryParts.push(store.address);
    if (store.city) queryParts.push(store.city);
    if (store.state) queryParts.push(store.state);
    queryParts.push(store.country);
    queryParts.push(store.name);
    
    const query = encodeURIComponent(queryParts.join(' '));
    mapsLinkElement.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
    mapsLinkElement.textContent = 'View on Google Maps';
    mapsLinkElement.parentElement!.style.display = 'block';
  }
  
  // Show store description in details panel if available
  const storeDescriptionElement = document.getElementById('store-description');
  if (storeDescriptionElement) {
    if (store.description) {
      storeDescriptionElement.textContent = store.description;
      storeDescriptionElement.style.display = 'block';
    } else {
      storeDescriptionElement.style.display = 'none';
    }
  }
  
  if (store.phone) {
    storePhoneElement.textContent = store.phone;
    storePhoneElement.style.display = 'block';
  } else {
    storePhoneElement.style.display = 'none';
  }
  
  if (store.url) {
    storeWebsiteElement.href = store.url;
    storeWebsiteElement.textContent = 'Visit Website';
    storeWebsiteElement.parentElement!.style.display = 'block';
  } else {
    storeWebsiteElement.parentElement!.style.display = 'none';
  }
  
  storeDetailsElement.classList.remove('hidden');
}

// Hide store details
function hideStoreDetails() {
  storeDetailsElement.classList.add('hidden');
  
  // Reset all store info elements
  storeNameElement.textContent = '';
  storeAddressElement.textContent = '';
  storePhoneElement.textContent = '';
  storeWebsiteElement.href = '#';
  const mapsLinkElement = document.getElementById('store-maps') as HTMLAnchorElement;
  if (mapsLinkElement) {
    mapsLinkElement.href = '#';
    mapsLinkElement.parentElement!.style.display = 'none';
  }
}

// Event listeners
closeDetailsButton.addEventListener('click', hideStoreDetails);
searchInput.addEventListener('input', loadStoreMarkers);
stateFilter.addEventListener('change', loadStoreMarkers);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  
  // Add fallback for WebGL issues in some browsers
  if (mapElement) {
    const tryFallbackMapbox = () => {
      try {
        if (!map || !map.loaded()) {
          console.log('Trying fallback map initialization...');
          mapboxgl.clearStorage();
          
          // Try to force redraw
          setTimeout(() => {
            if (!map || !map.loaded()) {
              initMap();
            }
          }, 1000);
        }
      } catch (e) {
        console.error('Fallback map initialization failed:', e);
      }
    };
    
    // Add a fallback timeout
    setTimeout(tryFallbackMapbox, 2000);
  }
});