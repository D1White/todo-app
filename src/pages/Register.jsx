import React from 'react'

import { Redirect, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/user";

import chechIco from '../assets/ico/calendar-check.svg';

const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function Register() {
  const dispatch = useDispatch();

  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [buttonClick, setButtonClick] = React.useState(false);

  const SignIn = () => {
    if (regex.test(mail) && password.length > 6) {
      dispatch(registerUser(mail, password, password2));
      setButtonClick(true);
    }else{
      alert('Не правильный формат почты или пароля!');
    }
  }

  return (
    <div className="auth-main">
      { buttonClick ? (<Redirect push to="/login" />) : null }
      <img src={chechIco} alt="todo" />
      <div className="main__circle"></div>
      <div className="main__rectangle">
        <div className="auth-container">
          <span className="auth__header">Email:</span>
          <input type="text" className="auth__input" value={mail} onChange={(e) => setMail(e.target.value)} />
          <span className="auth__header">Password:</span>
          <input type="password" className="auth__input" value={password} onChange={(e) => setPassword(e.target.value)} />
          <span className="auth__header">Repeat Password:</span>
          <input type="password" className="auth__input" value={password2} onChange={(e) => setPassword2(e.target.value)} />

          <div className="auth__buttons">
            <button className="auth__button" onClick={SignIn}>Sign In</button>
            <Link to="/login">
              <span className="auth__link">
                have an account?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
