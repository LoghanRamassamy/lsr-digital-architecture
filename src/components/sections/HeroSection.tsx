import React from 'react';
import { siteContent } from '../../constants/siteContent';
import { BentoCard } from '../common/BentoCard';
import { Button } from '../common/Button';
import { ArrowRight, ShieldCheck, Terminal, Compass, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { systemTag, headline, subheadline, ctaPrimary, ctaSecondary, metricsBanner } =
    siteContent.hero;

  const metricIcons = [ShieldCheck, Compass, CheckCircle2];

  return (
    <section id="vision" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Blueprint grid background effect */}
      <div className="absolute inset-0 blueprint-grid-bg opacity-70 pointer-events-none" />

      {/* Ambient gradient halos */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#2563EB]/15 via-[#38BDF8]/10 to-transparent blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Monospace System Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#38BDF8] px-3 py-1 rounded bg-[#38BDF8]/10 border border-[#38BDF8]/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              {systemTag}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12] mb-6">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            {subheadline}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              href="#services"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              {ctaPrimary}
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<Terminal className="w-4 h-4 text-[#38BDF8]" />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              {ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Metrics Banner (3 Bento Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          {metricsBanner.map((metric, idx) => {
            const Icon = metricIcons[idx % metricIcons.length];
            return (
              <BentoCard
                key={metric.title}
                glowColor={idx === 1 ? 'cyan' : idx === 0 ? 'blue' : 'amber'}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    {/* Icon and Value header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                        {metric.value}
                      </span>
                      <div className="p-2 rounded-lg bg-[#131926] border border-white/10 text-[#38BDF8]">
                        <Icon className="w-5 h-5 text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors" />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-base font-heading font-semibold text-[#F8FAFC] mb-1.5 tracking-tight">
                      {metric.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
