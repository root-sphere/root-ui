import { useFloating, useInteractions } from '@floating-ui/react';

import { CommonFloatingOptions } from '../types';

export type FlyoutDelay = {
  close: number;
  open: number;
};

export interface FlyoutOptions extends CommonFloatingOptions {}

export type FlyoutIntersectionReturns = ReturnType<typeof useInteractions>;

export type FlyoutFloatingReturns = ReturnType<typeof useFloating>;
