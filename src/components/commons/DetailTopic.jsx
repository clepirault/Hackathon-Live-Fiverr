import React from 'react';
import '../views/Settings.css';

function DetailTopic({ children }) {
  return (
    <div className="detailTopic">
      <h3>{children}</h3>
    </div>
  );
}

export default DetailTopic;
