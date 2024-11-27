import { cn } from '@/lib/utils';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const labelVariants = tv({
  base: [
    'text-sm font-medium leading-none',
    'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  ],
  defaultVariants: {
    intent: 'primary',
  },
  variants: {
    intent: {
      danger: 'text-destructive',
      primary: 'text-foreground',
      success: 'text-success',
      warning: 'text-warning',
    },
  },
});

export type LabelVariants = VariantProps<typeof labelVariants>;

type ElementType = React.ElementRef<typeof LabelPrimitive.Root>;
type ElementProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

export interface LabelProps extends ElementProps, LabelVariants {}

export const Label = React.forwardRef<ElementType, LabelProps>(
  ({ className, intent, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ className, intent }))}
      {...props}
    />
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;
