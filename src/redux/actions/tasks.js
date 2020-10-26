import axios from "axios";

export const setLoadedTasks = (payload) => ({
  type: "SET_LOADED_TASK",
  payload,
});

export const fetchTask = () => (dispatch) => {
  dispatch(setLoadedTasks(false));

  axios.get("https://todo-backend-server.herokuapp.com/tasks").then(({ data }) => {
    // console.log(data.data);
    dispatch(setTasks(data.data));
  });
};

export const loadList = (listId) => (dispatch) => {
  axios.get(`https://todo-backend-server.herokuapp.com/lists/${listId}`).then(({ data }) => {
    dispatch(setTasks(data.data));
  });
};

export const createTask = (taskName, listId) => (dispatch) => {
  
  if (listId !== null) {
    const postBody = {
      task: taskName,
      list_id: listId,
    };
  
    const headerConfig = {
      headers: { token: localStorage.getItem("token") }
    }
  
    axios.post(`https://todo-backend-server.herokuapp.com/tasks`, postBody, headerConfig).then(({ data }) => {
      dispatch(loadList(listId));
    });
  }else{
    alert('Error :( Try again!');
  }

};

export const deleteTask = (taskId, listId) => (dispatch) => {

  const headerConfig = {
    headers: { token: localStorage.getItem("token") }
  }

  axios.delete(`https://todo-backend-server.herokuapp.com/tasks/${taskId}`, headerConfig).then(({ data }) => {
    dispatch(loadList(listId));
  });
};

export const doTask = (taskId, listId, taskName, done) => (dispatch) => {

  const patchBody = {
    task: taskName,
    done: done,
  };

  const headerConfig = {
    headers: { token: localStorage.getItem("token") }
  }

  axios.patch(`https://todo-backend-server.herokuapp.com/tasks/${taskId}`, patchBody, headerConfig).then(({ data }) => {
    dispatch(loadList(listId));
  });
};


export const setTasks = (task) => ({
  type: "SET_TASK",
  payload: task,
});
