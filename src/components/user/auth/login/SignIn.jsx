import React, { useState } from 'react';
import Medical from '../../../../assets/images/medical1.jpg';
import HospitalSignIn from './HospitalSignIn';
import IndividualSignIn from './IndividualSignIn';

const SignIn = () => {
  const [individual, setIndividual] = useState(true);
  const [hospital, setHospital] = useState(false);

  const handIndividual = () => {
    setHospital(false);
    setIndividual(true);
  };

  const handHospital = () => {
    setHospital(true);
    setIndividual(false);
  };

  return (
    <div className="lg:h-[100vh]">
      <div className="flex lg:flex-row gap-0">
        <div className="">
          <img src={Medical} alt="Medical" className="" />
        </div>
        <div className="">
          <div className="">
            <div className="text-center w-[100%] p-5 bg-[#17a2b8] text-[#fff] px-10">
              <h1 className="lg:text-[25px]">Sign Me In</h1>
              <p className="opacity-[0.8]">Sign in as Individual or Hospital</p>
            </div>
            <div className="flex flex-row items-center gap-10 p-5 border mt-1">
              <button type="button" onClick={handIndividual} className={`${individual && 'text-[#A03]'}`}>Individual</button>
              <button type="button" onClick={handHospital} className={`${hospital && 'text-[#A03]'}`}>Hospital</button>
            </div>
            {individual && <IndividualSignIn />}
            {hospital && <HospitalSignIn />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
