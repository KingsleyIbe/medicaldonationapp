import React from 'react';
import Header from '../../common/Header';
// import KYC from './KYC';
// import Title from './Title';
import Form from './Form';

const UserKYC = () => (
  <div>
    <Header />
    {/* <KYC /> */}
    <div className="flex flex-col justify-center items-center px-5 lg:px-0">
      {/* <Title /> */}
      <Form />
    </div>
  </div>
);

export default UserKYC;
