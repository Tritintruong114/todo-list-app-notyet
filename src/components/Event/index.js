import React, { useState } from "react";
import "./styles.css";

const Event = () => {
  const [events, setEvents] = useState([
    { id: "Event-2", title: "Meeting Krys", date: "03/02/2023", status: 1 },
    { id: "Event-1", title: "Meeting Luuu", date: "01/02/2023", status: 0 },
    { id: "Event-3", title: "Meeting Ms Mai ", date: "07/02/2023", status: 0 },
    { id: "Event-4", title: "Meeting Ms Hien", date: "02/02/2023", status: 0 },
    { id: "Event-5", title: "Meeting Ms Toan", date: "08/02/2023", status: 0 },
    { id: "Event-6", title: "Meeting Mentor", date: "06/02/2023", status: 0 },
    {
      id: "Event-7",
      title: "Meeting Ms Friends",
      date: "08/02/2023",
      status: 0,
    },
  ]);

  const [newEvent, setNewEnvent] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();

    if (newEvent && newDate) {
      const event = {
        id: Date.now(),
        title: newEvent,
        date: newDate,
      };
      setEvents([...events, event]);
      setNewEnvent("");
      setNewDate("");
    }
    // if (newDate || newEvent) {
    //   const event = {
    //     title: "please check",
    //   };
    //   setEvents([...events, event]);
    //   setNewEnvent("");
    //   setNewDate("");
    // }
  };

  const handleInputEvent = (e) => {
    setNewEnvent(e.target.value);
  };

  const handleInputDate = (e) => {
    setNewDate(e.target.value);
  };
  const removeEvent = (eventID) => {
    // setEvents(events.filter((event) => event.id !== eventID));
    setEvents(events.filter((event) => event.id !== eventID));
  };
  return (
    <div className="eventContainer">
      <h2 className="eventTilte">Incoming Event</h2>
      <ul className="eventUnderList">
        {events.map((event) => (
          <li key={event.id} className="singleList">
            {event.title}
            <label className="eventDate">{event.date}</label>
            <button onClick={() => removeEvent(event.id)} className="eventBtn">
              x
            </button>
          </li>
        ))}
      </ul>

      <form
        htmlFor="newitem"
        onSubmit={handleSumit}
        className="eventInfomationContainer"
      >
        <label className="newEvent" htmlFor="newEvent">
          Add Event
        </label>
        <div className="addEventContainer">
          <input
            id="newitem"
            placeholder="Event title"
            type="text"
            className="event inputEvent"
            value={newEvent}
            onChange={handleInputEvent}
          ></input>
          <input
            id="newitem"
            placeholder="Event date"
            type="text"
            className="event inputDate"
            value={newDate}
            onChange={handleInputDate}
          ></input>
          <button className="eventAddBtn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Event;
