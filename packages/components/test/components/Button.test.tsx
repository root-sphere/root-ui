import { render } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, test } from 'vitest';

function Button() {
  return <button className="btn-success">btn-success</button>;
}

describe('Button Test', () => {
  const button = render(<Button />);

  test('Button contains text', () => {
    expect(button.getByText('btn-success'));
  });
});
