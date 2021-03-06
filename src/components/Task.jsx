import React from "react";

import { useDispatch } from "react-redux";

import { deleteTask, doTask } from "../redux/actions/tasks";

import trash_alt from "../assets/ico/trash-alt.svg";

const Task = React.memo(function Task({ name, index, id, listId, done }) {
  const dispatch = useDispatch();

  const taskRef = React.useRef();

  const [active, setActive] = React.useState(done);

  const checkboxClick = () => {
    dispatch(doTask(id, listId, name, !active));
    setActive(!active);
  };

  const delTask = () => {
    dispatch(deleteTask(id, listId));
  };

  const updateTask = (newTask) => {
    dispatch(doTask(id, listId, newTask, active));
  };

  const handleTaskOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(taskRef.current)) {
      console.log("click");
      updateTask(taskRef.current.innerText);
      document.body.removeEventListener("click", handleTaskOutsideClick);
    }
  };

  const addListener = () => {
    document.body.addEventListener("click", handleTaskOutsideClick);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Enter");
      updateTask(taskRef.current.innerText);
      document.body.removeEventListener("click", handleTaskOutsideClick);
      event.preventDefault();
    }
  };

  const disablePast = (event) => {
    event.preventDefault();
  }

  return (
    <li className="rightBar__task">
      <input
        type="checkbox"
        name="task"
        /*id={`todo_${index}`}*/
        className="task__checkbox"
        checked={active}
        onChange={checkboxClick}
      />
      <label
        htmlFor={`todo_${index}`}
        className={`task__text ${active ? "done" : ""}`}
        ref={taskRef}
        contentEditable="true"
        onClick={addListener}
        onKeyDown={handleKeyDown}
        onPaste={disablePast}
        suppressContentEditableWarning={true}
      >
        {name}
      </label>
      <img
        src={trash_alt}
        alt="delete"
        className="task__del"
        onClick={delTask}
      />
    </li>
  );
});

export default Task;
