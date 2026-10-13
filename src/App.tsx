import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { MethodologySection } from './components/sections/MethodologySection';
import { ArchitectureDebtCalculator } from './components/interactive/ArchitectureDebtCalculator';
import { CodeCraftsmanshipPreview } from './components/interactive/CodeCraftsmanshipPreview';
import { ManifestoSection } from './components/sections/ManifestoSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
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
        <CodeCraftsmanshipPreview />
        <ManifestoSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
