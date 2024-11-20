import { cn } from '@/lib/utils';
import * as React from 'react';

import { ButtonVariants, buttonVariants } from './Button.styles';

const CLASSNAME = 'Root__Button';
type ElementType = HTMLButtonElement;
type ElementProps = React.ButtonHTMLAttributes<ElementType>;

export type ButtonProps = ElementProps & ButtonVariants;

export const Button = React.forwardRef<ElementType, ButtonProps>(
  ({ children, className, intent = 'primary', variant = 'solid', ...others }, ref) => {
    return (
      <button
        type="button"
        role="button"
        tabIndex={0}
        {...others}
        className={buttonVariants({
          className: cn(CLASSNAME, className),
          intent,
          variant,
        })}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
