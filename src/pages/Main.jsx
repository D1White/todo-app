import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import calCheckIco from "../assets/ico/calendar-check.svg";
import userIco from "../assets/ico/user.svg";
import trAltIco from "../assets/ico/trash-alt_lite.svg";
import edit from "../assets/ico/edit.svg";

import { Header, Task, List, NewListInput, NewTaskInput } from "../components";

import { loadUser } from "../redux/actions/user";
import { fetchList, isActiveList, deleteList } from "../redux/actions/lists";

function Main() {

  const dispatch = useDispatch();

  const tasks = useSelector(({ tasks }) => tasks.task);
  const tasksIsLoaded = useSelector(({ tasks }) => tasks.isLoaded);
  const lists = useSelector(({ lists }) => lists.list);
  const {activeList, activeListID} = useSelector(({ lists }) => lists);

  const [minimize, setMinimize] = React.useState(false);
  const [displayListInput, setDisplayListInput] = React.useState(false);
  const [displayTaskInput, setDisplayTaskInput] = React.useState(false);
  
  React.useEffect(() => {
    dispatch(loadUser());
    dispatch(fetchList());
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const listClick = () => {
    dispatch(isActiveList(null));
  }

  const minimizeLists = () => {
    setMinimize(!minimize);
  }

  const createNewList = () => {
    setDisplayListInput(true);
    // dispatch(createList());
  }

  const hideListInput = () => {
    setDisplayListInput(false);
  }

  const deleteActiveList = () => {
    dispatch(deleteList(activeListID));
  }

  const createNewTask = () => {
    setDisplayTaskInput(true);
  }

  const hideTaskInput = () => {
    setDisplayTaskInput(false);
  }
  
  return (
    <div>
    <Header />
    <div className="main">
      <div className="leftBar">
        <div className="leftBar-container">
          {/* <div className="leftBar__todo" onClick={listClick}>
            <img src={calCheckIco} alt="Todo" />
            <h3 className={`leftBar__title ${ activeList === null ? 'active' : '' }`}>To Do</h3>
          </div> */}

          <div className="leftBar__lists">
            <div className="lists__header" onClick={minimizeLists}>
              <img src={userIco} alt="Lists" />
              <h3 className="leftBar__title">Lists</h3>
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`lists__arrow ${minimize ? 'flipped' : ''}`}
              >
                <path
                  d="M13.5281 8.35419L1.46716 8.35419C0.632782 8.35419 0.215594 7.33571 0.806219 6.73883L6.83434 0.642185C7.19997 0.272691 7.79528 0.272691 8.16091 0.642185L14.189 6.73883C14.7797 7.33571 14.3625 8.35419 13.5281 8.35419Z"
                  fill="black"
                />
              </svg>
            </div>

            { !minimize && (
              <ul className="custom-lists">
              {lists &&
                lists.map((obj, index) => (
                  <List
                    name={obj.name}
                    color={obj.color}
                    id={obj._id}
                    listIndex={index}
                    key={`${index}_${obj._id}`}
                  />
                ))}
              </ul>
            )}
            { displayListInput && <NewListInput hideListInput={hideListInput} />}
          </div>

          <div className="button-block">
            <button className="leftBar__button" onClick={createNewList}>+</button>
          </div>
        </div>
      </div>

      <div className="rigtBar">
        <div className="rightBar-container">
        { activeList !== null && (
          <div className="rightBar__header">
            <h2 className="rightBar__title">
              {`${activeList !== null ? lists[activeList].name : 'Chose list'}`}
            </h2>
            <div className="rightBar__icons">
              <img src={edit} alt="edit" className="rightBar__ico" />
              <img src={trAltIco} alt="delete" className="rightBar__ico" onClick={deleteActiveList} />
            </div>
          </div> 
        )}    
          <ul className="rightBar__tasks">
            {tasksIsLoaded &&
              tasks.map((obj, index) => (
                <Task
                  name={obj.task}
                  id={obj._id}
                  listId={activeListID}
                  index={index}
                  key={`${index}_${obj._id}`}
                />
              ))}
            { displayTaskInput && <NewTaskInput hideTaskInput={hideTaskInput} />}
          </ul>
          
          { activeList !== null && (
            <div className="rightBar__addTask" onClick={createNewTask}>
              <span className="addTask__plus">+</span>
              <span className="addTask__text">добавить задание</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main
