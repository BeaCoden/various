import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "./MyClock.css";

function MyClock() {
  const [value, setValue] = useState(new Date());
  const [showAnalog, setShowAnalog] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app-container ">
      {showAnalog ? <Clock value={value} /> : <div className="digital-clock">{value.toLocaleTimeString()}</div>}
      <button onClick={() => setShowAnalog(!showAnalog)}>{showAnalog ? "on" : "off"}</button>
    </div>
  );
}

export default MyClock;
