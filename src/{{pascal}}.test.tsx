import React from 'react';
import { render } from '@testing-library/react';
import {{pascal}} from '.';

describe('{{pascal}}', () => {
  test('It renders', () => {
    const { container } = render(<{{pascal}} />);
    expect(container).toExist();
  });  
});