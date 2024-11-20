import { cn } from '@/lib/utils';
import * as React from 'react';

import { typographyVariants } from './Typography.styles';

const CLASSNAME = 'Root__H3';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H3Props extends ElementProps {}

export const H3 = React.forwardRef<ElementType, H3Props>(
  ({ children, className, ...others }, ref) => {
    return (
      <h3
        {...others}
        className={cn(CLASSNAME, typographyVariants({ className, variant: 'head-3xl' }))}
        ref={ref}
      >
        {children}
      </h3>
    );
  },
);
