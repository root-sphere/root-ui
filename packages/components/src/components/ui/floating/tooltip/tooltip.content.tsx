import { cn } from '@/lib/utils';
import { FloatingPortal, useDelayGroup, useMergeRefs } from '@floating-ui/react';
import * as React from 'react';

import { tooltipVariants } from './tooltip.variants';
import { useTooltipContext } from './useTooltipContext';

const CLASSNAME = 'Root__Tooltip__Content';
type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;

export interface TooltipContentProps extends ElementProps {}

export const TooltipContent = React.forwardRef<ElementType, TooltipContentProps>(
  ({ children, className, ...others }, ref) => {
    const contextValues = useTooltipContext();
    const tooltipId = React.useId();
    const mergedRef = useMergeRefs([contextValues?.refs.setFloating || null, ref]);

    useDelayGroup(contextValues.context, {
      id: tooltipId,
    });

    const { floatingStyles, getFloatingProps, root, zIndex } = contextValues;
    return (
      <FloatingPortal root={root}>
        {contextValues?.open && (
          <div
            {...contextValues?.getFloatingProps(others)}
            className={cn(CLASSNAME, tooltipVariants({ className }))}
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
            {...getFloatingProps(others)}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    );
  },
);
