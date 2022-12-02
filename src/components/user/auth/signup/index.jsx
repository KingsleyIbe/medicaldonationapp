import React from 'react';
import Header from '../../../common/Header';
import MobileHeader from '../../../common/MobileHeader';
import SignUp from './SignUp';

const index = () => (
  <div className="relative">
    <MobileHeader />
    <div className="lg:mt-0 mt-[80px]">
      <Header />
      <SignUp />
    </div>
  </div>
);

export default index;
