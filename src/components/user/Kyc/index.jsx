import React from 'react';
import Header from '../../common/Header';
import Form from './Form';

const UserKYC = () => (
  <div>
    <Header />
    <div className="flex flex-col justify-center items-center px-5 lg:px-0">
      <Form />
    </div>
  </div>
);

export default UserKYC;
