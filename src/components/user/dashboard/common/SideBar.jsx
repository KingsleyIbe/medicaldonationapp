/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft, faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../../assets/images/logo.png';
import Data from './SideBarData';

const SideBar = ({ minimax }) => {
  const sideBarState = localStorage.getItem('sideBarState');

  const data = Data;

  const navLinksStyles = ({ isActive }) => ({
    color: isActive ? '#A03' : 'none',
  });

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
          {sideBarState && (<img src={Logo} alt="Logo" className="max-w-[50px] m-auto mb-[100px]" />)}
          {data && data.map((item) => (
            <ul key={item?.id} className="text-[#fff] my-5">
              <li className="hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
                <NavLink to={item?.to} className="flex gap-5 items-center" style={navLinksStyles}>
                  <FontAwesomeIcon icon={item?.icon} />
                  {sideBarState && (<p>{item?.title}</p>)}
                </NavLink>
              </li>
            </ul>
          ))}
          <div className="mt-[100px] text-[#fff] flex flex-row gap-2 items-center hover:bg-[#fff] hover:text-[#17a2b8] hover:p-2 rounded-[12px]">
            <FontAwesomeIcon icon={faSignOut} />
            {sideBarState && (<button type="button">Sign Out</button>)}

          </div>
        </nav>
      </header>
    </div>
  );
};

export default SideBar;
