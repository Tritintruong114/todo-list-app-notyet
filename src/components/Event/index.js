import React, { useState, useEffect } from "react";
import styles from "./styles.css";

const Event = () => {
  const [events, setEvents] = useState([
    { id: "Event-2", title: "Meeting Doctor", date: "03/02/2023", status: 1 },
    { id: "Event-1", title: "Meeting Mentor", date: "08/02/2023", status: 0 },
  ]);

  const [newEvent, setNewEnvent] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    if (newEvent) {
      const event = {
        title: newEvent,
      };
      setEvents([...events, event]);
      setNewEnvent("");
    }
  };

  const handleInputAdding = (e) => {
    setNewEnvent(e.target.value);
  };

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

      <form onSubmit={handleSumit} className="eventInfomationContainer">
        <label className="newEvent" htmlFor="newEvent">
          Add Event
        </label>
        <div className="addEventContainer">
          <input
            type="text"
            className="event inputEvent"
            value={newEvent}
            onChange={handleInputAdding}
          ></input>
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
