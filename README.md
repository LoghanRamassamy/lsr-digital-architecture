# LSR Digital Architecture — Vitrine d'Ingénierie & Systèmes Résilients

> **Site vitrine officiel de LSR Digital Architecture SAS**  
> Conception sur-mesure d'architectures logicielles pérennes, scalables et haute résilience.

---

## 🏛️ Direction Artistique & Design System (High-Craft Engineering / Option B)

L'univers visuel combine trois piliers fondamentaux : **Prestige & Haut de gamme**, **Précision chirurgicale**, et **Robustesse technique**.

- **Atmosphère :** Dark theme immersif inspiré des plans d'architectes (*Blueprints*) et des interfaces d'ingénierie moderne (Linear, Supabase, Vercel).
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
- **Cartes Bento :** Coins arrondis à `10px`, bordures fines 1px, repères d'angles orthogonaux et halo lumineux dynamique (*cursor tracking spotlight*).
- **Schémas d'Architecture :** Tracés filaires nets de 1.5px, connecteurs de données en dégradé de contour (`#2563EB` → `#38BDF8`), nœuds nodaux avec halo lumineux (`drop-shadow(0 0 6px #38BDF8)`).

---

## ⚡ Stack Technique & Bonnes Pratiques

- **Build Tool :** [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (`strict: true`)
- **Styling :** [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Iconographie :** [Lucide-React](https://lucide.dev/) + SVG Blueprint sur-mesure
- **Qualité de code :** ESLint (`oxlint` hyper-rapide), [Prettier](https://prettier.io/), TypeScript strict
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
│   │   │   ├── SectionTag.tsx                # Badges de section monospace
│   │   │   └── TechBadge.tsx                 # Badges technologiques typés
│   │   ├── interactive/
│   │   │   ├── ArchitectureDebtCalculator.tsx # Simulateur de dette technique & score de résilience
│   │   │   └── CodeCraftsmanshipPreview.tsx   # Visualiseur d'extraits de code Clean Arch
│   │   ├── layout/
│   │   │   ├── Header.tsx                    # En-tête fixe avec badge statut et scrollspy
│   │   │   └── Footer.tsx                    # Pied de page avec monitoring et mentions légales
│   │   └── sections/
│   │       ├── HeroSection.tsx               # Accroche, badges & cartes métriques bento
│   │       ├── ServicesSection.tsx           # Cartes SEC_01, SEC_02, SEC_03
│   │       ├── MethodologySection.tsx        # Pipeline des 4 jalons d'ingénierie
│   │       ├── ManifestoSection.tsx          # Citation d'architecte et principes clés
│   │       └── ContactSection.tsx            # Formulaire d'initialisation de projet & contact direct
│   ├── constants/
│   │   └── siteContent.ts                    # Centralisation du contenu éditorial typé
│   ├── styles/
│   │   └── index.css                         # Tokens CSS variables, quadrillages & animations
│   ├── types/
│   │   └── index.ts                          # Interfaces TypeScript strictes
│   ├── utils/
│   │   └── cn.ts                             # Utilitaire de fusion conditionnelle de classes
│   ├── App.tsx                               # Assemblage de l'application
│   └── main.tsx                              # Point d'entrée React
├── index.html                                # Balisage SEO, OpenGraph & polices Google Fonts
├── tailwind.config.js                        # Thème étendu (bento, glow, blueprint)
└── package.json
```

---

## 🛠️ Commandes Disponibles

```bash
# Installation des dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Vérification des types TypeScript
npm run typecheck

# Linter
npm run lint

# Formater le code avec Prettier
npm run format

# Compiler le bundle de production optimisé
npm run build

# Prévisualiser la version de production
npm run preview
```

---

## 🌐 Déploiement & Hébergement

L'application produit des artefacts statiques purs (`dist/`) ultra-légers et hautement performants, directement compatibles avec Cloudflare Pages, Vercel, Netlify ou GitHub Pages.

---

## 📄 Licence & Droits

© 2026 **LSR Digital Architecture SAS**. Tous droits réservés.  
*Conçu avec précision. Bâti pour la performance.*
