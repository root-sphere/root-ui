export type RootTypographyKey =
  | 'body-md'
  | 'body-sm'
  | 'caption-md'
  | 'head-2xl'
  | 'head-3xl'
  | 'head-4xl'
  | 'head-5xl'
  | 'head-6xl'
  | 'head-xl'
  | 'label-sm'
  | 'title-lg'
  | 'title-md'
  | 'title-xl'
  | 'tooltip-sm';

export type RootTypographyMap = Record<RootTypographyKey, string>;

export const fontSizes: RootTypographyMap = {
  'body-md': 'env(--typography-font-size-body-md, 1rem)', // 16px
  'body-sm': 'env(--typography-font-size-body-sm, 0.875rem)', // 14px
  'caption-md': 'env(--typography-font-size-caption-md, 0.75rem)', // 12px
  'head-2xl': 'env(--typography-font-size-head-2xl, 1.75rem)', // 28px
  'head-3xl': 'env(--typography-font-size-head-3xl, 2rem)', // 32px
  'head-4xl': 'env(--typography-font-size-head-4xl, 2.25rem)', // 36px
  'head-5xl': 'env(--typography-font-size-head-5xl, 2.5rem)', // 40px
  'head-6xl': 'env(--typography-font-size-head-6xl, 3rem)', // 48px
  'head-xl': 'env(--typography-font-size-head-xl, 1.5rem)', // 24px
  'label-sm': 'env(--typography-font-size-label-sm, 0.875rem)', // 14px
  'title-lg': 'env(--typography-font-size-title-lg, 1.125rem)', // 18px
  'title-md': 'env(--typography-font-size-title-md, 1rem)', // 16px
  'title-xl': 'env(--typography-font-size-title-xl, 1.25rem)', // 20px
  'tooltip-sm': 'env(--typography-font-size-tooltip-sm, 0.75rem)', // 12px
};

export const lineHeights: RootTypographyMap = {
  'body-md': 'env(--typography-line-height-body-md, 1.5rem)', // 24px
  'body-sm': 'env(--typography-line-height-body-sm, 1.375rem)', // 22px
  'caption-md': 'env(--typography-line-height-caption-md, 1.125rem)', // 18px
  'head-2xl': 'env(--typography-line-height-head-2xl, 2.125rem)', // 34px
  'head-3xl': 'env(--typography-line-height-head-3xl, 2.5rem)', // 40px
  'head-4xl': 'env(--typography-line-height-head-4xl, 2.75rem)', // 44px
  'head-5xl': 'env(--typography-line-height-head-5xl, 3rem)', // 48px
  'head-6xl': 'env(--typography-line-height-head-6xl, 3.5rem)', // 56px
  'head-xl': 'env(--typography-line-height-head-xl, 1.875rem)', // 30px
  'label-sm': 'env(--typography-line-height-label-sm, 1.375rem)', // 22px
  'title-lg': 'env(--typography-line-height-title-lg, 1.5rem)', // 24px
  'title-md': 'env(--typography-line-height-title-md, 1.5rem)', // 24px
  'title-xl': 'env(--typography-line-height-title-xl, 1.625rem)', // 26px
  'tooltip-sm': 'env(--typography-line-height-tooltip-sm, 1.125rem)', // 18px
};
