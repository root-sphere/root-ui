import { useMergeRefs } from '@/hooks';
import { FloatingPortal, useDelayGroup } from '@floating-ui/react';
import clsx from 'clsx';
import * as React from 'react';

import { useOpenerContext } from './useOpenerContext';

const CLASSNAME = 'Root__Opener__Content';
type ElementType = HTMLElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface OpenerContentProps {}

export const OpenerContent = React.forwardRef<ElementType, ElementProps & OpenerContentProps>(
  ({ children, className, ...others }, ref) => {
    const contextValues = useOpenerContext();
    const tooltipId = React.useId();
    const mergedRef = useMergeRefs(contextValues.refs.setFloating || null, ref);

    useDelayGroup(contextValues.context, {
      id: tooltipId,
    });

    const { floatingStyles, getFloatingProps, root, zIndex } = contextValues;
    return (
      <FloatingPortal root={root}>
        {contextValues?.open && (
          <div
            style={{
              left: contextValues.x ?? 0,
              position: contextValues?.strategy,
              top: contextValues.y ?? 0,
              visibility: contextValues.x == null ? 'hidden' : 'visible',
              zIndex: zIndex ?? 1000,
              ...floatingStyles,
              ...others.style,
            }}
            className={clsx(CLASSNAME, className)}
            ref={mergedRef}
            {...getFloatingProps(others)}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    );
  },
);
