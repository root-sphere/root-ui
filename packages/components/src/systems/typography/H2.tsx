import { cn } from '@/lib/utils';
import * as React from 'react';

import { typographyVariants, type TypographyVariants } from './heading.styles';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H2Props extends ElementProps, TypographyVariants {}

export const H2 = React.forwardRef<ElementType, H2Props>(
  ({ children, className, variant = 'head-2xl', ...props }, ref) => {
    return (
      <h2 ref={ref} className={cn(typographyVariants({ className, variant }))} {...props}>
        {children}
      </h2>
    );
  },
);
H2.displayName = 'H2';
