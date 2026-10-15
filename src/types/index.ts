export interface NavigationItem {
  id: string;
  label: string;
}

export interface MetricItem {
  index?: string;
  value: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  code: string;
  title: string;
  pitch: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface MethodologyStep {
  step: string;
  name: string;
  description: string;
}

export interface ManifestoPrinciple {
  title: string;
  text: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  header: {
    brandName: string;
    brandSuffix: string;
    statusBadge: string;
    navigation: NavigationItem[];
    cta: string;
  };
  hero: {
    systemTag: string;
    headline: string;
    headlineAccent?: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metricsBanner: MetricItem[];
  };
  services: {
    sectionTag: string;
    sectionTitle: string;
    sectionDescription: string;
    cards: ServiceCard[];
  };
  methodology: {
    sectionTag: string;
    sectionTitle: string;
    steps: MethodologyStep[];
  };
  manifesto: {
    sectionTag: string;
    quote: string;
    principles: ManifestoPrinciple[];
  };
  contact: {
    sectionTag: string;
    headline: string;
    subheadline: string;
    email: string;
    directContact: {
      location: string;
      availability: string;
    };
  };
  footer: {
    legalEntity: string;
    tagline?: string;
    copyright: string;
    email: string;
  };
}

// Glossary Domain Types
export type GlossaryCategory =
  | 'all'
  | 'architecture'
  | 'resilience'
  | 'craftsmanship'
  | 'governance';

export type TermKind = 'technique' | 'methodologique';

export interface GlossaryItem {
  id: string;
  term: string;
  acronym?: string;
  kind: TermKind;
  category: 'architecture' | 'resilience' | 'craftsmanship' | 'governance';
  categoryLabel: string;
  shortDefinition: string;
  fullDefinition: string;
  siteContext: string;
  keyBenefit?: string;
  tags: string[];
}

export type {
  BlueprintNode,
  BlueprintNodeType,
  BlueprintLayer,
  NodeMetrics,
} from '../domain/blueprint/blueprintModel';

export type {
  MetricState,
  ResilienceProfile,
  MetricDefinition,
} from '../domain/resilience/resilienceCalculator';
