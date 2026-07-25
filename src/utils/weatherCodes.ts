import { 
  Sun, Cloud, CloudSun, CloudFog, CloudRain, CloudSnow, 
  CloudLightning, CloudDrizzle, Snowflake 
} from 'lucide-react';
import React from 'react';

export interface WeatherCondition {
  description: string;
  icon: React.ElementType;
  isRainy?: boolean;
  isSnowy?: boolean;
  isSunny?: boolean;
}

export function getWeatherCondition(code: number): WeatherCondition {
  switch (code) {
    case 0: return { description: 'Clear sky', icon: Sun, isSunny: true };
    case 1: return { description: 'Mainly clear', icon: CloudSun, isSunny: true };
    case 2: return { description: 'Partly cloudy', icon: CloudSun };
    case 3: return { description: 'Overcast', icon: Cloud };
    case 45: 
    case 48: return { description: 'Fog', icon: CloudFog };
    case 51:
    case 53:
    case 55: return { description: 'Drizzle', icon: CloudDrizzle, isRainy: true };
    case 56:
    case 57: return { description: 'Freezing Drizzle', icon: CloudSnow, isSnowy: true };
    case 61: return { description: 'Slight Rain', icon: CloudRain, isRainy: true };
    case 63: return { description: 'Moderate Rain', icon: CloudRain, isRainy: true };
    case 65: return { description: 'Heavy Rain', icon: CloudRain, isRainy: true };
    case 66:
    case 67: return { description: 'Freezing Rain', icon: CloudSnow, isSnowy: true };
    case 71: return { description: 'Slight Snow fall', icon: Snowflake, isSnowy: true };
    case 73: return { description: 'Moderate Snow fall', icon: Snowflake, isSnowy: true };
    case 75: return { description: 'Heavy Snow fall', icon: Snowflake, isSnowy: true };
    case 77: return { description: 'Snow grains', icon: Snowflake, isSnowy: true };
    case 80:
    case 81:
    case 82: return { description: 'Rain showers', icon: CloudRain, isRainy: true };
    case 85:
    case 86: return { description: 'Snow showers', icon: CloudSnow, isSnowy: true };
    case 95: return { description: 'Thunderstorm', icon: CloudLightning, isRainy: true };
    case 96:
    case 99: return { description: 'Thunderstorm with hail', icon: CloudLightning, isSnowy: true };
    default: return { description: 'Unknown', icon: Cloud };
  }
}
