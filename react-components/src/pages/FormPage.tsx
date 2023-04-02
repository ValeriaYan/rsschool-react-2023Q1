import React, { useEffect, useRef, useState } from 'react';
import { UserForm } from '../components/form/UserForm';
import { UsersList } from '../components/userCardList/UsersList';
import { User } from '../components/userCardList/UsersList';

function FormPage() {
  const [users, setUsers] = useState<User[]>(
    JSON.parse(localStorage.getItem('users') as string) || []
  );

  function updateData(user: User) {
    setUsers([...users, user]);
  }

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <>
      <UserForm updateData={updateData} />
      <h2>Your cards</h2>
      <UsersList users={users} />
    </>
  );
}

export { FormPage };
