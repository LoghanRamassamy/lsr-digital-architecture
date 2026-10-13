export interface NavigationItem {
  id: string;
  label: string;
}

export interface MetricItem {
  index: string;
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
    directContact: {
      location: string;
      availability: string;
    };
  };
  footer: {
    legalEntity: string;
    tagline: string;
    copyright: string;
  };
}

export interface ArchitectureNode {
  id: string;
  name: string;
  layer: 'client' | 'gateway' | 'domain' | 'persistence' | 'observability';
  x: number;
  y: number;
  status: 'active' | 'redundant' | 'secured';
  details: string;
  tech: string[];
}
