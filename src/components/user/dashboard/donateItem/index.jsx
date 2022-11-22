import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import SideBar from '../common/SideBar';
import DonationCard from './DonationCard';

const DonateItem = () => {
  const [open, setOpen] = useState(true);
  const openModal = () => {
    setOpen(!open);
    localStorage.setItem('sideBarState', open);
    console.log(open);
  };

  return (
    <div className="relative">
      <SideBar minimax={openModal} />
      <div className={`${open ? 'lg:ml-[300px]' : 'ml-[100px]'} `}>
        <DashboardHeader />
        <DonationCard />
      </div>
    </div>
  );
};

export default DonateItem;
