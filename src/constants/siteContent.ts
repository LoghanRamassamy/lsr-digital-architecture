import { SiteContent } from '../types';

export const siteContent: SiteContent = {
  meta: {
    title: 'LSR Digital Architecture — Ingénierie logicielle & Architectures web haute résilience',
    description:
      "Société d'ingénierie et de conseil en architecture logicielle. Conception sur-mesure d'applications web robustes, scalables et taillées pour les environnements critiques.",
  },
  header: {
    brandName: 'LSR',
    brandSuffix: 'Digital Architecture',
    statusBadge: 'DISPONIBLE POUR PROJETS Q4 2026',
    navigation: [
      { id: 'vision', label: '01. Approche' },
      { id: 'services', label: '02. Savoir-faire' },
      { id: 'blueprint', label: '03. Méthode' },
      { id: 'manifesto', label: '04. Philosophie' },
      { id: 'contact', label: '05. Contact' },
    ],
    cta: 'Initier un échange',
  },
  hero: {
    systemTag: '[ ARCHITECTURE LOGICIELLE & INGÉNIERIE SYSTÈME ]',
    headline: 'Façonner des architectures web robustes, conçues pour durer sans friction.',
    subheadline:
      'Conception de socles techniques critiques et de systèmes distribués. Alliez Clean Architecture, haute performance et zéro dette technique.',
    ctaPrimary: 'Explorer nos expertises',
    ctaSecondary: 'Consulter un architecte',
    metricsBanner: [
      {
        value: '99.99%',
        title: 'Haute Résilience',
        description: 'Tolérance aux pannes native et reprise automatique sans interruption.',
      },
      {
        value: '< 50ms',
        title: 'Latence Maîtrisée',
        description: 'Profilage p99 chirurgical, découplage et flux asynchrones.',
      },
      {
        value: '0 Dette',
        title: 'Pérennité du Code',
        description: 'Clean Architecture, typage strict et couverture de tests exhaustive.',
      },
    ],
  },
  services: {
    sectionTag: 'SERVICES & EXPERTISES',
    sectionTitle: "Des solutions d'ingénierie ciblées pour les systèmes critiques",
    sectionDescription:
      'Une approche pragmatique alliant vision globale du système et rigueur microscopique du code.',
    cards: [
      {
        code: 'SEC_01 // ARCHITECTURE',
        title: 'Conception & Architecture Système',
        pitch: 'Socles applicatifs modulaires et évolutifs.',
        description:
          "Plans directeurs (DAT), cartographie DDD et flux de données résilients pour garantir l'isolation des responsabilités.",
        deliverables: [
          "Dossier d'Architecture Technique (DAT)",
          'Cartographie DDD & flux de données',
          'Stratégie de scalabilité & haute disponibilité',
        ],
        tags: ['Clean Arch', 'DDD', 'Cloud Native', 'Event-Driven'],
      },
      {
        code: 'SEC_02 // CRAFTSMANSHIP',
        title: 'Ingénierie Web Full-Stack',
        pitch: 'Applications métier et APIs haute performance.',
        description:
          "Conception sur-mesure d'applications critiques, du back-end transactionnel aux interfaces réactives.",
        deliverables: [
          'Applications web sur-mesure & portails complexes',
          'Back-ends transactionnels & APIs scalables',
          'Composants modulaires typés et testés',
        ],
        tags: ['TypeScript', 'Java / Spring', 'React / Next', 'PostgreSQL'],
      },
      {
        code: 'SEC_03 // RESILIENCE',
        title: 'Audit Technique & Refactorisation',
        pitch: 'Élimination de dette et consolidation.',
        description:
          "Diagnostic en profondeur, élimination des goulets d'étranglement et restructuration sans coupure de service.",
        deliverables: [
          'Audit de code, performance et couverture',
          'Plan de refactorisation étape par étape',
          'Optimisation des requêtes & pipelines CI/CD',
        ],
        tags: ['Code Review', 'Profiling p99', 'DevOps & CI/CD', 'Sécurité'],
      },
    ],
  },
  methodology: {
    sectionTag: "MÉTHODE D'INGÉNIERIE",
    sectionTitle: "L'exigence du plan, la rigueur de l'exécution",
    steps: [
      {
        step: '01',
        name: 'Audit & Cartographie',
        description: 'Analyse des flux opérationnels, contraintes de charge et dette existante.',
      },
      {
        step: '02',
        name: 'Blueprint Cible',
        description: "Schéma directeur, découpage de domaine et validation des contrats d'APIs.",
      },
      {
        step: '03',
        name: 'Façonnage & Tests',
        description: 'Développement Clean Architecture, typage strict et tests automatisés.',
      },
      {
        step: '04',
        name: 'Déploiement & PRA',
        description: 'Mise en production sécurisée, observabilité continue et passation.',
      },
    ],
  },
  manifesto: {
    sectionTag: 'PHILOSOPHIE',
    quote:
      "« L'art de l'architecture logicielle consiste à concevoir un système qui demeurera lisible, robuste et élégant face aux défis de demain. »",
    principles: [
      {
        title: 'Sobriété & Justesse',
        text: 'Refus de la sur-ingénierie : la simplicité maîtrisée reste le garant ultime de la robustesse.',
      },
      {
        title: 'Rigueur des Contrats',
        text: 'Typage strict et schémas immuables pour éliminer les régressions silencieuses.',
      },
      {
        title: 'Artisanat & Transmission',
        text: 'Code propre, documenté et pensé pour être transmis sans friction.',
      },
    ],
  },
  contact: {
    sectionTag: 'INITIALISATION',
    headline: 'Prêt à consolider votre socle technique ?',
    subheadline: "Échangeons sur vos enjeux d'architecture, d'audit ou de développement critique.",
    directContact: {
      location: 'Conflans-Sainte-Honorine / Île-de-France & Remote',
      availability: 'Consultation technique sous 48h ouvrées',
    },
  },
  footer: {
    legalEntity: 'LSR Digital Architecture SAS',
    tagline: 'Conçu avec précision. Bâti pour la performance.',
    copyright: '© 2026 LSR Digital Architecture. Tous droits réservés.',
  },
};
