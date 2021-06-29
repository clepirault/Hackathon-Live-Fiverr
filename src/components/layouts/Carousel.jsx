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
  'linear-gradient(315deg, #f6fba2 0%, #20ded3 74%)',
  'linear-gradient(315deg, #68A0EC, #11ACBD)',
  'linear-gradient(147deg, #f7accf 0%, #ff1053 74%)',
  'linear-gradient(315deg, #f9484a 0%, #fbd72b 74%)',
  'linear-gradient(315deg, #00b712 0%, #5aff15 74%)',
  'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)',
  'linear-gradient(315deg, #f2cf07 0%, #55d284 74%)',
  'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
  'linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%)',
  'linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)',
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
        <h2>Live mentoring for you right now !</h2>
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
        <h2>All live mentoring today !</h2>
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
        <h2>Find a live !</h2>
        <label htmlFor="searchinput">
          <input
            type="text"
            id="searchinput"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        {livesArray
          .filter(
            (live) =>
              !search ||
              live.tags[0].toLowerCase().includes(search.toLowerCase()) ||
              (live.tags[1] &&
                live.tags[1].toLowerCase().includes(search.toLowerCase())) ||
              live.description
                .toLowerCase()
                .includes(
                  search.toLowerCase() ||
                    live.interest.toLowerCase().includes(search.toLowerCase())
                )
          )
          .map((live, index) => (
            <div
              className="livesearch"
              style={{
                backgroundImage: bgGradient[index],
              }}
            >
              <p className="titreLive">{live.interest}</p>
              <div className="tagsSearch">
                <p className="tagLiveSearch">{live.tags[0]}</p>
                {live.tags[1] && (
                  <p className="tagLiveSearch">{live.tags[1]}</p>
                )}
              </div>
              <p>{live.description}</p>
              <p className="liveTime">
                {live.date.getDay() === new Date().getDay()
                  ? 'Today @ '
                  : 'Tomorrow @ '}
                {live.date.getHours()}:00
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
