import React from "react";

import logo from "../assets/ico/logo.svg";
import setIco from "../assets/ico/setting.svg";
import exitIco from "../assets/ico/exit.svg";

import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { logoutUser } from "../redux/actions/user";

const Header = React.memo(function Header() {
  const dispatch = useDispatch();
  const date = new Date();
  const dateArr = date.toString().split(" ").slice(1, 4);

  const [buttonClick, setButtonClick] = React.useState(false);

  const userExit = () => {
    dispatch(logoutUser());
    setButtonClick(true);
  }

  return (
    <header>
      { buttonClick ? (<Redirect push to="/login" />) : null }
      <div className="header-container">
        <img src={logo} alt="Logo" className="header__logo" />
        <div className="header__content">
          <span className="header__data">{`${dateArr[1]} ${dateArr[0]} ${dateArr[2]}`}</span>
          <img src={setIco} alt="setting" className="header__ico" />
          <img src={exitIco} alt="exit" className="header__ico" onClick={userExit} />
        </div>
      </div>
    </header>
  );
});

export default Header;
