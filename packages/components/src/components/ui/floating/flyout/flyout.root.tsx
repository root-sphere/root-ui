import { FloatingDelayGroup } from '@floating-ui/react';
import * as React from 'react';

import { FlyoutDelay, FlyoutOptions } from './flyout.types';
import { FlyoutContext, useFlyout } from './useFlyoutContext';

export interface FlyoutProps extends FlyoutOptions {
  children: React.ReactNode;
  /**
   * Open/Close delay
   */
  delay?: FlyoutDelay;
}

const DEFAULT_DELAY: FlyoutDelay = {
  close: 100,
  open: 300,
};

export const FlyoutRoot = ({ children, delay, ...options }: FlyoutProps) => {
  const tooltipValues = useFlyout(options);

  return (
    <FlyoutContext.Provider value={tooltipValues}>
      <FloatingDelayGroup delay={delay || DEFAULT_DELAY}>{children}</FloatingDelayGroup>
    </FlyoutContext.Provider>
  );
};
