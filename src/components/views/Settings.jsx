import React from 'react';
import { Link } from 'react-router-dom';
import DetailTopic from '../commons/DetailTopic';
import ToggleButton from '../commons/ToggleButton';
import Logo from '../images/logo.png';
import './Settings.css';

function Settings() {
  const text = {
    mainTitle: 'What are you interested for at the moment ?',
    secondTitle: 'Select topics you want to find into our videos',
    toggle: "I'm a mentor",
  };
  const topics = [
    {
      topic1: 'topic1',
    },
    {
      topic2: 'topic2',
    },
    {
      topic3: 'topic3',
    },
    {
      topic4: 'topic4',
    },
    {
      topic5: 'topic5',
    },
    {
      topic6: 'topic6',
    },
    {
      topic7: 'topic7',
    },
    {
      topic8: 'topic8',
    },
  ];
  return (
    <div className="settings">
      <div className="settingsBar">
        <img src={Logo} alt="Logo-Live-Fiverr" className="logo" />
        <ToggleButton title={text.toggle} />
      </div>
      <div className="settingsTitles">
        <h1>{text.mainTitle}</h1>
        <h2>{text.secondTitle}</h2>
      </div>
      <div className="settingsTopics">
        {topics.map((element) => (
          <DetailTopic {...element} />
        ))}
      </div>
      <div className="settingsSubmit">
        <Link to="/home">
          <button type="button">Valider</button>
        </Link>
      </div>
    </div>
  );
}

export default Settings;
