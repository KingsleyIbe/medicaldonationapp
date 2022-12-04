/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import call from '../../assets/images/call.png';
import group1 from '../../assets/images/group1.png';
import group from '../../assets/images/group.png';

const ContactUs = () => (
  <section className="px-10 w-[100%]">
    <div><h1 className="font-bold text-[35px] text-[#17a2b8] mb-[50px] text-center">Contact Us</h1></div>
    <div className="lg:flex gap-10">
      <div>
        <form action="https://formspree.io/f/mgeqzkkb" method="POST" className="mb-10">
          <div className="lg:flex md:flex sm:flex flex-row gap-5">
            <label htmlFor="firstName" className="mt-10 grid text-[#17a2b8]">
              First name
              <input type="text" name="firstName" required placeholder="First name" className="my-2 text-[#000] border-none contact-input p-2 rounded-[8px]" />
            </label>
            <label htmlFor="secondName" className="grid mt-10 text-[#17a2b8]">
              Second name
              <input type="text" name="secondName" required placeholder="Second name" className="my-2 text-[#000] border-none contact-input p-2 rounded-[8px]" />
            </label>
          </div>
          <div className="">
            <label htmlFor="email" className="grid mt-10 text-[#17a2b8]">
              Email
              <input type="email" name="email" required placeholder="Ex example@email.com" className="my-2 text-[#000] border-none contact-input p-2 rounded-[8px]" />
            </label>
            <label htmlFor="message" className="grid mt-10 text-[#17a2b8]">
              What can we help you with?
              <textarea type="text" name="message" required placeholder="Type your message here" className="my-2 text-[#000] border-none contact-input p-2 rounded-[8px]" rows="8" cols="50" maxLength="200" />
            </label>
          </div>
          <button type="submit" className="rounded-[8px] w-[150px] bg-[#17a2b8] mt-5 px-[21px] py-[12px] text-[#fff]">Send</button>
        </form>
      </div>
      <div className="md:mb-[145px] md:mt-[100px] sm:mb-[145px] sm:mt-[100px]">
        <div className="text-center text-[#17a2b8]">
          <p>
            We would be happy to hear from you,
            Please fill in the form below or mail us your enquiries to
          </p>
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = 'mailto:info@prudenceconcept.com';
              e.preventDefault();
            }}
            className="underline mt-2 text-[#A03]"
          >
            info@lifeforce.com
          </Link>
        </div>
        <div className="mt-[100px] lg:mt-0 md:mt-0 relative lg:left-0 lg:bottom-[-145px] md:left-10 md:bottom-[-145px] left-0 bottom-0">
          <img src={call} alt="Call design" />
          <img src={group1} alt="Group design" className="absolute lg:top-[-250px] lg:left-[260px] md:top-[-250px] md:left-[250px] top-[-160px] left-[50px]" />
          <img src={group} alt="Group design" className="absolute lg:top-[-240px] lg:left-[-120px] md:top-[-250px] md:left-[-180px] top-[-100px] left-[-50px]" />
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
