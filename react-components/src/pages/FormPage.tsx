import React from 'react';
import { UserForm } from '../components/form/UserForm';

class FormPage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <UserForm />
        <h2>Your accounts</h2>
      </>
    );
  }
}

export { FormPage };
