/* eslint-disable no-unused-vars */
import './Carousel.css';

import { useState } from 'react';

import ImageGallery from 'react-image-gallery';
import usersArray from '../../dataUsers';
import livesArray from '../../dataLives';

import SEOpic from '../images/liveSEO.jpg';
import logopic from '../images/liveLogo.jpg';
import abletonpic from '../images/liveAbleton.jpg';

const timeNow = new Date();

const bgGradient = [
  'linear-gradient(to right, #4880EC, #019CAD)',
  'linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)',
  'linear-gradient(315deg, #e899dc 0%, #d387ab 74%)',
  'linear-gradient(315deg, #00b712 0%, #5aff15 74%)',
  'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)',
  'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
];
const Carousel = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(usersArray);
  const [livesNow, setLivesNow] = useState(
    livesArray.filter((live) => live.date <= timeNow)
  );
  const [livesToday, setLivesToday] = useState(
    livesArray.filter((live) => live.date.getDay() === timeNow.getDay())
  );
  const [livesTomorrow, setLivesTomorrow] = useState(
    livesArray.filter(
      (live) =>
        live.date.getDay() === timeNow.getDay() &&
        live.date.getHours() > timeNow.getHours()
    )
  );

  const imagesLive = [
    {
      original: abletonpic,
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
      description: `${livesArray[0].interest} : ${livesArray[0].description}`,
    },
    {
      original: SEOpic,
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
      description: `${livesArray[1].interest} : ${livesArray[1].description}`,
    },
    {
      original: logopic,
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
      description: `${livesArray[2].interest} : ${livesArray[2].description}`,
    },
  ];

  const playVideo = (e) => {
    const logo = e.target.currentSrc;
    if (logo) {
      if (logo.includes('Ableton'))
        window.open(
          'https://www.youtube.com/watch?v=25Zcy8Uu4dw?t=1226',
          '_blank'
        );
      if (logo.includes('SEO'))
        window.open('https://youtu.be/xsVTqzratPs?t=1995', '_blank');
      if (logo.includes('Logo'))
        window.open('https://youtu.be/UyoXKGQrmtY?t=1351', '_blank');
    }
  };

  return (
    <div>
      <div className="CarouselDiv">
        <h2>Live mentoring right now !</h2>
        <ImageGallery
          items={imagesLive}
          showThumbnails={false}
          autoPlay
          showPlayButton={false}
          showFullscreenButton={false}
          infinite
          slideInterval={3500}
          showBullets
          onClick={(e) => playVideo(e)}
        />
      </div>

      <div className="today">
        <h2>Live mentoring today !</h2>
        <div className="livesToday">
          {livesToday.map((live, i) => (
            <div
              className="live"
              style={{
                backgroundImage: bgGradient[i],
              }}
            >
              <p className="titreLive">{live.interest}</p>
              <div className="tagLives">
                <p className="tagLive">{live.tags[0]}</p>
                {live.tags[1] && <p className="tagLive">{live.tags[1]}</p>}
              </div>
              <p>{live.description}</p>
              <p className="hourLive">Starts @ {live.date.getHours()}:00</p>
            </div>
          ))}
        </div>
      </div>

      <div className="searchArea">
        <label htmlFor="searchinput">
          <input
            type="text"
            id="searchinput"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        {livesArray.map((live) => (
          <div className="livesearch">
            <p className="titreLive">{live.interest}</p>
            <div className="tagsSearch">
              <p className="tagLiveSearch">{live.tags[0]}</p>
              {live.tags[1] && <p className="tagLiveSearch">{live.tags[1]}</p>}
            </div>

            <p>{live.description}</p>
          </div>
        ))}
        <p>{search}</p>
      </div>
    </div>
  );
};

export default Carousel;
