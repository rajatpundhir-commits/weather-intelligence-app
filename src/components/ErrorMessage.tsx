import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-500/10 text-red-400 p-4 rounded-xl border border-red-500/20 flex items-center gap-3 w-full max-w-xl mb-4">
      <AlertCircle className="w-6 h-6 shrink-0" />
      <p className="font-medium">{message}</p>
    </div>
  );
}
