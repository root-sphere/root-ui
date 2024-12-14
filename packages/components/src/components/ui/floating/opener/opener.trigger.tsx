import { useMergeRefs } from '@/hooks';
import clsx from 'clsx';
import * as React from 'react';

import { useOpenerContext } from './useOpenerContext';

const CLASSNAME = 'Root__Opener__Trigger';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export const OpenerTrigger = React.forwardRef<ElementType, ElementProps>(
  ({ children, className, ...others }, ref) => {
    const contextValues = useOpenerContext();
    const { getReferenceProps, open } = contextValues;
    const mergedRef = useMergeRefs(contextValues.refs.setReference, ref);

    return (
      <div
        role="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? 'opener-content' : undefined}
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
