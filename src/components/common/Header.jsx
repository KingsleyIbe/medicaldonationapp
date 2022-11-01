import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NavItems from './NavItems';

const Header = () => {
  const data = NavItems;

  const navLinksStyles = ({ isActive }) => ({
    borderBottom: isActive ? '4px solid #500' : 'none',
  });

  return (
    <header className="text-[#fff]">
      <div className="bg-[#A00] p-5">
        <nav className="">
          {data.map((navItem) => (
            <div key={uuidv4()} className="flex gap-5 items-center relative">
              <Link to={navItem.link[0]} className="flex gap-2 items-center">
                <img src={navItem.logo} alt={navItem.alt} className="max-w-[50px]" />
                <h4>{navItem.title[0]}</h4>
              </Link>
              <ul className="flex gap-5 items-center absolute right-0">
                <li className="hover:text-[#FFC01D]"><NavLink to={navItem.link[1]} style={navLinksStyles}>{navItem.title[1]}</NavLink></li>
                <li className="hover:text-[#FFC01D]"><NavLink to={navItem.link[2]} style={navLinksStyles}>{navItem.title[2]}</NavLink></li>
                <li className="hover:text-[#FFC01D]"><NavLink to={navItem.link[3]} style={navLinksStyles}>{navItem.title[3]}</NavLink></li>
                <li className="hover:text-[#FFC01D]"><NavLink to={navItem.link[4]} style={navLinksStyles}>{navItem.title[4]}</NavLink></li>
                <li className="hover:text-[#FFC01D]"><NavLink to={navItem.link[5]} style={navLinksStyles}>{navItem.title[5]}</NavLink></li>
              </ul>

            </div>

          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
