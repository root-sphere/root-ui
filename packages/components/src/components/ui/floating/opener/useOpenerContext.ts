import { ElementOrRef } from '@/types';
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import * as React from 'react';

import { OpenerFloatingReturns, OpenerIntersectionReturns, OpenerOptions } from './opener.types';

export interface UseOpenerProps extends OpenerOptions {
  disabled?: boolean;
}

export interface UseOpenerReturns extends OpenerFloatingReturns, OpenerIntersectionReturns {
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

export function useOpener({
  disabled,
  initialOpen = false,
  offset: offsetValue = 5,
  onOpenChange: setControlledOpen,
  open: controlledOpen,
  placement = 'bottom-start',
  root,
  strategy = 'fixed',
  zIndex,
}: UseOpenerProps = {}): UseOpenerReturns {
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

  const click = useClick(context, {
    enabled: !disabled,
  });
  const dismiss = useDismiss(context, {
    enabled: !disabled,
  });
  const role = useRole(context, {
    enabled: !disabled,
    role: 'tooltip',
  });

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo<UseOpenerReturns>(() => {
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

export type OpenerContextValues = UseOpenerReturns;
export const OpenerContext = React.createContext<OpenerContextValues>(
  null as unknown as OpenerContextValues,
);

export const useOpenerContext = (): OpenerContextValues => {
  const context = React.useContext(OpenerContext);

  if (context == null) {
    throw new Error('Opener components must be wrapped in <Opener />');
  }
  return context;
};
