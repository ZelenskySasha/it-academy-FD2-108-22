//Взял код у Валерии Прошкиной сам не смог сдюжить с этим ) хоть попробую разобраться так )
//Взял код у Валерии Прошкиной сам не смог сдюжить с этим ) хоть попробую разобраться так )

class Timer {
    constructor(hours,minutes,seconds, timerHours,timerMinutes,timerSeconds,interval) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.timerHours = timerHours;
      this.timerMinutes = timerMinutes;
      this.timerSeconds = timerSeconds;
      this.interval = interval;
    }
  
    showNeedTime() {
      this.timerHours = ("0" + String(this.hours)).slice(-2);
      this.timerMinutes = ("0" + String(this.minutes)).slice(-2);
      this.timerSeconds = ("0" + String(this.seconds)).slice(-2);
      document.getElementById("timer").innerHTML =
        this.timerHours + ":" + this.timerMinutes + ":" + this.timerSeconds;
    }
  
    generateTime() {
      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;
      }
      if (this.minutes < 0) {
        this.minutes = 59;
        this.hours--;
      }
      if (this.hours < 0) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
  
     
      if (this.minutes > 59) {
        this.minutes = this.minutes % 60;
        this.hours++;
      }
  
      
      if (this.seconds < 10) {
        this.timerSeconds = "0" + Math.abs(this.seconds.toString());
      } else {
        this.timerSeconds = this.seconds;
      }
      if (this.minutes < 10) {
        this.timerMinutes = "0" + Math.abs(this.minutes.toString());
      } else {
        this.timerMinutes = this.minutes;
      }
      if (this.hours < 10) {
        this.timerHours = "0" + Math.abs(this.hours.toString());
      } else {
        this.timerHours = this.hours;
      }
  
    
      if ((this.hours === 0) & (this.minutes === 0) & (this.seconds === 0)) {
        this.stopTime();
      }
  
      
      document.getElementById("timer").innerHTML =
        this.timerHours + ":" + this.timerMinutes + ":" + this.timerSeconds;
    }
  
    decreaseTime() {
      this.seconds--;
      this.generateTime();
    }
  
    startTime() {
      this.interval = setInterval(() => this.decreaseTime(), 1000);
      document.querySelector(".play").setAttribute("disabled", "false");
    }
  
    stopTime() {
      clearInterval(this.interval);
      document.querySelector(".play").removeAttribute("disabled");
    }
  
    resetTime() {
      clearInterval(this.interval);
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.generateTime();
    }
  
    setTime(time) {
      this.seconds = 0;
      this.hours = 0;
      this.minutes = time;
      this.generateTime();
    }
  
    addTime(time) {
      this.minutes += time;
      this.generateTime();
    }
  }
  
  let timer = new Timer(0, 0, 0);
  
  timer.showNeedTime();


  // посмотрел даже вроде трошки разобрался )