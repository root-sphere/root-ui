import clsx from 'clsx';
import * as React from 'react';

import { typographyVariants } from './Typography.styles';

const CLASSNAME = 'Root__H6';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H6Props extends ElementProps {}

export const H6 = React.forwardRef<ElementType, H6Props>(
  ({ children, className, ...others }, ref) => {
    return (
      <h6
        {...others}
        className={clsx(CLASSNAME, typographyVariants({ className, variant: 'head-6xl' }))}
        ref={ref}
      >
        {children}
      </h6>
    );
  },
);
