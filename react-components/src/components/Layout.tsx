import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <header className="header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </header>
        <main className="main">
          <Outlet />
        </main>
      </>
    );
  }
}

export { Layout };
