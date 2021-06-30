import React, { useState } from 'react';
import './ToggleButton.css';

function ToggleButton(props) {
  const { title } = props;
  const [isMentor, setIsMentor] = useState(false);
  const handleClick = () => {
    setIsMentor(!isMentor);
  };
  localStorage.setItem('is mentor', isMentor);
  return (
    <div>
      <span className="toggle">{title}</span>
      <label htmlFor="toggle" className="switch">
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          onClick={handleClick}
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default ToggleButton;
