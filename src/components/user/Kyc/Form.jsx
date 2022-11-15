import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faLock, faUserTie, faUser,
} from '@fortawesome/free-solid-svg-icons';

const Form = () => (
  <div className="mt-5 w-[50%] border border-1-solid rounded-[8px]">
    <form className="p-10">
      <label htmlFor="firstName" className="input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
        <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
        <input type="text" placeholder="First Name" className="w-[100%]" />
      </label>
      <label htmlFor="lastName" className="input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
        <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
        <input type="text" placeholder="Last Name" className="w-[100%]" />
      </label>
      <label htmlFor="vnin" className="input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
        <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
        <input type="number" placeholder="Enter Virtual NIN" className="w-[100%]" />
      </label>
      <div className="flex flex-col items-center justify-center my-5 p-2">
        <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#4e0f0f] w-[100%] text-[#fff]">Continue</button>
      </div>
    </form>
    <div className="flex flex-row items-center gap-2 justify-between p-10">
      <p>Don&#39;t have a virtual NIN?</p>
      <Link to="/sign-up" className="text-[#4e0f0f] underline">See Guide</Link>
    </div>
    <div className="mt-2 opacity-[0.5] text-center mb-[50px]">
      <p>By continuing, you agree to Life force&#39;s</p>
      <Link to="/privacy-policy" className="text-[#4e0f0f] underline">Terms of Service and Privacy Police</Link>
    </div>
  </div>
);

export default Form;
