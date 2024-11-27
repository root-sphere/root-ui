import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

// Separate types
type RootElementType = React.ElementRef<typeof RadioGroupPrimitive.Root>;
type RootElementProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;
type ItemElementType = React.ElementRef<typeof RadioGroupPrimitive.Item>;
type ItemElementProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

const radioGroupVariants = tv({
  base: 'grid gap-2',
});

const radioGroupItemVariants = tv({
  base: [
    'aspect-square h-4 w-4 rounded-full border border-primary text-primary',
    'ring-offset-background',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  slots: {
    circle: 'h-2.5 w-2.5 fill-current text-current',
    indicator: 'flex items-center justify-center',
  },
});

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>;
export type RadioGroupItemVariants = VariantProps<typeof radioGroupItemVariants>;

const RadioGroup = React.forwardRef<RootElementType, RootElementProps & RadioGroupVariants>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Root
        className={cn(radioGroupVariants(), className)}
        {...props}
        ref={ref}
      />
    );
  },
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<ItemElementType, ItemElementProps & RadioGroupItemVariants>(
  ({ className, ...props }, ref) => {
    const { base, circle, indicator } = radioGroupItemVariants();
    return (
      <RadioGroupPrimitive.Item ref={ref} className={cn(base(), className)} {...props}>
        <RadioGroupPrimitive.Indicator className={indicator()}>
          <Circle className={circle()} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  },
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, radioGroupVariants, radioGroupItemVariants };
