import React from 'react';
import { siteContent } from '../../constants/siteContent';
import { SectionTag } from '../common/SectionTag';
import { BentoCard } from '../common/BentoCard';
import { Quote, Shield, Target, Award } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const { sectionTag, quote, principles } = siteContent.manifesto;

  const principleIcons = [Shield, Target, Award];

  return (
    <section
      id="manifesto"
      className="py-24 relative bg-[#090A0F] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background blueprint subtle pattern */}
      <div className="absolute inset-0 blueprint-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <SectionTag variant="amber">{sectionTag}</SectionTag>
        </div>

        {/* Big Manifesto Quote Card */}
        <div className="relative mb-16 rounded-[10px] bg-gradient-to-r from-[#0D111A] via-[#131926] to-[#0D111A] border border-white/10 p-8 sm:p-12 shadow-[0_0_40px_rgba(37,99,235,0.1)]">
          <Quote className="w-12 h-12 text-[#38BDF8]/30 mb-6" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-[#F8FAFC] leading-relaxed tracking-tight italic mb-8">
            {quote}
          </blockquote>
          <div className="flex items-center gap-3 pt-6 border-t border-white/10">
            <div className="w-2.5 h-2.5 bg-[#F59E0B] rounded-full animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">
              LSR DIGITAL ARCHITECTURE — MANIFESTE D'INGÉNIERIE & ÉTHIQUE LOGICIELLE
            </span>
          </div>
        </div>

        {/* 3 Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, idx) => {
            const Icon = principleIcons[idx % principleIcons.length];
            return (
              <BentoCard
                key={principle.title}
                glowColor={idx === 1 ? 'cyan' : idx === 0 ? 'amber' : 'blue'}
                className="p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#F59E0B] font-bold tracking-wider">
                      PILIER // 0{idx + 1}
                    </span>
                    <div className="p-2 rounded bg-[#131926] text-[#F59E0B] border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#F8FAFC] mb-2 tracking-tight">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">{principle.text}</p>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
