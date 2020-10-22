import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateList } from "../redux/actions/lists";
import { setActiveList } from "../redux/actions/lists";

const colorArr = ["red", "orange", "green", "yellow"];

function List({ name, color, id, listIndex }) {

  const dispatch = useDispatch();

  const activeList = useSelector(({ lists }) => lists.activeList);

  const changeCircleCol = () => {
    if (color < 3) {
      dispatch(updateList(id, name, color + 1));
    } else {
      dispatch(updateList(id, name, 0));
    }
  };

  const listClick = () => {
    dispatch(setActiveList(listIndex));
  }

  return (
    <li className="custom-list" onClick={listClick}>
      <div
        className={`custom-list__circle ${colorArr[color]}`}
        onClick={changeCircleCol}
      ></div>
      <span className={`custom-list__name ${ activeList === listIndex ? 'active' : '' }`}>{name}</span>
      <span className="custom-list__success">50%</span>
    </li>
  );
}

export default List;
