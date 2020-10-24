import React from "react";

import { useDispatch } from "react-redux";

import { deleteTask } from "../redux/actions/tasks";

import trash_alt from "../assets/ico/trash-alt.svg";

const Task = React.memo(function Task({ name, index, id, listId }) {
  const dispatch = useDispatch();

  const [active, setActive] = React.useState(false);

  const checkboxClick = () => {
    setActive(!active);
  };

  const delTask = () => {
    dispatch(deleteTask(id, listId));
  };

  return (
    <li className="rightBar__task">
      <input
        type="checkbox"
        name="task"
        /*id={`todo_${index}`}*/
        className="task__checkbox"
        onClick={checkboxClick}
      />
      <label htmlFor={`todo_${index}`} className={`task__text ${active ? "done" : ""}`}>
        {name}
      </label>
      <img src={trash_alt} alt="delete" className="task__del" onClick={delTask} />
    </li>
  );
});

export default Task;
