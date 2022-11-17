import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft, faDashboard, faMessage, faWarning, faBook, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/images/logo.png';
import LogoutButton from '../LogoutButton';

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [isDonate, setIsDonate] = useState(true);
  const [isBloodRequest, setIsBloodRequest] = useState(false);
  const [isDonationHistory, setIsDonationHistory] = useState(false);
  const [isRequestHistory, setIsRequestHistory] = useState(false);

  const openDonate = () => {
    setIsDonate(!isDonate);
    setIsBloodRequest(false);
    setIsDonationHistory(false);
    setIsRequestHistory(false);
  };

  const openBloodRequest = () => {
    setIsBloodRequest(!isBloodRequest);
    setIsDonate(false);
    setIsDonationHistory(false);
    setIsRequestHistory(false);
  };

  const openDonationHistory = () => {
    setIsDonationHistory(!isDonationHistory);
    setIsDonate(false);
    setIsBloodRequest(false);
    setIsRequestHistory(false);
  };

  const openRequestHistory = () => {
    setIsRequestHistory(!isRequestHistory);
    setIsDonate(false);
    setIsBloodRequest(false);
    setIsDonationHistory(false);
  };

  return (
    <div className="sidebar">
      <header className="flex fixed z-10">
        <nav
          className={`${open ? 'w-60' : 'w-0'} 
        h-screen p-5 pt-8 bg-[#17a2b8] duration-300 z-1 relative`}
        >
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className={`bg-[#A03] text-[#fff] rounded-full -right-3 border-dark-purple 
            absolute cursor-pointer top-9 w-7 border-2 ${
              !open && 'rotate-[180]'
            }`}
            onClick={() => setOpen(!open)}
          />
          <ul className="text-[#fff]">
            <li><img src={Logo} alt="Logo" className="max-w-[50px] m-auto mb-[100px]" /></li>
            <li>
              <button type="button" onClick={openDonate} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faDashboard} />
                <p>Dashboard</p>
              </button>
            </li>
            <li className="mt-5">
              <button type="button" onClick={openBloodRequest} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                <p>Message</p>
              </button>
            </li>
            <li className="my-5">
              <button type="button" onClick={openDonationHistory} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faWarning} />
                {' '}
                <p>Help</p>
              </button>
            </li>
            <li className="my-5">
              <button type="button" onClick={openDonationHistory} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faBook} />
                {' '}
                <p>Read Policy</p>
              </button>
            </li>
            <li>
              <button type="button" onClick={openRequestHistory} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                {' '}
                <p>Provide Feedback</p>
              </button>
            </li>
            <li><LogoutButton /></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SideBar;
