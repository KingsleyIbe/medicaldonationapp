import React from 'react';
import CACForm from './CACForm';
import NINForm from './NINForm';

const Form = () => {
  const loginDetails = localStorage.getItem('loginDetails');
  const category = JSON.parse(loginDetails);

  return (
    <div className="flex flex-col justify-center items-center px-5 lg:px-0 mb-10">
      {
      category?.category !== 'individual' ? (
        <CACForm />
      ) : (
        <NINForm />
      )
}
    </div>
  );
};

export default Form;
