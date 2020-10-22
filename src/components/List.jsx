import React from "react";
import { useDispatch } from "react-redux";
import { updateList } from "../redux/actions/lists";

const colorArr = ["red", "orange", "green", "yellow"];

function List({ name, color, id }) {
  const dispatch = useDispatch();

  const changeCircleCol = () => {
    if (color < 3) {
      dispatch(updateList(id, name, color + 1));
    } else {
      dispatch(updateList(id, name, 0));
    }
  };

  return (
    <li className="custom-list">
      <div
        className={`custom-list__circle ${colorArr[color]}`}
        onClick={changeCircleCol}
      ></div>
      <span className="custom-list__name">{name}</span>
      <span className="custom-list__success">50%</span>
    </li>
  );
}

export default List;
