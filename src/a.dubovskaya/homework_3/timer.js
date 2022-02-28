

//Buttons
const startBtn = document.querySelector("#start_timer"),
    stopBtn = document.querySelector("#stop_timer"),
    resetBtn = document.querySelector("#reset_timer"),
    addOneBtn = document.querySelector("#add_1min"),
    addFiveBtn = document.querySelector("#add_5min"),
    addTenBtn = document.querySelector("#add_10min"),
    addFifteenBtn = document.querySelector("#add_15min"),
    setOneBtn = document.querySelector("#set_1min"),
    setTwoBtn = document.querySelector("#set_2min"),
    setFiveBtn = document.querySelector("#set_5min"),
    setTenBtn = document.querySelector("#set_10min"),
    setFifteenBtn = document.querySelector("#set_15min");

class Timer {
  constructor(hours, minutes, seconds, milliseconds) {
    //Elements clock
    this.hoursElement = document.querySelector(hours);
    this.minutesElement = document.querySelector(minutes);
    this.secondsElement = document.querySelector(seconds);
    this.millisecondsElement = document.querySelector(milliseconds);

    this.interval = null;
    this.remainingMilliSeconds = 0;
    this.milliseconds = 99;
  }
  //Add zero for values < 10
  addZeroBeforeTime() {
    this.hoursElement.textContent = this.hoursElement.textContent.padStart(2, "0");
    this.minutesElement.textContent = this.minutesElement.textContent.padStart(2, "0");
    this.secondsElement.textContent = this.secondsElement.textContent.padStart(2, "0");
    this.millisecondsElement.textContent = this.millisecondsElement.textContent.padStart(2,"0");
  }
  //Getting general time in milliseconds to get hours, minutes, seconds from it
  getMilliseconds() {
    const hours = +this.hoursElement.textContent,
      minutes = +this.minutesElement.textContent,
      seconds = +this.secondsElement.textContent,
      milliseconds = +this.millisecondsElement.textContent;

    this.remainingMilliSeconds =
      hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;

    return this.remainingMilliSeconds;
  }

  start() {
    if (this.getMilliseconds() === 0) return; //Checking that current time is greater than zero, otherwise timer won't be launched
    this.interval = setInterval(() => {
      this.remainingMilliSeconds -= 10;
     //Reducing general time with each millisecond
     

      //Getting of hours, minutes, seconds in terms of continual reducing of general time
      let hours = Math.floor(this.remainingMilliSeconds / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(this.remainingMilliSeconds / 1000 / 60) % 60;
      let seconds = Math.floor(this.remainingMilliSeconds / 1000) % 60;

      if (this.milliseconds == 0) this.milliseconds = 99; //Avoiding of three-figure number
      this.milliseconds--;

      this.hoursElement.textContent = `${hours}`;
      this.minutesElement.textContent = `${minutes}`;
      this.secondsElement.textContent = `${seconds}`;
      this.millisecondsElement.textContent = `${this.milliseconds}`;
      this.addZeroBeforeTime();

      if (this.remainingMilliSeconds === 0) this.reset();
      document.getElementById("start_timer").disabled = true;
       //Stopping of timer when value is zero
    } ,10);
}
  

  reset() {
    this.stop();
    this.hoursElement.textContent = "00";
    this.minutesElement.textContent = "00";
    this.secondsElement.textContent = "00";
    this.millisecondsElement.textContent = "00";
    document.getElementById("start_timer").disabled = false;
  }

  set(time) {
    this.reset();
    this.minutesElement.textContent = `${time}`;
    this.addZeroBeforeTime();
    document.getElementById("start_timer").disabled = false;
  }

  addTime(time) {
    this.stop();
    let currentTime = +this.minutesElement.textContent + time;

    if (currentTime >= 60) {
      this.hoursElement.textContent++;
      this.hoursElement.textContent = `${this.hoursElement.textContent}`;
      currentTime = currentTime - 60;
    }

    this.minutesElement.textContent = `${currentTime}`;
    this.addZeroBeforeTime();
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    document.getElementById("start_timer").disabled = false;
  }
}

const timer = new Timer(
  ".time_hours",
  ".time_minutes",
  ".time_seconds",
  ".time_milliseconds"
);

// buttons controls

startBtn.addEventListener("click", () => timer.start());
stopBtn.addEventListener("click", () => timer.stop());
resetBtn.addEventListener("click", () => timer.reset());

//set timer
setOneBtn.addEventListener("click", () => timer.set(1));
setTwoBtn.addEventListener("click", () => timer.set(2));
setFiveBtn.addEventListener("click", () => timer.set(5));
setTenBtn.addEventListener("click", () => timer.set(10));
setFifteenBtn.addEventListener("click", () => timer.set(15));

//add time
addOneBtn.addEventListener("click", () => timer.addTime(1));
addFiveBtn.addEventListener("click", () => timer.addTime(5));
addTenBtn.addEventListener("click", () => timer.addTime(10));
addFifteenBtn.addEventListener("click", () => timer.addTime(15));
