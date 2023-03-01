import React, { useState, useEffect } from "react";
import event from "./event.css";

const Event = () => {
  return (
    <div className="eventContainer">
      <h2 className="eventTilte">Incoming Event</h2>
      <ul className="eventUnderList">
        <li className="singleList">
          Event
          <label>23/3/20</label>
        </li>
        <li className="singleList">
          Event
          <label>23/3/20</label>
        </li>
      </ul>

      <form className="eventInfomationContainer">
        <label className="newEvent" htmlFor="newEvent">
          Add Event
        </label>
        <div className="addEventContainer">
          <input className="event inputEvent"></input>
          <input className="date inputEvent"></input>
          <button className="eventAddBtn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Event;
