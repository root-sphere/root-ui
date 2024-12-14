import { useMergeRefs } from '@/hooks';
import clsx from 'clsx';
import * as React from 'react';

import { useTooltipContext } from './useTooltipContext';

const CLASSNAME = 'Root__Tooltip__Trigger';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const TooltipTrigger = React.forwardRef<ElementType, ElementProps>(
  ({ children, className, ...others }, ref) => {
    const contextValues = useTooltipContext();
    const { getReferenceProps, open } = contextValues;
    const mergedRef = useMergeRefs(contextValues.refs.setReference, ref);

    return (
      <div
        role="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? 'tooltip-content' : undefined}
        tabIndex={0}
        {...others}
        className={clsx(CLASSNAME, className)}
        data-state={open ? 'open' : 'closed'}
        ref={mergedRef}
        {...getReferenceProps(others)}
      >
        {children}
      </div>
    );
  },
);
