import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faUser, faUserTie, faLock, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { dontWaitFor } from 'workbox-core/_private';

const DonationForm = (props) => {
  const [donationData, setDonationData] = useState({
    firstName: '',
  });

  const onChange = (e) => {
    setDonationData({
      ...donationData,
      [e.target.name]: e.target.value,
    });
  };

  const { addDonationProps } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (donationData.firstName.trim()) {
      addDonationProps(dontWaitFor.firstName);
      setDonationData({
        firstName: '',
      });
    } else {
      alert('Please write your name');
    }
  };
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
              <input type="text" placeholder="Last Name" />
            </label>
            <label htmlFor="email" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
              <input type="email" placeholder="Email" />
            </label>
            <label htmlFor="phone" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="number" placeholder="234 567890" />
            </label>
            <label htmlFor="location" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="Location" />
            </label>
            <label htmlFor="HIV" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="What is your HIV status?" />
            </label>
          </div>
          <div>
            <label htmlFor="Age" className="register-input-bolder flex flex-row gap-4 items-center p-2">
              <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
              <input type="number" placeholder="How old are you?" />
            </label>
            <label htmlFor="weight" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
              <input type="text" placeholder="What do you weigh? e.g 50kg" />
            </label>
            <label htmlFor="blood" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
              <input type="text" placeholder="what is your blood group?" />
            </label>
            <label htmlFor="itemUpdate" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="Have you made similar donation before?" />
            </label>
            <label htmlFor="Genotype" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="What is your Genotype?" />
            </label>
            <label htmlFor="available" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
              <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
              <input type="text" placeholder="What is your earliest available date? " />
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

DonationForm.propTypes = {
  addDonationProps: PropTypes.func.isRequired,
};

export default DonationForm;
