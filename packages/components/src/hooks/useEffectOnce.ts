import * as React from 'react';

export type UseEffectOnceProps = {
  effect: React.EffectCallback;
  enabled?: boolean;
};

export const useEffectOnce = ({ effect, enabled = true }: UseEffectOnceProps) => {
  const hasRun = React.useRef(false);

  React.useEffect(() => {
    if (enabled && !hasRun.current) {
      hasRun.current = true;
      effect();
    }
  }, [effect, enabled]);
};
