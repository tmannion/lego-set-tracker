# LEGO Set Tracker — Project Context

## What this app is

A mobile wishlist tracker for LEGO sets. Users add sets they want to buy,
track price, piece count, theme, and an optional image. Future features
include priority badges, retirement date alerts, store availability, and
a profile/stats screen.

Built with: Expo SDK 54, Expo Router v4, React Native, TypeScript, Expo Go.

---

## Current state (end of session 2)

### Files created / modified this session

| File | Status |
|------|--------|
| `constants/theme.ts` | Created — full colour + spacing token set |
| `components/SetCard.tsx` | Built and styled — card layout with image support |
| `components/ui/TextField.tsx` | Created — reusable labelled text input primitive |
| `app/(tabs)/index.tsx` | Home screen — scrollable card list with title header |
| `app/(tabs)/add-item.tsx` | Add Set form — all fields wired to state |
| `app/(tabs)/_layout.tsx` | Updated to use theme tokens |
| `app/_layout.tsx` | StatusBar changed to `dark` for light theme |
| `.kiro/steering/project-standards.md` | Created — project rules for Kiro |

---

## Colour theme (constants/theme.ts)

Indigo + orange punch accent on a soft periwinkle background:

- `backgroundDark`: `#F0F4FF` — page background
- `backgroundCard`: `#FFFFFF` — card / input surface
- `accent`: `#5C6BC0` — indigo, active tabs, price text
- `accentSecondary`: `#FF6B35` — orange, retiring soon
- `textPrimary`: `#1A1D2E`
- `textSecondary`: `#6B7280`
- `border`: `#DDE3F0`
- Priority: High `#F43F5E` ♦, Medium `#F59E0B` ■, Low `#06B6D4` ○

---

## Component architecture

```
components/
  SetCard.tsx          — card with image, name, number·theme pill, price, piece count
  ui/
    TextField.tsx      — labelled TextInput primitive with optional flag
```

### SetCard props
```ts
type SetCardProps = {
  name: string;
  number: number;
  theme: string;
  price: number;
  pieceCount: number;
  imageUrl?: string;
}
```

### TextField props
```ts
type TextFieldProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  optional?: boolean;
}
```

---

## Add Set form fields (add-item.tsx)

| Field | State var | Type | Layout |
|-------|-----------|------|--------|
| Set Name | `name` | string | full width |
| Set Number | `number` | string | left half |
| Price (€) | `price` | string | right half |
| Theme | `theme` | string | left half |
| Piece Count | `pieceCount` | string | right half |
| Image URL | `imageUrl` | string | full width, optional |

All state is `string` (raw input). Conversion to `number` happens at point of use.

---

## What needs to be done next session

### Priority 1 — Wire up the form
- Create a dummy data file (`data/sets.ts`) with a typed `LegoSet` array
  to replace hardcoded cards in `index.tsx`
- Set up **React Context** (`context/SetsContext.tsx`) to share the set list
  between `index.tsx` (reads) and `add-item.tsx` (writes)
- Add a **Submit button** to `add-item.tsx` that converts string state to
  numbers, builds a `LegoSet` object, calls `addSet()` from context,
  then navigates back to the home tab
- Make the Wishlist title summary line (`3 sets · €1,579.97`) dynamic,
  calculated from the live set list

### Priority 2 — Validation
- Required fields: name, number, price
- Price and pieceCount must parse to valid numbers
- Show an inline error message under invalid fields on submit attempt

### Priority 3 — Database (future session)
- Replace context/dummy data with `expo-sqlite` + Drizzle ORM
- Note: MySQL will NOT work with Expo Go — SQLite is the correct
  embedded database for a React Native app. MySQL requires a backend
  server. Clarify this with the user next session.

---

## Known issues / notes

- The home screen summary line (`4 sets · €1,545.97`) is currently
  hardcoded — needs to be derived from live data
- No form validation yet
- Priority badges are designed (colors + shapes in theme) but not
  yet implemented in SetCard or the form
- The user mentioned MySQL — this needs a conversation. Expo Go /
  React Native cannot connect to MySQL directly. Options are:
  1. SQLite (local, no server needed) — simplest for v1
  2. A REST API / Supabase backend — needed if data should sync across devices
