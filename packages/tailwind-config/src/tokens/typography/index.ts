import { entries, fromEntries, keys, map, pipe, toArray } from '@fxts/core';

export type RootTypographyStyle = {
  'font-size': string;
  'font-weight': string;
  'line-height': string;
  'letter-spacing': string;
};

export const typographies = {
  'body-1': {
    'font-size': 'env(--typography-font-size-body-1, 0.875rem)', // 14px
    'font-weight': 'env(--typography-font-weight-medium, 500)', // Medium
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-body-1, 1.5rem)', // 24px
  },
  'body-2': {
    'font-size': 'env(--typography-font-size-body-2, 1rem)', // 16px
    'font-weight': 'env(--typography-font-weight-semibold, 600)', // Semibold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-body-2, 1.625rem)', // 26px
  },
  caption: {
    'font-size': 'env(--typography-font-size-caption, 0.75rem)', // 12px
    'font-weight': 'env(--typography-font-weight-medium, 500)', // Medium
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-caption, 1.125rem)', // 18px
  },
  'heading-1': {
    'font-size': 'env(--typography-font-size-heading-1, 3rem)', // 48px
    'font-weight': 'env(--typography-font-weight-bold, 700)', // Bold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-heading-1, 3.625rem)', // 58px
  },
  'heading-2': {
    'font-size': 'env(--typography-font-size-heading-2, 2.5rem)', // 40px
    'font-weight': 'env(--typography-font-weight-bold, 700)', // Bold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-heading-2, 3rem)', // 48px
  },
  'heading-3': {
    'font-size': 'env(--typography-font-size-heading-3, 2.25rem)', // 36px
    'font-weight': 'env(--typography-font-weight-bold, 700)', // Bold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-heading-3, 2.875rem)', // 46px
  },
  'heading-4': {
    'font-size': 'env(--typography-font-size-heading-4, 2rem)', // 32px
    'font-weight': 'env(--typography-font-weight-bold, 700)', // Bold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-heading-4, 2.5rem)', // 40px
  },
  'heading-5': {
    'font-size': 'env(--typography-font-size-heading-5, 1.75rem)', // 28px
    'font-weight': 'env(--typography-font-weight-bold, 700)', // Bold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-heading-5, 2.25rem)', // 36px
  },
  'heading-6': {
    'font-size': 'env(--typography-font-size-heading-6, 1.5rem)', // 24px
    'font-weight': 'env(--typography-font-weight-semibold, 600)', // Semibold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-heading-6, 2.125rem)', // 34px
  },
  label: {
    'font-size': 'env(--typography-font-size-label, 0.875rem)', // 14px
    'font-weight': 'env(--typography-font-weight-medium, 500)', // Medium
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-label, 1.5rem)', // 24px
  },
  'title-1': {
    'font-size': 'env(--typography-font-size-title-1, 1rem)', // 16px
    'font-weight': 'env(--typography-font-weight-bold, 700)', // Bold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-title-1, 1.625rem)', // 26px
  },
  'title-2': {
    'font-size': 'env(--typography-font-size-title-2, 1.125rem)', // 18px
    'font-weight': 'env(--typography-font-weight-semibold, 600)', // Semibold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-title-2, 1.75rem)', // 28px
  },
  'title-3': {
    'font-size': 'env(--typography-font-size-title-3, 1.25rem)', // 20px
    'font-weight': 'env(--typography-font-weight-semibold, 600)', // Semibold
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-title-3, 1.875rem)', // 30px
  },
  tooltip: {
    'font-size': 'env(--typography-font-size-tooltip, 0.875rem)', // 14px
    'font-weight': 'env(--typography-font-weight-medium, 500)', // Medium
    'letter-spacing': 'env(--typography-letter-spacing-default, 0em)',
    'line-height': 'env(--typography-line-height-tooltip, 1.5rem)', // 24px
  },
} satisfies Record<string, RootTypographyStyle>;
export const typographyKeys = pipe(typographies, keys, toArray);

export type RootTypographyKey = keyof typeof typographies;
export type RootTypographyValue = (typeof typographies)[RootTypographyKey];

/**
 * @todo fromRecordToTuple utility function should be implement.
 */
export const rootFontSizes = pipe(
  typographies,
  entries,
  map(([key, value]) => [key, value['font-size']] as const),
  fromEntries,
);
export const rootFontWeights = pipe(
  typographies,
  entries,
  map(([key, value]) => [key, value['font-weight']] as const),
  fromEntries,
);
export const rootLineHeights = pipe(
  typographies,
  entries,
  map(([key, value]) => [key, value['line-height']] as const),
  fromEntries,
);
export const rootLetterSpacings = pipe(
  typographies,
  entries,
  map(([key, value]) => [key, value['letter-spacing']] as const),
  fromEntries,
);
