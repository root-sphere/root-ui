import { cn } from '@/lib/utils';
import * as React from 'react';

import { typographyVariants, type TypographyVariants } from './heading.styles';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H4Props extends ElementProps, TypographyVariants {}

export const H4 = React.forwardRef<ElementType, H4Props>(
  ({ children, className, variant = 'head-4xl', ...props }, ref) => {
    return (
      <h4 ref={ref} className={cn(typographyVariants({ className, variant }))} {...props}>
        {children}
      </h4>
    );
  },
);
H4.displayName = 'H4';
