// import React, { useState } from 'react';

import MainLayout from '../layouts/MainLayout';
import './Profile.css';

function Profile() {
  // const [selected, setSelected] = useState(false);
  return (
    <div>
      <MainLayout>
        <h1>Profile</h1>
        <h2>My preferences</h2>
        <h3>My interests</h3>
        <div className="container">
          <div className="interet" />
          <div className="interet" />
          <div className="interet" />
          <div className="interet" />
          <div className="interet" />
          <div className="interet" />
          <div className="interet" />
          <div className="interet" />
          <div className="interet" />
        </div>
        <h3>My role:</h3>
        <form>
          <p>
            {' '}
            Am I a mentor ? <br />
            <label htmlFor="yes">
              <input type="radio" value="yes" name="bool" /> Yes
            </label>
            <br />
            <input type="radio" value="no" name="bool" /> No
            <br />
          </p>
        </form>
      </MainLayout>
    </div>
  );
}

export default Profile;
