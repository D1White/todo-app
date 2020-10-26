import React from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/user";

import chechIco from '../assets/ico/calendar-check.svg';

const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userIsLoaded = useSelector(({ user }) => user.isLoaded);
  const user = useSelector(({ user }) => user.user);

  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const SignIn = () => {
    if (regex.test(mail) && password.length > 0) {
      dispatch(loginUser(mail, password));
    }else{
      alert('Не правильный формат почты или пароля!');
    }
  }

  React.useEffect(() => {
    if (userIsLoaded && user) {

      if (user.confirmed) {
        history.push('/');  
      }else {
        alert('Подтвердите почту!')
      }

    }
  }, [userIsLoaded])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="auth-main">
      {/* { !!localStorage.getItem("token") ? (<Redirect push to="/" />) : null } */}
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
            <a href="http://localhost:3000/register" className="auth__link">
              no account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
