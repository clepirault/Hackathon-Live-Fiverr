import './Mentor.css';

function MentorDetail(props) {
  const { firstname, lastname, photo, interest } = props;
  return (
    <div className="mentorCard">
      <ul className="textCenter">
        <li>{`${firstname} ${lastname}`}</li>
        <img src={photo} alt={lastname} />
        <li>
          {interest[0]}
          <br />
          {interest[1]}
          <br />
          {interest[2]}
        </li>
      </ul>
      <div className="buttonMentor">
        <button type="button">{`Contact ${firstname}`}</button>
      </div>
    </div>
  );
}

export default MentorDetail;
