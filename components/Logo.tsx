
import React from 'react';

interface LogoProps {
  className?: string;
  hideText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", hideText = false, light = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Part: Mortarboard + Book + Arc */}
      <svg viewBox="0 0 100 100" className="h-full w-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Arcs */}
        <path d="M30 15C15 25 10 45 15 65" stroke="#0EA5E9" strokeWidth="8" strokeLinecap="round" />
        <path d="M70 15C85 25 90 45 85 65" stroke="#F97316" strokeWidth="8" strokeLinecap="round" />
        <path d="M40 8C55 5 75 10 85 25" stroke="#F97316" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        
        {/* Sparkle */}
        <path d="M85 10L87 15L92 17L87 19L85 24L83 19L78 17L83 15L85 10Z" fill="#F97316" />

        {/* Graduation Cap */}
        <path d="M50 25L85 38L50 51L15 38L50 25Z" fill="#334155" />
        <path d="M35 45V55C35 55 40 60 50 60C60 60 65 55 65 55V45" fill="#334155" />
        <path d="M78 35V48" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
        <circle cx="78" cy="52" r="4" fill="#FACC15" />

        {/* Open Book */}
        <path d="M50 85C35 85 20 80 15 70V80C20 90 35 95 50 95C65 95 80 90 85 80V70C80 80 65 85 50 85Z" fill="#1E3A8A" />
        <path d="M50 85V65C50 65 65 60 85 70V80C65 70 50 75 50 75Z" fill="#0EA5E9" />
        <path d="M50 85V65C50 65 35 60 15 70V80C35 70 50 75 50 75Z" fill="#84CC16" />
        
        {/* Bar Chart overlay */}
        <rect x="55" y="55" width="6" height="15" rx="1" fill="#F97316" />
        <rect x="65" y="48" width="6" height="22" rx="1" fill="#0EA5E9" />
      </svg>

      {!hideText && (
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-black tracking-tighter leading-none flex items-baseline">
            <span className="text-[#1E3A8A] dark:text-blue-400">ACADE</span>
            <span className="text-[#F97316]">MIX</span>
            <span className="text-[#1E3A8A] dark:text-blue-400">-360</span>
          </span>
          <span className="text-[7px] md:text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] -mt-0.5">
            Smart Tools for Smarter Education
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
