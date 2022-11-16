import { faBell, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from '../../../assets/images/logo.png';

const DashboardHeader = () => (
  <div className="ml-[300px]">
    <header className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-5 border border-1-solid rounded-[12px] p-2">
        <FontAwesomeIcon icon={faSearch} className="opacity-[0.3]" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="flex flex-row gap-10 items-center mr-10">
        <div className="flex flex-row gap-10 items-center">
          <FontAwesomeIcon icon={faBell} className="text-[#A03] text-[20px]" />
          <FontAwesomeIcon icon={faMessage} className="text-[#A03] text-[20px]" />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img src={Logo} alt="Profile" className="max-w-[20px]" />
          <h3>Heello!, Kingsley</h3>
        </div>
      </div>
    </header>
  </div>
);

export default DashboardHeader;
