import React from 'react';
import MainLayout from '../layouts/MainLayout';
import './Profile.css';

function Profile() {
  return (
    <div>
      <MainLayout>
        <h1>Profile</h1>
        <h2>Mes préférences</h2>
        <h3>Mes centres d&rsquo;intérêts</h3>
        <div className="container">
          <div className="interet" />
          <div className="interet" />
          <div className="interet" />
          <div className="interet" />
        </div>
        <h3>Mon rôle:</h3>
        <p>Suis-je un mentor ? </p>
      </MainLayout>
    </div>
  );
}

export default Profile;
