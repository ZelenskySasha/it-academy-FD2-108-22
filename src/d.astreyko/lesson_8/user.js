class User {
  name;
  age = 18;

  constructor(name, age) {
    this.age = age;
  }

  getFio() {
    return this.name + this.age;
  }
  getFio2(text) {
    return text +  this.name + this.age;
  }
}

let user1 = new User();

user1.name = 'dima';

console.log(user1.getFio());

