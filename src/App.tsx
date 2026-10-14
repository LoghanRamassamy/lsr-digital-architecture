import React, { useState } from 'react';
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

export const App: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('legal');

  const handleOpenLegal = (tab: LegalTab) => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F8FAFC] selection:bg-[#38BDF8]/25 selection:text-[#38BDF8] relative flex flex-col font-sans">
      {/* Top Header */}
      <Header />

      {/* Main Semantic Page Content */}
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <MethodologySection />
        <ArchitectureDebtCalculator />
        <ManifestoSection />
        <ContactSection onOpenLegal={handleOpenLegal} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* French Compliance: Legal & RGPD Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        activeTab={activeLegalTab}
        onClose={() => setLegalModalOpen(false)}
        onTabChange={setActiveLegalTab}
      />

      {/* French / CNIL Compliance: Cookie & Privacy Banner */}
      <CookieBanner onOpenDetails={() => handleOpenLegal('cookies')} />
    </div>
  );
};

export default App;
