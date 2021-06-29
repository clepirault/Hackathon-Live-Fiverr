import React from 'react';
import './ToggleButton.css';

function ToggleButton(props) {
  const { title } = props;
  return (
    <div>
      <span className="toggle">{title}</span>
      <label htmlFor="toggle" className="switch">
        <input id="toggle" name="toggle" type="checkbox" />
        <span className="slider" />
      </label>
    </div>
  );
}

export default ToggleButton;
