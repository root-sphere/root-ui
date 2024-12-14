import * as React from 'react';

export function mergeRefs(...refs: Array<React.Ref<any> | undefined>) {
  return <T>(value: T) => {
    refs.forEach((ref) => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(value);
        } else {
          (ref as React.MutableRefObject<T>).current = value;
        }
      }
    });
  };
}

export function useMergeRefs(...refs: Array<React.Ref<any> | undefined>) {
  return React.useMemo(() => mergeRefs(...refs), [refs]);
}
