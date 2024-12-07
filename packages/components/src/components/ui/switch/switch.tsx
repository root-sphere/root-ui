import { cn } from '@/lib/utils';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const switchVariants = tv({
  slots: {
    root: [
      'peer inline-flex shrink-0 cursor-pointer',
      'items-center rounded-full border-2 border-transparent',
      'transition-colors duration-200',
      'focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2',
      'focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-70',
      'hover:ring-2 hover:ring-primary hover:ring-offset-2',
    ],
    thumb: [
      'block',
      'rounded-full bg-background shadow-lg ring-0',
      'pointer-events-none transition-transform duration-200',
    ],
  },
  defaultVariants: {
    intent: 'default',
    size: 'default',
  },
  variants: {
    intent: {
      default: {
        root: [
          'data-[state=checked]:bg-primary',
          'data-[state=unchecked]:bg-input',
          'data-[state=unchecked]:text-font-primary',
        ],
      },
    },
    size: {
      lg: {
        root: 'h-7 w-[52px]',
        thumb: 'h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
      },
      sm: {
        root: 'h-5 w-9',
        thumb: 'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
      },
      default: {
        root: 'h-6 w-11',
        thumb: 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      },
    },
  },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
export type SwitchElementProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;

export interface SwitchProps extends SwitchElementProps, SwitchVariants {}

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, size, intent, ...props }, ref) => {
    const { root, thumb } = switchVariants({ size, intent });
    return (
      <SwitchPrimitives.Root className={cn(root({ className }))} {...props} ref={ref}>
        <SwitchPrimitives.Thumb className={cn(thumb())} />
      </SwitchPrimitives.Root>
    );
  },
);
Switch.displayName = SwitchPrimitives.Root.displayName;
