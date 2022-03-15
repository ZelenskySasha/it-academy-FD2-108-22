function doTimer(time, action) {
    if (action == "start") {
        timer.start();
    }
    if (action == "stop") {
        timer.stop();
    }
    if (action == "settime") {
        timer.set(time);
    }
    if (action == "addtime") {
        timer.addTime(time);
    }
    if (action == "reset") {
        timer.reset();
    }
}
class Timer {
    constructor() {
        this.time = 0;
        this.stoptimer = true;
    }
    start() {
        this.stoptimer = true;
        let stattimer = setInterval(() => {
            this.render();
            if (this.stoptimer) { this.time--; }
        }, 10);
    }
    render() {
        let milliseconds = this.time;
        if (milliseconds < 1) { this.stoptimer = false; }
        const localtime = document.getElementById("timerCounter");
        this.seconds = Math.floor(milliseconds / 100) % 60;
        this.minutes = Math.floor(milliseconds / 100 / 60) % 60;
        this.hours = Math.floor(milliseconds / 100 / 60 / 60);
        this.outputmilliseconds = milliseconds % 100;
        if (this.outputmilliseconds < 10) { this.outputmilliseconds = '0' + this.outputmilliseconds; }
        if (this.seconds < 10) { this.seconds = '0' + this.seconds; }
        if (this.minutes < 10) { this.minutes = '0' + this.minutes; }
        if (this.hours < 10) { this.hours = '0' + this.hours; }
        localtime.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}.${this.outputmilliseconds}`;

    }
    stop() {
        this.stoptimer = false;
    }
    reset() {
        this.time = 0;
        this.render();
    }

    set(time) {
        this.time = time * 60 * 100;
        this.render();
    }
    addTime(time) {
        this.time = this.time + time * 60 * 100;
        this.render();
    }
}
const timer = new Timer();
timer.time = 40