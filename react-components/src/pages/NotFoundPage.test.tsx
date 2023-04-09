import { render } from '@testing-library/react';
import React from 'react';

import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  it('render test for NotFoundPage', () => {
    render(<NotFoundPage />);
  });
});
