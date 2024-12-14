import { useFloating, useInteractions } from '@floating-ui/react';

import { CommonFloatingOptions } from '../types';

export type OpenerDelay = {
  close: number;
  open: number;
};

export interface OpenerOptions extends CommonFloatingOptions {}

export type OpenerIntersectionReturns = ReturnType<typeof useInteractions>;

export type OpenerFloatingReturns = ReturnType<typeof useFloating>;
