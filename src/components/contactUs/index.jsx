import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MobileHeader from '../common/MobileHeader';
import Contact from './ContactUs';

const ContactUs = () => (
  <div>
    <Header />
    <div className="relative">
      <MobileHeader />
      <div className="lg:mt-10 mt-[80px]">
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default ContactUs;
