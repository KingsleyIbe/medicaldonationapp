import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MobileHeader from '../common/MobileHeader';
import About from './About';

const index = () => (
  <div className="relative">
    <Header />
    <MobileHeader />
    <About />
    <Footer />
  </div>
);

export default index;
