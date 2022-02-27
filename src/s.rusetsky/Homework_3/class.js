    class Timer {
        constructor() {
            this.minutes = 1;
            this.seconds = 0;
            this.timerId;
            this.inicialTime = 0;
        }
        start() {
            this.timerId = setInterval(() => {
                this.seconds--;
                if (this.seconds < 0) {
                    this.seconds = 59;
                    this.minutes--;
                }

                if (this.minutes < 0) {
                    this.minutes = 59;
                }
                console.log(this.seconds + this.minutes);
                if (this.seconds + this.minutes === '000') {
                    clearInterval(this.timerId);
                    document.getElementById('tm').innerHTML = '00' + ':' + '00';
                    document.getElementById("start").removeAttribute("disabled", "");
                }
                this.seconds = this.seconds + "";
                this.minutes = this.minutes + "";

                if (this.seconds.length < 2) {
                    this.seconds = "0" + this.seconds;
                }

                if (this.minutes.length < 2) {
                    this.minutes = "0" + this.minutes;
                }

                document.getElementById('tm').innerHTML = this.minutes + ":" + this.seconds;

            }, 1000);

            document.getElementById("start").setAttribute("disabled", "");


        }


        stop() {
            this.minutes = 0;
            this.seconds = 0;
            document.getElementById("start").removeAttribute("disabled", "");
            document.getElementById('tm').innerHTML = '00' + ':' + '00';
            clearInterval(this.timerId);
            this.minutes = this.inicialTime;
            if (this.minutes < 9) {
                document.getElementById('tm').innerHTML = '0' + this.minutes + ":" + '0' + this.seconds;
            } else {
                document.getElementById('tm').innerHTML = this.minutes + ":" + '0' + this.seconds;
            }

        }

        reset() {
            clearInterval(this.timerId);
            this.seconds = 0;
            this.minutes = 1;
            document.getElementById("start").removeAttribute("disabled", "");
            document.getElementById('tm').innerHTML = '01' + ':' + '00';
        }

        addTime(time) {
            this.minutes = parseInt(this.minutes)
            this.minutes += time;
            if (this.minutes < 9) {
                document.getElementById('tm').innerHTML = '0' + this.minutes + ":" + '0' + this.seconds;
            } else {
                document.getElementById('tm').innerHTML = this.minutes + ":" + '0' + this.seconds;
            }
        }

        set(time) {
            this.inicialTime = time;
            this.minutes = parseInt(this.minutes)
            this.minutes = 0;
            this.minutes = time;
            if (this.minutes < 9) {
                document.getElementById('tm').innerHTML = '0' + this.minutes + ":" + '0' + this.seconds;
            } else {
                document.getElementById('tm').innerHTML = this.minutes + ":" + '0' + this.seconds;
            }
        }

    }

    let timer = new Timer();