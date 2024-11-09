import clsx from 'clsx';
import * as React from 'react';

import { typography } from './Typography.styles';

const CLASSNAME = 'Root__H2';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H2Props extends ElementProps {}

export const H2 = React.forwardRef<ElementType, H2Props>(
  ({ children, className, ...others }, ref) => {
    return (
      <h2
        {...others}
        className={clsx(CLASSNAME, className, typography({ variant: 'heading-2' }))}
        ref={ref}
      >
        {children}
      </h2>
    );
  },
);
