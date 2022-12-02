import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MobileHeader from '../common/MobileHeader';
import Question from './Question';

const Faq = () => (
  <div>
    <Header />
    <MobileHeader />
    <div className="lg:mt-10 mt-[80px]">
      <Question />
      <Footer />
    </div>
  </div>
);

export default Faq;
