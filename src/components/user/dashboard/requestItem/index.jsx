import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import SideBar from '../common/SideBar';
import RequestCard from './RequestCard';

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
        <RequestCard />
      </div>
    </div>
  );
};

export default RequestItem;
