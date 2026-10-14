// ==========================================================================
// LSR Digital Architecture — Interactive Blueprint Domain Model
// Encapsulates architectural topology, layers, telemetry & contracts
// ==========================================================================

export type BlueprintNodeType =
  | 'gateway'
  | 'domain'
  | 'event'
  | 'database'
  | 'client'
  | 'telemetry';

export type BlueprintLayer = 'all' | 'ddd' | 'resilience';

export interface NodeMetrics {
  latency: string;
  throughput: string;
  sla: string;
  pattern: string;
}

export interface BlueprintNode {
  id: string;
  name: string;
  role: string;
  tag: string;
  x: number;
  y: number;
  type: BlueprintNodeType;
  metrics: NodeMetrics;
  details: string[];
}

export const BLUEPRINT_NODES: BlueprintNode[] = [
  {
    id: 'client-edge',
    name: 'Clients & Edge Layer',
    role: 'Distribution & Cache Global',
    tag: 'EDGE_01',
    x: 80,
    y: 190,
    type: 'client',
    metrics: {
      latency: '< 15ms',
      throughput: '120k req/s',
      sla: '99.99%',
      pattern: 'Edge CDN / HTTP/3',
    },
    details: [
      'BFF typé en TypeScript strict & terminaison TLS 1.3',
      'Politique de cache granulaire & CDN multi-régions',
    ],
  },
  {
    id: 'api-gateway',
    name: 'Reverse Proxy & API Gateway',
    role: 'Routage Sécurisé & Rate Limiting',
    tag: 'GATEWAY_CORE',
    x: 270,
    y: 190,
    type: 'gateway',
    metrics: {
      latency: '0.8ms',
      throughput: '85k req/s',
      sla: '99.995%',
      pattern: 'Envoy / Zero-Trust',
    },
    details: [
      'Filtrage cryptographique mTLS & validation OpenAPI',
      'Rate limiting Token Bucket contre les pics de charge',
    ],
  },
  {
    id: 'domain-core',
    name: 'Noyau Métier / Domain Core',
    role: 'Clean Architecture & Isolation DDD',
    tag: 'DOMAIN_HEX',
    x: 480,
    y: 130,
    type: 'domain',
    metrics: {
      latency: '3.2ms',
      throughput: '42k req/s',
      sla: '99.99%',
      pattern: 'Hexagonal / DDD',
    },
    details: [
      'Clean Architecture : zéro dépendance framework',
      'Inversion de dépendance stricte & tests unitaires > 90%',
    ],
  },
  {
    id: 'event-broker',
    name: 'Event Backbone / Outbox',
    role: 'Transactions Événementielles & Découplage',
    tag: 'EVENT_BUS',
    x: 480,
    y: 270,
    type: 'event',
    metrics: {
      latency: '1.4ms',
      throughput: '150k msg/s',
      sla: '99.999%',
      pattern: 'Transactional Outbox',
    },
    details: [
      'Transactional Outbox : garantie zéro perte d’événement',
      'Découplage temporel asynchrone des flux critiques',
    ],
  },
  {
    id: 'db-primary',
    name: 'Stockage & Persistance Résiliente',
    role: 'PostgreSQL ACID & Réplication Synchrone',
    tag: 'DB_PRIMARY',
    x: 710,
    y: 130,
    type: 'database',
    metrics: {
      latency: '1.1ms',
      throughput: '28k tx/s',
      sla: '99.999%',
      pattern: 'Primary-Replica + WAL',
    },
    details: [
      'Isolation ACID stricte & réplication synchrone',
      'Failover automatique N+1 avec tolérance aux pannes',
    ],
  },
  {
    id: 'telemetry',
    name: 'Observabilité & Audit Trail',
    role: 'Tracing Distribué & Métriques Haute Fidélité',
    tag: 'OTEL_CORE',
    x: 710,
    y: 270,
    type: 'telemetry',
    metrics: {
      latency: '< 0.5ms',
      throughput: '350k pts/s',
      sla: '99.95%',
      pattern: 'OpenTelemetry / Prometheus',
    },
    details: [
      'Tracing distribué OpenTelemetry de bout en bout',
      'Alerting proactif basé sur les dérives de latence p99',
    ],
  },
];

/**
 * Pure predicate to determine if a node is highlighted under a specific layer filter.
 */
export function isNodeActiveInLayer(node: BlueprintNode, layer: BlueprintLayer): boolean {
  if (layer === 'all') return true;
  if (layer === 'ddd') {
    return node.type === 'domain' || node.type === 'gateway' || node.type === 'database';
  }
  if (layer === 'resilience') {
    return node.type === 'event' || node.type === 'database' || node.type === 'telemetry';
  }
  return true;
}
