import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <header className="header">
          <div className="container">
            <nav className="nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
            </nav>
          </div>
        </header>
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </>
    );
  }
}

export { Layout };
