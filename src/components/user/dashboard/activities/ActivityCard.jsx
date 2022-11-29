import React from 'react';
import ActivityList from './ActivityList';

const ActivityCard = () => (
  <div className="absolute top-[100px] left-[250px] w-[82%] px-10">
    <div className="border border-1-solid rounded-[12px] p-5">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-[#A03]">Recent Activities</h2>
        <p>Date</p>
      </div>
      <div>
        <ActivityList />
      </div>
    </div>
  </div>
);

export default ActivityCard;
