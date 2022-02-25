const hoursEl = document.querySelector(".hours"),
  minutesEl = document.querySelector(".minutes"),
  secondsEl = document.querySelector(".seconds"),
  fullName = document.querySelector(".fullName"),
  group = document.querySelector(".group"),
  marks = document.querySelector(".marks");

const users = [
  {
    surName: "Undro",
    name: "Vitaly",
    secondName: "Valerievich",
    group: 13,
    marks: [9, 8, 10, 7],
  },
  {
    surName: "Ivano",
    name: "Ivan",
    secondName: "Ivanovich",
    group: 12,
    marks: [3, 3, 4, 5, 6, 7, 8, 9, 2],
  },
  {
    surName: "Abramson",
    name: "Sasha",
    secondName: "Valerievich",
    group: 45,
    marks: [1, 4, 5, 6, 8, 0],
  },
  {
    surName: "Adamson",
    name: "Alyosha",
    secondName: "Valerievich",
    group: 789,
    marks: [3, 4, 5, 7, 9, 0],
  },
  {
    surName: "Adderiy",
    name: "Tolya",
    secondName: "Valerievich",
    group: 897,
    marks: [9, 9, 9, 9, 9],
  },
  {
    surName: "Allford",
    name: "Andryusha",
    secondName: "Valerievich",
    group: 45,
    marks: [4, 5, 6, 8, 3, 4],
  },
  {
    surName: "Babcock",
    name: "Arkasha",
    secondName: "Valerievich",
    group: 3,
    marks: [9, 8, 6, 3, 5],
  },
  {
    surName: "Barnes",
    name: "Tyoma",
    secondName: "Valerievich",
    group: 133,
    marks: [4, 5, 6, 8, 2],
  },
  {
    surName: "Birch",
    name: "Borya",
    secondName: "Valerievich",
    group: 2,
    marks: [4, 5, 7, 9],
  },
  {
    surName: "Carey",
    name: "Vadik",
    secondName: "Valerievich",
    group: 1,
    marks: [9, 8, 10, 7],
  },
];

function currentTime() {
  let date = new Date();
  let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  seconds < 10 ? (seconds = `0${seconds}`) : seconds;
  minutes < 10 ? (minutes = `0${minutes}`) : minutes;
  hours < 10 ? (hours = `0${minutes}`) : hours;

  hoursEl.textContent = `${hours}`;
  minutesEl.textContent = `${minutes}`;
  secondsEl.textContent = `${seconds}`;
}

setInterval(currentTime, 1000);

function printNumbers(from, to) {
  let currentNumber = from;
  let timer = setInterval(() => {
    console.log(currentNumber);
    if (currentNumber == to) {
      clearInterval(timer);
    }
    currentNumber++;
  }, 1000);
}

// printNumbers(5, 10);

class Student {
  constructor(surName, name, secondName, numberGroup, study, users) {
    this.surName = surName;
    this.name = name;
    this.secondName = secondName;
    this.numberGroup = numberGroup;
    this.study = study;
    this.users = users;
  }

  showAverageMark(marks) {
    let sum = marks.reduce((sum, item) => {
      return (sum += item);
    }, 0);

    return sum / marks.length;
  }

  showFullName() {
    return `${this.surName} ${this.name[0]}. ${this.secondName[0]}.`;
  }
  showGroup() {
    return this.numberGroup;
  }
}

let newUser = new Student(
  "Undro",
  "Vitaly",
  "Valerievich",
  13,
  [9, 8, 10, 7],
  users
);

fullName.textContent = `${newUser.showFullName()}`;
group.textContent = `${newUser.showGroup()}`;
marks.textContent = `Avverage marks: ${newUser.showAverageMark([9, 8, 10, 7])}`;

let newArr = [];

function sum(arr) {
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
}
