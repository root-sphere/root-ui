import { cn } from '@/lib/utils';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

type ElementType = HTMLTextAreaElement;
type ElementProps = React.ComponentProps<'textarea'>;

const textareaVariants = tv({
  base: [
    'flex min-h-[80px] w-full rounded-md',
    'border bg-background',
    'px-3 py-2 text-base',
    'ring-offset-background',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'transition-colors duration-200',
    'md:text-sm',
  ],
  defaultVariants: {
    intent: 'primary',
    variant: 'outline',
  },
  variants: {
    intent: {
      danger: [
        'border-destructive text-destructive placeholder:text-destructive/60',
        'focus-visible:border-destructive focus-visible:ring-destructive',
        'hover:border-destructive hover:bg-destructive/10',
      ],
      primary: [
        'border-input text-foreground',
        'focus-visible:border-primary focus-visible:ring-primary',
        'hover:border-primary hover:bg-primary/10',
      ],
      success: [
        'border-success text-success placeholder:text-success/60',
        'focus-visible:border-success focus-visible:ring-success',
        'hover:border-success hover:bg-success/10',
      ],
      warning: [
        'border-warning text-warning placeholder:text-warning/60',
        'focus-visible:border-warning focus-visible:ring-warning',
        'hover:border-warning hover:bg-warning/10',
      ],
    },
    variant: {
      outline: '',
      solid: 'border-transparent bg-secondary',
    },
  },
});

export type TextareaVariants = VariantProps<typeof textareaVariants>;

const Textarea = React.forwardRef<ElementType, ElementProps & TextareaVariants>(
  ({ className, intent, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ className, intent, variant }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
