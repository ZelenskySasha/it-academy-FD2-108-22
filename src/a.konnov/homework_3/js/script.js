class Timer {

    constructor() {
        this.hours;
        this.minutes;
        this.seconds;
        this.intervalId;
        this.count;
        this.timeElement = document.querySelector('#timeElement');
        this.bottonStart = document.getElementById("start");
        this.buttonsAdd = document.querySelectorAll('.add_time');
        this.buttonsSet = document.querySelectorAll('.plus_time');
    }
    addTime(time) {
        this.hours = 0;
        this.minutes = time;
        this.seconds = 0;
        this.count = time * 60;
        this.displayTime(time * 60);
        console.log(this.count);
        console.log(this.buttonsSet);
    }
    start() {
        console.log('start');
        this.intervalId = setInterval(() => this.decreaseTime(), 1000);
        this.bottonStart.setAttribute("disabled", "false");
        this.enableButtons(this.buttonsSet);
        this.disableButtons(this.buttonsAdd);

    }
    stop() {
        console.log('stop');
        clearInterval(this.intervalId);
        this.bottonStart.removeAttribute("disabled");
        this.disableButtons(this.buttonsSet);
    }
    reset() {
        console.log('reset');
        clearInterval(this.intervalId);
        this.count = 0;
        this.displayTime(this.count);
        this.bottonStart.removeAttribute("disabled");
        this.enableButtons(this.buttonsAdd);
    }
    decreaseTime() {
        console.log('decreaseTime');
        if (this.count > 0) {
            this.count--;
            this.displayTime(this.count)
        } else {
            this.stop();
            this.enableButtons(this.buttonsAdd);
        }
    }
    set(time) {
        this.count += time * 60;
        this.displayTime(this.count);
    }
    displayTime(timeInMS) {
        console.log('displayTime');
        let sec = (timeInMS % 60).toString().padStart(2, '0');
        let min = Math.floor((timeInMS % 3600) / 60).toString().padStart(2, '0');
        let hour = Math.floor(timeInMS / 3600).toString().padStart(2, '0');
        this.timeElement.innerHTML = `${hour}:${min}:${sec}`;
    }
    disableButtons(buttonsArr) {
        for (let buttons of buttonsArr) {
            buttons.setAttribute("disabled", "false");;
        }
    }
    enableButtons(buttonsArr) {
        for (let buttons of buttonsArr) {
            buttons.removeAttribute("disabled", "false");;
        }
    }
}
const timer = new Timer();