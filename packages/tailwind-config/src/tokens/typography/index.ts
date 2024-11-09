import { entries, fromEntries, keys, map, pipe, toArray } from '@fxts/core';

export type RootTypographyStyle = {
  'font-size': string;
  'font-weight': string;
  'line-height': string;
  'letter-spacing': string;
};

/**
 * based on 1rem = 16px
 */
export const typographies = {
  'body-1': {
    'font-size': '0.875rem', // 14px
    'font-weight': '500', // Medium
    'letter-spacing': '0em',
    'line-height': '1.5rem', // 24px
  },
  'body-2': {
    'font-size': '1rem', // 16px
    'font-weight': '600', // Semibold
    'letter-spacing': '0em',
    'line-height': '1.625rem', // 26px
  },
  caption: {
    'font-size': '0.75rem', // 12px
    'font-weight': '500', // Medium
    'letter-spacing': '0em',
    'line-height': '1.125rem', // 18px
  },
  'heading-1': {
    'font-size': '3rem', // 48px
    'font-weight': '700', // Bold
    'letter-spacing': '0em',
    'line-height': '3.625rem', // 58px
  },
  'heading-2': {
    'font-size': '2.5rem', // 40px
    'font-weight': '700', // Bold
    'letter-spacing': '0em',
    'line-height': '3rem', // 48px
  },
  'heading-3': {
    'font-size': '2.25rem', // 36px
    'font-weight': '700', // Bold
    'letter-spacing': '0em',
    'line-height': '2.875rem', // 46px
  },
  'heading-4': {
    'font-size': '2rem', // 32px
    'font-weight': '700', // Bold
    'letter-spacing': '0em',
    'line-height': '2.5rem', // 40px
  },
  'heading-5': {
    'font-size': '1.75rem', // 28px
    'font-weight': '700', // Bold
    'letter-spacing': '0em',
    'line-height': '2.25rem', // 36px
  },
  'heading-6': {
    'font-size': '1.5rem', // 24px
    'font-weight': '600', // Semibold
    'letter-spacing': '0em',
    'line-height': '2.125rem', // 34px
  },
  label: {
    'font-size': '0.875rem', // 14px
    'font-weight': '500', // Medium
    'letter-spacing': '0em',
    'line-height': '1.5rem', // 24px
  },
  'title-1': {
    'font-size': '1rem', // 16px
    'font-weight': '700', // Bold
    'letter-spacing': '0em',
    'line-height': '1.625rem', // 26px
  },
  'title-2': {
    'font-size': '1.125rem', // 18px
    'font-weight': '600', // Semibold
    'letter-spacing': '0em',
    'line-height': '1.75rem', // 28px
  },
  'title-3': {
    'font-size': '1.25rem', // 20px
    'font-weight': '600', // Semibold
    'letter-spacing': '0em',
    'line-height': '1.875rem', // 30px
  },
  tooltip: {
    'font-size': '0.875rem', // 14px
    'font-weight': '500', // Medium
    'letter-spacing': '0em',
    'line-height': '1.5rem', // 24px
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
