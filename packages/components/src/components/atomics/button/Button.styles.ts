import { RootIntentColorKey } from '@root-sphere/root-ui-tailwind';
import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyles = tv({
  // Base styles for all buttons
  base: [
    'focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2',
    'transition-colors duration-200 ease-in-out',
    'text-white',
  ],
  defaultVariants: {
    intent: 'primary' as RootIntentColorKey,
    variant: 'solid', // Default variant
  },
  variants: {
    intent: {
      danger: ['bg-status-danger'],
      primary: ['bg-primary'],
      success: ['bg-status-success'],
      warning: ['bg-status-warning'],
    },
    variant: {
      outlined: [
        'bg-transparent border-2',
        'hover:bg-opacity-10', // Change hover background
        'text-current', // Keep text color based on intent
      ],
      solid: '', // Applies base style by default
    },
  },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;
