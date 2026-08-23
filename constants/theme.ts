export const Colors = {
  // Backgrounds
  backgroundDark: '#F0F4FF',
  backgroundCard: '#FFFFFF',
  backgroundInput: '#FFFFFF',

  // Text
  textPrimary: '#1A1D2E',
  textSecondary: '#6B7280',
  textPrice: '#5C6BC0',

  // Accents
  accent: '#5C6BC0',
  accentSecondary: '#FF6B35',

  // Priority badges — shape + label paired for colorblind safety
  // High:   ♦ solid diamond
  priorityHigh: '#F43F5E',
  // Medium: ■ solid square
  priorityMedium: '#F59E0B',
  // Low:    ○ circle
  priorityLow: '#06B6D4',

  // Retiring soon
  retiring: '#FF6B35',
  retiringBackground: 'rgba(255, 107, 53, 0.12)',

  // Border / divider
  border: '#DDE3F0',
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
