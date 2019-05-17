class Clock {
  constructor() {
    // 1. Create a Date object.
    this.date = new Date();
    this.printTime()

    // 4. Schedule the tick at 1 second intervals.  
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.

    console.log(`${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`);
  }

  _tick() {
    this.date = new Date();
    this.printTime();
  }
}

const clock = new Clock();