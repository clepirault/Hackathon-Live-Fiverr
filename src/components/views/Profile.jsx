import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

function Profile() {
  return (
    <div>
      <MainLayout>
        <h1>Profile</h1>
        <Link to="/">Settings</Link>
      </MainLayout>
    </div>
  );
}

export default Profile;
