import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faUserTie, faEnvelope, faLocation, faHeartCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

const IndividualSignUp = () => {
  const [data, setData] = useState([]);
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
      <div className="px-5">
        {isLoading && <p>Loading...</p>}
        {isError && <p>An error occur</p>}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 items-center p-5 rounded-[12px]">
          <label htmlFor="First Name" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
            <input type="text" required placeholder="First Name" value={formData.firstName} name="firstName" onChange={onChange} />
          </label>
          <label htmlFor="Last Name" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
            <input type="text" required placeholder="Last Name" value={formData.lastName} name="lastName" onChange={onChange} />
          </label>
          <label htmlFor="email" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
            <input type="email" required placeholder="Email" value={formData.email} name="email" onChange={onChange} />
          </label>
          <label htmlFor="zipCode" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faLocation} className="opacity-[0.2]" />
            <input type="number" required placeholder="Location" value={formData.zipCode} name="zipCode" onChange={onChange} />
          </label>
          <label htmlFor="dob" className="w-[100%]">
            <span className="flex flex-row justify-between">
              <p>Date of birth</p>
              <button type="button" className="text-[14px] text-[#A03] underline">+ Why we this info</button>
            </span>
            <span className="register-input-bolder flex flex-row gap-4 items-center justify-between p-2">
              <input type="date" required placeholder="Date of birth" value={formData.dob} name="dob" onChange={onChange} />
            </span>
          </label>
          <label htmlFor="password" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faHeartCirclePlus} className="opacity-[0.2]" />
            <input type="password" required placeholder="Enter your password" value={formData.password} name="password" onChange={onChange} />
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

export default IndividualSignUp;
