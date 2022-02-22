function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user1 = {
  name: 'Bujh',
  isAdmin: false,
};

const user = new User('igor');
const user2 = new User('igor2');

console.log(user);
console.log(user2);

