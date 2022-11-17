import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faRulerHorizontal,
// } from '@fortawesome/free-solid-svg-icons';
import LoginButton from '../user/LoginButton';
import Accordion from './Accordion';

const Question = () => (
  <section className="question bg-[#17a2b8]" id="faq">
    <div className="p-10">
      <div>
        <h2 className="font-medium text-[48px] uppercase m-auto w-[116px] link h2-mobile">FAQs</h2>
        {/* <FontAwesomeIcon icon={faRulerHorizontal} className=" text-[30px] text-[#A03]" /> */}
      </div>
      <div className="w-[591px] py-10 m-auto font-bold text-[26px] inter-font some-questions">
        <h3 className="h3-mobile-question h3-ques">Some Questions you might need an answer to</h3>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
    <div className="p-10 mx-0 mt-[4rem] bg-[#17a2b8] text-center join-container">
      <h2 className="font-bold text-[64px] h2-mobile">Like what you see?</h2>
      <p className="font-regular text-[28px] intern-font p-mobile">Be among the first to experience the beauty of the Life Force</p>
      <button
        type="button"
        className="btn-link btn-mobile bg-[#A03] w-[219px] m-auto p-5 rounded-[40px] text-[#fff] text-[16px] font-bold my-10 uppercase"
      >
        <LoginButton />
      </button>
    </div>
  </section>
);

export default Question;
