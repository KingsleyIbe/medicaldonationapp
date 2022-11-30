import React from 'react';
import Header from '../../../common/Header';
import MobileHeader from '../../../common/MobileHeader';
import SignUp from './SignUp';

const index = () => (
  <div className="relative">
    <MobileHeader />
    <Header />
    <SignUp />
  </div>
);

export default index;
