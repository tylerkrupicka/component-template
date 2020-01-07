import React from 'react';
import { render } from '@testing-library/react';
import {{pascal}} from '.';

describe('{{pascal}}', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<{{pascal}} />);
    expect(container).toMatchSnapshot();
  });  
});