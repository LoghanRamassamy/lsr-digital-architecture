import React from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { Compass, FileCode, CheckCheck, Rocket } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const { sectionTag, sectionTitle, steps } = siteContent.methodology;

  const stepIcons = [Compass, FileCode, CheckCheck, Rocket];

  return (
    <section id="blueprint" className="py-24 relative bg-[#090A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionTag variant="blue">{sectionTag}</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-4">
            {sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Chaque projet suit un pipeline rigoureux, garantissant l'alignement strict entre
            exigences métier et robustesse logicielle.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <BentoCard
                key={item.step}
                glowColor="cyan"
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-[#38BDF8]">{item.step}</span>
                    <div className="p-2 rounded bg-[#131926] text-[#38BDF8] border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Name */}
                  <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-2 tracking-tight">
                    {item.name}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{item.description}</p>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
