import { render } from '@testing-library/react';
import React from 'react';

import { UserCard } from './UserCard';

describe('AboutPage', () => {
  it('render test for AboutPage', () => {
    render(<UserCard name="name" country="country" date="2023-04-12" gender="woman" />);
  });
});
