import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import Doctors from '../../assets/images/doctors.jpg';

const About = () => (
  <div className="px-10">
    <div className="text-center mt-[50px]">
      <h1 className="font-bold text-[35px] text-[#17a2b8]">About Us</h1>
      <p className="opacity-[0.7]">Bringing people together to save lives</p>
    </div>
    <div className="flex flex-col lg:flex-row gap-10 my-[100px]">
      <p className="">
        <span className="text-[#17a2b8] font-bold">Life Force</span>
        {' '}
        <span>
          is a platform that provides solution enabling
          easy access to blood and humans organs by connecting
          {' '}
          <span className="text-[#17a2b8] font-bold">donors</span>
          {' '}
          and
          with
          {' '}
          <span className="text-[#17a2b8] font-bold">recipients</span>
          {' '}
          with few
          {' '}
          <span className="text-[#17a2b8] font-bold">clicks.</span>
        </span>
      </p>
      <img src={Doctors} alt="Doctors" className="max-w-[50%]" />
    </div>
    <div>
      <div className="mb-10">
        <span className="flex flex-row gap-5 items-center mb-5 text-[25px]">
          <FontAwesomeIcon icon={faBolt} className="text-[#A03]" />
          <h2 className="text-[#17a2b8] font-bold">Our Vision</h2>
        </span>
        <p className="ml-10">
          Our laser target vision is to fast track the process of blood donation,
          facilitate timely access to blood and awake the spirit of donation to ensure
          more lives are saved.
        </p>
      </div>
      <div className="mb-10">
        <span className="flex flex-row gap-5 items-center mb-5 text-[25px]">
          <FontAwesomeIcon icon={faBolt} className="text-[#A03]" />
          <h2 className="text-[#17a2b8] font-bold">Our Mission</h2>
        </span>
        <p className="ml-10">
          Our core focus is building fast, flexible, and reliable digital and social marketplace
          for blood donation. We are committed to providing tools and services that empower
          hospitals, NGOs, health organization and government agencies to facilitate
          campaigns on blood drive. We achieve this by engaging a team of dynamic,
          collaborative, efficient and result-oriented experts who focus on solving
          for the customer.
        </p>
      </div>
      <div className="mb-10">
        <span className="flex flex-row gap-5 items-center mb-5 text-[25px]">
          <FontAwesomeIcon icon={faBolt} className="text-[#A03]" />
          <h2 className="text-[#17a2b8] font-bold">Our Core Values</h2>
        </span>
        <ul className="ml-10 disc">
          <li className="flex flex-row gap-5 disc">
            <p className="font-bold">Integrity: </p>
            <p className="opacity-[0.6]">In every facet of business, we are responsible, trustworthy, and thorough.</p>
          </li>
          <li className="flex flex-row gap-5">
            <p className="font-bold">Innovation: </p>
            <p className="opacity-[0.6]">We use the most cutting-edge technology available to better serve our users.</p>
          </li>
          <li className="flex flex-row gap-5">
            <p className="font-bold">Empathy: </p>
            <p className="opacity-[0.6]">We value everyone&#39;s right to an original perspective and respect differing viewpoints.</p>
          </li>
          <li className="flex flex-row gap-5">
            <p className="font-bold">Team work: </p>
            <p className="opacity-[0.6]">We work together to maximize efficiency and effectiveness for our donor community.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
