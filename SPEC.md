# Anima – Specification

This document captures the product vision and technical architecture for Anima. It is the source of truth for what Anima is and how it is built. Keep it current.

## 1. Vision

Anima is a mobile-first AI-powered life RPG that transforms real-world self-improvement into an immersive fantasy progression system. The goal is to make users feel they are living inside their own evolving RPG where real actions shape a persistent world, companion relationships, and personal mythology.

It is **not** productivity tracking alone, and it never pretends to predict the future or manipulate users with fake mysticism.

## 2. Core philosophy

The game encourages discipline, consistency, fitness, studying, mindfulness, journaling, creativity, healthy habits, and long-term growth. Every mechanic must reinforce positive behavior rather than exploit psychological manipulation.

## 3. Domains

### 3.1 Angelic Essence

Generated during onboarding ("Trials of the Soul"). A persistent **gameplay profile**, not astrology and not destiny. It influences visual identity, preferred quest flavor, companion interactions, dialogue variations, narrative presentation, and progression themes.

Initial elements: Fire, Water, Earth, Storm. Future expansion expected, so the model must be extensible.

### 3.2 Divine Will

A personalized **Daily Divine Will**: a set of real-world quests. Not fortune telling. Generated from user goals, previous activity, habits, progress, preferences, companion state, and XP progression. Examples: study 30 minutes, walk 6000 steps, read 15 pages, finish today's coding task, journal 10 minutes. Completion grants XP and progression.

### 3.3 Companions

Unlocked through progression. They react emotionally to consistency, comment on achievements, encourage habits, develop relationships over time, and unlock cosmetic dialogue and story. Companions must never replace real people or encourage unhealthy attachment.

### 3.4 Progression

Users gain XP, levels, titles, cosmetic unlocks, story progression, and companion affinity. No pay-to-win mechanics.

### 3.5 Guilds (future)

Essence-based guilds, cooperative seasonal challenges, leaderboards, and cosmetic seasonal rewards. Must remain fair and community-driven.

## 4. Monetization

**Allowed:** cosmetics, battle/season passes, themes, avatars, companion skins, narrative expansions.

**Not allowed:** pay-to-win, gambling, loot boxes, fake prophecies, manipulative Barnum-effect systems, selling power advantages.

## 5. Technical architecture

### 5.1 Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS (mobile-first)
- Firebase Auth + Firestore (planned)
- Vercel deployment

### 5.2 Architectural principles

- **Mobile-first.** Design for small screens first, scale up.
- **Vertical-slice architecture.** Each domain (`essence`, `divine-will`, `companions`, `progression`, `onboarding`) lives in `src/features/` and owns its components, logic, hooks, and types.
- **`lib/` is framework glue only** (Firebase client, AI clients, generic utilities). No business logic.
- **Strict typing.** No `any`. Shared types in `src/types/`.
- **Separation of concerns.** UI components are presentational; domain logic lives in feature modules.

### 5.3 Directory layout

See [docs/architecture.md](./docs/architecture.md).

## 6. Out of scope for Phase 1

Gameplay features, authentication, Firebase integration, AI agents, and business logic are intentionally **not** implemented in Phase 1. This phase only establishes the engineering foundation.
