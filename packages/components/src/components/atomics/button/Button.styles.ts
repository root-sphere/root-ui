import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyles = tv({
  base: [
    'btn',
    'border border-solid',
    'outline-none',
    'cursor-pointer',
    'disabled:cursor-not-allowed disabled:opacity-85',
  ],
  variants: {
    intent: {
      accent: '',
      danger: '',
      faint: '',
      info: '',
      neutral: '',
      primary: ['bg-primary', 'text-["#fff"]'],
      secondary: '',
      success: '',
      warning: '',
    },
    variant: {
      outlined: 'outlined',
      solid: 'solid',
    },
  },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;
