# LSR Digital Architecture — Vitrine d'Ingénierie & Systèmes Résilients

> **Site vitrine officiel de LSR Digital Architecture SAS**  
> Conception sur-mesure d'architectures logicielles pérennes, scalables et haute résilience.

---

## 🏛️ Direction Artistique & Design System (High-Craft Engineering / Option B)

L'univers visuel combine trois piliers fondamentaux : **Prestige & Haut de gamme**, **Précision chirurgicale**, et **Robustesse technique**.

- **Atmosphère :** Dark theme immersif inspiré des plans d'architectes (_Blueprints_) et des interfaces d'ingénierie moderne (Linear, Supabase, Vercel).
- **Palette chromatique & Variables CSS :**
  - `--bg-primary` : `#090A0F` (Noir Obsidian profond)
  - `--bg-surface` : `#0D111A` (Cartes Bento)
  - `--bg-surface-elevated` : `#131926`
  - `--text-primary` : `#F8FAFC` (Blanc Titane)
  - `--text-secondary` : `#94A3B8` (Gris acier doux)
  - `--text-muted` : `#64748B` (Gris technique)
  - `--accent-blue` : `#2563EB` (Bleu Cobalt)
  - `--accent-cyan` : `#38BDF8` (Cyan électrique)
  - `--accent-amber` : `#F59E0B` (Ambre / Cuivre brossé)
  - `--border-subtle` : `rgba(255, 255, 255, 0.08)`
  - `--border-active` : `rgba(56, 189, 248, 0.4)`
- **Typographies :**
  - Titres (H1/H2/H3) : `Plus Jakarta Sans` / `Cabinet Grotesk` (bold, tracking serré `-0.02em`)
  - Corps de texte : `Inter` (lisibilité optimale)
  - Éléments techniques & métadonnées : `JetBrains Mono` (espacement lettre `+0.05em`)
- **Cartes Bento :** Coins arrondis à `10px`, bordures fines 1px, repères d'angles orthogonaux et halo lumineux dynamique (_cursor tracking spotlight_).
- **Schémas d'Architecture :** Tracés filaires nets de 1.5px, connecteurs de données en dégradé de contour (`#2563EB` → `#38BDF8`), nœuds nodaux avec halo lumineux (`drop-shadow(0 0 6px #38BDF8)`).

---

## ⚡ Stack Technique & Bonnes Pratiques

- **Build Tool :** [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (`strict: true`)
- **Styling :** [SCSS / Sass](https://sass-lang.com/) modulaire (tokens, mixins, BEM & utilitaires blueprint haute performance)
- **Iconographie :** [Lucide-React](https://lucide.dev/) + SVG Blueprint sur-mesure
- **Qualité de code :** Linter ultra-rapide ([oxlint](https://oxc.rs/)), formateur haute performance ([oxfmt](https://oxc.rs/docs/guide/usage/formatter)), TypeScript strict
- **Accessibilité (a11y) & SEO :** Mobile-first, balisage sémantique (`header`, `main`, `section`, `footer`), respect des contrastes WCAG, navigation au clavier et support de `prefers-reduced-motion`.

---

## 📂 Structure Modulaire du Projet

```text
lsr-digital-architecture/
├── public/
│   └── favicon.svg              # Favicon SVG géométrique blueprint
├── src/
│   ├── components/
│   │   ├── blueprint/
│   │   │   └── ArchitectureCanvas.tsx        # Schéma blueprint interactif & télémétrie en direct
│   │   ├── common/
│   │   │   ├── BentoCard.tsx                 # Carte bento 10px avec curseur glow & repères
│   │   │   ├── Button.tsx                    # Composant polymorphe de bouton unifié (primary, secondary, ghost, tab)
│   │   │   ├── SectionTag.tsx                # Badges de section monospace
│   │   │   └── TechBadge.tsx                 # Badges technologiques typés
│   │   ├── interactive/
│   │   │   └── ArchitectureDebtCalculator.tsx # Simulateur de dette technique & score de résilience
│   │   ├── legal/
│   │   │   ├── LegalModal.tsx                # Modale Mentions Légales (LCEN), RGPD et gestion cookies
│   │   │   └── CookieBanner.tsx              # Bandeau informatif de sobriété et vie privée
│   │   ├── layout/
│   │   │   ├── Header.tsx                    # En-tête fixe avec badge statut et scrollspy
│   │   │   └── Footer.tsx                    # Pied de page avec monitoring et mentions légales
│   │   └── sections/
│   │       ├── HeroSection.tsx               # Accroche, badges & cartes métriques bento
│   │       ├── ServicesSection.tsx           # Cartes SEC_01, SEC_02, SEC_03
│   │       ├── MethodologySection.tsx        # Pipeline des 4 jalons d'ingénierie
│   │       ├── ManifestoSection.tsx          # Citation d'architecte et principes clés
│   │       └── ContactSection.tsx            # Formulaire d'initialisation de projet & contact direct
│   ├── domain/
│   │   ├── blueprint/
│   │   │   └── blueprintModel.ts             # Modèle de domaine, nœuds et prédicats de filtrage
│   │   └── resilience/
│   │       └── resilienceCalculator.ts       # Règles métier pures & calcul d'indice de résilience
│   ├── constants/
│   │   └── siteContent.ts                    # Centralisation du contenu éditorial typé
│   ├── styles/
│   │   ├── _variables.scss                   # Variables SCSS & design tokens
│   │   ├── _mixins.scss                      # Mixins responsives, flexbox & bento
│   │   ├── _reset.scss                       # Reset, scrollbar technique & variables CSS
│   │   ├── _utilities.scss                   # Utilitaires layout, typographie & animations
│   │   ├── components/                       # Styles modulaires par composant
│   │   └── main.scss                         # Point d'entrée SCSS principal
│   ├── types/
│   │   └── index.ts                          # Interfaces TypeScript strictes
│   ├── utils/
│   │   └── cn.ts                             # Utilitaire de fusion conditionnelle de classes
│   ├── App.tsx                               # Assemblage de l'application
│   └── main.tsx                              # Point d'entrée React
├── index.html                                # Balisage SEO, OpenGraph & polices Google Fonts
└── package.json
```

---

## 🛠️ Commandes Disponibles

```bash
# Installation des dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Vérification des types TypeScript
pnpm typecheck

# Linter
pnpm lint

# Formater le code avec oxfmt
pnpm format

# Vérifier le formatage du code
pnpm format:check

# Compiler le bundle de production optimisé
pnpm build

# Prévisualiser la version de production
pnpm preview
```

---

## 🌐 Déploiement & Hébergement (Firebase & CI/CD)

Le projet est hébergé sur **Firebase Hosting** avec déploiement continu via **GitHub Actions** :

- **Canal de Production (`live`) :** Déploiement automatique lors d'un push sur la branche `main`.
- **Canaux de Prévisualisation (`preview`) :** Déploiement automatique d'une URL de prévisualisation temporaire pour chaque Pull Request ouverte.
- **Pipeline de Qualité :**
  1. Validation des dépendances (`pnpm install --frozen-lockfile`)
  2. Vérification statique des types (`pnpm typecheck`)
  3. Analyse de linting (`pnpm lint`)
  4. Vérification de formatage (`pnpm format:check`)
  5. Compilation du bundle de production (`pnpm build`)
  6. Déploiement sécurisé sans clé via **Workload Identity Federation (WIF)** (`google-github-actions/auth` + `FirebaseExtended/action-hosting-deploy`)

---

## 📄 Licence & Droits

© 2026 **LSR Digital Architecture SAS**. Tous droits réservés.  
_Conçu avec précision. Bâti pour la performance._
