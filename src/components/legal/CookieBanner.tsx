import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

interface CookieBannerProps {
  onOpenDetails: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenDetails }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('lsr_cookie_consent');
    if (!hasConsented) {
      // Delay slightly so it doesn't obstruct initial render abruptly
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lsr_cookie_consent', 'acknowledged');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Gestion des cookies et confidentialité"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 45,
        maxWidth: '440px',
      }}
      className="p-4 sm:p-5 rounded-[10px] bg-[#0D111A]/95 backdrop-blur-md border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded bg-[#131926] text-emerald-400 border border-white/10 shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-wider text-[#38BDF8] uppercase font-semibold">
              VIE PRIVÉE & CONFORMITÉ CNIL
            </span>
          </div>

          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Ce site applique une stricte sobriété numérique :{' '}
            <strong>aucun cookie publicitaire</strong> ni traceur de profilage. Seuls des éléments
            techniques nécessaires à votre navigation sont utilisés.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Button variant="primary" size="sm" onClick={handleAccept}>
              Compris & Continuer
            </Button>

            <Button variant="ghost" size="sm" onClick={onOpenDetails}>
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
