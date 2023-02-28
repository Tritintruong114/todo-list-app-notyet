import "./timer.css";
import React, { useState, useEffect } from "react";
var timer;

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    //
    timer = setInterval(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinutes(minutes + 1);
        setSecond(0);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const restart = () => {
    setSecond(0);
    setMinutes(0);
  };

  const stop = () => {
    clearInterval(timer);
  };

  const start = () => {};

  return (
    // <div className="timer">
    <div className="timer_main">
      <div className="timer_container">
        <h1 className="timer_title">Timer</h1>
        <h2 className="timer_counter">
          {minutes < 10 ? "0" + minutes : minutes}:
          {second < 10 ? "0" + second : second}
        </h2>
        <div className="buttonContainer">
          <button className="restart" onClick={restart}>
            Restart
          </button>
          <button className="stop" onClick={stop}>
            Stop
          </button>
          <button className="stop" onClick={start}>
            Start
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Timer;
