import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../commons/Navigation';

function MainLayout({ children }) {
  return (
    <div className="MainLayout">
      <header>
        <Navigation>
          <Link to="/">Home</Link>
        </Navigation>
      </header>
      <main>{children}</main>
      <footer>Copyright 2021</footer>
    </div>
  );
}

export default MainLayout;
