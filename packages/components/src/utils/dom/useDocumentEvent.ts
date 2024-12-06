import * as React from 'react';

import { useLatestValue } from './useLatestValue';

export const useDocumentEvent = <E extends keyof DocumentEventMap>(
  event: E,
  listener: (event: DocumentEventMap[E]) => void,
) => {
  const latestListener = useLatestValue(listener);

  React.useEffect(() => {
    const cachedListener = (e: DocumentEventMap[E]) => {
      latestListener(e);
    };
    document.addEventListener(event, cachedListener);
    return () => {
      document.removeEventListener(event, cachedListener);
    };
  }, [event, latestListener]);
};
