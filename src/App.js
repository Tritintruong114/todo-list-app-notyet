// import logo from "./logo.svg";
import "./App.css";

function App() {
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
          <li>
            <span className="label">Code a ReactJS App</span>
            <div className="actions">
              <input
                type="checkbox"
                className="btn-action btn-action-done"
              ></input>
              <button className="btn-action btn-action-delete">X</button>
            </div>
          </li>
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
          <label for="filter">Show incompleted tasks only</label>
          <input type="checkbox"></input>
        </div>

        <form className="form">
          <label>Add to the todo list</label>
          <input type="text"></input>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
