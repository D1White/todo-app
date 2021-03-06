import axios from "axios";

export const setLoadedUser = (payload) => ({
  type: "SET_LOADED_USER",
  payload,
});

export const loadUser = () => (dispatch) => {
  dispatch(setLoadedUser(false));
  
  if (localStorage.getItem("token")) {
    axios
      .get("https://todo-backend-server.herokuapp.com/users/me", {
        headers: { token: localStorage.getItem("token") },
      })
      .then(({ data }) => {
        // console.log(data);
        dispatch(setUser(data.data));
      });
  } else {
    console.log("no token!");
  }
};

export const loginUser = (mail, password) => (dispatch) => {
  // dispatch(setLoadedUser(false));

  const postBody = {
    email: mail,
    password: password,
  };

  axios.post("https://todo-backend-server.herokuapp.com/auth/login", postBody).then(({ data }) => {
    if (data.data.confirmed) {
      localStorage.setItem("token", data.data.token);
      dispatch(loadUser());
    }else{
      alert('⚠ Подтвердите почту!');
    }
   
  });
};

export const registerUser = (mail, password, password2) => (dispatch) => {
  const postBody = {
    email: mail,
    password: password,
    password2: password2,
  };

  axios
    .post("https://todo-backend-server.herokuapp.com/auth/register", postBody)
    .then(({ data }) => {
      console.log(data);
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setUser({}));
  dispatch(setLoadedUser(false));
};



export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});
