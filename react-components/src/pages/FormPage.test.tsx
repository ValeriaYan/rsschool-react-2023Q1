import { render } from '@testing-library/react';
import React from 'react';

import { FormPage } from './FormPage';

describe('AboutPage', () => {
  it('render test for AboutPage', () => {
    render(<FormPage />);
  });
});
