import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { createTask } from "../redux/actions/tasks";

function NewTaskInput({ hideTaskInput }) {
  const dispatch = useDispatch();

  const taskInputRef = React.useRef();

  const { activeListID } = useSelector(({ lists }) => lists);

  const [newTaskName, setNewTaskName] = React.useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      hideTaskInput();
      dispatch(createTask(newTaskName, activeListID));
    }
  }

  const handleTaskIOutsideClick = (event) => { 
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(taskInputRef.current)) {
      hideTaskInput();
    }
  }

  React.useEffect(() => {
    document.body.addEventListener("click", handleTaskIOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleTaskIOutsideClick);
    }
  })

  return (
    <div className="injectTask" ref={taskInputRef} >
      <input type="text" className="newTask__input" onKeyDown={handleKeyDown} value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
    </div>
  );
}

export default NewTaskInput;
