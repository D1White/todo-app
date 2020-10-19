import React from "react";

import logo from "../assets/ico/logo.svg";
import setIco from "../assets/ico/setting.svg";
import exitIco from "../assets/ico/exit.svg";

import { Link } from "react-router-dom";

function Header() {
  const date = new Date();
  const dateArr = date.toString().split(" ").slice(1, 4);

  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="Logo" className="header__logo" />
        <div className="header__content">
          <span className="header__data">{`${dateArr[1]} ${dateArr[0]} ${dateArr[2]}`}</span>
          <img src={setIco} alt="setting" className="header__ico" />
          <Link to="/login">
            <img src={exitIco} alt="exit" className="header__ico" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
