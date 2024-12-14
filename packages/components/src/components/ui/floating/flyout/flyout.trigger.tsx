import { useMergeRefs } from '@/hooks';
import { cn } from '@/lib/utils';
import * as React from 'react';

import { useFlyoutContext } from './useFlyoutContext';

const CLASSNAME = 'Root__Flyout__Trigger';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const FlyoutTrigger = React.forwardRef<ElementType, ElementProps>(
  ({ children, className, ...others }, ref) => {
    const contextValues = useFlyoutContext();
    const { getReferenceProps, open } = contextValues;
    const mergedRef = useMergeRefs(contextValues.refs.setReference, ref);

    return (
      <div
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? 'flyout-content' : undefined}
        tabIndex={0}
        {...others}
        className={cn(CLASSNAME, className)}
        data-state={open ? 'open' : 'closed'}
        ref={mergedRef}
        {...getReferenceProps(others)}
      >
        {children}
      </div>
    );
  },
);
