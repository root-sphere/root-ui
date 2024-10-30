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

  test('Button: Intent', () => {
    let button = render(<Button>Button</Button>);
    expect(button.container.getElementsByClassName('bg-primary').length).toBe(1);

    button = render(<Button intent="success">Button</Button>);
    expect(button.container.getElementsByClassName('bg-success').length).toBe(1);
  });
});
