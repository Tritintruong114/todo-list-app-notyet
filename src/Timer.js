import "./timer.css";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {});

  return (
    <div className="timer">
      <div className="container">
        <div className="timer_container">
          <h1>Timer</h1>
          <h1>10:30</h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
