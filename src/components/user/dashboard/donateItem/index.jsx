import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import SideBar from '../common/SideBar';
import DonationCard from './DonationCard';
import MobileHeader from '../../../common/MobileHeader';

const DonateItem = () => {
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
          <DonationCard />
        </div>
      </div>
    </div>
  );
};

export default DonateItem;
