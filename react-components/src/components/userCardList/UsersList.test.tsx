import { render } from '@testing-library/react';
import React from 'react';

import { UsersList } from './UsersList';

describe('AboutPage', () => {
  const users = [
    {
      name: 'name',
      date: '2023-02-02',
      gender: 'gender',
      img: './testImg.jpg',
      country: 'country',
    },
    {
      name: 'name',
      date: '2023-02-02',
      gender: 'gender',
      img: './testImg.jpg',
      country: 'country',
    },
  ];
  it('render test for AboutPage', () => {
    render(<UsersList users={users} />);
  });
});
