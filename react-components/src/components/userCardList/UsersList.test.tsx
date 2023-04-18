import { render } from '@testing-library/react';
import React from 'react';

import { UsersList } from './UsersList';

describe('AboutPage', () => {
  it('render test for AboutPage', () => {
    render(<UsersList />);
  });
});
