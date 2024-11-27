import { cn } from '@/lib/utils';
import * as React from 'react';

import { typographyVariants, type TypographyVariants } from './heading.styles';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H3Props extends ElementProps, TypographyVariants {}

export const H3 = React.forwardRef<ElementType, H3Props>(
  ({ children, className, variant = 'head-3xl', ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn(typographyVariants({ className, variant }))} {...props}>
        {children}
      </h3>
    );
  },
);
H3.displayName = 'H3';
