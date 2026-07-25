import { LocationData, WeatherResponse, AppWeatherData } from '../types';

export async function fetchWeather(city: string): Promise<AppWeatherData> {
  // 1. Geocoding API
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
  let geoRes;
  try {
    geoRes = await fetch(geoUrl);
  } catch (err) {
    throw new Error('Network failure. Please check your internet connection.');
  }

  if (!geoRes.ok) {
    throw new Error('Failed to fetch location data from geocoding API.');
  }
  
  const geoData = await geoRes.json();
  if (!geoData.results || geoData.results.length === 0) {
    throw new Error('City not found. Please try another location.');
  }
  
  const location: LocationData = geoData.results[0];
  
  // 2. Forecast API
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
  let weatherRes;
  try {
    weatherRes = await fetch(weatherUrl);
  } catch (err) {
    throw new Error('Network failure. Please check your internet connection.');
  }
  
  if (!weatherRes.ok) {
    throw new Error('Failed to fetch weather data from forecast API.');
  }
  
  const weatherData: WeatherResponse = await weatherRes.json();
  
  return {
    location,
    current: weatherData.current,
    daily: weatherData.daily
  };
}
