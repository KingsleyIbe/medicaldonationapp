import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import HistorySummary from './HistorySummaryComp';
import SideBar from '../common/SideBar';
import UserUpload from './UserUpload';
import UserDetails from './UserDetails';
import MobileHeader from '../../../common/MobileHeader';
import Header from '../../../common/Header';

const RequestItem = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
    JSON.stringify(localStorage.setItem('sideBarState', open));
  };

  return (
    <div>
      <div className="relative">
        <Header />
        <MobileHeader />
      </div>
      <div className="mt-[80px] relative">
        <SideBar minimax={openModal} />
        <div className={`${open ? 'lg:ml-[100px]' : 'ml-[256px]'} `}>
          <DashboardHeader />
          <HistorySummary />
          <div className="flex lg:flex-row flex-col gap-10 mt-10">
            <UserUpload />
            <UserDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
