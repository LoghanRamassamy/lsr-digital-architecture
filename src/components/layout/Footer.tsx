import React from 'react';
import { siteContent } from '../../constants/siteContent';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { legalEntity, tagline, copyright } = siteContent.footer;
  const { navigation } = siteContent.header;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080C] border-t border-white/[0.08] text-[#94A3B8] font-mono text-xs">
      {/* Top telemetry bar */}
      <div className="border-b border-white/[0.05] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold tracking-wider">
                SYSTÈMES OPÉRATIONNELS // SLA 99.99%
              </span>
            </div>
            <span className="hidden md:inline-block text-[#64748B]">|</span>
            <span className="hidden md:inline-block text-[#64748B]">
              PARIS (UTC+2) — LATENCE INFRA &lt; 2ms
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#38BDF8] hover:text-white transition-colors"
          >
            <span>Retour haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Entity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-[#F8FAFC]">
              <span className="font-heading font-extrabold text-base tracking-tight">
                LSR <span className="font-light text-[#94A3B8]">Digital Architecture</span>
              </span>
            </div>
            <p className="text-sm font-sans text-[#94A3B8] max-w-sm">{tagline}</p>
            <div className="pt-2 text-[11px] text-[#64748B]">
              <span>Raison sociale : </span>
              <span className="text-[#F8FAFC]">{legalEntity}</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] block mb-2">
              Architecture du site
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:text-[#38BDF8] transition-colors py-0.5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Security & Standards */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] block mb-2">
              Normes & Standards
            </span>
            <div className="space-y-1.5 text-[11px] text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Clean Architecture & DDD</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Zero-Trust Network Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>RGPD & Hébergement Souverain</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <span>{copyright}</span>
          <div className="flex items-center gap-4">
            <span>REV: v2026.4.1-STABLE</span>
            <span>BUILD: SECURE_STATIC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
