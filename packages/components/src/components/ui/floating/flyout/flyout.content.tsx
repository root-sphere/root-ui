import { useMergeRefs } from '@/hooks';
import { cn } from '@/lib/utils';
import { FloatingPortal, useDelayGroup } from '@floating-ui/react';
import * as React from 'react';

import { useFlyoutContext } from './useFlyoutContext';

const CLASSNAME = 'Root__Flyout__Content';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface FlyoutContentProps extends ElementProps {}

export const FlyoutContent = React.forwardRef<ElementType, FlyoutContentProps>(
  ({ children, className, ...others }, ref) => {
    const contextValues = useFlyoutContext();
    const tooltipId = React.useId();
    const mergedRef = useMergeRefs(contextValues?.refs.setFloating || null, ref);

    useDelayGroup(contextValues.context, {
      id: tooltipId,
    });

    const { floatingStyles, getFloatingProps, root, zIndex } = contextValues;
    return (
      <FloatingPortal root={root}>
        {contextValues?.open && (
          <div
            id="flyout-content"
            role="dialog"
            aria-modal="true"
            style={{
              left: contextValues.x ?? 0,
              position: contextValues?.strategy,
              top: contextValues.y ?? 0,
              visibility: contextValues.x == null ? 'hidden' : 'visible',
              zIndex: zIndex ?? 1000,
              ...floatingStyles,
              ...others.style,
            }}
            ref={mergedRef}
            className={cn(CLASSNAME, className)}
            {...others}
            data-state={contextValues.open ? 'open' : 'closed'}
            {...getFloatingProps(others)}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    );
  },
);
