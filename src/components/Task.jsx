import React from "react";

import trash_alt from "../assets/ico/trash-alt.svg";

function Task({ name, index }) {
  const [active, setActive] = React.useState(false);

  const checkboxClick = () => {
    setActive(!active);
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
      <img src={trash_alt} alt="delete" className="task__del" />
    </li>
  );
}

export default Task;
