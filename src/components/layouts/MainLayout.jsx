import React from 'react';
import Header from '../commons/Header';
import Footer from '../commons/Footer';

function MainLayout({ children }) {
  return (
    <div className="MainLayout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
