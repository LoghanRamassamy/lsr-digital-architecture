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
    headline:
      'Façonner des architectures web robustes, pensées pour durer et évoluer sans friction.',
    subheadline:
      "Nous concevons des fondations techniques pérennes pour les entreprises exigeantes. De la modélisation de systèmes distribués au développement d'applications web critiques, chaque ligne de code répond à une exigence chirurgicale de performance, de clarté et de résilience.",
    ctaPrimary: 'Explorer nos expertises',
    ctaSecondary: 'Consulter un architecte',
    metricsBanner: [
      {
        index: '01',
        title: 'Robustesse native',
        description:
          'Architectures tolérantes aux pannes conçues pour encaisser les montées en charge sans faillir.',
      },
      {
        index: '02',
        title: 'Précision chirurgicale',
        description:
          'Typage strict, Clean Architecture, découpage modulaire et couverture de tests exhaustive.',
      },
      {
        index: '03',
        title: 'Pérennité du code',
        description:
          "Zéro dette technique silencieuse, documentation limpide et transfert d'ingénierie fluide.",
      },
    ],
  },
  services: {
    sectionTag: 'SERVICES & CAPACITÉS',
    sectionTitle: "Un savoir-faire d'ingénierie taillé pour les environnements complexes",
    sectionDescription:
      'Une approche globale alliant vision macroscopique du système et maîtrise microscopique du code.',
    cards: [
      {
        code: 'SEC_01 // ARCHITECTURE',
        title: 'Conception & Architecture Système',
        pitch:
          'Modélisation de socles applicatifs résilients, modulaires et extensibles dès le premier jour.',
        description:
          'Plans directeurs, choix de patterns (modulaire, événementiel, microservices ciblés), cartographie des flux et découpage de domaine (DDD) pour garantir une isolation stricte des responsabilités.',
        deliverables: [
          "Dossier d'architecture technique (DAT) & cartographie",
          'Modélisation de domaines & flux de données',
          'Stratégie de scalabilité et de haute disponibilité',
        ],
        tags: ['Clean Architecture', 'DDD', 'Cloud Native', 'APIs & Flux'],
      },
      {
        code: 'SEC_02 // CRAFTSMANSHIP',
        title: 'Ingénierie Web Full-Stack & Applications Métier',
        pitch:
          "Développement sur-mesure d'outils critiques où chaque milliseconde et interaction compte.",
        description:
          "Conception d'applications métier complètes, d'APIs transactionnelles et d'interfaces web haute performance. Fluidité, sécurité et maintenabilité pérenne.",
        deliverables: [
          'Applications web sur-mesure & portails complexes',
          'Back-ends transactionnels & APIs scalables',
          "Composants d'interface modulaires et testés",
        ],
        tags: ['Java / Spring', 'TypeScript', 'Angular / React', 'PostgreSQL'],
      },
      {
        code: 'SEC_03 // RESILIENCE',
        title: 'Audit Technique, Refactorisation & Performance',
        pitch:
          "Éliminer la dette technique, accélérer les temps de réponse et consolider l'existant.",
        description:
          "Diagnostic en profondeur de bases de code historiques. Élimination des goulets d'étranglement et restructuration sans interruption de service.",
        deliverables: [
          'Audit de code, performance et couverture',
          'Plan de refactorisation étape par étape',
          'Optimisation des requêtes & pipelines CI/CD',
        ],
        tags: ['Code Review', 'Profiling & Benchmarking', 'DevOps & CI/CD', 'Sécurité'],
      },
    ],
  },
  methodology: {
    sectionTag: "MÉTHODOLOGIE D'INGÉNIERIE",
    sectionTitle: "L'exigence du plan, la rigueur de l'exécution",
    steps: [
      {
        step: '01',
        name: 'Audit & Cartographie',
        description:
          'Immersion dans les règles métier, analyse des flux opérationnels et contraintes de charge.',
      },
      {
        step: '02',
        name: 'Élaboration du Blueprint',
        description:
          "Conception du schéma d'architecture cible, validation des interfaces contractuelles (APIs).",
      },
      {
        step: '03',
        name: 'Façonnage & Tests',
        description:
          'Développement itératif avec tests automatisés stricts, typage fort et revues de code systématiques.',
      },
      {
        step: '04',
        name: 'Déploiement & Pérennisation',
        description: 'Mise en production orchestrée, observabilité et passation documentée.',
      },
    ],
  },
  manifesto: {
    sectionTag: 'PHILOSOPHIE & ENGAGEMENT',
    quote:
      "« Construire une application logicielle ne consiste pas seulement à faire fonctionner du code aujourd'hui. C'est l'art de concevoir un système qui demeurera lisible, robuste et élégant face aux défis de demain. »",
    principles: [
      {
        title: 'Sobriété & Justesse',
        text: 'Refus systématique de la sur-ingénierie. La simplicité maîtrisée reste le summum de la robustesse.',
      },
      {
        title: "Tolérance zéro à l'imprécision",
        text: "Chaque contrat d'interface, chaque schéma de base de données fait l'objet d'un contrôle rigoureux.",
      },
      {
        title: "Artisanat d'élite",
        text: 'Une culture du logiciel où le code propre et la documentation claire sont indissociables du résultat final.',
      },
    ],
  },
  contact: {
    sectionTag: 'INITIALISATION DE PROJET',
    headline: 'Prêt à bâtir des fondations inébranlables pour vos projets digitaux ?',
    subheadline: "Échangeons sur vos enjeux d'ingénierie, d'audit ou de refonte d'architecture.",
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
