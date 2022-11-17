import React from 'react';

const ActivityList = () => (
  <div className="overflow-x-auto mt-10 w-[100%]">
    <ul className="activity-list flex flex-col gap-5 set-overflow">
      <li className="list-1 flex flex-row gap-2 items-center">
        <p>30 min</p>
        <p className="shape-1 shape-1-a" />
        <p>Chat with a user</p>
      </li>
      <li className="list-1 flex flex-row gap-2">
        <p>38 min</p>
        <p className="shape-1 shape-1-b" />
        <p>Received an item</p>
      </li>
      <li className="list-1 flex flex-row gap-2">
        <p>50 min</p>
        <p className="shape-1 shape-1-c" />
        <p>Donated an item</p>
      </li>
      <li className="list-1 flex flex-row gap-2">
        <p>1 hour</p>
        <p className="shape-1 shape-1-d" />
        <p>Donated an item</p>
      </li>
      <li className="list-1 flex flex-row gap-2">
        <p>4 hours</p>
        <p className="shape-1 shape-1-e" />
        <p>Donated an item</p>
      </li>
      <li className="list-1 flex flex-row gap-2">
        <p>4 hours</p>
        <p className="shape-1 shape-1-e" />
        <p>Donated an item</p>
      </li>
      <li className="list-1 flex flex-row gap-2">
        <p>6 hours</p>
        <p className="shape-1 shape-1-f" />
        <p>Donated an item</p>
      </li>
      <li className="list-1 flex flex-row gap-2">
        <p>2 weeks</p>
        <p className="shape-1 shape-1-g " />
        <p>Donated an item</p>
      </li>
      <li className="list-1 flex flex-row gap-2">
        <p>3 months</p>
        <p className="shape-1 shape-1-h" />
        <p>Request an item</p>
      </li>
    </ul>
  </div>
);

export default ActivityList;
