import React from 'react';
import Button from './Button';

function PrimaryButton(props) {
  const { children, onClick } = props;

  return (
    <Button onClick={onClick} type="primary-button">
      {children}
    </Button>
  );
}

export default PrimaryButton;
