import { render } from '@testing-library/react';
import React from 'react';

import { CardsList } from './CardsList';
import { Card } from './CardsList';

const testProducts: Card[] = [
  {
    id: 4,
    title: 'title',
    price: 54,
    description: 'desc',
    category: {
      id: 34,
      name: '1',
      image: 'url',
    },
    images: ['some url'],
  },
  {
    id: 4,
    title: 'title',
    price: 54,
    description: 'desc',
    category: {
      id: 34,
      name: '1',
      image: 'url',
    },
    images: ['some url'],
  },
  {
    id: 4,
    title: 'title',
    price: 54,
    description: 'desc',
    category: {
      id: 34,
      name: '1',
      image: 'url',
    },
    images: ['some url'],
  },
];

describe('CardsList', () => {
  it('render test for CardsList', () => {
    render(<CardsList products={testProducts} />);
  });
});
