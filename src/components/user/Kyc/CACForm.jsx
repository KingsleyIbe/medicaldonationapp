import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faLock, faHospital,
} from '@fortawesome/free-solid-svg-icons';
import VerifiedMessage from './VerifiedMessage';
import UnVerifiedMessage from './UnVerifiedMessage';

const CACForm = () => {
  const { user, isAuthenticated } = useAuth0();
  const [formData, setFormData] = useState({
    company_name: '',
    rc_number: '',
  });
  const [data, setData] = useState([]);
  const [verified, setVerified] = useState(false);

  const onChange = (e) => {
    setFormData((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  };

  const url = process.env.REACT_APP_API_URL_CAC;
  const apiKey = 'test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY';

  const headers = {
    'x-api-key': apiKey,
    'Content-Type': 'application/json',
  };

  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    Axios.post(url, formData, { headers }).then((res) => setData(res.data));
  };
  const { isLoading, isError } = useQuery(['user'], fetchData);

  const handleVerification = () => {
    fetchData();
    console.log(formData);
    if (data.status === true) {
      setVerified(!verified);
    }
    if (isError) {
      setError(!error);
    }

    if (isLoading) {
      setLoading(!loading);
    }
  };

  return (
    <>
      {' '}
      <div className={`${verified ? 'opacity-[0.2]' : 'opacity-[1]'} mt-[50px]`}>
        <header>
          {isAuthenticated && (
            <h1 className="text-[35px] font-bold text-center">
              Hello,
              {' '}
              {user?.name}
            </h1>
          )}
          <p className="text-[18px] font-semibold opacity-[0.6] text-center w-[100%] lg:max-w-[50%] m-auto">To use Life Force, you are required to perform a KYC, Fill the form below to proceed</p>
          {error && (<p className="text-center text-[#A03]">An authentication error</p>)}
          {loading && (<p className="text-center text-[#A03]">Verifying details</p>)}
        </header>
      </div>
      <div className="mt-5 w-[100%] lg:w-[50%] border border-1-solid rounded-[8px]">
        <form className="p-10">
          <label htmlFor="hospitalName" className="">
            Registered CAC Hospital Name:
            <span className="flex flex-row gap-4 items-center input-active-border register-input-bolder mb-5 p-2">
              <FontAwesomeIcon icon={faHospital} className="opacity-[0.2]" />
              <input type="text" value={formData.company_name} name="company_name" onInput={onChange} required placeholder="Hospital name as it's on CAC" className="w-[100%]" />
            </span>
          </label>
          <label htmlFor="cac">
            CAC Number
            <span className="input-active-border register-input-bolder flex flex-row gap-4 items-center mb-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" required placeholder="e.g 453477" value={formData.rc_number} name="rc_number" onInput={onChange} className="w-[100%]" />
            </span>
          </label>
          <div className="flex flex-col items-center justify-center mt-5 p-2">
            <button onClick={handleVerification} type="button" className="rounded-[8px] px-[21px] py-[12px] bg-[#4e0f0f] w-[100%] text-[#fff]">Continue</button>
          </div>
        </form>
        <div className="mt-2 opacity-[0.5] text-center mb-[10px]">
          <p>By continuing, you agree to Life force&#39;s</p>
          <Link to="/privacy-policy" className="text-[#4e0f0f] underline">Terms of Service and Privacy Police</Link>
        </div>
      </div>
      {verified ? (
        <div className="bg-[#f00] p-10">
          <VerifiedMessage />
        </div>
      ) : (
        <div>
          <UnVerifiedMessage />
        </div>
      )}
    </>
  );
};

export default CACForm;
