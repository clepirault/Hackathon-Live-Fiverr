// import React, { useState } from 'react';

import MainLayout from '../layouts/MainLayout';
import './Profile.css';

function Profile() {
  return (
    <div>
      <div>Profile</div>
      <MainLayout>
        <h1>Profile</h1>
        <h2>My preferences:</h2>
        <h3>My interests</h3>
        <div className="container">
          <div className="interet">
            <p className="titre">Music & Audio</p>
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d2647ac7f4ee5dd766f3a14253f588b8-1580894410149/Jingles%20_%20Intros.jpg"
              alt="music"
            />
          </div>
          <div className="interet">
            <p className="titre">Video & Animation</p>
            <img
              src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_video_and_animation_live_action_videos_new.jpg"
              alt="video"
            />
          </div>

          <div className="interet">
            <p className="titre">Graphics & Design</p>
            <img
              src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_graphic_and_design_social_media_design_high_quality.jpg"
              alt="Design"
            />
          </div>
          <div className="noInteret">
            <p className="titre0">Digital Marketing</p>
            <img
              src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_digital_marketing_marketing_strategy2.jpg"
              alt="Digital"
            />
          </div>
          <div className="noInteret">
            <p className="titre0">Writing & Translation</p>
            <img
              src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_writing_and_translation_proofreading_editing_2.jpg"
              alt="writing"
            />
          </div>
          <div className="noInteret">
            <p className="titre0">Programming & Tech</p>
            <img
              src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_programming_and_tech_web_programming_medium.jpg"
              alt="programming"
            />
          </div>
          <div className="noInteret">
            <p className="titre0">Data</p>
            <img
              src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,f_auto,q_auto/v1/attachments/generic_asset/asset/26c44a83991eea5c1d51648056394450-1615813059591/DataAnalytics.png"
              alt="Data"
            />
          </div>
          <div className="noInteret">
            <p className="titre0">Life coaching</p>
            <img
              src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,f_auto,q_auto/v1/attachments/generic_asset/asset/f67e65ae584649f8f8cf5895b3d11f99-1604244196508/Life%20Coaching.png"
              alt="Life Coaching"
            />
          </div>
        </div>
        <h3>My role:</h3>
        <form>
          <p>
            {' '}
            Am I a mentor ? <br />
            <label htmlFor="yes">
              <input type="radio" value="yes" name="bool" /> Yes
            </label>
            <br />
            <input type="radio" value="no" name="bool" /> No
            <br />
          </p>
        </form>
      </MainLayout>
    </div>
  );
}

export default Profile;
