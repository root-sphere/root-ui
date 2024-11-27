import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

// Separate types
type ElementType = React.ElementRef<typeof CheckboxPrimitive.Root>;
type ElementProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const checkboxVariants = tv({
  base: [
    'peer h-4 w-4 shrink-0 rounded-sm border border-primary',
    'ring-offset-background',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  ],
  slots: {
    icon: 'h-4 w-4',
    indicator: 'flex items-center justify-center text-current',
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;

const Checkbox = React.forwardRef<ElementType, ElementProps & CheckboxVariants>(
  ({ className, ...props }, ref) => {
    const { base, icon, indicator } = checkboxVariants();
    return (
      <CheckboxPrimitive.Root ref={ref} className={cn(base(), className)} {...props}>
        <CheckboxPrimitive.Indicator className={indicator()}>
          <Check className={icon()} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
