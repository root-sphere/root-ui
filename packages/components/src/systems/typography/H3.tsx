import clsx from 'clsx';
import * as React from 'react';

import { typography } from './Typography.styles';

const CLASSNAME = 'Root__H3';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H3Props extends ElementProps {}

export const H3 = React.forwardRef<ElementType, H3Props>(
  ({ children, className, ...others }, ref) => {
    return (
      <h3
        {...others}
        className={clsx(CLASSNAME, className, typography({ variant: 'heading-3' }))}
        ref={ref}
      >
        {children}
      </h3>
    );
  },
);
