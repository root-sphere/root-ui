import * as React from 'react';

import { useLatestValue } from './useLatestValue';

export const useWindowEvent = <E extends keyof WindowEventMap>(
  event: E,
  listener: (event: WindowEventMap[E]) => void,
) => {
  const latestListener = useLatestValue(listener);

  React.useEffect(() => {
    const cachedListener = (e: WindowEventMap[E]) => {
      latestListener(e);
    };
    window.addEventListener(event, cachedListener);
    return () => {
      window.removeEventListener(event, cachedListener);
    };
  }, [event, latestListener]);
};
