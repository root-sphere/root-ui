import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

// Separate types
type ElementType = React.ElementRef<typeof CheckboxPrimitive.Root>;
type ElementProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const checkboxVariants = tv({
  slots: {
    root: [
      'flex size-5 shrink-0 rounded-sm',
      'border bg-background',
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-70',
      'transition-colors duration-200',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
    ],
    icon: ['size-4'],
    indicator: ['flex h-full w-full items-center justify-center text-current font-medium'],
  },
  defaultVariants: {
    intent: 'default',
  },
  variants: {
    intent: {
      default: [
        'border-input text-font-primary',
        'hover:ring-2 hover:ring-primary hover:ring-offset-2',
        'focus-visible:ring-primary',
      ],
    },
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;

const Checkbox = React.forwardRef<ElementType, ElementProps & CheckboxVariants>(
  ({ className, intent, ...props }, ref) => {
    const { root, icon, indicator } = checkboxVariants();
    return (
      <CheckboxPrimitive.Root ref={ref} className={cn(root({ intent }), className)} {...props}>
        <CheckboxPrimitive.Indicator className={indicator()}>
          <Check className={icon()} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
