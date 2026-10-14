import { GlossaryItem } from '../types';

export const GLOSSARY_CATEGORIES = [
  { id: 'all', label: 'Tous les termes' },
  { id: 'architecture', label: 'Architecture & Conception' },
  { id: 'resilience', label: 'Résilience & Performance' },
  { id: 'craftsmanship', label: 'Craftsmanship & Qualité' },
  { id: 'governance', label: 'Méthodologie & Cadre Légal' },
] as const;

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    id: 'clean-architecture',
    term: 'Clean Architecture (Architecture Propre)',
    acronym: 'Clean Arch',
    kind: 'technique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Modèle architectural organisant le logiciel en cercles concentriques étanches où le domaine métier est au centre, totalement indépendant des frameworks, bases de données et interfaces.',
    fullDefinition:
      "Théorisée par Robert C. Martin (Uncle Bob), la Clean Architecture repose sur la règle de dépendance : les dépendances de code ne pointent que vers l'intérieur (vers le métier). Cela rend la logique d'entreprise totalement découplée des détails techniques (Vite, React, Spring Boot, PostgreSQL) et permet de faire évoluer ou de remplacer n'importe quel composant technique sans impacter le cœur métier.",
    siteContext:
      'Pilier central de LSR Digital Architecture. Cité dans l’approche (01), le service 01 & 02 (Savoir-faire), le manifeste (04) et le simulateur de résilience.',
    keyBenefit:
      'Pérennité maximale du code, testabilité unitaire sans mock complexe et indépendance vis-à-vis des modes technologiques.',
    tags: ['Architecture', 'Découplage', 'Domaine', 'Maintenabilité', 'Testabilité'],
  },
  {
    id: 'ddd',
    term: 'Domain-Driven Design (Conception Pilotée par le Domaine)',
    acronym: 'DDD',
    kind: 'technique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Approche de conception logicielle alignant la structure du code sur la complexité et les réalités du métier des experts de l’entreprise.',
    fullDefinition:
      'Introduit par Eric Evans, le DDD préconise l’usage d’un langage omniprésent (Ubiquitous Language) partagé entre développeurs et experts métier. Il décompose un système d’information en sous-domaines et contextes délimités (Bounded Contexts) pour éliminer les ambiguïtés sémantiques et éviter le piège du modèle unique fourre-tout.',
    siteContext:
      'Mentionné dans le Service 01 (Conception & Architecture Système) et le Simulateur d’Indice de Résilience.',
    keyBenefit:
      'Traduction fidèle des besoins métier dans le code, modularité renforcée et communication fluide sans perte d’information.',
    tags: ['DDD', 'Modélisation', 'Bounded Context', 'Métier', 'Architecture'],
  },
  {
    id: 'bounded-context',
    term: 'Bounded Context (Contexte Délimité)',
    kind: 'technique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Frontière explicite au sein de laquelle un modèle de données et un vocabulaire métier ont une signification précise et non ambiguë.',
    fullDefinition:
      'Dans une entreprise, un mot comme "Client" ou "Commande" a des significations différentes selon qu’on parle à la facturation, à la logistique ou au support client. Le Bounded Context isole chaque modèle dans sa bulle logique avec ses propres règles, évitant les couplages accidentels entre départements ou services.',
    siteContext:
      'Utilisé lors de la phase 02 (Blueprint Cible) et dans le catalogue des livrables de cartographie DDD.',
    keyBenefit:
      'Autonomie des modules, suppression des conflits de schémas et facilitation de la transition vers des microservices ou un monolithe modulaire.',
    tags: ['DDD', 'Découpage', 'Frontières', 'Microservices'],
  },
  {
    id: 'architecture-hexagonale',
    term: 'Architecture Hexagonale (Ports & Adapteurs)',
    kind: 'technique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Pattern d’architecture isolant le cœur de l’application des interactions extérieures à l’aide de ports (interfaces) et d’adaptateurs (implémentations techniques).',
    fullDefinition:
      'Créé par Alistair Cockburn, ce modèle place l’application au centre d’un "hexagone". Les ports définissent ce que l’application offre (Driving ports) et ce dont elle a besoin (Driven ports). Les adaptateurs traduisent les protocoles externes (contrôleur REST HTTP, client PostgreSQL, broker Kafka, interface CLI) en appels compris par le domaine sans que celui-ci ne connaisse la technologie sous-jacente.',
    siteContext:
      'Mentionné dans le simulateur de résilience et le dossier d’ingénierie web de LSR Digital Architecture.',
    keyBenefit:
      'Facilite les tests automatisés avec des adaptateurs de simulation en mémoire et permet de changer de base de données ou de framework sans réécrire le métier.',
    tags: ['Hexagonale', 'Ports & Adapters', 'Isolation', 'Testabilité'],
  },
  {
    id: 'event-driven',
    term: 'Event-Driven Architecture (Architecture Orientée Événements)',
    acronym: 'EDA',
    kind: 'technique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Paradigme architectural où la communication entre services repose sur la production, la détection et la consommation d’événements asynchrones.',
    fullDefinition:
      'Plutôt que des appels synchrones bloquants de type requête-réponse (REST / RPC), les composants publient des événements décrivant un fait passé (ex: "CommandeValidée"). D’autres composants s’abonnent à ces événements et réagissent de manière découplée dans le temps, souvent orchestrés par des courtiers comme Kafka ou RabbitMQ.',
    siteContext:
      'Présent dans le Service 01 (Conception & Architecture Système) et les fiches techniques du site.',
    keyBenefit:
      'Scalabilité horizontale massive, absorption des pics de charge sans saturation et résilience accrue en cas d’indisponibilité momentanée d’un consommateur.',
    tags: ['Asynchrone', 'Kafka', 'Découplage', 'Événements', 'Scalabilité'],
  },
  {
    id: 'monolithe-modulaire',
    term: 'Monolithe Modulaire (Modular Monolith)',
    kind: 'technique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Architecture regroupée dans une base de code et un déploiement uniques, mais structurée en modules strictement encapsulés avec des frontières étanches.',
    fullDefinition:
      'Alternative pragmatique à la complexité prématurée des microservices distribués. Les modules communiquent uniquement via des interfaces publiques déclarées, interdisant les accès directs aux tables ou structures internes d’autres modules. Cela offre la simplicité d’exploitation d’un monolithe tout en préparant sereinement une extraction future.',
    siteContext:
      'Au cœur de la méthodologie de dimensionnement et de lutte contre la sur-ingénierie défendue dans le manifeste (04).',
    keyBenefit:
      'Faible coût d’exploitation, déploiement sans réseau complexe et refactorisation aisée tout en conservant une discipline modulaire exemplaire.',
    tags: ['Monolithe', 'Modularité', 'Pragmatisme', 'Architecture'],
  },
  {
    id: 'strangler-fig',
    term: 'Strangler Fig Pattern (Patron Figuier Étrangleur)',
    kind: 'technique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Stratégie de refonte consistant à remplacer progressivement un système hérité (legacy) par de nouveaux composants modernes sans arrêt de service ni "grand soir".',
    fullDefinition:
      'Inspiré des figuiers étrangleurs qui germent sur un arbre hôte et l’enveloppent jusqu’à s’y substituer, ce patron consiste à placer un routeur ou proxy en amont. Les nouvelles fonctionnalités ou les parcours migrés sont dirigés vers la nouvelle architecture propre, tandis que le reste continue de tourner sur l’ancien système, jusqu’au décommissionnement complet du legacy.',
    siteContext:
      'Technique clé employée dans le Service 03 (Audit Technique & Refactorisation) pour sécuriser les migrations critiques.',
    keyBenefit:
      'Élimination du risque mortel des refontes totales, visibilité continue de la valeur livrée et zéro interruption pour les utilisateurs finaux.',
    tags: ['Migration', 'Legacy', 'Refactoring', 'Continuité'],
  },
  {
    id: 'dat',
    term: 'Dossier d’Architecture Technique',
    acronym: 'DAT',
    kind: 'methodologique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Document de référence formalisant l’ensemble des choix techniques, dimensionnements d’infrastructure, flux de données et exigences de sécurité d’un projet.',
    fullDefinition:
      'Le DAT fait le pont entre les exigences métier et la réalité d’ingénierie logicielle. Il détaille la cartographie applicative, les contrats d’API, les choix de bases de données, les matrices de flux réseau, les règles de conformité (RGPD) et les plans de reprise d’activité. C’est la pierre angulaire transmise aux équipes techniques pour garantir la pérennité du système.',
    siteContext:
      'Premier livrable majeur du Service 01 (Conception & Architecture Système) et de l’étape 02 de la méthode.',
    keyBenefit:
      'Clarté absolue pour les équipes de développement, conformité aux audits de sécurité et accélération de la validation par les directions techniques.',
    tags: ['DAT', 'Documentation', 'Spécifications', 'Gouvernance'],
  },
  {
    id: 'adr',
    term: 'Architecture Decision Record (Fiche de Décision d’Architecture)',
    acronym: 'ADR',
    kind: 'methodologique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Document court consignant une décision d’architecture majeure, son contexte, les options étudiées et ses conséquences.',
    fullDefinition:
      'Un ADR capture le "pourquoi" d’une décision à un instant T (ex: choix de PostgreSQL plutôt qu’une base document, adoption de l’architecture hexagonale, protocole gRPC). Versionné avec le code source dans Git, il empêche les régressions organisationnelles et évite aux nouvelles recrues de rejouer les mêmes débats sans comprendre l’historique.',
    siteContext:
      'Standard documentaire livré dans les missions d’architecture et d’audit par LSR Digital Architecture.',
    keyBenefit:
      'Mémoire vivante du projet, traçabilité des arbitrages techniques et réduction drastique de la friction d’intégration.',
    tags: ['ADR', 'Décisions', 'Git', 'Gouvernance', 'Documentation'],
  },
  {
    id: 'blueprint',
    term: 'Blueprint Architectural',
    kind: 'methodologique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Schéma directeur et feuille de route technique illustrant l’agencement macroscopique des composants avant leur réalisation.',
    fullDefinition:
      'À l’image des plans d’architecte dans le bâtiment (d’où la métaphore visuelle "blueprint" du site LSR), le blueprint logiciel modélise les briques fonctionnelles, les frontières de sécurité, les zones de résilience et les pipelines de données nécessaires pour bâtir un système sans improvisation.',
    siteContext:
      'Omniprésent sur le site : identité visuelle du logo, étape 02 de la méthodologie (Blueprint Cible) et canvas interactif.',
    keyBenefit:
      'Alignement visuel immédiat entre parties prenantes business, architectes et développeurs avant d’écrire la première ligne de code.',
    tags: ['Blueprint', 'Schéma', 'Méthode', 'Conception'],
  },
  {
    id: 'latence-p99',
    term: 'Latence p99 (99e Percentile)',
    acronym: 'p99',
    kind: 'technique',
    category: 'resilience',
    categoryLabel: 'Résilience & Performance',
    shortDefinition:
      'Métrique de performance indiquant que 99 % des requêtes sont traitées plus rapidement que ce temps seuil (ex: < 50ms).',
    fullDefinition:
      'La moyenne mathématique masque souvent les pires ralentissements (un utilisateur sur 100 peut subir 5 secondes d’attente alors que la moyenne affiche 80ms). Le percentile 99 mesure l’expérience subie par les 1 % de requêtes les plus lentes, révélant les requêtes SQL inefficaces, les verrous de concurrence ou les contentions mémoire sous forte charge.',
    siteContext:
      'Indicateur mis en avant sur la bannière de la section Vision (< 50ms) et dans les audits de performance du Service 03.',
    keyBenefit:
      'Garantie d’une réactivité constante pour l’ensemble des utilisateurs, y compris lors des pointes de trafic transactionnel.',
    tags: ['Performance', 'p99', 'Latence', 'Profiling', 'Métriques'],
  },
  {
    id: 'haute-disponibilite',
    term: 'Haute Disponibilité (High Availability — SLA 99.99%)',
    acronym: 'HA / SLA 99.99%',
    kind: 'technique',
    category: 'resilience',
    categoryLabel: 'Résilience & Performance',
    shortDefinition:
      'Conception d’un système informatique capable de rester opérationnel 99.99 % du temps (les fameux "quatre 9"), soit moins de 52 minutes d’indisponibilité par an.',
    fullDefinition:
      'La haute disponibilité nécessite l’absence totale de points uniques de défaillance, la redondance des serveurs applicatifs et des bases de données sur plusieurs zones de disponibilité (Multi-AZ), la commutation automatique en cas de panne (failover) et des déploiements sans interruption (blue/green ou rolling updates).',
    siteContext:
      'Affiché en tête de page (métrique 99.99% Résilience) et dans le bandeau de télémétrie du footer.',
    keyBenefit:
      'Continuité d’activité des applications critiques, préservation du chiffre d’affaires et respect des engagements contractuels (SLA).',
    tags: ['Disponibilité', 'SLA', 'Résilience', 'Uptime', 'Failover'],
  },
  {
    id: 'resilience',
    term: 'Résilience Logicielle & Auto-Healing',
    kind: 'technique',
    category: 'resilience',
    categoryLabel: 'Résilience & Performance',
    shortDefinition:
      'Capacité d’un système logiciel à encaisser les pannes partielles, à dégrader gracieusement son service et à se rétablir de manière autonome.',
    fullDefinition:
      'Dans les systèmes distribués modernes, la défaillance n’est plus une exception mais une certitude statistique (coupure réseau, saturation mémoire, crash de microservice). La résilience logicielle intègre des mécanismes de reprise automatique (auto-healing), de limitation de débit (rate limiting), de réessais avec backoff exponentiel et de coupe-circuits.',
    siteContext:
      'Thème central de la société. Mis en pratique dans le simulateur interactif d’indice de résilience.',
    keyBenefit:
      'Évite l’effet domino où la panne d’un sous-système secondaire entraîne l’effondrement général de l’application.',
    tags: ['Résilience', 'Auto-healing', 'Robustesse', 'Tolérance aux pannes'],
  },
  {
    id: 'spof',
    term: 'Point Unique de Défaillance (Single Point of Failure)',
    acronym: 'SPOF',
    kind: 'technique',
    category: 'resilience',
    categoryLabel: 'Résilience & Performance',
    shortDefinition:
      'Composant d’un système dont la seule défaillance entraîne l’arrêt complet et irrécupérable de l’ensemble du service.',
    fullDefinition:
      'Un SPOF peut être matériel (un serveur physique unique, un switch réseau), logiciel (une base de données maîtresse sans réplication, un service d’authentification centralisé sans secours) ou organisationnel (une seule personne sachant déployer l’application). L’audit d’architecture traque et élimine ces vulnérabilités critiques.',
    siteContext:
      'Critère évalué dans l’axe 3 du Simulateur de Résilience de LSR Digital Architecture.',
    keyBenefit:
      'Suppression du risque d’interruption fatale et renforcement structurel de la tolérance aux pannes.',
    tags: ['SPOF', 'Pannes', 'Redondance', 'Audit'],
  },
  {
    id: 'circuit-breaker',
    term: 'Circuit Breaker (Coupe-Circuit)',
    kind: 'technique',
    category: 'resilience',
    categoryLabel: 'Résilience & Performance',
    shortDefinition:
      'Patron de conception qui interrompt temporairement les appels vers un service défaillant pour protéger l’application et lui permettre de récupérer.',
    fullDefinition:
      'Fonctionnant comme un disjoncteur électrique, ce patron surveille les échecs d’appels à une API ou base externe. Quand le taux d’erreur dépasse un seuil, le disjoncteur "s’ouvre" : les requêtes suivantes sont immédiatement rejetées ou renvoient une réponse de secours sans attendre un long timeout réseau. Périodiquement, il teste si le service distant a retrouvé sa santé avant de se refermer.',
    siteContext:
      'Mécanisme mis en œuvre dans les architectures web critiques façonnées par LSR Digital Architecture.',
    keyBenefit:
      'Empêche l’épuisement des threads et de la mémoire lors d’incidents tiers et garantit des temps de réponse stables.',
    tags: ['Circuit Breaker', 'Résilience', 'Timeouts', 'Protection'],
  },
  {
    id: 'degradation-gracieuse',
    term: 'Dégradation Gracieuse (Graceful Degradation)',
    kind: 'technique',
    category: 'resilience',
    categoryLabel: 'Résilience & Performance',
    shortDefinition:
      'Capacité d’une application à désactiver ses fonctionnalités secondaires pour continuer à fournir son service métier vital en cas de perturbation.',
    fullDefinition:
      'Si le moteur de recommandation ou le système d’envoi d’e-mails est temporairement indisponible, une plateforme de vente en ligne résiliente continuera d’enregistrer les commandes en stockant les événements en file d’attente, plutôt que d’afficher une page d’erreur 500 générale à ses utilisateurs.',
    siteContext:
      'Mentionné dans le manifeste et dans les métriques d’excellence opérationnelle de la société.',
    keyBenefit:
      'Continuité du chiffre d’affaires et expérience utilisateur préservée même en situation de crise opérationnelle.',
    tags: ['Disponibilité', 'Ergonomie', 'Résilience', 'Expérience'],
  },
  {
    id: 'multi-az',
    term: 'Déploiement Multi-AZ (Multi-Availability Zones)',
    acronym: 'Multi-AZ',
    kind: 'technique',
    category: 'resilience',
    categoryLabel: 'Résilience & Performance',
    shortDefinition:
      'Hébergement et distribution des ressources logicielles sur plusieurs centres de données physiquement distincts et isolés au sein d’une même région cloud.',
    fullDefinition:
      'Chaque zone de disponibilité (AZ) possède sa propre alimentation électrique, son propre refroidissement et ses propres connexions réseau. Répartir une application et ses réplicas de bases de données sur au moins 2 ou 3 AZ garantit qu’un incendie, une inondation ou une panne de datacenter n’interrompt pas le service.',
    siteContext:
      'Score maximal (5/5) de tolérance aux pannes dans le Simulateur d’Indice de Résilience.',
    keyBenefit:
      'Résistance native aux sinistres matériels et basculement automatique sans perte de données.',
    tags: ['Cloud', 'Infrastructure', 'Multi-AZ', 'Redondance'],
  },
  {
    id: 'observabilite',
    term: 'Observabilité (Logs, Métriques, Distributed Tracing & SLO)',
    acronym: 'SLO / APM',
    kind: 'technique',
    category: 'resilience',
    categoryLabel: 'Résilience & Performance',
    shortDefinition:
      'Capacité à comprendre et diagnostiquer l’état interne précis d’un système distribué à partir des données télémétriques qu’il émet.',
    fullDefinition:
      'L’observabilité moderne s’articule autour de trois piliers fondamentaux : les logs structurés (historique des faits), les métriques temporelles (taux de requêtes, CPU, latence) et le traçage distribué (Distributed Tracing, permettant de suivre le parcours d’une requête d’un bout à l’autre des services). Elle s’adosse aux SLO (Service Level Objectives) pour déclencher des alertes préventives avant l’impact client.',
    siteContext:
      'Étape 04 de la méthodologie (Déploiement & Observabilité continue) et axe 4 du simulateur de résilience.',
    keyBenefit:
      'Diagnostic des incidents en quelques minutes au lieu de plusieurs heures et détection proactive des dérives de performance.',
    tags: ['Observabilité', 'Tracing', 'Métriques', 'Télémétrie', 'SLO'],
  },
  {
    id: 'pra',
    term: 'Plan de Reprise d’Activité (Disaster Recovery Plan)',
    acronym: 'PRA / DRP',
    kind: 'methodologique',
    category: 'resilience',
    categoryLabel: 'Résilience & Performance',
    shortDefinition:
      'Ensemble de procédures et d’automatisations techniques assurant la remise en service rapide d’un système informatique après un sinistre majeur.',
    fullDefinition:
      'Le PRA cadre deux métriques fondamentales : le RTO (Recovery Time Objective : durée maximale d’arrêt admissible) et le RPO (Recovery Point Objective : perte maximale de données tolérée). Il comprend des sauvegardes externalisées immutables, des scripts de reconstruction d’infrastructure (IaC) et des exercices réguliers de simulation de crise.',
    siteContext:
      'Livrable d’ingénierie de la phase 04 de la méthode (Déploiement & PRA) chez LSR Digital Architecture.',
    keyBenefit:
      'Survie de l’entreprise en cas de cyberattaque (ransomware) ou de panne majeure chez un fournisseur cloud.',
    tags: ['PRA', 'Sécurité', 'Continuité', 'Disaster Recovery', 'RTO / RPO'],
  },
  {
    id: 'dette-technique',
    term: 'Dette Technique (Technical Debt)',
    kind: 'methodologique',
    category: 'governance',
    categoryLabel: 'Méthodologie & Cadre Légal',
    shortDefinition:
      'Métaphore décrivant le coût futur et le ralentissement causés par des choix de conception précipités ou un manque de rigueur lors du développement.',
    fullDefinition:
      'Inventée par Ward Cunningham, la dette technique fonctionne comme une dette financière : prendre un raccourci permet de livrer vite, mais génère des "intérêts" (temps perdu à corriger des bugs, difficultés à ajouter des fonctionnalités, instabilité). Si elle n’est pas remboursée régulièrement par du refactoring continu, elle conduit à la paralysie complète du produit.',
    siteContext:
      'Mise au cœur du positionnement de LSR : "0 Dette — Pérennité du Code" et simulateur interactif dédié.',
    keyBenefit:
      'Maîtrise du coût total de possession (TCO) et vélocité de développement préservée sur le long terme.',
    tags: ['Dette Technique', 'Refactoring', 'Qualité', 'Gouvernance', 'TCO'],
  },
  {
    id: 'sur-ingenierie',
    term: 'Sur-Ingénierie (Over-Engineering)',
    kind: 'methodologique',
    category: 'governance',
    categoryLabel: 'Méthodologie & Cadre Légal',
    shortDefinition:
      'Fait de concevoir une architecture logicielle inutilement complexe par rapport au problème réel posé par le métier.',
    fullDefinition:
      'Exemples courants : introduire 15 microservices et Kubernetes pour une application à faible trafic, multiplier les couches d’abstraction pour des besoins hypothétiques futurs (YAGNI — You Aren’t Gonna Need It). LSR Digital Architecture prône une sobriété technique intransigeante : la simplicité maîtrisée est le garant ultime de la robustesse.',
    siteContext:
      'Premier principe fondateur du Manifeste (04) : "Sobriété & Justesse — Refus de la sur-ingénierie".',
    keyBenefit:
      'Coûts d’infrastructure allégés, temps de maintenance divisé et compréhension immédiate du code par toute l’équipe.',
    tags: ['Sobriété', 'KISS', 'YAGNI', 'Manifeste', 'Simplicité'],
  },
  {
    id: 'onboarding-friction',
    term: 'Friction d’Intégration (Onboarding Friction)',
    kind: 'methodologique',
    category: 'governance',
    categoryLabel: 'Méthodologie & Cadre Légal',
    shortDefinition:
      'Délai et difficultés rencontrés par un nouvel ingénieur pour configurer son poste, comprendre le code et effectuer son premier déploiement.',
    fullDefinition:
      'Un code spaghetti non typé, sans documentation ni environnement conteneurisé reproductible nécessite des semaines d’acculturation pour un développeur. À l’inverse, une Clean Architecture bien outillée permet à un nouvel arrivant de livrer en production dès sa première semaine.',
    siteContext:
      'Mesuré et analysé dans le simulateur de dette et la section Philosophie de transmission.',
    keyBenefit:
      'Attractivité technique de l’entreprise, montée en compétences accélérée et réduction de la dépendance aux développeurs historiques.',
    tags: ['Onboarding', 'Documentation', 'Transmission', 'Équipe'],
  },
  {
    id: 'craftsmanship',
    term: 'Software Craftsmanship (Artisanat Logiciel)',
    kind: 'methodologique',
    category: 'craftsmanship',
    categoryLabel: 'Craftsmanship & Qualité',
    shortDefinition:
      'Mouvement promouvant le développement logiciel comme un art de précision, valorisant la qualité d’exécution, la rigueur et la transmission.',
    fullDefinition:
      'Héritier du Manifeste Agile, le Craftsmanship rappelle que faire fonctionner un logiciel ne suffit pas : il doit être bien conçu, propre, évolutif et documenté. Il s’appuie sur des pratiques concrètes comme les revues de code systématiques, le TDD, le refactoring continu et le pair-programming.',
    siteContext:
      'Deuxième pilier du catalogue de compétences : "SEC_02 // CRAFTSMANSHIP — Ingénierie Web Full-Stack" et Manifeste (04).',
    keyBenefit:
      'Excellence industrielle, fierté d’équipe et création d’actifs numériques solides et valorisables.',
    tags: ['Craftsmanship', 'Clean Code', 'Excellence', 'Transmission'],
  },
  {
    id: 'tdd',
    term: 'Test-Driven Development (Développement Piloté par les Tests)',
    acronym: 'TDD',
    kind: 'technique',
    category: 'craftsmanship',
    categoryLabel: 'Craftsmanship & Qualité',
    shortDefinition:
      'Discipline consistant à écrire le test automatisé avant même d’écrire le code fonctionnel répondant au besoin.',
    fullDefinition:
      'Le cycle TDD s’articule en 3 temps (Red-Green-Refactor) : 1. Écrire un test qui échoue, 2. Écrire le code minimal pour faire passer le test au vert, 3. Refactoriser le code pour le rendre élégant en toute sécurité. Cette approche garantit une couverture complète et force une architecture modulaire.',
    siteContext:
      'Étape 03 de la méthodologie d’ingénierie (Façonnage & Tests) et niveau 4/5 de couverture dans le simulateur.',
    keyBenefit:
      'Élimination précoce des régressions, documentation vivante du comportement métier et conception découplée.',
    tags: ['TDD', 'Tests', 'Qualité', 'Refactoring', 'Automatisation'],
  },
  {
    id: 'mutation-testing',
    term: 'Tests de Mutation (Mutation Testing)',
    kind: 'technique',
    category: 'craftsmanship',
    categoryLabel: 'Craftsmanship & Qualité',
    shortDefinition:
      'Technique avancée vérifiant la qualité réelle d’une suite de tests en introduisant des fautes volontaires (mutants) dans le code source.',
    fullDefinition:
      'Un taux de couverture de 100 % ne garantit pas que les tests vérifient les bonnes assertions. Le test de mutation modifie légèrement le code (inversion de condition, modification de constante) et réexécute la suite de tests. Si aucun test n’échoue, le mutant "survit", révélant un test superficiel ou inutile.',
    siteContext:
      'Niveau d’excellence maximal (5/5) du simulateur de résilience logicielle de LSR Digital Architecture.',
    keyBenefit:
      'Confiance absolue dans les tests automatisés et détection des angles morts critiques.',
    tags: ['Tests', 'Mutation Testing', 'Qualité', 'Rigueur'],
  },
  {
    id: 'typage-strict',
    term: 'Typage Strict & Schémas Immuables',
    kind: 'technique',
    category: 'craftsmanship',
    categoryLabel: 'Craftsmanship & Qualité',
    shortDefinition:
      'Pratique logicielle imposant la définition exhaustive et sans compromis du type des données à la compilation et à l’exécution.',
    fullDefinition:
      'En interdisant les types lâches (comme "any" en TypeScript ou les dictionnaires génériques non typés), le compilateur devient un garde-fou contre les erreurs courantes (propriété absente, valeur nulle inattendue). Combiné à des bibliothèques de validation de schéma en frontière d’API (Zod, Bean Validation), il garantit l’intégrité des données entrant dans le domaine.',
    siteContext:
      'Principe du Manifeste : "Rigueur des Contrats — Typage strict et schémas immuables pour éliminer les régressions silencieuses".',
    keyBenefit:
      'Disparition des erreurs à l’exécution (NullPointer, undefined is not a function) et auto-complétion fluide pour les développeurs.',
    tags: ['TypeScript', 'Typage', 'Sécurité', 'Fiabilité', 'Contrats'],
  },
  {
    id: 'core-web-vitals',
    term: 'Core Web Vitals & Performance Frontend',
    kind: 'technique',
    category: 'craftsmanship',
    categoryLabel: 'Craftsmanship & Qualité',
    shortDefinition:
      'Indicateurs standardisés par Google mesurant la vitesse de chargement, la réactivité aux interactions et la stabilité visuelle d’une page web.',
    fullDefinition:
      'Ils comprennent notamment le LCP (Largest Contentful Paint : affichage du contenu principal), l’INP (Interaction to Next Paint : réactivité au clic) et le CLS (Cumulative Layout Shift : absence de saut d’éléments visuels à l’écran). Une architecture front-end soignée optimise ces métriques dès la structure HTML et les bundles JavaScript.',
    siteContext:
      'Respecté rigoureusement sur le site de LSR Digital Architecture et dans nos prestations d’ingénierie web.',
    keyBenefit:
      'Confort de navigation optimal, meilleur taux de conversion et référencement naturel (SEO) favorisé par les moteurs de recherche.',
    tags: ['Frontend', 'Vitesse', 'Core Web Vitals', 'SEO', 'UX'],
  },
  {
    id: 'wcag-rgaa',
    term: 'Accessibilité Numérique (WCAG 2.1 & RGAA)',
    acronym: 'WCAG / RGAA',
    kind: 'methodologique',
    category: 'craftsmanship',
    categoryLabel: 'Craftsmanship & Qualité',
    shortDefinition:
      'Règles internationales (WCAG) et cadre français (RGAA) assurant que les services numériques soient utilisables par tous, y compris les personnes en situation de handicap.',
    fullDefinition:
      'L’accessibilité couvre les contrastes de couleurs, la navigation au clavier, la présence de liens d’évitement (skip-links), l’indication sémantique pour les lecteurs d’écran (ARIA) et la compatibilité avec les préférences utilisateur (mode sombre, réduction des animations). C’est à la fois un impératif éthique, légal et d’ingénierie propre.',
    siteContext:
      'Implémenté sur tout le site : lien d’évitement, gestion du focus sur les modales, balises sémantiques et ratios de contraste vérifiés.',
    keyBenefit:
      'Universalité d’accès, conformité réglementaire pour les marchés publics et privés, et code sémantique de haute facture.',
    tags: ['Accessibilité', 'WCAG', 'RGAA', 'Inclusion', 'Conformité'],
  },
  {
    id: 'apis',
    term: 'APIs & Contrats d’Échange (REST, GraphQL, gRPC)',
    acronym: 'API',
    kind: 'technique',
    category: 'craftsmanship',
    categoryLabel: 'Craftsmanship & Qualité',
    shortDefinition:
      'Interfaces formelles permettant à des logiciels et systèmes distribués d’échanger des données de façon standardisée et sécurisée.',
    fullDefinition:
      'Les APIs se déclinent selon les usages : REST pour les interfaces web universelles et ouvertes, GraphQL pour les requêtes précises pilotées par les clients mobiles et front-end, et gRPC (basé sur Protocol Buffers et HTTP/2) pour les communications inter-services ultra-rapides et typées.',
    siteContext:
      'Livrables du Service 02 (Back-ends transactionnels & APIs scalables) et de la phase 02 du Blueprint.',
    keyBenefit:
      'Découplage technologique entre front-end et back-end, interopérabilité avec les systèmes tiers et sécurité renforcée.',
    tags: ['API', 'REST', 'GraphQL', 'gRPC', 'Contrats'],
  },
  {
    id: 'ci-cd',
    term: 'Intégration & Déploiement Continus (CI/CD)',
    acronym: 'CI/CD',
    kind: 'technique',
    category: 'craftsmanship',
    categoryLabel: 'Craftsmanship & Qualité',
    shortDefinition:
      'Chaîne automatisée testant, construisant et déployant le code logiciel à chaque modification sans intervention manuelle.',
    fullDefinition:
      'L’intégration continue (CI) compile le code, exécute les analyseurs statiques (linters), les tests unitaires et de sécurité à chaque commit. Le déploiement continu (CD) pousse automatiquement la version validée sur les environnements de staging ou de production selon des stratégies sans coupure (Blue-Green, Canary).',
    siteContext:
      'Présent dans les optimisations du Service 03 et l’automatisation de l’étape 04 de déploiement.',
    keyBenefit:
      'Livraisons fréquentes et sans stress, détection immédiate des régressions et fin des déploiements nocturnes risqués.',
    tags: ['DevOps', 'CI/CD', 'Automatisation', 'Pipelines', 'Déploiement'],
  },
  {
    id: 'cloud-native',
    term: 'Cloud Native & Infrastructure as Code (IaC)',
    kind: 'technique',
    category: 'architecture',
    categoryLabel: 'Architecture & Conception',
    shortDefinition:
      'Conception d’applications exploitant nativement les fonctionnalités du cloud (conteneurs, élasticité) avec une infrastructure entièrement définie par le code.',
    fullDefinition:
      'Grâce à Docker et Kubernetes, les applications sont encapsulées dans des conteneurs portables et immuables. Des outils d’Infrastructure as Code (Terraform) permettent de déployer et reproduire des environnements complets de manière versionnée et vérifiable dans Git.',
    siteContext:
      'Cité dans les compétences techniques du Service 01 et les badges technologiques du site.',
    keyBenefit:
      'Reproductibilité totale des environnements, absence d’erreurs de configuration manuelle et portabilité multicloud.',
    tags: ['Cloud Native', 'Docker', 'Kubernetes', 'Terraform', 'IaC'],
  },
  {
    id: 'rgpd',
    term: 'Règlement Général sur la Protection des Données (RGPD)',
    acronym: 'RGPD / GDPR',
    kind: 'methodologique',
    category: 'governance',
    categoryLabel: 'Méthodologie & Cadre Légal',
    shortDefinition:
      'Réglementation européenne régissant la collecte, le traitement et la conservation des données à caractère personnel.',
    fullDefinition:
      'Le RGPD consacre les principes de minimisation des données (ne collecter que le strict nécessaire), de Privacy by Design (sécurité et confidentialité pensées dès l’architecture du système), de droit à l’oubli et de consentement explicite. Tout système manipulant des identifiants d’utilisateurs doit s’y conformer rigoureusement.',
    siteContext:
      'Bannière de conformité CNIL du site, section légale et engagement éthique dans le formulaire de contact.',
    keyBenefit:
      'Protection des droits des utilisateurs, conformité légale et élimination du risque de sanctions de la CNIL.',
    tags: ['RGPD', 'Confidentialité', 'Sécurité', 'Données personnelles', 'CNIL'],
  },
  {
    id: 'lcen',
    term: 'Loi pour la Confiance dans l’Économie Numérique (LCEN)',
    acronym: 'LCEN',
    kind: 'methodologique',
    category: 'governance',
    categoryLabel: 'Méthodologie & Cadre Légal',
    shortDefinition:
      'Loi française définissant les mentions obligatoires d’identification d’un éditeur de site et le régime de responsabilité des acteurs du web.',
    fullDefinition:
      'La loi n° 2004-575 du 21 juin 2004 impose à tout professionnel exploitant un site web de publier ses mentions légales complètes (dénomination sociale, numéro RCS, capital social, coordonnées du directeur de la publication et de l’hébergeur).',
    siteContext:
      'Cadre légal de la modale Mentions Légales accessible dans le footer de LSR Digital Architecture.',
    keyBenefit: 'Transparence commerciale et respect strict de la législation française.',
    tags: ['LCEN', 'Mentions Légales', 'France', 'Droit Numérique'],
  },
  {
    id: 'llms-txt',
    term: 'Fichier llms.txt (Standard IA & LLM)',
    acronym: 'llms.txt',
    kind: 'technique',
    category: 'governance',
    categoryLabel: 'Méthodologie & Cadre Légal',
    shortDefinition:
      'Standard web émergent fournissant aux modèles de langage et agents IA une documentation synthétique et propre du site en texte brut Markdown.',
    fullDefinition:
      'À la manière du robots.txt pour les moteurs de recherche, le llms.txt résume la raison d’être, l’offre, l’architecture et les coordonnées d’une société sans le bruit du HTML ou du JavaScript, facilitant son indexation précise par Perplexity, SearchGPT ou Gemini.',
    siteContext:
      'Proposé dans le footer du site (/llms.txt) et dans les balises d’en-tête HTML de découverte.',
    keyBenefit:
      'Visibilité de premier ordre auprès des agents d’intelligence artificielle et précision des réponses générées sur la marque.',
    tags: ['IA', 'LLM', 'Standard', 'llms.txt', 'Indexation'],
  },
  {
    id: 'sitemap-xml',
    term: 'Plan de Site XML (Sitemap)',
    acronym: 'Sitemap',
    kind: 'technique',
    category: 'governance',
    categoryLabel: 'Méthodologie & Cadre Légal',
    shortDefinition:
      'Fichier structuré au format XML répertoriant l’ensemble des pages et ressources d’un site web pour orienter les robots d’indexation.',
    fullDefinition:
      'Le sitemap.xml indique aux moteurs de recherche (Google, Bing) les URLs disponibles, leur date de dernière mise à jour et leur fréquence de révision estimée, garantissant qu’aucune page stratégique n’est ignorée lors des explorations de crawling.',
    siteContext:
      'Présent à la racine du site (/sitemap.xml) et accessible directement via le lien dédié dans le footer.',
    keyBenefit:
      'Indexation SEO exhaustive et découverte rapide des nouveaux contenus par les moteurs.',
    tags: ['Sitemap', 'SEO', 'Indexation', 'Google', 'XML'],
  },
];
