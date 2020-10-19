import axios from "axios";

export const loginUser = (mail, password) => (dispatch) => {

  const postBody = {
    email: mail,
    password: password
  }

  axios.post('http://localhost:3001/auth/login', postBody).then(({ data }) => {
    console.log(data);
    dispatch(setUser(data.data));
  });
};

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});