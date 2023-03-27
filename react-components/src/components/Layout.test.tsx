import { render } from '@testing-library/react';
import React from 'react';

import { Layout } from './Layout';

describe('AboutPage', () => {
  it('render test for AboutPage', () => {
    render(<Layout />);
  });
});
