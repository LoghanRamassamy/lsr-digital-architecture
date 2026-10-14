import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Activer le mode sombre' : 'Activer le mode clair'}
      title={isLight ? 'Passer en mode sombre' : 'Passer en mode clair'}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-md border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] ${
        isLight
          ? 'bg-white border-slate-300/80 text-amber-500 hover:text-amber-600 hover:border-sky-400 hover:bg-slate-50 shadow-sm'
          : 'bg-[#0D111A] border-white/10 text-sky-400 hover:text-sky-300 hover:border-[#38BDF8]/40 hover:bg-[#131926]'
      } ${className}`}
    >
      {/* Visual icon with transition */}
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isLight ? (
          <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
      </div>

      {/* Blueprint corner micro-tick indicator */}
      <span
        className={`absolute top-0 right-0 w-1 h-1 transition-colors ${
          isLight ? 'bg-[#0284c7]' : 'bg-[#38BDF8]'
        }`}
      />
    </button>
  );
};
