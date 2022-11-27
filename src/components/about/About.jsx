/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt, faLinkedin,
  faTwitter, faGithub, faInstagram, faFacebook,
} from '@fortawesome/free-solid-svg-icons';
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
      <div className="flex flex-row gap-10 mb-10">
        <div className="bg-[#fff] border border-1-solid rounded-[8px] p-10 text-center">
          <img src={Doctors} alt="Kingsley profile logo" className="max-w-[100px] h-[100px] rounded-[100%] m-auto" />
          <h3 className="text-center text-[#A03] font-bold text-[25px] my-2">Kingsley Ibe</h3>
          <p className="text-center opacity-[0.6] mb-2">Frontend Developer/Project Lead</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quo deserunt voluptates eos odio repellat magnam doloremque,
            incidunt neque blanditiis facilis laboriosam dolores debitis assumenda quisquam
            tenetur officiis minus ipsam.
          </p>
          <div className="flex flex-row gap-5 items-center text-center text-[25px] text-[#17a2b8]">
            <a href="https://www.linkedin.com/in/kingsley-ibe/" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://web.facebook.com/ibekingsley.chibueze/" target="__blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/ibekingsley2" target="__blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com/ibekingsley2" target="__blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://github.com/KingsleyIbe" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
        <div className="bg-[#fff] border border-1-solid rounded-[8px] p-10 text-center">
          <img src={Doctors} alt="Kingsley profile logo" className="max-w-[100px] h-[100px] rounded-[100%] m-auto" />
          <h3 className="text-center text-[#A03] font-bold text-[25px] my-2">Michael David</h3>
          <p className="text-center opacity-[0.6] mb-2">Backend Developer</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quo deserunt voluptates eos odio repellat magnam doloremque,
            incidunt neque blanditiis facilis laboriosam dolores debitis assumenda quisquam
            tenetur officiis minus ipsam.
          </p>
          <div className="flex flex-row gap-5 items-center text-center text-[25px] text-[#17a2b8]">
            <a href="https://www.linkedin.com/in/michael-david-oyenuga" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.linkedin.com/in/michael-david-oyenuga" target="__blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/David_Gahd" target="__blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com/David_Gahd" target="__blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://github.com/Gahdloot" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
        <div className="bg-[#fff] border border-1-solid rounded-[8px] p-10 text-center">
          <img src={Doctors} alt="Kingsley profile logo" className="max-w-[100px] h-[100px] rounded-[100%] m-auto" />
          <h3 className="text-center text-[#A03] font-bold text-[25px] my-2">Josephine Bonka</h3>
          <p className="text-center opacity-[0.6] mb-2">UI/UX Designer</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quo deserunt voluptates eos odio repellat magnam doloremque,
            incidunt neque blanditiis facilis laboriosam dolores debitis assumenda quisquam
            tenetur officiis minus ipsam.
          </p>
          <div className="flex flex-row gap-5 items-center text-center text-[25px] text-[#17a2b8]">
            <a href="https://www.linkedin.com/in/josephine-bonka-250263207" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.linkedin.com/in/josephine-bonka-250263207" target="__blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/josephineeng2" target="__blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com/josephineeng2" target="__blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://github.com/josephineEng" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
        <div className="bg-[#fff] border border-1-solid rounded-[8px] p-10 text-center">
          <img src={Doctors} alt="Kingsley profile logo" className="max-w-[100px] h-[100px] rounded-[100%] m-auto" />
          <h3 className="text-center text-[#A03] font-bold text-[25px] my-2">Adio Usman</h3>
          <p className="text-center opacity-[0.6] mb-2">Market Researcher</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quo deserunt voluptates eos odio repellat magnam doloremque,
            incidunt neque blanditiis facilis laboriosam dolores debitis assumenda quisquam
            tenetur officiis minus ipsam.
          </p>
          <div className="flex flex-row gap-5 items-center text-center text-[25px] text-[#17a2b8]">
            <a href="https://www.linkedin.com/in/adiousman/" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.linkedin.com/in/adiousman/" target="__blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/usafod" target="__blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com/usafod" target="__blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://github.com/usafod" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between contact-border p-10 my-5 text-[#A03]">
        <h3 className="text-[25px]">We are with you in every step of your donation</h3>
        <Link to="/contact" className="px-[21px] py-[12px] rounded-[6px] text-[#A03] bg-[#17a2b8]"><button type="button">Conact Us</button></Link>
      </div>
    </div>
  </div>
);

export default About;
