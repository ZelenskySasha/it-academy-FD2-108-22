class Timer{
    constructor(){
        this.time = new Date(0);
        document.getElementById("time").innerHTML = this.time.toLocaleTimeString();
        this.intervalId;
    };
    /* Method */
    start(){
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
}









































/* let timerStart = document.getElementById("start");
let timerStop = document.getElementById("stop");
let timerShow = document.getElementById("time");

let countHour = 0;
let countMin  = 0;
let countSec = 59;
let countMsec = 99;



timerStart.onclick = () =>{
    setInterval(() =>{
        countMsec--;
        if(countMsec == 0){
            countMsec = 99;
            countSec--;
        };
        timerShow.textContent = countHour +":" + countMin + ":" + countSec + "." + countMsec;

        
    },10)





    
}; */




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
 */


















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