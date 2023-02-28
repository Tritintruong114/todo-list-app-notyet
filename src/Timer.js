import "./timer.css";
import React, { useState, useEffect } from "react";
var timer;

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  //useEffect to run a timerOn value changing.

  return (
    <div className="timerContainer">
      <div>{time}</div>
      <div>
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={() => setTimerOn(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
