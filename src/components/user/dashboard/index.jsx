import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
// import HistorySummary from './HistorySummary';
import SideBar from './SideBar';
import UserCards from './UserCards';

const UserDashBoard = () => {
  const [open, setOpen] = useState(true);
  const openModal = () => {
    setOpen(!open);
    localStorage.setItem('sideBarState', open);
    console.log(open);
  };

  return (
    <div className="">
      <SideBar minimax={openModal} />
      <div className={`${open ? 'lg:ml-[300px]' : 'ml-[100px]'} `}>
        <DashboardHeader />
        {/* <HistorySummary /> */}
        <UserCards />
      </div>
    </div>
  );
};

export default UserDashBoard;
