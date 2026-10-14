import React, { useState } from 'react';
import { BentoCard } from '../common/BentoCard';
import { SectionTag } from '../common/SectionTag';
import { ArrowRight } from 'lucide-react';

interface MetricState {
  architectureCoupling: number; // 1 (couplé) to 5 (découplé DDD)
  testCoverage: number; // 1 (<20%) to 5 (>85%)
  scalabilityTolerance: number; // 1 (SPOF) to 5 (Multi-AZ / Auto-healing)
  observabilityLevel: number; // 1 (Logs) to 5 (Distributed Tracing / SLO)
}

export const ArchitectureDebtCalculator: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricState>({
    architectureCoupling: 3,
    testCoverage: 2,
    scalabilityTolerance: 3,
    observabilityLevel: 2,
  });

  // Calculate scores
  const totalScore = Math.round(
    ((metrics.architectureCoupling +
      metrics.testCoverage +
      metrics.scalabilityTolerance +
      metrics.observabilityLevel) /
      20) *
      100
  );

  const getScoreProfile = (score: number) => {
    if (score >= 80) {
      return {
        level: 'Socle Résilient & Mature',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-400/10',
        borderColor: 'border-emerald-400/30',
        risk: 'Faible risque de régression lors des montées en charge',
        recommendation:
          'Audit d’optimisation fine des coûts et accélération des cycles de release.',
      };
    } else if (score >= 50) {
      return {
        level: 'Fragilités Systémiques Modérées',
        color: 'text-[#38BDF8]',
        bgColor: 'bg-[#38BDF8]/10',
        borderColor: 'border-[#38BDF8]/30',
        risk: 'Goulets d’étranglement identifiés lors des pics de trafic',
        recommendation:
          'Mise en place d’un DAT, découplage asynchrone et introduction de Clean Architecture.',
      };
    } else {
      return {
        level: 'Dette Technique Critique',
        color: 'text-amber-400',
        bgColor: 'bg-amber-400/10',
        borderColor: 'border-amber-400/30',
        risk: 'Vulnérabilité aux pannes en cascade et vélocité d’équipe bridée',
        recommendation:
          'Audit d’urgence prioritaire et refonte ciblée du domaine sans interruption de service.',
      };
    }
  };

  const profile = getScoreProfile(totalScore);

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
                {/* 1. Couplage */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-[#F8FAFC] uppercase tracking-wider">
                      1. Découpage & Domaine
                    </label>
                    <span className="text-xs font-mono text-[#38BDF8]">
                      {metrics.architectureCoupling === 1 && 'Monolithe couplé'}
                      {metrics.architectureCoupling === 2 && 'Couplage BDD direct'}
                      {metrics.architectureCoupling === 3 && 'Modulaire partiel'}
                      {metrics.architectureCoupling === 4 && 'Clean Architecture'}
                      {metrics.architectureCoupling === 5 && 'DDD strict & Hexagonal'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={metrics.architectureCoupling}
                    onChange={(e) =>
                      setMetrics({ ...metrics, architectureCoupling: Number(e.target.value) })
                    }
                    className="w-full accent-[#38BDF8] bg-[#131926] h-2 rounded cursor-pointer"
                  />
                </div>

                {/* 2. Tests */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-[#F8FAFC] uppercase tracking-wider">
                      2. Tests & Typage
                    </label>
                    <span className="text-xs font-mono text-[#38BDF8]">
                      {metrics.testCoverage === 1 && 'Tests manuels'}
                      {metrics.testCoverage === 2 && 'Unitaires épars (< 30%)'}
                      {metrics.testCoverage === 3 && 'Couverture ~50%'}
                      {metrics.testCoverage === 4 && 'Intégration & Typage strict (> 75%)'}
                      {metrics.testCoverage === 5 && 'E2E & CI bloquante (100%)'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={metrics.testCoverage}
                    onChange={(e) =>
                      setMetrics({ ...metrics, testCoverage: Number(e.target.value) })
                    }
                    className="w-full accent-[#38BDF8] bg-[#131926] h-2 rounded cursor-pointer"
                  />
                </div>

                {/* 3. Résilience */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-[#F8FAFC] uppercase tracking-wider">
                      3. Tolérance aux Pannes
                    </label>
                    <span className="text-xs font-mono text-[#38BDF8]">
                      {metrics.scalabilityTolerance === 1 && 'Point unique de panne (SPOF)'}
                      {metrics.scalabilityTolerance === 2 && 'Redémarrage manuel'}
                      {metrics.scalabilityTolerance === 3 && 'Réplication basique'}
                      {metrics.scalabilityTolerance === 4 && 'Failover auto & Circuit Breakers'}
                      {metrics.scalabilityTolerance === 5 && 'Multi-AZ & Zero-Downtime'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={metrics.scalabilityTolerance}
                    onChange={(e) =>
                      setMetrics({ ...metrics, scalabilityTolerance: Number(e.target.value) })
                    }
                    className="w-full accent-[#38BDF8] bg-[#131926] h-2 rounded cursor-pointer"
                  />
                </div>

                {/* 4. Observabilité */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-[#F8FAFC] uppercase tracking-wider">
                      4. Observabilité & Alerting
                    </label>
                    <span className="text-xs font-mono text-[#38BDF8]">
                      {metrics.observabilityLevel === 1 && 'Logs locaux basiques'}
                      {metrics.observabilityLevel === 2 && 'Agrégation de logs'}
                      {metrics.observabilityLevel === 3 && 'Métriques CPU / RAM'}
                      {metrics.observabilityLevel === 4 && 'Tracing OpenTelemetry'}
                      {metrics.observabilityLevel === 5 && 'SLO/SLI & Alerting p99'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={metrics.observabilityLevel}
                    onChange={(e) =>
                      setMetrics({ ...metrics, observabilityLevel: Number(e.target.value) })
                    }
                    className="w-full accent-[#38BDF8] bg-[#131926] h-2 rounded cursor-pointer"
                  />
                </div>
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
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-[6px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-mono text-xs font-medium tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all"
                >
                  <span>Demander un audit approfondi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};
