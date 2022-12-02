import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';

const KycHeader = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <header className="text-[#A00]">
      <div className="bg-[#fff] p-5">
        <nav className="">
          <div className="flex gap-5 items-center relative">
            <Link to="/" className="flex gap-2 items-center">
              <img src={Logo} alt="logo" className="max-w-[50px]" />
              <h4>Life Force</h4>
            </Link>
            {isAuthenticated && (
            <ul className="flex gap-5 items-center absolute right-0">
              <li className="hover:text-[#FFC01D]"><button type="button">Sign Out</button></li>
              <li className="hover:text-[#FFC01D]"><img src={user?.picture} alt={user?.name} className="rounded-[100%] max-w-[30px]" /></li>
            </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default KycHeader;
