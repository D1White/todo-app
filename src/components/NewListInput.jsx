import React from "react";
import { useDispatch } from "react-redux";

import { createList } from "../redux/actions/lists";

function NewListInput({ hideListInput }) {
  const dispatch = useDispatch();

  const [newListName, setNewListName] = React.useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      hideListInput();
      dispatch(createList(newListName));
    }
  }

  return (
    <div className="injectTask">
      <input type="text" className="newList_input" onKeyDown={handleKeyDown} value={newListName} onChange={(e) => setNewListName(e.target.value)} />
    </div>
  );
}

export default NewListInput;
