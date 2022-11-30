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
      <Contact />
      <Footer />
    </div>
  </div>
);

export default ContactUs;
