import React from 'react';
import { Link } from 'react-router-dom';

function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <Link to="/home">
        <button type="button">Valider</button>
      </Link>
    </div>
  );
}

export default Settings;
