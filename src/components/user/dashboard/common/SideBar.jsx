/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft, faDashboard, faMessage, faWarning, faBook, faEnvelope, faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../../assets/images/logo.png';
import LogoutButton from '../../LogoutButton';

const SideBar = ({ minimax }) => {
  const sideBarState = localStorage.getItem('sideBarState');

  return (
    <div className="sidebar relative">
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
            {sideBarState && (<li><img src={Logo} alt="Logo" className="max-w-[50px] m-auto mb-[50px]" /></li>)}
            <li className="hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <NavLink to="/dashboard" className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faDashboard} />
                {sideBarState && (<p>Dashboard</p>)}
              </NavLink>
            </li>
            <li className="mt-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <NavLink to="/dashboard/donate-item" className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                {sideBarState && (<p>Donate Item</p>)}
              </NavLink>
            </li>
            <li className="mt-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <NavLink to="/dashboard/request-item" className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                {sideBarState && (<p>Request Item</p>)}
              </NavLink>
            </li>
            <li className="mt-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <NavLink to="/dashboard/message" className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                {sideBarState && (<p>Message</p>)}
              </NavLink>
            </li>
            <li className="mt-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <NavLink to="/dashboard/recent-activities" className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faMessage} />
                {' '}
                {sideBarState && (<p>Recent Activities</p>)}
              </NavLink>
            </li>
            <li className="my-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <NavLink to="/dashboard/help" className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faWarning} />
                {' '}
                {sideBarState && (<p>Help</p>)}
              </NavLink>
            </li>
            <li className="my-5 hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <NavLink to="/dashboard/policy" className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faBook} />
                {' '}
                {sideBarState && (<p>Read Policy</p>)}
              </NavLink>
            </li>
            <li className="hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
              <NavLink to="/dashboard/feedback" className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                {' '}
                {sideBarState && (<p>Provide Feedback</p>)}
              </NavLink>
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
