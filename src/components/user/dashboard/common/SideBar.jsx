/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft, faDashboard, faMessage, faWarning, faBook, faEnvelope, faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../../assets/images/logo.png';
import LogoutButton from '../../LogoutButton';
// import DashboardHeader from './DashboardHeader';
import ActivityCard from '../activities/ActivityCard';
import DonationCard from '../donateItem/DonationCard';
import RequestCard from '../requestItem/RequestCard';

const SideBar = ({ minimax }) => {
  // const [open, setOpen] = useState(false);
  const sideBarState = localStorage.getItem('sideBarState');
  const [donate, setDonate] = useState(false);
  const [request, setRequest] = useState(false);
  const [message, setMessage] = useState(false);
  const [help, setHelp] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [recentActivity, setIsRecentActivity] = useState(false);

  const openDonateItem = () => {
    setDonate(true);
    setRequest(false);
    // setIsDonationHistory(false);
    // setIsRequestHistory(false);
    setIsRecentActivity(false);
  };

  const openRequestItem = () => {
    setRequest(true);
    setDonate(false);
    // setIsDonationHistory(false);
    // setIsRequestHistory(false);
  };

  const openMessage = () => {
    setRequest(false);
    setDonate(false);
    // setIsDonationHistory(false);
    // setIsRequestHistory(false);
  };

  // const openRecentActivity = () => {
  //   setIsRecentActivity(true);
  //   setRequest(false);
  //   // setIsDonationHistory(false);
  //   // setIsRequestHistory(false);
  //   setDonate(false);
  // };

  const openHelp = () => {
    setHelp(true);
    setDonate(false);
    setRequest(false);
    setMessage(false);
  };

  const openPolicy = () => {
    setPolicy(true);
    setDonate(false);
    setRequest(false);
    setMessage(false);
  };

  return (
    <div className="sidebar relative">
      <header className="flex fixed z-10">
        {/* <DashboardHeader /> */}
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
            {sideBarState && (<li><img src={Logo} alt="Logo" className="max-w-[50px] m-auto mb-[50px]" /></li>)}
            <li className="hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openDonateItem} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faDashboard} />
                {sideBarState && (<p>Dashboard</p>)}
              </button>
            </li>
            <li className="mt-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openDonateItem} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                {sideBarState && (<p>Donate Item</p>)}
              </button>
            </li>
            <li className="mt-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openRequestItem} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                {sideBarState && (<p>Request Item</p>)}
              </button>
            </li>
            <li className="mt-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openMessage} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                {sideBarState && (<p>Message</p>)}
              </button>
            </li>
            <li className="mt-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <NavLink to="/dashboard/recent-activities" className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                {sideBarState && (<p>Recent Activities</p>)}
              </NavLink>
            </li>
            <li className="my-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" className="flex gap-5 items-center" onClick={openHelp}>
                <FontAwesomeIcon icon={faWarning} />
                {' '}
                {sideBarState && (<p>Help</p>)}
              </button>
            </li>
            <li className="my-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" onClick={openPolicy} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faBook} />
                {' '}
                {sideBarState && (<p>Read Policy</p>)}
              </button>
            </li>
            <li className="hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <button type="button" className="flex gap-5 items-center">
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
      <section>
        {recentActivity && (<ActivityCard />)}
        {donate && (<div className="absolute top-[100px] left-[300px] w-[82%]"><DonationCard /></div>)}
        {request && (<div className="absolute top-[100px] left-[300px] w-[82%]"><RequestCard /></div>)}
        {message && (<div className="absolute top-[100px] left-[300px] w-[82%]"><RequestCard /></div>)}
        {help && (<div className="absolute top-[100px] left-[300px] w-[82%]"><RequestCard /></div>)}
        {policy && (<div className="absolute top-[100px] left-[300px] w-[82%]"><RequestCard /></div>)}
      </section>
    </div>
  );
};

export default SideBar;
