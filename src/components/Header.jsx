import React from 'react';
import logoSvg from '../assets/images/logo.svg';
import ClockBlock from './ClockBlock';

const Header = () => {
  return (
    <div className="header py-10 px-0">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img className="w-14 h-14 mr-3" src={logoSvg} />
          <div>
            <h1 className="text-sky-900 text-2xl">Weather App</h1>
            <p className="text-sky-700">Your personal weatherman</p>
          </div>
        </div>
        <ClockBlock />
      </div>
    </div>
  );
};

export default Header;
