class Timer{

  intervalId;

  constructor(){
      this.counterMillisecond = 0,
      this.counterSecond = 0,
      this.counterMinutes = 0;
      this.counterHours = 0;
      this.timerElementMillisecond = document.getElementById('timer-millisecond');
      this.timerElementSeconds = document.getElementById('timer-seconds');
      this.timerElementMinutes = document.getElementById('timer-minutes');
      this.timerElementHours = document.getElementById('timer-hours');
  }
  playTimer(){
    this.intervalId = setInterval(() => this.tick(), 10);
  }

  stopTimer(){
    clearInterval(this.intervalId);
  }

  replayTimer(){
    this.stopTimer();
    this.timerElementMillisecond.textContent = this.counterMillisecond = 0;
    this.timerElementSeconds.textContent = this.counterSecond = 0;
    this.timerElementMinutes.textContent = this.counterMinutes = 0; 
    this.timerElementHours.textContent = this.counterHours = 0;
    this.displey();
    }  

  btnPlusMinutes(plusNum){
    this.stopTimer()
    this.counterMinutes += plusNum;
      if(this.counterMinutes >= 60){
        this.counterMinutes = this.counterMinutes - 60;
        this.counterHours++;
      }
    this.hours24();
    this.displey();
  }

  btnInstallMinutes(instNum){
    this.stopTimer()
    this.counterMinutes = instNum;
    this.displey();
  }

  tick() {
    this.counterMillisecond--;
    this.zeroingMillisecond();
    this.zeroingSeconds()
    this.zeroingMinutes();
    this.zeroingHours();
    this.displey();
  }

  hours24() {
    if(this.counterHours >= 24){
      this.counterHours = 24;
      this.counterMinutes = 0;
      this.counterSecond = 0;
      this.counterMillisecond = 0;  
  }  
}

zeroingMillisecond(){
  if(this.counterMillisecond <= 0 && this.counterSecond === 0){
    this.counterMillisecond = 0;
  }else if(this.counterMillisecond <= 0){
    this.counterMillisecond = 99;
    this.counterSecond--;
  }
}

  zeroingSeconds(){
    if(this.counterSecond <= 0 && this.counterMinutes === 0 ){
      this.counterSecond = 0;
    }else if(this.counterSecond <= 0){
      this.counterSecond = 59;
      this.counterMinutes--;
    }
  }
  
  zeroingMinutes(){
     if(this.counterMinutes <= 0 && this.counterHours === 0 ){
      this.counterMinutes = 0;
    }else if(this.counterMinutes === 0){
        this.counterMinutes = 59;
        this.counterHours--;
    } 
  }

  zeroingHours(){
    if(this.counterHours <= 0){
    this.counterHours = 0;
    }
  }

  displey(){
    this.timerElementMillisecond.textContent = this.counterMillisecond.toString().padStart(2,0);;
    this.timerElementSeconds.textContent = this.counterSecond.toString().padStart(2,0);
    this.timerElementMinutes.textContent = this.counterMinutes.toString().padStart(2,0);
    this.timerElementHours.textContent = this.counterHours.toString().padStart(2,0);
  }
} 

const timer = new Timer();
























/*-----------------прибавить +минуты---*/

// function plusMinutes(plusNum){
//   counterMinutes += plusNum; 
//   return timerElementMinutes.textContent = addZeroMin(counterMinutes);
// }
  /*---------добавить минуты-----*/

// function installMinutes(numMinutes){
//   counterMinutes = numMinutes; 
//   timerElementMinutes.textContent = addZeroMin(counterMinutes); 
// }

// /*---------добавить ноль к минутам-----*/

// function addZeroMin(){
//     if(counterMinutes < 10){
//       timerElementMinutes.textContent = "0" + counterMinutes
//     }else{
//       timerElementMinutes.textContent = counterMinutes
//     }
//     return timerElementMinutes.textContent    
// }

// /*---------добавить ноль к секундам-----*/

// function addZeroSec(){
//   if(counterSecond < 10){
//     timerElementSeconds.textContent = "0" + counterSecond
//   }else{
//     timerElementSeconds.textContent = counterSecond
//   }
//   return timerElementSeconds.textContent    
// }

// /*---------добавить минуту после 60с-----*/
// function addMinutes(){
//   if(counterSecond === 60){
//     counterMinutes++;
//     timerElementMinutes.textContent = addZeroMin(counterMinutes);
//   }
//  return timerElementMinutes.textContent
// }



// let intervalId;

// function playTimer() {
//     intervalId = setInterval(() => {
//       counterSecond++;
//       timerElementSeconds.textContent = addZeroSec(counterSecond);
//       if(counterSecond === 60){
//         addMinutes(counterSecond);
//         counterSecond = 0;
        
//       }
//     }, 20);
// }

// function stopTimer() {
//         clearInterval(intervalId)
// }

// function replayTimer(){
//     counterMinutes = timerElementMinutes.textContent = '00';
//     counterSecond = timerElementSeconds.textContent = '00';
// }  