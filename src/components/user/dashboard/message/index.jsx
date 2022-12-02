import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import SideBar from '../common/SideBar';

const Message = () => {
  const [open, setOpen] = useState(true);
  const openModal = () => {
    setOpen(!open);
    localStorage.setItem('sideBarState', open);
  };

  return (
    <div className="relative">
      <SideBar minimax={openModal} />
      <div className={`${open ? 'lg:ml-[100px]' : 'ml-[265px]'} `}>
        <DashboardHeader />
      </div>
    </div>
  );
};

export default Message;
