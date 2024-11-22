export const rootPaletteColors = {
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

  'neutrals-0': 'hsl(var(--color-neutrals-0))',
  'neutrals-1': 'hsl(var(--color-neutrals-1))',
  'neutrals-5': 'hsl(var(--color-neutrals-5))',
  'neutrals-10': 'hsl(var(--color-neutrals-10))',
  'neutrals-20': 'hsl(var(--color-neutrals-20))',
  'neutrals-30': 'hsl(var(--color-neutrals-30))',
  'neutrals-40': 'hsl(var(--color-neutrals-40))',
  'neutrals-50': 'hsl(var(--color-neutrals-50))',
  'neutrals-60': 'hsl(var(--color-neutrals-60))',
  'neutrals-70': 'hsl(var(--color-neutrals-70))',
  'neutrals-80': 'hsl(var(--color-neutrals-80))',
  'neutrals-90': 'hsl(var(--color-neutrals-90))',
  'neutrals-95': 'hsl(var(--color-neutrals-95))',
  'neutrals-100': 'hsl(var(--color-neutrals-100))',

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
  danger: 'hsl(var(--color-danger))',

  // Primary color
  primary: 'hsl(var(--color-primary))',
  success: 'hsl(var(--color-success))',
  warning: 'hsl(var(--color-warning))',

  'background-light': 'hsl(var(--color-background-light))',
  border: 'hsl(var(--color-border))',
  error: 'hsl(var(--color-error))',

  // Surface colors
  'surface-bright': 'hsl(var(--color-surface-bright))',
  'surface-dim': 'hsl(var(--color-surface-dim))',
  'surface-normal': 'hsl(var(--color-surface-normal))',

  // Text colors
  'text-hashtag': 'hsl(var(--color-text-hashtag))',
  'text-placeholder': 'hsl(var(--color-text-placeholder))',
  'text-primary': 'hsl(var(--color-text-primary))',
  'text-secondary': 'hsl(var(--color-text-secondary))',
  'text-tertiary': 'hsl(var(--color-text-tertiary))',
} as const;

export type RootSystemColorKey = keyof typeof rootSystemColors;

export type RootIntentColorKey = 'primary' | 'warning' | 'danger' | 'success';

export const rootIntentColors: RootIntentColorKey[] = ['primary', 'warning', 'danger', 'success'];
