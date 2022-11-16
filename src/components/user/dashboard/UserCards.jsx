import React from 'react';

const UserCards = () => (
  <section className="ml-[300px] w-[100%] mt-[50px]">
    <div className="flex gap-5 flex-row items-center">
      <div className="border border-1-solid rounded-[12px] p-5 w-[300px]">
        <div className="flex flex-row items-center justify-between">
          <button type="button" className="text-[#fff] bg-[#17a2b8] px-2 rounded-[8px] py-1">Donate Today</button>
          <button type="button" className="bg-[#A03] text-[#fff] px-2 rounded-[8px] py-1 ">View All</button>
        </div>
      </div>
      <div className="border border-1-solid rounded-[12px] p-5 w-[300px]">
        <div className="flex flex-row items-center justify-between">
          <button type="button" className="text-[#fff] bg-[#17a2b8] px-2 rounded-[8px] py-1">Request Item</button>
          <button type="button" className="bg-[#A03] text-[#fff] px-2 rounded-[8px] py-1 ">View All</button>
        </div>
      </div>
      <div className="border border-1-solid rounded-[12px] p-5 w-[300px]">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-[#A03]">Recent Activities</h2>
          <p>Date</p>
        </div>
      </div>
    </div>
  </section>
);

export default UserCards;
