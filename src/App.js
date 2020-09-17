import React from "react";

import Timer from "./assets/Timer";

const timerSettings = {
  time: 30000,
  step: 1000,
  autostart: true,
  active: false,
};

function App() {
  const { time, step, autostart, active } = timerSettings;
  return (
    <div className="wrapper">
      <Timer
        time={time}
        step={step}
        autoStart={autostart}
        active={active}
        defaultTime={time}
      />
    </div>
  );
}

export default App;
