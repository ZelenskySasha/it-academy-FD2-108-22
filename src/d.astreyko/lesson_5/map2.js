let vasya = {
  name: 'Вася',
  age: 25
};
let petya = {
  name: 'Петя',
  age: 30
};
let masha = {
  name: 'Маша',
  age: 29
};

let users = [vasya, petya, masha];
['Вася', 'Петя', 'Маша'];
console.log(users.filter(user => user.age >= 28));
//
// let names = users.map((user) => {
//   return user.name;
// });
// console.log(names);
