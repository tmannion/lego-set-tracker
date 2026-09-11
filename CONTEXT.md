# LEGO Set Tracker — Project Context

## What this app is

A mobile wishlist tracker for LEGO sets. Users add sets they want to buy,
track price, piece count, theme, and an optional image. Future features
include priority badges, retirement date alerts, store availability, and
a profile/stats screen.

Built with: Expo SDK 57, Expo Router, React Native 0.86, TypeScript, Expo Go.

---

## Current state (end of session 3)

### File structure

```
app/
  _layout.tsx              — root layout, wraps everything in SetsProvider
  (tabs)/
    _layout.tsx            — tab bar, uses theme tokens
    index.tsx              — Wishlist screen, reads from SetsContext
    add-item.tsx           — Add Set form, writes to SetsContext

components/
  SetCard.tsx              — card with image, name/theme pill, price, piece count
  ui/
    TextField.tsx          — labelled TextInput primitive
    Button.tsx             — reusable TouchableOpacity button primitive

constants/
  theme.ts                 — all colour, spacing, radius, font size tokens

context/
  SetsContext.tsx          — React Context + SetsProvider for shared set list

data/
  dummy.ts                 — LegoSet type + DUMMY_SETS initial data
```

---

## Data shape (data/dummy.ts)

```ts
export type LegoSet = {
  id: string;
  name: string;
  number: number;
  theme: string;
  price: number;
  pieceCount: number;
  imageUrl?: string;
};
```

---

## Colour theme (constants/theme.ts)

Indigo + orange punch accent on a soft periwinkle background:

- `backgroundDark`: `#F0F4FF` — page/screen background
- `backgroundCard`: `#FFFFFF` — card and input surface
- `accent`: `#5C6BC0` — indigo, active tabs, buttons, price text
- `accentSecondary`: `#FF6B35` — orange, retiring soon
- `textPrimary`: `#1A1D2E`
- `textSecondary`: `#6B7280`
- `border`: `#DDE3F0`
- Priority: High `#F43F5E` ♦, Medium `#F59E0B` ■, Low `#06B6D4` ○

---

## React Context (context/SetsContext.tsx)

- `SetsContext` holds `{ sets: LegoSet[], addSet: (set: LegoSet) => void }`
- `SetsProvider` wraps the whole app in `app/_layout.tsx`
- Initialised with `DUMMY_SETS` from `data/dummy.ts`
- Any screen reads context with `useContext(SetsContext)`

---

## Component notes

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
- Top section: 180px fixed height, image fills with `absoluteFillObject + resizeMode cover`
- Name + subtitle sit in a semi-transparent grey pill (`rgba(240,240,240,0.88)`)
- Bottom section: dark strip with price (gold) left, piece count (muted) right

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

### Button props
```ts
type Props = {
  label: string;
  onPress?: () => void;
}
```

---

## Add Set form (add-item.tsx)

| Field | State | Type | Layout |
|-------|-------|------|--------|
| Set Name | `name` | string | full width |
| Set Number | `number` | string | left half |
| Price (€) | `price` | string | right half |
| Theme | `theme` | string | left half |
| Piece Count | `pieceCount` | string | right half |
| Image URL | `imageUrl` | string | full width, optional |

- All state is `string` (raw input), converted on submit
- `handleSubmit` guards on `name`, `number`, `price` being non-empty
- On submit: calls `context.addSet()`, shows `Alert`, clears all fields
- `id` generated with `Date.now().toString()` until DB is added

---

## What to work on next

### Priority 1 — Form validation
- Show inline error messages under fields when submit is attempted with missing/invalid values
- Price and pieceCount should validate as valid numbers

### Priority 2 — Database
- Replace Context + dummy data with `expo-sqlite` + Drizzle ORM
- Data currently lives in memory only — lost on app restart
- **Important:** MySQL cannot be used with Expo Go directly. Options:
  1. `expo-sqlite` — local on-device DB, simplest for a personal tracker
  2. Supabase — if sync across devices is needed later
- Recommend SQLite for v1, discuss with user at start of next session

### Priority 3 — Remaining screens
- Profile screen (stats: total sets, total value, total pieces, high priority count)
- Priority badges on SetCard (High ♦ / Medium ■ / Low ○)
- Retirement date field + "retiring soon" alerts
