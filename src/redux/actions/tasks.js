import axios from "axios";

export const setLoadedTasks = (payload) => ({
  type: "SET_LOADED_TASK",
  payload,
});

export const fetchTask = () => (dispatch) => {
  dispatch(setLoadedTasks(false));

  axios.get("http://localhost:3001/tasks").then(({ data }) => {
    // console.log(data.data);
    dispatch(setTasks(data.data));
  });
};

export const setTasks = (task) => ({
  type: "SET_TASK",
  payload: task,
});
