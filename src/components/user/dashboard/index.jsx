import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import HistorySummary from './historySummary/HistorySummaryComp';
import SideBar from './common/SideBar';
import UserCards from './common/UserCards';

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
      </div>
    </div>
  );
};

export default RequestItem;
