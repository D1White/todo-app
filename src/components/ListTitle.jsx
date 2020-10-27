import React from "react";
import { useDispatch } from "react-redux";

import trAltIco from "../assets/ico/trash-alt_lite.svg";

import { deleteList, updateList } from "../redux/actions/lists";

const ListTitle = React.memo(function ListTitle({
  lists,
  activeList,
  activeListID,
}) {
  const dispatch = useDispatch();

  const listRef = React.useRef();

  const deleteActiveList = () => {
    dispatch(deleteList(activeListID));
  };

  const updateListName = (newListName) => {
    dispatch(updateList(activeListID, newListName, lists[activeList].color));
  };

  const handleListTitleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(listRef.current)) {
      console.log("click");
      updateListName(listRef.current.innerText);
      document.body.removeEventListener("click", handleListTitleOutsideClick);
    }
  };

  const addListener = () => {
    document.body.addEventListener("click", handleListTitleOutsideClick);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Enter");
      updateListName(listRef.current.innerText);
      document.body.removeEventListener("click", handleListTitleOutsideClick);
      event.preventDefault();
    }
  };

  const disablePast = (event) => {
    event.preventDefault();
  }


  return (
    <div className="rightBar__header">
      <h2
        className="rightBar__title"
        ref={listRef}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onClick={addListener}
        onKeyDown={handleKeyDown}
        onPaste={disablePast}
      >
        {`${activeList !== null ? lists[activeList].name : "Chose list"}`}
      </h2>
      <div className="rightBar__icons">
        <img
          src={trAltIco}
          alt="delete"
          className="rightBar__ico"
          onClick={deleteActiveList}
        />
      </div>
    </div>
  );
});

export default ListTitle;
