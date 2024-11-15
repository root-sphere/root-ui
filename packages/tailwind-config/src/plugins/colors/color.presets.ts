export const rootPaletteColors = {
  'blue-5': 'var(--color-blue-5)',
  'blue-10': 'var(--color-blue-10)',
  'blue-20': 'var(--color-blue-20)',
  'blue-30': 'var(--color-blue-30)',
  'blue-40': 'var(--color-blue-40)',
  'blue-50': 'var(--color-blue-50)',
  'blue-60': 'var(--color-blue-60)',
  'blue-70': 'var(--color-blue-70)',
  'blue-80': 'var(--color-blue-80)',
  'blue-90': 'var(--color-blue-90)',

  'green-5': 'var(--color-green-5)',
  'green-10': 'var(--color-green-10)',
  'green-20': 'var(--color-green-20)',
  'green-30': 'var(--color-green-30)',
  'green-40': 'var(--color-green-40)',
  'green-50': 'var(--color-green-50)',
  'green-60': 'var(--color-green-60)',
  'green-70': 'var(--color-green-70)',
  'green-80': 'var(--color-green-80)',
  'green-90': 'var(--color-green-90)',

  'neutrals-0': 'var(--color-neutrals-0)',
  'neutrals-1': 'var(--color-neutrals-1)',
  'neutrals-5': 'var(--color-neutrals-5)',
  'neutrals-10': 'var(--color-neutrals-10)',
  'neutrals-20': 'var(--color-neutrals-20)',
  'neutrals-30': 'var(--color-neutrals-30)',
  'neutrals-40': 'var(--color-neutrals-40)',
  'neutrals-50': 'var(--color-neutrals-50)',
  'neutrals-60': 'var(--color-neutrals-60)',
  'neutrals-70': 'var(--color-neutrals-70)',
  'neutrals-80': 'var(--color-neutrals-80)',
  'neutrals-90': 'var(--color-neutrals-90)',
  'neutrals-95': 'var(--color-neutrals-95)',
  'neutrals-100': 'var(--color-neutrals-100)',

  'orange-5': 'var(--color-orange-5)',
  'orange-10': 'var(--color-orange-10)',
  'orange-20': 'var(--color-orange-20)',
  'orange-30': 'var(--color-orange-30)',
  'orange-40': 'var(--color-orange-40)',
  'orange-50': 'var(--color-orange-50)',
  'orange-60': 'var(--color-orange-60)',
  'orange-70': 'var(--color-orange-70)',
  'orange-80': 'var(--color-orange-80)',
  'orange-90': 'var(--color-orange-90)',

  'red-5': 'var(--color-red-5)',
  'red-10': 'var(--color-red-10)',
  'red-20': 'var(--color-red-20)',
  'red-30': 'var(--color-red-30)',
  'red-40': 'var(--color-red-40)',
  'red-50': 'var(--color-red-50)',
  'red-60': 'var(--color-red-60)',
  'red-70': 'var(--color-red-70)',
  'red-80': 'var(--color-red-80)',
  'red-90': 'var(--color-red-90)',
};

export type RootPaletteColorKey = keyof typeof rootPaletteColors;

export const rootSystemColors = {
  // Primary color
  primary: 'var(--color-primary)',

  // Background colors
  'background-light': 'var(--color-background-light)',

  // Border color
  border: 'var(--color-border)',

  // Error color
  error: 'var(--color-error)',

  'status-danger': 'var(--color-status-danger)',
  'status-success': 'var(--color-status-success)',
  // Status colors
  'status-warning': 'var(--color-status-warning)',

  // Surface colors
  'surface-bright': 'var(--color-surface-bright)',
  'surface-dim': 'var(--color-surface-dim)',
  'surface-normal': 'var(--color-surface-normal)',

  // Text colors
  'text-hashtag': 'var(--color-text-hashtag)',
  'text-placeholder': 'var(--color-text-placeholder)',
  'text-primary': 'var(--color-text-primary)',
  'text-secondary': 'var(--color-text-secondary)',
  'text-tertiary': 'var(--color-text-tertiary)',
} as const;

export type RootSystemColorKey = keyof typeof rootSystemColors;

export type RootIntentColorKey = 'primary' | 'warning' | 'danger' | 'success';

export const rootIntentColors: RootIntentColorKey[] = ['primary', 'warning', 'danger', 'success'];
