import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

function Profile() {
  const isMentor = localStorage.getItem('is mentor');
  return (
    <div>
      <MainLayout>
        <h1>Profile</h1>
        <p>{isMentor ? 'Vous etes mentor' : 'vous etes pas mentor'}</p>
        <Link to="/">Settings</Link>
      </MainLayout>
    </div>
  );
}

export default Profile;
