
class Student {
    constructor(surname, name, patronymic, group, mark) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.group = group;
        this.mark = mark;
    }
    middleMark() {
        let count = 0;
        let result = this.mark.reduce((accum, currentValue) => accum + currentValue, count)
        return result / this.mark.length
    }
    abbreviation() {
        return this.surname + " " + this.name[0] + ". " + this.patronymic[0] + '.';
    }
}

let allUsers = [
    new Student("Иванов", "Дмитрий", "Петрович", 1001, [8, 5, 9, 10, 9]),
    new Student("Климук", "Мирослав", "Александрович", 1001, [7, 5, 3, 10, 5]),
    new Student("Петров", "Владимир", "Сергеевич ", 1001, [3, 2, 1, 6, 5]),
    new Student("Аюпов", "Тихомир", "Дмитриевич", 1001, [10, 10, 6, 9, 5]),
    new Student("Сергеюк", "Ратибор", "Никитич ", 1001, [7, 7, 7, 4, 9]),
    new Student("Меньшин", "Ярополк", "Игоревич", 1001, [7, 4, 3, 5, 5]),
    new Student("Савицкий", "Всеволод", "Александрович", 1001, [6, 5, 3, 7, 5]),
    new Student("Лобынич", "Богдан", "Дмитриевич", 1001, [10, 10, 10, 10, 10]),
    new Student("Олейник", "Вадим", "Сергеевич", 1001, [9, 9, 9, 9, 9]),
    new Student("Федоров", "Петр", "Никитич", 1001, [8, 8, 8, 8, 8]),

]
allUsers.sort((a,b)=>{
	return b.middleMark() - a.middleMark() ;
})

for (const student of allUsers) {
	console.log(student.abbreviation() + ' ' + student.group + ' ' + student.middleMark());
} 
