import React, { useState } from 'react';
import { BentoCard } from '../common/BentoCard';
import { SectionTag } from '../common/SectionTag';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';
import {
  DEFAULT_METRICS,
  METRIC_DEFINITIONS,
  calculateResilienceScore,
  getResilienceProfile,
  type MetricState,
} from '../../domain/resilience/resilienceCalculator';

export const ArchitectureDebtCalculator: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricState>(DEFAULT_METRICS);

  const totalScore = calculateResilienceScore(metrics);
  const profile = getResilienceProfile(totalScore);

  const handleMetricChange = (metricId: keyof MetricState, value: number) => {
    setMetrics((prev) => ({
      ...prev,
      [metricId]: value,
    }));
  };

  return (
    <section className="py-20 relative bg-[#090A0F] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionTag variant="cyan">OUTIL D'ÉVALUATION RAPIDE</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F8FAFC] tracking-tight mb-3">
            Simulateur d'Indice de Résilience Logicielle
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Évaluez en 30 secondes l'état de solidité de votre socle technique et anticipez vos
            besoins d'ingénierie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-5">
            <BentoCard className="p-6">
              <div className="space-y-6">
                {METRIC_DEFINITIONS.map((def) => {
                  const currentValue = metrics[def.id];
                  return (
                    <div key={def.id}>
                      <div className="flex justify-between items-center mb-2">
                        <label
                          htmlFor={`metric-${def.id}`}
                          className="text-xs font-mono text-[#F8FAFC] uppercase tracking-wider"
                        >
                          {def.title}
                        </label>
                        <span className="text-xs font-mono text-[#38BDF8]">
                          {def.stepLabels[currentValue]}
                        </span>
                      </div>
                      <input
                        id={`metric-${def.id}`}
                        type="range"
                        min="1"
                        max="5"
                        step="1"
                        value={currentValue}
                        onChange={(e) => handleMetricChange(def.id, Number(e.target.value))}
                        className="debt-calculator__slider w-full accent-[#38BDF8] bg-[#131926] h-2 rounded cursor-pointer"
                        aria-valuemin={1}
                        aria-valuemax={5}
                        aria-valuenow={currentValue}
                        aria-valuetext={def.stepLabels[currentValue]}
                      />
                    </div>
                  );
                })}
              </div>
            </BentoCard>
          </div>

          {/* Results Scoreboard Column */}
          <div className="lg:col-span-5">
            <BentoCard glowColor="cyan" className="p-7">
              <div className="text-center pb-6 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-widest block mb-2">
                  INDICE DE RÉSILIENCE CALCULÉ
                </span>
                <div className="text-6xl font-heading font-black tracking-tight text-[#F8FAFC] my-2">
                  {totalScore}
                  <span className="text-2xl font-mono text-[#38BDF8]">/100</span>
                </div>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium ${profile.bgColor} ${profile.color} border ${profile.borderColor}`}
                >
                  {profile.level}
                </div>
              </div>

              <div className="space-y-4 py-6 border-b border-white/[0.08] text-xs">
                <div>
                  <span className="font-mono text-[#64748B] uppercase block text-[10px] mb-1">
                    DIAGNOSTIC DE RISQUE :
                  </span>
                  <p className="text-[#F8FAFC] font-medium leading-relaxed">{profile.risk}</p>
                </div>

                <div>
                  <span className="font-mono text-[#64748B] uppercase block text-[10px] mb-1">
                    PRÉCONISATION LSR DIGITAL ARCHITECTURE :
                  </span>
                  <p className="text-[#94A3B8] leading-relaxed">{profile.recommendation}</p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  iconPosition="right"
                >
                  Demander un audit approfondi
                </Button>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};
