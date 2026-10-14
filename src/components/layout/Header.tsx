import React, { useState, useEffect } from 'react';
import { siteContent } from '../../constants/siteContent';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';

export const Header: React.FC = () => {
  const { brandName, brandSuffix, statusBadge, navigation, cta } = siteContent.header;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('vision');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scrollspy
      const sections = navigation.map((item) => item.id);
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigation]);

  // Accessibility: close mobile menu with Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            aria-label="LSR Digital Architecture - Accueil"
          >
            {/* Architectural Blueprint Monogram Mark */}
            <div className="relative w-9 h-9 rounded-md bg-[#0D111A] border border-white/20 group-hover:border-[#38BDF8] transition-colors flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-blueprint-dense opacity-40" />
              <div className="relative flex items-center justify-center font-mono font-bold text-xs text-[#38BDF8]">
                LSR
              </div>
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#38BDF8]" />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#2563EB]" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base tracking-tight text-[#F8FAFC]">
                {brandName} <span className="font-light text-[#94A3B8]">{brandSuffix}</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] text-[#64748B] tracking-wider uppercase">
                Software Systems & Cloud Architecture
              </span>
            </div>
          </a>

          {/* Status Badge (Center Desktop) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D111A] border border-white/[0.08]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]" />
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#94A3B8]">
              {statusBadge}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`font-mono text-xs tracking-wider transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#38BDF8] font-semibold'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#2563EB] to-[#38BDF8]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA, Theme Toggle & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
              className="hidden sm:inline-flex"
            >
              {cta}
            </Button>

            {/* Mobile menu trigger */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label={mobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0D111A] border-b border-white/[0.08] px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black/10 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="font-mono text-[10px] text-[#94A3B8]">{statusBadge}</span>
          </div>

          <nav className="flex flex-col space-y-3" aria-label="Navigation mobile">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm text-[#94A3B8] hover:text-[#38BDF8] py-1 border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#64748B]">→</span>
              </a>
            ))}
          </nav>

          <Button
            href="#contact"
            variant="primary"
            size="md"
            fullWidth
            onClick={() => setMobileMenuOpen(false)}
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            iconPosition="right"
          >
            {cta}
          </Button>
        </div>
      )}
    </header>
  );
};
