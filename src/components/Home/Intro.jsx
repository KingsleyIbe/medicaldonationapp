import React from 'react';
import { Link } from 'react-router-dom';
import PageCover from '../../assets/images/home1.png';
import patient1 from '../../assets/images/patient1.png';
import better11 from '../../assets/images/better11.png';
import organ1 from '../../assets/images/organ1.png';
import lock1 from '../../assets/images/lock1.png';

const Intro = () => (
  <div className="text-[#5c0e0e] relative">
    <div>
      <img src={PageCover} alt="Page cover" className="lg:w-[100%] lg:h-[70%] opacity-[0.5]" />
    </div>
    <div className="absolute top-0 lg:top-[100px] lg:left-[40%] sm:top-[100px] sm:left-[40%]   md:top-[100px] md:left-[40%]  left-0">
      <h1 className="lg:text-[45px] md:text-[45px] sm:text-[45px] text-[35px] font-bold lg:max-w-[60%] md:max-w-[50%] sm:max-w-[50%] max-w-[100%] text-center my-5">Someone needs Blood every two seconds</h1>
      <p className="lg:max-w-[60%] md:max-w-[50%] sm:max-w-[50%]  max-w-[100%] text-center my-5">
        Nigeria collects only 500,000 pints yearly,
        which represent only 36.7% of blood donation
        capacity. You can help make up for the 73.3% shortfall.
      </p>
      <span className="flex flex-row gap-[100px] mt-0 md:mt-[100px] sm:mt-[100px] lg:mt-[100px] justify-between lg:justify-start md:justify-center sm:justify-center px-5">
        <button type="button" className="bg-[#17a2b8] text-[#fff] px-[21px] py-[12px] rounded-[8px]"> Donate and save a life</button>
        <Link to="/about"><button type="button" className="bg-[#17a2b8] text-[#fff] px-[21px] py-[12px] rounded-[8px]"> Learn More</button></Link>
      </span>
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
