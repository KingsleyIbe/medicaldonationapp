/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unreachable */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const VerifiedMessage = () => {
  const [open, setOpen] = useState(true);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
      <div className="bg-[#fff] rounded-[12px] lg:w-[50%] lg:left-[20%] border border-2-solid justify-center items-center left-0 absolute top-[25%] lg:right-[250px] z-50">
        <div className="flex flex-row justify-between items-center p-5">
          <button type="button" onClick={openModal}><FontAwesomeIcon icon={faTimes} /></button>
        </div>
        <div className="p-5 text-center">
          <h1 className="font-bold text-[30px]">Congratulations!</h1>
          <p>Your Virtual NIN has been verified successfully</p>
        </div>
        <div className="mt-2 opacity-[0.8] mb-10 flex flex-col justify-center items-center">
          <Link to="/dashboard/summary" className="underline">Proceed to your dashboard</Link>
        </div>
      </div>
      )}
    </>
  );
};

export default VerifiedMessage;
