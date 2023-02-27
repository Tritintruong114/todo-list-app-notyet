// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 0 },
  ]);

  const [showInComplete, setShowInComplete] = useState(true);
  const [newTask, setNewTask] = useState("");
  return (
    <div className="App">
      {/* <h1>This is ToDo List App - By Bruno Truong</h1> */}
      <div className="container-dailytask">
        <h1 className="title">
          Daily Task
          <span>Get things done, one item at a time.</span>
        </h1>
        {/* <span>Get things done, one item at a time.</span> */}
        <ul className="task-list">
          {tasks
            .filter((task) => (showInComplete ? task.status !== 1 : true))
            .map((task) => (
              <li key={task.id} className={task.status ? "done" : ""}>
                <span className="label">{task.title}</span>
                <div className="actions">
                  <input
                    type="checkbox"
                    className="btn-action btn-action-done"
                  ></input>
                  <button className="btn-action btn-action-delete">X</button>
                </div>
              </li>
            ))}
          <li>
            <span className="label">Do a calendar libary</span>
            <div className="actions">
              <input
                type="checkbox"
                className="btn-action btn-action-done"
              ></input>
              <button className="btn-action btn-action-delete">X</button>
            </div>
          </li>
          <li>
            <span className="label">Learn ReactJS</span>
            <div className="actions">
              <input
                type="checkbox"
                className="tn-baction btn-action-done"
              ></input>
              <button className="btn-action btn-action-delete">X</button>
            </div>
          </li>
        </ul>
        <div className="filter-wrapper">
          <label htmlFor="filter">Show incompleted tasks only</label>
          <input type="checkbox" id="filter" checked={showInComplete}></input>
        </div>

        <form action="#" className="form">
          <label htmlFor="newitem">Add to the todo list</label>
          <input type="text" id="newitem" value={newTask}></input>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
