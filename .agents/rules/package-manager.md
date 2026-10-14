# Package Manager Guidelines

- Always use `pnpm` rather than `npm` or `yarn` for all package management and running scripts in this workspace.
- Commands:
  - Install dependencies: `pnpm install`
  - Add dependency: `pnpm add <pkg>`
  - Add dev dependency: `pnpm add -D <pkg>`
  - Run dev server: `pnpm dev`
  - Run build: `pnpm build`
  - Run checks: `pnpm typecheck`, `pnpm lint`, `pnpm format:check`
