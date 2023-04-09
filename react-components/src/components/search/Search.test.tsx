import { render } from '@testing-library/react';
import React from 'react';

import { Search } from './Search';

describe('search', () => {
  let value = '';
  function setValue(newValue: string) {
    value = newValue;
  }
  function updateData(value: string) {
    setValue(value);
  }
  it('render test for Search', () => {
    render(<Search updateData={updateData} />);
  });
});
