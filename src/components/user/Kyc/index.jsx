import React from 'react';
import KycHeader from './KYCHeader';
import Form from './Form';

const UserKYC = () => (
  <div>
    <KycHeader />
    <div className="flex flex-col justify-center items-center px-5 lg:px-0">
      <Form />
    </div>
  </div>
);

export default UserKYC;
