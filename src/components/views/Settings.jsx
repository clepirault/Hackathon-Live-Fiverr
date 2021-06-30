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
      topic: 'Graphics & Design',
      image:
        'https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_graphic_and_design_social_media_design_high_quality.jpg',
      value: 'graphics',
    },
    {
      topic: 'Video & Animation',
      image:
        'https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_video_and_animation_live_action_videos_new.jpg',
      value: 'video',
    },
    {
      topic: 'Music & Audio',
      image:
        'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d2647ac7f4ee5dd766f3a14253f588b8-1580894410149/Jingles%20_%20Intros.jpg',
      value: 'music',
    },
    {
      topic: 'Digital Marketing',
      image:
        'https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_digital_marketing_marketing_strategy2.jpg',
      value: 'digital',
    },
    {
      topic: 'Writing & Translation',
      image:
        'https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_writing_and_translation_proofreading_editing_2.jpg',
      value: 'writing',
    },
    {
      topic: 'Programming & Tech',
      image:
        'https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_programming_and_tech_web_programming_medium.jpg',
      value: 'programming',
    },
    {
      topic: 'Data',
      image:
        'https://fiverr-res.cloudinary.com/w_iw_div_3.0,f_auto,q_auto/v1/attachments/generic_asset/asset/26c44a83991eea5c1d51648056394450-1615813059591/DataAnalytics.png',
    },
    {
      topic: 'Life coaching',
      image:
        'https://fiverr-res.cloudinary.com/w_iw_div_3.0,f_auto,q_auto/v1/attachments/generic_asset/asset/f67e65ae584649f8f8cf5895b3d11f99-1604244196508/Life%20Coaching.png',
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
