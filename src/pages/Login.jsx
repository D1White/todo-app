import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/user";

import chechIco from '../assets/ico/calendar-check.svg';

const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function Login() {
  const dispatch = useDispatch();

  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const SignIn = () => {
    if (regex.test(mail) && password.length > 0) {
      dispatch(loginUser(mail, password));
    }else{
      alert('Не правильный формат почты или пароля!');
    }
  }

  return (
    <div className="auth-main">
      <img src={chechIco} alt="todo" />
      <div className="main__circle"></div>
      <div className="main__rectangle">
        <div className="auth-container">
          <span className="auth__header">Email:</span>
          <input type="text" className="auth__input" value={mail} onChange={(e) => setMail(e.target.value)} />
          <span className="auth__header">Password:</span>
          <input type="password" className="auth__input" value={password} onChange={(e) => setPassword(e.target.value)} />

          <div className="auth__buttons">
            <button className="auth__button" onClick={SignIn}>Sign In</button>
            <a href="http://localhost:3000/login" className="auth__link">
              no account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
