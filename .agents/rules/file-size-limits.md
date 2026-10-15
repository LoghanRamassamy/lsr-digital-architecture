# File Size & Modularity Rules

## 1. File Size Constraints

- **Maximum Line Threshold**: No source file (components, hooks, services, utilities) should exceed **250 lines** of executable code (excluding pure data constants in `src/constants/`).
- **Target Size**: Maintain UI components and custom hooks between **80 and 180 lines** for optimal readability and single-responsibility compliance.

## 2. Refactoring Triggers

Whenever a component or file grows beyond 200 lines:

- **Sub-components Decomposition**: Split complex views, tabs, modal panels, or form steps into dedicated sub-components (e.g. `TabA.tsx`, `TabB.tsx`).
- **Hook Extraction**: Extract complex state management, data fetching, or event listeners into custom hooks (`hooks/use...ts`).
- **Data & Config Separation**: Move static dictionaries, schema configurations, or large legal/copy texts into dedicated constants or data modules.

## 3. Linter Enforcement

- Enforced via `.oxlintrc.json` using the `max-lines` rule (`max: 250`).
- Run `pnpm lint` to verify compliance.
