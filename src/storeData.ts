export interface ComicStore {
  name: string;
  country: string;
  state?: string; // US state, Canadian province, or regional identifier
  url?: string;
  address?: string;
  city?: string;
  phone?: string;
  logoUrl?: string;
  position?: [number, number]; // [longitude, latitude]
  description?: string;
}

export const comicStores: ComicStore[] = [
  // ============================================
  // UNITED STATES - From Michel Fiffe's Bin Diving Megalist
  // ============================================
  
  // Alabama
  {
    name: "The Deep Comics, Games & Toys",
    country: "USA",
    state: "Alabama",
    city: "Huntsville",
    url: "https://thedeepcomics.com/",
    position: [-86.5861, 34.7304],
    description: "Massive store with ~75 bins of $1 or less comics. Over 100 organized longboxes of back issues."
  },

  // Arizona
  {
    name: "Champion Comics",
    country: "USA",
    state: "Arizona",
    city: "Phoenix",
    position: [-112.0740, 33.4484]
  },

  // California
  {
    name: "House of Secrets",
    country: "USA",
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
    country: "USA",
    state: "California",
    url: "https://www.instagram.com/sperosheroescomics/",
    city: "Chatsworth",
    position: [-118.6059, 34.2572],
    description: "Has an entire back room dedicated to it."
  },
  {
    name: "Pulp Fiction Comics",
    country: "USA",
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
    country: "USA",
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
    country: "USA",
    state: "California",
    url: "https://www.nowornevercomics.com/",
    city: "San Diego",
    position: [-117.1611, 32.7157],
    description: "$2 bins in the shop, ten books for only $15."
  },
  // NOTE: Southern California Comics (San Diego) removed - permanently closed per Fiffe

  // Colorado
  {
    name: "Grand Slam Greeley Sports Cards, Comics, and Games",
    country: "USA",
    state: "Colorado",
    city: "Greeley",
    position: [-104.7091, 40.4233],
    description: "Incredible selection of 80s/90s alternative Comics. Alt comics location."
  },
  {
    name: "Grand Slam Gaming Cards Comics",
    country: "USA",
    state: "Colorado",
    city: "Loveland",
    position: [-105.0750, 40.3978],
    description: "Two stores owned by brothers. This is the super hero location."
  },

  // Connecticut
  {
    name: "Cave Comics",
    country: "USA",
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
    country: "USA",
    state: "Florida",
    url: "https://tatescomics.com/",
    address: "4566 N University Dr",
    city: "Lauderhill",
    phone: "(954) 748-0181",
    position: [-80.2514, 26.1537],
    description: "Robust back issue section with affordable rarities. An impressive emporium."
  },
  {
    name: "Fallout Comics",
    country: "USA",
    state: "Florida",
    city: "Tallahassee",
    position: [-84.2807, 30.4383],
    description: "Large $1 box section."
  },

  // Georgia
  {
    name: "Book Nook",
    country: "USA",
    state: "Georgia",
    city: "Decatur",
    address: "3073 N Druid Hills Rd",
    position: [-84.3133, 33.8168],
    description: "$0.99 cent bins refreshed weekly with Annuals, Prestige Formats, squarebounds, and discount trades."
  },
  {
    name: "Dr. No's Comics & Games",
    country: "USA",
    state: "Georgia",
    city: "Marietta",
    position: [-84.5499, 33.9526]
  },
  {
    name: "Infinite Realities",
    country: "USA",
    state: "Georgia",
    city: "Tucker",
    position: [-84.2171, 33.8554],
    description: "Quarter bins with reader quality books and dollar bins with overstock. Often do BOGO on quarter bins."
  },

  // Illinois
  {
    name: "Atlas Comics",
    country: "USA",
    state: "Illinois",
    city: "Chicago",
    position: [-87.6298, 41.8781]
  },
  {
    name: "Comics4Less",
    country: "USA",
    state: "Illinois",
    city: "Libertyville",
    position: [-87.9531, 42.2831]
  },
  {
    name: "Acme Comics",
    country: "USA",
    state: "Illinois",
    city: "Peoria",
    position: [-89.5890, 40.6936],
    description: "Generally reliable 50 cent bins; refreshed semi regularly."
  },

  // Iowa
  {
    name: "Kanesville Kollectibles",
    country: "USA",
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
    country: "USA",
    state: "Kentucky",
    city: "Louisville",
    position: [-85.7585, 38.2527],
    description: "Lot of 80s, 90s, and 00s, scattered newer stuff in 50 cent bins, refreshed pretty regularly."
  },
  {
    name: "The Great Escape (Bowling Green)",
    country: "USA",
    state: "Kentucky",
    city: "Bowling Green",
    position: [-86.4436, 36.9685]
  },

  // Louisiana
  {
    name: "Le Coffre Au Tresor",
    country: "USA",
    state: "Louisiana",
    city: "New Orleans",
    position: [-90.0715, 29.9511],
    description: "Vintage store in the French Quarter with dollar comics from all eras. Ask to see the longboxes not on display."
  },

  // Maryland
  {
    name: "Third Eye Buys & Bargains",
    country: "USA",
    state: "Maryland",
    city: "Annapolis",
    position: [-76.4922, 38.9784],
    description: "Outlet sidekick store to the well-stocked Third Eye Comics."
  },
  {
    name: "Beyond Comics",
    country: "USA",
    state: "Maryland",
    city: "Frederick",
    position: [-77.4105, 39.4143],
    description: "Good variety, cheap sets a plus."
  },
  {
    name: "Wonder Book",
    country: "USA",
    state: "Maryland",
    city: "Frederick",
    position: [-77.4105, 39.4143],
    description: "Used bookstore with a lot of old comic books."
  },
  {
    name: "Barbarian Comics",
    country: "USA",
    state: "Maryland",
    city: "Wheaton",
    position: [-77.0536, 39.0399],
    description: "Back issue bins. Worth visiting if in town for SPX."
  },

  // Massachusetts
  {
    name: "Rubber Chicken",
    country: "USA",
    state: "Massachusetts",
    city: "Bellingham",
    position: [-71.4745, 42.0868]
  },
  {
    name: "Comics N'More",
    country: "USA",
    state: "Massachusetts",
    city: "Easthampton",
    position: [-72.6687, 42.2670],
    description: "Fantastic store, healthy bins."
  },
  {
    name: "His & Hers Comics",
    country: "USA",
    state: "Massachusetts",
    city: "Greenfield",
    position: [-72.5995, 42.5876],
    description: "Dollar bins filled with all sorts of 80s and 90s stuff."
  },
  {
    name: "Harrison's Comics",
    country: "USA",
    state: "Massachusetts",
    city: "Salem",
    position: [-70.8967, 42.5195]
  },
  {
    name: "Zombie Hideout",
    country: "USA",
    state: "Massachusetts",
    city: "Springfield",
    position: [-72.5898, 42.1015],
    description: "100+ long boxes @ $1, 50+ @ 50¢. Periodic 50% off sales."
  },
  {
    name: "The Outer Limits",
    country: "USA",
    state: "Massachusetts",
    city: "Waltham",
    position: [-71.2356, 42.3765],
    description: "Best comic book store in Mass. Great euro/alt comics selection."
  },
  {
    name: "That's Entertainment",
    country: "USA",
    state: "Massachusetts",
    city: "Worcester",
    position: [-71.8023, 42.2626]
  },
  {
    name: "New England Comics",
    country: "USA",
    state: "Massachusetts",
    address: "131 Harvard Ave",
    city: "Allston",
    phone: "(617) 566-0115",
    position: [-71.1311, 42.3513],
    description: "Five locations throughout Massachusetts."
  },

  // Michigan
  {
    name: "Time Travelers",
    country: "USA",
    state: "Michigan",
    city: "Berkley",
    position: [-83.1835, 42.5031]
  },
  {
    name: "Liberty Comics",
    country: "USA",
    state: "Michigan",
    city: "Roseville",
    position: [-82.9371, 42.4973],
    description: "Dollar books, good selection of standard back issues."
  },

  // Minnesota
  {
    name: "Nerdin Out",
    country: "USA",
    state: "Minnesota",
    city: "Inver Grove Heights",
    position: [-93.0427, 44.8480],
    description: "Dollar bins with bag-filling deal - fill a paper bag for $10 (~20 books)."
  },
  {
    name: "Midway Used & Rare Books",
    country: "USA",
    state: "Minnesota",
    city: "St. Paul",
    position: [-93.0900, 44.9537],
    description: "Big bins of comics and magazines in the basement for $1-$2."
  },

  // Nevada
  {
    name: "Alternate Reality Comics",
    country: "USA",
    state: "Nevada",
    city: "Las Vegas",
    position: [-115.1398, 36.1699]
  },

  // New Hampshire
  {
    name: "Stairway to Heaven Comics",
    country: "USA",
    state: "New Hampshire",
    city: "Newington",
    position: [-70.8323, 43.0998],
    description: "'Dollar Dungeon' with wide $1 selection; skews post-2000 but also older indie books."
  },
  {
    name: "Jetpack Comics",
    country: "USA",
    state: "New Hampshire",
    city: "Rochester",
    position: [-70.9756, 43.3045],
    description: "'Sale Room' with $2 Marvel/DC and $1 indies. Can pull gems like Kirby Kamandis."
  },
  {
    name: "Chris's Comics",
    country: "USA",
    state: "New Hampshire",
    city: "Seabrook",
    position: [-70.8712, 42.8959],
    description: "50¢ bins with regular turnover and huge selection."
  },

  // New Jersey
  {
    name: "Main Street Comics",
    country: "USA",
    state: "New Jersey",
    city: "Milltown",
    position: [-74.4382, 40.4501],
    description: "Quarter bins, dollar books."
  },
  {
    name: "East Side Mags",
    country: "USA",
    state: "New Jersey",
    city: "Montclair",
    position: [-74.2090, 40.8259]
  },
  {
    name: "JC Comics",
    country: "USA",
    state: "New Jersey",
    city: "North Plainfield",
    position: [-74.4274, 40.6340],
    description: "50 cent bins."
  },
  {
    name: "Zapp Comics (Wayne)",
    country: "USA",
    state: "New Jersey",
    city: "Wayne",
    position: [-74.2446, 40.9493]
  },
  {
    name: "Zapp Comics (Manalapan)",
    country: "USA",
    state: "New Jersey",
    city: "Manalapan",
    position: [-74.3487, 40.2868]
  },

  // New York
  {
    name: "Parlor City Cards & Collectibles",
    country: "USA",
    state: "New York",
    city: "Binghamton",
    position: [-75.9180, 42.0987],
    description: "Modest back issue section in a trading card / video game store. Most comics around $1."
  },
  {
    name: "Comic Book Station",
    country: "USA",
    state: "New York",
    city: "Brooklyn",
    address: "Greenpoint",
    position: [-73.9542, 40.7282],
    description: "Solid dollar bins plus sets, magazines, and CGC. Vendor-turned-storefront vibe."
  },
  {
    name: "Early Bird Comix",
    country: "USA",
    state: "New York",
    city: "Brooklyn",
    position: [-73.9654, 40.6782],
    description: "Smallest comic shop in NYC. Two longboxes of dollar comics. DM to arrange visit."
  },
  {
    name: "NY Comics",
    country: "USA",
    state: "New York",
    city: "Brooklyn",
    address: "Bay Ridge",
    position: [-74.0281, 40.6340],
    description: "Small shop with $2 bins plus fairly priced organized regular bins."
  },
  {
    name: "Pinocchio Collectibles",
    country: "USA",
    state: "New York",
    city: "Brooklyn",
    position: [-73.9442, 40.6782],
    description: "Time capsule. Old school spot run by a Russian couple. Where trading cards go to die."
  },
  {
    name: "Slope Comics",
    country: "USA",
    state: "New York",
    city: "Brooklyn",
    address: "Park Slope",
    position: [-73.9772, 40.6681],
    description: "Downstairs has dollar boxes, mostly 90s."
  },
  {
    name: "CNY Comic Archive",
    country: "USA",
    state: "New York",
    city: "Clark Mills",
    position: [-75.3779, 43.0884],
    description: "Stock perpetually 50% off. Select hours, usually every other Saturday. Worth the drive."
  },
  {
    name: "Heroes Your Mom Threw Out",
    country: "USA",
    state: "New York",
    city: "Elmira",
    position: [-76.8078, 42.0898],
    description: "Hole in the wall in the middle of nowhere. Charming and packed to the brim."
  },
  {
    name: "Geneva Antique Co-op",
    country: "USA",
    state: "New York",
    city: "Geneva",
    position: [-76.9977, 42.8690],
    description: "Basement full of dollar comics. Main floor has older back issues for good prices."
  },
  {
    name: "Fat Cat Comics",
    country: "USA",
    state: "New York",
    city: "Johnson City",
    position: [-75.9563, 42.1156],
    description: "About a dozen dollar bins plus magazines & treasuries. Also new comics, toys, games."
  },
  {
    name: "Book Off",
    country: "USA",
    state: "New York",
    city: "New York",
    address: "Midtown",
    position: [-73.9857, 40.7484],
    description: "Handful of short boxes, mostly 90s-new. TPBs/Music/toys/DVDs too."
  },
  {
    name: "Midtown Comics (Times Square)",
    country: "USA",
    state: "New York",
    address: "200 W 40th St",
    city: "New York",
    phone: "(212) 302-8192",
    position: [-73.9871, 40.7552],
    description: "A few bins at all locations."
  },
  {
    name: "Alex's MVP Cards and Comics",
    country: "USA",
    state: "New York",
    city: "New York",
    position: [-73.9857, 40.7484],
    description: "Dozen short boxes at the front of the store."
  },
  {
    name: "October Country",
    country: "USA",
    state: "New York",
    city: "New Paltz",
    position: [-74.0868, 41.7476],
    description: "Dollar books, constant half-off sales."
  },
  {
    name: "Midtown Comics Astoria",
    country: "USA",
    state: "New York",
    city: "Queens",
    position: [-73.9262, 40.7644],
    description: "Discounted trades and basement full of dollar comics. Largely post-aughts material."
  },
  {
    name: "JHU Comic Books",
    country: "USA",
    state: "New York",
    city: "Staten Island",
    position: [-74.1502, 40.5795],
    description: "Dollar bins. About 40 short boxes of indie only comics."
  },
  {
    name: "Sound Go Round",
    country: "USA",
    state: "New York",
    city: "Vestal",
    position: [-76.0541, 42.0848],
    description: "Toys, vinyl, video games, movies. 'Buy 2, get 3rd Free' deal. Comics for $1-$1.50."
  },

  // North Carolina
  {
    name: "Books Do Furnish A Room",
    country: "USA",
    state: "North Carolina",
    city: "Durham",
    position: [-78.8986, 35.9940],
    description: "Random bins for fairly cheap."
  },
  {
    name: "Mtn. View Antiques",
    country: "USA",
    state: "North Carolina",
    city: "Gastonia",
    position: [-81.1873, 35.2621],
    description: "Just west of Charlotte - amazing $1 bin selection restocked weekly."
  },
  {
    name: "Time Tunnel Comics & Toys",
    country: "USA",
    state: "North Carolina",
    city: "Hickory",
    position: [-81.3412, 35.7331],
    description: "Solid bins full of randomness, ripe with 90s."
  },
  {
    name: "Nice Price Books",
    country: "USA",
    state: "North Carolina",
    city: "Raleigh",
    position: [-78.6382, 35.7796],
    description: "Dollar comics with tons of discounted collections, OGNs, magazines. Mainstream & indie."
  },
  {
    name: "Reader's Corner",
    country: "USA",
    state: "North Carolina",
    city: "Raleigh",
    position: [-78.6382, 35.7796],
    description: "Good random selection similar to Books Do Furnish A Room."
  },
  {
    name: "Fanboy Comics",
    country: "USA",
    state: "North Carolina",
    city: "Wilmington",
    position: [-77.9447, 34.2257],
    description: "Tons of dollar comics, mostly 90s to new-ish. Discounted trades plus sets and new comics."
  },
  {
    name: "Memory Lane Comics Part II",
    country: "USA",
    state: "North Carolina",
    city: "Wilmington",
    position: [-77.9447, 34.2257],
    description: "Dozen dollar bins and tons of reasonably priced back issues, sets, magazines, vintage toys."
  },

  // Ohio
  {
    name: "Hobbys, Inc",
    country: "USA",
    state: "Ohio",
    city: "Bridgeport",
    position: [-80.7490, 40.0695],
    description: "Great back issue bins and discount trades."
  },
  {
    name: "Bell's Books",
    country: "USA",
    state: "Ohio",
    city: "Dayton",
    position: [-84.1916, 39.7589]
  },
  {
    name: "Bonnett's",
    country: "USA",
    state: "Ohio",
    city: "Dayton",
    position: [-84.1916, 39.7589],
    description: "Proto-comic shop open since at least the 30s."
  },

  // Oregon
  {
    name: "Bingo Used Books",
    country: "USA",
    state: "Oregon",
    city: "Portland",
    position: [-122.6765, 45.5152],
    description: "Good, varied selection."
  },
  {
    name: "Cosmic Monkey Comics",
    country: "USA",
    state: "Oregon",
    city: "Portland",
    position: [-122.6765, 45.5152],
    description: "Great back issues and $5 trades. Frequent 50% off sales. Best selection in Portland."
  },
  {
    name: "Excalibur Comics",
    country: "USA",
    state: "Oregon",
    city: "Portland",
    position: [-122.6765, 45.5152],
    description: "35+ years old with true gems. Prices range but good for filling gaps."
  },

  // Pennsylvania
  {
    name: "The Encounter: Comics & Games",
    country: "USA",
    state: "Pennsylvania",
    city: "Allentown",
    position: [-75.4714, 40.6084],
    description: "Huge selection of dollar bins."
  },
  {
    name: "JAF Comics",
    country: "USA",
    state: "Pennsylvania",
    city: "Bethlehem",
    position: [-75.3705, 40.6259],
    description: "Always replenish their dollar bins."
  },
  {
    name: "New Dimension Comics (Ellwood City)",
    country: "USA",
    state: "Pennsylvania",
    city: "Ellwood City",
    position: [-80.2884, 40.8617],
    description: "Organized dollar issues plus Saturday warehouse (semi-organized by company/character)."
  },
  {
    name: "Eide's Entertainment",
    country: "USA",
    state: "Pennsylvania",
    city: "Pittsburgh",
    url: "https://www.eides.com/",
    position: [-79.9959, 40.4406],
    description: "First floor mostly dollar bins, basement is cheap back issues. Very close to downtown."
  },
  {
    name: "Fat Jack's Comicrypt",
    country: "USA",
    state: "Pennsylvania",
    city: "Philadelphia",
    position: [-75.1652, 39.9526]
  },
  // NOTE: Captain Blue Hen (Lancaster) removed - permanently closed per Fiffe

  // Rhode Island
  {
    name: "The Time Capsule",
    country: "USA",
    state: "Rhode Island",
    city: "Cranston",
    position: [-71.4372, 41.7798],
    description: "Occasional blowout sales. Bargain Outlet in Old Mill Flea Market. Call to confirm."
  },

  // Tennessee
  {
    name: "Towne Square Records and Comics",
    country: "USA",
    state: "Tennessee",
    city: "Gallatin",
    position: [-86.4475, 36.3884],
    description: "NE of Nashville but worth the drive. Split between vinyl and comics. Huge selection. Dollar bins on floor."
  },
  {
    name: "901 Comics",
    country: "USA",
    state: "Tennessee",
    city: "Memphis",
    position: [-90.0490, 35.1495],
    description: "Back room full of semi-alphabetized 50 cent comics. Mostly 80s-00s."
  },
  {
    name: "The Great Escape (Nashville)",
    country: "USA",
    state: "Tennessee",
    city: "Nashville",
    position: [-86.7816, 36.1627],
    description: "Huge magnitude of organized stuff. Not just comics but magazines, toys, vinyl. $0.49 stickers."
  },
  {
    name: "The Great Escape (Madison)",
    country: "USA",
    state: "Tennessee",
    city: "Madison",
    position: [-86.7186, 36.2570]
  },
  {
    name: "The Great Escape (Murfreesboro)",
    country: "USA",
    state: "Tennessee",
    city: "Murfreesboro",
    position: [-86.3900, 35.8456]
  },
  {
    name: "McKay's (Nashville)",
    country: "USA",
    state: "Tennessee",
    city: "Nashville",
    position: [-86.7816, 36.1627],
    description: "Huge store with quarter bins on top floor. Back issues roughly under $2."
  },
  {
    name: "McKay's (Chattanooga)",
    country: "USA",
    state: "Tennessee",
    city: "Chattanooga",
    position: [-85.3097, 35.0456]
  },

  // Texas
  {
    name: "Star Comics",
    country: "USA",
    state: "Texas",
    city: "Lubbock",
    position: [-101.8552, 33.5779],
    description: "Good selection of late 80s to mid-90s dollar books. They put together runs for cheap."
  },

  // Virginia
  {
    name: "McKay Used Books",
    country: "USA",
    state: "Virginia",
    city: "Manassas",
    position: [-77.4753, 38.7509],
    description: "50 cent comics. Not to be confused with McKay's (Tennessee)."
  },
  {
    name: "Cerebral Vortex",
    country: "USA",
    state: "Virginia",
    city: "Richmond",
    position: [-77.4360, 37.5407],
    description: "A modern gem in Regency Mall. Vast selection, unbeatable prices. Highest recommendation."
  },
  {
    name: "Velocity Comics",
    country: "USA",
    state: "Virginia",
    city: "Richmond",
    url: "https://velocitycomics.com/",
    position: [-77.4360, 37.5407],
    description: "Huge, awesome, well-stocked store with around ten long boxes of dollar books."
  },

  // Washington
  {
    name: "Destiny City Comics",
    country: "USA",
    state: "Washington",
    city: "Tacoma",
    position: [-122.4443, 47.2529],
    description: "Zine section, large overstock, back issues, quarter and dime bins."
  },

  // Wisconsin
  {
    name: "Claremont Comics",
    country: "USA",
    state: "Wisconsin",
    city: "Eau Claire",
    position: [-91.4985, 44.8113],
    description: "Twice a year runs a month-long dollar book blitz on majority of back issues."
  },
  {
    name: "Powers Comics",
    country: "USA",
    state: "Wisconsin",
    city: "Green Bay",
    position: [-88.0198, 44.5133]
  },
  {
    name: "Lost World of Wonders",
    country: "USA",
    state: "Wisconsin",
    city: "Milwaukee",
    position: [-87.9065, 43.0389]
  },
  {
    name: "House of Heroes",
    country: "USA",
    state: "Wisconsin",
    city: "Oshkosh",
    position: [-88.5426, 44.0247]
  },
  {
    name: "Vortex Comics",
    country: "USA",
    state: "Wisconsin",
    city: "West Allis",
    position: [-88.0070, 43.0167]
  },

  // ============================================
  // CANADA - From Fiffe's list + existing data
  // ============================================

  {
    name: "The Beguiling",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    address: "319 College St",
    url: "https://www.beguiling.com/",
    phone: "(416) 533-9168",
    position: [-79.4066, 43.6577],
    description: "Excellent store. Varied back issue section for great prices."
  },
  {
    name: "Silver Snail",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    address: "329 Yonge St",
    url: "https://www.silversnail.com/",
    phone: "(416) 593-0889",
    position: [-79.3806, 43.6590]
  },
  {
    name: "Paradise Comics",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    address: "3278 Yonge St",
    url: "https://paradisecomics.com/",
    phone: "(416) 487-9975",
    position: [-79.4000, 43.7289]
  },
  {
    name: "Big B Comics",
    country: "Canada",
    state: "Ontario",
    city: "Hamilton",
    address: "1045 Upper James St",
    url: "https://www.bigbcomics.com/",
    phone: "(905) 318-9636",
    position: [-79.8711, 43.2387]
  },
  {
    name: "Heroes",
    country: "Canada",
    state: "Ontario",
    city: "London",
    address: "186 Dundas St",
    url: "https://heroescomics.ca/",
    phone: "(519) 439-4955",
    position: [-81.2497, 42.9849]
  },
  {
    name: "Hagaland Comic Book Warehouse",
    country: "Canada",
    state: "Ontario",
    city: "Kitchener",
    position: [-80.4823, 43.4516]
  },
  {
    name: "Comic Book Addiction",
    country: "Canada",
    state: "Ontario",
    city: "Whitby",
    position: [-78.9420, 43.8975]
  },
  {
    name: "Comic Hunter",
    country: "Canada",
    state: "Quebec",
    city: "Montreal",
    position: [-73.5673, 45.5017],
    description: "One of the best back issue selections in Canada. Hundreds of thousands of comics including huge $1/$2 bins."
  },
  {
    name: "Strange Adventures",
    country: "Canada",
    state: "Nova Scotia",
    city: "Halifax",
    address: "5110 Prince St",
    url: "https://strangeadventures.com/",
    phone: "(902) 425-2140",
    position: [-63.5752, 44.6488],
    description: "Awesome shop with several store locations."
  },
  {
    name: "Golden Age Collectables",
    country: "Canada",
    state: "British Columbia",
    city: "Vancouver",
    address: "852 Granville St",
    url: "http://www.gacvan.com/",
    phone: "(604) 683-2819",
    position: [-123.1207, 49.2827]
  },
  {
    name: "Happy Harbor Comics",
    country: "Canada",
    state: "Alberta",
    city: "Edmonton",
    address: "10729 104 Ave NW",
    url: "https://www.happyharborcomics.com/",
    phone: "(780) 452-8211",
    position: [-113.4909, 53.5461]
  },

  // ============================================
  // UNITED KINGDOM
  // ============================================

  {
    name: "GOSH! Comics",
    country: "United Kingdom",
    state: "England",
    city: "London",
    address: "1 Berwick Street",
    url: "https://www.goshlondon.com/",
    position: [-0.1340, 51.5138],
    description: "Big stock of back issues in the basement. Lovely staff. Gold standard for London."
  },
  {
    name: "Krypton Komics",
    country: "United Kingdom",
    state: "England",
    city: "London",
    address: "94 Blackhorse Lane, Walthamstow",
    url: "https://www.kryptoncomicsonline.com/",
    phone: "0208 527 7558",
    position: [-0.0410, 51.5858],
    description: "Treasure trove of back issues. Off beaten path but accessible via Elizabeth Line. Call ahead for hours."
  },
  {
    name: "Notting Hill Comic Exchange",
    country: "United Kingdom",
    state: "England",
    city: "London",
    address: "32 Pembridge Road",
    position: [-0.1972, 51.5105],
    description: "Well-curated stock in cosy shop. Loads of cheap bins plus pricy rarities. Great browsing."
  },
  {
    name: "Mega City Comics",
    country: "United Kingdom",
    state: "England",
    city: "London",
    address: "8 Great Newport Street",
    position: [-0.1286, 51.5126],
    description: "Loads of back issues kept alphabetically by company. Helpful notes. Great staff."
  },
  {
    name: "Orbital Comics",
    country: "United Kingdom",
    state: "England",
    city: "London",
    address: "8 Great Newport Street",
    url: "https://www.orbitalcomics.com/",
    position: [-0.1286, 51.5126],
    description: "Gallery space with comics exhibitions. Good back issue selection."
  },
  {
    name: "Forbidden Planet (Manchester)",
    country: "United Kingdom",
    state: "England",
    city: "Manchester",
    address: "65-67 Oldham St",
    url: "https://forbiddenplanet.co.uk/our-stores/manchester/",
    phone: "0161 839 4777",
    position: [-2.2363, 53.4831],
    description: "Downstairs cavern full of collectibles. Loads of 90s comics cheap."
  },
  {
    name: "Second City Comics",
    country: "United Kingdom",
    state: "England",
    city: "Birmingham",
    address: "Red Brick Market, Floodgate Street",
    url: "https://secondcitycomics.sumupstore.com/",
    position: [-1.8904, 52.4862],
    description: "Tens of thousands of back issues. Also at Bedworth Covered Market for Bronze/Silver age."
  },
  {
    name: "City Centre Comics",
    country: "United Kingdom",
    state: "Scotland",
    city: "Glasgow",
    address: "37 Ruthven Lane",
    phone: "+44 141 357 6325",
    position: [-4.2872, 55.8724],
    description: "Specialist back issue shop since 1992. Glasgow's best Silver/Bronze age dealer."
  },
  {
    name: "Forbidden Planet (Glasgow)",
    country: "United Kingdom",
    state: "Scotland",
    city: "Glasgow",
    url: "https://forbiddenplanet.co.uk/",
    position: [-4.2518, 55.8642],
    description: "Carries back issues unlike most Forbidden Planet locations."
  },
  {
    name: "Deadhead Comics",
    country: "United Kingdom",
    state: "Scotland",
    city: "Edinburgh",
    address: "30 West Nicolson Street",
    url: "https://www.deadheadcomics.co.uk/",
    position: [-3.1836, 55.9445],
    description: "Local, indie, mainstream and independent comics at great prices."
  },

  // Ireland
  {
    name: "Sub-City Comics",
    country: "Ireland",
    city: "Dublin",
    address: "53 Mary Street",
    url: "https://www.subcitycomics.ie/",
    phone: "(01) 872 8610",
    position: [-6.2673, 53.3498],
    description: "Europe's largest selection of back issues with over 150,000 titles."
  },
  {
    name: "Dublin City Comics",
    country: "Ireland",
    city: "Dublin",
    address: "Capel St",
    position: [-6.2673, 53.3498],
    description: "Long boxes in center of shop. Good for older issues."
  },
  {
    name: "Big Bang Comics",
    country: "Ireland",
    city: "Dublin",
    address: "Dundrum",
    position: [-6.2445, 53.2887]
  },

  // ============================================
  // EUROPE
  // ============================================

  // France
  {
    name: "Le Cube à Comics",
    country: "France",
    city: "Paris",
    address: "Marché Dauphine, Saint-Ouen-sur-Seine",
    url: "https://www.lecubeacomics.com/",
    position: [2.3386, 48.9005],
    description: "Specialist in vintage US comics: Silver, Bronze, Copper Age. CGC authorized dealer."
  },
  {
    name: "Album Comics",
    country: "France",
    city: "Paris",
    url: "https://albumcomics.com/",
    position: [2.3522, 48.8566],
    description: "Wide selection of Franco-Belgian and American comics."
  },

  // Germany
  {
    name: "Sammlerecke",
    country: "Germany",
    city: "Stuttgart",
    url: "https://www.sammlerecke.de/",
    position: [9.1829, 48.7758],
    description: "Germany's largest comic and magazine dealer. Huge antiquarian catalogue."
  },
  {
    name: "Comic-Laden Kollektiv",
    country: "Germany",
    city: "Hamburg",
    address: "Fruchtallee 130",
    url: "https://www.comicladen-kollektiv.de/",
    phone: "040 407781",
    position: [9.9537, 53.5753],
    description: "Around 100,000 older comics and magazines from last 80 years. Massive antiquariat."
  },
  {
    name: "Grober Unfug",
    country: "Germany",
    city: "Berlin",
    url: "https://www.groberunfug.de/",
    position: [13.4050, 52.5200],
    description: "Berlin institution. Good selection of back issues and indie comics."
  },

  // Netherlands
  {
    name: "Henk Comics",
    country: "Netherlands",
    city: "Amsterdam",
    address: "Nieuwmarkt",
    position: [4.9000, 52.3728],
    description: "Largest Amsterdam comic shop. Massive selection of new, old, and reissued US/EU comics across two floors."
  },
  {
    name: "Lambiek",
    country: "Netherlands",
    city: "Amsterdam",
    address: "Nieuwmarkt",
    url: "https://www.lambiek.net/",
    position: [4.9005, 52.3720],
    description: "Established 1968. First Europeans to take underground comics seriously. Hosts workshops and exhibitions."
  },
  {
    name: "The American Book Center",
    country: "Netherlands",
    city: "Amsterdam",
    url: "https://abc.nl/",
    position: [4.8897, 52.3702],
    description: "Great selection of graphic novels and some back issues."
  },

  // Belgium
  {
    name: "Multi BD",
    country: "Belgium",
    city: "Brussels",
    address: "Boulevard Anspach",
    url: "https://www.multibd.com/",
    position: [4.3499, 50.8484],
    description: "Excellent selection of Franco-Belgian and American comics."
  },
  {
    name: "Brüsel",
    country: "Belgium",
    city: "Brussels",
    url: "https://www.brusel.com/",
    position: [4.3572, 50.8476],
    description: "Named after Schuiten's comic. Specializes in BD and European comics."
  },

  // Spain
  {
    name: "Norma Comics",
    country: "Spain",
    city: "Barcelona",
    address: "Passeig de Sant Joan",
    url: "https://www.normaeditorial.com/",
    position: [2.1734, 41.3954],
    description: "Large selection of Spanish and international comics."
  },

  // Italy
  {
    name: "Fumetteria Alastor",
    country: "Italy",
    city: "Rome",
    url: "https://www.fumetteriaalastor.it/",
    position: [12.4964, 41.9028],
    description: "Wide selection of Italian and American comics. Good for back issues."
  },

  // ============================================
  // AUSTRALIA
  // ============================================

  {
    name: "Comics 'R' Us (Windsor)",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    address: "114 Chapel Street, Windsor",
    url: "https://comicsrus.com.au/",
    phone: "0431 919 209",
    position: [144.9941, -37.8566],
    description: "Back issues dating from the 1960s. Established 1992 on iconic Chapel Street."
  },
  {
    name: "Collectors Edge",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    address: "Moonee Ponds",
    position: [144.9213, -37.7679],
    description: "Biggest back issue selection in Melbourne. Decent prices on 2nd hand trades."
  },
  {
    name: "All Star Comics",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    url: "https://allstarcomics.com.au/",
    position: [144.9631, -37.8136],
    description: "Eisner award winner 2014 for world's best comic store. Secondhand racks, 60s-80s toys."
  },
  {
    name: "Comics 'R' Us (CBD)",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    address: "Bourke Street",
    position: [144.9631, -37.8136],
    description: "New York feel with walls of figures and deep racks of back issues."
  },
  {
    name: "Impact Comics",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    address: "Bayswater",
    position: [145.2640, -37.8421],
    description: "Drawers full of back issues. Huge online store. Five minutes from Bayswater station."
  },
  {
    name: "Incognito Comics",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne",
    url: "https://www.incognitocomics.com.au/",
    position: [144.9631, -37.8136],
    description: "Sells back issues and buys collections. Quality MYLAR bags available."
  },
  {
    name: "Comic Kingdom",
    country: "Australia",
    state: "New South Wales",
    city: "Sydney",
    url: "https://www.comickingdom.com.au/",
    position: [151.2093, -33.8688],
    description: "Affordable Marvel and DC issues reaching back to the 1970s."
  },
  {
    name: "The Comic Shop",
    country: "Australia",
    state: "New South Wales",
    city: "Liverpool",
    position: [150.9260, -33.9200],
    description: "Extensive back issues in Sydney area."
  },

  // ============================================
  // NEW ZEALAND
  // ============================================

  {
    name: "Arkham City Comics",
    country: "New Zealand",
    city: "Auckland",
    address: "2/885 Manukau Road, Royal Oak",
    url: "https://www.arkham.co.nz/",
    position: [174.7633, -36.8969],
    description: "NZ's only back-issue specialist. Accept want lists. Contacts across Australia, USA, Europe."
  },
  {
    name: "Iron Age Comics",
    country: "New Zealand",
    city: "Auckland",
    address: "1 Virginia Ave East",
    phone: "021 430 216",
    position: [174.7633, -36.8485],
    description: "Warehouse-style shop specializing in back issues. 100 years of collecting between owners."
  },
  {
    name: "Mark One Comics",
    country: "New Zealand",
    city: "Hamilton",
    address: "551 Victoria Street",
    url: "https://mk1.co.nz/",
    phone: "(07) 839 3728",
    position: [175.2793, -37.7870],
    description: "Bagged and boarded back issues. Open 7 days."
  },

  // ============================================
  // JAPAN
  // ============================================

  {
    name: "Mandarake Nakano",
    country: "Japan",
    city: "Tokyo",
    address: "Nakano Broadway, Nakano 5-52-15",
    url: "https://www.mandarake.co.jp/",
    phone: "03-3228-0007",
    position: [139.6653, 35.7079],
    description: "Main Mandarake store. Over 30 specialty shops in Nakano Broadway. Staff help in English."
  },
  {
    name: "Mandarake Complex (Akihabara)",
    country: "Japan",
    city: "Tokyo",
    address: "Sotokanda, Chiyoda-ku",
    url: "https://www.mandarake.co.jp/",
    position: [139.7714, 35.6984],
    description: "Eight floors organized by genre. Vintage manga on 3rd floor. Efficient for specific categories."
  },
  {
    name: "Mandarake Grand Chaos",
    country: "Japan",
    city: "Osaka",
    address: "Nipponbashi 4-12-6, Naniwa-ku",
    url: "https://www.mandarake.co.jp/dir/gcs/",
    phone: "06-6636-7077",
    position: [135.5052, 34.6602],
    description: "Six floors in Den Den Town. Amazing manga collection including 50+ year old magazines."
  },
  {
    name: "Mandarake Umeda",
    country: "Japan",
    city: "Osaka",
    url: "https://www.mandarake.co.jp/",
    position: [135.4959, 34.7024],
    description: "Large multi-floor store for Kansai collectors."
  },
  {
    name: "Mandarake Fukuoka",
    country: "Japan",
    city: "Fukuoka",
    address: "Tenjin district",
    url: "https://www.mandarake.co.jp/",
    position: [130.3985, 33.5904],
    description: "Great stop for Kyushu-based anime fans."
  },
  {
    name: "Book Off Super Bazaar",
    country: "Japan",
    city: "Tokyo",
    position: [139.6917, 35.6895],
    description: "Chain of used bookstores with extensive manga sections at very low prices."
  },

  // ============================================
  // LATIN AMERICA
  // ============================================

  // Argentina
  {
    name: "Entelequia",
    country: "Argentina",
    city: "Buenos Aires",
    url: "https://entelequia.com.ar/",
    position: [-58.3816, -34.6037],
    description: "Pioneer of Buenos Aires comic scene with 40+ years. Two locations. Great European comic stock."
  },
  {
    name: "Club del Cómic",
    country: "Argentina",
    city: "Buenos Aires",
    position: [-58.3816, -34.6037],
    description: "Open since 1987. Specializes in American authors, Marvel and DC. Great collectibles."
  },
  {
    name: "Extraño Mundo",
    country: "Argentina",
    city: "Buenos Aires",
    position: [-58.3816, -34.6037],
    description: "Find the impossible: original editions, vintage magazines, second-hand material for collectors."
  },
  {
    name: "Rocketbooks Comics",
    country: "Argentina",
    city: "Buenos Aires",
    address: "Lavalleja 14, Villa Crespo",
    url: "https://rocketbookscomics.com.ar/",
    position: [-58.4357, -34.5989],
    description: "Classic and vintage Marvel, DC and other publishers. Ships across Argentina."
  },
  {
    name: "Planetary Toys & Comics",
    country: "Argentina",
    city: "Buenos Aires",
    address: "Galería Apolo, Av. Corrientes 1382",
    position: [-58.3858, -34.6049],
    description: "Best comiquería in Buenos Aires. Classic and new issues. Ask Adrián for recommendations."
  },
  {
    name: "Espacio Crumb",
    country: "Argentina",
    city: "La Plata",
    address: "Diagonal 77 #313",
    url: "https://www.crumb.com.ar/",
    position: [-57.9545, -34.9215],
    description: "Second-hand comics and historietas."
  },

  // Mexico
  {
    name: "Comikaze",
    country: "Mexico",
    city: "Mexico City",
    url: "https://comikaze.mx/",
    position: [-99.1332, 19.4326],
    description: "Large selection of American and Mexican comics."
  },

  // Brazil
  {
    name: "Comix Book Shop",
    country: "Brazil",
    state: "São Paulo",
    city: "São Paulo",
    url: "https://www.comix.com.br/",
    position: [-46.6333, -23.5505],
    description: "One of Brazil's largest comic shops with good back issue selection."
  },
];

// Helper to get display region (combines country and state/region info)
export function getDisplayRegion(store: ComicStore): string {
  if (store.state) {
    return `${store.state}, ${store.country}`;
  }
  return store.country;
}

// Get unique regions for filtering
export function getUniqueRegions(): string[] {
  const regions = new Set<string>();
  comicStores.forEach(store => {
    if (store.state) {
      regions.add(store.state);
    } else {
      regions.add(store.country);
    }
  });
  return Array.from(regions).sort();
}
