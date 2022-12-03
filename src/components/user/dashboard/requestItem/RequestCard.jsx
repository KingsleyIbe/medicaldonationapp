import React, { useState } from 'react';
import RequestForm from './RequestForm';
import RequestList from './RequestList';

const RequestCard = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="border border-1-solid rounded-[12px] lg:ml-0 lg:w-[100%] ml-[50px] p-5 w-[80%] mt-[50px]">
        <div className="flex flex-row items-center justify-between">
          <button onClick={openModal} type="button" className="text-[#fff] bg-[#17a2b8] px-2 rounded-[8px] py-1">Request Item</button>
          <button type="button" className="bg-[#A03] text-[#fff] px-2 rounded-[8px] py-1 ">View All</button>
        </div>
        <div>
          <RequestList />
        </div>
      </div>
      {open && (
        <RequestForm />
      )}
    </div>
  );
};

export default RequestCard;
