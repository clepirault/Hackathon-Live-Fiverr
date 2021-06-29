import React from 'react';
import Header from '../commons/Header';
import Footer from '../commons/Footer';

function MainLayout({ children }) {
  return (
    <div className="MainLayout">
      <div className="layoutBody">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
