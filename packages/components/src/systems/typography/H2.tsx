import { cn } from '@/lib/utils';
import * as React from 'react';

import { typographyVariants } from './Typography.styles';

const CLASSNAME = 'Root__H2';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H2Props extends ElementProps {}

export const H2 = React.forwardRef<ElementType, H2Props>(
  ({ children, className, ...others }, ref) => {
    return (
      <h2
        {...others}
        className={cn(CLASSNAME, typographyVariants({ className, variant: 'head-2xl' }))}
        ref={ref}
      >
        {children}
      </h2>
    );
  },
);
