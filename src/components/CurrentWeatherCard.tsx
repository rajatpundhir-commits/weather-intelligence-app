import React from 'react';
import { CurrentWeather, LocationData } from '../types';
import { getWeatherCondition } from '../utils/weatherCodes';
import { Droplets, Wind } from 'lucide-react';

interface CurrentWeatherCardProps {
  current: CurrentWeather;
  location: LocationData;
}

export function CurrentWeatherCard({ current, location }: CurrentWeatherCardProps) {
  const condition = getWeatherCondition(current.weather_code);
  const Icon = condition.icon;

  const date = new Date(current.time);
  const formattedDate = date.toLocaleDateString(undefined, { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 flex items-center justify-between shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <Icon className="w-48 h-48 text-slate-100" />
      </div>

      <div className="z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-slate-400 font-medium text-sm">
              {formattedDate} • {formattedTime}
            </p>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-1">{location.name}</h2>
          <p className="text-slate-400 mb-6">
            {location.admin1 ? `${location.admin1}, ` : ''}{location.country}
          </p>

          <div className="flex flex-col">
            <div className="text-6xl font-bold text-white tracking-tighter mb-1">
              {Math.round(current.temperature_2m)}<span className="text-blue-400">°C</span>
            </div>
            <p className="text-2xl text-slate-300">
              {condition.description}
            </p>
            
            <div className="flex gap-6 mt-6">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Humidity</span>
                <span className="text-lg font-semibold text-slate-100">{current.relative_humidity_2m}%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Wind Speed</span>
                <span className="text-lg font-semibold text-slate-100">{current.wind_speed_10m} km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
