import { useFloating, useInteractions } from '@floating-ui/react';

import { CommonFloatingOptions } from '../types';

export type TooltipDelay = {
  close: number;
  open: number;
};

export interface TooltipOptions extends CommonFloatingOptions {}

export type TooltipIntersectionReturns = ReturnType<typeof useInteractions>;

export type TooltipFloatingReturns = ReturnType<typeof useFloating>;
