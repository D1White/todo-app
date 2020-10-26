import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { updateList } from "../redux/actions/lists";
import { isActiveList } from "../redux/actions/lists";

const colorArr = ["red", "orange", "green", "yellow"];

function List({ name, color, id, listIndex }) {

  const dispatch = useDispatch();

  const activeList = useSelector(({ lists }) => lists.activeList);

  const [comlProc, setComlProc] = React.useState(0)

  const changeCircleCol = () => {
    if (color < 3) {
      dispatch(updateList(id, name, color + 1));
    } else {
      dispatch(updateList(id, name, 0));
    }
  };

  const listClick = () => {
    dispatch(isActiveList(listIndex, id));
  }

  const percentageCalc = (listId) => {
    let complatedTasks = 0;
    if (listId) {
      axios.get(`https://todo-backend-server.herokuapp.com/lists/${listId}`).then(({ data }) => {
        data.data.forEach(e => {
          if (e.done) {
            complatedTasks++
          }
        });
        setComlProc(Math.round(complatedTasks * 100 / data.data.length));
      });
    }
  }

  React.useEffect(() => {
    percentageCalc(id);
  })

  return (
    <li className="custom-list" onClick={listClick}>
      <div
        className={`custom-list__circle ${colorArr[color]}`}
        onClick={changeCircleCol}
      ></div>
      <span className={`custom-list__name ${ activeList === listIndex ? 'active' : '' }`}>{name}</span>
      <div className="custom-list__success">
        <span className="custom-list__success-text">{`${comlProc}%`}</span>
      </div>
    </li>
  );
}

export default List;
