/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './DetailMentor.css';

function DetailMentor(props) {
  const { mentor, setCurentMentor, setArray, chat } = props;
  const handleClick = (s) => {
    setCurentMentor(s);
    setArray(chat.filter((element) => element.mentor === s));
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={() => handleClick(mentor)}>
      <p className="name">{mentor}</p>
    </div>
  );
}

export default DetailMentor;
