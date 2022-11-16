import { useAuth0 } from '@auth0/auth0-react';
import { faBell, faMessage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DashboardHeader = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="ml-[300px] pt-4">
      <header className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-5 border border-1-solid rounded-[12px] p-2">
          <FontAwesomeIcon icon={faSearch} className="opacity-[0.3]" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="flex flex-row gap-10 items-center mr-10">
          <div className="flex flex-row gap-10 items-center">
            <FontAwesomeIcon icon={faBell} className="text-[#A03] text-[20px]" />
            <FontAwesomeIcon icon={faMessage} className="text-[#17a2b8] text-[20px]" />
          </div>
          {isAuthenticated && (
          <div className="flex flex-row gap-2 items-center">
            {user?.picture && <img src={user?.picture} alt={user?.name} className="max-w-[30px] rounded-[100%]" />}
            <h3>{user?.name}</h3>
          </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
