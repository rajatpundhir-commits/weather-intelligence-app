# Weather Intelligence App

A modern, responsive single-page web application that provides current weather conditions, a 7-day forecast, and simple weather-based planning recommendations. Built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- **Current Weather:** View temperature, humidity, wind speed, and weather condition for any searched city.
- **7-Day Forecast:** Daily high and low temperatures, precipitation, and condition icons for the upcoming week.
- **Weather Intelligence:** Get simple, smart recommendations based on current weather conditions (e.g., "Stay hydrated" or "Carry an umbrella").
- **Responsive Design:** A clean, accessible interface that works perfectly across desktop, tablet, and mobile devices.
- **No API Keys Required:** Uses the public Open-Meteo APIs for fetching location and forecast data.

## Technology Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS 4**
- **Lucide React** (Icons)

## Open-Meteo API Details

The application uses two public APIs provided by [Open-Meteo](https://open-meteo.com/):

1. **Geocoding API:** To convert city names into latitude and longitude coordinates.
   - Endpoint: `https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1&language=en&format=json`
2. **Forecast API:** To fetch current weather conditions and daily forecasts.
   - Endpoint: `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`

## Local Setup Instructions

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. Open the displayed URL in your browser to view the application.

## Production Build

To create a production-ready build, run:

```bash
npm run build
```

This will generate the compiled static files in the `dist` directory.

## Cloudflare Pages Deployment Instructions

This project is fully ready for deployment on Cloudflare Pages.

1. Create a GitHub repository and push this code.
2. Log into the Cloudflare Dashboard and navigate to **Workers & Pages**.
3. Click **Create application** and choose the **Pages** tab.
4. Connect your GitHub account and select the repository.
5. Set up the build configuration:
   - **Framework preset:** `Vite` or `None`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click **Save and Deploy**. Cloudflare will automatically build and host your application globally.

## GitHub Deployment Workflow Notes

- This project has been structured so it can be seamlessly exported from Google AI Studio to GitHub.
- There are no environment variables or hidden API keys to manage. The build purely relies on static asset compilation.
- The `dist` folder is in `.gitignore`, ensuring only source code is deployed. Cloudflare Pages or GitHub Actions can automatically build the app from the source.
