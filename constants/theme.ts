export const Colors = {
  // Backgrounds
  backgroundDark: '#151a27',
  backgroundCard: '#1e2438',
  backgroundInput: '#1e2438',

  // Text
  textPrimary: '#ffffff',
  textSecondary: '#8a92a6',
  textPrice: '#ffd33d',

  // Accent
  accent: '#ffd33d',

  // Priority badges — each paired with a label (colorblind-safe)
  priorityHigh: '#e05252',
  priorityMedium: '#e08c2a',
  priorityLow: '#4caf8a',

  // Retiring soon
  retiring: '#c0392b',
  retiringBackground: 'rgba(192, 57, 43, 0.15)',

  // Border / divider
  border: '#2a3148',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 18,
} as const;

export const FontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 18,
  xl: 24,
} as const;
