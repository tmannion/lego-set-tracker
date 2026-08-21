# LEGO Set Tracker — Project Standards

## Platform & Runtime

- **Expo SDK 54**, React Native 0.81, React 19, TypeScript.
- Target: **Expo Go** — do not use bare workflow features, native modules that
  require `expo prebuild`, or anything incompatible with Expo Go.
- Always check the Expo v54 docs at https://docs.expo.dev/versions/v54.0.0/
  before using any Expo API.

## Navigation

- Use **Expo Router v6** file-based routing exclusively. No manual
  `NavigationContainer` or React Navigation wiring.
- Tab routes live in `app/(tabs)/`. New top-level screens go in `app/`.
- Link between screens with `<Link>` or `router.push()` from `expo-router`.

## Styling

- Use **`StyleSheet.create()`** only. No NativeWind, no Tailwind, no
  styled-components.
- All color, spacing, font-size, and border-radius tokens live in
  `constants/theme.ts`. Do not hardcode raw hex strings or magic numbers
  in component files — import from theme.
- Dark navy background (`#1a1f2e` / `#151a27`), gold/yellow accents
  (`#ffd33d`), white body text. Priority badge colors are paired with a
  text label so they are not hue-only (accessibility — user has
  red-green colorblindness).

## Component Architecture

- `components/ui/` — dumb, reusable primitives: `Badge`, `Chip`,
  `TextField`, `Button`, `PrioritySelector`, `StoreChipGroup`, etc.
- `components/` — composed, app-specific components built from the
  primitives: `SetCard`.
- Each component gets its own file. No barrel `index.ts` re-exports
  unless explicitly requested.
- Props typed with an explicit `type XxxProps = { ... }` in the same file,
  above the component function.

## Data Layer

- **v1 is UI-only** — all data is hardcoded or held in local `useState`.
  Do not wire up SQLite/Drizzle until the visual layer is complete.
- When the database layer is added it will use **`expo-sqlite`** +
  **Drizzle ORM** (not Prisma — Prisma requires a Node server runtime).

## Teaching & Pair-Programming Style

- This is the user's first React Native app. Work **line by line**,
  Socratic style.
- Ask one small, concrete question at a time. The user writes the code.
- Give a short correction/confirmation and explain *why* if they got
  something wrong, then move to the next single step.
- Do **not** drop complete files or multi-component scaffolds in one go —
  this was explicitly rejected as unhelpful.
- Occasionally do a quick comprehension check ("do you know *why* this
  works?") rather than assuming understanding from a correct answer.
- It is fine (and good) when the user's answer is more complete than
  what was asked — acknowledge it, but keep the next step small.

## Code Quality

- Always use TypeScript with explicit prop types. Avoid `any`.
- Prefer functional components with hooks. No class components.
- Keep components focused — if a component needs to handle too many
  concerns, extract a child component or a custom hook.
- Follow React hooks rules: only call hooks at the top level of a
  function component or custom hook.
- Use `const` for all component functions and variables unless mutation
  is needed.
