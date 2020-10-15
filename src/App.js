import React from "react";


import calCheckIco from './assets/ico/calendar-check.svg';
import userIco from './assets/ico/user.svg';
import trAltIco from './assets/ico/trash-alt_lite.svg';
import edit from './assets/ico/edit.svg';


import { Header, Task, List } from "./components";

function App() {

  const tasks = ['Купить молоко', 'Купить pizza', 'Купить xbox'];
  const lists = ['Поездка 2020', 'dev'];

  return (
    <div>
      <Header />
      <div className="main">
        <div className="leftBar">
          <div className="leftBar-container">
            <div className="leftBar__todo">
              <img src={calCheckIco} alt="Todo" />
              <h3 className="leftBar__title active">To Do</h3>
            </div>

            <div className="leftBar__lists">
              <div className="lists__header">
                <img src={userIco} alt="Lists" />
                <h3 className="leftBar__title">Lists</h3>
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lists__arrow"
                >
                  <path
                    d="M13.5281 8.35419L1.46716 8.35419C0.632782 8.35419 0.215594 7.33571 0.806219 6.73883L6.83434 0.642185C7.19997 0.272691 7.79528 0.272691 8.16091 0.642185L14.189 6.73883C14.7797 7.33571 14.3625 8.35419 13.5281 8.35419Z"
                    fill="black"
                  />
                </svg>
              </div>

              <ul className="custom-lists">
                {lists && 
                lists.map((obj) => (
                  <List name={obj} color={'green'} key={`${obj}_${obj.index}`} />
                ))
              }
              </ul>
            </div>

            <div className="button-block">
              <button className="leftBar__button">+</button>
            </div>
          </div>
        </div>

        <div className="rigtBar">
          <div className="rightBar-container">
            <div className="rightBar__header">
              <h2 className="rightBar__title">Поездка 2020</h2>
              <div className="rightBar__icons">
                <img src={edit} alt="edit" className="rightBar__ico" />
                <img
                  src={trAltIco}
                  alt="delete"
                  className="rightBar__ico"
                />
              </div>
            </div>
            <ul className="rightBar__tasks">
              {tasks && 
                tasks.map((obj) => (
                  <Task name={obj} index={obj.index} key={`${obj}_${obj.index}`}/>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
