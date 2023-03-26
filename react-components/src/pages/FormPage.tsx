import React from 'react';
import { UserForm } from '../components/form/UserForm';
import { UsersList } from '../components/userCardList/UsersList';
import { User } from '../components/userCardList/UsersList';

type FormPageState = {
  users: User[];
};
class FormPage extends React.Component<unknown, FormPageState> {
  users: User[];
  constructor(props: unknown) {
    super(props);
    this.users = [];
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users') as string);
    }
    this.state = {
      users: this.users,
    };

    this.updateData = this.updateData.bind(this);
  }

  updateData(user: User) {
    this.users.push(user);
    this.setState({
      users: this.users,
    });

    localStorage.setItem('users', JSON.stringify(this.users));
  }

  render(): React.ReactNode {
    return (
      <>
        <UserForm updateData={this.updateData} />
        <h2>Your cards</h2>
        <UsersList users={this.state.users} />
      </>
    );
  }
}

export { FormPage };
