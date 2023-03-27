import { render } from '@testing-library/react';
import React from 'react';

import { Search } from './Search';

describe('search', () => {
  it('render test for Search', () => {
    render(<Search />);
  });
});
