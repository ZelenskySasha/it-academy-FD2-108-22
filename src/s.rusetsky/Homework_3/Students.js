class Student {
  constructor(secondName, name, otchestvo, groupNumber, mark) {
    this.secondName = secondName;
    this.name = name;
    this.otchestvo = otchestvo;
    this.groupNumber = groupNumber;
    this.mark = mark;
  }

  avarageMark() {
    let avgMark = 0;
    this.mark.forEach(i => {
      avgMark = avgMark + i;
    });
    return avgMark / this.mark.length;
  }

  outputFio() {
    let str1 = this.secondName;
    let str2 = this.name;
    let str3 = this.otchestvo;

    str2 = str2.slice(0, 1);
    str3 = str3.slice(0, 1);
    return str1 + ' ' + str2 + '.' + str3 + '.';
  }
}

const students = [
  new Student('Шейко', 'Максим', 'Эдуардович', 'P44', [8, 6, 2, 4]),
  new Student('Русецкий', 'Павел', 'Олегович', 'P44', [7, 6, 5, 4]),
  new Student('Герасимов', 'Гена', 'Владимирович', 'P33', [8, 9, 3, 2]),
  new Student('Иванов', 'Иван', 'Владимирович', 'P11', [1, 2, 3, 4]),
];

for (let student of students) {
  console.log(
    student.outputFio() +
      ' ' +
      student.groupNumber +
      ' ' +
      student.avarageMark()
  );
}
