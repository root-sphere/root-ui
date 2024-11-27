import { cn } from '@/lib/utils';
import * as React from 'react';

import { typographyVariants, type TypographyVariants } from './heading.styles';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H6Props extends ElementProps, TypographyVariants {}

export const H6 = React.forwardRef<ElementType, H6Props>(
  ({ children, className, variant = 'head-6xl', ...props }, ref) => {
    return (
      <h6 ref={ref} className={cn(typographyVariants({ className, variant }))} {...props}>
        {children}
      </h6>
    );
  },
);
H6.displayName = 'H6';
