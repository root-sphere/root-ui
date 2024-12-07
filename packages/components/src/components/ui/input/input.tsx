import { cn } from '@/lib/utils';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const inputVariants = tv({
  base: [
    'flex h-10 w-full rounded-md',
    'border bg-background',
    'px-3 py-2 text-sm',
    'ring-offset-background',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-muted-foreground',
    'disabled:pointer-events-none disabled:opacity-70',
    'read-only:cursor-default read-only:opacity-90',
    'transition-colors duration-200',
  ],
  defaultVariants: {
    intent: 'default',
  },
  variants: {
    intent: {
      default: [
        'border-input text-font-primary',
        'placeholder:text-font-secondary',
        'focus-visible:ring-primary',
        'hover:ring-2 hover:ring-primary hover:ring-offset-2',
        'read-only:hover:bg-transparent',
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
