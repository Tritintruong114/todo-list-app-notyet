import React, { useState, useEffect } from "react";
import event from "./event.css";

const Event = () => {
  return (
    <div className="eventContainer">
      <h2>Incoming Event</h2>
      <ul className="eventUnderList">
        <li>
          Event
          <label>23/3/20</label>
        </li>
        <li>
          Event
          <label>23/3/20</label>
        </li>
      </ul>
    </div>
  );
};

export default Event;
