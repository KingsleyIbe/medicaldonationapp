/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHospital, faEnvelope, faLocation, faHeartCirclePlus, faEye,
} from '@fortawesome/free-solid-svg-icons';

const HospitalSignUp = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    id: '',
    createdAt: data?.createdAt,
    password: '',
    confirmPassword: '',
    zipCode: '',
    category: 'hospital',
    userId: uuidv4(),
  });

  const onChange = (e) => {
    setFormData((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  };

  const url = 'https://62c2abb8ff594c656761de49.mockapi.io/hospitalUsers';
  const fetchData = () => {
    Axios.post(url, formData).then((res) => setData(res?.data));
  };
  const { isLoading } = useQuery(['user'], fetchData);
  const [validation, setValidation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    if (formData.name.length < 3 || formData.name.length > 20) {
      setValidation('nameError');
    } else if (formData.zipCode.length < 5 || formData.zipCode.length > 8) {
      setValidation('invalid zip code');
    } else if (formData.password !== formData.confirmPassword) {
      setValidation('password mismatch');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <div>
      {isLoading && <p className="px-5 text-[#A03] mt-5">Loading...</p>}
      <form onSubmit={handleSubmit} className="w-[100%]">
        <div className="flex flex-col gap-2 items-center p-5 rounded-[12px] w-[100%]">
          <label htmlFor="hospitalName" className="w-[100%] register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faHospital} className="opacity-[0.2]" />
            <input type="text" required placeholder="Hospital Name" value={formData.name} name="name" onChange={onChange} />
          </label>
          {validation === 'nameError' && <p className="text-[#A03] text-[10px]">The hospital name must be between 3 and 30 characters.</p>}
          <label htmlFor="email" className="w-[100%] register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
            <input type="email" required placeholder="Official Email" value={formData.email} name="email" onChange={onChange} />
          </label>
          <label htmlFor="zipCode" className="w-[100%] register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faLocation} className="opacity-[0.2]" />
            <input type="number" required placeholder="Zip code" value={formData.zipCode} name="zipCode" onChange={onChange} />
          </label>
          {validation === 'invalid zip code' && <p className="text-[#A03] text-[10px]">Invalid zip code! </p>}
          <label htmlFor="password" className="w-[100%] register-input-bolder flex flex-row items-center p-2">
            <FontAwesomeIcon icon={faHeartCirclePlus} className="opacity-[0.2] mr-4" />
            <span className="flex flex-row justify-between items-center w-[100%]">
              <input type="password" required placeholder="Enter your password" value={formData.password} name="password" onChange={onChange} className="w-[100%]" />
              <button type="button"><FontAwesomeIcon icon={faEye} className="opacity-[0.2]" /></button>
            </span>
          </label>
          <label htmlFor="confirmPassword" className="w-[100%] register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faHeartCirclePlus} className="opacity-[0.2]" />
            <input type="password" required placeholder="Repeat your password" value={formData.confirmPassword} name="confirmPassword" onChange={onChange} />
          </label>
          {validation === 'password mismatch' && <p className="text-[#A03] text-[10px]">Password do not match</p>}
        </div>
        <div className="text-center text-[#A03] hover:underline">
          <Link to="/sign-in">Already have an account? sign in</Link>
        </div>
        <div className="flex flex-col items-center justify-center my-5 p-2">
          <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#17a2b8] w-[100%] text-[#fff] hover:border hover:text-[#17a2b8] hover:bg-[#fff]">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HospitalSignUp;
