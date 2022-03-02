/* const list = document.querySelector("ol");
function append(){
    const li = document.createElement("li");
    li.textContent = "add the last";
    list.append(li);
}
function prepend(){
    const li = document.createElement("li");
    li.textContent = "add the first";
    list.prepend(li);
}
function before(){
    const li = document.createElement("li");
    li.textContent = "add the first";
    list.prepend(li);
} */





const list = document.getElementById('list');

function addTimer(time) {
  const li = document.createElement('li');
  list.append(li);
  const timer = new Timer(time, li);
  timer.start();
}

class Timer {
  intervalId;

  constructor(initialCount, element) {
    this.count = initialCount;
    this.element = element;
  }

  start() {
    this.intervalId = setInterval(() => this.tick(), 500);
    this.render();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.count--;
    this.render();
    if (this.count === 0) {
      this.stop();
      this.destroy();
    }
  }
  
  render() {
    this.addColor();
    this.element.textContent = `timer ${this.count}`;
    this.afterTime();
  }

  addColor() {
    if (this.count < 10) {
      this.element.style.background = 'yellow';
    }
    if (this.count < 4) {
      this.element.style.background = 'red';
    }
  }
  afterTime(){
    if (this.count  < 4) {
      this.element.textContent = `this timer delete after  ${this.count} `;
    }
    
    
  }


  destroy() {
      
    setTimeout(() => {
      this.element.remove();
    }, 500);
    
  }
}