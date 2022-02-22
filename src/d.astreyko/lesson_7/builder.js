const user = {
  setName(name) {
    this.name = name;
    return this;
  },
  setSecondName(secondName) {
    this.secondName = secondName;
    return this;
  },
  setAge(age) {
    this.age = age;
    return this;
  }
};
user.setName('Вася')
  .setSecondName('Иванов')
  .setAge(25);

user.setName('Вася')
user.setSecondName('Иванов');
user.setAge(23);

console.log(user);
