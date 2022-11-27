import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Contact from './ContactUs';

const ContactUs = () => (
  <div>
    <Header />
    <div className="relative top-[150px] lg:top-[200px]">
      <Contact />
      <Footer />
    </div>
  </div>
);

export default ContactUs;
