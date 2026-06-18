# Anima

> A mobile-first, AI-powered life RPG that turns real-world self-improvement into an immersive fantasy progression system.

Anima blends gamified habits (Habitica), streak psychology (Duolingo), RPG progression, personality-driven onboarding, and AI personalization. Your real actions shape a persistent world, companion relationships, and a personal mythology.

Anima never predicts the future, never uses fake mysticism, and never employs manipulative psychology. Every mechanic reinforces positive, healthy, long-term growth.

## Core concepts

- **Angelic Essence** – a persistent gameplay profile (not astrology, not destiny) generated during onboarding ("Trials of the Soul"). Drives visual identity, quest flavor, companion interactions, and narrative.
- **Divine Will** – a personalized daily set of real-world quests generated from goals, habits, progress, and companion state. Not fortune telling.
- **Companions** – characters unlocked through progression who react to consistency and encourage healthy habits. They never replace real people.
- **Progression** – XP, levels, titles, cosmetic unlocks, story, and companion affinity. No pay-to-win.
- **Guilds** (future) – Essence-based, cooperative, fair, community-driven.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/) (Auth + Firestore) – _planned, not yet integrated_
- [Vercel](https://vercel.com/) deployment

Architecture is modular, scalable, and mobile-first, using a **vertical-slice** structure under `src/features/`.

## Getting started

```bash
nvm use            # use the Node version in .nvmrc
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

## Project structure

See [SPEC.md](./SPEC.md) for the full architecture and [docs/architecture.md](./docs/architecture.md) for the directory layout.

## Documentation

- [SPEC.md](./SPEC.md) – product and technical specification
- [ROADMAP.md](./ROADMAP.md) – phased delivery plan
- [CHANGELOG.md](./CHANGELOG.md) – release history
- [CONTRIBUTING.md](./CONTRIBUTING.md) – standards, branching, and commit conventions

## Status

**Phase 1: Engineering foundation.** No gameplay, auth, Firebase, or AI features are implemented yet. This phase establishes a clean, maintainable base.

## License

Proprietary – all rights reserved (Anima).
