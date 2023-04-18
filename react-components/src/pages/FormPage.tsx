import React, { useEffect, useState } from 'react';
import { UserForm } from '../components/form/UserForm';
import { UsersList } from '../components/userCardList/UsersList';

function FormPage() {
  return (
    <>
      <UserForm />
      <h2>Your cards</h2>
      <UsersList />
    </>
  );
}

export { FormPage };
