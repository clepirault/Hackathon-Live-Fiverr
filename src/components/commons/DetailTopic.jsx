/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import '../views/Settings.css';

function DetailTopic(props) {
  const { topic, image, value } = props;

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
  };

  return (
    <div className="detailTopic">
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
