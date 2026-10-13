import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'blue' | 'amber';
  interactive?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
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
    cyan: 'rgba(56, 189, 248, 0.15)',
    blue: 'rgba(37, 99, 235, 0.18)',
    amber: 'rgba(245, 158, 11, 0.15)',
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative rounded-[10px] bg-[#0D111A] border border-white/[0.08] transition-all duration-300',
        interactive &&
          'hover:border-[#38BDF8]/40 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.6)]',
        className
      )}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {interactive && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[10px] opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowStyles[glowColor]}, transparent 70%)`,
          }}
        />
      )}

      {/* Blueprint corner cross ticks */}
      <div className="absolute top-0 left-0 w-2 h-2 pointer-events-none">
        <span className="absolute top-0 left-0 w-2 h-px bg-white/20 group-hover:bg-[#38BDF8]/60 transition-colors" />
        <span className="absolute top-0 left-0 h-2 w-px bg-white/20 group-hover:bg-[#38BDF8]/60 transition-colors" />
      </div>
      <div className="absolute top-0 right-0 w-2 h-2 pointer-events-none">
        <span className="absolute top-0 right-0 w-2 h-px bg-white/20 group-hover:bg-[#38BDF8]/60 transition-colors" />
        <span className="absolute top-0 right-0 h-2 w-px bg-white/20 group-hover:bg-[#38BDF8]/60 transition-colors" />
      </div>
      <div className="absolute bottom-0 left-0 w-2 h-2 pointer-events-none">
        <span className="absolute bottom-0 left-0 w-2 h-px bg-white/20 group-hover:bg-[#38BDF8]/60 transition-colors" />
        <span className="absolute bottom-0 left-0 h-2 w-px bg-white/20 group-hover:bg-[#38BDF8]/60 transition-colors" />
      </div>
      <div className="absolute bottom-0 right-0 w-2 h-2 pointer-events-none">
        <span className="absolute bottom-0 right-0 w-2 h-px bg-white/20 group-hover:bg-[#38BDF8]/60 transition-colors" />
        <span className="absolute bottom-0 right-0 h-2 w-px bg-white/20 group-hover:bg-[#38BDF8]/60 transition-colors" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
