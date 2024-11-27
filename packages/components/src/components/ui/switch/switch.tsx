import { cn } from '@/lib/utils';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const switchVariants = tv({
  base: [
    'peer inline-flex shrink-0 cursor-pointer',
    'items-center rounded-full border-2 border-transparent',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2',
    'focus-visible:ring-offset-background',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'default',
    variant: 'solid',
  },
  variants: {
    intent: {
      danger: 'data-[state=checked]:bg-destructive',
      primary: 'data-[state=checked]:bg-primary',
      success: 'data-[state=checked]:bg-success',
      warning: 'data-[state=checked]:bg-warning',
    },
    size: {
      lg: 'h-7 w-[52px]',
      sm: 'h-5 w-9',
      default: 'h-6 w-11',
    },
    variant: {
      solid: 'data-[state=unchecked]:bg-input',
    },
  },
});

const thumbVariants = tv({
  base: 'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform',
  defaultVariants: {
    size: 'default',
  },
  variants: {
    size: {
      lg: 'h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
      sm: 'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
      default: 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
    },
  },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
export type SwitchThumbVariants = VariantProps<typeof thumbVariants>;
export type SwitchElementProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;

export interface SwitchProps extends SwitchElementProps, SwitchVariants {}

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, size, variant, ...props }, ref) => (
    <SwitchPrimitives.Root
      className={cn(switchVariants({ className, size, variant }))}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb className={cn(thumbVariants({ size }))} />
    </SwitchPrimitives.Root>
  ),
);
Switch.displayName = SwitchPrimitives.Root.displayName;
