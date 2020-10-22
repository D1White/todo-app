import axios from "axios";

export const fetchList = () => (dispatch) => {
  axios.get("http://localhost:3001/lists", { headers: { token: localStorage.getItem("token") } }).then(({ data }) => {
    // console.log(data.data);
    dispatch(setList(data.data));
  });
};

export const updateList = (id, name, color) => (dispatch) => {

  const patchBody = {
    name: name,
    color: color,
  };

  const headerConfig = {
    headers: { token: localStorage.getItem("token") }
  }

  axios.patch(`http://localhost:3001/lists/${id}`, patchBody, headerConfig).then(({ data }) => {
    dispatch(fetchList());
  });

  
};

export const setList = (list) => ({
  type: "SET_LIST",
  payload: list,
});
