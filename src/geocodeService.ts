// Service to handle geocoding addresses to coordinates
import mapboxgl from 'mapbox-gl';

/**
 * Fetches geocode data for a given address using Mapbox's Geocoding API
 * @param address The address to geocode
 * @returns Promise resolving to [longitude, latitude] coordinates
 */
export async function fetchGeocodeData(address: string): Promise<[number, number] | null> {
  try {
    const encodedAddress = encodeURIComponent(address);
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${mapboxgl.accessToken}`);
    
    if (!response.ok) {
      console.error(`Geocoding error: ${response.statusText}`);
      return null;
    }
    
    const data = await response.json();
    
    if (data.features && data.features.length > 0) {
      const [longitude, latitude] = data.features[0].center;
      return [longitude, latitude];
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching geocode data:', error);
    return null;
  }
}

// For development/testing purposes, we can add some mock coordinates for a few stores
// In a real app, these would be fetched from the geocoding API
export function getMockCoordinates(storeName: string, state: string): [number, number] | null {
  const mockData: Record<string, [number, number]> = {
    // Canada
    "The Beguiling": [-79.4024, 43.6568], // Toronto, ON
    "Silver Snail": [-79.3809, 43.6561], // Toronto, ON
    "Paradise Comics": [-79.4004, 43.7324], // Toronto, ON
    "Big B Comics": [-79.8711, 43.2303], // Hamilton, ON
    "Heroes": [-81.2496, 42.9851], // London, ON
    "Comic Hunter": [-64.7783, 46.0878], // Moncton, NB
    "Strange Adventures": [-63.5729, 44.6476], // Halifax, NS
    "Golden Age Collectables": [-123.1207, 49.2827], // Vancouver, BC
    "Happy Harbor Comics": [-113.5133, 53.5461], // Edmonton, AB,
    // California
    "House of Secrets": [-118.3064, 34.1808], // Burbank, CA
    "Spero's Heroes": [-118.6004, 34.2506], // Chatsworth, CA
    "Pulp Fiction Comics": [-118.4065, 34.0259], // Culver City, CA
    "Collectors Paradise": [-118.1445, 34.1478], // Pasadena, CA
    "Now Or Never Comics": [-117.1611, 32.7157], // San Diego, CA
    "Southern California Comics": [-117.2056, 32.8383], // San Diego, CA
    
    // Colorado
    "Grand Slam Greeley Sports Cards, Comics, and Games": [-104.7091, 40.4233], // Greeley, CO
    "Grand Slam Gaming Cards Comics": [-105.0749, 40.3978], // Loveland, CO
    
    // Connecticut
    "Cave Comics": [-73.2949, 41.3855], // Newtown, CT
    
    // Florida
    "Tate's Comics": [-80.2514, 26.1537], // Lauderhill, FL
    "Fallout Comics": [-84.2807, 30.4383], // Tallahassee, FL
    
    // Georgia
    "Book Nook": [-84.2964, 33.7748], // Decatur, GA
    "Dr. No's Comics & Games": [-84.5499, 33.9526], // Marietta, GA
    "Infinite Realities": [-84.2196, 33.8546], // Tucker, GA
    
    // Illinois
    "Atlas Comics": [-87.6298, 41.8781], // Chicago, IL
    "Comics4Less": [-87.9534, 42.3142], // Libertyville, IL
    "Acme Comics": [-89.5890, 40.6936], // Peoria, IL
    
    // Iowa
    "Kanesville Kollectibles": [-95.8655, 41.2614], // Council Bluffs, IA
    
    // Kentucky
    "The Great Escape (Louisville)": [-85.7585, 38.2527], // Louisville, KY
    "The Great Escape (Bowling Green)": [-86.4436, 36.9685], // Bowling Green, KY
    
    // Louisiana
    "Le Coffre Au Tresor": [-90.0715, 29.9511], // New Orleans, LA
    
    // Maryland
    "Third Eye Buys & Bargains": [-76.4922, 38.9784], // Annapolis, MD
    "Beyond Comics": [-77.4105, 39.4143], // Frederick, MD
    
    // Massachusetts
    "Rubber Chicken": [-71.4795, 42.0887], // Bellingham, MA
    "Comics N'More": [-72.6412, 42.2673], // Easthampton, MA
    "His & Hers Comics": [-72.5994, 42.5876], // Greenfield, MA
    "Harrison's Comics": [-70.8967, 42.5195], // Salem, MA
    "The Outer Limits": [-71.2356, 42.3765], // Waltham, MA
    "That's Entertainment": [-71.8023, 42.2626], // Worcester, MA
    "New England Comics": [-71.1311, 42.3513], // Allston, MA
    
    // Michigan
    "Liberty Comics": [-82.9371, 42.4972], // Roseville, MI
    
    // Minnesota
    "Nerdin Out": [-93.0433, 44.8271], // Inver Grove Heights, MN
    "Midway Used & Rare Books": [-93.1670, 44.9537], // St. Paul, MN
    
    // New Hampshire
    "Stairway to Heaven Comics": [-70.8262, 43.0826], // Newington, NH
    "Jetpack Comics": [-70.9758, 43.3010], // Rochester, NH
    "Chris's Comics": [-70.8723, 42.8848], // Seabrook, NH
    
    // New Jersey
    "Main Street Comics": [-74.4360, 40.4502], // Milltown, NJ
    "East Side Mags": [-74.2121, 40.8257], // Montclair, NJ
    "JC Comics": [-74.4371, 40.6179], // North Plainfield, NJ
    "Zapp Comics (Wayne)": [-74.2654, 40.9254], // Wayne, NJ
    "Zapp Comics (Manalapan)": [-74.3282, 40.2896], // Manalapan, NJ
    
    // New York
    "Parlor City Cards & Collectibles": [-75.9180, 42.0987], // Binghamton, NY
    "Midtown Comics": [-73.9871, 40.7552], // Manhattan, NY
    "Koch's Warehouse": [-73.9442, 40.6782], // Brooklyn, NY
    "Pinocchio Collectibles": [-73.9568, 40.6415], // Brooklyn, NY
    "Comic Book Station": [-73.9550, 40.7291], // Greenpoint, Brooklyn, NY
    "CNY Comic Archive": [-75.3721, 43.0673], // Clark Mills, NY
    
    // Pennsylvania
    "Fat Jack's Comicrypt": [-75.1652, 39.9526], // Philadelphia, PA
    "Cyborg One": [-78.9219, 40.3267], // Johnstown, PA
    
    // Tennessee
    "The Great Escape (Nashville)": [-86.7844, 36.1627] // Nashville, TN
  };
  
  // Try to find by exact name
  if (mockData[storeName]) {
    return mockData[storeName];
  }
  
  // If no exact match, return null
  return null;
}