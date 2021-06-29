import React from 'react';
import Header from '../commons/Header';
import Footer from '../commons/Footer';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div className="mainLayout">
      <div className="bodyLayout">
        <div className="header">
          <Header />
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
