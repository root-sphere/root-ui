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
    intent: 'default',
  },
  variants: {
    intent: {
      danger: [
        'border-status-negative text-status-negative',
        'placeholder:text-status-negative/60',
        'focus-visible:border-status-negative focus-visible:ring-status-negative',
        'hover:border-status-negative hover:bg-status-negative/10',
      ],
      info: [
        'border-status-informative text-status-informative',
        'placeholder:text-status-informative/60',
        'focus-visible:border-status-informative focus-visible:ring-status-informative',
        'hover:border-status-informative hover:bg-status-informative/10',
      ],
      primary: [
        'border-brand-primary text-brand-primary',
        'placeholder:text-brand-primary/60',
        'focus-visible:border-brand-primary focus-visible:ring-brand-primary',
        'hover:border-brand-primary hover:bg-brand-primary/10',
      ],
      secondary: [
        'border-brand-secondary text-brand-secondary',
        'placeholder:text-brand-secondary/60',
        'focus-visible:border-brand-secondary focus-visible:ring-brand-secondary',
        'hover:border-brand-secondary hover:bg-brand-secondary/10',
      ],
      success: [
        'border-status-positive text-status-positive',
        'placeholder:text-status-positive/60',
        'focus-visible:border-status-positive focus-visible:ring-status-positive',
        'hover:border-status-positive hover:bg-status-positive/10',
      ],
      warning: [
        'border-status-cautionary text-status-cautionary',
        'placeholder:text-status-cautionary/60',
        'focus-visible:border-status-cautionary focus-visible:ring-status-cautionary',
        'hover:border-status-cautionary hover:bg-status-cautionary/10',
      ],
      default: [
        'border-input text-foreground',
        'placeholder:text-muted-foreground',
        'focus-visible:border-ring focus-visible:ring-ring',
        'hover:border-ring hover:bg-muted/10',
      ],
      tertiary: [
        'border-brand-tertiary text-brand-tertiary',
        'placeholder:text-brand-tertiary/60',
        'focus-visible:border-brand-tertiary focus-visible:ring-brand-tertiary',
        'hover:border-brand-tertiary hover:bg-brand-tertiary/10',
      ],
    },
  },
});

export type TextareaVariants = VariantProps<typeof textareaVariants>;

const Textarea = React.forwardRef<ElementType, ElementProps & TextareaVariants>(
  ({ className, intent, ...props }, ref) => {
    return (
      <textarea className={cn(textareaVariants({ className, intent }))} ref={ref} {...props} />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
