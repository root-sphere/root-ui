import { cn } from '@/lib/utils';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const inputVariants = tv({
  base: [
    'flex h-10 w-full rounded-md',
    'border bg-background',
    'px-3 py-2 text-sm',
    'ring-offset-background',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'transition-colors duration-200',
  ],
  defaultVariants: {
    intent: 'accent',
  },
  variants: {
    intent: {
      accent: [
        'border-accent text-accent',
        'placeholder:text-accent/50',
        'focus-visible:border-accent focus-visible:ring-accent',
        'hover:border-accent hover:bg-accent/5',
      ],
    },
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;

export interface InputProps extends React.ComponentProps<'input'>, InputVariants {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, intent, ...props }, ref) => {
    return <input className={cn(inputVariants({ className, intent }))} ref={ref} {...props} />;
  },
);
Input.displayName = 'Input';
