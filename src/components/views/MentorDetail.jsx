import './Mentor.css';

function MentorDetail(props) {
  const { firstname, lastname, photo, interest } = props;
  return (
    <div className="mentorCard">
      <ul className="textCenter">
        <li className="formC">{`${firstname} ${lastname}`}</li>
        <img src={photo} alt={lastname} className="picture" />
        <li>
          {interest[0]}
          <br />
          {interest[1]}
          <br />
          {interest[2]}
        </li>
      </ul>
      <div className="buttonMento">
        <button
          type="button"
          className="buttonMentor"
        >{`Contact ${firstname}`}</button>
      </div>
    </div>
  );
}

export default MentorDetail;
