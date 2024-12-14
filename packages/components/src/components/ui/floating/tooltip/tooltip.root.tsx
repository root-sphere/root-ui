import { FloatingDelayGroup } from '@floating-ui/react';
import * as React from 'react';

import { TooltipDelay, TooltipOptions } from './tooltip.types';
import { TooltipContext, useTooltip } from './useTooltipContext';

export interface TooltipProps extends TooltipOptions {
  children: React.ReactNode;
  /**
   * Open/Close delay
   */
  delay?: TooltipDelay;
}

const DEFAULT_DELAY: TooltipDelay = {
  close: 100,
  open: 300,
};

export const TooltipRoot = ({ children, delay, ...options }: TooltipProps) => {
  const tooltipValues = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltipValues}>
      <FloatingDelayGroup delay={delay || DEFAULT_DELAY}>{children}</FloatingDelayGroup>
    </TooltipContext.Provider>
  );
};
