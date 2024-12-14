import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useEffectOnce } from './useEffectOnce';

describe('useEffectOnce', () => {
  it('should run effect only once when enabled', () => {
    const mockEffect = vi.fn();
    const { rerender } = renderHook(() =>
      useEffectOnce({ effect: mockEffect, enabled: true })
    );

    expect(mockEffect).toHaveBeenCalledTimes(1);

    rerender();
    expect(mockEffect).toHaveBeenCalledTimes(1);
  });

  it('should not run effect when disabled', () => {
    const mockEffect = vi.fn();
    renderHook(() =>
      useEffectOnce({ effect: mockEffect, enabled: false })
    );

    expect(mockEffect).not.toHaveBeenCalled();
  });

  it('should not run effect again when enabled changes from false to true', () => {
    const mockEffect = vi.fn();
    const { rerender } = renderHook(
      ({ enabled }) => useEffectOnce({ effect: mockEffect, enabled }),
      { initialProps: { enabled: false } }
    );

    expect(mockEffect).not.toHaveBeenCalled();

    rerender({ enabled: true });
    expect(mockEffect).not.toHaveBeenCalled();
  });
});
