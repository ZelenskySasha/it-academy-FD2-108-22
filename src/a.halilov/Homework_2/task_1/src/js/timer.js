class Timer{
    constructor(hour, min, sec, timerHour, timerMin, TimerSec, interval){
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.timerHour = timerHour;
        this.timerMin = timerMin;
        this.TimerSec = TimerSec;
        this.interval = interval;
    }
    showTime(){
        this.timerHour = ("0" + String(this.hour)).slice(-2);
        this.timerMin = ("0" + String(this.min)).slice(-2);
        this.TimerSec = ("0" + String(this.min)).slice(-2);
        document.getElementById("time").innerHTML = this.timerHour + ":" + this.timerMin + ":" + this.TimerSec;
    }
    generateTime(){
        if(this.sec<0){
            this.sec = 59;
            this.min--;
        }
        if(this.min<0){
            this.min = 59;
            this.hour--;
        }
        if(this.hour<0){
            this.hour = 0;
            this.min = 0;
            this.sec = 0;
        }

        if(this.min > 59){
            this.min = this.min %60;
            this.hour++;
        }



        if(this.sec<10){
            this.timerSec = "0" + this.sec;
        }else{
            this.timerSec = this.sec;
        }
        if(this.min<10){
            this.timerMin = "0" +  this.min;
        }else{
            this.timerMin = this.min;
        }
        if(this.hour < 10){
            this.timerHour = "0" + this.hour;
        }else{
            this.timerHour = this.hour;
        }





        if((this.hour ===0) & (this.min ===0) & (this.sec === 0)){
            this.stopTime();
        }
        
    } 
    decreaseTime(){
        this.sec--;
        this.generateTime();
    }


    startTime(){
        this.interval = setInterval(() => this.decreaseTime(), 1000);
        document.getElementById("start").setAttribute("disabled", "false");
    }
    stopTime(){
        clearInterval(this.interval);
        document.getElementById("start").removeAttribute("disabled");
    }

    resetTime(){
        clearInterval(this.interval);
        this.sec = 0;
        this.min = 0;
        this.hour = 0;
        this.generateTime();
    }
    setTime(){
        this.sec = 0;
        this.hour = 0;
        this.min = time;
        this.generateTime();
    }
    addTime(){
        this.min +=time;
        this.generateTime();
    }
}

let timer = new Timer(5, 0, 0)
timer.showTime();



/*  time -- 
render */