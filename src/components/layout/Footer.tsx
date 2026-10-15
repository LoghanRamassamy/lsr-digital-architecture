import React from 'react';
import { siteContent } from '../../constants/siteContent';
import { ShieldCheck, ArrowUp, Cpu, Lock, ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';

interface FooterProps {
  onOpenLegal?: (tab: 'legal' | 'privacy' | 'cookies') => void;
  onOpenGlossary?: () => void;
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenGlossary }) => {
  const { legalEntity, tagline, copyright, email } = siteContent.footer;
  const { navigation } = siteContent.header;

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
              PARIS (UTC+2) — CONFORMITÉ RGPD & LCEN
            </span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            icon={<ArrowUp className="w-3.5 h-3.5" />}
            iconPosition="right"
          >
            Retour haut de page
          </Button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Entity */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-[#F8FAFC]">
              <span className="font-heading font-extrabold text-base tracking-tight">
                LSR <span className="font-light text-[#94A3B8]">Digital Architecture</span>
              </span>
            </div>
            <p className="text-sm font-sans text-[#94A3B8] max-w-sm">{tagline}</p>
            <div className="pt-2 text-[11px] text-[#64748B] space-y-1">
              <div>
                <span>Raison sociale : </span>
                <span className="text-[#F8FAFC]">{legalEntity}</span>
              </div>
              <div>
                <span>Contact : </span>
                <a href={`mailto:${email}`} className="text-[#38BDF8] hover:underline">
                  {email}
                </a>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-6 lg:col-span-2 space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] block mb-2 font-mono">
              Architecture du site
            </span>
            <div className="flex flex-col gap-1.5 text-xs">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:text-[#38BDF8] transition-colors py-0.5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#glossaire"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenGlossary?.();
                }}
                className="hover:text-[#38BDF8] transition-colors py-0.5"
              >
                06. Glossaire technique
              </a>
            </div>
          </div>

          {/* Legal & Compliance */}
          <div className="md:col-span-6 lg:col-span-3 space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#64748B] block mb-2 font-mono">
              Cadre Légal & RGPD
            </span>
            <div className="flex flex-col gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => onOpenLegal?.('legal')}
                className="text-left text-[#94A3B8] hover:text-[#38BDF8] transition-colors py-0.5"
              >
                Mentions Légales (LCEN)
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal?.('privacy')}
                className="text-left text-[#94A3B8] hover:text-[#38BDF8] transition-colors py-0.5"
              >
                Protection des Données (RGPD)
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal?.('cookies')}
                className="text-left text-[#94A3B8] hover:text-[#38BDF8] transition-colors py-0.5"
              >
                Gestion des Cookies & Traceurs
              </button>
            </div>
          </div>

          {/* Security & Standards */}
          <div className="md:col-span-6 lg:col-span-3 space-y-2">
            <div className="footer-standards">
              <div className="footer-standards__header">
                <span className="footer-standards__title">Standards & Conformité</span>
                <span className="footer-standards__status-pill">
                  <span className="pulse-dot" />
                  Conforme
                </span>
              </div>

              <div className="footer-standards__list">
                {/* Clean Architecture */}
                <div className="footer-standards__item">
                  <div className="footer-standards__icon-wrap">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div className="footer-standards__content">
                    <div className="footer-standards__meta">
                      <span className="footer-standards__name">Clean Architecture</span>
                      <span className="footer-standards__tag footer-standards__tag--cyan">DDD</span>
                    </div>
                    <span className="footer-standards__desc">Découplage strict & Zéro dette</span>
                  </div>
                </div>

                {/* RGPD / CNIL */}
                <button
                  type="button"
                  onClick={() => onOpenLegal?.('privacy')}
                  className="footer-standards__item footer-standards__item--interactive"
                  title="Consulter le cadre de conformité RGPD & CNIL"
                >
                  <div className="footer-standards__icon-wrap footer-standards__icon-wrap--emerald">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="footer-standards__content">
                    <div className="footer-standards__meta">
                      <span className="footer-standards__name">RGPD / CNIL</span>
                      <span className="footer-standards__tag footer-standards__tag--emerald">
                        AUDITÉ
                      </span>
                    </div>
                    <span className="footer-standards__desc">
                      Privacy by design & hébergement UE
                    </span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 footer-standards__arrow" />
                </button>

                {/* Zero-Trust Ready */}
                <div className="footer-standards__item">
                  <div className="footer-standards__icon-wrap">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <div className="footer-standards__content">
                    <div className="footer-standards__meta">
                      <span className="footer-standards__name">Zero-Trust Ready</span>
                      <span className="footer-standards__tag">SECOPS</span>
                    </div>
                    <span className="footer-standards__desc">Chiffrement & moindre privilège</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <span>{copyright}</span>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenLegal?.('legal')}
              className="hover:text-[#38BDF8] transition-colors"
            >
              Mentions Légales
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-[#38BDF8] transition-colors"
            >
              Confidentialité RGPD
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal?.('cookies')}
              className="hover:text-[#38BDF8] transition-colors"
            >
              Cookies
            </button>
            <span>•</span>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition-colors"
              title="Documentation structurée pour modèles de langage et agents IA"
            >
              llms.txt (IA)
            </a>
            <span>•</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition-colors"
            >
              Sitemap
            </a>
            <span>•</span>
            <a
              href="#glossaire"
              onClick={(e) => {
                e.preventDefault();
                onOpenGlossary?.();
              }}
              className="hover:text-[#38BDF8] transition-colors font-medium text-[#E2E8F0]"
              title="Définition des termes techniques et méthodologiques du site"
            >
              Glossaire
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
