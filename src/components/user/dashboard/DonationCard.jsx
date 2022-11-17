import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DonationForm from './DonationForm';

const DonationCard = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  function getInitialDonations() {
    // getting stored items
    const temp = localStorage.getItem('donations');
    const Donations = JSON.parse(temp);
    return Donations || [];
  }

  const [donations, setDonations] = useState(getInitialDonations());

  useEffect(() => {
    // storing new donation forms
    const temp = JSON.stringify(donations);
    localStorage.setItem('donations', temp);
  }, [donations]);

  const addNewForm = (first) => {
    const newDonation = {
      id: uuidv4(),
      firstName: first,
    };
    setDonations([...donations, newDonation]);
  };

  return (
    <div>
      <div className="border border-1-solid rounded-[12px] p-5 w-[300px]">
        <div className="flex flex-row items-center justify-between">
          <button onClick={openModal} type="button" className="text-[#fff] bg-[#17a2b8] px-2 rounded-[8px] py-1">Donate Today</button>
          <button type="button" className="bg-[#A03] text-[#fff] px-2 rounded-[8px] py-1 ">View All</button>
        </div>
      </div>
      {open && (
        <DonationForm addDonationProps={addNewForm} />
      )}
    </div>
  );
};

export default DonationCard;
