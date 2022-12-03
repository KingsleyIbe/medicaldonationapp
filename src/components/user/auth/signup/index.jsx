import React from 'react';
import Header from '../../../common/Header';
import MobileHeader from '../../../common/MobileHeader';
import SignUp from './SignUp';

const index = () => (
  <div className="relative">
    <Header />
    <MobileHeader />
    <div className="mt-[80px]">
      <SignUp />
    </div>
  </div>
);

export default index;
