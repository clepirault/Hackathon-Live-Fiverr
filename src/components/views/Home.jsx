import React from 'react';
import Carousel from '../layouts/Carousel';
import MainLayout from '../layouts/MainLayout';

function Home() {
  return (
    <div>
      <MainLayout>
        <div>Home</div>
      </MainLayout>
      <Carousel />
    </div>
  );
}

export default Home;
