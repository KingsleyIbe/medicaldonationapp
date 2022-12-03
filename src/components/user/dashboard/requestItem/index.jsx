import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import SideBar from '../common/SideBar';
import RequestCard from './RequestCard';
import MobileHeader from '../../../common/MobileHeader';

const RequestItem = () => {
  const [open, setOpen] = useState(true);
  const openModal = () => {
    setOpen(!open);
    localStorage.setItem('sideBarState', open);
  };

  return (
    <div className="relative">
      <MobileHeader />
      <div className="lg:mt-0 mt-[80px]">
        <SideBar minimax={openModal} />
        <div className={`${open ? 'lg:ml-[100px]' : 'ml-[265px]'} `}>
          <DashboardHeader />
          <RequestCard />
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
