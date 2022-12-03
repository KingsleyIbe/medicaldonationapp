import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Data from './HistorySummary';

const HistorySummaryComp = () => {
  const data = Data;
  return (
    <section className="mt-[50px] w-[98%]">
      <div className="flex flex-col gap-2 lg:flex-row lg:w-[70%] w-[100%] items-center justify-between">
        {data && data.map((item) => (
          <ul key={item?.id} className="border border-1-solid p-5 rounded-[12px]">
            <li className="flex flex-row items-center justify-between text-[#17a2b8]">
              <p className="font-bold">{item?.totalNumber}</p>
              <FontAwesomeIcon icon={item?.icon} className="text-[30px]" />
            </li>
            <li className="text-[#A03] mt-2"><p>{item?.title}</p></li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default HistorySummaryComp;
