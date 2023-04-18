import React from 'react';
import { UserCard } from './UserCard';
import { useAppSelector } from '../../hooks/hooks';

function UsersList() {
  const users = useAppSelector((state) => state.users.users);

  return (
    <div className="card-list">
      {users.map((user, index) => (
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

export { UsersList };
