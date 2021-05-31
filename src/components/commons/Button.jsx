import React from 'react';
import './Button.css';

function Button(props) {
  const { children, type, onClick } = props;

  return (
    <button className={type} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
