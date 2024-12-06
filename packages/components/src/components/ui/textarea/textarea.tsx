import { cn } from '@/lib/utils';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

type ElementType = HTMLTextAreaElement;
type ElementProps = React.ComponentProps<'textarea'>;

const textareaVariants = tv({
  base: [
    'flex min-h-[80px] w-full rounded-md',
    'border bg-background',
    'px-3 py-2 text-sm',
    'ring-offset-background',
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

export type TextareaVariants = VariantProps<typeof textareaVariants>;

export interface TextareaProps extends ElementProps, TextareaVariants {}

export const Textarea = React.forwardRef<ElementType, TextareaProps>(
  ({ className, intent, ...props }, ref) => {
    return (
      <textarea className={cn(textareaVariants({ className, intent }))} ref={ref} {...props} />
    );
  },
);

Textarea.displayName = 'Textarea';

export { textareaVariants };
