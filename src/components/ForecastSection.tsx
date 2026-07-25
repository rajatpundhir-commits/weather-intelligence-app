import React from 'react';
import { DailyWeather } from '../types';
import { getWeatherCondition } from '../utils/weatherCodes';

interface ForecastSectionProps {
  daily: DailyWeather;
}

export function ForecastSection({ daily }: ForecastSectionProps) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
      {daily.time.map((timeStr, index) => {
        const date = new Date(timeStr);
        const dayName = index === 0 ? 'TODAY' : date.toLocaleDateString(undefined, { weekday: 'short' }).toUpperCase();
        
        const maxTemp = Math.round(daily.temperature_2m_max[index]);
        const minTemp = Math.round(daily.temperature_2m_min[index]);
        const condition = getWeatherCondition(daily.weather_code[index]);
        const Icon = condition.icon;

        return (
          <div 
            key={timeStr} 
            className={`bg-slate-900 border rounded-2xl p-4 flex flex-col items-center justify-between transition-transform hover:scale-105 ${
              index === 0 
                ? 'border-blue-500/50 ring-1 ring-blue-500/20 ring-inset shadow-lg shadow-blue-500/5' 
                : 'border-slate-800'
            }`}
          >
            <span className={`text-xs font-bold ${index === 0 ? 'text-blue-400' : 'text-slate-500'}`}>{dayName}</span>
            <div className={`h-10 w-10 py-2 mb-2 ${
              condition.isSunny ? 'text-yellow-400' : 
              condition.isRainy ? 'text-blue-400' : 
              condition.isSnowy ? 'text-blue-200' : 
              'text-slate-400'
            }`}>
              <Icon className="w-full h-full" />
            </div>
            <div className="text-center">
              <span className={`block font-bold ${index === 0 ? 'text-white' : 'text-slate-100'}`}>{maxTemp}°</span>
              <span className="block text-xs text-slate-500">{minTemp}°</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
