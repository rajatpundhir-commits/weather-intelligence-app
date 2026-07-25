import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Loader2 className="w-10 h-10 text-blue-400 animate-spin mb-4" />
      <p className="text-slate-400 font-medium">Fetching weather information...</p>
    </div>
  );
}
