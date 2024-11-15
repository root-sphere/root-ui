import clsx from 'clsx';
import * as React from 'react';

import { typographyVariants } from './Typography.styles';

const CLASSNAME = 'Root__H5';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H5Props extends ElementProps {}

export const H5 = React.forwardRef<ElementType, H5Props>(
  ({ children, className, ...others }, ref) => {
    return (
      <h5
        {...others}
        className={clsx(CLASSNAME, typographyVariants({ className, variant: 'head-5xl' }))}
        ref={ref}
      >
        {children}
      </h5>
    );
  },
);
