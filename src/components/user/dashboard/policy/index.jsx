import React from 'react';
import Header from '../../../common/Header';
import MobileHeader from '../../../common/MobileHeader';
import PolicyDocs from './PolicyDocs';

const Policy = () => (
  <div className="relative">
    <Header />
    <MobileHeader />
    <div className="mt-[100px]">
      <PolicyDocs />
    </div>
  </div>
);

export default Policy;
