import React from 'react';
import PageCover from '../../assets/images/home1.png';
import patient1 from '../../assets/images/patient1.png';
import better11 from '../../assets/images/better11.png';
import organ1 from '../../assets/images/organ1.png';
import lock1 from '../../assets/images/lock1.png';

const Intro = () => (
  <div className="text-[#5c0e0e]">
    <div>
      <img src={PageCover} alt="Page cover" className="lg:w-[100%] lg:h-[70%]" />
    </div>
    <div className="flex lg:flex-row flex-col gap-10 lg:mt-[100px] mt-[30px] px-10">
      <div className="flex flex-col max-h-[20%]">
        <h1 className="mb-10 text-[56px] lg:w-[500px] text-center lg:text-left font-bold">Donate and Find Donors Today</h1>
        <img src={patient1} alt="" />
      </div>
      <div>
        <div className="flex lg:flex-row flex-col gap-2 mb-5">
          <img src={lock1} alt="" />
          <p className="w-[361px]">With Medical Donation, your safety and privacy and guaranteed</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-2 mb-5">
          <img src={better11} alt="" />
          <p className="w-[361px]">Medical donations has got even better</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-2 mb-5">
          <img src={organ1} alt="" />
          <p className="w-[361px]">Find donations ranging from blood to all human organs </p>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
