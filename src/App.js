// import logo from "./logo.svg";
import background from "./background.jpeg"
import "./App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Timer from "./Timer.js";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 1 },
    { id: "task_2", title: "Code a Todo List", status: 1 },
  ]);

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const [showInComplete, setShowInComplete] = useState(false);
  const [newTask, setNewTask] = useState("");
  return (
    <div className="App">
    <image src=""
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
                    checked={Boolean(task.status)}
                    onChange={(e) => setTaskStatus(task.id, e.target.checked)}
                  ></input>
                  <button
                    onClick={() => removeTask(task.id)}
                    className="btn-action btn-action-delete"
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
        </ul>
        <div className="filter-wrapper">
          <label htmlFor="filter">Show incompleted tasks only</label>
          <input
            type="checkbox"
            id="filter"
            checked={showInComplete}
            onChange={(e) => setShowInComplete(e.target.checked)}
          ></input>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="newitem">Add to the todo list</label>
          <input
            type="text"
            id="newitem"
            value={newTask}
            onChange={handleInputChange}
          ></input>
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="calender-react">
        <Calendar onChange={onChange} value={date} />
      </div>

      <div className="timer-react">
        <Timer />
      </div>
    </div>
  );
}

export default App;
