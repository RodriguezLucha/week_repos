import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {time: new Date()};

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    const time = this.state.time;
    const [hours, minutes, seconds] = [time.getHours(), time.getMinutes(), time.getSeconds()];
    const date = time.toDateString();

    return (
      <div>
        <h1>Waka Clocka Flame</h1>
        <div className="clock">
          <div className="clock-row">
            <h2>Time: </h2>
            <h2>{hours}:{minutes}:{seconds}</h2>
          </div>

          <div className="clock-row">
            <h2>Date: </h2>
            <h2>{date}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;