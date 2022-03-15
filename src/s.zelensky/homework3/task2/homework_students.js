class students {
    constructor(name, surname, patronymic, group_number, mathmarks) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.group_number = group_number;
        this.mathmarks = mathmarks;

        this.gpacount();
    }
    input() {
        console.log(this.name);
    }
    gpacount() {
        this.gpa = 0;
        for (let i = 0; i < this.mathmarks.length; i++) {
            this.gpa = this.gpa + this.mathmarks[i];
        }
        this.gpa = this.gpa / this.mathmarks.length
        return this.gpa.toFixed(1);
    }
    shownameandinitials() {
        //console.log(this.name + " " + this.surname[0] + " " + this.patronymic[0]);
        return this.name + " " + this.surname[0] + ". " + this.patronymic[0] + ". ";
    }
}
let namearray = [
    "Станислав", "Егор", "Даниил",
    "Артём", "Елисей", "Даниил",
    "Рауф", "Дмитрий", "Ахмед",
    "Айдын",
];
let surnamearray = [
    "Иванов", "Кузнецов", "Агафонов",
    "Быков", "Воробьев", "Глухов",
    "Гордеев", "Горшков", "Григорьев",
    "Гусев",
];
let patronymicarray = [
    "Юрьевич", "Даниилович", "Сергеевич",
    "Арсеньевич", "Ярославович", "Иванович",
    "Тимофеевич", "Денисович", "Егорович",
    "Степанович",
];
let classarray = [namearray.length];


function random() {
    return Math.floor((Math.random() * namearray.length));
}

function SortByAge() {
    let max;
    let check = true;
    while (check) {
        check = false;
        for (let i = 0; i < namearray.length - 1; i++) {
            if (classarray[i].gpa < classarray[i + 1].gpa) {
                max = classarray[i + 1].gpa;
                classarray[i + 1].gpa = classarray[i].gpa;
                classarray[i].gpa = max;
                check = true;
            }
        }
    }
}
for (let i = 0; i < namearray.length; i++) {
    let mathmarks = [10];
    for (let n = 0; n < namearray.length; n++) {
        mathmarks[n] = random();
    }
    const student = new students(namearray[random()], surnamearray[random()],
        patronymicarray[random()], "00" + Math.floor((Math.random() * 100)), mathmarks);
    classarray[i] = student;
}

SortByAge();
for (let i = 0; i < namearray.length; i++) {
    console.log("ФИО:" + classarray[i].shownameandinitials() + "группа №" +
        classarray[i].group_number + " средний балл:" + classarray[i].gpa);
}