import { cn } from '@/lib/utils';
import * as React from 'react';

import { typographyVariants } from './Typography.styles';

const CLASSNAME = 'Root__H1';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H1Props extends ElementProps {}

export const H1 = React.forwardRef<ElementType, H1Props>(
  ({ children, className, ...others }, ref) => {
    return (
      <h1
        {...others}
        className={cn(CLASSNAME, typographyVariants({ className, variant: 'head-xl' }))}
        ref={ref}
      >
        {children}
      </h1>
    );
  },
);
