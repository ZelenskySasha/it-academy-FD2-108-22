let user = {
  name: 'Джон',
  age: 30,

  sayHi() {
    // this - это "текущий объект"
    console.log(this.name);
  }

};

user.sayHi(); // Джон
user.name = 'Петя';

user.sayHi();


const user1 = {
  name: 'user1',
  hello(text, text2) {
    console.log(text + ' ' + text2 + ' ' + this.name);
  }
};
const user2 = {
  name: 'user2',
  hello(text, text2) {
    console.log(text + ' ' + text2 + ' ' + this.name);
  }
};

// user1.hello('hello', 'text2 ');
// user2.hello('hello', 'text2 ');
// user2.hello.call(user1, 'hello call', 'text2 call');
// user2.hello.apply(user1, ['hello apply', 'text2 ']);
const hello = user2.hello.bind(user1 ,'hello call', 'text2 call')
hello();
user2.hello('hello', 'text2 ');
