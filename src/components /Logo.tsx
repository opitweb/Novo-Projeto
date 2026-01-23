
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 80C50 80 85 70 85 40C85 10 60 10 50 30C40 10 15 10 15 40C15 70 50 80 50 80Z" fill="#3156A3" fillOpacity="0.1" stroke="#3156A3" strokeWidth="4" />
        <path d="M50 70V30" stroke="#00A89F" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="25" r="4" fill="#00A89F" />
        <path d="M55 45C65 35 75 35 75 45C75 55 65 65 55 55" stroke="#3156A3" strokeWidth="3" strokeLinecap="round" />
        <path d="M45 45C35 35 25 35 25 45C25 55 35 65 45 55" stroke="#3156A3" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-extrabold text-[#3156A3]">Betterfly</span>
        <span className="text-sm font-semibold text-[#00A89F] tracking-wider uppercase">Media</span>
      </div>
    </div>
  );
};

export default Logo;
