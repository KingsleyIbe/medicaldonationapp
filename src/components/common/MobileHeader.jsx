import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import MobileDropDown from './MobileDropDown';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="mobile-header top-0 fixed z-50 bg-[#fff] lg:hidden w-[100%]">
      <div className="p-5 flex flex-row justify-between item-center">
        <Link to="/" className="flex gap-2 md:gap-2 sm:gap-2 item-center">
          <span><img src={Logo} alt="Site logo" className="w-[45px] md:w-[50px] sm:w-[50px]" /></span>
          <span className="mt-2 text-[#A03] md:block sm:block">Life Force</span>
        </Link>
        <div className="flex gap-5 md:gap-10 sm:gap-10 item-center">
          <button type="button" onClick={openMenu} className="">
            <FontAwesomeIcon icon={faBars} className="text-[30px] text-[#A03]" />
          </button>
        </div>
      </div>
      {!isOpen ? '' : (<div className="z-50"><MobileDropDown /></div>)}
    </div>
  );
};
export default MobileHeader;
