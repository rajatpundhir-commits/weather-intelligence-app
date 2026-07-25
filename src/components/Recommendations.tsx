import React from 'react';
import { CurrentWeather } from '../types';
import { getWeatherCondition } from '../utils/weatherCodes';
import { Lightbulb } from 'lucide-react';

interface RecommendationsProps {
  current: CurrentWeather;
}

export function Recommendations({ current }: RecommendationsProps) {
  const condition = getWeatherCondition(current.weather_code);
  const temp = current.temperature_2m;
  const wind = current.wind_speed_10m;

  let recommendation = '';

  if (condition.isRainy || condition.isSnowy) {
    recommendation = condition.isSnowy 
      ? "Dress warmly and be careful on slippery roads. A great day for indoor activities."
      : "Carry an umbrella and plan indoor activities.";
  } else if (temp > 30) {
    recommendation = "Stay hydrated and avoid excessive heat exposure. Find shade or stay in air conditioning.";
  } else if (temp < 5) {
    recommendation = "Wear warm clothing, a coat, and gloves to stay comfortable.";
  } else if (wind > 30) {
    recommendation = "Take precautions during outdoor activities due to high wind speeds.";
  } else if (condition.isSunny && temp >= 20 && temp <= 28) {
    recommendation = "Great day for outdoor activities. Perfect weather for a walk or a picnic!";
  } else {
    recommendation = "Enjoy the day! Weather is relatively mild, so standard plans should go smoothly.";
  }

  return (
    <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-600/20 p-2 rounded-lg">
          <Lightbulb className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="text-lg font-bold text-white">Weather Insight</h3>
      </div>
      
      <div className="space-y-4 flex-1">
        <div className={`bg-slate-800/50 rounded-2xl p-4 border-l-4 ${
          condition.isSnowy ? 'border-blue-300' :
          condition.isRainy ? 'border-blue-500' :
          temp > 30 ? 'border-red-500' :
          temp < 5 ? 'border-cyan-500' :
          wind > 30 ? 'border-yellow-500' :
          'border-blue-500'
        }`}>
          <h4 className="text-sm font-bold text-white mb-1">Activity Recommendation</h4>
          <p className="text-sm text-slate-400 leading-relaxed">{recommendation}</p>
        </div>
      </div>
    </div>
  );
}
