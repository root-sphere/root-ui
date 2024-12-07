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
  slots: {
    root: 'grid gap-2',
  },
});

const radioGroupItemVariants = tv({
  slots: {
    root: [
      'aspect-square size-5 rounded-full border border-primary text-primary',
      'ring-offset-background',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    icon: ['size-3 fill-current text-current'],
    indicator: ['flex h-full w-full items-center justify-center text-current font-medium'],
  },
});

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>;
export type RadioGroupItemVariants = VariantProps<typeof radioGroupItemVariants>;

const RadioGroup = React.forwardRef<RootElementType, RootElementProps & RadioGroupVariants>(
  ({ className, ...props }, ref) => {
    const { root } = radioGroupVariants();
    return <RadioGroupPrimitive.Root className={cn(root(), className)} {...props} ref={ref} />;
  },
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<ItemElementType, ItemElementProps & RadioGroupItemVariants>(
  ({ className, ...props }, ref) => {
    const { root, icon, indicator } = radioGroupItemVariants();
    return (
      <RadioGroupPrimitive.Item ref={ref} className={cn(root(), className)} {...props}>
        <RadioGroupPrimitive.Indicator className={indicator()}>
          <Circle className={icon()} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  },
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, radioGroupVariants, radioGroupItemVariants };
