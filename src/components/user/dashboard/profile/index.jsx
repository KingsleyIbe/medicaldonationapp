import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import HistorySummary from './HistorySummaryComp';
import SideBar from '../common/SideBar';
import UserCards from '../common/UserCards';
import UserUpload from './UserUpload';

const RequestItem = () => {
  const [open, setOpen] = useState(true);
  const openModal = () => {
    setOpen(!open);
    localStorage.setItem('sideBarState', open);
  };

  return (
    <div className="relative">
      <SideBar minimax={openModal} />
      <div className={`${open ? 'lg:ml-[265px]' : 'ml-[100px]'} `}>
        <DashboardHeader />
        <HistorySummary />
        <UserCards />
        <UserUpload />
      </div>
    </div>
  );
};

export default RequestItem;