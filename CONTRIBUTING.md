# Contributing to Anima

Thank you for contributing. This document defines our engineering standards, branching strategy, and commit conventions. Consistency keeps Anima maintainable as it grows.

## Coding standards

- **TypeScript strict mode.** No `any`. Prefer precise types; put shared types in `src/types/`.
- **Vertical slices.** Domain logic belongs in `src/features/<domain>/`. Each feature owns its components, hooks, logic, and types.
- **`lib/` is framework glue only** (Firebase, AI clients, generic utils). No business logic.
- **Presentational components** live in `src/components/`; keep them free of domain logic.
- **Mobile-first** Tailwind: style for small screens, then scale up with responsive variants.
- **Named exports** over default exports (except where a framework requires defaults, e.g. Next.js pages/layouts).
- **Formatting & linting:** run `npm run lint` and `npm run format` before pushing. ESLint + Prettier are the source of truth.
- **Type safety:** `npm run type-check` must pass.

## Branching strategy

Trunk-based development with short-lived branches off `main`.

- `main` is always deployable and protected (requires MR + green pipeline).
- Branch naming: `feat/<short-desc>`, `fix/<short-desc>`, `chore/<short-desc>`, `docs/<short-desc>`, `refactor/<short-desc>`.
- Keep branches small and rebase on `main` frequently.
- Open a Merge Request early; squash on merge.

## Commit strategy

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(optional scope): <description>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

Examples:

- `feat(divine-will): add daily quest model`
- `fix(progression): correct XP rounding`
- `docs: clarify Essence extensibility`
- `chore: initialize Anima Phase 1 foundation`

This convention enables automated CHANGELOG generation in later phases.

## Merge requests

- Reference related issues.
- Keep diffs focused and reviewable.
- Ensure lint, type-check, and build pass.
- Update SPEC.md / ROADMAP.md / CHANGELOG.md when behavior or scope changes.
