class Student{
    constructor(surname, name, fathername, group, mark){
        this.surname = surname;
        this.name = name;
        this.fathername = fathername;
        this.group = group;
        this.mark = mark;
    }
    /* methods */
    middleMark(){
        let count = 0;
        let sumMark = this.mark.reduce((acum, value) => acum + value, count);
        return sumMark/this.mark.length;
    }
    initials(){
        return this.name + " " + this.name[0] + "." + this.fathername[0] +"."; 
    }
}



const allStudents = [
    new Student("Иванов", "Иван", "Иванович", 323, [1,7,10,3,9, 10]),
    new Student("Петров", "Влаеря", "Алексеевич", 32, [1,7,4,8,2, 1, 0]),
    new Student("Вас", "ИС", "Дас", 33, [1,1,10,8,2]),
    new Student("Туц", "Иван", "Сергеевич", 3, [1,7,1,8,2, 8]),
    new Student("Тыц", "Иван", "Иванович", 32, [1,7,5,8,1, 6, 1, 10]),

];


allStudents.sort((a, b) => {
    return b.middleMark() - a.middleMark();
});



for (const student of allStudents){
    console.log(student.initials() + student.group + " " + Math.round(student.middleMark()));
}









