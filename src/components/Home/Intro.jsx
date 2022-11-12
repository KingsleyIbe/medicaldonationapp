import React from 'react';
import PageCover from '../../assets/images/home1.png';
import patient1 from '../../assets/images/patient1.png';
import better11 from '../../assets/images/better11.png';
import organ1 from '../../assets/images/organ1.png';
import lock1 from '../../assets/images/lock1.png';

const Intro = () => (
  <div>
    <div>
      <img src={PageCover} alt="Page cover" className="w-[100%] h-[70%]" />
    </div>
    <div className="flex flex-row gap-10 mt-[100px] px-10">
      <div className="flex flex-col max-h-[20%]">
        <h1 className="mb-10 text-[56px] w-[500px] font-bold">Donate and Find Donors Today</h1>
        <img src={patient1} alt="" />
      </div>
      <div>
        <div className="flex gap-2 mb-5">
          <img src={lock1} alt="" />
          <p className="w-[361px]">With Medical Donation, your safety and privacy and guaranteed</p>
        </div>
        <div className="flex gap-2 mb-5">
          <img src={better11} alt="" />
          <p className="w-[361px]">Medical donations has got even better</p>
        </div>
        <div className="flex gap-2 mb-5">
          <img src={organ1} alt="" />
          <p className="w-[361px]">Find donations ranging from blood to all human organs </p>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
