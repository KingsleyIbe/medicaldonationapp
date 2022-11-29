import React, { useState } from 'react';
import Medical from '../../../../assets/images/medical.jpg';
import HospitalSignUp from './HospitalSignUp';
import IndividualSignUp from './IndividualSignUp';

const SignUp = () => {
  const [individual, setIndividual] = useState(true);
  const [hospital, setHospital] = useState(false);
  const [benefits, setBenefits] = useState(false);

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
              <h1 className="lg:text-[25px]">Create My Account</h1>
              <p className="opacity-[0.8]">Sign up as Individual or Hospital</p>
            </div>
            <button onClick={() => setBenefits(!benefits)} type="button" className="text-[14px] text-[#A03] underline px-2 mb-10">+ see account benefits</button>
            {benefits && (
            <div className="flex flex-row gap-5 items-center bg-[#ccc] max-w-[100%] p-5 mb-1 text-[14px]">
              <p className="text-[#A03] font-bol">Account Benefits: </p>
              <p>
                Create an account to easily schedule future appointments,
                manage existing appointments, see your blood type, view results of your
                mini-physical, and track donation history.
              </p>
            </div>
            )}
            <div className="flex flex-row items-center gap-10 p-5 border">
              <button type="button" onClick={handIndividual} className={`${individual && 'text-[#A03]'}`}>Individual</button>
              <button type="button" onClick={handHospital} className={`${hospital && 'text-[#A03]'}`}>Hospital</button>
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
