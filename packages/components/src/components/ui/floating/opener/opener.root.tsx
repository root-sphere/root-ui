import { FloatingDelayGroup } from '@floating-ui/react';
import * as React from 'react';

import { OpenerDelay, OpenerOptions } from './opener.types';
import { OpenerContext, useOpener } from './useOpenerContext';

export interface OpenerProps extends OpenerOptions {
  children: React.ReactNode;
  /**
   * Open/Close delay
   */
  delay?: OpenerDelay;
}

const DEFAULT_DELAY: OpenerDelay = {
  close: 100,
  open: 300,
};

export const OpenerRoot = ({ children, delay, ...options }: OpenerProps) => {
  const tooltipValues = useOpener(options);

  return (
    <FloatingDelayGroup delay={delay || DEFAULT_DELAY}>
      <OpenerContext.Provider value={tooltipValues}>{children}</OpenerContext.Provider>
    </FloatingDelayGroup>
  );
};
