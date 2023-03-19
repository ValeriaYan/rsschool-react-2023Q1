import { render } from '@testing-library/react';
import React from 'react';

import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
  it('render test for AboutPage', () => {
    render(<AboutPage />);
  });
});
