import React from 'react';
import DonationCard from './DonationCard';

const UserCards = () => (
  <section className="ml-[300px] w-[100%] mt-[50px]">
    <div className="flex gap-5 flex-row items-center">
      <DonationCard />
      <RequestCard />
      <ActivityCard />

    </div>
  </section>
);

export default UserCards;
