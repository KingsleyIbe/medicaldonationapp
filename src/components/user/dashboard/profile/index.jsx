import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import HistorySummary from './HistorySummaryComp';
import SideBar from '../common/SideBar';
import UserUpload from './UserUpload';
import UserDetails from './UserDetails';
import MobileHeader from '../../../common/MobileHeader';

const RequestItem = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
    JSON.stringify(localStorage.setItem('sideBarState', open));
  };

  console.log(open);
  return (
    <div className="relative">
      <MobileHeader />
      <SideBar minimax={openModal} />
      <div className={`${open ? 'lg:ml-[100px]' : 'ml-[256px]'} `}>
        <DashboardHeader />
        <HistorySummary />
        <div className="flex flex-row gap-10 mt-10">
          <UserUpload />
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
