import clsx from 'clsx';
import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyles = tv({
  base: clsx(
    'btn',
    'border border-solid',
    'outline-none',
    'cursor-pointer',
    'disabled:cursor-not-allowed disabled:opacity-85',
  ),
  variants: {
    intent: {
      accent: '',
      danger: '',
      faint: '',
      info: '',
      neutral: '',
      primary: '',
      secondary: '',
      success: '',
      warning: '',
    },
    scale: {
      lg: 'btn-scale-lg',
      md: 'btn-scale-md',
      sm: 'btn-scale-sm',
      xl: 'btn-scale-xl',
      xs: 'btn-scale-xs',
    },
    variant: {
      outlined: 'outlined',
      solid: 'solid',
    },
  },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;
