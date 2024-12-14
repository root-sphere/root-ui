export const rootPaletteColors = {
  white: 'hsl(var(--color-white))',
  black: 'hsl(var(--color-black))',

  // Neutral
  'neutral-0': 'hsl(var(--color-neutral-0))',
  'neutral-1': 'hsl(var(--color-neutral-1))',
  'neutral-5': 'hsl(var(--color-neutral-5))',
  'neutral-10': 'hsl(var(--color-neutral-10))',
  'neutral-20': 'hsl(var(--color-neutral-20))',
  'neutral-30': 'hsl(var(--color-neutral-30))',
  'neutral-40': 'hsl(var(--color-neutral-40))',
  'neutral-50': 'hsl(var(--color-neutral-50))',
  'neutral-60': 'hsl(var(--color-neutral-60))',
  'neutral-70': 'hsl(var(--color-neutral-70))',
  'neutral-80': 'hsl(var(--color-neutral-80))',
  'neutral-90': 'hsl(var(--color-neutral-90))',
  'neutral-95': 'hsl(var(--color-neutral-95))',
  'neutral-100': 'hsl(var(--color-neutral-100))',

  // Blue
  'blue-5': 'hsl(var(--color-blue-5))',
  'blue-10': 'hsl(var(--color-blue-10))',
  'blue-20': 'hsl(var(--color-blue-20))',
  'blue-30': 'hsl(var(--color-blue-30))',
  'blue-40': 'hsl(var(--color-blue-40))',
  'blue-50': 'hsl(var(--color-blue-50))',
  'blue-60': 'hsl(var(--color-blue-60))',
  'blue-70': 'hsl(var(--color-blue-70))',
  'blue-80': 'hsl(var(--color-blue-80))',
  'blue-90': 'hsl(var(--color-blue-90))',

  // Green
  'green-5': 'hsl(var(--color-green-5))',
  'green-10': 'hsl(var(--color-green-10))',
  'green-20': 'hsl(var(--color-green-20))',
  'green-30': 'hsl(var(--color-green-30))',
  'green-40': 'hsl(var(--color-green-40))',
  'green-50': 'hsl(var(--color-green-50))',
  'green-60': 'hsl(var(--color-green-60))',
  'green-70': 'hsl(var(--color-green-70))',
  'green-80': 'hsl(var(--color-green-80))',
  'green-90': 'hsl(var(--color-green-90))',

  // Orange
  'orange-5': 'hsl(var(--color-orange-5))',
  'orange-10': 'hsl(var(--color-orange-10))',
  'orange-20': 'hsl(var(--color-orange-20))',
  'orange-30': 'hsl(var(--color-orange-30))',
  'orange-40': 'hsl(var(--color-orange-40))',
  'orange-50': 'hsl(var(--color-orange-50))',
  'orange-60': 'hsl(var(--color-orange-60))',
  'orange-70': 'hsl(var(--color-orange-70))',
  'orange-80': 'hsl(var(--color-orange-80))',
  'orange-90': 'hsl(var(--color-orange-90))',

  // Red
  'red-5': 'hsl(var(--color-red-5))',
  'red-10': 'hsl(var(--color-red-10))',
  'red-20': 'hsl(var(--color-red-20))',
  'red-30': 'hsl(var(--color-red-30))',
  'red-40': 'hsl(var(--color-red-40))',
  'red-50': 'hsl(var(--color-red-50))',
  'red-60': 'hsl(var(--color-red-60))',
  'red-70': 'hsl(var(--color-red-70))',
  'red-80': 'hsl(var(--color-red-80))',
  'red-90': 'hsl(var(--color-red-90))',
};

export type RootPaletteColorKey = keyof typeof rootPaletteColors;

export const rootSystemColors = {
  background: 'hsl(var(--background))',
  border: 'hsl(var(--border))',
  ring: 'hsl(var(--ring))',
  foreground: 'hsl(var(--foreground))',
  input: 'hsl(var(--input))',
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))',
  },

  // Intent Colors
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))',
  },
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  tertiary: {
    DEFAULT: 'hsl(var(--tertiary))',
    foreground: 'hsl(var(--tertiary-foreground))',
  },
  informative: {
    DEFAULT: 'hsl(var(--informative))',
    foreground: 'hsl(var(--informative-foreground))',
  },
  positive: {
    DEFAULT: 'hsl(var(--positive))',
    foreground: 'hsl(var(--positive-foreground))',
  },
  cautionary: {
    DEFAULT: 'hsl(var(--cautionary))',
    foreground: 'hsl(var(--cautionary-foreground))',
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))',
  },
  negative: {
    DEFAULT: 'hsl(var(--negative))',
    foreground: 'hsl(var(--negative-foreground))',
  },

  // Background Colors
  'background-alternative': 'hsl(var(--color-background-alternative))',
  'background-light': 'hsl(var(--color-background-light))',
  'background-normal': 'hsl(var(--color-background-normal))',

  'inverse-primary': 'hsl(var(--color-inverse-primary))',
  'inverse-static': 'hsl(var(--color-inverse-static))',
  'line-accent': 'hsl(var(--color-line-accent))',
  'line-divider': 'hsl(var(--color-line-divider))',
  'line-normal': 'hsl(var(--color-line-normal))',

  // Surface Colors
  'surface-bright': 'hsl(var(--color-surface-bright))',
  'surface-dim': 'hsl(var(--color-surface-dim))',
  'surface-normal': 'hsl(var(--color-surface-normal))',

  // Text Colors
  'text-hashtag': 'hsl(var(--color-text-hashtag))',
  'text-placeholder': 'hsl(var(--color-text-placeholder))',
  'text-primary': 'hsl(var(--color-text-primary))',
  'text-secondary': 'hsl(var(--color-text-secondary))',
  'text-tertiary': 'hsl(var(--color-text-tertiary))',
} as const;

export type RootSystemColorKey = keyof typeof rootSystemColors;

export type RootIntentColorKey = 'primary' | 'warning' | 'danger' | 'success';

export const rootIntentColors: RootIntentColorKey[] = ['primary', 'warning', 'danger', 'success'];
