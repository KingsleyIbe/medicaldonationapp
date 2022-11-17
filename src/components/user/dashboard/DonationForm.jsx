/* eslint-disable no-unreachable */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faUser, faUserTie, faLock, faEnvelope, faLocation, faPhone, faHeartCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

const DonationForm = () => {
  const getInitialDonations = () => {
    // getting stored items
    const temp = localStorage.getItem('donationList') ? JSON.parse(localStorage.getItem('donationList')) : [];
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
    return (temp);
  };

  const [donationData, setDonationData] = useState(getInitialDonations());
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
    donatedBefore: '',
    bloodGroup: '',
    gender: '',
    donationItem: '',
    btn: 'Contact this user',
  });

  const onChange = (e) => {
    setFormData((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewForm = () => {
    setDonationData([...donationData, { ...formData, id: uuidv4() }]);
    localStorage.setItem('donationList', JSON.stringify(donationData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewForm();
  };

  return (
    <div className="mt-10 bg-[#fff] rounded-[12px] flex flex-col justify-center items-center absolute top-[50px] lg:right-[250px] z-50">
      <form onSubmit={handleSubmit}>
        <div className="flex lg:flex-row flex-col gap-10 items-center p-5 rounded-[12px]">
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
            <label htmlFor="phone" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faPhone} className="opacity-[0.2]" />
              <input type="number" required placeholder="234 567890" value={formData.phone} name="phone" onChange={onChange} />
            </label>
            <label htmlFor="location" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLocation} className="opacity-[0.2]" />
              <input type="text" required placeholder="Location" value={formData.location} name="location" onChange={onChange} />
            </label>
            <label htmlFor="HIV" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faHeartCirclePlus} className="opacity-[0.2]" />
              <input type="text" required placeholder="What is your HIV status?" value={formData.hivStatus} name="hivStatus" onChange={onChange} />
            </label>
            <label htmlFor="gender" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" required placeholder="What is your gender?" value={formData.gender} name="gender" onChange={onChange} />
            </label>
          </div>
          <div>
            <label htmlFor="Age" className="register-input-bolder flex flex-row gap-4 items-center p-2">
              <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
              <input type="text" required placeholder="How old are you?" value={formData.age} name="age" onChange={onChange} />
            </label>
            <label htmlFor="weight" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
              <input type="text" required placeholder="What do you weigh? e.g 50kg" value={formData.weight} name="weight" onChange={onChange} />
            </label>
            <label htmlFor="blood" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
              <input type="text" required placeholder="what is your blood group?" value={formData.bloodGroup} name="bloodGroup" onChange={onChange} />
            </label>
            <label htmlFor="itemUpdate" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" required placeholder="Have you made similar donation before?" value={formData.donatedBefore} name="donatedBefore" onChange={onChange} />
            </label>
            <label htmlFor="Genotype" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" required placeholder="What is your Genotype?" value={formData.genotype} name="genotype" onChange={onChange} />
            </label>
            <label htmlFor="available" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" required placeholder="What is your earliest available date? " value={formData.availableDate} name="availableDate" onChange={onChange} />
            </label>
            <label htmlFor="donationItem" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="date" placeholder="What item do you want to donation? " value={formData.donationItem} name="donationItem" onChange={onChange} />
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-5 p-2">
          <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#A03] w-[100%] text-[#fff]">Submit</button>
        </div>
      </form>
      <div className="mt-2 opacity-[0.8] mb-10">
        <p>By continuing, you agree to Life Force&#39;s</p>
        <Link to="/privacy-policy" className="underline">Terms of Service and Privacy Police</Link>
      </div>
    </div>
  );
};

export default DonationForm;
