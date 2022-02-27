class Student {
  constructor(surname, name, patronymic, groupNumber, progress) {
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.groupNumber = groupNumber;
    this.progress = progress;
  }

  countAverage() {
    let initialValue = 0;
    let result = this.progress.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return result / this.progress.length;
  }

  showSurname() {
    return (
      this.surname +
      " " +
      this.name.slice(0, 1) +
      "." +
      this.patronymic.slice(0, 1) +
      "."
    );
  }
}

let student1 = new Student(
  "Прошкина",
  "Валерия",
  "Александровна",
  "013",
  [7, 8, 9, 7, 8]
);
console.log(student1.name);
console.log(student1.surname);
console.log(student1.patronymic);
console.log(student1.groupNumber);
console.log(student1.progress);
console.log(student1.countAverage());
console.log(student1.showSurname());

let student2 = new Student(
  "Новик",
  "Ирина",
  "Николаевна",
  "013",
  [7, 8, 9, 7, 8]
);
let student3 = new Student(
  "Маслов",
  "Максим",
  "Александрович",
  "07",
  [6, 8, 6, 7, 6]
);
let student4 = new Student(
  "Варивончик",
  "Наталья ",
  "Викторовна",
  "013",
  [9, 8, 9, 9, 8]
);
let student5 = new Student(
  "Туровчик",
  "Анастасия",
  "Вячеславовна",
  "010",
  [7, 5, 9, 6, 8]
);
let student6 = new Student(
  "Хотин",
  "Константин",
  "Александрович",
  "07",
  [8, 8, 9, 7, 8]
);
let student7 = new Student(
  "Урбанович",
  "Виктория",
  "Викторовна",
  "013",
  [7, 8, 9, 7, 10]
);
let student8 = new Student(
  "Ряшко",
  "Валерия",
  "Александровна",
  "010",
  [7, 8, 6, 7, 8]
);
let student9 = new Student(
  "Меренкова",
  "Анна",
  "Сергеевна",
  "011",
  [7, 7, 9, 7, 7]
);
let student10 = new Student(
  "Якушев",
  "Антон",
  "Олегович",
  "013",
  [7, 8, 7, 7, 8]
);

let array = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10,
];
console.log(array);

toConsole(array);

function toConsole(array) {
  array
    .sort((a, b) => {
      return b.countAverage() - a.countAverage();
    })
    .forEach((student) => {
      console.log(
        student.showSurname(),
        student.groupNumber,
        student.countAverage().toFixed(1)
      );
    });
}
