import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  onClear: () => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, onClear, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please enter a city name.');
      return;
    }
    setError('');
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery('');
    setError('');
    onClear();
  };

  return (
    <div className="w-full max-w-xl mb-4">
      <form onSubmit={handleSubmit} className="relative flex items-center h-12">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <Search className="h-5 w-5 text-slate-500" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.trim()) setError('');
          }}
          placeholder="Enter city name..."
          className={`block w-full h-full pl-11 pr-24 bg-slate-900 border border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none placeholder-slate-600 text-slate-100 ${
            error ? 'border-red-500/50 focus:ring-red-500' : ''
          }`}
          disabled={isLoading}
        />
        
        <div className="absolute right-1 top-1 bottom-1 flex items-center gap-1">
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors"
              disabled={isLoading}
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="px-6 h-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Search
          </button>
        </div>
      </form>
      {error && <p className="mt-2 text-sm text-red-400 pl-4">{error}</p>}
    </div>
  );
}
