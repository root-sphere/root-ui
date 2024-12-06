import * as React from 'react';

export const useLatestValue = <T>(value: T) => {
  const ref = React.useRef(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
