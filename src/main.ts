import mapboxgl from 'mapbox-gl';
import { comicStores, ComicStore } from './storeData';
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
    // Create a comic book style map centered on the US
    map = new mapboxgl.Map({
      container: 'map',
      // Use a light style as our base, which we'll transform into a comic book style
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98.5795, 39.8283], // Center of the US
      zoom: 3
    });
    
    // We'll apply comic book styling in the main load event below

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

// Populate the state filter dropdown
function populateStateFilter() {
  const states = [...new Set(comicStores.map(store => store.state))].sort();
  
  // Clear existing options except the "All States" default option
  while (stateFilter.options.length > 1) {
    stateFilter.remove(1);
  }
  
  states.forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateFilter.appendChild(option);
  });
}

// Add geocode data to stores
async function addGeocodeDataToStores() {
  const geocodingPromises = comicStores.map(async store => {
    // Try to get mock coordinates first (even if store already has position)
    // This ensures we use our carefully chosen mock coordinates
    const mockCoords = getMockCoordinates(store.name, store.state);
    if (mockCoords) {
      store.position = mockCoords;
      return;
    }
    
    // If no mock coordinates and no existing position, try to geocode the address
    if (!store.position) {
      let addressToGeocode = '';
      
      if (store.address && store.city) {
        addressToGeocode = `${store.address}, ${store.city}, ${store.state}`;
      } else if (store.city) {
        addressToGeocode = `${store.city}, ${store.state}`;
      } else {
        addressToGeocode = `${store.name}, ${store.state}`;
      }
      
      try {
        const coords = await fetchGeocodeData(addressToGeocode);
        if (coords) {
          store.position = coords;
          // Add a small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 200));
        } else {
          // Fallback position if geocoding fails (centered in the state or country)
          if (store.state === "California") store.position = [-119.4179, 36.7783];
          else if (store.state === "New York") store.position = [-75.9880, 42.8280];
          else if (store.state === "Ontario") store.position = [-79.3832, 43.6532];
          else if (store.state.includes("Columbia")) store.position = [-123.1207, 49.2827];
          else if (store.state === "Alberta") store.position = [-115.0008, 54.5000];
          else if (store.state === "New Jersey") store.position = [-74.5089, 40.0583];
          else store.position = [-98.5795, 39.8283]; // Center of the US
        }
      } catch (error) {
        console.error(`Error geocoding ${store.name}:`, error);
        // Still assign a fallback position
        store.position = [-98.5795, 39.8283]; // Center of the US
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

// Filter stores based on search input and state filter
function filterStores(): ComicStore[] {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedState = stateFilter.value;
  
  return comicStores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm);
    const matchesState = !selectedState || store.state === selectedState;
    return matchesSearch && matchesState;
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
      const popup = new mapboxgl.Popup({ 
        offset: 25,
        closeButton: false,
        closeOnClick: false
      }).setHTML(`
        <h3>${store.name}</h3>
        ${store.city ? `<p>${store.city}, ${store.state}</p>` : ''}
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
  
  if (store.address && store.city) {
    storeAddressElement.textContent = `${store.address}, ${store.city}, ${store.state}`;
    storeAddressElement.style.display = 'block';
  } else if (store.city) {
    storeAddressElement.textContent = `${store.city}, ${store.state}`;
    storeAddressElement.style.display = 'block';
  } else {
    storeAddressElement.style.display = 'none';
  }
  
  // Add Google Maps link
  const mapsLinkElement = document.getElementById('store-maps') as HTMLAnchorElement;
  if (mapsLinkElement) {
    // Only show Google Maps link if we have a state at minimum
    if (store.state) {
      const address = store.address ? `${store.address}, ` : '';
      const city = store.city ? `${store.city}, ` : '';
      const query = encodeURIComponent(`${address}${city}${store.state} ${store.name}`);
      mapsLinkElement.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
      mapsLinkElement.textContent = 'View on Google Maps';
      mapsLinkElement.parentElement!.style.display = 'block';
    } else {
      mapsLinkElement.parentElement!.style.display = 'none';
    }
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
});