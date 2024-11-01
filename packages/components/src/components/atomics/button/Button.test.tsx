import { render } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, test } from 'vitest';

import { Button } from './Button';

describe('Button Test', () => {
  test('Button', () => {
    const button = render(<Button>Button</Button>);
    const { container } = button;

    expect(button.getByText('Button'));
    expect(container.classList.contains('Root__Button'));
  });
});
