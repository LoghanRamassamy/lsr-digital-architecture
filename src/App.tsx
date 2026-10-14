import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { MethodologySection } from './components/sections/MethodologySection';
import { ArchitectureDebtCalculator } from './components/interactive/ArchitectureDebtCalculator';
import { ManifestoSection } from './components/sections/ManifestoSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { LegalModal, LegalTab } from './components/legal/LegalModal';
import { CookieBanner } from './components/legal/CookieBanner';
import { GlossaryModal } from './components/glossary/GlossaryModal';

export const AppContent: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('legal');

  const [glossaryModalOpen, setGlossaryModalOpen] = useState(false);
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = useState<string | null>(null);

  const handleOpenLegal = (tab: LegalTab) => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  const handleOpenGlossary = (termId?: string) => {
    setSelectedGlossaryTerm(termId || null);
    setGlossaryModalOpen(true);
    if (termId) {
      window.location.hash = `#glossaire-${termId}`;
    } else {
      window.location.hash = '#glossaire';
    }
  };

  const handleCloseGlossary = () => {
    setGlossaryModalOpen(false);
    setSelectedGlossaryTerm(null);
    if (window.location.hash.startsWith('#glossaire')) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  // Sync with URL hash for #glossaire and #glossaire-termId
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#glossaire') {
        setSelectedGlossaryTerm(null);
        setGlossaryModalOpen(true);
      } else if (hash.startsWith('#glossaire-')) {
        const termId = hash.replace('#glossaire-', '');
        setSelectedGlossaryTerm(termId);
        setGlossaryModalOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative flex flex-col font-sans transition-colors duration-300">
      {/* WCAG 2.1 AA / RGAA Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Top Header */}
      <Header />

      {/* Main Semantic Page Content */}
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <HeroSection />
        <ServicesSection />
        <MethodologySection />
        <ArchitectureDebtCalculator />
        <ManifestoSection />
        <ContactSection onOpenLegal={handleOpenLegal} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} onOpenGlossary={() => handleOpenGlossary()} />

      {/* French Compliance: Legal & RGPD Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        activeTab={activeLegalTab}
        onClose={() => setLegalModalOpen(false)}
        onTabChange={setActiveLegalTab}
      />

      {/* Technical & Methodological Architecture Glossary Modal */}
      <GlossaryModal
        isOpen={glossaryModalOpen}
        initialTermId={selectedGlossaryTerm}
        onClose={handleCloseGlossary}
        onSelectTerm={(termId) => {
          setSelectedGlossaryTerm(termId);
          window.location.hash = `#glossaire-${termId}`;
        }}
      />

      {/* French / CNIL Compliance: Cookie & Privacy Banner */}
      <CookieBanner onOpenDetails={() => handleOpenLegal('cookies')} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
