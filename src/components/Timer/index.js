import "./timer.css";
import React, { useState, useEffect } from "react";
// var timer;

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
      <div className="numberTimer">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        {/* //this span meaning when ever the time count to 100
          //it will devide to 100 and return 0 */}
      </div>
      <div className="buttonContainer">
        {/* conditional rendering */}
        {!timerOn && time === 0 && (
          <button className=" button startBtn" onClick={() => setTimerOn(true)}>
            Start
          </button>
        )}
        {timerOn && (
          <button className=" button stopBtn" onClick={() => setTimerOn(false)}>
            Stop
          </button>
        )}
        {!timerOn && time !== 0 && (
          <button
            className=" button resumeBtn"
            onClick={() => setTimerOn(true)}
          >
            Resume
          </button>
        )}
        {!timerOn && time > 0 && (
          <button className=" button resetBtn" onClick={() => setTime(0)}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
