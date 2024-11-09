import { RootTypographyKey } from '@root-sphere/root-ui-tailwind';
import { tv, VariantProps } from 'tailwind-variants';

export const typography = tv({
  defaultVariants: {
    variant: 'body-1' as RootTypographyKey,
  },
  variants: {
    variant: {
      'body-1': 'text-body-1 font-body-1 tracking-body-1 leading-body-1',
      'body-2': 'text-body-2 font-body-2 tracking-body-2 leading-body-2',
      caption: 'text-caption font-caption tracking-caption leading-caption',
      'heading-1': 'text-heading-1 font-heading-1 tracking-heading-1 leading-heading-1',
      'heading-2': 'text-heading-2 font-heading-2 tracking-heading-2 leading-heading-2',
      'heading-3': 'text-heading-3 font-heading-3 tracking-heading-3 leading-heading-3',
      'heading-4': 'text-heading-4 font-heading-4 tracking-heading-4 leading-heading-4',
      'heading-5': 'text-heading-5 font-heading-5 tracking-heading-5 leading-heading-5',
      'heading-6': 'text-heading-6 font-heading-6 tracking-heading-6 leading-heading-6',
      label: 'text-label font-label tracking-label leading-label',
      'title-1': 'text-title-1 font-title-1 tracking-title-1 leading-title-1',
      'title-2': 'text-title-2 font-title-2 tracking-title-2 leading-title-2',
      'title-3': 'text-title-3 font-title-3 tracking-title-3 leading-title-3',
      tooltip: 'text-tooltip font-tooltip tracking-tooltip leading-tooltip',
    },
  },
});

export type TypographyVariant = VariantProps<typeof typography>;
