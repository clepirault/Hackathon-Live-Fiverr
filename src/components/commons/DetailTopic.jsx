/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import '../views/Settings.css';

function DetailTopic(props) {
  const { topic, image, value } = props;
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    let topics = localStorage.getItem('topics');
    if (topics != null) {
      topics = JSON.parse(topics);
    } else {
      topics = [];
    }
    if (!topics.includes(value)) {
      topics.push(value);
    } else {
      topics = topics.filter((element) => element !== value);
    }
    localStorage.setItem('topics', JSON.stringify(topics));
    setSelected(!selected);
  };

  return (
    <div className={selected ? 'detailTopicSelected' : 'detailTopic'}>
      <img
        src={image}
        alt={topic}
        className="imageTopic"
        onClick={handleClick}
        value={value}
      />
      <h3>{topic}</h3>
    </div>
  );
}

export default DetailTopic;
