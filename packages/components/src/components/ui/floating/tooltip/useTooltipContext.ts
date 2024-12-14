import { ElementOrRef } from '@/types';
import {
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import * as React from 'react';

import {
  TooltipFloatingReturns,
  TooltipIntersectionReturns,
  TooltipOptions,
} from './tooltip.types';

export interface UseTooltipProps extends TooltipOptions {
  disabled?: boolean;
}

export interface UseTooltipReturns extends TooltipFloatingReturns, TooltipIntersectionReturns {
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

export function useTooltip({
  disabled,
  initialOpen = false,
  offset: offsetValue = 5,
  onOpenChange: setControlledOpen,
  open: controlledOpen,
  placement = 'bottom-start',
  root,
  strategy = 'fixed',
  zIndex,
}: UseTooltipProps = {}): UseTooltipReturns {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState<boolean>(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const floating = useFloating({
    middleware: [offset(offsetValue), shift(), flip()],
    onOpenChange: setOpen,
    open,
    placement,
    strategy,
    whileElementsMounted: autoUpdate,
  });
  const { context } = floating;

  const hover = useHover(context, {
    enabled: !disabled,
    handleClose: safePolygon(),
    move: false,
  });
  const focus = useFocus(context, {
    enabled: !disabled,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return React.useMemo<UseTooltipReturns>(() => {
    return {
      ...interactions,
      ...floating,
      open,
      root,
      setOpen,
      zIndex,
    };
  }, [floating, interactions, open, root, setOpen, zIndex]);
}

export type TooltipContextValues = UseTooltipReturns;
export const TooltipContext = React.createContext<TooltipContextValues>(
  null as unknown as TooltipContextValues,
);

export const useTooltipContext = (): TooltipContextValues => {
  const context = React.useContext(TooltipContext);

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }
  return context;
};
