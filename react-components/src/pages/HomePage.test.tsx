import { render } from '@testing-library/react';
import React from 'react';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('render test for HomePage', () => {
    render(<HomePage />);
  });
});
