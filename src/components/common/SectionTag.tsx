import React from 'react';

interface SectionTagProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'amber';
}

export const SectionTag: React.FC<SectionTagProps> = ({ children, variant = 'cyan' }) => {
  const variantStyles = {
    cyan: 'text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10 shadow-[0_0_12px_rgba(56,189,248,0.15)]',
    blue: 'text-[#2563EB] border-[#2563EB]/30 bg-[#2563EB]/10 shadow-[0_0_12px_rgba(37,99,235,0.15)]',
    amber:
      'text-[#F59E0B] border-[#F59E0B]/30 bg-[#F59E0B]/10 shadow-[0_0_12px_rgba(245,158,11,0.15)]',
  };

  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
      <span
        className={`font-mono text-xs uppercase tracking-[0.1em] px-2.5 py-1 rounded-sm border ${variantStyles[variant]}`}
      >
        {children}
      </span>
    </div>
  );
};
