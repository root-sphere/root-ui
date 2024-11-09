import clsx from 'clsx';
import * as React from 'react';

import { typography } from './Typography.styles';

const CLASSNAME = 'Root__H4';
type ElementType = HTMLHeadingElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface H4Props extends ElementProps {}

export const H4 = React.forwardRef<ElementType, H4Props>(
  ({ children, className, ...others }, ref) => {
    return (
      <h4
        {...others}
        className={clsx(CLASSNAME, className, typography({ variant: 'heading-4' }))}
        ref={ref}
      >
        {children}
      </h4>
    );
  },
);
