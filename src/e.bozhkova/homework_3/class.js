class Timer {

	constructor() {
		this.intervalId;
		this.time = new Date('2022-01-01 00:05:00');
  		document.getElementById("time").innerHTML = this.time.toLocaleTimeString();
	}

	start(){
		console.log('start')
		let { time } = this;
		this.intervalId = setInterval(()=>{
			time.setSeconds(time.getSeconds() - 1);
			document.getElementById("time").innerHTML = time.toLocaleTimeString();

			if(time.getSeconds() === 0 
				&& time.getMinutes() === 0
				 && time.getHours() === 0){
				this.stop();
				document.getElementById("startButton").disabled = true;
			}

		}, 1000);
	}

	stop(){
		console.log('stop')
		clearInterval(this.intervalId);
	}
	
	reset(){
		console.log('reset')
		this.time = new Date('2022-01-01 00:05:00');
		document.getElementById("time").innerHTML = this.time.toLocaleTimeString();
		document.getElementById("startButton").disabled = false;
	}
	
	set(time){
		console.log('set');
		this.time.setMinutes(time);
		this.time.setSeconds(0);
		document.getElementById("time").innerHTML = this.time.toLocaleTimeString();
		document.getElementById("startButton").disabled = false;
	}
	
	addTime(time){
		console.log('addTime');
		this.time.setMinutes(this.time.getMinutes() + time);
		document.getElementById("time").innerHTML = this.time.toLocaleTimeString();
		document.getElementById("startButton").disabled = false;
	}
}

const timer = new Timer();