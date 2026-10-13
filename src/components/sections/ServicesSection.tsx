import React, { useState } from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { TechBadge } from '../common/TechBadge';
import { Layers, Code2, Cpu, CheckCircle, ChevronRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { sectionTag, sectionTitle, sectionDescription, cards } = siteContent.services;
  const [activeCardCode, setActiveCardCode] = useState<string>(cards[0].code);

  const cardIcons = {
    'SEC_01 // ARCHITECTURE': Layers,
    'SEC_02 // CRAFTSMANSHIP': Code2,
    'SEC_03 // RESILIENCE': Cpu,
  };

  return (
    <section id="services" className="py-24 relative bg-[#090A0F] border-t border-white/[0.08]">
      {/* Decorative Blueprint Corner Markings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionTag variant="cyan">{sectionTag}</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = cardIcons[card.code as keyof typeof cardIcons] || Layers;
            const isSelected = activeCardCode === card.code;
            const glowColor = idx === 0 ? 'blue' : idx === 1 ? 'cyan' : 'amber';

            return (
              <div
                key={card.code}
                onClick={() => setActiveCardCode(card.code)}
                className="cursor-pointer"
              >
                <BentoCard
                  glowColor={glowColor}
                  className={`flex flex-col justify-between h-full ${
                    isSelected ? 'border-[#38BDF8]/40 ring-1 ring-[#38BDF8]/20' : ''
                  }`}
                >
                  <div className="p-7">
                    {/* Card Code & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-semibold tracking-wider text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded border border-[#38BDF8]/20">
                        {card.code}
                      </span>
                      <div className="p-2.5 rounded-lg bg-[#131926] border border-white/10 text-[#38BDF8]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-heading font-bold text-[#F8FAFC] mb-2 tracking-tight">
                      {card.title}
                    </h3>

                    {/* Pitch */}
                    <p className="text-xs sm:text-sm font-mono text-[#38BDF8] mb-4 leading-relaxed font-medium">
                      {card.pitch}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 pt-4 border-t border-white/[0.08] mb-6">
                      <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-2">
                        Livrables Contractuels :
                      </span>
                      {card.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#E2E8F0]">
                          <CheckCircle className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
                      {card.tags.map((tag) => (
                        <TechBadge key={tag} label={tag} variant="default" />
                      ))}
                    </div>
                  </div>

                  {/* Footer action trigger */}
                  <div className="px-7 py-3 bg-[#090A0F]/60 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#64748B]">
                      ENGAGEMENT D'INGÉNIERIE
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#38BDF8] hover:underline"
                    >
                      <span>Consulter</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </BentoCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
