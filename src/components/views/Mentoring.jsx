import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import './Mentor.css';
import usersArray from '../../dataUsers';
import MentorDetail from './MentorDetail';

function Mentoring() {
  const [searchMentor, setSearchMentor] = useState('');

  return (
    <div>
      <MainLayout>
        <div className="mentor">
          <h1 className="mentorTitle">Find your perfect mentor !</h1>
          <div className="searchBarMentor">
            <input
              type="text"
              placeholder="Search"
              value={searchMentor}
              onChange={(e) => setSearchMentor(e.target.value)}
            />
          </div>
          <h2>Mentor :</h2>
          <div className="mentorDetail">
            {usersArray
              .filter(
                (element) =>
                  element.firstname
                    .toLowerCase()
                    .includes(searchMentor.toLowerCase()) ||
                  element.lastname
                    .toLowerCase()
                    .includes(searchMentor.toLowerCase()) ||
                  element.interest[0]
                    .toLowerCase()
                    .includes(searchMentor.toLowerCase()) ||
                  (element.interest[1] &&
                    element.interest[1]
                      .toLowerCase()
                      .includes(searchMentor.toLowerCase())) ||
                  (element.interest[2] &&
                    element.interest[2]
                      .toLowerCase()
                      .includes(searchMentor.toLowerCase()))
              )
              .map((element) => (
                <MentorDetail {...element} />
              ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Mentoring;
