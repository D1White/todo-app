import axios from "axios";

import { setTasks } from "../actions/tasks";

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

export const createList = (listName) => (dispatch) => {
  const postBody = {
    name: listName,
    color: 0,
  };

  const headerConfig = {
    headers: { token: localStorage.getItem("token") }
  }

  axios.post(`http://localhost:3001/lists`, postBody, headerConfig).then(({ data }) => {
    dispatch(fetchList());
  });
};

export const deleteList = (listId) => (dispatch) => {

  const headerConfig = {
    headers: { token: localStorage.getItem("token") }
  }

  axios.delete(`http://localhost:3001/lists/${listId}`, headerConfig).then(() => {
    dispatch(fetchList());
    dispatch(isActiveList(null, ''));
  });
};


export const isActiveList = (activeList, listId) => (dispatch) => {

  dispatch(setActiveListID(listId));
  dispatch(setActiveList(activeList));
  if (listId) {
    axios.get(`http://localhost:3001/lists/${listId}`).then(({ data }) => {
      dispatch(setTasks(data.data));
    });
  }

};

export const setList = (list) => ({
  type: "SET_LIST",
  payload: list,
});

export const setActiveList = (activeList) => ({
  type: "SET_ACTIVE_LIST",
  payload: activeList,
});

export const setActiveListID = (activeListID) => ({
  type: "SET_ACTIVE_LIST_ID",
  payload: activeListID,
});