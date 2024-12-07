import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { badgeVariants } from './badge.variants';

type BadgeVariants = VariantProps<typeof badgeVariants>;

type ElementType = HTMLSpanElement;
type ElementProps = React.HTMLAttributes<ElementType>;

interface BadgeProps extends ElementProps, BadgeVariants {
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, asChild = false, intent, size, variant = 'outline', ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        className={cn(badgeVariants({ className, intent, size, variant }))}
        data-variant={variant}
        ref={ref}
        {...props}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge, type BadgeProps, type BadgeVariants, badgeVariants };
