import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pb-8 text-center px-4">
      <p className="text-slate-400 text-xs font-medium">
        © 2024 김개발. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center space-x-2">
        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
      </div>
    </footer>
  );
};