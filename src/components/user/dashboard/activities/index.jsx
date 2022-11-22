import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
// import HistorySummary from './HistorySummary';
import SideBar from '../common/SideBar';
// import UserCards from '../common/UserCards';
import ActivityCard from './ActivityCard';

const RecentActivities = () => {
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
        {/* <UserCards /> */}
        <ActivityCard />
      </div>
    </div>
  );
};

export default RecentActivities;
