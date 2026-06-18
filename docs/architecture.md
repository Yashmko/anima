# Anima – Architecture

This document describes the directory layout and architectural conventions. See [SPEC.md](../SPEC.md) for product context and [CONTRIBUTING.md](../CONTRIBUTING.md) for standards.

## Principles

- **Mobile-first.** Design for small screens first.
- **Vertical-slice architecture.** Domains live under `src/features/` and own their UI, hooks, logic, and types.
- **`lib/` is framework glue only.** No business logic.
- **Strict TypeScript.** No `any`. Shared types in `src/types/`.

## Directory layout

```
anima/
├── README.md
├── SPEC.md
├── ROADMAP.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── .env.example
├── docs/
│   └── architecture.md
├── public/
└── src/
    ├── app/            # Next.js App Router (layouts, routes)
    ├── components/     # Presentational UI (ui/, game/, layout/)
    ├── features/       # Vertical-slice domain modules
    │   ├── essence/
    │   ├── divine-will/
    │   ├── companions/
    │   ├── progression/
    │   └── onboarding/
    ├── lib/            # Framework glue (firebase/, ai/, utils)
    ├── hooks/          # Shared React hooks
    ├── stores/         # Client state
    ├── types/          # Shared types
    ├── config/         # Constants, flags, themes
    └── styles/         # Global/shared styles
```

## Path aliases

`@/*` maps to `src/*` (see `tsconfig.json`).
