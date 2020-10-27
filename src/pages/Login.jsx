import React from "react";

import { useHistory, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/user";

import chechIco from "../assets/ico/calendar-check.svg";

const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userIsLoaded = useSelector(({ user }) => user.isLoaded);
  const user = useSelector(({ user }) => user.user);

  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authWarning, setAuthWarning] = React.useState("");

  const LoginValidation = () => {
    if (!regex.test(mail)) {
      setAuthWarning("🛑 Не правильный формат почты!");
      return false;
    }
    if (!password.length) {
      setAuthWarning("🛑 Введите пароль!");
      return false;
    }
    setAuthWarning("");
    return true;
  };

  const SignIn = () => {
    if (LoginValidation()) {
      dispatch(loginUser(mail, password));
    }
  };

  React.useEffect(() => {
    if (userIsLoaded && user) {
      if (user.confirmed) {
        history.push("/");
      } else {
        setAuthWarning("⚠ Подтвердите почту!");
      }
    }
  }, [userIsLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="auth-main">
      {/* { !!localStorage.getItem("token") ? (<Redirect push to="/" />) : null } */}
      <img src={chechIco} alt="todo" />
      <div className="main__circle"></div>
      <div className="main__rectangle">
        <div className="auth-container">
          <span className="auth__header">Email:</span>
          <input
            type="text"
            className="auth__input"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <span className="auth__header">Password:</span>
          <input
            type="password"
            className="auth__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {authWarning && (
            <div className="auth-warning">
              <span className="auth-warning__text">{authWarning}</span>
            </div>
          )}

          <div className="auth__buttons">
            <button className="auth__button" onClick={SignIn}>
              Sign In
            </button>
            <Link to="/register">
              <span className="auth__link">no account?</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
