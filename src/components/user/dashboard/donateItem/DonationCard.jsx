import React, { useState } from 'react';
import DonationForm from './DonationForm';
import DonationList from './DonationList';

const DonationCard = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="border border-1-solid rounded-[12px] p-5 w-[300px]">
        <div className="flex flex-row items-center justify-between">
          <button onClick={openModal} type="button" className="text-[#fff] bg-[#17a2b8] px-2 rounded-[8px] py-1">Donate Today</button>
          <button type="button" className="bg-[#A03] text-[#fff] px-2 rounded-[8px] py-1 ">View All</button>
        </div>
        <div>
          <DonationList />
        </div>
      </div>
      {open && (
        <DonationForm />
      )}
    </div>
  );
};

export default DonationCard;
