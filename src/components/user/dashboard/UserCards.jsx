import React from 'react';
// import Footer from '../../common/Footer';
import ActivityCard from './ActivityCard';
import DonationCard from './DonationCard';
import RequestCard from './RequestCard';

const UserCards = () => (
  <section className="ml-0 flex flex-col items-center justify-center lg:ml-[300px] w-[100%] mt-[50px]">
    <div className="flex gap-5 flex-col lg:flex-row">
      <DonationCard />
      <RequestCard />
      <ActivityCard />
    </div>
  </section>
);

export default UserCards;
