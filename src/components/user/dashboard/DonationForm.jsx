import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faUser, faUserTie, faLock, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const DonationForm = () => (
  <div className="mt-10 bg-[#fff] rounded-[12px] flex flex-col justify-center items-center fixed top-[50px] right-[250px] z-50">
    <form>
      <div className="flex flex-row gap-10 items-center p-5 rounded-[12px]">
        <div>
          <label htmlFor="First Name" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
            <input type="text" placeholder="First Name" />
          </label>
          <label htmlFor="Last Name" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
            <input type="text" placeholder="Last Name" />
          </label>
          <label htmlFor="email" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
            <input type="email" placeholder="Email" />
          </label>
          <label htmlFor="item" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
            <input type="text" placeholder="What item are you donating?" />
          </label>
          <label htmlFor="blood" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
            <input type="text" placeholder="Enter your blood group" />
          </label>
        </div>
        <div>
          <label htmlFor="Genotype" className="register-input-bolder flex flex-row gap-4 items-center p-2">
            <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
            <input type="text" placeholder="What's your Genotype?" />
          </label>
          <label htmlFor="HIVStatus" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
            <input type="text" placeholder="What's your HIV status" />
          </label>
          <label htmlFor="malaria" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
            <input type="text" placeholder="Do you have malaria?" />
          </label>
          <label htmlFor="itemUpdate" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
            <input type="text" placeholder="Have you made similar donation before?" />
          </label>
          <label htmlFor="contact" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
            <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
            <input type="text" placeholder="Address" />
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

export default DonationForm;
