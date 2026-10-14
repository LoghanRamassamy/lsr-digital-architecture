import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  glowColor?: 'cyan' | 'blue' | 'amber';
  interactive?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  contentClassName,
  glowColor = 'cyan',
  interactive = true,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowStyles = {
    cyan: 'var(--accent-cyan-bg-20)',
    blue: 'rgba(37, 99, 235, 0.12)',
    amber: 'var(--accent-amber-bg-10)',
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative rounded-[10px] overflow-hidden bg-[#0D111A] border border-white/[0.08] transition-all duration-300 flex flex-col',
        interactive &&
          'hover:border-[#38BDF8]/40 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.6)]',
        className
      )}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {interactive && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[10px] opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowStyles[glowColor]}, transparent 70%)`,
          }}
        />
      )}

      {/* Content wrapper */}
      <div className={cn('relative z-10 h-full flex flex-col flex-1', contentClassName)}>
        {children}
      </div>
    </div>
  );
};
