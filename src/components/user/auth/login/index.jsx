import React from 'react';
import Header from '../../../common/Header';
import MobileHeader from '../../../common/MobileHeader';
import SignIn from './SignIn';

const index = () => (
  <div className="relative">
    <Header />
    <MobileHeader />
    <div className="mt-[80px]">
      <SignIn />
    </div>
  </div>
);

export default index;
