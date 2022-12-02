/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import Doctors from '../../assets/images/doctors.jpg';
import data from './Team';

const About = () => {
  const Data = data;
  return (
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
        <img src={Doctors} alt="Doctors" className="lg:max-w-[50%]" />
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
        <div className="flex flex-col lg:flex-row gap-5 mb-10">
          {Data && Data.map((team) => (
            <ul key={team?.id} className="bg-[#fff] border border-1-solid rounded-[8px] p-10 text-center">
              <li><img src={team?.image} alt={team?.name} className="w-[100px] h-[90px] rounded-[100%] m-auto" /></li>
              <li><h3 className="text-center text-[#A03] font-bold text-[25px] my-2">{team?.name}</h3></li>
              <li><p className="text-center opacity-[0.6] mb-2">{team?.role}</p></li>
              <li><p>{team?.bio}</p></li>
              <li className="flex flex-row gap-5 items-center justify-center text-center text-[25px] text-[#17a2b8] mt-2">
                <a href={team?.href[0]} className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={team?.socialIcon[0]} /></a>
                <a href={team?.href[1]} className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={team?.socialIcon[1]} /></a>
                <a href={team?.href[2]} className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={team?.socialIcon[2]} /></a>
                <a href={team?.href[3]} className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={team?.socialIcon[3]} /></a>
                <a href={team?.href[4]} className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={team?.socialIcon[4]} /></a>
              </li>
            </ul>
          ))}
          {/* <div className="bg-[#fff] border border-1-solid rounded-[8px] p-10 text-center">
            <img src={Doctors} alt="Kingsley profile logo"
            className="max-w-[100px] h-[100px] rounded-[100%] m-auto" />
            <h3 className="text-center text-[#A03] font-bold text-[25px] my-2">Michael David</h3>
            <p className="text-center opacity-[0.6] mb-2">Backend Developer</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quo deserunt voluptates eos odio repellat magnam doloremque,
              incidunt neque blanditiis facilis laboriosam dolores debitis assumenda quisquam
              tenetur officiis minus ipsam.
            </p>
            <div className="flex flex-row gap-5 items-center
            justify-center text-center text-[25px] text-[#17a2b8] mt-2">
              <a href="https://www.linkedin.com/in/michael-david-oyenuga" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.linkedin.com/in/michael-david-oyenuga" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://twitter.com/David_Gahd" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://twitter.com/David_Gahd" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://github.com/Gahdloot" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
          <div className="bg-[#fff] border border-1-solid rounded-[8px] p-10 text-center">
            <img src={Doctors} alt="Kingsley profile logo"
            className="max-w-[100px] h-[100px] rounded-[100%] m-auto" />
            <h3 className="text-center text-[#A03] font-bold text-[25px] my-2">Josephine Bonka</h3>
            <p className="text-center opacity-[0.6] mb-2">UI/UX Designer</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quo deserunt voluptates eos odio repellat magnam doloremque,
              incidunt neque blanditiis facilis laboriosam dolores debitis assumenda quisquam
              tenetur officiis minus ipsam.
            </p>
            <div className="flex flex-row gap-5 items-center
            justify-center text-center text-[25px] text-[#17a2b8] mt-2">
              <a href="https://www.linkedin.com/in/josephine-bonka-250263207" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.linkedin.com/in/josephine-bonka-250263207" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://twitter.com/josephineeng2" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://twitter.com/josephineeng2" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://github.com/josephineEng" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
          <div className="bg-[#fff] border border-1-solid rounded-[8px] p-10 text-center">
            <img src={Doctors} alt="Kingsley profile
            logo" className="max-w-[100px] h-[100px] rounded-[100%] m-auto" />
            <h3 className="text-center text-[#A03] font-bold text-[25px] my-2">Adio Usman</h3>
            <p className="text-center opacity-[0.6] mb-2">Market Researcher</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quo deserunt voluptates eos odio repellat magnam doloremque,
              incidunt neque blanditiis facilis laboriosam dolores debitis assumenda quisquam
              tenetur officiis minus ipsam.
            </p>
            <div className="flex flex-row gap-5 items-center
            justify-center text-center text-[25px] text-[#17a2b8] mt-2">
              <a href="https://www.linkedin.com/in/adiousman/" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.linkedin.com/in/adiousman/" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://twitter.com/usafod" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://twitter.com/usafod" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://github.com/usafod" className="hover:text-[#A03]" target="__blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between contact-border p-10 my-5 text-[#A03]">
          <h3 className="text-[25px] text-center">We are with you in every step of your donation</h3>
          <Link to="/contact" className="px-[21px] py-[12px] rounded-[6px] text-center text-[#fff] bg-[#17a2b8] hover:text-[#fff] hover:bg-[#A03]"><button type="button">Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
