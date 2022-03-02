class Student {
    constructor(name, name2, surname, numGroup, grade) {
    this.name = name;
    this.name2 = name2;
    this.surname = surname;
    this.numGroup = numGroup;
    this.grade = grade;
    }
    aМark() {
        let accum = 0;
        for (let i =0; i < this.grade.length; i++) {
            accum = accum + this.grade[i];
        }
        return accum / this.grade.length;
        // let aveMark = arr.reduce((sum, mark) => sum + mark, 0);
    }
    fio() {
        return this.surname + this.name.substr(0, 1) + '.' + this.name2.substr(0, 1) + '.';
    }
    toConsole(){
        console.log(this.fio() + this.aМark())
    }

}

let user = new Student('Артем', 'Александрович', 'Коннов', '31', [5,6,7,8,9,4,5,6,7,8,9,1]);
let user2 = new Student('Артем2', 'Александрович2', 'Коннов2', '312', [6,6,7,7,9,5,5,9,7,8,6,1]);
let user3 = new Student('Артем3', 'Александрович3', 'Коннов3', '313333', [6,6,4,7,9,5,2,9,8,8,6,1]);
let user4 = new Student('Артем4', 'Александрович4', 'Коннов4', '314444', [6,6,7,3,9,5,5,2,7,8,6,1]);
let user5 = new Student('Артем5', 'Александрович5', 'Коннов5', '312555', [6,5,7,2,9,5,2,9,2,8,2,1]);
let arra = [user, user2, user3, user4, user5];

function result(students2) {
    students2.sort((a,b)=>a.aМark()-b.aМark())
    .forEach(student=>student.toConsole())
}
result(arra);