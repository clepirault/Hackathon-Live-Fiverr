import './Carousel.css';

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://gradientjoy.com/1000x600',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    description: 'A course about that or that thing',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    description: 'A course about this other thing',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    description: 'And finally the best of the best : tadaaaaa',
  },
];

const Carousel = () => {
  return (
    <div className="CarouselDiv">
      <ImageGallery
        items={images}
        showThumbnails={false}
        autoPlay
        showPlayButton={false}
        showFullscreenButton={false}
        infinite
        slideInterval={3500}
      />
    </div>
  );
};

export default Carousel;
