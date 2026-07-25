import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CurrentWeatherCard } from './components/CurrentWeatherCard';
import { ForecastSection } from './components/ForecastSection';
import { Recommendations } from './components/Recommendations';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { fetchWeather } from './services/weather';
import { AppWeatherData } from './types';

export default function App() {
  const [weatherData, setWeatherData] = useState<AppWeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred while fetching weather data.');
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setWeatherData(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 sm:p-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col">
        <Header />
        
        <SearchBar 
          onSearch={handleSearch} 
          onClear={handleClear} 
          isLoading={isLoading} 
        />

        {error && <ErrorMessage message={error} />}

        {isLoading && <LoadingSpinner />}

        {!isLoading && weatherData && (
          <main className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 mt-6">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <CurrentWeatherCard 
                current={weatherData.current} 
                location={weatherData.location} 
              />
              <ForecastSection daily={weatherData.daily} />
            </div>
            
            <aside className="lg:col-span-4 flex flex-col gap-6">
              <Recommendations current={weatherData.current} />
            </aside>
          </main>
        )}
      </div>
    </div>
  );
}
