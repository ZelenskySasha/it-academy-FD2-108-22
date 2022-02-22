function createUser() {
  console.log(!!new.target);
}

let user = createUser();
console.log(user);

user = new createUser();
console.log(user);
