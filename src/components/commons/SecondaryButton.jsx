import React from 'react';
import Button from './Button';

function SecondaryButton(props) {
  const { children, onClick } = props;

  return (
    <Button onClick={onClick} type="secondary-button">
      {children}
    </Button>
  );
}

export default SecondaryButton;
