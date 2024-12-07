import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { buttonVariants } from './button.variants';

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

interface ButtonProps extends ElementProps, ButtonVariants {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, intent, size, variant = 'outline', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ className, intent, size, variant }))}
        data-variant={variant}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, type ButtonProps, type ButtonVariants, buttonVariants };
