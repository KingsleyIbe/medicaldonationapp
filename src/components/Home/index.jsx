import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Intro from './Intro';
import MobileHeader from '../common/MobileHeader';

const Home = () => (
  <div className="relative">
    <Header />
    <MobileHeader />
    <Intro />
    <Footer />
  </div>
);

export default Home;
