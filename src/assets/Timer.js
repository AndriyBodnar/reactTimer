import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 30,
    pause: true,
    step: 1000,
    width: 30,
  };

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time - 1 });

      if (this.state.time < 0) {
        clearInterval(this.interval);
        this.setState({ pause: true });
        this.setState({ time: 30 });
      }
    }, this.state.step);
    this.setState({ pause: false });
  };

  pauseTimer = () => {
    clearInterval(this.interval);
    this.setState({ pause: true });
  };

  componentDidMount() {
    this.startTimer();
  }

 

  render() {
    const { time, width, pause} = this.state;
    return (
      <div>
        <div className="timer__wrapper">
          <h1>Timer: {time}</h1>
          <div className="button__wrapper">
            <button onClick={pause ? this.startTimer : this.pauseTimer}>
              {pause ? "Start" : "Pause"}
            </button>
          </div>
        </div>

        <div
          className="lineTime"
          style={{
            height: "20px",
            backgroundColor: "firebrick",
            width: `calc(${time} * (100% / ${width}))`,
            transition: "1s",
            marginTop: "40px",
          }}
        ></div>
      </div>
    );
  }
}

export default Timer;
