import React from 'react';
import Header from '../../../common/Header';
import MobileHeader from '../../../common/MobileHeader';
import SignIn from './SignIn';

const index = () => (
  <div className="relative">
    <MobileHeader />
    <div className="lg:mt-0 mt-[80px]">
      <Header />
      <SignIn />
    </div>
  </div>
);

export default index;
