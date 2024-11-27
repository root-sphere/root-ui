import { cn } from '@/lib/utils';
import * as React from 'react';

import { typographyVariants, type TypographyVariants } from './heading.styles';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H5Props extends ElementProps, TypographyVariants {}

export const H5 = React.forwardRef<ElementType, H5Props>(
  ({ children, className, variant = 'head-5xl', ...props }, ref) => {
    return (
      <h5 ref={ref} className={cn(typographyVariants({ className, variant }))} {...props}>
        {children}
      </h5>
    );
  },
);
H5.displayName = 'H5';
