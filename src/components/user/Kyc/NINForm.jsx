import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faLock, faUserTie, faUser,
} from '@fortawesome/free-solid-svg-icons';
import VerifiedMessage from './VerifiedMessage';
import UnVerifiedMessage from './UnVerifiedMessage';

const NINForm = () => {
  const { user, isAuthenticated } = useAuth0();
  const [nin, setNumber] = useState('');
  const [data, setData] = useState([]);
  const [verified, setVerified] = useState(false);

  const num = {
    number: nin,
  };
  // 'AA1234567890123B'

  const url = process.env.REACT_APP_API_URL_NIN;
  const apiKey = 'test_ucc8c5fyl6rl78idn3lqjp:ogINip3R6hrzzARkTI42vv13ybY';
  const appId = 'e9265dad-9424-420c-8290-e0b19a7944d7';

  const headers = {
    'app-id': appId,
    'x-api-key': apiKey,
    'Content-Type': 'application/json',
  };

  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    Axios.post(url, num, { headers }).then((res) => setData(res.data));
  };
  const { isLoading, isError } = useQuery(['user'], fetchData);

  const handleVerification = () => {
    fetchData();
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
          <label htmlFor="firstName" className="input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
            <input type="text" required placeholder="First Name" className="w-[100%]" />
          </label>
          <label htmlFor="lastName" className="input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
            <input type="text" required placeholder="Last Name" className="w-[100%]" />
          </label>
          <label htmlFor="nin" className="input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
            <input type="text" required placeholder="Enter Virtual NIN" value={nin} onInput={(e) => setNumber(e.target.value)} className="w-[100%]" />
          </label>
          <div className="flex flex-col items-center justify-center my-5 p-2">
            <button onClick={handleVerification} type="button" className="rounded-[8px] px-[21px] py-[12px] bg-[#4e0f0f] w-[100%] text-[#fff]">Continue</button>
          </div>
        </form>
        <div className="flex flex-row items-center gap-2 justify-between p-10">
          <p>Don&#39;t have a virtual NIN?</p>
          <a href="https://developer.myidentitypass.com/products/data-verification/nigeria/nin-verification/lookup-nin" target="__blank" className="text-[#4e0f0f] underline">See Guide</a>
        </div>
        <div className="mt-2 opacity-[0.5] text-center mb-[50px]">
          <p>By continuing, you agree to Life force&#39;s</p>
          <Link to="/policy" className="text-[#4e0f0f] underline">Terms of Service and Privacy Policy</Link>
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

export default NINForm;
