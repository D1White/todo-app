import React from 'react'

import logo from '../assets/ico/logo.svg';
import setIco from '../assets/ico/setting.svg';
import exitIco from '../assets/ico/exit.svg';

function Header() {
  return (
    <header>
        <div className="header-container">
          <img src={logo} alt="Logo" className="header__logo" />
          <div className="header__content">
            <span className="header__data">11 Aug 2020</span>
            <img src={setIco} alt="setting" className="header__ico" />
            <img src={exitIco} alt="exit" className="header__ico" />
          </div>
        </div>
      </header>
  )
}

export default Header
