class Student { 
  constructor(surname, name, patronymic, groupnumber, scoreaArray) {
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.groupnumber = groupnumber;
    this.scoreaArray = scoreaArray;
  }
  
  mark(){
    return this.scoreaArray.reduce((a, b) => (a + b)) / this.scoreaArray.length;
  };

  surnameInitials(){
   return this.surname + " " + this.name[0] + "." + this.patronymic[0]
  };
}

const user1 = new Student("Иванов", "Иван", "Иванович", "№1", [5, 2, 4, 2]);
const user2 = new Student("Петров", "Константин", "Петрович", "№2", [9, 9, 4, 5]);
const user3 = new Student("Сидоров", "Виктор", "Сергеевич", "№3", [2, 9, 4, 5]);
const user4 = new Student("Петров", "Пётр", "Петрович", "№4", [9, 7, 9, 5]);
const user5 = new Student("Петухов", "Юрий", "Васильевич", "№5", [8, 9, 4, 6]);

let result = []

let users = [user1, user2, user3, user4, user5]
 
for(let i = 0; i < users.length; i++){
    users.sort((a,b)=>a.mark()-b.mark())
    result.push(users[i].surnameInitials() + ' Группа: ' + users[i].groupnumber + ' Средний балл: ' + users[i].mark() )
  }

console.log(result)





  