import { Link } from 'react-router-dom';
import LoginButton from '../user/LoginButton';
import LogoutButton from '../user/LogoutButton';
import Logo from '../../assets/images/logo.png';

const Header = () => (
  <header className="text-[#A00]">
    <div className="bg-[#fff] p-5">
      <nav className="">
        <div className="flex gap-5 items-center relative">
          <Link to="/" className="flex gap-2 items-center">
            <img src={Logo} alt="logo" className="max-w-[50px]" />
            <h4>Life Force</h4>
          </Link>
          <ul className="flex gap-5 items-center absolute right-0">
            <li className="hover:text-[#FFC01D]"><LoginButton /></li>
            <li className="hover:text-[#FFC01D]">
              <LogoutButton />
              {' '}
            </li>
          </ul>

        </div>
      </nav>
    </div>
  </header>
);

export default Header;
