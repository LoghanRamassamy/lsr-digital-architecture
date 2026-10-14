// ==========================================================================
// LSR Digital Architecture — Resilience Calculator Domain Logic
// Pure business logic: 100% decoupled from UI & Frameworks
// ==========================================================================

export interface MetricState {
  architectureCoupling: number; // 1 (couplé) to 5 (découplé DDD)
  testCoverage: number; // 1 (<20%) to 5 (>85%)
  scalabilityTolerance: number; // 1 (SPOF) to 5 (Multi-AZ / Auto-healing)
  observabilityLevel: number; // 1 (Logs) to 5 (Distributed Tracing / SLO)
}

export interface ResilienceProfile {
  level: string;
  color: string;
  bgColor: string;
  borderColor: string;
  risk: string;
  recommendation: string;
}

export interface MetricDefinition {
  id: keyof MetricState;
  title: string;
  stepLabels: Record<number, string>;
}

export const DEFAULT_METRICS: MetricState = {
  architectureCoupling: 3,
  testCoverage: 2,
  scalabilityTolerance: 3,
  observabilityLevel: 2,
};

export const METRIC_DEFINITIONS: MetricDefinition[] = [
  {
    id: 'architectureCoupling',
    title: '1. Découpage & Domaine',
    stepLabels: {
      1: 'Monolithe couplé',
      2: 'Couplage BDD direct',
      3: 'Modulaire partiel',
      4: 'Clean Architecture',
      5: 'DDD strict & Hexagonal',
    },
  },
  {
    id: 'testCoverage',
    title: '2. Couverture de Tests & Intégration',
    stepLabels: {
      1: 'Tests manuels (<20%)',
      2: 'Tests unitaires épars (~40%)',
      3: 'CI automatisée (~60%)',
      4: 'TDD & Tests d’intégration (>75%)',
      5: 'Mutation Testing & E2E (>85%)',
    },
  },
  {
    id: 'scalabilityTolerance',
    title: '3. Tolérance aux Pannes & Redondance',
    stepLabels: {
      1: 'SPOF unique / Pas de secours',
      2: 'Sauvegarde manuelle quotidienne',
      3: 'Réplication basique',
      4: 'Multi-AZ & Circuit Breakers',
      5: 'Auto-healing & Zéro interruption',
    },
  },
  {
    id: 'observabilityLevel',
    title: '4. Observabilité & Alerting',
    stepLabels: {
      1: 'Logs locaux basiques',
      2: 'Agrégation de logs',
      3: 'Métriques CPU / RAM',
      4: 'Tracing OpenTelemetry',
      5: 'SLO/SLI & Alerting p99',
    },
  },
];

/**
 * Computes an overall resilience score out of 100 based on core architectural metrics.
 */
export function calculateResilienceScore(metrics: MetricState): number {
  const sum =
    metrics.architectureCoupling +
    metrics.testCoverage +
    metrics.scalabilityTolerance +
    metrics.observabilityLevel;

  return Math.round((sum / 20) * 100);
}

/**
 * Returns a diagnostic risk profile and engineering recommendation for a given score.
 */
export function getResilienceProfile(score: number): ResilienceProfile {
  if (score >= 80) {
    return {
      level: 'Socle Résilient & Mature',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
      risk: 'Faible risque de régression lors des montées en charge',
      recommendation: 'Audit d’optimisation fine des coûts et accélération des cycles de release.',
    };
  }

  if (score >= 50) {
    return {
      level: 'Fragilités Systémiques Modérées',
      color: 'text-[#38BDF8]',
      bgColor: 'bg-[#38BDF8]/10',
      borderColor: 'border-[#38BDF8]/30',
      risk: 'Goulets d’étranglement identifiés lors des pics de trafic',
      recommendation:
        'Mise en place d’un DAT, découplage asynchrone et introduction de Clean Architecture.',
    };
  }

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
