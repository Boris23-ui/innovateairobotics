import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Programs from '../components/Programs';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Programs />
      <Carousel />
    </MainLayout>
  );
};

export default Home; 