import { NavLink } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import NavItems from './NavItems';

const MobileDropDown = () => {
  const navLinksStyles = ({ isActive }) => ({
    borderBottom: isActive ? '4px solid #17a2b8' : 'none',
  });

  return (
    <header className="w-[100%] z-50">
      <div className="text-[#fff] bg-[#A03]">
        <nav className="">
          <div className="">
            <ul className="flex flex-col gap-5 p-10">
              <li className="hover:text-[#17a2b8]"><NavLink to="/about" style={navLinksStyles}>About</NavLink></li>
              <li className="hover:text-[#17a2b8]"><NavLink to="/contact" style={navLinksStyles}>Contact Us</NavLink></li>
              <li className="hover:text-[#17a2b8]"><NavLink to="/faq" style={navLinksStyles}>FAQ</NavLink></li>
              <li className="hover:text-[#17a2b8]"><NavLink to="/sign-in" style={navLinksStyles}>Sign In</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MobileDropDown;
