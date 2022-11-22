// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Data from './HistorySummary';

const HistorySummary = () => {
  const data = Data;
  return (
    <section className="lg:ml-[300px]">
      <div className="flex flex-row gap-5 items-center p-5 rounded-[8px]">
        {data && data.map((item) => (
          <ul key={item.id}>
            <li className="flex flex-row items-center justify-between">
              <p>{item.totalNumber}</p>
              <p>{item.icon}</p>
            </li>
            <li><p>{item.title}</p></li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default HistorySummary;
