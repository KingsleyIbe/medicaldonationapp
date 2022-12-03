import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import SideBar from '../common/SideBar';
import MobileHeader from '../../../common/MobileHeader';

const Help = () => {
  const [open, setOpen] = useState(true);
  const openModal = () => {
    setOpen(!open);
    localStorage.setItem('sideBarState', open);
  };

  return (
    <div className="relative">
      <MobileHeader />
      <div className="mt-[80px] lg:mt-0">
        <SideBar minimax={openModal} />
        <div className={`${open ? 'lg:ml-[100px]' : 'ml-[265px]'} `}>
          <DashboardHeader />
        </div>
      </div>
    </div>
  );
};

export default Help;
