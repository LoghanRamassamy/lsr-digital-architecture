import React, { useState } from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { TechBadge } from '../common/TechBadge';
import { Button } from '../common/Button';
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
                className="cursor-pointer h-full flex flex-col"
              >
                <BentoCard
                  glowColor={glowColor}
                  className={`h-full flex-1 ${
                    isSelected ? 'border-[#38BDF8]/40 ring-1 ring-[#38BDF8]/20' : ''
                  }`}
                  contentClassName="h-full flex flex-col justify-between"
                >
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
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
                      <h3 className="text-xl font-heading font-bold text-[#F8FAFC] mb-3 tracking-tight">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                        {card.description}
                      </p>

                      {/* Key Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t border-white/[0.08] mb-6">
                        <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block mb-2">
                          Périmètre & Livrables :
                        </span>
                        {card.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
                      {card.tags.map((tag) => (
                        <TechBadge key={tag} label={tag} variant="default" />
                      ))}
                    </div>
                  </div>

                  {/* Footer action trigger */}
                  <div className="px-7 py-3 bg-[#090A0F]/60 border-t border-white/[0.05] flex items-center justify-between shrink-0 mt-auto">
                    <span className="text-[11px] font-mono text-[#64748B]">
                      INTERVENTION SUR-MESURE
                    </span>
                    <Button
                      href="#contact"
                      variant="ghost"
                      size="sm"
                      icon={<ChevronRight className="w-3.5 h-3.5" />}
                      iconPosition="right"
                    >
                      Échanger
                    </Button>
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
