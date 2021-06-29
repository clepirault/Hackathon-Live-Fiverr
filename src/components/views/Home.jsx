import React from 'react';
import Carousel from '../layouts/Carousel';
import MainLayout from '../layouts/MainLayout';

function Home() {
  return (
    <div>
      <MainLayout>
        <div>
          <h1>Home</h1>
        </div>
        <Carousel />
      </MainLayout>
    </div>
  );
}

export default Home;
