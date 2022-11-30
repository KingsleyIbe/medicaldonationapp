/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unreachable */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const UnVerifiedMessage = () => {
  const [open, setOpen] = useState(true);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
      <div className="bg-[#fff] rounded-[12px] lg:w-[50%] lg:left-[25%] border border-2-solid justify-center items-center left-0 absolute lg:top-[50%] top-[25%] lg:right-[250px] z-50">
        <div className="flex flex-row justify-between items-center p-5">
          <button type="button" onClick={openModal}><FontAwesomeIcon icon={faTimes} /></button>
        </div>
        <div className="p-5 text-center">
          <h1 className="font-bold text-[30px]">Sorry!</h1>
          <p>We couldn&#39;t verify your credentials at the moment</p>
        </div>
        <div className="mt-2 opacity-[0.8] mb-10 flex flex-col justify-center items-center">
          <Link to="/kyc" className="underline">Try Again</Link>
        </div>
      </div>
      )}
    </>
  );
};

export default UnVerifiedMessage;
