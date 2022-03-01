class Timer{
    constructor(hour, min, sec, msec, start, stop){
        this.hour = document.querySelector("hour");
        this.min = document.querySelector("min");
        this.sec = document.querySelector("sec");
        this.msec = document.querySelector("msec");
        this.start = document.getElementById("start");
        this.stop = document.getElementById("stop");
        this.res = document.getElementById("res");
        this.interId;

        /* Method */

        start(){
            start.onclick = () =>{
                setInterval(()=>{
                    this.msec--;
                    msec.textContent = this.msec;
                }, 100);
            }
        }
        padStart(){
            this.hour.textContent = this.hour.textContent.padStart(2, "0");
            this.min.textContent = this.min.textContent.padStart(2, "0");
            this.sec.textContent = this.sec.textContent.padStart(2, "0");
            this.msec.textContent = this.msec.textContent.padStart(2, "0");

        };

    }
}

new Timer("00:00:00.00");