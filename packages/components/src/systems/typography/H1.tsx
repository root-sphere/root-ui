import { cn } from '@/lib/utils';
import * as React from 'react';

import { typographyVariants, type TypographyVariants } from './heading.styles';

type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H1Props extends ElementProps, TypographyVariants {}

export const H1 = React.forwardRef<ElementType, H1Props>(
  ({ children, className, variant = 'head-xl', ...props }, ref) => {
    return (
      <h1 ref={ref} className={cn(typographyVariants({ className, variant }))} {...props}>
        {children}
      </h1>
    );
  },
);
H1.displayName = 'H1';
