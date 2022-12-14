/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faUser, faUserTie, faEnvelope, faLocation,
  faPhone, faHeartCirclePlus, faTimes, faArrowUpFromWaterPump,
  faArrowUpRightDots, faWeightScale, faPeopleArrows, faQuestionCircle,
  faLeaf, faCartShopping, faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';

const RequestForm = () => {
  const getInitialRequests = () => {
    // getting stored items
    const temp = localStorage.getItem('requestList') ? JSON.parse(localStorage.getItem('requestList')) : [];
    if (!temp) {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        weight: '',
        genotype: '',
        availableDate: '',
        hivStatus: '',
        location: '',
        requestedBefore: '',
        bloodGroup: '',
        gender: '',
        requestItem: '',
      };
    }
    return (temp);
  };

  const [requestData, setRequestData] = useState(getInitialRequests());
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    weight: '',
    genotype: '',
    availableDate: '',
    hivStatus: '',
    location: '',
    requestedBefore: '',
    bloodGroup: '',
    gender: '',
    requestItem: '',
    btn: 'Contact this user',
  });

  const onChange = (e) => {
    setFormData((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewForm = () => {
    setRequestData([...requestData, { ...formData, id: uuidv4() }]);
    localStorage.setItem('requestList', JSON.stringify(requestData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewForm();
  };

  const [open, setOpen] = useState(true);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
      <div className="mt-10 bg-[#fff] rounded-[12px] lg:block border border-2-solid justify-center items-center absolute top-[50px] lg:right-[250px] z-50">
        <div className="flex flex-row justify-between items-center p-5">
          <h1>Let&#39;s your Info</h1>
          <button type="button" onClick={openModal}><FontAwesomeIcon icon={faTimes} /></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-0 lg:gap-10 items-center p-5 rounded-[12px] lg:flex-row flex-col">
            <div>
              <label htmlFor="First Name" className="register-input-bolder flex flex-row gap-4 items-center p-2">
                <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
                <input type="text" required placeholder="First Name" value={formData.firstName} name="firstName" onChange={onChange} />
              </label>
              <label htmlFor="Last Name" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
                <input type="text" required placeholder="Last Name" value={formData.lastName} name="lastName" onChange={onChange} />
              </label>
              <label htmlFor="email" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
                <input type="email" required placeholder="Email" value={formData.email} name="email" onChange={onChange} />
              </label>
              <label htmlFor="item" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faCartShopping} className="opacity-[0.2]" />
                <input type="text" required placeholder="What item are you requesting for?" value={formData.requestItem} name="requestItem" onChange={onChange} />
              </label>
              <label htmlFor="gender" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faPeopleArrows} className="opacity-[0.2]" />
                <span className="opacity-[0.5]">What is your gender?</span>
                <select value={formData.gender} onChange={onChange} name="gender">
                  <option value="Choose Gender">Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
              <label htmlFor="phone" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faPhone} className="opacity-[0.2]" />
                <input type="text" required placeholder="Phone eg.234 567890" value={formData.phone} name="phone" onChange={onChange} />
              </label>
              <label htmlFor="age" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faArrowUpRightDots} className="opacity-[0.2]" />
                <input type="text" required placeholder="How old are you?" value={formData.age} name="age" onChange={onChange} />
              </label>
            </div>
            <div>
              <label htmlFor="blood" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faArrowUpFromWaterPump} className="opacity-[0.2]" />
                <input type="text" required placeholder="What is your blood group?" value={formData.bloodGroup} name="bloodGroup" onChange={onChange} />
              </label>
              <label htmlFor="Genotype" className="register-input-bolder flex flex-row gap-4 items-center p-2">
                <FontAwesomeIcon icon={faLeaf} className="opacity-[0.2]" />
                <span className="opacity-[0.5]">What is your Genotype?</span>
                <select value={formData.genotype} name="genotype" onChange={onChange}>
                  <option className="opacity-[0.5]" value="Select">Select</option>
                  <option value="AA">AA</option>
                  <option value="AS">AS</option>
                  <option value="SS">SS</option>
                  <option value="AC">AC</option>
                </select>
              </label>
              <label htmlFor="HivStatus" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faHeartCirclePlus} className="opacity-[0.2]" />
                <input type="text" required placeholder="What's your HIV status" value={formData.hivStatus} name="hivStatus" onChange={onChange} />
              </label>
              <label htmlFor="weight" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faWeightScale} className="opacity-[0.2]" />
                <input type="text" required placeholder="What do you weigh?" value={formData.weight} name="weight" onChange={onChange} />
              </label>
              <label htmlFor="requestedBefore" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faQuestionCircle} className="opacity-[0.2]" />
                <span className="opacity-[0.5]">Have you made similar donation before?</span>
                <select value={formData.donatedBefore} name="donatedBefore" onChange={onChange}>
                  <option value="Select">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
              <label htmlFor="Location" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faLocation} className="opacity-[0.2]" />
                <input type="text" required placeholder="What is your Location?" value={formData.location} name="location" onChange={onChange} />
              </label>
              <label htmlFor="availableDate" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                <FontAwesomeIcon icon={faCalendarCheck} className="opacity-[0.2]" />
                <input type="date" placeholder="What date do you need this item?" value={formData.availableDate} name="availableDate" onChange={onChange} />
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center my-5 p-2">
            <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#A03] w-[100%] text-[#fff]">Submit</button>
          </div>
        </form>
        <div className="mt-2 opacity-[0.8] mb-10 flex flex-col justify-center items-center">
          <p>By continuing, you agree to Life Force&#39;s</p>
          <Link to="/privacy-policy" className="underline">Terms of Service and Privacy Police</Link>
        </div>
      </div>
      )}
    </>
  );
};

export default RequestForm;
