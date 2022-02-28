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

class Student {
  constructor(surName, name, secondName, numberGroup, marks) {
    this.surName = surName;
    this.name = name;
    this.secondName = secondName;
    this.numberGroup = numberGroup;
    this.marks = marks;
  }

  showAverageMark() {
    return (
      this.marks.reduce((sum, item) => {
        return (sum += item);
      }, 0) / this.marks.length
    ).toFixed(2);
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
console.log(newUser.showFullName());
console.log(newUser.showGroup());
console.log(newUser.showAverageMark([9, 8, 10, 7]));

let arrUsers = [];

for (let i = 0; i < users.length; i++) {
  arrUsers.push(
    new Student(
      users[i].surName,
      users[i].name,
      users[i].secondName,
      users[i].group,
      users[i].marks
    )
  );
}
arrUsers.sort((a, b) => b.showAverageMark() - a.showAverageMark());

for (let user of arrUsers) {
  console.log(
    `${user.showFullName()} ${user.showGroup()} ${user.showAverageMark()}`
  );
}
