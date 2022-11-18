import React from 'react';
import DashboardHeader from './DashboardHeader';
// import HistorySummary from './HistorySummary';
import SideBar from './SideBar';
import UserCards from './UserCards';

const UserDashBoard = () => (
  <div className="">
    <SideBar />
    <DashboardHeader />
    {/* <HistorySummary /> */}
    <UserCards />
  </div>
);

export default UserDashBoard;
