import React from "react";
import { useDispatch } from "react-redux";

import { createList } from "../redux/actions/lists";

function NewListInput({ hideListInput }) {
  const dispatch = useDispatch();

  const inputRef = React.useRef();

  const [newListName, setNewListName] = React.useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      hideListInput();
      dispatch(createList(newListName));
    }
  }

  const handleListIOutsideClick = (event) => { 
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(inputRef.current)) {
      hideListInput();
    }
  }

  React.useEffect(() => {
    document.body.addEventListener("click", handleListIOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleListIOutsideClick);
    }
  })

  return (
    <div className="injectTask" ref={inputRef} >
      <input type="text" className="newList_input" onKeyDown={handleKeyDown} value={newListName} onChange={(e) => setNewListName(e.target.value)} />
    </div>
  );
}

export default NewListInput;
