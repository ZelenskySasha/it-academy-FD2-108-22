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
let masha2 = {
  name: 'Маша',
  age: 30
};

let users = [petya, vasya, masha2, masha];

const sortedUsers = users.sort((userA, userB) => {
  return userA.age - userB.age;
});

console.log(sortedUsers);
