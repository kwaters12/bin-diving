# Comic Store Map

An interactive global map of comic book stores with "bin diving" opportunities. North American stores are primarily sourced from Michel Fiffe's Bin Diving Megalist, with curated additions from the UK, Europe, Australia, New Zealand, Japan, and Latin America.

## Features

- Interactive map showing comic store locations worldwide
- Filter stores by region (US states, Canadian provinces, countries)
- Search for stores by name, city, or country
- Click on markers to view store details including descriptions and links
- Responsive design works on mobile and desktop

## Prerequisites

- Node.js (v14+)
- npm (v6+)
- A Mapbox account and API key

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a Mapbox account at https://account.mapbox.com/auth/signup/ and get an access token
4. Copy `.env.example` to `.env` and add your Mapbox access token:
   ```bash
   cp .env.example .env
   # Then edit .env and replace the placeholder with your actual token
   ```
   The app reads `VITE_MAPBOX_ACCESS_TOKEN` from environment variables.

## Development

Start the development server:
```bash
npm run dev
```

## Building for Production

Build the project:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Adding More Stores

To add more stores or update store information, edit the `storeData.ts` file. Each store has the following structure:

```typescript
{
  name: "Store Name",
  country: "Country Name", // required (e.g., "USA", "United Kingdom", "Japan")
  state: "State/Province", // optional - US state, Canadian province, or regional identifier
  url: "https://store-website.com", // optional
  address: "123 Main St", // optional
  city: "City Name", // optional
  phone: "(555) 123-4567", // optional
  position: [-73.9871, 40.7552], // [longitude, latitude] - optional but recommended
  description: "Store description" // optional - notes about bin diving opportunities
}
```

If a store doesn't have position data, but does have an address, the application will attempt to geocode it when a valid Mapbox token is provided.

## Data Sources

- **North America**: Based on Michel Fiffe's "Bin Diving Megalist": https://michelfiffe.com/?page_id=9802
- **International**: Curated from community recommendations and research covering:
  - UK & Ireland (London, Manchester, Birmingham, Glasgow, Edinburgh, Dublin)
  - Europe (France, Germany, Netherlands, Belgium, Spain, Italy)
  - Australia (Melbourne, Sydney)
  - New Zealand (Auckland, Hamilton)
  - Japan (Tokyo, Osaka - Mandarake chain)
  - Latin America (Argentina, Mexico, Brazil)

## License

This project is licensed under the ISC License.