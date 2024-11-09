import clsx from 'clsx';
import * as React from 'react';

import { typography } from './Typography.styles';

const CLASSNAME = 'Root__H6';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H6Props extends ElementProps {}

export const H6 = React.forwardRef<ElementType, H6Props>(
  ({ children, className, ...others }, ref) => {
    return (
      <h6
        {...others}
        className={clsx(CLASSNAME, className, typography({ variant: 'heading-6' }))}
        ref={ref}
      >
        {children}
      </h6>
    );
  },
);
