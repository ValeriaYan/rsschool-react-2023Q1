import { render } from '@testing-library/react';
import React from 'react';

import User from '../../models/IUser';
import { UserForm } from './UserForm';

describe('UserForm', () => {
  const users = [];
  function updateData(user: User) {
    users.push(user);
  }
  it('render test for UserForm', () => {
    render(<UserForm />);
  });
});
