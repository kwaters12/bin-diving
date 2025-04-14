# Comic Store Map

An interactive map of comic book stores with "bin diving" opportunities, based on Michel Fiffe's list.

## Features

- Interactive map showing comic store locations across the United States
- Filter stores by state
- Search for specific stores by name
- Click on markers to view store details
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
4. Open `src/main.ts` and replace `YOUR_MAPBOX_ACCESS_TOKEN` with your actual token:
   ```typescript
   const MAPBOX_ACCESS_TOKEN = 'your_actual_token_here';
   ```

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
  state: "State Name",
  url: "https://store-website.com", // optional
  address: "123 Main St", // optional
  city: "City Name", // optional
  phone: "(555) 123-4567", // optional
  position: [-73.9871, 40.7552] // [longitude, latitude] - optional
}
```

If a store doesn't have position data, but does have an address, the application will attempt to geocode it when a valid Mapbox token is provided.

## Data Source

The list of comic stores is based on Michel Fiffe's "Bin Diving Megalist": https://michelfiffe.com/?page_id=9802

## License

This project is licensed under the ISC License.