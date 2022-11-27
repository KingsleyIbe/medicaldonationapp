import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Contact from './ContactUs';

const ContactUs = () => (
  <div>
    <Header />
    <div className="relative mt-10">
      <Contact />
      <Footer />
    </div>
  </div>
);

export default ContactUs;
