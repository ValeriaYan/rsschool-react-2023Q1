import { render } from '@testing-library/react';
import React from 'react';

import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  it('render test for ProductCard', () => {
    render(<ProductCard />);
  });
});
