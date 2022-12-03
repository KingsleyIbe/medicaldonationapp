import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import SideBar from '../common/SideBar';
import MobileHeader from '../../../common/MobileHeader';
import Header from '../../../common/Header';

const Help = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
    localStorage.setItem('sideBarState', open);
  };

  return (
    <div className="relative">
      <Header />
      <MobileHeader />
      <div className="mt-[80px]">
        <SideBar minimax={openModal} />
        <div className={`${open ? 'lg:ml-[100px]' : 'ml-[265px]'} `}>
          <DashboardHeader />
        </div>
      </div>
    </div>
  );
};

export default Help;
