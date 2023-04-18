import React from 'react';
import { UserCard } from './UserCard';
import User from '../../models/IUser'

type UserListProps = {
  users: User[];
};

class UsersList extends React.Component<UserListProps, unknown> {
  render(): React.ReactNode {
    return (
      <div className="card-list">
        {this.props.users.map((user, index) => (
          <UserCard
            key={String(index)}
            name={user.name}
            date={user.date}
            gender={user.gender}
            img={user.img}
            country={user.country}
          />
        ))}
      </div>
    );
  }
}

export { UsersList };
