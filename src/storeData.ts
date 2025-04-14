export interface ComicStore {
  name: string;
  state: string;
  url?: string;
  address?: string;
  city?: string;
  phone?: string;
  logoUrl?: string;
  position?: [number, number]; // [longitude, latitude]
  description?: string; // Store description from Michel Fiffe
}

export const comicStores: ComicStore[] = [
  // Canada
  { 
    name: "The Beguiling", 
    state: "Ontario", 
    city: "Toronto", 
    address: "319 College St", 
    url: "https://www.beguiling.com/",
    phone: "(416) 533-9168"
  },
  { 
    name: "Silver Snail", 
    state: "Ontario", 
    city: "Toronto", 
    address: "329 Yonge St", 
    url: "https://www.silversnail.com/",
    phone: "(416) 593-0889"
  },
  { 
    name: "Paradise Comics", 
    state: "Ontario", 
    city: "Toronto", 
    address: "3278 Yonge St", 
    url: "https://paradisecomics.com/",
    phone: "(416) 487-9975"
  },
  { 
    name: "Big B Comics", 
    state: "Ontario", 
    city: "Hamilton", 
    address: "1045 Upper James St", 
    url: "https://www.bigbcomics.com/",
    phone: "(905) 318-9636"
  },
  { 
    name: "Heroes", 
    state: "Ontario", 
    city: "London", 
    address: "186 Dundas St", 
    url: "https://heroescomics.ca/",
    phone: "(519) 439-4955"
  },
  { 
    name: "Comic Hunter", 
    state: "New Brunswick", 
    city: "Moncton", 
    address: "465 Main St", 
    url: "https://www.thecomichunter.com/",
    phone: "(506) 855-4950"
  },
  { 
    name: "Strange Adventures", 
    state: "Nova Scotia", 
    city: "Halifax", 
    address: "5110 Prince St", 
    url: "https://strangeadventures.com/",
    phone: "(902) 425-2140"
  },
  { 
    name: "Golden Age Collectables", 
    state: "British Columbia", 
    city: "Vancouver", 
    address: "852 Granville St", 
    url: "http://www.gacvan.com/",
    phone: "(604) 683-2819"
  },
  { 
    name: "Happy Harbor Comics", 
    state: "Alberta", 
    city: "Edmonton", 
    address: "10729 104 Ave NW", 
    url: "https://www.happyharborcomics.com/",
    phone: "(780) 452-8211"
  },
  // California
  { 
    name: "House of Secrets", 
    state: "California", 
    url: "https://www.artoffiction.com/HouseOfSecrets/",
    address: "1930 W Orangethorpe Ave",
    city: "Burbank",
    phone: "(714) 526-1168",
    position: [-117.9470, 33.8879],
    description: "Has a small back room."
  },
  { 
    name: "Spero's Heroes", 
    state: "California", 
    url: "https://www.instagram.com/sperosheroescomics/",
    city: "Chatsworth",
    description: "Has an entire back room dedicated to it."
  },
  { 
    name: "Pulp Fiction Comics", 
    state: "California", 
    url: "https://pulpfictionculvercity.wordpress.com/",
    address: "4328 Sepulveda Blvd",
    city: "Culver City",
    phone: "(310) 572-6170",
    position: [-118.4065, 34.0259],
    description: "Has a great island of $1 books."
  },
  { 
    name: "Collectors Paradise", 
    state: "California", 
    url: "https://www.comicsandcards.net/",
    address: "7131 Winnetka Ave",
    city: "Pasadena",
    phone: "(818) 999-9455",
    position: [-118.5735, 34.2013],
    description: "Has about a dozen boxes or so dedicated to it."
  },
  { 
    name: "Now Or Never Comics", 
    state: "California", 
    url: "https://www.nowornevercomics.com/",
    address: "1298 E 14th St",
    city: "San Diego",
    phone: "(510) 357-6900",
    position: [-122.1370, 37.7246],
    description: "$2 bins in the shop, ten books for only $15."
  },
  { 
    name: "Southern California Comics", 
    state: "California", 
    url: "https://socalcomics.com/",
    address: "8280 Clairemont Mesa Blvd #124",
    city: "San Diego",
    phone: "(858) 715-8669",
    position: [-117.2056, 32.8383],
    description: "Has a literal ton of dollar bins that take up a large section of the shop."
  },
  
  // Colorado
  { 
    name: "Grand Slam Greeley Sports Cards, Comics, and Games", 
    state: "Colorado",
    city: "Greeley",
    description: "Incredible selection of 80s/90s alternative Comics."
  },
  { 
    name: "Grand Slam Gaming Cards Comics", 
    state: "Colorado",
    city: "Loveland",
    description: "Two stores owned by brothers, one brother loved alternative comics and the other loved super heroes."
  },
  
  // Connecticut
  { 
    name: "Cave Comics", 
    state: "Connecticut", 
    url: "http://cavecomics.com/",
    address: "57 Church Hill Rd",
    city: "Newtown",
    phone: "(203) 426-6632",
    position: [-73.2949, 41.3855],
    description: "Dollar books."
  },
  
  // Florida
  { 
    name: "Tate's Comics", 
    state: "Florida", 
    url: "https://tatescomics.com/",
    address: "4566 N University Dr",
    city: "Lauderhill",
    phone: "(954) 748-0181",
    position: [-80.2514, 26.1537],
    description: "They don't have anything like dollar bins, but they have a pretty robust back issue section."
  },
  { 
    name: "Fallout Comics", 
    state: "Florida",
    city: "Tallahassee",
    description: "Large $1 [$2?] box section."
  },
  
  // Georgia
  { 
    name: "Book Nook", 
    state: "Georgia",
    city: "Decatur",
    description: "3073 N Druid Hills Rd location has $0.99 cent bins refreshed weekly with Annuals, Prestige Formats, squarebounds, and discount trades and hardcovers."
  },
  { 
    name: "Dr. No's Comics & Games", 
    state: "Georgia",
    city: "Marietta"
  },
  { 
    name: "Infinite Realities", 
    state: "Georgia",
    city: "Tucker",
    description: "Relatively new store with quarter bins of reader quality books and dollar bins of overstock single issues. Most stuff from 80s/90s, occasional beat up Bronze age book. Often do buy one get one free on quarter bin books."
  },
  
  // Illinois
  { name: "Atlas Comics", state: "Illinois", city: "Chicago" },
  { name: "Comics4Less", state: "Illinois", city: "Libertyville" },
  { name: "Acme Comics", state: "Illinois", city: "Peoria", description: "Generally reliable 50 cent bins around there; seems to be refreshed semi regularly." },
  
  // Iowa
  { 
    name: "Kanesville Kollectibles", 
    state: "Iowa", 
    url: "https://www.kanesvillekollectibles.com/",
    address: "1000 W Broadway",
    city: "Council Bluffs",
    phone: "(712) 323-1825",
    position: [-95.8655, 41.2614],
    description: "A truly insane store."
  },
  
  // Kentucky
  { 
    name: "The Great Escape (Louisville)", 
    state: "Kentucky",
    city: "Louisville",
    description: "Lot of 80s, 90s, and 00s, scattered newer stuff in 50 cent bins, refreshed pretty regularly."
  },
  { 
    name: "The Great Escape (Bowling Green)", 
    state: "Kentucky",
    city: "Bowling Green"
  },
  
  // Louisiana
  { 
    name: "Le Coffre Au Tresor", 
    state: "Louisiana",
    city: "New Orleans",
    description: "Vintage store with tons of dollar comics from all eras and reasonably priced back issues. Prices may have increased since 2020."
  },
  
  // Maryland
  { 
    name: "Third Eye Buys & Bargains", 
    state: "Maryland",
    city: "Annapolis"
  },
  { 
    name: "Beyond Comics", 
    state: "Maryland",
    city: "Frederick"
  },
  
  // Massachusetts
  { name: "Rubber Chicken", state: "Massachusetts", city: "Bellingham" },
  { name: "Comics N'More", state: "Massachusetts", city: "Easthampton", description: "Fantastic store, healthy bins." },
  { name: "His & Hers Comics", state: "Massachusetts", city: "Greenfield", description: "Quarter bins filled with all sorts of 80s and 90s stuff." },
  { name: "Harrison's Comics", state: "Massachusetts", city: "Salem" },
  { name: "The Outer Limits", state: "Massachusetts", city: "Waltham" },
  { name: "That's Entertainment", state: "Massachusetts", city: "Worcester" },
  { 
    name: "New England Comics", 
    state: "Massachusetts", 
    address: "131 Harvard Ave",
    city: "Allston",
    phone: "(617) 566-0115",
    position: [-71.1311, 42.3513]
  },
  
  // Michigan
  { name: "Liberty Comics", state: "Michigan", city: "Roseville", description: "Dollar books, good selection of standard back issues." },
  
  // Minnesota
  { name: "Nerdin Out", state: "Minnesota", city: "Inver Grove Heights", description: "Has a bunch of dollar bins with bag-filling deal." },
  { name: "Midway Used & Rare Books", state: "Minnesota", city: "St. Paul", description: "Big bins of comics and magazines in the basement for $1-$2." },
  
  // New Hampshire
  { name: "Stairway to Heaven Comics", state: "New Hampshire", city: "Newington", description: "'Dollar Dungeon' with wide $1 selection." },
  { name: "Jetpack Comics", state: "New Hampshire", city: "Rochester", description: "'Sale Room' with $2 Marvel/DC and $1 indie books." },
  { name: "Chris's Comics", state: "New Hampshire", city: "Seabrook", description: "50¢ bins with regular turnover." },
  
  // New Jersey
  { name: "Main Street Comics", state: "New Jersey", city: "Milltown", description: "Quarter bins, dollar books." },
  { name: "East Side Mags", state: "New Jersey", city: "Montclair" },
  { name: "JC Comics", state: "New Jersey", city: "North Plainfield", description: "50 cent bins." },
  { name: "Zapp Comics (Wayne)", state: "New Jersey", city: "Wayne" },
  { name: "Zapp Comics (Manalapan)", state: "New Jersey", city: "Manalapan" },
  
  // New York
  { name: "Parlor City Cards & Collectibles", state: "New York", city: "Binghamton" },
  { 
    name: "Midtown Comics", 
    state: "New York", 
    address: "200 W 40th St",
    city: "New York",
    phone: "(212) 302-8192",
    position: [-73.9871, 40.7552]
  },
  { name: "Koch's Warehouse", state: "New York", city: "Brooklyn" },
  { name: "Pinocchio Collectibles", state: "New York", city: "Brooklyn" },
  { name: "Comic Book Station", state: "New York", city: "Brooklyn", address: "Greenpoint" },
  { name: "CNY Comic Archive", state: "New York", city: "Clark Mills" },
  
  // Pennsylvania
  { name: "Fat Jack's Comicrypt", state: "Pennsylvania", city: "Philadelphia" },
  { name: "Cyborg One", state: "Pennsylvania", city: "Johnstown" },
  
  // Tennessee
  { name: "The Great Escape (Nashville)", state: "Tennessee", city: "Nashville" }
];