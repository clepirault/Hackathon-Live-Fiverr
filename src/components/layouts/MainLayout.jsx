import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../commons/Navigation';

function MainLayout({ children }) {
  return (
    <div className="MainLayout">
      <header>
        <Navigation>
          <Link to="/">Accueil</Link>
          <Link to="/products">Liste des produits</Link>
          <Link to="/contact">Nous contacter</Link>
        </Navigation>
        <main>{children}</main>
        <footer>Copyright 2021</footer>
      </header>
    </div>
  );
}

export default MainLayout;
