import { ElementOrRef } from '@/types';
import {
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  size,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import * as React from 'react';

import { FlyoutFloatingReturns, FlyoutIntersectionReturns, FlyoutOptions } from './flyout.types';

export interface UseFlyoutProps extends FlyoutOptions {
  disabled?: boolean;
}

export interface UseFlyoutReturns extends FlyoutFloatingReturns, FlyoutIntersectionReturns {
  /**
   * Open state
   */
  open: boolean;
  /**
   * Portal target element
   */
  root?: ElementOrRef<HTMLElement>;
  /**
   * Set open state
   */
  setOpen: (open: boolean) => void;
  /**
   * zIndex
   */
  zIndex?: number;
}

export function useFlyout({
  disabled,
  initialOpen = false,
  offset: offsetValue = 5,
  onOpenChange: setControlledOpen,
  open: controlledOpen,
  placement = 'bottom',
  root,
  strategy = 'fixed',
  zIndex,
}: UseFlyoutProps = {}): UseFlyoutReturns {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState<boolean>(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const floating = useFloating({
    middleware: [
      offset(offsetValue),
      shift(),
      flip(),
      size({
        apply({ elements, rects }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
    ],
    onOpenChange: setOpen,
    open,
    placement,
    strategy,
    whileElementsMounted: autoUpdate,
  });
  const { context } = floating;

  const focus = useFocus(context, {
    enabled: !disabled,
  });
  const hover = useHover(context, {
    enabled: !disabled,
    handleClose: safePolygon(),
  });
  const dismiss = useDismiss(context, {
    enabled: !disabled,
  });
  const role = useRole(context, {
    enabled: !disabled,
    role: 'tooltip',
  });

  const interactions = useInteractions([focus, hover, dismiss, role]);

  return React.useMemo<UseFlyoutReturns>(() => {
    return {
      ...interactions,
      ...floating,
      open,
      root,
      setOpen,
      zIndex,
    };
  }, [open, root, setOpen, zIndex, interactions, floating]);
}

export type FlyoutContextValues = UseFlyoutReturns;
export const FlyoutContext = React.createContext<FlyoutContextValues>(
  null as unknown as FlyoutContextValues,
);

export const useFlyoutContext = (): FlyoutContextValues => {
  const context = React.useContext(FlyoutContext);

  if (context == null) {
    throw new Error('Flyout components must be wrapped in <Flyout />');
  }
  return context;
};
