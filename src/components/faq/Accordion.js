import React, { useState } from 'react';

import { FiPlus, FiMinus } from 'react-icons/fi';
import QuestionData from './QuestionData';

const Accordion = () => {
  let indexPlus;

  const [active, setActive] = useState(0);

  const eventHandler = (e, index) => {
    e.preventDefault();
    setActive(index);
  };

  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };

  return (
    <div className="accordion">
      {QuestionData.map((tab, index) => (
        <div className="border border-1-solid rounded-[12px] p-10 my-5" key={tab.index}>
          <div>
            <button
              type="button"
              onClick={(e) => eventHandler(e, index)}
              className="inactive flex"
              tabIndex={indexCount(index)}
            >
              <h2 className="font-bold text-[26px] text-[#000] inter-font h3-mobile-question">{tab.question}</h2>

              <div className="mt-3">
                {active === index ? (
                  <FiMinus className="accordion-icons" />
                ) : (
                  <FiPlus className="accordion-icons" />
                )}
              </div>
            </button>
          </div>

          <div
            id={`sect-${indexCount(index)}`}
            className={active === index ? 'panel-open' : 'panel-close'}
          >
            <p className="text-[#C6CCD6] text-[20px] font-regular inter-font pt-3 w-[90%] p-mobile">{tab.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
