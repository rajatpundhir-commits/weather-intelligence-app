import React from 'react';
import { CloudSun } from 'lucide-react';

export function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-3xl font-bold tracking-tight text-white">Weather <span className="text-blue-400">Intelligence</span></h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-widest">Precision Meteorological Analytics</p>
      </div>
    </header>
  );
}
