/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft, faDashboard, faMessage, faWarning, faBook, faEnvelope, faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/images/logo.png';
import LogoutButton from '../LogoutButton';

const SideBar = ({ minimax }) => {
  // const [open, setOpen] = useState(false);
  const sideBarState = localStorage.getItem('sideBarState');
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
          className={`${sideBarState ? 'w-60' : 'w-0'} 
        h-screen p-5 pt-8 bg-[#17a2b8] duration-300 z-1 relative`}
        >
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className={`bg-[#A03] text-[#fff] rounded-full -right-3 border-dark-purple 
            absolute cursor-pointer top-9 w- border-2 ${
              sideBarState && 'rotate-[180]'
            }`}
            onClick={() => minimax()}
          />
          <ul className="text-[#fff]">
            {sideBarState && (<li><img src={Logo} alt="Logo" className="max-w-[50px] m-auto mb-[100px]" /></li>)}
            <li className="hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openDonate} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faDashboard} />
                {sideBarState && (<p>Dashboard</p>)}
              </button>
            </li>
            <li className="mt-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openBloodRequest} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                {sideBarState && (<p>Message</p>)}
              </button>
            </li>
            <li className="my-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openDonationHistory} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faWarning} />
                {' '}
                {sideBarState && (<p>Help</p>)}
              </button>
            </li>
            <li className="my-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openDonationHistory} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faBook} />
                {' '}
                {sideBarState && (<p>Read Policy</p>)}
              </button>
            </li>
            <li className="hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openRequestHistory} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                {' '}
                {sideBarState && (<p>Provide Feedback</p>)}
              </button>
            </li>
            <li className="mt-[100px] flex flex-row gap-2 items-center hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <FontAwesomeIcon icon={faSignOut} />
              {sideBarState && (<LogoutButton />)}

            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SideBar;
