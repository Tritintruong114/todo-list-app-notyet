import React, { useState, useEffect } from "react";
import event from "./event.css";

const Event = () => {
  const [events, setEvents] = useState([
    { id: "Event-2", title: "Meeting Doctor", date: "03/02/2023", status: 1 },
    { id: "Event-1", title: "Meeting Mentor", date: "08/02/2023", status: 0 },
  ]);

  const removeEvent = (eventID) => {
    setEvents(events.filter((event) => event.id !== eventID));
  };
  return (
    <div className="eventContainer">
      <h2 className="eventTilte">Incoming Event</h2>
      <ul className="eventUnderList">
        {events.map((event) => (
          <li className="singleList">
            {event.title}
            <label className="eventDate">{event.date}</label>
            <button onClick={() => removeEvent(event.id)} className="eventBtn">
              x
            </button>
          </li>
        ))}
      </ul>

      <form className="eventInfomationContainer">
        <label className="newEvent" htmlFor="newEvent">
          Add Event
        </label>
        <div className="addEventContainer">
          <input className="event inputEvent"></input>
          <input className="date inputEvent"></input>
          <button className="eventAddBtn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Event;
