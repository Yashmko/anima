# Anima – Roadmap

This roadmap is phased and intentionally conservative. Favor clean architecture over rapid prototyping. Phases may be reordered as we learn, but scope creep outside [SPEC.md](./SPEC.md) is not permitted.

## Phase 1 – Engineering foundation (current)

- [x] Repository, documentation, and conventions
- [x] Next.js + TypeScript + Tailwind scaffold
- [x] Vertical-slice folder structure
- [x] Tooling config (ESLint, Prettier, EditorConfig)
- [ ] CI pipeline (lint + type-check + build)

**No gameplay, auth, Firebase, or AI in this phase.**

## Phase 2 – Platform & shell

- Firebase project setup (Auth + Firestore) behind `lib/firebase`
- App shell, navigation, mobile-first layout primitives
- Design system / UI component library in `components/ui`
- Theme system (ties into Essence later)

## Phase 3 – Onboarding & Angelic Essence

- "Trials of the Soul" onboarding flow
- Essence model (Fire / Water / Earth / Storm, extensible)
- Persisted gameplay profile

## Phase 4 – Progression core

- XP, levels, titles
- Progression state in Firestore
- Cosmetic unlock framework (no pay-to-win)

## Phase 5 – Divine Will

- Daily quest model and completion flow
- Personalized generation from goals/habits/progress
- AI personalization layer behind `lib/ai`

## Phase 6 – Companions

- Companion model, affinity, emotional reactions
- Dialogue and story unlocks

## Phase 7 – Social & Guilds (future)

- Essence-based guilds
- Cooperative seasonal challenges
- Leaderboards and seasonal cosmetics

## Phase 8 – Monetization

- Cosmetics, season passes, themes, avatars, companion skins, narrative expansions
- Strictly no pay-to-win, gambling, or loot boxes
