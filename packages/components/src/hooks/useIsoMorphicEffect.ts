import { isServer } from '@/utils';
import * as React from 'react';

export const useIsoMorphicEffect = isServer() ? React.useEffect : React.useLayoutEffect;
