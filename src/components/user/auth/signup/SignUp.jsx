import React, { useState } from 'react';
import Medical from '../../../../assets/images/medical.jpg';
import HospitalSignUp from './HospitalSignUp';
import IndividualSignUp from './IndividualSignUp';

const SignUp = () => {
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
            <h1 className="text-center w-[100%] p-5 bg-[#17a2b8] text-[#fff] px-10">Create My Account</h1>
            <button type="button" className="text-[14px] text-[#A03] underline px-2 mb-10">+ see account benefits</button>
            <div className="flex flex-row items-center gap-10 px-10">
              <button type="button" onClick={handIndividual}>Individual</button>
              <button type="button" onClick={handHospital}>Hospital</button>
            </div>
            {individual && <IndividualSignUp />}
            {hospital && <HospitalSignUp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
