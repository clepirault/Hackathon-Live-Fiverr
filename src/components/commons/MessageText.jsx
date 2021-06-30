import React from 'react';

function messageText(props) {
  const { from, message } = props;
  return (
    <div>
      <li>
        <span>{from}</span>
        {message}
      </li>
    </div>
  );
}

export default messageText;
