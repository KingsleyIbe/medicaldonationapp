/* eslint-disable no-unreachable */
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faUser, faUserTie, faLock, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const getInitialDonations = () => {
  // getting stored items
  const temp = localStorage.getItem('donations');
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
      donatedBefore: '',
      bloodGroup: '',
      gender: '',
      donationItem: '',
    };
  }
  return JSON.parse(temp);
};

const DonationForm = () => {
  const [donationData, setDonationData] = useState(getInitialDonations());

  const onChange = (e) => {
    setDonationData((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewForm = (firstName, lastName, email) => {
    const newDonation = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
    };
    setDonationData([...donationData, newDonation]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewForm();
    e.target.value = '';
  };

  useEffect(() => {
    localStorage.setItem('donationList', JSON.stringify(donationData));
  }, [donationData]);

  return (
    <div className="mt-10 bg-[#fff] rounded-[12px] flex flex-col justify-center items-center fixed top-[50px] right-[250px] z-50">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-10 items-center p-5 rounded-[12px]">
          <div>
            <label htmlFor="First Name" className="register-input-bolder flex flex-row gap-4 items-center p-2">
              <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
              <input type="text" placeholder="First Name" value={donationData.firstName} name="firstName" onChange={onChange} />
            </label>
            <label htmlFor="Last Name" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
              <input type="text" placeholder="Last Name" value={donationData.lastName} name="lastName" onChange={onChange} />
            </label>
            <label htmlFor="email" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
              <input type="email" placeholder="Email" value={donationData.email} name="email" onChange={onChange} />
            </label>
            <label htmlFor="phone" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="number" placeholder="234 567890" value={donationData.phone} name="phone" onChange={onChange} />
            </label>
            <label htmlFor="location" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="Location" value={donationData.location} name="location" onChange={onChange} />
            </label>
            <label htmlFor="HIV" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="What is your HIV status?" value={donationData.hivStatus} name="hivStatus" onChange={onChange} />
            </label>
            <label htmlFor="gender" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="What is your gender?" value={donationData.gender} name="gender" onChange={onChange} />
            </label>
          </div>
          <div>
            <label htmlFor="Age" className="register-input-bolder flex flex-row gap-4 items-center p-2">
              <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
              <input type="text" placeholder="How old are you?" value={donationData.age} name="age" onChange={onChange} />
            </label>
            <label htmlFor="weight" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
              <input type="text" placeholder="What do you weigh? e.g 50kg" value={donationData.weight} name="weight" onChange={onChange} />
            </label>
            <label htmlFor="blood" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
              <input type="text" placeholder="what is your blood group?" value={donationData.bloodGroup} name="bloodGroup" onChange={onChange} />
            </label>
            <label htmlFor="itemUpdate" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="Have you made similar donation before?" value={donationData.donatedBefore} name="donatedBefore" onChange={onChange} />
            </label>
            <label htmlFor="Genotype" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="What is your Genotype?" value={donationData.genotype} name="genotype" onChange={onChange} />
            </label>
            <label htmlFor="available" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="What is your earliest available date? " value={donationData.availableDate} name="availableDate" onChange={onChange} />
            </label>
            <label htmlFor="donationItem" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="What item do you want to donation? " value={donationData.donationItem} name="donationItem" onChange={onChange} />
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-5 p-2">
          <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#A03] w-[100%] text-[#fff]">Submit</button>
        </div>
      </form>
      <div className="mt-2 opacity-[0.8]">
        <p>By continuing, you agree to Life Force&#39;s</p>
        <Link to="/privacy-policy">Terms of Service and Privacy Police</Link>
      </div>
    </div>
  );
};

export default DonationForm;
