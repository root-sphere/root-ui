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
