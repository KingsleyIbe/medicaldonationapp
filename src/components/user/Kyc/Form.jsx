import React from 'react';
import CACForm from './CACForm';
import NINForm from './NINForm';

const Form = () => {
  const category = localStorage.getItem('loginDetails');
  JSON.parse(category);

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
