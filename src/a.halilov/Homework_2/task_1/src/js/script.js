function Timer(){
    this.time = new Date('2022-01-01 00:00:00.00');
    let intervalId;
    document.getElementById("time").innerHTML = this.time.toLocaleTimeString();

    this.start = () =>{
        console.log("start");
        intervalId = setInterval(()=>{
            const {time} = this;
            time.setSeconds(timeSeconds()-1);
            document.getElementById("time").innerHTML = time.toLocaleTimeString();

            if(time.getSeconds() === 0 && time.getMinutes() === 0 && time.getHours() === 0){
                this.stop();
                document.getElementById("start").disabled = true;

            }
            
        }, 1000)
    }

    this.stop = () =>{
        console.log("stop");
        clearInterval(intervalId);
    }
    this.reset = ()=>{
        console.log("reset");
        this.time = new Date('2022-01-01 00:00:00.00');
        document.getElementById("time").innerHTML = this.toLocaleTimeString();
        document.getElementById("start").disabled = false;

    }
    this.set = (time) =>{
        console.log("set");
        this.time.setMinutes(time);
        this.time.setSeconds(0);
        document.getElementById("time").innerHTML = this.time.toLocaleTimeString();
        document.getElementById("start").disabled = false;
    }
    this.addTime = (time) =>{
        console.log("addRime");
        this.time.setMinutes(this.time.getMinutes()+time);
        document.getElementById("time").innerHtml = this.time.toLocaleTimeString();
        document.getElementById("start").disabled = false;
    }
}

let timer = new Timer();












































/* let timerStart = document.getElementById("start");
const timerStop = document.querySelector("stop");
const timerShow = document.querySelector("time");

class Timer{
    constructor(hour, min, sec, msec){
        this.hourElement = document.querySelector("hour");
        this.minElement = document.querySelector("min");
        this.secElement = document.querySelector("sec");
        this.msecElement = document.querySelector("msec");

        this.interval = num;
        this.remainingMsec = 0;
        this.msec = 99;
    }



    addPadStart(){
        this.hourElement.textContent =  this.hourElement.textContent.padStart(2, "0");
        this.minElement.textContent = this.minElement.textContent.padStart(2, "0");
        this.secElement.textContent = this.secElement.textContent.padStart(2, "0");
        this.msecElement.textContent = this.msecElement.textContent.padStart(2, "0");
    }

    getMsec(){
        const hour = +this.hourElement.textContent;
        const min = +this.minElement.textContent;
        const sec = +this.secElement.textContent;
        const msec = +this.msecElement.textContent;
        this.remainingMsec = hour*360000 + min*60000 + sec*1000 + msec;

        return this.remainingMsec;
    }
    start(){
        if(this.getMsec() === 0) return;
        this.interval = setInterval(()=>{
            this.remainingMsec -=10;
        
            let hour = Math.floor(this.remainingMsec / 1000 / 60 / 60)%24;
            let min = Math.floor(this.remainingMsec / 100/60)%60;
            let sec = Math.floor(this.remainingMsec / 1000) % 60;

            if(this.msec == 0){
                this.msec = 99;
                this.msec--;

                this.hourElement.textContent = `${hour}`;
                this.minElement.textContent = `${min}`;
                this.secElement.textContent = `${sec}`;
                this.msecElement.textContent = `${this.msec}`
                this.addPadStart();
            }
            if(this.remainingMsec === 0){
                timerStart.disabled = true;
            }
        }, 10);
    }
    res(){
        timerStart.disabled = false;
        this.stop();
        this.hourElement.textContent = "00";
        this.minElement.textContent = "00";
        this.secElement.textContent = "00";
        this.msecElement.textContent = "00";

    }
    set(time){
        this.res();
        this.minElement.textContent = `${time}`;
        this.addPadStart();
    }

}





timerStart.addEventListener("click", () => timer.start); */


/* class Timer{
    constructor(){
        this.time = new Date(0);
        document.getElementById("time").innerHTML = this.time.toLocaleTimeString();
        this.intervalId;
    }; */
    /* Method */
/*     start(){
        console.log(start);
        let time = this;
        this.intervalId = setInterval(()=>{
            time.setSecond(time.getSecond() - 1);
            document.getElementById("time").innerHTML = time.toLocaleTimeString();
            if(time.getSecond() == 0 && time.getHours() == 0 && time.getMinutes() == 0){
                this.stop();
                document.getElementById("start").disabled = true;

            }
        }, 1000);
    }
} */



/*timerStart.onclick = () =>{
      setInterval(()=>{
        countMin--;
        if (countMin == 0){
            countMin = 59;
        }
        timerShowMin.textContent = countMin + (" :");
    },60000);
    setInterval(()=>{
        countMsec--;
        if (countMsec == 0){
            countMsec = 99;
        }
        timerShowMsec.textContent = countMsec;
    },100);
    setInterval(()=>{
        countSec--;
        if (countSec == 0){
            countSec = 59;
        }
        timerShowSec.textContent = countSec + (" .");
    },1000);
}


    /* methods */
   /*  function start(){
        timerStart.onclick = () =>{
            setInterval(()=>{
                count--;
                if(count = 0){
                    min - 1;
                }
                if(this.min = 0){
                    hour - 1;
                }
                timerShow.textContent = count;

            })
        }
    }
 */



/* 
class timer{
    constructor(){
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.msec = msec;
    } */
    /* methods */
/*     start(){
        timerStart.onclick = () =>{
            setInterval(()=>{
                count--;
                if(count = 0){
                    this.min - 1;
                }
                if(this.min = 0){
                    this.hour - 1;
                }
                timerShow.textContent = count;

            })
        }
    }
}

 */




/* class timer{
    constructor() {
        this.hour = hour;
        this.min = min;
        this.sec = sec;
        this.timerId;
        this.InicialTimer = 0;

    }
    start(){
        this.timerId = setInterval(()=>{
            this.sec--;
            if(this.sec = 0){
                this.sec = 59;
                this.min--;
            }
            if(this.min == 0){
                this.hour--;
                this.min = 59;
            }
            console.log(this.sec + this.min );
            clearInterval(this.timerId);
            document.getElementById("time").innerHTML = "00" + ":" + "00";
            document.getElementById("start").removeAttribute("Dis", "");
            this.sec = this.sec + "";
            this.min = this.min + "";
    
            if(this.sec.length < 2){
                this.sec = "0"+this.sec;
            }
    
            if(this.min.length < 2){
                this.min.length = "0"+this.min;
            }
            document.getElementById(time).innerHTML = this.min + ":" + this.sec;
        }, 1000);

        document.getElementById("start").setAttribute("dis", "");
    }
}

/* 

let timerShow = document.getElementById("time");

let timeToday = new Date();

let countHour = 0;
let countMin  = 0;
let countSec = 59;
let countMsec = 99;

timerStart.onclick = () =>{
    setInterval(()=>{
        countMin--;
        if (countMin == 0){
            countMin = 59;
        }
        timerShowMin.textContent = countMin + (" :");
    },60000);
    setInterval(()=>{
        countMsec--;
        if (countMsec == 0){
            countMsec = 99;
        }
        timerShowMsec.textContent = countMsec;
    },100);
    setInterval(()=>{
        countSec--;
        if (countSec == 0){
            countSec = 59;
        }
        timerShowSec.textContent = countSec + (" .");
    },1000);
};


 */