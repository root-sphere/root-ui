import { tv, type VariantProps } from 'tailwind-variants';

export const typographyVariants = tv({
  base: 'transition-colors duration-200',
  defaultVariants: {
    variant: 'body-md',
  },
  variants: {
    variant: {
      'body-md': 'text-body-md font-semibold leading-body-md',
      'body-sm': 'text-body-sm font-medium leading-body-sm',
      'caption-md': 'text-caption-md font-medium leading-caption-md',
      'head-2xl': 'text-head-2xl font-bold leading-head-2xl',
      'head-3xl': 'text-head-3xl font-bold leading-head-3xl',
      'head-4xl': 'text-head-4xl font-bold leading-head-4xl',
      'head-5xl': 'text-head-5xl font-bold leading-head-5xl',
      'head-6xl': 'text-head-6xl font-bold leading-head-6xl',
      'head-xl': 'text-head-xl font-semibold leading-head-xl',
      'label-sm': 'text-label-sm font-medium leading-label-sm',
      'title-lg': 'text-title-lg font-semibold leading-title-lg',
      'title-md': 'text-title-md font-semibold leading-title-md',
      'title-xl': 'text-title-xl font-semibold leading-title-xl',
      'tooltip-sm': 'text-tooltip-sm font-medium leading-tooltip-sm',
    },
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
