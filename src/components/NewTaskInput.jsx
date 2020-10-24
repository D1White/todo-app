import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { createTask } from "../redux/actions/tasks";

function NewTaskInput({ hideTaskInput }) {
  const dispatch = useDispatch();

  const { activeListID } = useSelector(({ lists }) => lists);

  const [newTaskName, setNewTaskName] = React.useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      hideTaskInput();
      dispatch(createTask(newTaskName, activeListID));
    }
  }

  return (
    <div className="injectTask">
      <input type="text" className="newTask__input" onKeyDown={handleKeyDown} value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
    </div>
  );
}

export default NewTaskInput;
