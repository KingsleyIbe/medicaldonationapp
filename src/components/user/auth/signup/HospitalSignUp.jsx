/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHospital, faEnvelope, faLocation, faHeartCirclePlus, faEye,
} from '@fortawesome/free-solid-svg-icons';

const HospitalSignUp = () => {
  const [data, setData] = useState([]);
  // const [dobInfo, setDobInfo] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
    zipCode: '',
    category: 'individual',
    userId: uuidv4(),
  });

  const onChange = (e) => {
    setFormData((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  };

  // const headers = {
  //   'Content-Type': 'application/json',
  // };

  const url = 'https://62c2abb8ff594c656761de49.mockapi.io/users';
  const fetchData = () => {
    Axios.post(url, formData).then((res) => setData(res?.data));
  };
  const { isLoading, isError } = useQuery(['user'], fetchData);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    console.log(data);
    console.log(formData);
  };

  return (
    <div>
      {isLoading && <p className="px-5 text-[#A03] mt-5">Loading...</p>}
      {isError && <p className="px-5 text-[#A03] mt-5">An error occur!</p>}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 items-center p-5 rounded-[12px]">
          <label htmlFor="First Name" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faHospital} className="opacity-[0.2]" />
            <input type="text" required placeholder="Hospital Name" value={formData.hospitalName} name="hospitalName" onChange={onChange} />
          </label>
          <label htmlFor="email" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
            <input type="email" required placeholder="Official Email" value={formData.email} name="email" onChange={onChange} />
          </label>
          <label htmlFor="zipCode" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faLocation} className="opacity-[0.2]" />
            <input type="number" required placeholder="Zip code" value={formData.zipCode} name="zipCode" onChange={onChange} />
          </label>
          <label htmlFor="password" className="max-w-[100%] register-input-bolder flex flex-row items-center p-2">
            <FontAwesomeIcon icon={faHeartCirclePlus} className="opacity-[0.2] mr-1" />
            <input type="password" required placeholder="Enter your password" value={formData.password} name="password" onChange={onChange} className="max-w-[100%]" />
            <button type="button"><FontAwesomeIcon icon={faEye} className="opacity-[0.2]" /></button>
          </label>
          <label htmlFor="confirmPassword" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faHeartCirclePlus} className="opacity-[0.2]" />
            <input type="password" required placeholder="Repeat your password" value={formData.confirmPassword} name="confirmPassword" onChange={onChange} />
          </label>
        </div>

        <div className="flex flex-col items-center justify-center my-5 p-2">
          <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#17a2b8] w-[100%] text-[#fff]">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HospitalSignUp;