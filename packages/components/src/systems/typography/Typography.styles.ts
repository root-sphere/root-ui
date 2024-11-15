import { RootTypographyKey } from '@root-sphere/root-ui-tailwind';
import { tv, VariantProps } from 'tailwind-variants';

export const typographyVariants = tv({
  defaultVariants: {
    variant: 'body-md' as RootTypographyKey,
  },
  variants: {
    variant: {
      'body-md': 'body-md',
      'body-sm': 'body-sm',
      'caption-md': 'caption-md',
      'head-2xl': 'head-2xl',
      'head-3xl': 'head-3xl',
      'head-4xl': 'head-4xl',
      'head-5xl': 'head-5xl',
      'head-6xl': 'head-6xl',
      'head-xl': 'head-xl',
      'label-sm': 'label-sm',
      'title-lg': 'title-lg',
      'title-md': 'title-md',
      'title-xl': 'title-xl',
      'tooltip-sm': 'tooltip-sm',
    },
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
