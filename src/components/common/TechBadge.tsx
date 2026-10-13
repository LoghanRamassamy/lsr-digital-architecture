import React from 'react';
import { cn } from '../../utils/cn';

interface TechBadgeProps {
  label: string;
  variant?: 'default' | 'active' | 'accent';
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, variant = 'default', className }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wider rounded border transition-all duration-200',
        variant === 'default' &&
          'bg-[#0D111A] text-[#94A3B8] border-white/10 hover:border-[#38BDF8]/40 hover:text-[#F8FAFC]',
        variant === 'active' &&
          'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30 shadow-[0_0_10px_rgba(56,189,248,0.2)]',
        variant === 'accent' && 'bg-[#2563EB]/15 text-[#60A5FA] border-[#2563EB]/40',
        className
      )}
    >
      <span className="w-1 h-1 rounded-full bg-current opacity-60" />
      {label}
    </span>
  );
};
